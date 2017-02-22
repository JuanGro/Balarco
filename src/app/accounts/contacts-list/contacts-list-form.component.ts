import { Component, OnChanges, Input } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

// Components
import { ContactsList } from './contacts-list';

@Component({
  selector: 'contacts-list-form',
  templateUrl: 'contacts-list-form.component.html',
  moduleId: module.id,
})
export class ContactsListFormComponent implements OnChanges {
  // Received from parent component
  @Input('contactToEdit') contact: ContactsList;
  // Control form
  public contactsUpdateModalForm: FormGroup;

  public constructor(private _fb: FormBuilder) { }

  public ngOnChanges() {
    let emailRegex = '[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`\
                          {|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?';
    if (this.contact) {
      this.contactsUpdateModalForm = new FormGroup({
        name: new FormControl(this.contact.name, [<any>Validators.required, <any>Validators.minLength(2)]),
        lastname: new FormControl(this.contact.lastname, [<any>Validators.required, <any>Validators.minLength(4)]),
        company: new FormControl(this.contact.company, [<any>Validators.required, <any>Validators.minLength(2)]),
        landline: new FormControl(this.contact.landline, [<any>Validators.required, <any>Validators.minLength(6)]),
        job: new FormControl(this.contact.job, [<any>Validators.required, <any>Validators.minLength(3)]),
        ext: new FormControl(this.contact.ext, [<any>Validators.required]),
        phone1: new FormControl(this.contact.phone1, [<any>Validators.required, <any>Validators.minLength(6)]),
        phone2: new FormControl(this.contact.phone2, [<any>Validators.required, <any>Validators.minLength(6)]),
        email: new FormControl(this.contact.email, [<any>Validators.required, <any>Validators.minLength(4), <any>Validators.pattern(emailRegex)])
      });
    } else {
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
  }

  public submitUpdateContactForm(model: ContactsList, isValid: boolean) {
    console.log(model);
  }
}
