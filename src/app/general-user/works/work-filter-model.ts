// Models
import { Iguala } from '../../accounts/igualas/iguala-model';
import { Contact } from '../../accounts/contacts/contact-model';
import { Client } from '../../accounts/clients/client-model';
import { Status } from './status/status-model';

export class WorkFilter {
  client?: number;
  client_complete?: Client;
  contact?: number;
  contact_complete?: Contact;
  iguala?: number;
  iguala_complete?: Iguala;
  current_status?: number;
  current_status_complete?: Status;
  creation_date?: Date;
  expected_delivery_date?: Date;
  // Checkboxes
  searchByClient: boolean;
  searchByContact: boolean;
  searchByIguala: boolean;
  searchByStatus: boolean;
  searchByCreationDate: boolean;
  searchByDeliveryDate: boolean;

  constructor(object?: any) {
    if (object) {
      this.client = object.client;
      this.client_complete = object.client_complete;
      this.contact = object.contact;
      this.iguala = object.iguala;
      this.iguala_complete = new Iguala(object.iguala_complete);
      this.contact_complete = new Contact(object.contact_complete);
      this.current_status = object.current_status;
      this.current_status_complete = new Status(object.current_status_complete);

      // Checkboxes
      this.searchByClient = object.searchByClient;
      this.searchByContact = object.searchByContact;
      this.searchByIguala = object.searchByIguala;
      this.searchByStatus = object.searchByStatus;
      this.searchByCreationDate = object.searchByCreationDate;
      this.searchByDeliveryDate = object.searchByDeliveryDate;

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
    } else {
        this.searchByClient = false;
        this.searchByContact = false;
        this.searchByIguala = false;
        this.searchByStatus = false;
        this.searchByCreationDate = false;
        this.searchByDeliveryDate = false;
    }
  }
}
