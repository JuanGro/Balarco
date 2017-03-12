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
  // Sends the request to show the current contact modal in parent component.
  @Output() requestShowUpdateIgualaModal: EventEmitter<string> = new EventEmitter();
  // Sends the iguala object to the parent when it is selected.
  @Output() currentIguala: EventEmitter<Iguala> = new EventEmitter();
  // Variable to check in test what action is executed between components.
  public modalAction: string = '';

  constructor() { }

  /**
  * Requests to parent component to show the new iguala modal.
  **/
  public requestNewIgualaModal() {
    this.modalAction = 'Open new Contact modal';
    this.requestShowNewIgualaModal.emit(this.modalAction);
  }

  /**
  * Requests to parent component to show the current iguala modal.
  **/
  public requestUpdateIgualaModal() {
    this.modalAction = 'Open update contact modal';
    this.requestShowUpdateIgualaModal.emit(this.modalAction);
  }

  /**
  * Sends to the parent component the iguala selected by user.
  * Params:
  *   - object: Iguala selected.
  **/
  public sendCurrentIguala(object: Iguala) {
    this.currentIguala.emit(object);
  }

}
