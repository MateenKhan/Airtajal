import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  public isUserLoggedIn = false;
  
  // public set userLoggedIn(flag){
  //   this.isUserLoggedIn = flag;
  // }
}
