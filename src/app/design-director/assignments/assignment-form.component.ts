import { Component, OnChanges, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

// Services
import { HttpService } from './../../shared/http-service/http.service';
import { CustomToastService } from '../../shared/toast/custom-toast.service';

// Environment
import { environment } from '../../../environments/environment';

// Models
import { ArtWork } from '../../general-user/works/art-works/art-work-model';
import { Client } from '../../accounts/clients/client-model';
import { Contact } from '../../accounts/contacts/contact-model';
import { Iguala } from '../../accounts/igualas/iguala-model';
import { Status } from '../../general-user/works/status/status-model';
import { Work } from '../../general-user/works/work-model';
import { WorkType } from '../../general-user/works/work-type/work-type-model';
import { Designer } from '../../general-user/works/designer/designer-model';
import { DesignerString } from '../../general-user/works/designer/designer-model';
import { User } from '../../admin/users/user-model';

@Component({
  selector: 'assignment-form',
  templateUrl: 'assignment-form.component.html'
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
export class AssignmentFormComponent implements OnChanges {
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
  // Event for the parent to push updated Work to the list.
  @Output() workUpdated: EventEmitter<Work> = new EventEmitter();
  // Requests to parent component the show of the danger modal to confirm if the contact is permanent removed.
  @Output() titleModal: EventEmitter<string> = new EventEmitter();
  // Variable to check in test what action is executed between components.
  public modalAction: string = '';
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
    } else {
      // Send the current work to parent component, It will change the title.
      this.titleModal.emit(this.work.name);

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
  * Executes the submitUpdatedWork or submitNewWork depending if the work
  * received when the modal was called is empty or not.
  **/
  public submitWorkForm(form: NgForm, object: Work) {
    this.work.work_designers = this.designerListToSend;

    // TODO: Remove when Users module is ready.
    this.work.executive_id = 9;

    this.submitUpdatedWork();
    form.control.markAsUntouched();
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
  * Requests to parent component to close the current modal.
  **/
  public requestCloseThisModal() {
    this.modalAction = 'Close modal';
    this.requestCloseModal.emit(this.modalAction);
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

  /**
  * Identify the value that is selected..
  **/
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
