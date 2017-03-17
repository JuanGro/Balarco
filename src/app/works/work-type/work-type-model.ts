/**
* Class that represents a Work type:
* Iguala, Graduations or Projects.
**/
export class WorkType {
  id?: number;
  name: string;

  constructor(object?: any) {
    this.id = object && object.id;
    this.name = object && object.name;
  }
}
