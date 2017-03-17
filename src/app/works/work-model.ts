// Models
import { Iguala } from '../accounts/igualas/iguala-model';
import { Contact } from '../accounts/contacts/contact-model';
import { ArtWork } from './art-works/art-work.model';
import { WorkType } from './work-type/work-type.model';
import { Status } from './status/status.model';

export class Work {
  id?: number;
  name?: string;
  creation_date?: Date;
  expected_delivery_date?: Date;
  brief?: string;
  final_link?: string;
  contact?: Contact;
  work_type?: WorkType;
  iguala?: Iguala;
  art_works?: ArtWork[];
  status?: Status;
  // TODO: Executive.

  constructor(object?: any) {
    if (object) {
      this.id = object.id;
      this.name = object.name;
      this.brief = object.brief;
      this.final_link = object.final_link;

      if (object.creation_date instanceof Date) {
        this.creation_date = object.creation_date;
      } else {
        // Convert the creation_date string to Date object.
        let creationDateString = object && object.creation_date;
        if (creationDateString) {
          let valuesStart = creationDateString.split('-');
          let startYear = +valuesStart[0];
          let startMonth = +valuesStart[1] - 1;
          let startDay = +valuesStart[2];
          this.creation_date = new Date(startYear, startMonth, startDay);
        }
      }

      if (object.expected_delivery_date instanceof Date) {
        this.expected_delivery_date = object.expected_delivery_date;
      } else {
        // Convert the expected_delivery_date string to Date object.
        let deliveryDateString = object && object.expected_delivery_date;
        if (deliveryDateString) {
          let valuesDelivery = deliveryDateString.split('-');
          let deliveryYear = +valuesDelivery[0];
          let deliverytMonth = +valuesDelivery[1] - 1;
          let deliveryDay = +valuesDelivery[2];
          this.expected_delivery_date = new Date(deliveryYear, deliverytMonth, deliveryDay);
        }
      }

      this.contact = new Contact(object.contact);
      this.work_type = new WorkType(object.work_type);
      this.status = new Status(object.status);
      this.iguala = new Iguala(object.iguala);

      // Add ArtWorks collection to the Work.
      this.art_works = [];
      if (object.art_works) {
        for (let artWork of object.art_works) {
          this.art_works.push(new ArtWork(artWork));
        }
      }
    }
  }

}
