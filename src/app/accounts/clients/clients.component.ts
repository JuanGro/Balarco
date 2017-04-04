import { Component, OnInit, Input } from '@angular/core';

// Class
import { Client } from './client-model';

// Services
import { HttpService } from './../../shared/http-service/http.service';
import { CustomToastService } from '../../shared/toast/custom-toast.service';

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
  // Received from table component, it gives me the contact that the user selected to see his detail.
  @Input('currentClient') currentClient: Client;
  // Received from table component, it gives me the value that the user is typing in the search.
  @Input('valueSearch') valueSearch: string;
  // Variable that saves the title to show in the template.
  public title: string;
  // Original copy of the client list it's used always like a base for filter by name.
  public completeClientList: Client[];
  // Client list used for the search.
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

  public constructor(public httpService: HttpService, private toaster: CustomToastService) { }

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
                      this.clientsList.sort().reverse();
                      this.completeClientList = this.clientsList;
                    },
                    error => {
                            this.toaster.show(error, 'Error', 'Ocurrió un error al obtener la lista de clientes');
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
  * Saves the updated client list if the user is using a filter.
  * Params:
  *   - list: A Clients list.
  **/
  public getClientListFromTable(list: Client[]) {
    this.clientsList = list;
  }

  /**
  * Shows the client list that the user is requesting in the filter.
  * Params:
  *   - value: String from search form.
  **/
  public getValueSearch(value: string) {
    this.valueSearch = value;
    this.clientsList = [];
    this.completeClientList.sort();
    if (this.valueSearch === '') {
      this.clientsList = this.completeClientList;
    } else {
      for (let clientFromList of this.completeClientList) {
        if (clientFromList.name.toLowerCase().includes(this.valueSearch.toLowerCase())) {
            let client = new Client(clientFromList);
            this.clientsList.push(client);
        }
      }
    }
  }

  /**
  * Requests to the Backend service to remove the client selected by the user and reload the search.
  * Params:
  *   - object: A Client object.
  * Returns:
  *   - result: Response from backend service to know if the operation was success or not.
  **/
  public removeClient(event: Client) {
    this.httpService.deleteObject(environment.CLIENTS_URL + event.id + '/').subscribe(result => {
      if (result.ok) {
        let oldClient = this.completeClientList.filter(client => client.id === event.id)[0];
        let index = this.completeClientList.indexOf(oldClient);
        if (index >= 0) {
          this.completeClientList.splice(index, 1);
          if (this.valueSearch) {
          this.getValueSearch(this.valueSearch);
          }
          this.toaster.show(result, 'Cliente eliminado', 'El cliente se eliminó con éxito');
        }
      }
    },
    error => {
      this.toaster.show(error, 'Error', 'Ocurrió un error al eliminar el cliente');
    });
  }

  /**
  * Receives event when a new client is created in the form.
  * It pushes the new client to the complete list and reload the search.
  * Params:
  *   - event: New client received from the event.
  **/
  public onClientCreated(event: Client) {
    this.completeClientList.push(event);
    if (this.valueSearch) {
      this.getValueSearch(this.valueSearch);
    }
  }

  /**
  * Receives event when a client is updated in the form.
  * It updates the client selected and reload the search.
  * Params:
  *   - event: Client updated received from the event.
  **/
  public onClientUpdated(event: Client) {
    let oldClient = this.completeClientList.filter(client => client.id === event.id)[0];
    let index = this.completeClientList.indexOf(oldClient);
    if (index >= 0) {
      this.completeClientList[index] = event;
      if (this.valueSearch) {
        this.getValueSearch(this.valueSearch);
      }
    }
  }
}
