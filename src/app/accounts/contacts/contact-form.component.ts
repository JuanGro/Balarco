import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

// Models
import { Contact } from './contact-model';
import { Client } from './../clients/client-model';

// Services
import { HttpService } from './../../shared/http-service/http.service';
import { CustomToastService } from '../../shared/toast/custom-toast.service';

// Environment
import { environment } from '../../../environments/environment';

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
  @Input('contact') contact: Contact;
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
  // Variable to return the old contact if cancel the update form.
  public oldContact: Contact;
  // Variable to active the form.
  public active: boolean = true;

  public constructor(private httpService: HttpService, private toaster: CustomToastService) { }

  /**
  * Builds the component for first time each time when it's called.
  *   - Initialize the form depending if the new or update contact form is called.
  *   - Use an auxiliary variable to select a default value for the dropdown used in the form.
  **/
  public ngOnChanges() {
    if (!this.contact) {
      this.contact = new Contact();
      this.oldContact = new Contact();
    } else if (this.contact && !this.contact.id) {
      this.initialDropdownSetup();
    } else if (this.contact && this.contact.id) {
      this.oldContact = new Contact(this.contact);
    }
  }

  /**
  * Method to fill dropdowns initially when the modal is shown and Contact is new.
  **/
  private initialDropdownSetup() {
    if (this.clientsList && this.clientsList.length > 0) {
      this.contact.client = this.clientsList[0].id;
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
      this.active = false;
      setTimeout(() => this.active = true, 0);
      this.success = true;
  }

  /**
  * Requests to the Backend service to update the contact selected by the user.
  * Params:
  *   - object: A Contact object.
  **/
  public submitUpdatedContact(object: Contact, id: number) {
    this.httpService.updateObject(environment.CONTACTS_URL + id + '/', object).subscribe(result => {
        if (result.ok) {
          let updatedContact = new Contact(result.json());
          this.contactUpdated.emit(updatedContact);
          this.toaster.show(result, 'Contacto actualizado', 'El contacto se actualizó con éxito');
        }
    },
    error => {
      this.toaster.show(error, 'Error', 'Ocurrió un error al actualizar el contacto');
    });
  }

  /**
  * Requests to the Backend service to create the new contact.
  * Params:
  *   - object: A Contact object.
  **/
  public submitNewContact(object: Contact) {
    this.httpService.postObject(environment.CONTACTS_URL, object).subscribe(result => {
        if (result.ok) {
          let newContact = new Contact(result.json());
          this.contactCreated.emit(newContact);
          this.toaster.show(result, 'Contacto guardado', 'El contacto se guardó con éxito');
        }
    },
    error => {
      this.toaster.show(error, 'Error', 'Ocurrió un error al guardar el contacto');
    });
    this.contact = new Contact();
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
  * Initialize the form and return to the original object the contact.
  **/
  public cancelForm() {
    if (this.oldContact.id) {
      this.contact = this.oldContact;
      let updatedContact = new Contact(this.oldContact);
      this.contactUpdated.emit(updatedContact);
    }
    this.contact = new Contact();
    setTimeout(() => this.active = false, 1);
    setTimeout(() => this.active = true, 0);
  }
}
