
import { Client } from './client-model';

describe('Client object model tests.', () => {
    let client: Client;

    /**
    * Tests that verify if the Client object is correctly built.
    **/
    it('should build a Client object correctly', () => {
        // Build the object with it's attributes.
        let id = 10;
        let name = 'John';
        let address = 'Example';

        client = {
            id: id, name: name, address: address
        };

        // Check each attribute.
        expect(client.id).toBe(id);
        expect(client.name).toBe(name);
        expect(client.address).toBe(address);
    });
});
