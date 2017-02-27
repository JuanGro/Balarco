import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

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
  // @Input('contactToEdit') contact: ContactsList;
  @Input() contact: ContactsList;
  // Request action to parent component
  @Output() requestCloseModal: EventEmitter<string> = new EventEmitter();
  @Output() requestWarning: EventEmitter<string> = new EventEmitter();
  @Output() requestSuccess: EventEmitter<string> = new EventEmitter();
  // Control form
  public contactsModalForm: FormGroup;
  public formGroup: FormGroup;

  public constructor(public fb: FormBuilder, private httpService: HttpService) { }

  public ngOnChanges() {
    let emailRegex = '[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`\
                          {|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?';
    if (this.contact) {
      // Update Contact
      this.contactsModalForm = this.fb.group({
        id: [this.contact.id],
        name: [this.contact.name, [<any>Validators.required, <any>Validators.minLength(2)]],
        lastname: [this.contact.lastname, [<any>Validators.required, <any>Validators.minLength(4)]],
        company: [this.contact.company, [<any>Validators.required, <any>Validators.minLength(2)]],
        landline: [this.contact.landline, [<any>Validators.required, <any>Validators.minLength(6)]],
        job: [this.contact.job, [<any>Validators.required, <any>Validators.minLength(3)]],
        ext: [this.contact.ext, [<any>Validators.required]],
        phone1: [this.contact.phone1, [<any>Validators.required, <any>Validators.minLength(6)]],
        // phone2: new FormControl(this.contact.phone2, [<any>Validators.required, <any>Validators.minLength(6)]),
        email: [this.contact.email, [<any>Validators.required, <any>Validators.minLength(4),
                              <any>Validators.pattern(emailRegex)]]
      });

    } else {
      // New Contact
      this.contactsModalForm = this.fb.group({
        name: ['', [<any>Validators.required, <any>Validators.minLength(2)]],
        lastname: ['', [<any>Validators.required, <any>Validators.minLength(4)]],
        company: ['', [<any>Validators.required, <any>Validators.minLength(2)]],
        landline: ['', [<any>Validators.required, <any>Validators.minLength(6)]],
        job: ['', [<any>Validators.required, <any>Validators.minLength(3)]],
        ext: ['', [<any>Validators.required]],
        phone1: ['', [<any>Validators.required, <any>Validators.minLength(6)]],
        // phone2: new FormControl(this.contact.phone2, [<any>Validators.required, <any>Validators.minLength(6)]),
        email: ['', [<any>Validators.required, <any>Validators.minLength(4),
                              <any>Validators.pattern(emailRegex)]]
      });
    }
  }

  public submitContactForm(model: ContactsList, isValid: boolean) {
    // console.log(model);
    if (isValid === true) {
      if (this.contact) {
        // Update contact
        this.submitUpdatedContact(model);
      } else {
        // Create contact
        this.submitNewContact(model);
      }
    } else {
      console.log('Error in submitContactForm method');
    }
  }

  public submitUpdatedContact(model: ContactsList) {
    this.httpService.postObject('clients/clients/' + model.id, model).subscribe(result => {
      console.log(result);
    });
  }

  public submitNewContact(model: ContactsList) {
    this.httpService.updateObject('clients/clients/', model).subscribe(result => {
      console.log(result);
    });
  }

  public removeContact(model: ContactsList) {
    this.httpService.deleteObject('clients/clients/' + model.id).subscribe(result => {
      console.log(result);
    });
  }

  public requestSuccessModal() {
    this.requestSuccess.emit('complete');
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
