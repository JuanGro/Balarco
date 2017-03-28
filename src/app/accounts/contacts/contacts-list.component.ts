import { Component, Input, Output, EventEmitter } from '@angular/core';

// Services
import { HttpService } from './../../shared/http-service/http.service';

// Models
import { Contact } from './contact-model';
import { Client } from './../clients/client-model';

// Environment
import { environment } from '../../../environments/environment';

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

  public filterItem(value) {
    this.httpService.getObject(environment.CONTACTS_URL)
                    .map((data: any) => data.json())
                    .subscribe(contactsListJSON => {
                      // Creates Contact objects from JSON.
                      this.contactsList = [];
                      for (let contactJSON of contactsListJSON) {
                        let contact = new Contact(contactJSON);
                        if (contact.name.includes(value) || contact.last_name.includes(value) ||
                        contact.client_complete.name.includes(value) || contact.email.includes(value)) {
                            this.contactsList.push(contact);
                        }
                      }
                    },
                      err => {
                        // Call of toast
                      }
                    );
  }
}
