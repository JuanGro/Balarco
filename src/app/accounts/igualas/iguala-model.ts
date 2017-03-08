/**
* Model that defines an Iguala.
**/
export class Iguala {
  id?: number;
  name: string;
  start_date: Date;
  end_date: Date;
  client: number;
  //is_active: boolean;
  // TODO: Add client attribute after merge with develop.

  constructor(json?) {
    this.id = json && json.id;
    this.name = json && json.name;
    this.client = json && json.client;
    // Convert the start_date string to Date object.
    let startDateString = json && json.start_date;
    if (startDateString) {
      let valuesStart = startDateString.split('-');
      let startYear = +valuesStart[0];
      let startMonth = +valuesStart[1] - 1;
      let startDay = +valuesStart[2];
      this.start_date = new Date(startYear, startMonth, startDay);
    }
    // Convert the end_date string to Date object.
    let endDateString = json && json.end_date;
    if (endDateString) {
      let valuesEnd = endDateString.split('-');
      let endYear = +valuesEnd[0];
      let endMonth = +valuesEnd[1] - 1;
      let endDay = +valuesEnd[2];
      this.end_date = new Date(endYear, endMonth, endDay);
    }
  }

  /**
  * Class method to generate a json with date fields in the specific form that
  * Django API is requesting them.
  * Returns:
  *   - Json representing the iguala.
  **/
  public generateJSONForPOST() {
    var newIgualaJSON = {};
    if(this.id) {
      newIgualaJSON['id'] = this.id;
    }
    newIgualaJSON['name'] = this.name;
    newIgualaJSON['client'] = this.client;
    newIgualaJSON['start_date'] = this.start_date.getUTCFullYear() + "-" +
                                  (this.start_date.getUTCMonth() + 1) + "-" +
                                  this.start_date.getUTCDate();
    newIgualaJSON['end_date'] = this.end_date.getUTCFullYear() + "-" +
                                (this.end_date.getUTCMonth() + 1) + "-" +
                                this.end_date.getUTCDate();
    return newIgualaJSON;
  }

}
