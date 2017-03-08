import { Component, Input, OnChanges } from '@angular/core';

// Services
import { HttpService } from './../../shared/http-service/http.service';

// Models
import { Iguala } from './iguala-model';

@Component({
  selector: 'iguala-form',
  templateUrl: 'iguala-form.component.html'
})
export class IgualaFormComponent implements OnChanges {
  // Receives the iguala selected by the user or the empty object to know if is called the update or create iguala form.
  @Input() iguala: Iguala;
  // Receives the clients list from parent component.
  // TODO: @Input('clientsList') clientsList: Client[];
  public clientSelected: number;

  public constructor(private httpService: HttpService) { }

  public ngOnChanges() {
    this.iguala = {
      name: '', client: null, start_date: new Date(), end_date: new Date(), is_active: true
    };
    console.log(this.iguala);
  }

  public submitIgualaForm(value) {
    console.log("In submit!");
    console.log(this.iguala);
  }
}
