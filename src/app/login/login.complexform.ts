import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { URLSearchParams } from '@angular/http';

// Services
import { HttpService } from '../shared/http-service/http.service';
import { CustomToastService } from '../shared/toast/custom-toast.service';

// Class
import { Login } from './login';

// Environment
import { environment } from '../../environments/environment';

@Component({
  selector: 'login-complex-form',
  templateUrl: 'login.complexform.html'
})
export class LoginComplexFormComponent implements OnInit {
  // Initialization of control form.
  public loginForm: FormGroup;
  // Variable to active the form.
  public active: boolean = true;
  // Login object for the ngForm handle.
  public login: Login;
  // Variable for recover title modal
  public titleRecoverPassword: string = 'Recover password';

  constructor(private loginService: HttpService, private router: Router, private toaster: CustomToastService) { }

  /**
  * Builds the component for first time each time when it's called.
  *   - Initialize the login object for the form.
  **/
  ngOnInit() {
    this.login = new Login();
  }

  /**
  * Method for sending the login request to the server.
  * If login succesful, the user enters to the dashboard.
  * If login failed, a toast is show as feedback.
  * Params:
  *   - model: Login object for login.
  **/
  submitLoginForm(model: Login) {
    this.loginService.login(model.username, model.password).subscribe(
      result => {
        if (result === true) {
          this.setCurrentUserRoles(model.username);
        }
      },
      error => {
        this.toaster.show(error, 'Error al ingresar', 'Usuario o contraseña incorrectos');
      });
  }

  /**
  * Method to get the complete current user from API and set the roles.
  * Params:
  *   - username: Username of current user.
  **/
  private setCurrentUserRoles(username: string) {
    let params = new URLSearchParams();
    params.set('username', username);
    this.loginService.getObject(environment.USERS_URL, params)
                     .map((data: any) => data.json())
                     .subscribe(usersList => {

                       if (usersList.length === 1) {
                         let groupNames: string[] = [];
                         for (let group of usersList[0].groups_complete) {
                           groupNames.push(group.name);
                         }
                         this.loginService.setUserRoles(groupNames);
                         this.router.navigateByUrl('designer/owned-designs-list'); // Mock dashboard route.
                       }
                     });
  }
}
