import { Component, Input, Output, EventEmitter } from '@angular/core';

// Models
import { Work } from '../../general-user/works/work-model';

@Component({
  selector: 'assignment-list',
  templateUrl: 'assignment-list.component.html'
})
/**
* Component which manage the table which shows the list of works:
* - List all the works.
* - Request open a modal depending of which option is selected.
* - Send the work that is selected by the user.
**/
export class AssignmentsListComponent {
  // Receives the works list from parent component.
  @Input('worksList') worksList: Work[];
  // Sends the request to show the update work modal in parent component.
  @Output() requestShowUpdateWorkModal: EventEmitter<string> = new EventEmitter();
  // Sends the work selected by the user to parent component.
  @Output() currentWork: EventEmitter<Work> = new EventEmitter<Work>();
  // Variable to check in test what action is executed between components.
  public modalAction: string = '';

  public constructor() { }

  /**
  * Requests to parent component to show the update work modal.
  **/
  public requestUpdateWorkModal() {
    this.modalAction = 'Open update Work modal';
    this.requestShowUpdateWorkModal.emit(this.modalAction);
  }

  /**
  * Sends to parent component the work selected by the user.
  * Params:
  *   - object: A Work object.
  **/
  public sendCurrentWork(object: Work) {
    this.currentWork.emit(object);
  }
}
