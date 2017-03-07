
describe('Client object model tests.', () => {
    /**
    * Tests that verify if the Client object is correctly built.
    **/
    it('should build a Contact object correctly', () => {
        // Build the object with it's attributes.
        let newClient = {
            id: 2, name: 'Starbucks', address: 'Example'
        };

        // Check each attribute.
        expect(newClient.id).toBe(2);
        expect(newClient.name).toBe('Starbucks');
        expect(newClient.address).toBe('Example');
    });
});
