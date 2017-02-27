import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../shared/http-service/http.service';
import { CustomToastService } from '../shared/toast/custom-toast.service';

// Interface
import { Login } from './login';

@Component({
  selector: 'login-complex-form',
  templateUrl: 'login.complexform.html'
})
export class LoginComplexFormComponent implements OnInit {
  public loginForm: FormGroup;
  public loginObject: Login[];
  // Forms
  public submitted: boolean; // keep track on whether form is submitted
  public events: any[] = []; // use later to display form changes

  constructor(private loginService: HttpService, private router: Router, private toaster: CustomToastService) { }

  ngOnInit() {
    let emailRegex = '[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`\
                      {|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?';
    this.loginForm = new FormGroup({
      username: new FormControl('', [<any>Validators.required, <any>Validators.pattern(emailRegex)]),
      password: new FormControl('', [<any>Validators.required, <any>Validators.minLength(6)])
    });
  }

  submitForm(model: Login, isValid: boolean) {
    this.toaster.showSuccessToast('Yeah');
    this.loginService.login(model.username, model.password).subscribe(result => {
      if (result === true) {
        // Login succesful
        this.router.navigateByUrl('designer/owned-designs-list'); // Mock dashboard route.
      } else {
        // Login failed
      }
    });
  }
}
