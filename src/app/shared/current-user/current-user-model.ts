import { Role } from '../auth/role';

export class CurrentUser {
  username: string;
  token: string;
  roles: Role[];
  id: string;
  firstName: string;
  lastName: string;

  constructor(object: any) {
    this.username = object.username;
    this.token = object.token;
    this.roles = object.roles;
    this.id = object.id;
    this.firstName = object.firstName;
    this.lastName = object.lastName;
  }

  /**
  * Method to check if current user has any of the roles provided.
  * Params:
  *   - a1: Array of roles
  * Returns:
  *   - true if it has at least one role.
  **/
  public hasRole(roles: Role[]): boolean {
    for (let role of roles) {
      if (this.roles.indexOf(role) !== -1) {
        return true;
      }
    }
    return false;
  }

  /**
  * Method that returns user's full name
  * Returns:
  *   - fullname.
  **/
  public getFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }

  public getRolesString(): string {
    let rolesString = '';
    for (let i = 0; i < this.roles.length; i++) {
      if (i == this.roles.length - 1) {
        rolesString += this.roles[i];
      } else {
        rolesString += this.roles[i] + ', ';
      }
    }
    return rolesString;
  }

  
}
