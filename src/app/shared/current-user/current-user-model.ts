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
}
