/**
* Class that represents a Designer of a work.
**/
export class Designer {
  designer?: number;
  active_work?: boolean;

  constructor(object?: any) {
    this.designer = object && object.designer;
    this.active_work = object && object.active_work;
  }
}
