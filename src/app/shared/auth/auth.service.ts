import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

// Models
import { CurrentUser } from '../current-user/current-user-model';
// Enum
import { Role } from './role';
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
    let currentUserJSON = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUserJSON) {
      if (route.data['roles']) {
        let currentUser = new CurrentUser(currentUserJSON);
        let roles = route.data['roles'] as Role[];
        return currentUser.hasRole(roles);
      } else {
        return true;
      }
    } else {
      this.router.navigate(['/login/login']);
      return false;
    }
  }
}
