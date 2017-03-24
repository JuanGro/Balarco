import { Component, OnChanges, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

// Services
import { HttpService } from './../../shared/http-service/http.service';
import { CustomToastService } from '../../shared/toast/custom-toast.service';

// Models
import { ArtWork } from './art-works/art-work-model';
import { Client } from '../../accounts/clients/client-model';
import { Contact } from '../../accounts/contacts/contact-model';
import { Iguala } from '../../accounts/igualas/iguala-model';
import { WorkType } from './work-type/work-type-model';

@Component({
  selector: 'work-form',
  templateUrl: 'work-form.component.html'
})
/**
* Component which manage the forms for update and create a work:
* - Use OnChanges feature because it's important to know if the user opens a new modal or update modal depending
* in the work object value, the component is listening for each change in that variable.
* - Initialize form.
* - Create validations.
* - Request save the work.
* - Request actions in modals to the parent component.
**/
export class WorkFormComponent implements OnChanges {
  // Receives the contacts list from parent component.
  @Input('contactsList') contactsList: Contact[];
  // Receives the clients list from parent component.
  @Input('clientsList') clientsList: Client[];
  // Receives the igualas list from parent component.
  @Input('igualasList') igualasList: Iguala[];
  // Receives the workTypes list from parent component.
  @Input('workTypesList') workTypesList: WorkType[];
  // Requests close of the current modal to parent component.
  @Output() requestCloseModal: EventEmitter<string> = new EventEmitter();
  // Requests to parent component the show of the danger modal to confirm if the contact is permanent removed.
  @Output() requestWarning: EventEmitter<string> = new EventEmitter();
  // Variable to check in test what action is executed between components.
  public modalAction: string = '';
  // Initialization of control form.
  public worksModalForm: FormGroup;
  // Variable to active the form.
  public active: boolean = true;
  // Variable for filtering Contacts by Client selected in dropown..
  private currentContacts: Contact[];
  // Variable for filtering ArtWorks by Iguala selected in dropdown.
  private currentArtWorkList: ArtWork[];
  // Variable to keep track of the current work type chosen.
  private currentWorkTypeId: number = 0;

  public constructor(private httpService: HttpService, private toaster: CustomToastService) { }

  /**
  * Builds the component for first time each time when it's called.
  *   - Initialize the form depending if the new or update work form is called.
  *   - Use an auxiliary variable to select a default value for the dropdown used in the form.
  **/
  public ngOnChanges() {
    this.initialDropdownSetup();
  }

  /**
  * Method to fill initially when the modal is shown.
  **/
  private initialDropdownSetup() {
    if (this.clientsList && this.contactsList && this.clientsList.length > 0) {
      this.filterContactsByClientId(this.clientsList[0].id);
    }
    if (this.igualasList && this.igualasList.length > 0) {
      this.filterArtWorksByIgualaId(this.igualasList[0].id);
    }
  }

  /**
  * Method that listens to event of change in the Clients dropdown.
  * Params:
  *   - id: Id of the new client selected.
  **/
  private onClientChange(id: number) {
    this.filterContactsByClientId(id);
  }

  /**
  * Method that filters the contacts by the client id.
  * Params:
  *   - id: Id of the client from which the contacts will be filtered.
  **/
  private filterContactsByClientId(id: number) {
    this.currentContacts = this.contactsList.filter(x => x.client == id);
  }

  /**
  * Method that listens to event of change in the Igualas dropdown.
  * Params:
  *   - id: Id of the new iguala selected.
  **/
  private onIgualaChange(id: number) {
    this.filterArtWorksByIgualaId(id);
  }

  /**
  * Method that filters the artWorks by the iguala id.
  * Params:
  *   - id: Id of the iguala from which the artWorks will be filtered.
  **/
  private filterArtWorksByIgualaId(id: number) {
    this.currentArtWorkList = this.igualasList.filter(x => x.id == id)[0].art_iguala;
  }

  private onWorkTypeChange(id: number) {
    this.currentWorkTypeId = id;
  }
}
