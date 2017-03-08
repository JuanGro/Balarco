import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

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
  public igualasModalForm: FormGroup;

  public constructor(public httpService: HttpService) { }

  public ngOnInit() {
    this.title = 'Lista de Igualas';

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
                    .subscribe(igualasList => this.igualasList = igualasList,
                      err => {

                      });

  }
}
