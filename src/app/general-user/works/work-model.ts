// Models
import { Iguala } from '../../accounts/igualas/iguala-model';
import { Contact } from '../../accounts/contacts/contact-model';
import { ArtWork } from './art-works/art-work-model';
import { WorkType } from './work-type/work-type-model';
import { Status } from './status/status-model';
import { Designer } from './designer/designer-model';

export class Work {
  id?: number;
  name: string;
  creation_date?: Date;
  expected_delivery_date: Date;
  brief?: string;
  final_link?: string;
  contact: number;
  contact_complete?: Contact;
  work_type: number;
  work_type_id_enum: number;
  work_type_complete?: WorkType;
  iguala?: number;
  iguala_complete?: Iguala;
  art_works?: ArtWork[];
  current_status: number;
  current_status_complete?: Status;
  work_designers?: Designer[];
  // TODO: Executive.
  executive_id: number;

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

      this.contact = object.contact;
      this.contact_complete = new Contact(object.contact_complete);
      this.work_type = object.work_type;
      this.work_type_complete = new WorkType(object.work_type_complete);
      this.work_type_id_enum = object.work_type_complete && object.work_type_complete.work_type_id;
      this.current_status = object.current_status;
      this.current_status_complete = new Status(object.current_status_complete);
      this.iguala = object.iguala;
      this.iguala_complete = new Iguala(object.iguala_complete);

      // Add ArtWorks collection to the Work.
      this.art_works = [];
      if (object.art_works) {
        for (let artWork of object.art_works) {
          if (!artWork.name && artWork.art_type_complete) {
            this.art_works.push(new ArtWork({ id: artWork.art_type, name: artWork.art_type_complete.name, quantity: artWork.quantity }));
          } else {
            this.art_works.push(new ArtWork(artWork));
          }
        }
      }

      this.work_designers = [];
      if (this.work_designers) {
        // if (this.work_designers.length > 0) {
        //   for (let work_design of object.work_designers) {
        //     this.work_designers.push(new Designer(work_design));
        //   }
        // }
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
    newWorkJSON['current_status'] = +this.current_status;
    newWorkJSON['work_type'] = +this.work_type;

    if (this.id) {
      newWorkJSON['id'] = this.id;
    }
    if (this.iguala && this.work_type_id_enum === 1) {
      newWorkJSON['iguala'] = +this.iguala;
    }
    if (this.brief) {
      newWorkJSON['brief'] = this.brief;
    }
    if (this.final_link) {
      newWorkJSON['final_link'] = this.final_link;
    }
    let artWorksArray = [];
    if (this.art_works && (this.work_type_id_enum === 1 || this.work_type_id_enum === 2)) {
      for (let artWork of this.art_works) {
        artWorksArray.push({ art_type: artWork.id, quantity: artWork.quantity });
      }
    }
    newWorkJSON['art_works'] = artWorksArray;

    // TODO: Designers assignation.
    let workDesignersArray = [];
    if (this.work_designers) {
      if (this.work_designers.length > 0) {
        for (let work_design of this.work_designers) {
          workDesignersArray.push({ id: work_design.id, active_work: work_design.active_work })
        }
      }
    }
    newWorkJSON['work_designers'] = workDesignersArray;

    return newWorkJSON;
  }

}
