import { Component, OnInit, Input } from '@angular/core';
import { ItemScore } from '../item-score';

import { YahtzeeService } from '../yahtzee.service';
import { YahtzeeBoard } from '../yahtzee-board';
import { SpinnerService } from '../spinner.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-item-score',
  templateUrl: './item-score.component.html'
})
export class ItemScoreComponent implements OnInit {

  @Input() itemScore: ItemScore;
  user: string;
  @Input() columnUser: string;
  @Input() yahtzeeBoard: YahtzeeBoard;

  constructor(
    private yahtzeeService: YahtzeeService,
    private spinnerService: SpinnerService,
    private authenticationService: AuthenticationService) {
    this.user = authenticationService.getEmail();
  }

  ngOnInit() {
  }

  isPlayerColumn() {
    return this.columnUser.toLowerCase() == this.yahtzeeBoard.player.toLowerCase();
  }

  isPlayer() {
    return this.user.toLowerCase() == this.yahtzeeBoard.player.toLowerCase();
  }

  onClick() {
    this.spinnerService.activate(true);
    this.yahtzeeService.validate(this.itemScore.name)
      .then(data => console.log(data));
  }

}
