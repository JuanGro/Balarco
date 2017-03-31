// Models
import { User, Group } from './user-model';

describe('User object model tests.', () => {
    let contact: User;
    /**
    * Tests that verify if the User object is correctly built.
    **/
    it('should build a user object correctly', () => {
        // Build the object with it's attributes.
        let id = 10;
        let username = 'example@balarco.com';
        let first_name = 'John';
        let last_name = 'Smith';
        let password = 'hashed_password';
        let testGroup: Group = {id: 1}
        let groups = [testGroup];

        contact = {
            id: id, username: username, first_name: first_name,
            last_name: last_name, password: password, groups: groups
        };

        // Check each attribute.
        expect(contact.id).toBe(id);
        expect(contact.username).toBe(username);
        expect(contact.first_name).toBe(first_name);
        expect(contact.last_name).toBe(last_name);
        expect(contact.password).toBe(password);
        expect(contact.groups).toBe(groups);
    });
});
