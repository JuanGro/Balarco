// Models
import { Client } from './../clients/client-model';
import { ArtWork } from './../../general-user/works/art-works/art-work-model';

/**
* Model that defines an Iguala.
**/
export class Iguala {
  id?: number;
  name?: string;
  start_date?: Date;
  end_date?: Date;
  client?: number;
  client_complete?: Client;
  art_iguala?: ArtWork[];

  constructor(object?: any) {
    this.id = object && object.id;
    this.name = object && object.name;
    this.client = object && object.client;
    this.client_complete = object && new Client(object.client_complete);
    if (object && object.start_date instanceof Date) {
      this.start_date = object.start_date;
    } else {
      // Convert the start_date string to Date object.
      let startDateString = object && object.start_date;
      if (startDateString) {
        let valuesStart = startDateString.split('-');
        let startYear = +valuesStart[0];
        let startMonth = +valuesStart[1] - 1;
        let startDay = +valuesStart[2];
        this.start_date = new Date(startYear, startMonth, startDay);
      }
    }
    if (object && object.end_date instanceof Date) {
      this.end_date = object.end_date;
    } else {
      // Convert the end_date string to Date object.
      let endDateString = object && object.end_date;
      if (endDateString) {
        let valuesEnd = endDateString.split('-');
        let endYear = +valuesEnd[0];
        let endMonth = +valuesEnd[1] - 1;
        let endDay = +valuesEnd[2];
        this.end_date = new Date(endYear, endMonth, endDay);
      }
    }

    // Get Artworks from art_iguala array.
    this.art_iguala = [];
    if (object && object.art_iguala) {
      for (let art of object.art_iguala) {
        this.art_iguala.push(new ArtWork({ id: art.art_type, name: art.art_type_name, quantity: art.quantity}));
      }
    }
  }

  /**
  * Class method to generate a json with date fields in the specific form that
  * Django API is requesting them.
  * Returns:
  *   - Json representing the iguala.
  **/
  public generateJSONForPOST() {
    let newIgualaJSON = {};
    if (this.id) {
      newIgualaJSON['id'] = this.id;
    }
    newIgualaJSON['name'] = this.name;
    newIgualaJSON['client'] = this.client;
    newIgualaJSON['start_date'] = this.start_date.getUTCFullYear() + '-' +
                                  (this.start_date.getUTCMonth() + 1) + '-' +
                                  this.start_date.getUTCDate();
    newIgualaJSON['end_date'] = this.end_date.getUTCFullYear() + '-' +
                                (this.end_date.getUTCMonth() + 1) + '-' +
                                this.end_date.getUTCDate();

    let artIgualaArray = [];
    for (let artWork of this.art_iguala) {
      artIgualaArray.push({ art_type: artWork.id, quantity: artWork.quantity });
    }
    newIgualaJSON['art_iguala'] = artIgualaArray;

    console.log('newIgualaJSON');
    console.log(newIgualaJSON);

    return newIgualaJSON;
  }
}
