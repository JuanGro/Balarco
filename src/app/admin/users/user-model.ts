/**
* Class that declares all the attributes used in the User object.
**/
export class User {
    id?: number;
    username: string;
    first_name: string;
    last_name: string;
    password?: string;
    groups?: Group[];
    groups_complete?: Group[];
    /**
    * Constructor to create a User based on server response at POST.
    * Params:
    *   - jsonText: The user returned from API in json format string.
    **/
    constructor(json?) {
      if (json) {
      this.id = json && json.id;
      this.username = json && json.username;
      this.first_name = json && json.first_name;
      this.last_name = json && json.last_name;
      this.groups = [];
      this.groups = json && json.groups;
      this.groups_complete = [];
      if (json.groups_complete) {
        for (let group of json.groups_complete) {
          this.groups_complete.push(new Group(group));
        }
      }
      }
    }
}
/**
* Class that declares all the attributes used in the Group object.
**/
export class Group {
    id?: number;
    name?: string;

    /**
    * Constructor to create a Group based on server response at POST.
    * Params:
    *   - jsonText: The user returned from API in json format string.
    **/
    constructor(json?) {
      this.id = json && json.id;
      this.name = json && json.name;
    }
}