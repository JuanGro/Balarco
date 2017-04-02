import { Iguala } from '../../accounts/igualas/iguala-model';
import { Contact } from '../../accounts/contacts/contact-model';
import { Client } from '../../accounts/clients/client-model';
import { ArtWork } from './art-works/art-work-model';
import { WorkType } from './work-type/work-type-model';
import { Status } from './status/status-model';
import { Work } from './work-model';
describe('Work object model tests.', function () {
    it('Should create a Work object by setting its attributes', function () {
        var id = 1;
        var name = 'TestWork';
        var creation_date = new Date();
        var expected_delivery_date = new Date();
        var brief = 'This is a test brief';
        var final_link = 'www.test.com';
        var contact = {
            id: 1, name: 'TestGuy', last_name: 'TestLast', client: 2,
            charge: 'TestCEO', landline: '111111111111', extension: '12',
            mobile_phone_1: '4271000000', email: 'test@tes.com',
        };
        var workType = {
            id: 1, name: 'TestType'
        };
        var iguala = {
            id: 1, name: 'Iguala', client: 2, start_date: new Date(),
            end_date: new Date(),
        };
        var status = {
            id: 3, name: 'Testing',
        };
        var artWorks = [
            { id: 1, name: 'New art', quantity: 12 },
            { id: 2, name: 'Test art', quantity: 5 }
        ];
        var work = {
            id: id, name: name, creation_date: creation_date,
            expected_delivery_date: expected_delivery_date, brief: brief,
            final_link: final_link, contact_complete: contact, work_type_complete: workType,
            iguala_complete: iguala, current_status_complete: status, art_works: artWorks,
        };
        expect(work.id).toBe(id);
        expect(work.name).toBe(name);
        expect(work.creation_date).toBe(creation_date);
        expect(work.expected_delivery_date).toBe(expected_delivery_date);
        expect(work.brief).toBe(brief);
        expect(work.final_link).toBe(final_link);
        expect(work.contact_complete).toBe(contact);
        expect(work.work_type_complete).toBe(workType);
        expect(work.iguala_complete).toBe(iguala);
        expect(work.current_status_complete).toBe(status);
        expect(work.art_works).toBe(artWorks);
    });
    it('Should create an empty Work object', function () {
        var work = new Work();
        expect(work.id).toBe(undefined);
        expect(work.name).toBe(undefined);
        expect(work.creation_date).toBe(undefined);
        expect(work.expected_delivery_date).toBe(undefined);
        expect(work.brief).toBe(undefined);
        expect(work.final_link).toBe(undefined);
        expect(work.contact_complete).toBe(undefined);
        expect(work.work_type_complete).toBe(undefined);
        expect(work.iguala_complete).toBe(undefined);
        expect(work.current_status).toBe(undefined);
        expect(work.art_works).toBe(undefined);
    });
    it('Should create a Work object by passing a json in constructor', function () {
        var id = 1;
        var name = 'TestWork';
        var creation_date = new Date();
        var expected_delivery_date = new Date();
        var brief = 'This is a test brief';
        var final_link = 'www.test.com';
        var contactJson = {
            id: 1, name: 'TestGuy', last_name: 'TestLast', client: 2,
            charge: 'TestCEO', landline: '111111111111', extension: '12',
            mobile_phone_1: '4271000000', email: 'test@tes.com', client_complete: new Client(),
        };
        var contact = new Contact(contactJson);
        var workType = new WorkType({ id: 1, name: 'TestType' });
        var iguala = new Iguala({ id: 1, name: 'Iguala', client: 2, start_date: new Date(), end_date: new Date() });
        var status = new Status({ id: 3, name: 'Testing' });
        var artWorks = [
            new ArtWork({ id: 1, name: 'New art', quantity: 12 }),
            new ArtWork({ id: 2, name: 'Test art', quantity: 5 }),
        ];
        var workJson = {
            id: id, name: name, creation_date: creation_date,
            expected_delivery_date: expected_delivery_date, brief: brief,
            final_link: final_link, contact_complete: contact, work_type_complete: workType,
            iguala_complete: iguala, current_status_complete: status, art_works: artWorks,
        };
        var work = new Work(workJson);
        expect(work.id).toBe(id);
        expect(work.name).toBe(name);
        expect(work.creation_date).toBe(creation_date);
        expect(work.expected_delivery_date).toBe(expected_delivery_date);
        expect(work.brief).toBe(brief);
        expect(work.final_link).toBe(final_link);
        expect(work.contact_complete.id).toBe(contact.id);
        expect(work.work_type_complete.id).toBe(workType.id);
        expect(work.iguala_complete.id).toBe(iguala.id);
        expect(work.current_status_complete.id).toBe(status.id);
        expect(work.art_works.length).toBe(artWorks.length);
    });
});
//# sourceMappingURL=../../../../../src/app/general-user/works/work-model.spec.js.map