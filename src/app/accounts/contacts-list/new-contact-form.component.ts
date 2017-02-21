import { Component, OnInit, Input } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

// Components
import { ContactsList } from './contacts-list';

// Services
// import { ContactsListService } from './contacts-list.service';

@Component({
  selector: 'new-contact-form',
  templateUrl: 'new-contact-form.component.html',
  moduleId: module.id,
})
export class NewContactFormComponent implements OnInit {
  /*// Object received from service
  public documents: ContactsList[];
  // Handle Error
  public errorMessage: string;
  // Variable for save the object received from child component
  public contact: ContactsList;
  // Received from child component
  @Input() currentContact: ContactsList; */
  // Control form
  public contactsNewModalForm: FormGroup;

  public constructor(private _fb: FormBuilder) { }

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

    /*this.contactsUpdateModalForm.patchValue({
      name: this.contact.name,
      lastname: this.contact.lastname,
      company: this.contact.company,
      landline: this.contact.landline,
      job: this.contact.job,
      ext: this.contact.ext,
      phone1: this.contact.phone1,
      phone2: this.contact.phone2,
      email: this.contact.email
    });*/
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
    // this.contact = object;
  }

  public submitNewContactForm(model: ContactsList, isValid: boolean) {
  }
}
