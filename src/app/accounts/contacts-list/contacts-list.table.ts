import { Component, Input, Output, EventEmitter } from '@angular/core';

// Interface
import { ContactsList } from './contacts-list';

@Component({
  selector: 'contacts-list-table',
  templateUrl: 'contacts-list.table.html',
  moduleId: module.id,
})
export class ContactsListTableComponent {
  // Receive the contacts from parent component
  @Input('docs') docs: ContactsList;
  // Send the request to show the modal in parent component
  @Output() requestModal: EventEmitter<string> = new EventEmitter();
  // Send the current contact to parent component
  @Output() currentContact: EventEmitter<ContactsList> = new EventEmitter<ContactsList>();

  public constructor() { }

  public requestShowModal() {
    this.requestModal.emit('complete');
  }

  public sendCurrentContact(object) {
    this.currentContact.emit(object);
  }
}
