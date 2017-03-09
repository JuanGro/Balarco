import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

// Models
import { Contact } from './contact-model';
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
  // Event for parent to push the new Contact to the list.
  @Output() contactCreated: EventEmitter<Contact> = new EventEmitter();
  // Event for parent to update the currentContact.
  @Output() contactUpdated: EventEmitter<Contact> = new EventEmitter();
  // Variable to check if the submitForm method finish correctly.
  public success: boolean = false;
  // Variable to check in test what action is executed between components.
  public modalAction: string = '';
  // Initialization of control form.
  public contactsModalForm: FormGroup;
  // Variable to return the old contact if cancel the update form
  public oldContact: Contact;

  public constructor(private httpService: HttpService) { }

  /**
  * Builds the component for first time each time when it's called.
  *   - Initialize the form depending if the new or update contact form is called.
  *   - Use an auxiliary variable to select a default value for the dropdown used in the form.
  **/
  public ngOnChanges() {
    if (!this.contact) {
      this.contact = new Contact();
      this.oldContact = new Contact();
    } else {
      this.oldContact = new Contact(this.contact);
    }
  }

  /**
  * Executes the submitUpdatedContact or submitNewContact depending if the contact received when the modal was called is empty or not.
  * Params:
  *   - object: Contact object received from modal.
  *   - isValid: Boolean that tells if all the validations were correct.
  **/
  public submitContactForm(object: Contact) {
      if (this.contact.id) {
        // Update contact
        this.submitUpdatedContact(object, this.contact.id);
      } else {
        // Create contact
        this.submitNewContact(object);
      }
      this.success = true;
  }

  /**
  * Requests to the Backend service to update the contact selected by the user.
  * Params:
  *   - object: A Contact object.
  **/
  public submitUpdatedContact(object: Contact, id: number) {
    this.httpService.updateObject('clients/contacts/' + id + '/', object).subscribe(result => {
        if (result.ok) {
          let updatedContact = new Contact(result.json());
          this.contactUpdated.emit(updatedContact);
        }
    });
  }

  /**
  * Update the Contact object to avoid changes with TWDB.
  * Params:
  *   - object: A Contact object.
  *   - id: Id of contact object.
  **/
  public cancelUpdatedContact(object: Contact, id: number) {
    let updatedContact = new Contact(object);
    this.contactUpdated.emit(updatedContact);
  }

  /**
  * Requests to the Backend service to create the new contact.
  * Params:
  *   - object: A Contact object.
  **/
  public submitNewContact(object: Contact) {
    this.httpService.postObject('clients/contacts/', object).subscribe(result => {
        if (result.ok) {
          let newContact = new Contact(result.json());
          this.contactCreated.emit(newContact);
        }
    });
  }

  /**
  * Requests to parent component to show the confirmation to remove the contact selected.
  **/
  public requestWarningModal() {
    this.modalAction = 'Show warning modal';
    this.requestWarning.emit(this.modalAction);
  }

  /**
  * Requests to parent component to close the current modal.
  **/
  public requestCloseThisModal() {
    this.modalAction = 'Close modal';
    this.requestCloseModal.emit(this.modalAction);
  }

  /**
  * Clears all the values in the form fields.
  **/
  public resetForm() {
    this.contact = new Contact();
  }

  /**
  * Return to the original object the contact.
  **/
  public cancelForm() {
    this.contact = this.oldContact;
    this.cancelUpdatedContact(this.oldContact, this.oldContact.id);
  }
}
