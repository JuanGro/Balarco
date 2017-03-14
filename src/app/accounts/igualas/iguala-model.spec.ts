// Models
import { Iguala } from './iguala-model';

describe('Iguala object model tests.', () => {

  it('should build an Iguala object with each attribute', () => {
    let id = 1;
    let name = 'Starbucks 2018';
    let client = 2;
    let start_date = new Date(2016,11,11);
    let end_date = new Date(2017, 11, 11);

    let iguala: Iguala = {
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

  it('should build an empty Iguala object', () => {
    let iguala = new Iguala();

    expect(iguala.id).toBe(undefined);
    expect(iguala.name).toBe(undefined);
    expect(iguala.client).toBe(undefined);
    expect(iguala.start_date).toBe(undefined);
    expect(iguala.end_date).toBe(undefined);
  });
});
