/**
* Class that declares all the attributes used in the Group object.
**/
export class Group {
  id?: number;
  name?: string;

  /**
  * Constructor to create a Group based on server response at POST.
  * Params:
  *   - jsonText: The user returned from API in json format string.
  **/
  constructor(json?) {
    this.id = json && json.id;
    this.name = json && json.name;
  }
}
