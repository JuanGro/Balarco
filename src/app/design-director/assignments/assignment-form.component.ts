import { Component, OnChanges, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

// Services
import { HttpService } from './../../shared/http-service/http.service';
import { CustomToastService } from '../../shared/toast/custom-toast.service';

// Environment
import { environment } from '../../../environments/environment';

// Models
import { Work } from '../../general-user/works/work-model';
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
* in the work object currentDesigner, the component is listening for each change in that variable.
* - Initialize form.
* - Request save the work.
* - Request actions in modals to the parent component.
**/
export class AssignmentFormComponent implements OnChanges {
  // Receives the current work from parent component.
  @Input('work') work: Work;
  // Receives user list from parent component.
  @Input('userList') userList: User[];
  // Receives designer list from parent component.
  @Input('designerListDefault') designerListDefault: Designer[];
  // Requests close of the current modal to parent component.
  @Output() requestCloseModal: EventEmitter<string> = new EventEmitter();
  // Event for the parent to push updated Work to the list.
  @Output() workUpdated: EventEmitter<Work> = new EventEmitter();
  // Requests to parent component the show of the danger modal to confirm if the contact is permanent removed.
  @Output() titleModal: EventEmitter<string> = new EventEmitter();
  // Variable to check in test what action is executed between components.
  public modalAction: string = '';
  // Variable to save which designer is selecting the user in the Ng2-Select.
  public currentDesigner: Array<any>;
  // List which saves all the users in strings to handle in the Ng2-Select.
  public designerStringList: DesignerString[];
  // List of designers which will be sent to create/update a user.
  public designerListToSend: Designer[];
  public designerName: string;

  public constructor(private httpService: HttpService, private toaster: CustomToastService) { }

  /**
  * Builds the component for first time each time when it's called.
  *   - Initialize the form depending if the new or update work form is called.
  *   - Use an auxiliary variable to select a default currentDesigner for the dropdown used in the form.
  **/
  public ngOnChanges() {
    // Initialize lists.
    this.currentDesigner = [];
    this.designerStringList = [];
    this.designerListToSend = [];
    this.designerName = '';

    // Get the user list and convert to string showing his group.
    if (this.userList) {
      for (let designer of this.userList) {
        this.designerName = designer.first_name + ' ' + designer.last_name + ' (' + designer.groups_complete[0].name + ')';
        this.designerStringList.push(this.convertToNgSelectFormat(designer.id, this.designerName));
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

          // Show the designers assigned to the work
          if (designer.active_work === true) {
            let designer_complete = this.userList.filter(x => x.id === +designer.designer);
            if (designer_complete.length > 0) {
              this.designerName = designer_complete[0].first_name + ' ' + designer_complete[0].last_name +
              ' (' + designer_complete[0].groups_complete[0].name + ')';
            }
            this.designerListToSend.push(designer);
            this.currentDesigner.push(this.convertToNgSelectFormat(designer.designer, this.designerName));
          }
        }
      }
    }
  }

  public convertToNgSelectFormat(designer_id: number, designer_name: string) {
    let designerObject: DesignerString = new DesignerString();
    designerObject.id = designer_id;
    designerObject.text = designer_name;
    return designerObject;
  }

  /**
  * Executes the submitUpdatedWork or submitNewWork depending if the work
  * received when the modal was called is empty or not.
  **/
  public submitWorkForm(form: NgForm) {
    this.work.work_designers = this.designerListToSend;
    console.log(this.work);

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
    this.ngOnChanges();
  }

  /**
  * Adds the selected element to the designerListToSend list.
  **/
  public selected(value: DesignerString): void {
    let designer: Designer = this.designerListToSend.filter(designer_aux => designer_aux.designer === value.id)[0];
    let index = this.designerListToSend.indexOf(designer);
    if (index >= 0) {
      this.designerListToSend[index].active_work = true;
    } else {
      let designer_aux: Designer = new Designer();
      designer_aux.active_work = true;
      designer_aux.designer = value.id;
      this.designerListToSend.push(designer_aux);
    }
    this.currentDesigner.push(value);
  }

  /**
  * Removes the selected element in the designerListToSend list.
  **/
  public removed(value: DesignerString): void {
    let designer: Designer = this.designerListToSend.filter(designer_aux => designer_aux.designer === value.id)[0];
    let index = this.designerListToSend.indexOf(designer);
    if (index >= 0) {
      this.designerListToSend[index].active_work = false;
    }

    let designerString = this.currentDesigner.filter(designer_aux => designer_aux.designer === value.id)[0];
    let indexString = this.currentDesigner.indexOf(designerString);
    if (indexString >= 0) {
      this.currentDesigner.slice(indexString, 1);
    }
  }
}
