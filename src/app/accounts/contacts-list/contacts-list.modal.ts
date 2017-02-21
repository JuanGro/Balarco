import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// Interface
import { ContactsList } from './contacts-list';

@Component({
  selector: 'contacts-list-modal',
  templateUrl: 'contacts-list.modal.html',
  moduleId: module.id,
})
export class ContactsListModalComponent implements OnInit {
  // Send to the child the data
  @Input('docs') docs: ContactsList;
  //Receive the request to show the modal
  @Output() uploaded: EventEmitter<string> = new EventEmitter();
  @Output() notify: EventEmitter<ContactsList> = new EventEmitter<ContactsList>();

  public constructor() { }

  uploadComplete() {
    this.uploaded.emit('complete');
  }

  onClick(object) {
    this.notify.emit(object);
  }

  ngOnInit() {}

}
