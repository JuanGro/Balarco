import { Component, Input, Output, EventEmitter } from '@angular/core';

// Class
import { Client } from './client';

@Component({
  selector: 'clients-list-table',
  templateUrl: 'clients-list-table.component.html'
})
/**
* Component which manage the table which shows the list of clients:
* - List all the clients.
* - Request open a modal depending of which option is selected.
* - Send the client that is selected by the user.
**/
export class ClientListTableComponent {
  // Receives the clients list from parent component.
  @Input('clientList') clientList: Client[];
  // Sends the request to show the new client modal in parent component
  @Output() requestShowNewClientModal: EventEmitter<string> = new EventEmitter();
  // Sends the request to show the update client modal in parent component
  @Output() requestShowUpdateClientModal: EventEmitter<string> = new EventEmitter();
  // Sends the client selected by the user to parent component
  @Output() currentClient: EventEmitter<Client> = new EventEmitter<Client>();

  public constructor() { }

  /**
  * Requests to parent component to show the new client modal.
  **/
  public requestNewClientModal() {
    this.requestShowNewClientModal.emit();
  }

  /**
  * Requests to parent component to show the update client modal.
  **/
  public requestUpdateClientModal() {
    this.requestShowUpdateClientModal.emit();
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
