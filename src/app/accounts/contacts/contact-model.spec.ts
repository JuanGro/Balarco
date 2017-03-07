
describe('Contact object model tests.', () => {
    /**
    * Tests that verify if the Contact object is correctly built.
    **/
    it('should build a Contact object correctly', () => {
        // Build the object with it's attributes.
        let newContact = {
            id: 10, name: 'John', last_name: 'Smith', client: 2, charge: 'CEO', landline: '2221122',
            extension: '29', mobile_phone_1: '4423331122', mobile_phone_2: '4423331122',
            email: 'john@gmail.com', alternate_email: 'john@gmail.com', is_active: true
        };

        // Check each attribute.
        expect(newContact.id).toBe(10);
        expect(newContact.name).toBe('John');
        expect(newContact.last_name).toBe('Smith');
        expect(newContact.client).toBe(2);
        expect(newContact.charge).toBe('CEO');
        expect(newContact.landline).toBe('2221122');
        expect(newContact.extension).toBe('29');
        expect(newContact.mobile_phone_1).toBe('4423331122');
        expect(newContact.mobile_phone_2).toBe('4423331122');
        expect(newContact.email).toBe('john@gmail.com');
        expect(newContact.alternate_email).toBe('john@gmail.com');
        expect(newContact.is_active).toBe(true);
    });
});
