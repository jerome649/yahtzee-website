import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YahtzeeComponent }   from './yahtzee/yahtzee.component';
import { YahtzeeLoginComponent } from './yahtzee-login/yahtzee-login.component';

const routes: Routes = [
  { path: '', redirectTo: '/yahtzee-login', pathMatch: 'full' },
  { path: 'yahtzee-login',  component: YahtzeeLoginComponent },
  { path: 'yahtzee/:user',  component: YahtzeeComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
