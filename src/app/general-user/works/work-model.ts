// Models
import { Iguala } from '../../accounts/igualas/iguala-model';
import { Contact } from '../../accounts/contacts/contact-model';
import { ArtWork } from './art-works/art-work-model';
import { WorkType } from './work-type/work-type-model';
import { Status } from './status/status-model';

export class Work {
  id?: number;
  name: string;
  creation_date?: Date;
  expected_delivery_date: Date;
  brief?: string;
  final_link?: string;
  contact: number;
  work_type: number;
  iguala?: number;
  art_works?: ArtWork[];
  status: number;
  // TODO: Executive.
  executive_id: number = 1;

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

      /*this.contact = new Contact(object.contact);
      this.work_type = new WorkType(object.work_type);
      this.status = new Status(object.status);
      this.iguala = new Iguala(object.iguala);
      */

      // Add ArtWorks collection to the Work.
      this.art_works = [];
      if (object.art_works) {
        for (let artWork of object.art_works) {
          this.art_works.push(new ArtWork(artWork));
        }
      }
    }
  }

  /**
  * Class method to generate a json with date fields in the specific form that
  * Django API is requesting them.
  * Returns:
  *   - Json representing the work.
  **/
  public generateJSONForPOST() {
    let newWorkJSON = {};

    newWorkJSON['name'] = this.name;
    newWorkJSON['expected_delivery_date'] = this.expected_delivery_date.getUTCFullYear() + '-' +
                                            (this.expected_delivery_date.getUTCMonth() + 1) + '-' +
                                            this.expected_delivery_date.getUTCDate();
    newWorkJSON['executive'] = this.executive_id;
    newWorkJSON['contact'] = +this.contact;
    newWorkJSON['current_status'] = +this.status;
    newWorkJSON['work_type'] = +this.work_type;

    if (this.id) {
      newWorkJSON['id'] = this.id;
    }
    if (this.iguala && this.work_type == 1) {
      newWorkJSON['iguala'] = +this.iguala;
    }
    if (this.brief) {
      newWorkJSON['brief'] = this.brief;
    }
    if (this.final_link) {
      newWorkJSON['final_link'] = this.final_link;
    }
    let artWorksArray = [];
    if (this.art_works) {
      for (let artWork of this.art_works) {
        artWorksArray.push({ art_type: artWork.id, quantity: artWork.quantity });
      }
    }
    newWorkJSON['art_works'] = artWorksArray;

    // TODO: Designers assignation.
    newWorkJSON['work_designers'] = [];

    return newWorkJSON;
  }

}
