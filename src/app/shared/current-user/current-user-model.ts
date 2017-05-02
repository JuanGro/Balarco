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

  /**
  * Method to get the Roles from user in a string format.
  * Returns:
  *   - roles in string format.
  **/
  public getRoles(): string[] {
    let rolesStrings = [];
    for (let role of this.roles) {
      rolesStrings.push(this.getRoleName(role));
    }
    return rolesStrings;
  }

  /**
  * Method to get the name of a role depending on Role enum.
  * Params:
  *   - role: Role enum instance.
  * Returns:
  *   - role name.
  **/
  private getRoleName(role: Role): string {
    switch (role) {
      case Role.DIRECTOR_CUENTAS:
        return 'Director de cuentas';
      case Role.EJECUTIVO_SR:
        return 'Ejecutivo SR';
      case Role.EJECUTIVO_JR:
        return 'Ejecutivo JR';
      case Role.ADMINISTRACION:
        return 'Administración';
      case Role.DIRECTOR_ARTE:
        return 'Director de arte';
      case Role.DISENADOR_SR:
        return 'Diseñador SR';
      case Role.DISENADOR_JR:
        return 'Diseñador JR';
      case Role.SUPER_USUARIO:
        return 'Super usuario';
    }
  }
}
