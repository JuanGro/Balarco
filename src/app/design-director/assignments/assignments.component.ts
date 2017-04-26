import { Component, OnInit } from '@angular/core';

// Services
import { HttpService } from './../../shared/http-service/http.service';
import { CustomToastService } from '../../shared/toast/custom-toast.service';

// Models
import { ArtWork } from '../../general-user/works/art-works/art-work-model';
import { Client } from '../../accounts/clients/client-model';
import { User } from '../../admin/users/user-model';
import { Contact } from '../../accounts/contacts/contact-model';
import { Iguala } from '../../accounts/igualas/iguala-model';
import { Status } from '../../general-user/works/status/status-model';
import { Work } from '../../general-user/works/work-model';
import { WorkType } from '../../general-user/works/work-type/work-type-model';
import { Designer } from '../../general-user/works/designer/designer-model';
import { URLSearchParams } from '@angular/http';

// Environment
import { environment } from '../../../environments/environment';

@Component({
  selector: 'assignments',
  templateUrl: 'assignments.component.html'
})
/**
* Component which manage the administration of works:
* - List all the works.
* - Update an specific work.
**/
export class AssignmentsComponent implements OnInit {
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
  // Variable that saves all users from DB.
  public userList: User[];
  // List of Status.
  public statusList: Status[];
  // List of designers
  public designerListDefault: Designer[];
  // Title of update work modal.
  public titleUpdateModal: string;

  public constructor(public httpService: HttpService, private toaster: CustomToastService) { }

  /**
  * Builds the component for first time.
  *   - Save the title to show in the template.
  *   - Load the work list from get method in httpService.
  **/
  public ngOnInit() {
    this.title = 'Trabajos por asignar';
    this.titleUpdateModal = 'Asignar diseñadores a trabajo';
    this.designerListDefault = [];

    this.loadWorksList(environment.WORKS_URL);
    this.loadClientsList(environment.CLIENTS_URL);
    this.loadContactsList(environment.CONTACTS_URL);
    this.loadIgualasList(environment.IGUALAS_URL);
    this.loadUserList(environment.USERS_URL);
    this.loadWorkTypesList(environment.WORK_TYPES_URL);
    this.loadWorkTypesForGraduation(environment.ART_TYPES_URL);
    this.loadStatusList(environment.STATUS_URL);
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
                        let object: Work = new Work(workJSON);
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
  * Loads all the users from the get method in httpService to use it the user attribute of the current component.
  * Params:
  *   - url: The url where the service will comunicate to get the User object.
  **/
  private loadUserList(url: string) {
    let params = new URLSearchParams();
    params.append('group_name', 'Super usuario');
    params.append('group_name', 'Director de arte');
    params.append('group_name', 'Diseñador SR');
    params.append('group_name', 'Diseñador JR');
    this.httpService.getObject(url, params)
                    .map((data: any) => data.json())
                    .subscribe(userListJSON => {
                      // Creates clients objects from JSON.
                      this.userList = [];
                      let userJSON: User;
                      for (userJSON of userListJSON) {
                        this.userList.push(new User(userJSON));
                        let designer: Designer = new Designer();
                        designer.designer = userJSON.id;
                        designer.active_work = false;
                        this.designerListDefault.push(designer);
                      }
                    },
                    error => {
                      this.toaster.show(error, 'Error', 'Ocurrió un error al cargar los usuarios');
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
  * Changes the title depending of the work that is selected.
  **/
  public changeTitle(event) {
    this.titleUpdateModal = event;
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
}
