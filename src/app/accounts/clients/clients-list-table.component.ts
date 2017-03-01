import { Component, Input, Output, EventEmitter } from '@angular/core';

// Class
import { Client } from './client';

@Component({
  selector: 'clients-list-table',
  templateUrl: 'clients-list-table.component.html'
})
/**
* Component which manage the table which shows the list of contacts:
* - List all the contacts.
* - Request open a modal depending of which option is selected.
* - Send the contact that is selected by the user.
**/
export class ClientListTableComponent {
  // Receives the contacts list from parent component.
  @Input('clientList') clientList: Client;
  // Sends the request to show the new contact modal in parent component
  @Output() requestShowNewClientModal: EventEmitter<string> = new EventEmitter();
  // Sends the request to show the update contact modal in parent component
  @Output() requestShowUpdateClientModal: EventEmitter<string> = new EventEmitter();
  // Sends the contact selected by the user to parent component
  @Output() currentClient: EventEmitter<Client> = new EventEmitter<Client>();

  public constructor() { }

  /**
  * Requests to parent component to show the new contact modal.
  **/
  public requestNewClientModal() {
    this.requestShowNewClientModal.emit();
  }

  /**
  * Requests to parent component to show the update contact modal.
  **/
  public requestUpdateClientModal() {
    this.requestShowUpdateClientModal.emit();
  }

  /**
  * Sends to parent component the contact selected by the user.
  * Params:
  *   - object: A Contact object.
  **/
  public sendCurrentContact(object: Client) {
    this.currentClient.emit(object);
  }
}
