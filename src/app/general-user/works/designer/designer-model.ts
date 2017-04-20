/**
* Class that represents a Designer of a work.
**/
export class Designer {
  id?: number;
  active_work?: boolean;

  constructor(object?: any) {
    this.id = object && object.id;
    this.active_work = object && object.active_work;
  }
}
