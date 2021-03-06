import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';

// Services
import { HttpService } from './../../shared/http-service/http.service';
import { CustomToastService } from '../../shared/toast/custom-toast.service';

// Environment
import { environment } from '../../../environments/environment';

// Models
import { Iguala } from './iguala-model';
import { Client } from './../clients/client-model';
import { ArtWork } from './../../general-user/works/art-works/art-work-model';

@Component({
  selector: 'iguala-form',
  templateUrl: 'iguala-form.component.html'
})
/**
* Component which manage the forms for update and create an Iguala:
*  - Use OnChanges feature because it's important to know if the user opens a new modal or update modal depending
* in the iguala object value, the component is listening for each change in that variable.
* - Initialize form.
* - Create validations.
* - Request save the contact.
* - Request actions in modals to the parent component.
**/
export class IgualaFormComponent implements OnChanges {
  // Receives the iguala selected by the user or the empty object to know if is called the update or create iguala form.
  @Input('iguala') iguala: Iguala;
  // Receives the clients list from parent component.
  @Input('clientsList') clientsList: Client[];
  // Receives the ArtWork list from parent component.
  @Input('artWorkList') artWorkList: ArtWork[];
  // Requests close of modal to parent component.
  @Output() requestCloseModal: EventEmitter<string> = new EventEmitter();
  // Requests to parent component the show of the danger modal to confirm if the iguala will be removed.
  @Output() requestWarning: EventEmitter<string> = new EventEmitter();
  // Event for the parent to push a new Iguala to the list.
  @Output() igualaCreated: EventEmitter<Iguala> = new EventEmitter();
  // Event for parent when an Iguala is updated.
  @Output() igualaUpdated: EventEmitter<Iguala> = new EventEmitter();
  // Variable that stores the old iguala if the update is canceled.
  public oldIguala: Iguala;
  // Variable to check in test what action is executed between components.
  public modalAction: string = '';

  public constructor(private httpService: HttpService, private toaster: CustomToastService) { }

  /**
  * Builds the component for first time each time when it's called.
  *   - Initialize the form depending if the new or update iguala form is called.
  *   - Use an auxiliary variable to select a default value for the dropdown used in the form.
  **/
  public ngOnChanges() {
    if (!this.iguala) {
      this.iguala = new Iguala();
    } else if (this.iguala && !this.iguala.id) {
      this.initialDropdownSetup();
    } else if (this.iguala && this.iguala.id) {
      this.oldIguala = new Iguala(this.iguala);
    }
  }

  /**
  * Method to fill dropdowns initially when the modal is shown and Iguala is new.
  **/
  private initialDropdownSetup() {
    if (this.clientsList && this.clientsList.length > 0) {
      this.iguala.client = this.clientsList[0].id;
    }
  }

  /**
  * Executes the submitUpdatedIguala or submitNewIguala depending if the iguala
  * received when the modal was called is empty or not.
  **/
  public submitIgualaForm(form: NgModel) {
    this.iguala.art_iguala = this.artWorkList;
    if (this.iguala.id) {
      // Update iguala
      this.submitUpdatedIguala();
    } else {
      // Create iguala
      this.submitNewIguala();
    }
    form.control.markAsUntouched();
  }

  /**
  * Requests the API to create a new Iguala.
  **/
  public submitNewIguala() {
    this.httpService.postObject(environment.IGUALAS_URL, this.iguala.generateJSONForPOST()).subscribe(result => {
      if (result.ok) {
        let newIguala = new Iguala(result.json());
        this.igualaCreated.emit(newIguala);
      }
      this.toaster.show(result, 'Iguala creada', 'La iguala se creó con éxito');
    },
    error => {
      this.toaster.show(error, 'Error', 'Ocurrió un error al guardar la iguala');
    });
    this.iguala = new Iguala();
  }

  /**
  * Requests the API to update an Iguala.
  **/
  public submitUpdatedIguala() {
    this.httpService.updateObject(environment.IGUALAS_URL + this.iguala.id + '/', this.iguala.generateJSONForPOST()).subscribe(result => {
      if (result.ok) {
        let updatedIguala = new Iguala(result.json());
        this.igualaUpdated.emit(updatedIguala);
      }
      this.toaster.show(result, 'Iguala actualizada', 'La iguala se actualizó con éxito');
    },
    error => {
      this.toaster.show(error, 'Error', 'Ocurrió un error al actualizar la iguala');
    });
  }

  /**
  * Requests to parent component to close the current modal.
  **/
  public requestCloseThisModal() {
    this.modalAction = 'Close modal';
    this.requestCloseModal.emit(this.modalAction);
  }

  /**
  * Requests to parent component to show the confirmation to remove the iguala selected.
  **/
  public requestWarningModal() {
    this.modalAction = 'Show warning modal';
    this.requestWarning.emit(this.modalAction);
  }

  /**
  * Set iguala with TWDB with old values or clear object if it's new.
  **/
  public cancelForm(form: NgModel) {
    if (this.oldIguala) {
      this.igualaUpdated.emit(this.oldIguala);
    }
    form.control.markAsUntouched();
  }

  /**
  * Make a get request to download the report from an iguala.
  **/
  public downloadReport() {
    this.httpService.getObject(environment.IGUALAS_URL + this.iguala.id + '/report/')
                    .subscribe(result => {
                      let parsedResponse = result.text();
                      this.extractContent(parsedResponse, this.iguala.name);
                    });
  }

  /**
  * Method to download a csv file from a Response object.
  * Params:
  *   - data: data received from server.
  *   - name: name of the current iguala.
  **/
  private extractContent(data: any, name: string) {
    let blob = new Blob(['\ufeff', data], { type: 'text/csv' });
    let url = window.URL.createObjectURL(blob);
    let anchor = document.createElement('a');
    anchor.download = name + '_report.csv';
    anchor.href = url;
    anchor.click();
  }
}
