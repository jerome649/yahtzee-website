import { Component, OnInit, Input } from '@angular/core';

import { YahtzeeBoard } from '../yahtzee-board';
import { YahtzeeService } from '../yahtzee.service';
import { SpinnerService } from '../spinner.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-dices',
  templateUrl: './dices.component.html'
})
export class DicesComponent implements OnInit {

  user: string;
  @Input() yahtzeeBoard: YahtzeeBoard;

  constructor(
    private yahtzeeService: YahtzeeService,
    private spinnerService: SpinnerService,
    private authenticationService: AuthenticationService
  ) {
    this.user = authenticationService.getEmail();
  }

  ngOnInit() {
  }

  throw(d1, d2, d3, d4, d5) {
    this.spinnerService.activate(true);
    let bKeep = [d1, d2, d3, d4, d5];
    let keep = [];
    for (let i = 0; i < bKeep.length; i++) {
      if (bKeep[i]) {
        keep.push(i);
      }
    }
    this.yahtzeeService.throw(keep).then(
      data => console.log(data)
    );
  }

}
