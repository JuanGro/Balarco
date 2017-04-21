// Models
import { Contact } from './contact-model';
import { Client } from './../clients/client-model';

describe('Contact object model tests.', () => {
    let contact: Contact;

    /**
    * Tests that verify if the Contact object is correctly built.
    **/
    it('should build a Contact object correctly', () => {
        // Create a Client object example
        let testClient: Client = { id: 1, name: 'Starbucks', address: 'Example' };

        // Initialize Client objects
        testClient = new Client(testClient);

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
        let client_complete = testClient;
        client_complete = new Client(client_complete);

        contact = {
            id: id, name: name, last_name: last_name, client: client,
            charge: charge, landline: landline, extension: extension,
            mobile_phone_1: mobile_phone_1, mobile_phone_2: mobile_phone_2,
            email: email, alternate_email: alternate_email,
            client_complete: client_complete
        };

        contact = new Contact(contact);

        // Check each attribute.
        expect(contact.id).toEqual(id);
        expect(contact.name).toEqual(name);
        expect(contact.last_name).toEqual(last_name);
        expect(contact.client).toEqual(client);
        expect(contact.charge).toEqual(charge);
        expect(contact.landline).toEqual(landline);
        expect(contact.extension).toEqual(extension);
        expect(contact.mobile_phone_1).toEqual(mobile_phone_1);
        expect(contact.mobile_phone_2).toEqual(mobile_phone_2);
        expect(contact.email).toEqual(email);
        expect(contact.alternate_email).toEqual(alternate_email);
        expect(contact.client_complete).toEqual(client_complete);
    });
});
