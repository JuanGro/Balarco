import { Component, OnInit } from '@angular/core';

// Class
import { Client } from './client-model';

// Services
import { HttpService } from './../../shared/http-service/http.service';

// Environment
import { environment } from '../../../environments/environment';

@Component({
  selector: 'clients',
  templateUrl: 'clients.component.html'
})
/**
* Component which manage the administration of the clients:
* - List all the clients.
* - Create a new client.
* - Update an specific client.
* - Remove a client.
**/
export class ClientsComponent implements OnInit {
  // Variable that saves the title to show in the template.
  public title: string;
  // Client list
  public clientsList: Client[];
  // Current selected client to update or delete
  public client: Client;
  // Title of new client modal.
  public titleNewModal: string;
  // Title of update client modal.
  public titleUpdateModal: string;
  // Title of danger client modal.
  public titleDangerModal: string;
  // Description for danger client modal.
  public descriptionDangerModal: string;

  public constructor(public httpService: HttpService) { }

  /**
  * Builds the component for first time.
  *   - Save the title to show in the template.
  *   - Load the client list from get method in httpService.
  **/
  public ngOnInit() {
    this.title = 'Lista de compañías';
    this.titleNewModal = 'Nueva compañía';
    this.titleUpdateModal = 'Modificar compañía';
    this.titleDangerModal = 'Eliminar compañía';
    this.descriptionDangerModal = '¿Está usted seguro de eliminar esta compañía?';

    this.loadClientsList(environment.CLIENTS_URL);
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
                    .subscribe(clientsListJSON => {
                      // Creates Client objects from JSON.
                      this.clientsList = [];
                      for (let clientJSON of clientsListJSON) {
                        this.clientsList.push(new Client(clientJSON));
                      }
                    },
                    err => {
                            // Call of toast
                           }
                    );
  }

  /**
  * Clears the client variable to get an empty modal.
  **/
  public initializeModal() {
    this.client = new Client();
  }

  /**
  * Requests to the Backend service to remove the client selected by the user.
  * Params:
  *   - object: A Client object.
  * Returns:
  *   - result: Response from backend service to know if the operation was success or not.
  **/
  public removeClient(object: Client) {
    this.httpService.deleteObject(environment.CLIENTS_URL + object.id + '/').subscribe(result => {
      if (result.ok) {
        let index = this.clientsList.indexOf(object);
        if (index >= 0) {
          this.clientsList.splice(index, 1);
        }
      }
    });
  }

  /**
  * Returns client was selected by the user.
  * Params:
  *   - object: A Client object.
  * Returns:
  *   - client: The Client object selected by the user.
  **/
  public getClientFromTable(object: Client): void {
    this.client = object;
  }

  /**
  * Recieves event when a new client is created in the form.
  * It pushes the new client to the list.
  * Params:
  *   - event: New client received from the event.
  **/
  public onClientCreated(event: Client) {
    this.clientsList.push(event);
  }

  /**
  * Recieves event when a client is updated in the form.
  * It updates the client selected.
  * Params:
  *   - event: Client updated received from the event.
  **/
  public onClientUpdated(event: Client) {
    let oldClient = this.clientsList.filter(client => client.id === event.id)[0];
    let index = this.clientsList.indexOf(oldClient);
    if (index >= 0) {
      this.clientsList[index] = event;
    }
  }
}
