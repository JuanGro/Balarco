import { Component, OnInit } from '@angular/core';

// Models
import { Iguala } from './iguala-model';
import { Client } from './../clients/client-model';
import { ArtWork } from './../../general-user/works/art-works/art-work-model';
import { URLSearchParams } from '@angular/http';

// Services
import { HttpService } from './../../shared/http-service/http.service';
import { CustomToastService } from '../../shared/toast/custom-toast.service';

// Environment
import { environment } from '../../../environments/environment';

@Component({
  selector: 'igualas',
  templateUrl: 'igualas.component.html'
})
/**
* Component that manages all Igualas CRUD.
* - List all Igualas.
* - Create a new Igula.
* - Update an Iguala.
* - Remove an Iguala.
**/
export class IgualasComponent implements OnInit {
  // Variable that saves the title to show in the template.
  public title: string;
  // List of igualas received from httpService.
  public igualasList: Iguala[];
  // List of clients received from httpService.
  public clientsList: Client[];
  // List of art works that could be associated with the Iguala.
  public artWorkList: ArtWork[];
  // List of current art works from Iguala object.
  public currentArtWorkList: ArtWork[];
  // Variable to store the Iguala received from parent.
  public iguala: Iguala;
  // Title for new Iguala modal.
  public titleNewModal: string;
  // Title for update Iguala modal.
  public titleUpdateModal: string;
  // Title for danger Iguala modal.
  public titleDangerModal: string;
  // Description for danger Iguala modal.
  public descriptionDangerModal: string;

  public constructor(public httpService: HttpService, private toaster: CustomToastService) { }

  /**
  * Builds the component for first time.
  * - Save the title to show in template.
  * - Load igualas and clients from HttpService.
  **/
  public ngOnInit() {
    this.title = 'Lista de Igualas';
    this.titleNewModal = 'Nueva Iguala';
    this.titleUpdateModal = 'Modificar Iguala';
    this.titleDangerModal = 'Eliminar Iguala';
    this.descriptionDangerModal = '¿Está usted seguro de eliminar esta iguala?';

    this.loadIgualasList(environment.IGUALAS_URL);
    this.loadClientsList(environment.CLIENTS_URL);
    this.loadArtTypeList(environment.ART_TYPES_URL);
  }

  /**
  * Loads all the igualas with httpService.
  * Params:
  *   - url: Url to igualas API methods.
  **/
  public loadIgualasList(url: string) {
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
  * Loads all the clients from the get method in httpService to use it the client attribute of the current component.
  * Params:
  *   - url: The url where the service will comunicate to get the Client object.
  **/
  public loadClientsList(url: string) {
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
  * Loads all Art types from the get method of ArtType API
  * Convert them in an array of ArtWork objects with 0 quantity to be filled in modal.
  **/
  public loadArtTypeList(url: string) {
    let work_work_type_id = '1';
    let params = new URLSearchParams();
    params.set('work_work_type_id', work_work_type_id);
    this.httpService.getObject(url, params)
                    .map((data: any) => data.json())
                    .subscribe(artTypesJSON => {
                      // Creates ArtWorks objects from JSON.
                      this.artWorkList = [];
                      for (let artJSON of artTypesJSON) {
                        this.artWorkList.push(new ArtWork(artJSON));
                      }
                    },
                      err => {
                        // Call of toast
                      }
                    );
  }

  /**
  * Saves which iguala was selected by the user.
  * Params:
  *   - object: An Iguala object.
  **/
  public getIgualaFromTable(object: Iguala) {
    this.iguala = object;
    this.currentArtWorkList = this.iguala.art_iguala;
  }

  /**
  * Recieves event when a new iguala is created in the form.
  * It pushes the new iguala to the list.
  * Params:
  *   - event: New iguala received from the event.
  **/
  public onIgualaCreated(event: Iguala) {
    this.igualasList.push(event);
  }

  /**
  * Receives event when an iguala is updated in the form.
  * It updates the iguala selected.
  **/
  public onIgualaUpdated(event: Iguala) {
    let oldIguala = this.igualasList.filter(iguala => iguala.id === event.id)[0];
    let index = this.igualasList.indexOf(oldIguala);
    if (index >= 0) {
      this.igualasList[index] = event;
    }
  }

  /**
  * Requests to the Backend service to remove the iguala selected by the user.
  * Params:
  *   - object: An iguala object.
  **/
  public removeIguala(object: Iguala) {
    this.httpService.deleteObject(environment.IGUALAS_URL + object.id + '/').subscribe(result => {
      if (result.ok) {
        let index = this.igualasList.indexOf(object);
        if (index >= 0) {
          this.igualasList.splice(index, 1);
        }
        this.toaster.show(result, 'Iguala eliminada', 'La iguala se eliminó con éxito');
      }
    },
  error => {
    this.toaster.show(error, 'Error', 'Ocurrió un error al eliminar iguala');
  });
  }

  /**
  * Clears the contact variable to get an empty modal.
  **/
  public initializeModal() {
    this.iguala = new Iguala();
  }
}
