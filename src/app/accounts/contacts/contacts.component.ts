import { Component, OnInit, Input, OnChanges} from '@angular/core';

// Models
import { Contact } from './contact-model';
import { Client } from './../clients/client-model';

// Services
import { HttpService } from './../../shared/http-service/http.service';
import { CustomToastService } from '../../shared/toast/custom-toast.service';

// Environment
import { environment } from '../../../environments/environment';

// Notifications
import './../../shared/reconnecting-websocket.min';
declare var ReconnectingWebSocket: any;

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
export class ContactsComponent implements OnInit, OnChanges {
  // Received from table component, it gives me the contact that the user selected to see his detail.
  @Input('currentContact') currentContact: Contact;
  // Received from table component, it gives me the value that the user is typing in the search.
  @Input('valueSearch') valueSearch: string;
  // Variable that saves the title to show in the template.
  public title: string;
  // Original copy of the contacts list it's used always like a base for search.
  public completeContactsList: Contact[];
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
  // Variable to control notificiation banner
  @Input() notificationBannerIsActive: boolean;

  public constructor(public httpService: HttpService, private toaster: CustomToastService) { }

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
    this.loadClientsList(environment.CLIENTS_URL);
    this.loadContactsList(environment.CONTACTS_URL);
    this.notificationBannerIsActive = false;
    this.receiveNotifications(environment.CONTACT_LIST_NOTIFICATIONS_URL);
  }

  /**
  * Implements needed method to observ changes on inputs
  **/
  public ngOnChanges() {
  }

  /**
  * Loads all the contacts from the get method in httpService.
  * Params:
  *   - url: The url where the service will comunicate to get the Contact object.
  **/
  public loadContactsList(url: string) {
    this.httpService.getObject(url)
                    .map((data: any) => data.json())
                    .subscribe(contactsListJSON => {
                      // Creates Contact objects from JSON.
                      this.contactsList = [];
                      for (let contactJSON of contactsListJSON) {
                        this.contactsList.push(new Contact(contactJSON));
                      }
                      this.contactsList.sort().reverse();
                      this.completeContactsList = this.contactsList;
                    },
                      error => {
                        this.toaster.show(error, 'Error', 'Ocurrió un error al obtener la lista de contactos');
                      }
                    );
  }

  /**
  * Loads all the clients from the get method in httpService to use it the client attribute of the current component.
  * Params:
  *   - url: The url where the service will comunicate to get the Client object.
  **/
  public loadClientsList(url: string) {
    this.httpService.getObject(url)
                    .map((data: any) => data.json())
                    .subscribe(clientsListJSON => {
                      // Creates Contact objects from JSON.
                      this.clientsList = [];
                      for (let clientJSON of clientsListJSON) {
                        this.clientsList.push(new Client(clientJSON));
                      }
                      this.clientsList.sort().reverse();
                    },
                      error => {
                        this.toaster.show(error, 'Error', 'Ocurrió un error al obtener la lista de clientes');
                      }
                    );
  }

  /**
  * Clears the contact variable to get an empty modal.
  **/
  public initializeModal() {
    this.contact = new Contact();
  }

  /**
  * Saves which contact was selected by the user.
  * Params:
  *   - object: A Contact object.
  **/
  public getContactFromTable(object: Contact) {
    this.contact = object;
  }

  /**
  * Shows the contact list that the user is requesting in the filter.
  * Params:
  *   - value: String from search form.
  **/
  public getValueSearch(value: string) {
    this.valueSearch = value;
    this.contactsList = [];
    this.completeContactsList.sort();
    if (this.valueSearch === '') {
      this.contactsList = this.completeContactsList;
    } else {
      for (let contactFromList of this.completeContactsList) {
        if (contactFromList.name.toLowerCase().includes(this.valueSearch.toLowerCase()) ||
            contactFromList.last_name.toLowerCase().includes(this.valueSearch.toLowerCase()) ||
            contactFromList.charge.toLowerCase().includes(this.valueSearch.toLowerCase()) ||
            contactFromList.client_complete.name.toLowerCase().includes(this.valueSearch.toLowerCase()) ||
            contactFromList.email.toLowerCase().includes(this.valueSearch.toLowerCase())) {
            let contact = new Contact(contactFromList);
            this.contactsList.push(contact);
        }
      }
    }
  }

  /**
  * Requests to the Backend service to remove the contact selected by the user and reload the search.
  * Params:
  *   - object: A Contact object.
  * Returns:
  *   - result: Response from backend service to know if the operation was success or not.
  **/
  public removeContact(event: Contact) {
    this.httpService.deleteObject(environment.CONTACTS_URL + event.id + '/').subscribe(result => {
      if (result.ok) {
        let oldContact = this.completeContactsList.filter(contact => contact.id === event.id)[0];
        let index = this.completeContactsList.indexOf(oldContact);
        if (index >= 0) {
          this.completeContactsList.splice(index, 1);
          if (this.valueSearch) {
          this.getValueSearch(this.valueSearch);
          }
          this.toaster.show(result, 'Contacto eliminado', 'El contacto se eliminó con éxito');
        }
      }
    },
    error => {
      let errorBody = JSON.parse(error['_body']);
      if (error.status === 400) {
        this.toaster.show(error, 'Error', errorBody);
      } else {
        this.toaster.show(error, 'Error', 'Ocurrió un error al eliminar el contacto');
      }
    });
  }

  /**
  * Receives event when a new contact is created in the form.
  * It pushes the new contact to the complete list and reload the search.
  * Params:
  *   - event: New contact received from the event.
  **/
  public onContactCreated(event: Contact) {
    this.completeContactsList.push(event);
    if (this.valueSearch) {
      this.getValueSearch(this.valueSearch);
    }
  }

  /**
  * Receives event when a contact is updated in the form.
  * It updates the contact selected and reload the search.
  * Params:
  *   - event: Contact updated received from the event.
  **/
  public onContactUpdated(event: Contact) {
    let oldContact = this.completeContactsList.filter(contact => contact.id === event.id)[0];
    let index = this.completeContactsList.indexOf(oldContact);
    if (index >= 0) {
      this.completeContactsList[index] = event;
      if (this.valueSearch) {
        this.getValueSearch(this.valueSearch);
      }
    }
  }

  /**
  * Opens websocket connection to specified url and
  * to receive notification of changes to the database.
  * Params:
  *   - userId: Current user id to connect to correct channel
  *   - url: General address to connect to, to receive notifications
  **/
  public receiveNotifications(url: string) {
    let wsPath = environment.WS_URL + url;
    let socket = new ReconnectingWebSocket(wsPath);
    let self = this;
    socket.onmessage = function(message) {
        self.notificationBannerIsActive = true;
    };
  };

  /**
  * Reloads user list after
  **/
  public reloadContactList() {
    this.notificationBannerIsActive = false;
    this.loadContactsList(environment.CONTACTS_URL);
  }
}
