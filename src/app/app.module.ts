import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent }   from './board/board.component';
import { YahtzeeComponent } from './yahtzee/yahtzee.component';
import { DicesComponent } from './dices/dices.component';
import { YahtzeeService } from './yahtzee.service';
import { YahtzeeLoginComponent } from './yahtzee-login/yahtzee-login.component';
import { DiceComponent } from './dice/dice.component';
import { ItemScoreComponent } from './item-score/item-score.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    YahtzeeComponent,
    DicesComponent,
    YahtzeeLoginComponent,
    DiceComponent,
    ItemScoreComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    YahtzeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
