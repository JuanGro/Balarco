import { Iguala } from './iguala-model';
describe('Iguala object model tests.', function () {
    it('should build an Iguala object with each attribute', function () {
        var id = 1;
        var name = 'Starbucks 2018';
        var client = 2;
        var start_date = new Date(2016, 11, 11);
        var end_date = new Date(2017, 11, 11);
        var iguala = {
            id: id,
            name: name,
            client: client,
            start_date: start_date,
            end_date: end_date,
        };
        expect(iguala.id).toBe(id);
        expect(iguala.name).toBe(name);
        expect(iguala.client).toBe(client);
        expect(iguala.start_date).toBe(start_date);
        expect(iguala.end_date).toBe(end_date);
    });
    it('should build an empty Iguala object', function () {
        var iguala = new Iguala();
        expect(iguala.id).toBe(undefined);
        expect(iguala.name).toBe(undefined);
        expect(iguala.client).toBe(undefined);
        expect(iguala.start_date).toBe(undefined);
        expect(iguala.end_date).toBe(undefined);
    });
});
//# sourceMappingURL=../../../../../src/app/accounts/igualas/iguala-model.spec.js.map