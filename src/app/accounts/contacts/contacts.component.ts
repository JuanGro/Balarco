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
  // Variable that saves the title to show in the template
  public title: string;
  // List of contacts received from httpService
  public contactsList: Contact[];
  // Variable for save the object received from child component and manage if the form is for update or create contact
  public contact: Contact;
  // Received from child component
  @Input() currentContact: Contact;

  public constructor(public httpService: HttpService) { }
  
  /**
  * Builds the component for first time.
  *   - Save the title to show in the template.
  *   - Load the contact list from get method in httpService
  **/
  public ngOnInit() {
    this.title = 'Lista de contactos';

    this.loadcontactsList('clients/contacts/');
  }

  // Use the get method from httpService
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

  public initializeModal() {
    this.contact = null;
  }

  public removeContact(model: Contact) {
    this.httpService.deleteObject('clients/contacts/' + model.id + '/').subscribe(result => {
    });
  }

  public getContactFromTable(object: Contact): void {
    this.contact = object;
  }
}
