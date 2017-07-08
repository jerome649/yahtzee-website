import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { YahtzeeBoard } from '../yahtzee-board';
import { YahtzeeService } from '../yahtzee.service';
import { SpinnerService } from '../spinner.service';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-yahtzee',
  templateUrl: './yahtzee.component.html'
})
export class YahtzeeComponent implements OnInit, OnDestroy {

  title: string = "waiting for yahtzee server...";
  yahtzeeBoard: YahtzeeBoard;
  user: string;
  private webSocket;
  loading: boolean;
  private subscription;

  constructor(
    private yahtzeeService:YahtzeeService,
    private spinnerService:SpinnerService,
    private route: ActivatedRoute) {
      this.subscription = spinnerService.isLoadingObs.subscribe(
        loading => { this.loading = loading; });
    }

  ngOnInit() {
    this.onUserResolved(this.route.snapshot.paramMap.get('user'));
    this.yahtzeeService.testPing().then(
      ping => this.onReceivedPing(ping.message));
    this.yahtzeeService.currentParty().then(
      yahtzeeBoard => this.onReceivedCurrentParty(yahtzeeBoard));
    this.webSocket = new WebSocket(environment.webSocketUrl);
    var self = this;
    this.webSocket.onmessage = function (event) {
      var updatedYahtzeeBoard = JSON.parse(event.data);
      self.yahtzeeBoard = updatedYahtzeeBoard;
      self.spinnerService.activate(false);
    }

  }

  ngOnDestroy() {
    this.webSocket.close();
    this.subscription.unsubscribe();
  }

  onReceivedPing(message) {
    this.title = message;
  }

  onReceivedCurrentParty(yahtzeeBoard) {
    this.yahtzeeBoard = yahtzeeBoard;
  }

  onUserResolved(user) {
    this.user = user;
  }

}
