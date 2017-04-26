/**
* Class that represents a Designer of a work for the API.
**/
export class Designer {
  designer?: number;
  active_work?: boolean;
  designer_name?: string;
  designer_last_name?: string;
  start_date?: Date;
  end_date?: Date;

  constructor(object?: any) {
    this.designer = object && object.designer;
    this.active_work = object && object.active_work;
    this.designer_name = object && object.designer_name;
    this.designer_last_name = object && object.designer_last_name;
    this.start_date = object && object.start_date;
    this.end_date = object && object.end_date;
  }
}

/**
* Class that represents a Designer of a work.
**/
export class DesignerString {
   id: number;
   text: string;
}
