import { Component, OnInit } from '@angular/core';

// Services
import { HttpService } from './../../shared/http-service/http.service';
import { CustomToastService } from '../../shared/toast/custom-toast.service';

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
  }

  /**
  * Clears the work variable to get an empty modal.
  **/
  public initializeModal() {}
}
