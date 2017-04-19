/**
* Class that represents a Status of a work.
**/
export class Status {
  id?: number;
  name: string;
  status_id?: number;

  constructor(object?: any) {
    this.id = object && object.id;
    this.name = object && object.name;
    this.status_id = object && object.status_id;
  }
}
