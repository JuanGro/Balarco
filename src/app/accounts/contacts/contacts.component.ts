import { Component, OnInit, Input } from '@angular/core';

// Components
import { Contact } from './contact';

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
  // Variable that saves the title to show in the template.
  public title: string;
  // List of contacts received from httpService.
  public contactsList: Contact[];
  // Variable for save the object received from child component and manage if the form is for update or create contact.
  public contact: Contact;
  // Received from table component, it gives me the contact that the user selected to see his detail.
  @Input() currentContact: Contact;

  public constructor(public httpService: HttpService) { }

  /**
  * Builds the component for first time.
  *   - Save the title to show in the template.
  *   - Load the contact list from get method in httpService.
  **/
  public ngOnInit() {
    this.title = 'Lista de contactos';

    this.loadcontactsList('clients/contacts/');
  }

  /**
  * Load all the contacts from the get method in httpService.
  * Params:
  *   - url: The url where the service will comunicate to get the Contact object.
  * Returns:
  *   - contactsList: Contacts list with all the contacts.
  **/
  public loadcontactsList(url: string) {
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
  * Clear the contact variable to get an empty modal.
  **/
  public initializeModal() {
    this.contact = null;
  }

  /**
  * Request to the Backend service to remove the contact selected by the user.
  * Params:
  *   - object: A Contact object.
  * Returns:
  *   - result: Response from backend service to know if the operation was success or not.
  **/
  public removeContact(object: Contact) {
    this.httpService.deleteObject('clients/contacts/' + object.id + '/').subscribe(result => {
    });
  }

  /**
  * Know which contact was selected by the user.
  * Params:
  *   - object: A Contact object.
  * Returns:
  *   - contact: The Contact object selected by the user.
  **/
  public getContactFromTable(object: Contact): void {
    this.contact = object;
  }
}
