/**
* Class that represents an art work that will be done in a Work.
**/
export class ArtWork {
  id?: number;
  name: string;
  quantity: number;

  constructor(object?: any) {
    this.id = object && object.id;
    this.name = object && object.name;
    if (object && object.quantity) {
      this.quantity = object && object.quantity;
    } else {
      this.quantity = 0;
    }
  }
}
