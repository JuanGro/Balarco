import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';

// Models
import { User } from './user-model';
import { Group } from './group-model';
import { GroupString } from './group-model';

// Services
import { HttpService } from './../../shared/http-service/http.service';
import { CustomToastService } from '../../shared/toast/custom-toast.service';

// Environment
import { environment } from '../../../environments/environment';

@Component({
  selector: 'user-form',
  templateUrl: 'user-form.component.html'
})
/**
* Component which manage the forms for update and create a user:
* - Use OnChanges feature because it's important to know if the user opens a new modal or update modal depending
* in the user object currentGroupNameList, the component is listening for each change in that variable.
* - Initialize form.
* - Create validations.
* - Request save the user.
* - Request actions in modals to the parent component.
**/
export class UserFormComponent implements OnChanges {
  // Receives the user selected by the user or the empty object to know if is called the update or create user form.
  @Input('user') user: User;
  // Receives the group list from parent component.
  @Input('groupList') groupList: Group[];
  // Requests close of the current modal to parent component.
  @Output() requestCloseModal: EventEmitter<string> = new EventEmitter();
  // Requests to parent component the show of the danger modal to confirm if the user is permanent removed.
  @Output() requestWarning: EventEmitter<string> = new EventEmitter();
  // Event for parent to push the new user to the list.
  @Output() userCreated: EventEmitter<User> = new EventEmitter();
  // Event for parent to update the currentUser.
  @Output() userUpdated: EventEmitter<User> = new EventEmitter();
  // List containing the users's current groups
  public currentGroupList: Group[] = [];
  // Variable to check in test what action is executed between components.
  public modalAction: string = '';
  // Variable to return the old user if cancel the update form.
  public oldUser: User;
  // Variable to active the form.
  public active: boolean = true;
  // Variable to show the role of the contact selected.
  public array: string = '';
  // Variable to save which group is selecting the user in the Ng2-Select.
  public currentGroupNameList: Array<any>;
  // List which saves all the groups in strings to handle in the Ng2-Select.
  public groupStringList: GroupString[];
  // List of groups which will be sent to create/update a user.
  public userGroupsComplete: Group[];
  // Variable to identify if the ng2-select is used or not to change or assign a group.
  public groupsChanges: boolean;

  public constructor(private httpService: HttpService, private toaster: CustomToastService) { }

  /**
  * Builds the component for first time each time when it's called.
  *   - Initialize the form depending wether the new or update user form is called.
  *   - Use an auxiliary variable to select a default currentGroupNameList for the dropdown used in the form.
  **/
  public ngOnChanges() {
    // Initialize lists.
    this.userGroupsComplete = [];
    this.groupStringList = [];
    this.currentGroupNameList = [];

    // Boolean to know if it's neccessary to reset the ng-select if the user is going to change groups.
    this.groupsChanges = false;

    // Get the entire group list and convert to ng2-select format.
    if (this.groupList) {
      for (let group of this.groupList) {
        let groupObject: GroupString = new GroupString();
        groupObject.id = group.id;
        groupObject.text = group.name;
        this.groupStringList.push(groupObject);
      };
    }

    if (!this.user) {
      this.user = new User();
      this.oldUser = new User();
    } else {
      this.oldUser = new User(this.user);
      // Save in the list the current groups if is selected an existent user.
      if (this.user.groups_complete) {
        for (let group of this.user.groups_complete) {
          this.userGroupsComplete.push(group);
          let groupObject: GroupString = new GroupString();
          groupObject.id = group.id;
          groupObject.text = group.name;
          this.currentGroupNameList.push(groupObject);
        }
      }
    }
  }

  /**
  * Executes the submitUpdatedUser or submitNewUser depending if the user received when the modal was called is empty or not.
  * Params:
  *   - object: User object received from modal.
  *   - isValid: Boolean that tells if all the validations were correct.
  **/
  public submitUserForm(form: NgModel, object: User) {
    this.currentGroupList = [];
    object.groups_complete = this.userGroupsComplete;

    if (this.user.id) {
      // Update user
      this.submitUpdatedUser(object, this.user.id);
    } else {
      // Create user
      this.submitNewUser(object);
    }
    form.reset();
  }

  /**
  * Requests to the Backend service to update the user selected by the user.
  * Params:
  *   - object: A user object.
  **/
  public submitUpdatedUser(object: User, id: number) {
    this.httpService.updateObject(environment.USERS_URL + id + '/', object).subscribe(result => {
        if (result.ok) {
          let updatedUser = new User(result.json());
          this.userUpdated.emit(updatedUser);
          this.toaster.show(result, 'Usuario actualizado', 'El usuario se actualizó con éxito');
        }
    },
    error => {
      this.toaster.show(error, 'Error', 'Ocurrió un error al actualizar el usuario');
    });
  }

  /**
  * Requests to the Backend service to create the new user.
  * Params:
  *   - object: A user object.
  **/
  public submitNewUser(object: User) {
    this.httpService.postObject(environment.USERS_URL, object).subscribe(result => {
        if (result.ok) {
          let newUser = new User(result.json());
          this.userCreated.emit(newUser);
          this.toaster.show(result, 'Usuario guardado', 'El usuario se guardó con éxito');
        }
    },
    error => {
      this.toaster.show(error, 'Error', 'Ocurrió un error al guardar el usuario');
    });
  }

  /**
  * Requests to parent component to show the confirmation to remove the selected user.
  **/
  public requestWarningModal() {
    this.modalAction = 'Show warning modal';
    this.requestWarning.emit(this.modalAction);
  }

  /**
  * Requests to parent component to close the current modal.
  **/
  public requestCloseThisModal() {
    this.modalAction = 'Close modal';
    this.requestCloseModal.emit(this.modalAction);
  }

  /**
  * Initialize the form and return to the original object the user.
  **/
  public cancelForm(form: NgModel) {
    if (this.oldUser.id) {
      this.user = this.oldUser;
      let updatedUser = new User(this.oldUser);
      this.userUpdated.emit(updatedUser);
    }
    form.reset();
  }

  /**
  * Adds the selected element to the userGroupsComplete list.
  **/
  public selected(currentGroupNameList: any): void {
    this.userGroupsComplete.push(currentGroupNameList);
  }

  /**
  * Removes the selected element in the userGroupsComplete list.
  **/
  public removed(currentGroupNameList: any): void {
    let index = this.userGroupsComplete.indexOf(currentGroupNameList);
    if (index >= 0) {
      this.userGroupsComplete.splice(index, 1);
    }
  }

  /**
  * Identiies if the user is changing the groups to reset the userGroupsComplete list.
  **/
  public refreshValue(currentGroupNameList: any): void {
    if (!this.groupsChanges) {
      this.userGroupsComplete = [];
      this.groupsChanges = true;
    }
    this.currentGroupNameList = currentGroupNameList;
  }

  /**
  * Method to show like an string the current user group list.
  **/
  public itemsToString(currentGroupNameList: Array<any> = []): string {
    return currentGroupNameList
      .map((item: any) => {
        return item.text;
      }).join(', ');
  }
}
