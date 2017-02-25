import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

/**
* Class that deals with redirect to login if user tries to
* access any route without being logged in.
**/
@Injectable()
export class CanActivateAuthGuard implements CanActivate {

  constructor(private router: Router) { }

  /**
  * Overrides abstract methods that grants the permison to access a url
  * if token is stored in Angular Local Storage.
  **/
  canActivate(): boolean {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      return true;
    } else {
      this.router.navigate(['/login/login']);
      return false;
    }
  }
}
