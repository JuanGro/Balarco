import { Component, Input, Output, EventEmitter } from '@angular/core';

// Class
import { Contact } from './contacts-list';

@Component({
  selector: 'contacts-list-table',
  templateUrl: 'contacts-list-table.component.html'
})
export class ContactsListTableComponent {
  // Receive the contacts from parent component
  @Input('docs') docs: Contact;
  // Send the request to show the modal in parent component
  @Output() requestShowNewContactModal: EventEmitter<string> = new EventEmitter();
  @Output() requestShowUpdateContactModal: EventEmitter<string> = new EventEmitter();
  // Send the current contact to parent component
  @Output() currentContact: EventEmitter<Contact> = new EventEmitter<Contact>();

  public constructor() { }

  public requestNewContactModal() {
    this.requestShowNewContactModal.emit();
  }

  public requestUpdateContactModal() {
    this.requestShowUpdateContactModal.emit();
  }

  public sendCurrentContact(object) {
    this.currentContact.emit(object);
  }
}
