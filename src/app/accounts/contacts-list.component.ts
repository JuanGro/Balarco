import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';

@Component({
  templateUrl: 'contacts-list.component.html'
})
export class ContactsListComponent {
  @ViewChild('childModal') public childModal: ModalDirective;
  public clients: any; // This should not happen, because assign "any" is not a good practice but it's just an example

  constructor() {
    this.clients = [
      {'id' : '1', 'name' : 'Mark Otto', 'company' : 'Starbucks', 'mail' : 'mail@gmail.com'},
      {'id' : '2', 'name' : 'Jacob Thornton', 'company' : 'General Electric', 'mail' : 'mail@gmail.com'},
      {'id' : '3', 'name' : 'Larry Williams', 'company' : 'Comex', 'mail' : 'mail@gmail.com'},
      {'id' : '4', 'name' : 'Mark Otto', 'company' : 'Starbucks', 'mail' : 'mail@gmail.com'},
      {'id' : '5', 'name' : 'Jacob Thornton', 'company' : 'General Electric', 'mail' : 'mail@gmail.com'},
      {'id' : '6', 'name' : 'Larry Williams', 'company' : 'Comex', 'mail' : 'mail@gmail.com'},
      {'id' : '7', 'name' : 'Mark Otto', 'company' : 'Starbucks', 'mail' : 'mail@gmail.com'},
      {'id' : '8', 'name' : 'Jacob Thornton', 'company' : 'General Electric', 'mail' : 'mail@gmail.com'},
      {'id' : '9', 'name' : 'Larry Williams', 'company' : 'Comex', 'mail' : 'mail@gmail.com'},
      {'id' : '10', 'name' : 'Mark Otto', 'company' : 'Starbucks', 'mail' : 'mail@gmail.com'}
    ];
  }

  public showChildModal(): void {
    this.childModal.show();
  }

  public hideChildModal(): void {
    this.childModal.hide();
  }
}
