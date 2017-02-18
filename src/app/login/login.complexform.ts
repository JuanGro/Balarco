import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from './login.service';
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

  constructor(fb: FormBuilder, private loginService: LoginService) {
    this.loginForm = fb.group({
      'username': '',
      'password': ''
    });

    this.submitForm('any');
  }

  submitForm(value: any): void {
    console.log('Reactive form');
    console.log(value);
    let loginOperation: Observable<Token>;
    loginOperation = this.loginService.sendLoginData(this.loginObject);

    loginOperation.subscribe(
      res => {
        this.token = res;
        console.log('Request finished');
        console.log(this.token);
      }
    );
  }
}
