/**
* Class that declares all the attributes used in the User object.
**/
export class User {
    id?: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    password?: string;

    /**
    * Constructor to create a User based on server response at POST.
    * Params:
    *   - jsonText: The user returned from API in json format string.
    **/
    constructor(json?) {
      this.id = json && json.id;
      this.username = json && json.username;
      this.first_name = json && json.first_name;
      this.last_name = json && json.last_name;
      this.email = json && json.email;
    }
}