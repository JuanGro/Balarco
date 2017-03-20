import { Component, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

// Services
import { HttpService } from './../../shared/http-service/http.service';
import { CustomToastService } from '../../shared/toast/custom-toast.service';

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
  // Requests close of the current modal to parent component.
  @Output() requestCloseModal: EventEmitter<string> = new EventEmitter();
  // Requests to parent component the show of the danger modal to confirm if the contact is permanent removed.
  @Output() requestWarning: EventEmitter<string> = new EventEmitter();
  // Variable to check if the submitForm method finish correctly.
  public success: boolean = false;
  // Variable to check in test what action is executed between components.
  public modalAction: string = '';
  // Initialization of control form.
  public worksModalForm: FormGroup;
  // Variable to active the form.
  public active: boolean = true;

  public constructor(private httpService: HttpService, private toaster: CustomToastService) { }
  /**
  * Builds the component for first time each time when it's called.
  *   - Initialize the form depending if the new or update work form is called.
  *   - Use an auxiliary variable to select a default value for the dropdown used in the form.
  **/
  public ngOnChanges() {
  }
}
