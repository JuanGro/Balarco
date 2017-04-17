import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

// Models
import { User } from './user-model';
import { Group } from './group-model';

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
* in the user object value, the component is listening for each change in that variable.
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
  // List containing the users's current groups
  public currentGroupList: Group[] = [];
  // Requests close of the current modal to parent component.
  @Output() requestCloseModal: EventEmitter<string> = new EventEmitter();
  // Requests to parent component the show of the danger modal to confirm if the user is permanent removed.
  @Output() requestWarning: EventEmitter<string> = new EventEmitter();
  // Event for parent to push the new user to the list.
  @Output() userCreated: EventEmitter<User> = new EventEmitter();
  // Event for parent to update the currentUser.
  @Output() userUpdated: EventEmitter<User> = new EventEmitter();
  // Variable to check in test what action is executed between components.
  public modalAction: string = '';
  // Initialization of control form.
  public userModalForm: FormGroup;
  // Variable to return the old user if cancel the update form.
  public oldUser: User;
  // Variable to active the form.
  public active: boolean = true;
  // Variable to show the role of the contact selected.
  public array: string = '';

  public constructor(private httpService: HttpService, private toaster: CustomToastService) { }

  /**
  * Builds the component for first time each time when it's called.
  *   - Initialize the form depending wether the new or update user form is called.
  *   - Use an auxiliary variable to select a default value for the dropdown used in the form.
  **/
  public ngOnChanges() {
    this.array = '';
    if (!this.user) {
      this.user = new User();
      this.oldUser = new User();
    } else {
      this.oldUser = new User(this.user);
      this.showRoles(this.array);
    }
  }

  /**
  * Builds an string containing all the roles for the current contact.
  *   Params:
  *   - roles: String where it's saved the roles for the current contact.
  **/
  public showRoles(roles) {
    if (this.user.groups_complete && roles === '') {
      for (let group of this.user.groups_complete) {
        if (group) {
          group = new Group(group);
          if (roles === '') {
            roles = group.name;
          } else {
            roles += ', ' + group.name;
          }
        }
      }
      roles += '.';
    }
    this.array = roles;
  }

  /**
  * Executes the submitUpdatedUser or submitNewUser depending if the user received when the modal was called is empty or not.
  * Params:
  *   - object: User object received from modal.
  *   - isValid: Boolean that tells if all the validations were correct.
  **/
  public submitUserForm(object: User) {
    this.currentGroupList = [];
    for (let group of object.groups_complete) {
      let id: number = +group;
      group = new Group();
      group.id = id;
      group.name = '';
      this.currentGroupList.push(group);
    }
    object.groups_complete = this.currentGroupList;
    if (this.user.id) {
      // Update user
      this.submitUpdatedUser(object, this.user.id);
    } else {
      // Create user
      this.submitNewUser(object);
    }
    this.active = false;
    setTimeout(() => this.active = true, 0);
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
    this.user = new User();
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
  public cancelForm() {
    if (this.oldUser.id) {
      this.user = this.oldUser;
      let updatedUser = new User(this.oldUser);
      this.userUpdated.emit(updatedUser);
    }
    this.user = new User();
    setTimeout(() => this.active = false, 1);
    setTimeout(() => this.active = true, 0);
  }
}
