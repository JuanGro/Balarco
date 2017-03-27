import { Component, OnInit } from '@angular/core';

// Services
import { HttpService } from './../../shared/http-service/http.service';
import { CustomToastService } from '../../shared/toast/custom-toast.service';

// Models
import { ArtWork } from './art-works/art-work-model';
import { Client } from '../../accounts/clients/client-model';
import { Contact } from '../../accounts/contacts/contact-model';
import { Iguala } from '../../accounts/igualas/iguala-model';
import { WorkType } from './work-type/work-type-model';
import { URLSearchParams } from '@angular/http';

// Environment
import { environment } from '../../../environments/environment';

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
export class WorksComponent implements OnInit {
  // Variable that saves the title to show in the template.
  public title: string;
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
  // Title of new work modal.
  public titleNewModal: string;
  // Title of update work modal.
  public titleUpdateModal: string;
  // Title of danger work modal.
  public titleDangerModal: string;
  // Description for danger work modal.
  public descriptionDangerModal: string;

  public constructor(public httpService: HttpService, private toaster: CustomToastService) { }

  /**
  * Builds the component for first time.
  *   - Save the title to show in the template.
  *   - Load the work list from get method in httpService.
  **/
  public ngOnInit() {
    this.title = 'Lista de contactos';
    this.titleNewModal = 'Nuevo Trabajo';
    this.titleUpdateModal = 'Modificar Trabajo';
    this.titleDangerModal = 'Eliminar trabajo';
    this.descriptionDangerModal = '¿Está usted seguro de eliminar este trabajo?';

    this.loadClientsList(environment.CLIENTS_URL);
    this.loadContactsList(environment.CONTACTS_URL);
    this.loadIgualasList(environment.IGUALAS_URL);
    this.loadWorkTypesList(environment.WORK_TYPES_URL);
    this.loadWorkTypesForGraduation(environment.ART_TYPES_URL);
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
                      err => {
                        // Call of toast
                      }
                    );
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
                      err => {
                        // Call of toast
                      }
                    );
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
                      err => {

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
                    });

  }

  /**
  * Clears the work variable to get an empty modal.
  **/
  public initializeModal() {}
}
