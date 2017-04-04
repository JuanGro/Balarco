import { Component, Input, Output, EventEmitter } from '@angular/core';

// Services
import { HttpService } from './../../shared/http-service/http.service';

// Models
import { Contact } from './contact-model';
import { Client } from './../clients/client-model';

@Component({
  selector: 'contacts-list',
  templateUrl: 'contacts-list.component.html'
})
/**
* Component which manage the table which shows the list of contacts:
* - List all the contacts.
* - Request open a modal depending of which option is selected.
* - Send the contact that is selected by the user.
**/
export class ContactsListComponent {
  // Receives the contacts list from parent component.
  @Input('contactsList') contactsList: Contact[];
  // Receives the clients list from parent component.
  @Input('clientsList') clientsList: Client[];
  // Sends the request to show the new contact modal in parent component.
  @Output() requestShowNewContactModal: EventEmitter<string> = new EventEmitter();
  // Sends the request to show the update contact modal in parent component.
  @Output() requestShowUpdateContactModal: EventEmitter<string> = new EventEmitter();
  // Sends the contact selected by the user to parent component.
  @Output() currentContact: EventEmitter<Contact> = new EventEmitter<Contact>();
  // Sends the contactsList updated to parent component to avoid problems.
  @Output() valueSearch: EventEmitter<string> = new EventEmitter<string>();
  // Variable to check in test what action is executed between components.
  public modalAction: string = '';

  public constructor(public httpService: HttpService) { }

  /**
  * Requests to parent component to show the new contact modal.
  **/
  public requestNewContactModal() {
    this.modalAction = 'Open new Contact modal';
    this.requestShowNewContactModal.emit(this.modalAction);
  }

  /**
  * Requests to parent component to show the update contact modal.
  **/
  public requestUpdateContactModal() {
    this.modalAction = 'Open update Contact modal';
    this.requestShowUpdateContactModal.emit(this.modalAction);
  }

  /**
  * Sends to parent component the contact selected by the user 
  * and the contact list filtered from search.
  * Params:
  *   - object: A Contact object.
  **/
  public sendCurrentContact(object: Contact) {
    this.currentContact.emit(object);
  }

  /**
  * Search specific items in the contacts list,
  * making all the strings to lower case and checks substrings.
  **/
  public filterItem(value: string) {
    this.valueSearch.emit(value);
  }
}
