import { Component, OnInit, Input } from '@angular/core';

// Components
import { ContactsList } from './contacts-list';

// Services
import { HttpService } from './../../shared/http-service/http.service';

@Component({
  selector: 'contacts-list',
  templateUrl: 'contacts-list.component.html'
})
export class ContactsListComponent implements OnInit {
  public title: string;
  // Object received from service
  public documents: ContactsList[];
  // Variable for save the object received from child component
  public contact: ContactsList;
  // Received from child component
  @Input() currentContact: ContactsList;

  public constructor(public httpService: HttpService) { }

  public ngOnInit() {
    this.title = 'Lista de contactos';
    
    // this.loadDocuments('clients/contacts/');

    this.documents = [
        {'id': 1, 'name' : 'Marco', 'last_name' : 'Otto', 'client' : 1, 'charge' : 'Marketing', 'landline' : '2123434', 'extension' : '12', 'mobile_phone_1' : '4423333333', 'email' : 'mail@gmail.com'}
    ];
    console.log(this.documents);
  }

  public loadDocuments(url: string) {
    this.httpService.getObject(url)
                    .map((data: any) => data.json())
                    .subscribe( documents => this.documents = documents,
                                err => {
                                  console.log(err);
                                }
                    );
  }

  public initializeModal() {
    this.contact = null;
  }

  public removeContact(model: ContactsList) {
    this.httpService.deleteObject('clients/clients/' + model.id).subscribe(result => {
      // console.log(result);
    });
  }

  public getContactFromTable(object: ContactsList): void {
    this.contact = object;
  }
}
