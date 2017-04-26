import { Component, Input, Output, EventEmitter } from '@angular/core';

// Models
import { Work } from './work-model';
import { CurrentUser } from '../../shared/current-user/current-user-model';

// Enum
import { AssignmentFilter } from './works.component';

@Component({
  selector: 'works-list',
  templateUrl: 'works-list.component.html'
})
/**
* Component which manage the table which shows the list of works:
* - List all the works.
* - Request open a modal depending of which option is selected.
* - Send the work that is selected by the user.
**/
export class WorksListComponent {
  // Receives the works list from parent component.
  @Input('worksList') worksList: Work[];
  // Variable to disable stop filter button.
  @Input('stopFilterButton') stopFilterButton: boolean;
  // Variable to know the behavior of Works comp.
  @Input('assignmentFilter') assignmentFilter: AssignmentFilter;
  // Sends the request to show the new work modal in parent component.
  @Output() requestShowNewWorkModal: EventEmitter<string> = new EventEmitter();
  // Sends the request to show the update work modal in parent component.
  @Output() requestShowUpdateWorkModal: EventEmitter<string> = new EventEmitter();
  // Sends the request to show the filter work modal in parent component.
  @Output() requestShowFilterWorkModal: EventEmitter<string> = new EventEmitter();
  // Sends the request to stop filtering works in parent component.
  @Output() requestStopWorkFilter: EventEmitter<string> = new EventEmitter();
  // Sends the work selected by the user to parent component.
  @Output() currentWork: EventEmitter<Work> = new EventEmitter<Work>();
  // Variable to check in test what action is executed between components.
  public modalAction: string = '';
  // Needed variable for comparing enum in template.
  private staticEnum = AssignmentFilter;

  public constructor() { }

  /**
  * Requests to parent component to show the new work modal.
  **/
  public requestNewWorkModal() {
    this.modalAction = 'Open new Work modal';
    this.requestShowNewWorkModal.emit(this.modalAction);
  }

  /**
  * Requests to parent component to show the update work modal.
  **/
  public requestUpdateWorkModal() {
    this.modalAction = 'Open update Work modal';
    this.requestShowUpdateWorkModal.emit(this.modalAction);
  }

  /**
  * Requests to parent component to show the filter work modal.
  **/
  public requestFilterWorkModal() {
    this.modalAction = 'Open filter Work modal';
    this.requestShowFilterWorkModal.emit(this.modalAction);
  }

  /**
  * Requests to parent component to stop filtering works.
  **/
  public requestStopWorkFilterButton() {
    this.requestStopWorkFilter.emit('Stop');
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
