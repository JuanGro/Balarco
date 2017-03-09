// Models
import { Client } from './../companies-list/client';

/**
* Model to define all the attributes used in the Contact object.
**/
export class Contact {
    id?: number;
    name: string;
    last_name: string;
    client: number;
    charge: string;
    landline: string;
    extension?: string;
    mobile_phone_1: string;
    mobile_phone_2?: string;
    email: string;
    alternate_email?: string;
    client_complete?: Client;

    /**
    * Constructor to create a Contact based on server response at POST.
    * Params:
    *   - jsonText: The contact returned from API in json format string.
    **/
    constructor(json?) {
      this.id = json && json.id;
      this.name = json && json.name;
      this.last_name = json && json.last_name;
      this.client = json && json.client;
      this.charge = json && json.charge;
      this.landline = json && json.landline;
      this.extension = json && json.extension;
      this.mobile_phone_1 = json && json.mobile_phone_1;
      this.mobile_phone_2 = json && json.mobile_phone_2;
      this.email = json && json.email;
      this.alternate_email = json && json.alternate_email;
      this.client_complete = json && new Client(json.client_complete);
    }
}
