import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';

@Component({
  templateUrl: 'companies-list.component.html'
})
export class CompaniesListComponent {
  @ViewChild('childModal') public childModal: ModalDirective;
  public companies: any; // This should not happen, because assign "any" is not a good practice but it's just an example

  constructor() {
    this.companies = [
      {'id' : '1', 'company' : 'Starbucks', 'mail' : 'mail@gmail.com'},
      {'id' : '2', 'company' : 'General Electric', 'mail' : 'mail@gmail.com'},
      {'id' : '3', 'company' : 'Comex', 'mail' : 'mail@gmail.com'},
      {'id' : '4', 'company' : 'Starbucks', 'mail' : 'mail@gmail.com'},
      {'id' : '5', 'company' : 'General Electric', 'mail' : 'mail@gmail.com'},
      {'id' : '6', 'company' : 'Comex', 'mail' : 'mail@gmail.com'},
      {'id' : '7', 'company' : 'Starbucks', 'mail' : 'mail@gmail.com'},
      {'id' : '8', 'company' : 'General Electric', 'mail' : 'mail@gmail.com'},
      {'id' : '9', 'company' : 'Comex', 'mail' : 'mail@gmail.com'},
      {'id' : '10', 'company' : 'Starbucks', 'mail' : 'mail@gmail.com'}
    ];
  }

  public showChildModal(): void {
    this.childModal.show();
  }

  public hideChildModal(): void {
    this.childModal.hide();
  }
}
