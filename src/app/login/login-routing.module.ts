import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanActivateAuthGuard } from '../shared/auth/auth.service';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [CanActivateAuthGuard],
    data: {
      title: 'Login'
    },
    children: [
      {
        path: 'login',
        component: LoginComponent,
        data: {
          title: 'Login'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
