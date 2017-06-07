import { Component, OnInit, Input } from '@angular/core';
import { ItemScore } from '../item-score';

import { YahtzeeService } from '../yahtzee.service';
import { YahtzeeBoard } from '../yahtzee-board';

@Component({
  selector: 'app-item-score',
  templateUrl: './item-score.component.html'
})
export class ItemScoreComponent implements OnInit {

  @Input() itemScore: ItemScore;
  @Input() user: string;
  @Input() columnUser: string;
  @Input() yahtzeeBoard: YahtzeeBoard;

  constructor(private yahtzeeService: YahtzeeService) { }

  ngOnInit() {
  }

  isPlayerColumn() {
    return this.columnUser.toLowerCase() == this.yahtzeeBoard.player.toLowerCase();
  }

  isPlayer() {
    return this.user.toLowerCase() == this.yahtzeeBoard.player.toLowerCase();
  }

  onClick() {
    this.yahtzeeService.validate(this.user, this.itemScore.name)
      .then(data => console.log(data));
  }

}
