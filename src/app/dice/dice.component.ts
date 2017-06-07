import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {

  @Input() diceNumber: number;
  selected: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    //console.log("clicked on selected");
    this.selected = !this.selected;
  }

}
