import { Component, Input, OnInit, OnChanges} from '@angular/core';

// Services
import { HttpService } from './../../shared/http-service/http.service';
import { CustomToastService } from '../../shared/toast/custom-toast.service';
import { ToasterService, Toast } from 'angular2-toaster/angular2-toaster';

// Models
import { ArtWork } from './art-works/art-work-model';
import { Client } from '../../accounts/clients/client-model';
import { Contact } from '../../accounts/contacts/contact-model';
import { Iguala } from '../../accounts/igualas/iguala-model';
import { Status } from './status/status-model';
import { User } from '../../admin/users/user-model';
import { Work } from './work-model';
import { WorkType } from './work-type/work-type-model';
import { URLSearchParams } from '@angular/http';

// Environment
import { environment } from '../../../environments/environment';

// Notifications
import './../../shared/reconnecting-websocket.min';
declare var ReconnectingWebSocket: any;

@Component({
  selector: 'works',
  templateUrl: 'works.component.html'
})
/**
* Component which manage the administration of works:
* - List all the works.
* - Create a new work.
* - Update an specific work.
* - Remove a work.
**/
export class WorksComponent implements OnInit, OnChanges {
  // Variable that saves the title to show in the template.
  public title: string;
  // Variable to keep track of current work.
  public work: Work;
  // Variable that saves all works from DB.
  public worksList: Work[];
  // Variable to save the complete work list.
  public completeWorksList: Work[];
  // Variable that saves all clients from DB.
  public clientsList: Client[];
  // Variable that saves all contacts from DB.
  public contactsList: Contact[];
  // List of igualas received from httpService.
  public igualasList: Iguala[];
  // List of Work Types received from httpService.
  public workTypesList: WorkType[];
  // List of Work Types of graduation only.
  public graduationArtTypes: ArtWork[];
  // List of Status.
  public statusList: Status[];
  // List of User allowed to be executives.
  public userExecutivesList: User[];
  // Title of new work modal.
  public titleNewModal: string;
  // Title of update work modal.
  public titleUpdateModal: string;
  // Title of filter work modal.
  public titleFilterModal: string;
  // Title of danger work modal.
  public titleDangerModal: string;
  // Description for danger work modal.
  public descriptionDangerModal: string;
  // Variable to disable stop filter button.
  public stopFilterButton: boolean;
  // Variable to control notificiation banner
  @Input() notificationBannerIsActive: boolean;
  public userId: string;

  public constructor(public httpService: HttpService, private toaster: CustomToastService, private toasterService: ToasterService) { }

  /**
  * Builds the component for first time.
  *   - Save the title to show in the template.
  *   - Load the work list from get method in httpService.
  **/
  public ngOnInit() {
    this.title = 'Lista de Trabajos';
    this.titleNewModal = 'Nuevo Trabajo';
    this.titleUpdateModal = 'Modificar Trabajo';
    this.titleDangerModal = 'Eliminar Trabajo';
    this.titleFilterModal = 'Filtrar trabajo(s)';
    this.descriptionDangerModal = '¿Está usted seguro de eliminar este trabajo?';
    this.stopFilterButton = true;
    this.loadWorksList(environment.WORKS_URL);
    this.loadClientsList(environment.CLIENTS_URL);
    this.loadContactsList(environment.CONTACTS_URL);
    this.loadIgualasList(environment.IGUALAS_URL);
    this.loadWorkTypesList(environment.WORK_TYPES_URL);
    this.loadWorkTypesForGraduation(environment.ART_TYPES_URL);
    this.loadStatusList(environment.STATUS_URL);
    this.loadUserExecutivesList(environment.USERS_URL);
    this.notificationBannerIsActive = false;
    this.userId = this.getCurrentUserId();
    this.receiveNotifications(environment.WORK_LIST_NOTIFICATIONS_URL, this.userId);
  }

  /**
  * Implements needed method to observ changes on inputs
  **/
  public ngOnChanges() {
  }

  /**
  * Loads all the works from the get method in httpService to use it the work attribute of the current component.
  * Params:
  *   - url: The url where the service will comunicate to get the Work objects.
  **/
  private loadWorksList(url: string) {
    this.httpService.getObject(url)
                    .map((data: any) => data.json())
                    .subscribe(worksListJSON => {
                      this.worksList = [];
                      this.completeWorksList = [];
                      for (let workJSON of worksListJSON) {
                        this.worksList.push(new Work(workJSON));
                        this.completeWorksList.push(new Work(workJSON));
                      }
                    },
                    error => {
                      this.toaster.show(error, 'Error', 'Ocurrió un error al cargar los trabajos');
                    });
  }

