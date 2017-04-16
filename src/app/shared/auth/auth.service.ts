import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
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
  canActivate(route: ActivatedRouteSnapshot): boolean {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      if (route.data['roles']) {
        let roles = route.data['roles'] as Array<number>;
        return this.shareAtLeastOneElement(currentUser.roles, roles);
      } else {
        return true;
      }
    } else {
      this.router.navigate(['/login/login']);
      return false;
    }
  }

  /**
  * Method to check if two arrays share at least one element.
  * Params:
  *   - a1: Array 1
  *   - a2: Array 2
  * Returns:
  *   - true if they share at least one element.
  **/
  private shareAtLeastOneElement(a1: number[], a2: number[]): boolean {
    for (let e of a1) {
      if (a2.indexOf(e) !== -1) {
        return true;
      }
    }
    return false;
  }
}
