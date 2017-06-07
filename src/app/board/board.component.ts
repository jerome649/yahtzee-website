import { Component, OnInit, Input } from '@angular/core';
import { YahtzeeBoard } from '../yahtzee-board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html'
})
export class BoardComponent implements OnInit {

  @Input() yahtzeeBoard: YahtzeeBoard;
  @Input() user: string;

  constructor() { }

  ngOnInit() {
  }

}
