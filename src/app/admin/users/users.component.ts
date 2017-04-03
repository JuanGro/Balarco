import { Component, OnInit, Input } from '@angular/core';

// Classes
import { User, Group } from './user-model';

// Services
import { HttpService } from './../../shared/http-service/http.service';
import { CustomToastService } from '../../shared/toast/custom-toast.service';

// Environment
import { environment } from '../../../environments/environment';

@Component({
  selector: 'users',
  templateUrl: 'users.component.html'
})
/**
* Component to manage the administration of the users:
* - List all the users.
* - Create a new user.
* - Update an specific user.
* - Remove a user.
**/
export class UsersComponent implements OnInit {
  // Received from table component, it returns the user that was selected to see in detail.
  @Input() currentUser: User;
  // Variable that saves the title to show in the template.
  public title: string;
  // List of users received from httpService.
  public userList: User[];
  // List of groups received from httpService
  public groupList: Group[];
  // Variable for save the object received from child component and manage if the form is for update or create user.
  public user: User;
  // Title of new user modal.
  public titleNewModal: string;
  // Title of update user modal.
  public titleUpdateModal: string;
  // Title of danger user modal.
  public titleDangerModal: string;
  // Description for danger user modal.
  public descriptionDangerModal: string;

  public constructor(public httpService: HttpService, private toaster: CustomToastService) { }

  /**
  * Builds the component for first time.
  *   - Save the title to show in the template.
  *   - Load the user list from get method in httpService.
  **/
  public ngOnInit() {
    this.title = 'Lista de usuarios';
    this.titleNewModal = 'Nuevo Usuario';
    this.titleUpdateModal = 'Modificar Usuario';
    this.titleDangerModal = 'Eliminar Usuario';
    this.descriptionDangerModal = '¿Está usted seguro de eliminar este usuario?';
    this.loadUserList(environment.USERS_URL);
    this.loadGroupList(environment.GROUPS_URL);
  }

  /**
  * Loads all the users from the API
  * Params:
  *   - url: The url where the service will comunicate to get the User list.
  **/
  public loadUserList(url: string) {
    this.httpService.getObject(url)
                    .map((data: any) => data.json())
                    .subscribe(userListJSON => {
                      // Creates user objetc list from JSON.
                      console.log(userListJSON);
                      this.userList = [];
                      for (let userJSON of userListJSON) {
                        this.userList.push(new User(userJSON));
                      }
                      console.log(this.userList);
                    },
                      err => {
                        // Call of toast
                      }
                    );
  }

  /**
  * Loads all the groups from the API
  * Params:
  *   - url: The url where the service will comunicate to get the Group list.
  **/
  public loadGroupList(url: string) {
    this.httpService.getObject(url)
                    .map((data: any) => data.json())
                    .subscribe(groupListJSON => {
                      // Creates user objetc list from JSON.
                      this.groupList = [];
                      for (let groupJSON of groupListJSON) {
                        this.groupList.push(new Group(groupJSON));
                      }
                    },
                      err => {
                        // Call of toast
                      }
                    );
  }

  /**
  * Clears the user variable to get an empty modal.
  **/
  public initializeModal() {
    this.user = new User();
  }

  /**
  * Requests to the Backend service to remove the selected user.
  * Params:
  *   - object: A User object.
  * Returns:
  *   - result: Response from backend service to know if the operation was successful or not.
  **/
  
  public removeUser(object: User) {
    this.httpService.deleteObject(environment.USERS_URL + object.id + '/').subscribe(result => {
      if (result.ok) {
        let index = this.userList.indexOf(object);
        if (index >= 0) {
          this.userList.splice(index, 1);
          this.toaster.show(result, 'Usuario eliminado', 'El usuario se eliminó con éxito');
        }
      }
    },
    error => {
      this.toaster.show(error, 'Error', 'Ocurrió un error al eliminar usuario');
    });
  }

  /**
  * Saves which user was selected.
  * Params:
  *   - object: A User object.
  **/
  
  public getUserFromTable(object: User): void {
    this.user = object;
  }

  /**
  * Recieves event when a new user is created in the form.
  * It pushes the new user to the list.
  * Params:
  *   - event: New user received from the event.
  **/
  
  public onUserCreated(event: User) {
    this.userList.push(event);
  }

  /**
  * Recieves event when a user is updated in the form.
  * It updates the selected user.
  * Params:
  *   - event: Updated user received from the event.
  **/
  
  public onUserUpdated(event: User) {
    let lastUser = this.userList.filter(user => user.id === event.id)[0];
    let index = this.userList.indexOf(lastUser);
    if (index >= 0) {
      this.userList[index] = event;
    }
  }
}