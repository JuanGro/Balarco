import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Class
import { Contact } from './contact';
import { Client } from './../companies-list/client';

// Services
import { HttpService } from './../../shared/http-service/http.service';

@Component({
  selector: 'contact-form',
  templateUrl: 'contact-form.component.html'
})
/**
* Component which manage the forms for update and create a contact:
* - Use OnChanges feature because it's important to know if the user opens a new modal or update modal depending
* in the contact object value, the component is listening for each change in that variable.
* - Initialize form.
* - Create validations.
* - Request save the contact.
* - Request actions in modals to the parent component.
**/
export class ContactFormComponent implements OnChanges {
  // Receives the contact selected by the user or the empty object to know if is called the update or create contact form.
  @Input() contact: Contact;
  // Receives the clients list from parent component.
  @Input('clientsList') clientsList: Client[];
  // Requests close of the current modal to parent component.
  @Output() requestCloseModal: EventEmitter<string> = new EventEmitter();
  // Requests to parent component the show of the danger modal to confirm if the contact is permanent removed.
  @Output() requestWarning: EventEmitter<string> = new EventEmitter();

  // Initialization of the control form
  public contactsModalForm: FormGroup;

  public constructor(public fb: FormBuilder, private httpService: HttpService) { }

  /**
  * Builds the component for first time each time when it's called.
  *   - It uses a regular expression to know if the email is valid.
  *   - Initialize the form depending if the new or update contact form is called.
  **/
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

  /**
  * Executes the submitUpdatedContact or submitNewContact depending if the contact received when the modal was called is empty or not.
  * Params:
  *   - object: Contact object received from modal.
  *   - isValid: Boolean that tells if all the validations were correct.
  **/
  public submitContactForm(object: Contact, isValid: boolean) {
    // console.log(object);
    if (isValid === true) {
      if (this.contact) {
        // Update contact
        this.submitUpdatedContact(object, this.contact.id);
      } else {
        // Create contact
        this.submitNewContact(object);
        console.log(object);
      }
    } else {
      console.log('Error sending the contact from internal methods');
    }
  }

  /**
  * Requests to the Backend service to update the contact selected by the user.
  * Params:
  *   - object: A Contact object.
  * Returns:
  *   - result: Response from backend service to know if the operation was success or not.
  **/
  public submitUpdatedContact(object: Contact, id: number) {
    this.httpService.updateObject('clients/contacts/' + id + '/', object).subscribe(result => {
        // console.log(result);
    });
  }

  /**
  * Requests to the Backend service to create the new contact.
  * Params:
  *   - object: A Contact object.
  * Returns:
  *   - result: Response from backend service to know if the operation was success or not.
  **/
  public submitNewContact(object: Contact) {
    this.httpService.postObject('clients/contacts/', object).subscribe(result => {
        console.log('result');
        if (result.ok) {
          console.log(result.text());
        }        
    });
  }

  /**
  * Requests to parent component to show the confirmation to remove the contact selected.
  **/
  public requestWarningModal() {
    this.requestWarning.emit();
  }

  /**
  * Requests to parent component to close the current modal.
  **/
  public requestCloseThisModal() {
    this.requestCloseModal.emit();
  }

  /**
  * Clears all the values in the form fields.
  **/
  public resetForm() {
    this.contactsModalForm.reset();
  }
}
