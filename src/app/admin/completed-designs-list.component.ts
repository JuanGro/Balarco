import { Component, ViewChild, Input } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';

@Component({
  selector: 'completed-designs-list',
  templateUrl: 'completed-designs-list.component.html'
})
export class CompletedDesignsListComponent {
  @ViewChild('childModal') public childModal: ModalDirective;
  public completedDesigns: any; //This should not happen, because assign "any" is not a good practice but it's just an example
  
  public name: string;
  public client: string;
  public endDate: string;

  constructor() {
    this.completedDesigns = [
      {'id' : '1', 'name' : 'Campaña Té manzanilla', 'client' : 'Starbucks', 'endDate' : '2012/01/01'},
      {'id' : '2', 'name' : 'Campaña Predix', 'client' : 'General Electric', 'endDate' : '2012/01/01'},
      {'id' : '3', 'name' : 'Campaña LigaMX', 'client' : 'Comex', 'endDate' : '2012/01/01'},
      {'id' : '4', 'name' : 'Campaña Té manzanilla', 'client' : 'Starbucks', 'endDate' : '2012/01/01'}
    ];
  }

  clicked(name, client, endDate) {
    this.name = name;
    this.client = client;
    this.endDate = endDate;
  }

}
