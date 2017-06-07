import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import { YahtzeeBoard } from './yahtzee-board';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class YahtzeeService {

  private webApiUrl = "http://localhost:3000";
  //private webApiUrl = "http://yahtzeeapi649.azurewebsites.net:80";

  constructor(private http: Http) { }

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

  public validate(user: string, playedItem: string) {
    const url = `${this.webApiUrl}/validate`;

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let bodyString = JSON.stringify({"user": user, "playedItem": playedItem});

    return this.http
      .post(url, bodyString, options)
      .toPromise()
      .then((response) => response.json())
      .catch(this.handleError);
  }

  public throw(user: string, keeps) {
    const url = `${this.webApiUrl}/throw`;

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let bodyString = JSON.stringify({"user": user, "keeps": keeps});

    return this.http
      .post(url, bodyString, options)
      .toPromise()
      .then((response) => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
