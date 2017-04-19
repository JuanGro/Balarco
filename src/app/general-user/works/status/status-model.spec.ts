// Models
import { Status } from './status-model';

describe('Status object model tests.', () => {

  it('Should create a Status object by setting attibutes', () => {
    let id = 1;
    let name = 'Test';

    let status: Status = {
      id: id,
      name: name,
    };

    expect(status.id).toBe(id);
    expect(status.name).toBe(name);
  });


  it('Should create an empty Status object', () => {
    let status = new Status();

    expect(status.id).toBe(undefined);
    expect(status.name).toBe(undefined);
  });


  it('Should create a status object by passing a Json in the constructor', () => {
    let id = 1;
    let name = 'Test';

    let jsonStatus = {
      id: id,
      name: name,
    };

    let status = new Status(jsonStatus);
    expect(status.id).toBe(id);
    expect(status.name).toBe(name);
  });

});
