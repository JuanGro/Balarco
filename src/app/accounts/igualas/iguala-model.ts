/**
* Model that defines an Iguala.
**/
export class Iguala {
  id?: number;
  name: string;
  start_date: Date;
  end_date: Date;
  client: number;
  is_active: boolean;
  // TODO: Add client attribute after merge with develop.

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
