import { Component, OnInit, Input } from '@angular/core';

// Models
import { Contact } from './contact-model';
import { Client } from './../companies-list/client';

// Services
import { HttpService } from './../../shared/http-service/http.service';

@Component({
  selector: 'contacts',
  templateUrl: 'contacts.component.html'
})
/**
* Component which manage the administration of the contacts:
* - List all the contacts.
* - Create a new contact.
* - Update an specific contact.
* - Remove a contact.
**/
export class ContactsComponent implements OnInit {
  // Received from table component, it gives me the contact that the user selected to see his detail.
  @Input() currentContact: Contact;
  // Variable that saves the title to show in the template.
  public title: string;
  // List of contacts received from httpService.
  public contactsList: Contact[];
  // List of clients received from httpService.
  public clientsList: Client[];
  // Variable for save the object received from child component and manage if the form is for update or create contact.
  public contact: Contact;
  // Title of new contact modal.
  public titleNewModal: string;
  // Title of update contact modal.
  public titleUpdateModal: string;
  // Title of danger contact modal.
  public titleDangerModal: string;
  // Description for danger contact modal.
  public descriptionDangerModal: string;

  public constructor(public httpService: HttpService) { }

  /**
  * Builds the component for first time.
  *   - Save the title to show in the template.
  *   - Load the contact list from get method in httpService.
  **/
  public ngOnInit() {
    this.title = 'Lista de contactos';
    this.titleNewModal = 'Nuevo Contacto';
    this.titleUpdateModal = 'Modificar Contacto';
    this.titleDangerModal = 'Eliminar contacto';
    this.descriptionDangerModal = '¿Está usted seguro de eliminar este contacto?';

    this.loadClientsList('clients/clients/');
    this.loadContactsList('clients/contacts/');
  }

  /**
  * Loads all the contacts from the get method in httpService.
  * Params:
  *   - url: The url where the service will comunicate to get the Contact object.
  * Returns:
  *   - contactsList: Contacts list with all the contacts.
  **/
  public loadContactsList(url: string) {
    this.httpService.getObject(url)
                    .map((data: any) => data.json())
                    .subscribe( contactsList => this.contactsList = contactsList,
                                err => {
                                  // console.log(err);
                                  // Call of toast
                                }
                    );
  }

  /**
  * Loads all the clients from the get method in httpService to use it the client attribute of the current component.
  * Params:
  *   - url: The url where the service will comunicate to get the Client object.
  * Returns:
  *   - clientsList: Clients list with all the clients.
  **/
  public loadClientsList(url: string) {
    this.httpService.getObject(url)
                    .map((data: any) => data.json())
                    .subscribe( clientsList => this.clientsList = clientsList,
                                err => {
                                  // console.log(err);
                                  // Call of toast
                                }
                    );
  }

  /**
  * Clears the contact variable to get an empty modal.
  **/
  public initializeModal() {
    this.contact = null;
  }

  /**
  * Requests to the Backend service to remove the contact selected by the user.
  * Params:
  *   - object: A Contact object.
  * Returns:
  *   - result: Response from backend service to know if the operation was success or not.
  **/
  public removeContact(object: Contact) {
    this.httpService.deleteObject('clients/contacts/' + object.id + '/').subscribe(result => {
      if (result.ok) {
        let index = this.contactsList.indexOf(object);
        if (index >= 0) {
          this.contactsList.splice(index, 1);
        }
      }
    });
  }

  /**
  * Knows which contact was selected by the user.
  * Params:
  *   - object: A Contact object.
  * Returns:
  *   - contact: The Contact object selected by the user.
  **/
  public getContactFromTable(object: Contact): void {
    this.contact = object;
  }

  /**
  * Recieves event when a new contact is created in the form.
  * It pushes the new contact to the list.
  * Params:
  *   - event: New contact received from the event.
  **/
  public onContactCreated(event: Contact) {
    this.contactsList.push(event);
  }

  /**
  * Recieves event when a contact is updated in the form.
  * It updates the contact selected.
  * Params:
  *   - event: Contact updated received from the event.
  **/
  public onContactUpdated(event: Contact) {
    let oldContact = this.contactsList.filter(contact => contact.id === event.id)[0];
    let index = this.contactsList.indexOf(oldContact);
    if (index >= 0) {
      this.contactsList[index] = event;
    }
  }
}
