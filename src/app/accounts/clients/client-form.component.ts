import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';

// Class
import { Client } from './client-model';

// Services
import { HttpService } from './../../shared/http-service/http.service';
import { CustomToastService } from '../../shared/toast/custom-toast.service';

// Environment
import { environment } from '../../../environments/environment';

@Component({
  selector: 'client-form',
  templateUrl: 'client-form.component.html'
})
/**
* Component which manage the forms for update and create a client:
* - Use OnChanges feature because it's important to know if the user opens a new modal or update modal depending
* in the client object value, the component is listening for each change in that variable.
* - Initialize form.
* - Create validations.
* - Request save the client.
* - Request actions in modals to the parent component.
**/
export class ClientFormComponent implements OnChanges {
  // Receives the client selected by the user or the empty object to know if is called the update or create client form.
  @Input() client: Client;
  // Requests close of the current modal to parent component.
  @Output() requestCloseModal: EventEmitter<string> = new EventEmitter();
  // Requests to parent component the show of the danger modal to confirm if the client is permanent removed.
  @Output() requestWarning: EventEmitter<string> = new EventEmitter();
  // Event for parent to push the new Client to the list.
  @Output() clientCreated: EventEmitter<Client> = new EventEmitter();
  // Event for parent to update the currentClient.
  @Output() clientUpdated: EventEmitter<Client> = new EventEmitter();
  // Variable to check if the submitForm method finish correctly.
  public success: boolean = false;
  // Variable to check in test what action is executed between components.
  public modalAction: string = '';
  // Variable to return the old client if cancel the update form
  public oldClient: Client;

  public constructor(private httpService: HttpService, private toaster: CustomToastService) { }

  /**
  * Builds the component for first time each time when it's called.
  *   - Initialize the form depending if the new or update client form is called.
  **/
  public ngOnChanges() {
    if (!this.client) {
      this.client = new Client();
      this.oldClient = new Client();
    } else {
      this.oldClient = new Client(this.client);
    }
  }

  /**
  * Executes the submitUpdatedClient or submitNewClient depending if the client received when the modal was called is empty or not.
  * Params:
  *   - object: Client object received from modal.
  **/
  public submitClientForm(form: NgModel, object: Client) {
      if (this.client.id) {
        // Update client
        this.submitUpdatedClient(object, this.client.id);
      } else {
        // Create client
        this.submitNewClient(object);
      }
      form.control.markAsUntouched();
      this.success = true;
  }

  /**
  * Requests to the Backend service to update the client selected by the user.
  * Params:
  *   - object: A Client object.
  * Returns:
  *   - result: Response from backend service to know if the operation was success or not.
  **/
  public submitUpdatedClient(object: Client, id: number) {
    this.httpService.updateObject(environment.CLIENTS_URL + id + '/', object).subscribe(result => {
        if (result.ok) {
          let updatedClient = new Client(result.json());
          this.clientUpdated.emit(updatedClient);
          this.toaster.show(result, 'Cliente actualizado', 'El cliente se actualizó con éxito');
        }
    },
    error => {
      this.toaster.show(error, 'Error', 'Ocurrió un error al guardar el cliente');
    });
  }

  /**
  * Requests to the Backend service to create the new client.
  * Params:
  *   - object: A Client object.
  * Returns:
  *   - result: Response from backend service to know if the operation was success or not.
  **/
  public submitNewClient(object: Client) {
    this.httpService.postObject(environment.CLIENTS_URL, object).subscribe(result => {
        if (result.ok) {
          let newClient = new Client(result.json());
          this.clientCreated.emit(newClient);
          this.toaster.show(result, 'Cliente guardado', 'El cliente se guardó con éxito');
        }
    },
    error => {
      this.toaster.show(error, 'Error', 'Ocurrió un error al actualizar el cliente');
    });
    this.client = new Client();
  }

  /**
  * Requests to parent component to show the confirmation to remove the client selected.
  **/
  public requestWarningModal() {
    this.modalAction = 'Show warning modal';
    this.requestWarning.emit(this.modalAction);
  }

  /**
  * Requests to parent component to close the current modal.
  **/
  public requestCloseThisModal() {
    this.modalAction = 'Close modal';
    this.requestCloseModal.emit(this.modalAction);
  }

  /**
  * Initialize the form and return to the original object the client.
  **/
  public cancelForm(form: NgModel) {
    if (this.oldClient.id) {
      this.client = this.oldClient;
      let updatedContact = new Client(this.oldClient);
      this.clientUpdated.emit(updatedContact);
    }
    form.control.markAsUntouched();
  }
}
