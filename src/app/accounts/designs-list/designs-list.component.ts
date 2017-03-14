import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';

@Component({
  templateUrl: 'designs-list.component.html'
})
export class DesignsListComponent {
  @ViewChild('childModal') public childModal: ModalDirective;
  public designs: any; // This should not happen, because assign "any" is not a good practice but it's just an example

  constructor() {
    this.designs = [
      {'id' : '1', 'name' : 'Campaña Té verde', 'company' : 'Starbucks', 'status' : 'Cobrado'},
      {'id' : '2', 'name' : 'Campaña Predix', 'company' : 'General Electric', 'status' : 'Rechazado'},
      {'id' : '3', 'name' : 'Campaña LigaMX', 'company' : 'Comex', 'status' : 'Por facturar'},
      {'id' : '4', 'name' : 'Campaña Té verde', 'company' : 'Starbucks', 'status' : 'Por cobrar'},
      {'id' : '5', 'name' : 'Campaña Predix', 'company' : 'General Electric', 'status' : 'Diseño'},
      {'id' : '6', 'name' : 'Campaña LigaMX', 'company' : 'Comex', 'status' : 'Producción'},
      {'id' : '7', 'name' : 'Campaña Té verde', 'company' : 'Starbucks', 'status' : 'Validación'},
      {'id' : '8', 'name' : 'Campaña Predix', 'company' : 'General Electric', 'status' : 'Cobrado'},
      {'id' : '9', 'name' : 'Campaña LigaMX', 'company' : 'Comex', 'status' : 'Por facturar'},
      {'id' : '10', 'name' : 'Campaña Té verde', 'company' : 'Starbucks', 'status' : 'Rechazado'}
    ];
  }

  public showChildModal(): void {
    this.childModal.show();
  }

  public hideChildModal(): void {
    this.childModal.hide();
  }
}
