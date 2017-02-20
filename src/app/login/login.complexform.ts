import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Observable } from 'rxjs/Rx';

// Interface
import { Login } from './login';
import { Token } from './token';

@Component({
  selector: 'login-complex-form',
  templateUrl: 'login.complexform.html'
})
export class LoginComplexFormComponent implements OnInit {
  public loginForm: FormGroup;
  public loginObject: Login[];
  public token: Token;
  // Forms
  public submitted: boolean; // keep track on whether form is submitted
  public events: any[] = []; // use later to display form changes

  constructor(private _fb: FormBuilder, private loginService: LoginService) { }

  ngOnInit() {
    let emailRegex = '[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?';
    this.loginForm = new FormGroup({
      username: new FormControl('', [<any>Validators.required, <any>Validators.pattern(emailRegex)]),
      password: new FormControl('', [<any>Validators.required, <any>Validators.minLength(6)])
    });
  }

  submitForm(model: Login, isValid: boolean): void {
    this.submitted = true;
    console.log('Reactive form');
    console.log(model);

    let loginOperation: Observable<Token> = this.loginService.sendLoginData(this.loginObject);

    loginOperation.subscribe(
      res => {
        this.token = res;
        console.log('Request finished');
        console.log(this.token);
      }
    );
  }
}
