// Models
import { WorkType } from './work-type-model';

describe('WorkType object model tests.', () => {

  it('Should create a WorkType object by setting attibutes', () => {
    let id = 1;
    let name = 'Test';

    let workType: WorkType = {
      id: id,
      name: name,
    };

    expect(workType.id).toBe(id);
    expect(workType.name).toBe(name);
  });


  it('Should create an empty WorkType object', () => {
    let workType = new WorkType();

    expect(workType.id).toBe(undefined);
    expect(workType.name).toBe(undefined);
  });


  it('Should create a WorkType object by passing a Json in the constructor', () => {
    let id = 1;
    let name = 'Test';

    let jsonWorkType = {
      id: id,
      name: name,
    };

    let workType = new WorkType(jsonWorkType);
    expect(workType.id).toBe(id);
    expect(workType.name).toBe(name);
  });

});
