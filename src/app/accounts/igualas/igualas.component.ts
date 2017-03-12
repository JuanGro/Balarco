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
}
