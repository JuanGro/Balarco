import { Group } from './group-model';
/**
* Class that declares all the attributes used in the User object.
**/
export class User {
  id?: number;
  username: string;
  first_name: string;
  last_name: string;
  password?: string;
  groups_complete?: Group[];
  /**
  * Constructor to create a User based on server response at POST.
  * Params:
  *   - jsonText: The user returned from API in json format string.
  **/
  constructor(json?) {
    if (json) {
      this.id = json.id;
      this.username = json.username;
      this.first_name = json.first_name;
      this.last_name = json.last_name;
      this.groups_complete = [];
      if (json.groups_complete) {
        for (let group of json.groups_complete) {
          this.groups_complete.push(new Group(group));
        }
      }
    }
  }
}