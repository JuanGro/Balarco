import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from './login.service';
import { HttpService } from '../shared/http-service/http.service';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Interface
import { Login } from './login';
import { Token } from './token';

@Component({
  selector: 'login-complex-form',
  templateUrl: 'login.complexform.html'
})
export class LoginComplexFormComponent {
  loginForm: FormGroup;
  loginObject = new Login();
  token: Token;

  constructor(fb: FormBuilder, private loginService: HttpService) {
    this.loginForm = fb.group({
      'username': '',
      'password': ''
    });
    this.login();
  }

  login() {
    this.loginService.login('username', 'password').subscribe(result => {
      if (result == true) {
        // Login succesful
      } else {
        // Login failed
      }
    });
  }
}
