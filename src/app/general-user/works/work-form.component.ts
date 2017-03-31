import { Component, OnChanges, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

// Services
import { HttpService } from './../../shared/http-service/http.service';
import { CustomToastService } from '../../shared/toast/custom-toast.service';

// Environment
import { environment } from '../../../environments/environment';

// Models
import { ArtWork } from './art-works/art-work-model';
import { Client } from '../../accounts/clients/client-model';
import { Contact } from '../../accounts/contacts/contact-model';
import { Iguala } from '../../accounts/igualas/iguala-model';
import { Status } from './status/status-model';
import { Work } from './work-model';
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
  @Input() work: Work;
  // Receives the contacts list from parent component.
  @Input('contactsList') contactsList: Contact[];
  // Receives the clients list from parent component.
  @Input('clientsList') clientsList: Client[];
  // Receives the igualas list from parent component.
  @Input('igualasList') igualasList: Iguala[];
  // Receives the workTypes list from parent component.
  @Input('workTypesList') workTypesList: WorkType[];
  // Receives workTypes for Graduation only from parent component.
  @Input('graduationArtTypes') graduationArtTypes: ArtWork[];
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
  // Array to keep track of the possible status the work can get into.
  private possibleStatus: Status[];

  public constructor(private httpService: HttpService, private toaster: CustomToastService) { }

  /**
  * Builds the component for first time each time when it's called.
  *   - Initialize the form depending if the new or update work form is called.
  *   - Use an auxiliary variable to select a default value for the dropdown used in the form.
  **/
  public ngOnChanges() {
    if (!this.work) {
      // New work
      this.work = new Work();
      this.possibleStatus =  this.getPossibleStatusForNewProject();
    }
    if (this.work && !this.work.id) {
      this.initialDropdownSetup();
    }
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
    if (this.workTypesList && this.workTypesList.length > 0) {
      this.currentWorkTypeId = this.workTypesList[0].work_type_id;
    } else {
      this.currentWorkTypeId = 0;
    }

    /**
    * This is for having initial values in dropdowns.
    **/
    if (!this.work.id) {
      if (this.currentContacts && this.currentContacts.length > 0) {
        this.work.contact = this.currentContacts[0].id;
      }
      if (this.igualasList && this.igualasList.length > 0) {
        this.work.iguala = this.igualasList[0].id;
      }
      if (this.possibleStatus && this.possibleStatus.length > 0) {
        this.work.status = this.possibleStatus[0].id;
      }
      if (this.workTypesList && this.workTypesList.length > 0) {
        this.work.work_type = this.workTypesList[0].id;
      }
    }
  }

  /**
  * Executes the submitUpdatedWork or submitNewWork depending if the work
  * received when the modal was called is empty or not.
  **/
  private submitWorkForm() {
    this.work.art_works = this.currentArtWorkList;
    console.log('HERE');
    console.log(this.work);
    if (this.work.id) {
      // Update work
    } else {
      // New work
      this.submitNewWork();
    }
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

  /**
  * Requests the API to create a new Work.
  **/
  private submitNewWork() {
    console.log('Sending...');
    console.log(this.work.generateJSONForPOST());
    this.httpService.postObject(environment.WORKS_URL, this.work.generateJSONForPOST()).subscribe(result => {
      if (result.ok) {
        console.log('WORK CREATED!');
      }
    },
    error => {
      console.log('OH NO ERROR IN WORK');
    });
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
    this.currentArtWorkList = [];
    for (let artWork of this.igualasList.filter(x => x.id == id)[0].art_iguala) {
      this.currentArtWorkList.push(new ArtWork(artWork));
    }
  }

  /**
  * Method that listens to event of change in the WorkType dropdown.
  * Params:
  *   - id: Id of the new workType selected.
  **/
  private onWorkTypeChange(id: number) {
    this.currentWorkTypeId = id;
    if (this.currentWorkTypeId == 1 && this.igualasList && this.igualasList.length > 0) {
      this.filterArtWorksByIgualaId(this.igualasList[0].id);
    }
    else if (this.currentWorkTypeId == 2) {
      this.currentArtWorkList = [];
      for (let artWork of this.graduationArtTypes) {
        this.currentArtWorkList.push(new ArtWork(artWork));
      }
    }
  }

  /**
  * Function that returns an array of possible status if the project is new.
  * Returns:
  *   - Array of Status.
  **/
  private getPossibleStatusForNewProject(): Status[] {
    let possibleStatus: Status[] = [];
    possibleStatus.push(new Status({ id: 0, name: 'Pendiente'}));
    possibleStatus.push(new Status({ id: 1, name: 'Diseño'}));
    return possibleStatus;
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
  * Set work with TWDB with old values or clear object if it's new.
  **/
  private cancelForm() {
    this.work = new Work();
    setTimeout(() => this.active = false, 1);
    setTimeout(() => this.active = true, 1);
    this.initialDropdownSetup();
  }
}
