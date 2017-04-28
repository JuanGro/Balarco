import { Component, OnInit, Input } from '@angular/core';

// Services
import { HttpService } from './../../shared/http-service/http.service';
import { CustomToastService } from '../../shared/toast/custom-toast.service';

// Models
import { User } from '../../admin/users/user-model';
import { Work } from '../../general-user/works/work-model';
import { Designer } from '../../general-user/works/designer/designer-model';
import { URLSearchParams } from '@angular/http';

// Environment
import { environment } from '../../../environments/environment';

@Component({
  selector: 'assignments',
  templateUrl: 'assignments.component.html'
})
/**
* Component which manage the administration of works:
* - List all the works.
* - Update an specific work.
**/
export class AssignmentsComponent implements OnInit {
  // Received from table component, it gives me the value that the user is typing in the search.
  @Input('valueSearch') valueSearch: string;
  // Variable that saves the title to show in the template.
  public title: string;
  // Variable to keep track of current work.
  public work: Work;
  // Variable that saves all works from DB.
  public worksList: Work[];
  // Variable to save the complete work list.
  public completeWorksList: Work[];
  // Variable that saves all users from DB.
  public userList: User[];
  // List of designers
  public designerListDefault: Designer[];
  // Title of update work modal.
  public titleUpdateModal: string;

  public constructor(public httpService: HttpService, private toaster: CustomToastService) { }

  /**
  * Builds the component for first time.
  *   - Save the title to show in the template.
  *   - Load the work list from get method in httpService.
  **/
  public ngOnInit() {
    this.title = 'Trabajos por asignar';
    this.titleUpdateModal = 'Asignar diseñadores a trabajo';
    this.designerListDefault = [];

    this.loadWorksList(environment.WORKS_URL);
    this.loadUserList(environment.USERS_URL);
  }

  /**
  * Loads all the works from the get method in httpService to use it the work attribute of the current component.
  * Params:
  *   - url: The url where the service will comunicate to get the Work objects.
  **/
  private loadWorksList(url: string) {
    let params = new URLSearchParams();
    params.append('current_status_id', '1');
    this.httpService.getObject(url, params)
                    .map((data: any) => data.json())
                    .subscribe(worksListJSON => {
                      this.worksList = [];
                      this.completeWorksList = [];
                      for (let workJSON of worksListJSON) {
                        this.worksList.push(new Work(workJSON));
                        this.completeWorksList.push(new Work(workJSON));
                      }
                    },
                    error => {
                      this.toaster.show(error, 'Error', 'Ocurrió un error al cargar los trabajos');
                    });
  }

  /**
  * Loads all the users from the get method in httpService to use it the user attribute of the current component.
  * Params:
  *   - url: The url where the service will comunicate to get the User object.
  **/
  private loadUserList(url: string) {
    let params = new URLSearchParams();
    params.append('group_name', 'Super usuario');
    params.append('group_name', 'Director de arte');
    params.append('group_name', 'Diseñador SR');
    params.append('group_name', 'Diseñador JR');
    this.httpService.getObject(url, params)
                    .map((data: any) => data.json())
                    .subscribe(userListJSON => {
                      // Initialize lists
                      this.userList = [];
                      this.designerListDefault = [];

                      // Creates clients objects from JSON.
                      for (let userJSON of userListJSON) {
                        this.userList.push(new User(userJSON));
                        /* Assign to designerListDefault all the users with
                        active_work: false */
                        let designer: Designer = new Designer();
                        designer.designer = userJSON.id;
                        designer.active_work = false;
                        this.designerListDefault.push(designer);
                      }
                    },
                    error => {
                      this.toaster.show(error, 'Error', 'Ocurrió un error al cargar los usuarios');
                    });
  }

  /**
  * Shows the client list that the user is requesting in the filter.
  * Params:
  *   - value: String from search form.
  **/
  public getValueSearch(value: string) {
    this.valueSearch = value;
    this.worksList = [];
    this.completeWorksList.sort();
    if (this.valueSearch === '') {
      this.worksList = this.completeWorksList;
    } else {
      for (let workFromList of this.completeWorksList) {
        if (workFromList.name.toLowerCase().includes(this.valueSearch.toLowerCase()) ||
            workFromList.work_type_complete.name.toLowerCase().includes(this.valueSearch.toLowerCase())) {
            this.worksList.push(new Work(workFromList));
        }
      }
    }
  }

  /**
  * Changes the title depending of the work that is selected.
  **/
  public changeTitle(event) {
    this.titleUpdateModal = event;
  }

  /**
  * Recieves the work which is selected by the user.
  * Params:
  *   - object: Work selected.
  **/
  public getWorkFromTable(object: Work) {
    this.work = object;
  }

  /**
  * Receives event when a work is updated in the form.
  * It updates the work selected.
  **/
  public onWorkUpdated(event: Work) {
    let oldWork = this.worksList.filter(work => work.id === event.id)[0];
    let index = this.worksList.indexOf(oldWork);
    if (index >= 0) {
      this.worksList[index] = event;
    }
  }
}