  /**
  * Loads all the clients from the get method in httpService to use it the client attribute of the current component.
  * Params:
  *   - url: The url where the service will comunicate to get the Client object.
  **/
  private loadClientsList(url: string) {
    this.httpService.getObject(url)
                    .map((data: any) => data.json())
                    .subscribe(clientsListJSON => {
                      // Creates clients objects from JSON.
                      this.clientsList = [];
                      for (let clientJSON of clientsListJSON) {
                        this.clientsList.push(new Client(clientJSON));
                      }
                    },
                    error => {
                      this.toaster.show(error, 'Error', 'Ocurrió un error al cargar los clientes');
                    });
  }

  /**
  * Loads all the contacts from the get method in httpService.
  * Params:
  *   - url: The url where the service will comunicate to get the Contact object.
  **/
  private loadContactsList(url: string) {
    this.httpService.getObject(url)
                    .map((data: any) => data.json())
                    .subscribe(contactsListJSON => {
                      // Creates Contact objects from JSON.
                      this.contactsList = [];
                      for (let contactJSON of contactsListJSON) {
                        this.contactsList.push(new Contact(contactJSON));
                      }
                    },
                    error => {
                      this.toaster.show(error, 'Error', 'Ocurrió un error al cargar los contactos');
                    });
  }

  /**
  * Loads all the igualas with httpService.
  * Params:
  *   - url: Url to igualas API methods.
  **/
  private loadIgualasList(url: string) {
    this.httpService.getObject(url)
                    .map((data: any) => data.json())
                    .subscribe(igualasListJSON => {
                      // Creates Iguala objects from JSON.
                      this.igualasList = [];
                      for (let igualaJSON of igualasListJSON) {
                        this.igualasList.push(new Iguala(igualaJSON));
                      }
                    },
                      error => {
                        this.toaster.show(error, 'Error', 'Ocurrió un error al cargar las igualas');
                      });

  }

  /**
  * Loads all the workTypes with httpService.
  * Params:
  *   - url: Url to work types API methods.
  **/
  private loadWorkTypesList(url: string) {
    this.httpService.getObject(url)
                    .map((data: any) => data.json())
                    .subscribe(workTypesListJSON => {
                      // Creates WorkType objects from JSON
                      this.workTypesList = [];
                      for (let workTypeJSON of workTypesListJSON) {
                        this.workTypesList.push(new WorkType(workTypeJSON));
                      }
                    },
                    error => {
                      this.toaster.show(error, 'Error', 'Ocurrió un error al cargar los tipos de trabajo');
                    });
  }

  /**
  * Loads all the art types for Graduation only with httpService.
  * Params:
  *   - url: Url to art types API methods.
  **/
  private loadWorkTypesForGraduation(url: string) {
    let graduation_id = '2'; // Should be id of graduación in API.
    let params = new URLSearchParams();
    params.set('work_work_type_id', graduation_id);
    this.httpService.getObject(url, params)
                    .map((data: any) => data.json())
                    .subscribe(graduationArtTypesJSON => {
                      this.graduationArtTypes = [];
                      for (let artType of graduationArtTypesJSON) {
                        this.graduationArtTypes.push(new ArtWork(artType));
                      }
                    },
                    error => {
                      this.toaster.show(error, 'Error', 'Ocurrió un error al cargar las graduaciones');
                    });

  }

  /**
  * Loads all the Status with httpService.
  * Params:
  *   - url: Url to Status API methods.
  **/
  private loadStatusList(url: string) {
    this.httpService.getObject(url)
                    .map((data: any) => data.json())
                    .subscribe(statusListJSON => {
                      this.statusList = [];
                      for (let status of statusListJSON) {
                        this.statusList.push(new Status(status));
                      }
                    },
                    error => {
                      this.toaster.show(error, 'Error', 'Ocurrió un error al cargar los estados');
                    });
  }

  /**
  * Loads all the User that can be executives with httpService.
  * Params:
  *   - url: Url to Users API methods.
  **/
  private loadUserExecutivesList(url: string) {
    let params = new URLSearchParams();
    params.append('group_name', 'Super usuario');
    params.append('group_name', 'Director de cuentas');
    params.append('group_name', 'Ejecutivo SR');
    params.append('group_name', 'Ejecutivo JR');
    this.httpService.getObject(url, params)
                    .map((data: any) => data.json())
                    .subscribe(usersListJSON => {
                      this.userExecutivesList = [];
                      for (let user of usersListJSON) {
                        this.userExecutivesList.push(new User(user));
                      }
                    }, error => {
                      this.toaster.show(error, 'Error', 'Ocurrió un error al cargar los ejecutivos');
                    });
  }

