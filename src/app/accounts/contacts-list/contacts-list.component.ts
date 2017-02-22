import { Component, OnInit, Input } from '@angular/core';

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
        {'id': 1, 'name' : 'Marco', 'lastname' : 'Otto', 'company' : 'Starbucks', 'job' : 'Marketing', 'landline' : '2123434', 'ext' : '12', 'phone1' : '4423333333', 'email' : 'mail@gmail.com'},
        {'id': 2, 'name' : 'Juan', 'lastname' : 'Otto', 'company' : 'Starbucks', 'job' : 'Marketing', 'landline' : '2123434', 'ext' : '12', 'phone1' : '4423333333', 'email' : 'mail@gmail.com'},
        {'id': 3, 'name' : 'Julian', 'lastname' : 'Otto', 'company' : 'Starbucks', 'job' : 'Marketing', 'landline' : '2123434', 'ext' : '12', 'phone1' : '4423333333', 'email' : 'mail@gmail.com'},
        {'id': 4, 'name' : 'Carlos', 'lastname' : 'Otto', 'company' : 'Starbucks', 'job' : 'Marketing', 'landline' : '2123434', 'ext' : '12', 'phone1' : '4423333333', 'email' : 'mail@gmail.com'},
        {'id': 5, 'name' : 'Fernando', 'lastname' : 'Otto', 'company' : 'Starbucks', 'job' : 'Marketing', 'landline' : '2123434', 'ext' : '12', 'phone1' : '4423333333', 'email' : 'mail@gmail.com'},
        {'id': 6, 'name' : 'Marco', 'lastname' : 'Otto', 'company' : 'Starbucks', 'job' : 'Marketing', 'landline' : '2123434', 'ext' : '12', 'phone1' : '4423333333', 'email' : 'mail@gmail.com'},
        {'id': 7, 'name' : 'Juan', 'lastname' : 'Otto', 'company' : 'Starbucks', 'job' : 'Marketing', 'landline' : '2123434', 'ext' : '12', 'phone1' : '4423333333', 'email' : 'mail@gmail.com'},
        {'id': 8, 'name' : 'Julian', 'lastname' : 'Otto', 'company' : 'Starbucks', 'job' : 'Marketing', 'landline' : '2123434', 'ext' : '12', 'phone1' : '4423333333', 'email' : 'mail@gmail.com'},
        {'id': 9, 'name' : 'Carlos', 'lastname' : 'Otto', 'company' : 'Starbucks', 'job' : 'Marketing', 'landline' : '2123434', 'ext' : '12', 'phone1' : '4423333333', 'email' : 'mail@gmail.com'},
        {'id': 10, 'name' : 'Fernando', 'lastname' : 'Otto', 'company' : 'Starbucks', 'job' : 'Marketing', 'landline' : '2123434', 'ext' : '12', 'phone1' : '4423333333', 'email' : 'mail@gmail.com'}
    ];
  }

  public initializeModal() {
    this.contact = null;
  }

  public removeContact(model: ContactsList){
    console.log(model);
  }

  public getContactFromTable(object: ContactsList): void {
    this.contact = object;
  }
}
