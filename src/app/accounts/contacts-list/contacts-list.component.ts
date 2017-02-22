import { Component, OnInit, Input } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

// Components
import { ContactsList } from './contacts-list';

// Services
// import { ContactsListService } from './contacts-list.service';

@Component({
  selector: 'contacts-list',
  templateUrl: 'contacts-list.component.html',
  moduleId: module.id,
})
export class ContactsListComponent implements OnInit {
  // Object received from service
  public documents: ContactsList[];
  // Handle Error
  public errorMessage: string;
  // Variable for save the object received from child component
  public contact: ContactsList;
  // Received from child component
  @Input() currentContact: ContactsList;
  // Control form
  public contactsNewModalForm: FormGroup;
  public contactsUpdateModalForm: FormGroup;

  public constructor(private _fb: FormBuilder) {
    // Auxiliar to service
    this.documents = [
        {'id': 1, 'name' : 'Mark', 'lastname' : 'Otto', 'company' : 'Starbucks', 'job' : 'Marketing', 'landline' : '2123434', 'ext' : '12', 'phone1' : '4423333333', 'phone2' : '2222222222', 'email' : 'mail@gmail.com'}
    ];
  }

  public ngOnInit() { }

  public getContactFromTable(object: ContactsList): void {
    this.contact = object;
  }
}
