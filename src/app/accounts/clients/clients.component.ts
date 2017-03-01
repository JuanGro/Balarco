import { Component, OnInit, Input } from '@angular/core';

// Class
import { Client } from './client';

// Services
import { HttpService } from './../../shared/http-service/http.service';

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
export class ClientComponent implements OnInit {
  // Variable that saves the title to show in the template.
  public title: string;
  // Client list
  public clientList: Client[]
  // Current selected client to update or delete
  public client: Client
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

    this.loadClientsList('clients/clients/');
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
                    .subscribe( clientList => this.clientList = clientList,
                                err => {
                                  // console.log(err);
                                  // Call of toast
                                }
                    );
  }

  /**
  * Clears the client variable to get an empty modal.
  **/
  public initializeModal() {
    this.client = null;
  }

  /**
  * Requests to the Backend service to remove the client selected by the user.
  * Params:
  *   - object: A Client object.
  * Returns:
  *   - result: Response from backend service to know if the operation was success or not.
  **/
  public removeClient(object: Client) {
    this.httpService.deleteObject('clients/clients/' + object.id + '/').subscribe(result => {
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
}