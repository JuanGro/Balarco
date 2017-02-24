import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class CanActivateAuthGuard implements CanActivate {

  constructor(private router: Router) { }

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
