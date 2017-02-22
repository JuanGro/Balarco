import { Component, OnInit, Input } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';

// Components
import { ContactsList } from './contacts-list';

@Component({
  selector: 'contacts-list',
  templateUrl: 'contacts-list.component.html',
  moduleId: module.id,
})
export class ContactsListComponent implements OnInit {
  // Object received from service
  public documents: ContactsList[];
  // Variable for save the object received from child component
  public contact: ContactsList;
  // Received from child component
  @Input() currentContact: ContactsList;

  public constructor() { }

  public ngOnInit() {
    // Auxiliar to service
    this.documents = [
        {'id': 1, 'name' : 'Mark', 'lastname' : 'Otto', 'company' : 'Starbucks', 'job' : 'Marketing', 'landline' : '2123434', 'ext' : '12', 'phone1' : '4423333333', 'phone2' : '2222222222', 'email' : 'mail@gmail.com'}
    ];
  }

  public initializeModal() {
    this.contact = null;
  }

  public getContactFromTable(object: ContactsList): void {
    this.contact = object;
  }
}
