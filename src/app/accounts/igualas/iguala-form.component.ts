import { Component, Input, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

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
  public igualasModalForm: FormGroup;

  public constructor(private httpService: HttpService) { }

  public ngOnChanges() {
    this.iguala = new Iguala();
    console.log(this.iguala);
  }

  public submitIgualaForm() {
    this.submitNewIguala();
  }

  public submitNewIguala() {
    this.httpService.postObject('works/igualas/', this.iguala.generateJSONForPOST()).subscribe(result => {
      if(result.ok) {
        console.log('Iguala created');
      }
    });
  }
}
