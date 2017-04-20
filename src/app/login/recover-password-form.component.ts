import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
    // Variable to check in test what action is executed between components.
    public modalAction: string = '';
    // Requests close of the current modal to parent component.
    @Output() requestCloseModal: EventEmitter<string> = new EventEmitter();
    // Requests to show succesful modal if it's necessary.
    @Output() passwordRecovered: EventEmitter<string> = new EventEmitter();

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
        this.requestShowSuccessfulModal();
    }

    /**
      * Requests to parent component to close the current modal.
      **/
    public requestCloseThisModal() {
        this.modalAction = 'Close modal';
        this.requestCloseModal.emit(this.modalAction);
    }

    /**
      * Requests to parent component to close the current modal.
      **/
    public requestShowSuccessfulModal() {
        this.modalAction = 'Show successful modal';
        this.passwordRecovered.emit(this.modalAction);
    }

    /**
      * Initialize the form close it.
      **/
    public cancelForm(form: NgModel) {
        form.reset();
    }
}
