import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YahtzeeComponent }   from './yahtzee/yahtzee.component';
import { YahtzeeLoginComponent } from './yahtzee-login/yahtzee-login.component';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  { path: '', redirectTo: '/yahtzee-login', pathMatch: 'full' },
  { path: 'yahtzee-login',  component: YahtzeeLoginComponent },
  { path: 'yahtzee',  component: YahtzeeComponent, canActivate: [AuthenticationGuard] }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
