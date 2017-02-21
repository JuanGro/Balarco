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
    // Get Observable
    /* let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getDocuments()); */
    
    // Auxiliar to service
    this.documents = [
        {'id': 1, 'name' : 'Mark', 'lastname' : 'Otto', 'company' : 'Starbucks', 'job' : 'Marketing', 'landline' : '2123434', 'ext' : '12', 'phone1' : '4423333333', 'phone2' : '2222222222', 'email' : 'mail@gmail.com'}
    ];
  }

  public ngOnInit() {
    let emailRegex = '[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`\
                        {|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?';
    this.contactsNewModalForm = new FormGroup({
      name: new FormControl('', [<any>Validators.required, <any>Validators.minLength(2)]),
      lastname: new FormControl('', [<any>Validators.required, <any>Validators.minLength(4)]),
      company: new FormControl('', [<any>Validators.required, <any>Validators.minLength(2)]),
      landline: new FormControl('', [<any>Validators.required, <any>Validators.minLength(6)]),
      job: new FormControl('', [<any>Validators.required, <any>Validators.minLength(3)]),
      ext: new FormControl('', [<any>Validators.required]),
      phone1: new FormControl('', [<any>Validators.required, <any>Validators.minLength(6)]),
      phone2: new FormControl('', [<any>Validators.required, <any>Validators.minLength(6)]),
      email: new FormControl('', [<any>Validators.required, <any>Validators.minLength(4), <any>Validators.pattern(emailRegex)])
    });

    this.contactsUpdateModalForm = new FormGroup({
      name: new FormControl('', [<any>Validators.required, <any>Validators.minLength(2)]),
      lastname: new FormControl('', [<any>Validators.required, <any>Validators.minLength(4)]),
      company: new FormControl('', [<any>Validators.required, <any>Validators.minLength(2)]),
      landline: new FormControl('', [<any>Validators.required, <any>Validators.minLength(6)]),
      job: new FormControl('', [<any>Validators.required, <any>Validators.minLength(3)]),
      ext: new FormControl('', [<any>Validators.required]),
      phone1: new FormControl('', [<any>Validators.required, <any>Validators.minLength(6)]),
      phone2: new FormControl('', [<any>Validators.required, <any>Validators.minLength(6)]),
      email: new FormControl('', [<any>Validators.required, <any>Validators.minLength(4), <any>Validators.pattern(emailRegex)])
    });
  }
  
  // Get the object from the service
  /* getDocuments() {
    this.contactsListService.getDocuments()
        .subscribe(
          documents => this.documents = documents,
          error => this.errorMessage = <any>error
        );
  } */

  public getContact(object: ContactsList): void {
    this.contact = object;
  }

  public submitNewContactForm(model: ContactsList, isValid: boolean) {
  }

  public submitUpdateContactForm(model: ContactsList, isValid: boolean) {
  }
}
