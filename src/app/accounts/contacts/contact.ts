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
}