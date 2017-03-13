import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

// Class
import { Client } from './client-model';

// Services
import { HttpService } from './../../shared/http-service/http.service';

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
  // Receives the request to initialize the form from parent component.
  @Input('resetForm') resetForm: boolean;
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
  // Initialization of the control form
  public clientModalForm: FormGroup;
  // Variable to return the old client if cancel the update form
  public oldClient: Client;
  // Variable to active the form.
  public active: boolean = true;

  public constructor(private httpService: HttpService) { }

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
    if (this.resetForm) {
      this.cancelForm();
    }
  }

  /**
  * Executes the submitUpdatedClient or submitNewClient depending if the client received when the modal was called is empty or not.
  * Params:
  *   - object: Client object received from modal.
  **/
  public submitClientForm(object: Client) {
      if (this.client.id) {
        // Update client
        this.submitUpdatedClient(object, this.client.id);
      } else {
        // Create client
        this.submitNewClient(object);
      }
      this.active = false;
      setTimeout(() => this.active = true, 0);
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
    this.httpService.updateObject('clients/clients/' + id + '/', object).subscribe(result => {
        if (result.ok) {
          let updatedClient = new Client(result.json());
          this.clientUpdated.emit(updatedClient);
        }
    });
  }

  /**
  * Update the Client object to avoid changes with TWDB.
  * Params:
  *   - object: A Client object.
  *   - id: Id of client object.
  **/
  public cancelUpdatedClient(object: Client, id: number) {
    let updatedClient = new Client(object);
    this.clientUpdated.emit(updatedClient);
  }

  /**
  * Requests to the Backend service to create the new client.
  * Params:
  *   - object: A Client object.
  * Returns:
  *   - result: Response from backend service to know if the operation was success or not.
  **/
  public submitNewClient(object: Client) {
    this.httpService.postObject('clients/clients/', object).subscribe(result => {
        if (result.ok) {
          let newClient = new Client(result.json());
          this.clientCreated.emit(newClient);
        }
    });
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
  public cancelForm() {
    if (this.oldClient.id) {
      this.client = this.oldClient;
      let updatedContact = new Client(this.oldClient);
      this.clientUpdated.emit(updatedContact);
    }
    this.client = new Client();
    setTimeout(() => this.active = false, 1);
    setTimeout(() => this.active = true, 0);
    this.resetForm = false;
  }
}
