import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { YahtzeeBoard } from '../yahtzee-board';
import { YahtzeeService } from '../yahtzee.service';

@Component({
  selector: 'app-yahtzee',
  templateUrl: './yahtzee.component.html'
})
export class YahtzeeComponent implements OnInit {

  title: string = "waiting for yahtzee server...";
  yahtzeeBoard: YahtzeeBoard;
  user: string;

  constructor(
    private yahtzeeService:YahtzeeService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.onUserResolved(this.route.snapshot.paramMap.get('user'));
    this.yahtzeeService.testPing().then(
      ping => this.onReceivedPing(ping.message));
    this.yahtzeeService.currentParty().then(
      yahtzeeBoard => this.onReceivedCurrentParty(yahtzeeBoard));
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
