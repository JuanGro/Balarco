/**
* Company class, defines the attributes of a company.
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
    constructor(jsonText: string) {
      let json = JSON.parse(jsonText);
      this.id = json && json.id;
      this.name = json && json.name;
      this.address = json && json.address;
    }
}
