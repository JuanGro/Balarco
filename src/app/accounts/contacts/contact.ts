/**
* Class to define all the attributes used in the Contact object.
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
    is_active: boolean;

    constructor(jsonText: string) {
      let json = JSON.parse(jsonText);
      this.id = json && json.id;
      this.name = json && json.name;
      this.client = json && json.client;
      this.charge = json&& json.charge;
      this.landline = json && json.landline;
      this.extension = json && json.extension;
      this.mobile_phone_1 = json && json.mobile_phone_1;
      this.mobile_phone_2 = json && json.mobile_phone_2;
      this.email = json && json.email;
      this.alternate_email = json && json.alternate_email;
      this.is_active = json && json.is_active;
    }
}
