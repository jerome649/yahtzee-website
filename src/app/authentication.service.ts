import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  private isLogged = false;
  private token: string;
  private email: string;

  constructor() { }

  public isLoggedIn() {
    return this.isLogged;
  }

  public setToken(token: string) {
    this.isLogged = true;
    this.token = token;
  }

  public getToken():string {
    return this.token;
  }

  public setEmail(email: string) {
    this.email = email;
  }

  public getEmail():string {
    return this.email;
  }

}
