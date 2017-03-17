import { WorkType } from './work-type-model';
describe('WorkType object model tests.', function () {
    it('Should create a WorkType object by setting attibutes', function () {
        var id = 1;
        var name = 'Test';
        var workType = {
            id: id,
            name: name,
        };
        expect(workType.id).toBe(id);
        expect(workType.name).toBe(name);
    });
    it('Should create an empty WorkType object', function () {
        var workType = new WorkType();
        expect(workType.id).toBe(undefined);
        expect(workType.name).toBe(undefined);
    });
    it('Should create a WorkType object by passing a Json in the constructor', function () {
        var id = 1;
        var name = 'Test';
        var jsonWorkType = {
            id: id,
            name: name,
        };
        var workType = new WorkType(jsonWorkType);
        expect(workType.id).toBe(id);
        expect(workType.name).toBe(name);
    });
});
//# sourceMappingURL=../../../../../src/app/works/work-type/work-type-model.spec.js.map