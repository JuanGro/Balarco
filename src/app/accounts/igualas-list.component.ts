import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';

@Component({
  templateUrl: 'igualas-list.component.html'
})
export class IgualasListComponent {
  @ViewChild('childModal') public childModal: ModalDirective;
  public igualas: any; //This should not happen, because assign "any" is not a good practice but it's just an example

  constructor() {
    this.igualas = [
      {'id' : '1', 'company' : 'Starbucks', 'igualas_total' : '90', 'igualas_available' : '9'},
      {'id' : '2', 'company' : 'General Electric', 'igualas_total' : '100', 'igualas_available' : '32'},
      {'id' : '3', 'company' : 'Comex', 'igualas_total' : '77', 'igualas_available' : '2'},
      {'id' : '4', 'company' : 'Starbucks', 'igualas_total' : '90', 'igualas_available' : '9'},
      {'id' : '5', 'company' : 'General Electric', 'igualas_total' : '100', 'igualas_available' : '32'},
      {'id' : '6', 'company' : 'Comex', 'igualas_total' : '77', 'igualas_available' : '2'},
      {'id' : '7', 'company' : 'Starbucks', 'igualas_total' : '90', 'igualas_available' : '9'},
      {'id' : '8', 'company' : 'General Electric', 'igualas_total' : '100', 'igualas_available' : '32'},
      {'id' : '9', 'company' : 'Comex', 'igualas_total' : '77', 'igualas_available' : '2'},
      {'id' : '10', 'company' : 'Starbucks', 'igualas_total' : '90', 'igualas_available' : '9'}
    ];
  }

  public showChildModal(): void {
    this.childModal.show();
  }

  public hideChildModal(): void {
    this.childModal.hide();
  }
}
