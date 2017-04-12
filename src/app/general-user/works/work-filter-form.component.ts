import { Component, OnChanges, OnInit } from '@angular/core';

// Models
import { WorkFilter } from './work-filter.model';

@Component({
  selector: 'work-filter-form',
  templateUrl: 'work-filter-form.component.html'
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
export class WorkFilterFormComponent implements OnChanges, OnInit {
    public workFilter: WorkFilter;

    public ngOnInit() {
        console.log('start');
        this.workFilter = new WorkFilter();
    }

  /**
  * Builds the component for first time each time when it's called.
  *   - Initialize the form depending if the new or update work form is called.
  *   - Use an auxiliary variable to select a default value for the dropdown used in the form.
  **/
  public ngOnChanges() {
      this.workFilter = new WorkFilter();
      console.log('hi', this.workFilter);
  }
}