  /**
  * Recieves the work which is selected by the user.
  * Params:
  *   - object: Work selected.
  **/
  public getWorkFromTable(object: Work) {
    this.work = object;
  }

  /**
  * Receives event when a new work is created in the form.
  * It pushes the new work to the list.
  * Params:
  *   - event: New Work received from the event.
  **/
  public onWorkCreated(event: Work) {
    this.worksList.push(event);
  }

  /**
  * Get the url to get the contact list filtered.
  * Params:
  *   - urlFilterWorks: String with all the params to request the search to the API.
  **/
  public getResultSearch(urlFilterWorks: string) {
    this.httpService.getObject(urlFilterWorks)
                    .map((data: any) => data.json())
                    .subscribe(worksListJSON => {
                      this.worksList = [];
                      for (let workJSON of worksListJSON) {
                        this.worksList.push(new Work(workJSON));
                      }
                    },
                    error => {
                      this.toaster.show(error, 'Error', 'Ocurrió un error al cargar los trabajos filtrados');
                    });

    this.stopFilterButton = false;
  }

  /**
  * Back to the complete work list and disable the stop filter button.
  **/
  public stopWorkFilter() {
    this.worksList = this.completeWorksList;
    this.stopFilterButton = true;
  }

  /**
  * Receives event when a work is updated in the form.
  * It updates the work selected.
  **/
  public onWorkUpdated(event: Work) {
    let oldWork = this.worksList.filter(work => work.id === event.id)[0];
    let index = this.worksList.indexOf(oldWork);
    if (index >= 0) {
      this.worksList[index] = event;
    }
  }

  /**
  * Requests to the Backend service to remove the work selected by the user.
  * Params:
  *   - object: A work object.
  **/
  public removeWork(object: Work) {
    this.httpService.deleteObject(environment.WORKS_URL + object.id + '/').subscribe(result => {
      if (result.ok) {
        let index = this.worksList.indexOf(object);
        if (index >= 0) {
          this.worksList.splice(index, 1);
        }
        this.toaster.show(result, 'Trabajo eliminado', 'El trabajo se eliminó con éxito');
      }
    },
    error => {
      this.toaster.show(error, 'Error', 'Ocurrió un error al eliminar trabajo');
    });
  }

  /**
  * Opens websocket connection to specified url
  * to receive notification of changes to the database.
  * Params:
  *   - userId: Current user id to connect to correct channel
  *   - url: General address to connect to, to receive notifications
  **/
  public receiveNotifications(url: string, userId: string) {
    let ws_path = environment.WS_URL + url + userId;
    let socket = new ReconnectingWebSocket(ws_path);
    let self = this;
    socket.onmessage = function(message) {
        self.notificationBannerIsActive = true;
        let messageData = JSON.parse(message.data);
        let messageString = messageData['text'];
        self.showToast('Trabajos', messageString);
    };
  };

  /**
  * Reloads user list after
  **/
  public reloadWorkList() {
    this.notificationBannerIsActive = false;
    this.loadWorksList(environment.WORKS_URL);
    this.loadClientsList(environment.CLIENTS_URL);
    this.loadContactsList(environment.CONTACTS_URL);
    this.loadIgualasList(environment.IGUALAS_URL);
    this.loadWorkTypesList(environment.WORK_TYPES_URL);
    this.loadWorkTypesForGraduation(environment.ART_TYPES_URL);
    this.loadStatusList(environment.STATUS_URL);
    this.loadUserExecutivesList(environment.USERS_URL);
  }

  /**
  * Returns current user's id.
  **/
  public getCurrentUserId() {
    let currentUserJSON = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUserJSON) {
      return currentUserJSON['id'];
    } else {
      return null;
    }
  }

    /**
  * Creates a toast depending on a Response object.
  * Parameters:
  *   - response: Response received from the request.
  *   - title(Optional): Title for the toast.
  *   - message(Optional): Message for the toast.
  * Returns:
  *   - toast created.
  **/
  public createToast(title?: string, message?: string): Toast {
    let type: string;
    type = 'success';
    let toast: Toast = {
        type: type,
        title: title,
        body: message,
        showCloseButton: false
    };
    return toast;
  }

  /**
  * Shows a toast depending on a Response object.
  * Parameters:
  *   - response: Response received from the request.
  *   - title(Optional): Title for the toast.
  *   - message(Optional): Message for the toast.
  **/
  public showToast(title?: string, message?: string) {
    let toast = this.createToast(title, message);
    this.toasterService.pop(toast);
  }
}
