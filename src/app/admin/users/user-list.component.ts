import { Component, Input, Output, EventEmitter } from '@angular/core';

// Classes
import { User } from './user-model';
import { Group } from './group-model';


@Component({
  selector: 'user-list',
  templateUrl: 'user-list.component.html'
})
/**
* Component which manage the table which shows the list of users:
* - List all the users.
* - Request open a modal depending of which option is selected.
* - Send the user that is selected by the user.
**/
export class UserListComponent {
  // Receives the user list from parent component.
  @Input('userList') userList: User[];
  // Sends the request to show the new user modal in parent component.
  @Output() requestShowNewUserModal: EventEmitter<string> = new EventEmitter();
  // Sends the request to show the update user modal in parent component.
  @Output() requestShowUpdateUserModal: EventEmitter<string> = new EventEmitter();
  // Sends the selected user by the user to parent component.
  @Output() currentUser: EventEmitter<User> = new EventEmitter<User>();
  // Variable to check in test what action is executed between components.
  public modalAction: string = '';

  public constructor() { }

  /**
  * Requests to parent component to show the new user modal.
  **/
  public requestNewUserModal() {
    this.modalAction = 'Open new user modal';
    this.requestShowNewUserModal.emit(this.modalAction);
  }

  /**
  * Requests to parent component to show the update user modal.
  **/
  public requestUpdateUserModal() {
    this.modalAction = 'Open update user modal';
    this.requestShowUpdateUserModal.emit(this.modalAction);
  }

  /**
  * Sends to parent component the selected user.
  * Params:
  *   - object: A user object.
  **/
  public sendCurrentUser(object: User) {
    this.currentUser.emit(object);
  }
}
