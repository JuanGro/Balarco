/**
* Class that represents a Work type:
* Iguala, Graduations or Projects.
**/
export class WorkType {
  id?: number;
  name: string;
  // Attribute to check in the enum if the work type is Iguala or Graduation.
  work_type_id: number;

  constructor(object?: any) {
    this.id = object && object.id;
    this.name = object && object.name;
    this.work_type_id = object && object.work_type_id;
  }
}
