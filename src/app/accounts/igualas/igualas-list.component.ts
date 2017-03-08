import { Component, ViewChild, Output, Input, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';

// Models
import { Iguala } from './iguala-model';

@Component({
  selector: 'igualas-list-table',
  templateUrl: 'igualas-list.component.html'
})
export class IgualasListComponent {
  // Receives the Iguala list from parent component.
  @Input('igualasList') igualasList: Iguala[];
  // Sends the request to show the new contact modal in parent component.
  @Output() requestShowNewIgualaModal: EventEmitter<string> = new EventEmitter();
  // Variable to check in test what action is executed between components.
  public modalAction: string = '';

  @ViewChild('childModal') public childModal: ModalDirective;
  public igualas: any; // This should not happen, because assign "any" is not a good practice but it's just an example

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

  /**
  * Request to parent component to show the new Iguala modal.
  **/
  public requestNewIgualaModal() {
    console.log('In BUtton');
    this.modalAction = 'Open new Iguala modal';
    this.requestShowNewIgualaModal.emit(this.modalAction);
  }

  public showChildModal(): void {
    this.childModal.show();
  }

  public hideChildModal(): void {
    this.childModal.hide();
  }
}
