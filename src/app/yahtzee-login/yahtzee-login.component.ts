import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

declare const gapi: any;

@Component({
  selector: 'app-yahtzee-login',
  templateUrl: './yahtzee-login.component.html'
})
export class YahtzeeLoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  public auth2: any;

  public googleInit() {
    let that = this;
    gapi.load('auth2', function () {
      that.auth2 = gapi.auth2.init({
        client_id: '1027462915747-vq7v5nniiq3m2ef5k3hs0plgd9mmoqmb.apps.googleusercontent.com',
        scope: 'profile email'
      });
      that.auth2.currentUser.listen(function(user) {
        //console.log('userChanged || ' + user.getAuthResponse().id_token);
        //console.log(user.getAuthResponse());
        let profile = user.getBasicProfile();
        that.authenticationService.setToken(user.getAuthResponse().id_token);
        that.authenticationService.setEmail(profile.getEmail());
      });
      that.attachSignin(document.getElementById('googleBtn'));
    });
  }

  public attachSignin(element) {
    let that = this;
    this.auth2.attachClickHandler(element, {},
      function (googleUser) {
        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        //console.log('Email: ' + profile.getEmail());
      }, function (error) {
        alert(JSON.stringify(error, undefined, 2));
      });
  }

  ngAfterViewInit(){
    this.googleInit();
  }
}
