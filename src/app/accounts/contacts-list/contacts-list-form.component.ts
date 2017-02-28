import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Components
import { ContactsList } from './contacts-list';

// Services
import { HttpService } from './../../shared/http-service/http.service';

@Component({
  selector: 'contacts-list-form',
  templateUrl: 'contacts-list-form.component.html'
})
export class ContactsListFormComponent implements OnChanges {
  // Received from parent component
  @Input() contact: ContactsList;
  // Request action to parent component
  @Output() requestCloseModal: EventEmitter<string> = new EventEmitter();
  @Output() requestWarning: EventEmitter<string> = new EventEmitter();
  @Output() requestSuccess: EventEmitter<string> = new EventEmitter();
  // Control form
  public contactsModalForm: FormGroup;
  public formGroup: FormGroup;

  public documents: ContactsList;

  public constructor(public fb: FormBuilder, private httpService: HttpService) { }

  public ngOnChanges() {
    let emailRegex = '[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`\
                          {|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?';
    if (this.contact) {
      // Update Contact
      this.contactsModalForm = this.fb.group({
        name: [this.contact.name, [<any>Validators.required, <any>Validators.minLength(2)]],
        last_name: [this.contact.last_name, [<any>Validators.required, <any>Validators.minLength(4)]],
        client: [this.contact.client, [<any>Validators.required]],
        charge: [this.contact.charge, [<any>Validators.required, <any>Validators.minLength(3)]],
        landline: [this.contact.landline, [<any>Validators.required, <any>Validators.minLength(6)]],
        extension: [this.contact.extension],
        mobile_phone_1: [this.contact.mobile_phone_1, [<any>Validators.required, <any>Validators.minLength(6)]],
        mobile_phone_2: [this.contact.mobile_phone_2],
        email: [this.contact.email, [<any>Validators.required, <any>Validators.pattern(emailRegex)]],
        alternate_email: [this.contact.alternate_email, [<any>Validators.pattern(emailRegex)]],
        is_active: [this.contact.is_active, [<any>Validators.required]]
      });

    } else {
      // New Contact
      this.contactsModalForm = this.fb.group({
        name: ['', [<any>Validators.required, <any>Validators.minLength(2)]],
        last_name: ['', [<any>Validators.required, <any>Validators.minLength(4)]],
        client: ['', [<any>Validators.required]],
        charge: ['', [<any>Validators.required, <any>Validators.minLength(3)]],
        landline: ['', [<any>Validators.required, <any>Validators.minLength(6)]],
        extension: [''],
        mobile_phone_1: ['', [<any>Validators.required, <any>Validators.minLength(6)]],
        mobile_phone_2: [''],
        email: ['', [<any>Validators.required, <any>Validators.pattern(emailRegex)]],
        alternate_email: ['', [<any>Validators.pattern(emailRegex)]],
        is_active: [true, [<any>Validators.required]]
      });
    }
  }

  public submitContactForm(model: ContactsList, isValid: boolean) {
    // console.log(model);
    if (isValid === true) {
      if (this.contact) {
        // Update contact
        this.submitUpdatedContact(model, this.contact.id);
      } else {
        // Create contact
        this.submitNewContact(model);
      }
    } else {
      console.log('Error in submitContactForm method');
    }
  }

  public submitUpdatedContact(model: ContactsList, id: number) {
    this.httpService.updateObject('clients/contacts/' + id +'/', model).subscribe(result => {
        console.log(result);
    });
  }

  public submitNewContact(model: ContactsList) {
    this.httpService.postObject('clients/contacts/', model).subscribe(result => {
        console.log(result);
    });
  }

  public requestSuccessModal() {
    // this.requestSuccess.emit('complete');
  }

  public requestWarningModal() {
    this.requestWarning.emit('complete');
  }

  public requestCloseThisModal() {
    this.requestCloseModal.emit('complete');
  }

  public resetForm() {
    this.contactsModalForm.reset();
  }
}
