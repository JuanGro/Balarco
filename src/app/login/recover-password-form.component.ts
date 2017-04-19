import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

// Components
import { Login } from './login';

@Component({
    selector: 'recover-password-form',
    templateUrl: 'recover-password-form.component.html'
})
export class RecoverPasswordFormComponent implements OnInit {
    // Login object for the ngForm handle.
    public recoverPassword: Login;

    /**
      * Builds the component for first time each time when it's called.
      *   - Initialize the recoverPassword object for the form.
      **/
    ngOnInit() {
        this.recoverPassword = new Login();
    }

    /**
      * Method for sending the username to request password and reset the form.
      * Params:
      *   - object: Takes the username from form.
      **/
    submitRecoverPasswordForm(form: NgModel, object: Login) {
        console.log(object);
        form.reset();
    }
}
