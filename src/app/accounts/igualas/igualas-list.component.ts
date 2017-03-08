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

  constructor() { }
  
}
