import { Role } from '../auth/role';

export class CurrentUser {
  username: string;
  token: string;
  roles: Role[];

  constructor(object: any) {
    this.username = object.username;
    this.token = object.token;
    this.roles = object.roles;
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
}
