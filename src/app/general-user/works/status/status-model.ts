/**
* Class that represents a Status of a work.
**/
export class Status {
  id?: number;
  name: string;

  constructor(object?: any) {
    this.id = object && object.id;
    this.name = object && object.name;
  }  
}
