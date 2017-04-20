import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';

// Components
import { Login } from './login';

// Services
import { HttpService } from './../shared/http-service/http.service';
import { CustomToastService } from '../shared/toast/custom-toast.service';

// Environment
import { environment } from '../../environments/environment';

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

    constructor(private httpService: HttpService, private toaster: CustomToastService) {}

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
        console.log(object.username);
        form.reset();
        this.requestShowSuccessfulModal();
        this.httpService.postObject(environment.RECOVER_PASSWORD_URL, object.username).subscribe(result => {
            if (result.ok) {
            //   let newClient = new Client(result.json());
            //   this.clientCreated.emit(newClient);
              this.toaster.show(result, 'Éxito', 'éxito');
            }
            console.log(result);
        },
        error => {
          this.toaster.show(error, 'Error', 'Ocurrió un error');
        });
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
