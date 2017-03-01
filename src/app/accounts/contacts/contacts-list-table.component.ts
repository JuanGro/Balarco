import { Component, Input, Output, EventEmitter } from '@angular/core';

// Class
import { Contact } from './contact';
import { Client } from './../companies-list/client';

@Component({
  selector: 'contacts-list-table',
  templateUrl: 'contacts-list-table.component.html'
})
/**
* Component which manage the table which shows the list of contacts:
* - List all the contacts.
* - Request open a modal depending of which option is selected.
* - Send the contact that is selected by the user.
**/
export class ContactsListTableComponent {
  // Receives the contacts list from parent component.
  @Input('contactsList') contactsList: Contact[];
  // Receives the clients list from parent component.
  @Input('clientsList') clientsList: Client[];
  // Sends the request to show the new contact modal in parent component
  @Output() requestShowNewContactModal: EventEmitter<string> = new EventEmitter();
  // Sends the request to show the update contact modal in parent component
  @Output() requestShowUpdateContactModal: EventEmitter<string> = new EventEmitter();
  // Sends the contact selected by the user to parent component
  @Output() currentContact: EventEmitter<Contact> = new EventEmitter<Contact>();

  public constructor() { }

  /**
  * Requests to parent component to show the new contact modal.
  **/
  public requestNewContactModal() {
    this.requestShowNewContactModal.emit();
  }

  /**
  * Requests to parent component to show the update contact modal.
  **/
  public requestUpdateContactModal() {
    this.requestShowUpdateContactModal.emit();
  }

  /**
  * Sends to parent component the contact selected by the user.
  * Params:
  *   - object: A Contact object.
  **/
  public sendCurrentContact(object: Contact) {
    this.currentContact.emit(object);
  }
}
