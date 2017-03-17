import { Status } from './status-model';
describe('Status object model tests.', function () {
    it('Should create a Status object by setting attibutes', function () {
        var id = 1;
        var name = 'Test';
        var status = {
            id: id,
            name: name,
        };
        expect(status.id).toBe(id);
        expect(status.name).toBe(name);
    });
    it('Should create an empty Status object', function () {
        var status = new Status();
        expect(status.id).toBe(undefined);
        expect(status.name).toBe(undefined);
    });
    it('Should create a status object by passing a Json in the constructor', function () {
        var id = 1;
        var name = 'Test';
        var jsonStatus = {
            id: id,
            name: name,
        };
        var status = new Status(jsonStatus);
        expect(status.id).toBe(id);
        expect(status.name).toBe(name);
    });
});
//# sourceMappingURL=../../../../../src/app/works/status/status-model.spec.js.map