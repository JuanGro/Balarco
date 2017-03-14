/**
* Class to define all the attributes used in the Client object.
**/
export class Client {
    id?: number;
    name: string;
    address: string;

    /**
    * Constructor to create a Client based on server response at POST.
    * Params:
    *   - jsonText: The client returned from API in json format string.
    **/
    constructor(json?) {
      this.id = json && json.id;
      this.name = json && json.name;
      this.address = json && json.address;
    }
}
