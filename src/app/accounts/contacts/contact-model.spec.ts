// Models
import { Contact } from './contact-model';

describe('Contact object model tests.', () => {
    let contact: Contact;

    /**
    * Tests that verify if the Contact object is correctly built.
    **/
    it('should build a Contact object correctly', () => {
        // Build the object with it's attributes.
        let id = 10;
        let name = 'John';
        let last_name = 'Smith';
        let client = 2;
        let charge = 'CEO';
        let landline = '2221122';
        let extension = '29';
        let mobile_phone_1 = '4423331122';
        let mobile_phone_2 = '4423331122';
        let email = 'john@gmail.com';
        let alternate_email = 'john@gmail.com';
        let is_active = true;

        let contact = {
            id: id, name: name, last_name: last_name, client: client,
            charge: charge, landline: landline, extension: extension,
            mobile_phone_1: mobile_phone_1, mobile_phone_2: mobile_phone_2,
            email: email, alternate_email: alternate_email, is_active: is_active
        };

        // Check each attribute.
        expect(contact.id).toBe(id);
        expect(contact.name).toBe(name);
        expect(contact.last_name).toBe(last_name);
        expect(contact.client).toBe(client);
        expect(contact.charge).toBe(charge);
        expect(contact.landline).toBe(landline);
        expect(contact.extension).toBe(extension);
        expect(contact.mobile_phone_1).toBe(mobile_phone_1);
        expect(contact.mobile_phone_2).toBe(mobile_phone_2);
        expect(contact.email).toBe(email);
        expect(contact.alternate_email).toBe(alternate_email);
        expect(contact.is_active).toBe(is_active);
    });
});
