// Models
import { Iguala } from '../accounts/igualas/iguala-model';
import { Contact } from '../accounts/contacts/contact-model';
import { Client } from '../accounts/clients/client-model';
import { ArtWork } from './art-works/art-work.model';
import { WorkType } from './work-type/work-type.model';
import { Status } from './status/status.model';
import { Work } from './work-model';

describe('Work object model tests.', () => {

  it('Should create a Work object by setting its attributes', () => {
    let id = 1;
    let name = 'TestWork';
    let creation_date = new Date();
    let expected_delivery_date = new Date();
    let brief = 'This is a test brief';
    let final_link = 'www.test.com';
    let contact: Contact = {
      id: 1, name: 'TestGuy', last_name: 'TestLast', client: 2,
      charge: 'TestCEO', landline: '111111111111', extension: '12',
      mobile_phone_1: '4271000000', email: 'test@tes.com',
    };
    let workType: WorkType = {
      id: 1, name: 'TestType'
    };
    let iguala: Iguala = {
      id: 1, name: 'Iguala', client: 2, start_date: new Date(),
      end_date: new Date(),
    };
    let status: Status = {
      id: 3, name: 'Testing',
    };
    let artWorks: [ArtWork] = [
      {id: 1, name: 'New art', quantity: 12},
      {id: 2, name: 'Test art', quantity: 5}
    ];

    let work: Work = {
      id: id, name: name, creation_date: creation_date,
      expected_delivery_date: expected_delivery_date, brief: brief,
      final_link: final_link, contact: contact, work_type: workType,
      iguala: iguala, status: status, art_works: artWorks,
    };

    expect(work.id).toBe(id);
    expect(work.name).toBe(name);
    expect(work.creation_date).toBe(creation_date);
    expect(work.expected_delivery_date).toBe(expected_delivery_date);
    expect(work.brief).toBe(brief);
    expect(work.final_link).toBe(final_link);
    expect(work.contact).toBe(contact);
    expect(work.work_type).toBe(workType);
    expect(work.iguala).toBe(iguala);
    expect(work.status).toBe(status);
    expect(work.art_works).toBe(artWorks);
  });

  it('Should create an empty Work object', () => {
    let work = new Work();

    expect(work.id).toBe(undefined);
    expect(work.name).toBe(undefined);
    expect(work.creation_date).toBe(undefined);
    expect(work.expected_delivery_date).toBe(undefined);
    expect(work.brief).toBe(undefined);
    expect(work.final_link).toBe(undefined);
    expect(work.contact).toBe(undefined);
    expect(work.work_type).toBe(undefined);
    expect(work.iguala).toBe(undefined);
    expect(work.status).toBe(undefined);
    expect(work.art_works).toBe(undefined);
  });

  it('Should create a Work object by passing a json in constructor', () => {
    let id = 1;
    let name = 'TestWork';
    let creation_date = new Date();
    let expected_delivery_date = new Date();
    let brief = 'This is a test brief';
    let final_link = 'www.test.com';
    let contactJson = {
      id: 1, name: 'TestGuy', last_name: 'TestLast', client: 2,
      charge: 'TestCEO', landline: '111111111111', extension: '12',
      mobile_phone_1: '4271000000', email: 'test@tes.com', client_complete: new Client(),
    };
    let contact = new Contact(contactJson);
    let workType = new WorkType({ id: 1, name: 'TestType' });
    let iguala = new Iguala ({ id: 1, name: 'Iguala', client: 2, start_date: new Date(), end_date: new Date()});
    let status = new Status ({ id: 3, name: 'Testing' });
    let artWorks: [ArtWork] = [
      new ArtWork({id: 1, name: 'New art', quantity: 12}),
      new ArtWork({id: 2, name: 'Test art', quantity: 5}),
    ];

    let workJson = {
      id: id, name: name, creation_date: creation_date,
      expected_delivery_date: expected_delivery_date, brief: brief,
      final_link: final_link, contact: contact, work_type: workType,
      iguala: iguala, status: status, art_works: artWorks,
    };

    let work = new Work(workJson);
    expect(work.id).toBe(id);
    expect(work.name).toBe(name);
    expect(work.creation_date).toBe(creation_date);
    expect(work.expected_delivery_date).toBe(expected_delivery_date);
    expect(work.brief).toBe(brief);
    expect(work.final_link).toBe(final_link);
    expect(work.contact.id).toBe(contact.id);
    expect(work.work_type.id).toBe(workType.id);
    expect(work.iguala.id).toBe(iguala.id);
    expect(work.status.id).toBe(status.id);
    expect(work.art_works.length).toBe(artWorks.length);
  });
});
