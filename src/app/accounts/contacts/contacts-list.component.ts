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
  // Receives the original contacts list without filters from parent component.
  @Input('completeContactsList') completeContactsList: Contact[];
  // Receives the clients list from parent component.
  @Input('clientsList') clientsList: Client[];
  // Sends the request to show the new contact modal in parent component.
  @Output() requestShowNewContactModal: EventEmitter<string> = new EventEmitter();
  // Sends the request to show the update contact modal in parent component.
  @Output() requestShowUpdateContactModal: EventEmitter<string> = new EventEmitter();
  // Sends the contact selected by the user to parent component.
  @Output() currentContact: EventEmitter<Contact> = new EventEmitter<Contact>();
  // Sends the contactsList updated to parent component to avoid problems.
  @Output() contactsListFiltered: EventEmitter<Contact[]> = new EventEmitter<Contact[]>();
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
  * Sends to parent component the contact selected by the user.
  * Params:
  *   - object: A Contact object.
  **/
  public sendCurrentContact(object: Contact) {
    this.currentContact.emit(object);
    this.contactsListFiltered.emit(this.contactsList);
  }

  /**
  * Sends to parent component the current contacts list.
  **/
  public sendContactsList() {
    this.contactsListFiltered.emit(this.contactsList);
  }

  /**
  * Search specific items in the contacts list,
  * making all the strings to lower case and checks substrings.
  **/
  public filterItem(value: string) {
    this.contactsList = [];
    for (let contactFromList of this.completeContactsList) {
      let contact = new Contact(contactFromList);
      if (contact.name.toLowerCase().includes(value.toLowerCase()) ||
          contact.last_name.toLowerCase().includes(value.toLowerCase()) ||
          contact.charge.toLowerCase().includes(value.toLowerCase()) ||
          contact.client_complete.name.toLowerCase().includes(value.toLowerCase()) ||
          contact.email.toLowerCase().includes(value.toLowerCase()) ||
          contact.alternate_email.toLowerCase().includes(value.toLowerCase())) {
          this.contactsList.push(contact);
      }
    }
    this.contactsList.sort();
  }
}
