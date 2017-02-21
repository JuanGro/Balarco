import { Component, OnInit, Input } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';
import { Observable } from 'rxjs/Rx';

// Components
import { ContactsList } from './contacts-list';

// Services
// import { ContactsListService } from './contacts-list.service';

@Component({
  selector: 'contacts-list',
  templateUrl: 'contacts-list.component.html',
  moduleId: module.id,
})
export class ContactsListComponent implements OnInit {
  public documents: ContactsList[];
  public errorMessage: string;
  public contact: ContactsList;
  @Input() notify: ContactsList;

  public constructor() {
    /*let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getDocuments());*/
  this.documents = [
      {'name' : 'Mark', 'lastname' : 'Otto', 'job' : 'marketing', 'landline' : '2123434', 'ext' : '12', 'phone1' : '4423333333', 'phone2' : '2222222222', 'email' : 'mail@gmail.com'}
    ];
  }

  ngOnInit() { }

  /*getDocuments() {
    this.contactsListService.getDocuments()
        .subscribe(
          documents => this.documents = documents,
          error => this.errorMessage = <any>error
        );
  }*/

  onNotify(object: ContactsList): void {
    this.contact = object;
  }
}
