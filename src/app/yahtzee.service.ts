import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import { YahtzeeBoard } from './yahtzee-board';
import { AuthenticationService } from './authentication.service';

import 'rxjs/add/operator/toPromise';

import { environment } from '../environments/environment';

@Injectable()
export class YahtzeeService {

  private webApiUrl = environment.webApiUrl;

  constructor(
    private http: Http,
    private authenticationService: AuthenticationService
  ) { }

  public testPing() {
    const url = `${this.webApiUrl}/ping`;
    return this.http
      .get(url)
      .toPromise()
      .then((response) => response.json())
      .catch(this.handleError);
  }

  public currentParty(): Promise<YahtzeeBoard> {
    const url = `${this.webApiUrl}/currentParty`;
    return this.http
      .get(url)
      .toPromise()
      .then((response) => response.json() as YahtzeeBoard)
      .catch(this.handleError);
  }

  public validate(playedItem: string) {
    const url = `${this.webApiUrl}/validate`;

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let bodyString = JSON.stringify(
      {
        "token": this.authenticationService.getToken(),
        "playedItem": playedItem
      }
    );

    return this.http
      .post(url, bodyString, options)
      .toPromise()
      .then((response) => response.json())
      .catch(this.handleError);
  }

  public throw(keeps) {
    const url = `${this.webApiUrl}/throw`;

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let bodyString = JSON.stringify(
      {
        "token": this.authenticationService.getToken(),
        "keeps": keeps
      }
    );

    return this.http
      .post(url, bodyString, options)
      .toPromise()
      .then((response) => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
