import { Component, OnInit } from '@angular/core';

// Models
import { Iguala } from './iguala-model';

// Services
import { HttpService } from './../../shared/http-service/http.service';

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
  //TODO: public clientsList: Client[];
  public iguala: Iguala;
  // Title for new Iguala modal.
  public titleNewModal: string;
  // Title for update Iguala modal.
  public titleUpdateModal: string;
  // Title for danger Iguala modal.
  public titleDangerModal: string;
  // Description for danger Iguala modal.
  public descriptionDangerModal: string;

  public constructor(public httpService: HttpService) { }

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
    this.descriptionDangerModal = '¿Estás seguro que deseas eliminar esta iguala?';

    this.loadIgualasList('works/igualas/');
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

  public getIgualaFromTable(object: Iguala) {
    this.iguala = object;
    console.log('object received');
    console.log(object);
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
    this.httpService.deleteObject('works/igualas/' + object.id + '/').subscribe(result => {
      if (result.ok) {
        let index = this.igualasList.indexOf(object);
        if (index >= 0) {
          this.igualasList.splice(index, 1);
        }
      }
    });
  }
}
