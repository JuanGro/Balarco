import { Component, OnChanges, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

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
import { Designer } from './designer/designer-model';
import { DesignerString } from './designer/designer-model';
import { User } from '../../admin/users/user-model';

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
  @Input('work') work: Work;
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
  // Receives status list from parent component.
  @Input('statusList') statusList: Status[];
  // Receives user list from parent component.
  @Input('userList') userList: User[];
  // Requests close of the current modal to parent component.
  @Output() requestCloseModal: EventEmitter<string> = new EventEmitter();
  // Requests to parent component the show of the danger modal to confirm if the contact is permanent removed.
  @Output() requestWarning: EventEmitter<string> = new EventEmitter();
  // Event for the parent to push a new Work to the list.
  @Output() workCreated: EventEmitter<Work> = new EventEmitter();
  // Event for the parent to push updated Work to the list.
  @Output() workUpdated: EventEmitter<Work> = new EventEmitter();
  // Variable to check in test what action is executed between components.
  public modalAction: string = '';
  // Variable for filtering Contacts by Client selected in dropown..
  private currentContacts: Contact[];
  // Variable for filtering ArtWorks by Iguala selected in dropdown.
  private currentArtWorkList: ArtWork[];
  // Variable to keep track of the current work type chosen.
  private currentWorkTypeId: number = 0;
  // Array to keep track of the possible status the work can get into.
  private possibleStatus: Status[];
  // Variable to set the client when an existing work is received.
  private client_id: number;
  // Variable to set the contact when client dropdown changes.
  private contact_id: number;
  // Variable to store Work before starting to update.
  public oldWork: Work;
  // Variable to save which designer is selecting the user in the Ng2-Select.
  public value: Array<any>;
  // List which saves all the users in strings to handle in the Ng2-Select.
  public designerStringList: DesignerString[];
  // List of designers which will be sent to create/update a user.
  public designerListToSend: Designer[];
  // Variable to identify if the ng2-select is used or not to change or assign designers.
  public designersChanges: boolean;

  public constructor(private httpService: HttpService, private toaster: CustomToastService) { }

  /**
  * Builds the component for first time each time when it's called.
  *   - Initialize the form depending if the new or update work form is called.
  *   - Use an auxiliary variable to select a default value for the dropdown used in the form.
  **/
  public ngOnChanges() {
    // Initialize lists.
    this.designerStringList = [];
    this.designerListToSend = [];
    this.value = [];
    let designer_name = '';

    // Boolean to know if it's neccessary to reset the ng-select if the user is going to change groups.
    this.designersChanges = false;

    if (this.userList) {
      for (let designer of this.userList) {
        let designerObject: DesignerString = new DesignerString();
        designerObject.id = designer.id;
        designerObject.text = designer.first_name + ' ' + designer.last_name + ' (' + designer.groups_complete[0].name + ')';
        this.designerStringList.push(designerObject);
      };
    }


    if (!this.work) {
      // New work
      this.work = new Work();
    } else if (this.work && !this.work.id) {
      if (this.statusList) {
        this.possibleStatus =  this.getPossibleStatusForNewProject();
      }
      this.initialDropdownSetup();
    } else if (this.work && this.work.id) {
      // Update work
      this.oldWork = new Work(this.work);
      this.loadPossibleStatusForExistingProject();
      this.setValuesWithExistingWork();

      // Saves in the list the designers for the current work.
      if (this.work.work_designers) {
        for (let designer of this.work.work_designers) {
          this.designerListToSend.push(designer);

          let designer_complete = this.userList.filter(x => x.id === +designer.designer);
          if (designer_complete.length > 0) {
            designer_name = designer_complete[0].first_name + ' ' + designer_complete[0].last_name +
            ' (' + designer_complete[0].groups_complete[0].name + ')';
          }

          let designerObject: DesignerString = new DesignerString();
          designerObject.id = designer.designer;
          designerObject.text = designer_name;
          this.value.push(designerObject);
        }
      }
    }
  }

  /**
  * Method to fill dropdowns initially when the modal is shown and Work is new.
  **/
  private initialDropdownSetup() {
    if (this.clientsList && this.contactsList && this.clientsList.length > 0) {
      this.client_id = this.clientsList[0].id;
      this.filterContactsByClientId(this.client_id);
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
      if (this.possibleStatus && this.possibleStatus.length > 0) {
        this.work.current_status = this.possibleStatus[0].id;
      }
      if (this.workTypesList && this.workTypesList.length > 0) {
        this.work.work_type = this.workTypesList[0].id;
        this.work.work_type_id_enum = this.workTypesList[0].work_type_id;
      }
    }
  }

  /**
  * Method to fill dropdowns when the modal is shown and Work is being updated.
  **/
  private setValuesWithExistingWork() {
    if (this.work) {
      if (this.work.contact_complete) {
        this.client_id = this.work.contact_complete.client;
        this.filterContactsByClientId(this.client_id);
      }
      this.currentWorkTypeId = this.work.work_type_complete.work_type_id;
      this.currentArtWorkList = this.work.art_works;
      this.contact_id = this.work.contact;
    }
  }

  /**
  * Executes the submitUpdatedWork or submitNewWork depending if the work
  * received when the modal was called is empty or not.
  **/
  public submitWorkForm(form: NgForm, object: Work) {

    this.work.work_designers = this.designerListToSend;
    console.log(this.designerListToSend);

    this.work.art_works = this.currentArtWorkList;
    this.work.contact = this.contact_id;

    // TODO: Remove when Users module is ready.
    this.work.executive_id = 9;
    // let designer: Designer = { designer: 9, active_work: true };
    // let designer2: Designer = { designer: 10, active_work: true };
    // this.work.work_designers = [ designer, designer2 ];

    console.log(this.work);

    if (this.work.id) {
      // Update work
      this.submitUpdatedWork();
    } else {
      // New work
      this.submitNewWork();
    }
    this.work = new Work();
    form.control.markAsUntouched();
  }

  /**
  * Requests the API to create a new Work.
  **/
  private submitNewWork() {
    this.httpService.postObject(environment.WORKS_URL, this.work.generateJSONForPOST()).subscribe(result => {
      if (result.ok) {
        let newWork = new Work(result.json());
        this.workCreated.emit(newWork);
        this.toaster.show(result, 'Trabajo creado', 'El trabajo se creó con éxito');
      }
    },
    error => {
      this.toaster.show(error, 'Error', 'Ocurrió un error al guardar el trabajo');
    });
  }

  /**
  * Requests the API to update a current work.
  **/
  private submitUpdatedWork() {
    this.httpService.updateObject(environment.WORKS_URL + this.work.id + '/', this.work.generateJSONForPOST()).subscribe(result => {
      if (result.ok) {
        let updatedWork = new Work(result.json());
        this.workUpdated.emit(updatedWork);
        this.toaster.show(result, 'Trabajo actulizado', 'El trabajo se actualizó con éxito');
      }
    },
    error => {
      this.toaster.show(error, 'Error', 'Ocurrió un error al actualizar el trabajo');
    });
  }

  /**
  * Method that listens to event of change in the Clients dropdown.
  * Params:
  *   - id: Id of the new client selected.
  **/
  public onClientChange(id: number) {
    this.filterContactsByClientId(id);
  }

  /**
  * Method that filters the contacts by the client id.
  * Params:
  *   - id: Id of the client from which the contacts will be filtered.
  **/
  private filterContactsByClientId(id: number) {
    if (this.contactsList) {
      this.currentContacts = this.contactsList.filter(x => x.client === +id);
      if (this.currentContacts.length > 0) {
        this.contact_id = this.currentContacts[0].id;
      }
    }
  }

  /**
  * Method that listens to event of change in the Igualas dropdown.
  * Params:
  *   - id: Id of the new iguala selected.
  **/
  public onIgualaChange(id: number) {
    this.filterArtWorksByIgualaId(id);
  }

  /**
  * Method that filters the artWorks by the iguala id.
  * Params:
  *   - id: Id of the iguala from which the artWorks will be filtered.
  **/
  private filterArtWorksByIgualaId(id: number) {
    this.currentArtWorkList = [];
    for (let artWork of this.igualasList.filter(x => x.id === +id)[0].art_iguala) {
      this.currentArtWorkList.push(new ArtWork(artWork));
    }
  }

  /**
  * Method that listens to event of change in the WorkType dropdown.
  * Params:
  *   - id: Id of the new workType selected.
  **/
  public onWorkTypeChange(id: number) {
    this.currentWorkTypeId = this.getWorkTypeIdById(id);
    this.work.work_type_id_enum = this.currentWorkTypeId;
    if (this.currentWorkTypeId === 1 && this.igualasList && this.igualasList.length > 0) {
      this.filterArtWorksByIgualaId(this.igualasList[0].id);
      this.work.iguala = this.igualasList[0].id;
    } else if (this.currentWorkTypeId === 2) {
      this.currentArtWorkList = [];
      for (let artWork of this.graduationArtTypes) {
        this.currentArtWorkList.push(new ArtWork(artWork));
      }
    }
  }

  /**
  * Method to get the work_type_id of a work type by its DB object id
  * This is needed because we are using an enum on Django.
  * Params:
  *   - id: DB id object of a WorkType
  * Returns:
  *   - The work_type_id.
  **/
  private getWorkTypeIdById(id: number): number {
    return this.workTypesList.filter(x => x.id === +id)[0].work_type_id;
  }

  /**
  * Function that returns an array of possible status if the project is new.
  * Returns:
  *   - Array of Status.
  **/
  private getPossibleStatusForNewProject(): Status[] {
    return this.statusList.filter(status => status.status_id === 0 || status.status_id === 1);
  }

  /**
  * Function that loads the possible status changes that a work can have.
  **/
  private loadPossibleStatusForExistingProject() {
    this.httpService.getObject(environment.WORKS_URL + this.work.id + '/possible-status-changes/')
                    .map((data: any) => data.json())
                    .subscribe(statusListJSON => {
                      this.possibleStatus = [];
                      for (let status of statusListJSON) {
                        this.possibleStatus.push(new Status(status));
                      }
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
  * Set work with TWDB with old values or clear object if it's new.
  **/
  public cancelForm(form: NgForm) {
    if (this.oldWork) {
      this.workUpdated.emit(this.oldWork);
    }
    this.work = new Work();
    form.control.markAsUntouched();
  }

  /**
  * Adds the selected element to the designerListToSend list.
  **/
  public selected(value: DesignerString): void {
    let object: Designer = new Designer();
    object.designer = value.id;
    object.active_work = true;
    this.designerListToSend.push(object);
  }

/**
  * Removes the selected element in the designerListToSend list.
  **/
  public removed(value: DesignerString): void {
    let index = this.designerListToSend.indexOf(value);
    if (index >= 0) {
      this.designerListToSend.splice(index, 1);
    }
  }

  public refreshValue(value: any): void {
    if (!this.designersChanges) {
      this.designerListToSend = [];
      this.designersChanges = true;
    }
    this.value = value;
  }

  /**
  * Method to show like an string the current user group list.
  **/
  public itemsToString(value: Array<any> = []): string {
    return value
      .map((item: any) => {
        return item.text;
      }).join(', ');
  }
}
