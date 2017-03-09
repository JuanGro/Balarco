import { Component, Input, Output, EventEmitter } from '@angular/core';

// Class
import { Client } from './client-model';

@Component({
  selector: 'clients-list',
  templateUrl: 'clients-list.component.html'
})
/**
* Component which manage the table which shows the list of clients:
* - List all the clients.
* - Request open a modal depending of which option is selected.
* - Send the client that is selected by the user.
**/
export class ClientsListComponent {
  // Receives the clients list from parent component.
  @Input('clientsList') clientsList: Client[];
  // Sends the request to show the new client modal in parent component
  @Output() requestShowNewClientModal: EventEmitter<string> = new EventEmitter();
  // Sends the request to show the update client modal in parent component
  @Output() requestShowUpdateClientModal: EventEmitter<string> = new EventEmitter();
  // Sends the client selected by the user to parent component
  @Output() currentClient: EventEmitter<Client> = new EventEmitter<Client>();
  // Variable to check in test what action is executed between components.
  public modalAction: string = '';

  public constructor() { }

  /**
  * Requests to parent component to show the new client modal.
  **/
  public requestNewClientModal() {
    this.modalAction = 'Open new Contact modal';
    this.requestShowNewClientModal.emit(this.modalAction);
  }

  /**
  * Requests to parent component to show the update client modal.
  **/
  public requestUpdateClientModal() {
    this.modalAction = 'Open update Contact modal';
    this.requestShowUpdateClientModal.emit(this.modalAction);
  }

  /**
  * Sends to parent component the client selected by the user.
  * Params:
  *   - object: A Client object.
  **/
  public sendCurrentClient(object: Client) {
    this.currentClient.emit(object);
  }
}
