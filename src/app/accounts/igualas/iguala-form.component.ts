import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
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
  // Requests close of modal to parent component.
  @Output() requestCloseModal: EventEmitter<string> = new EventEmitter();
  // Event for parent when an Iguala is updated.
  @Output() igualaUpdated: EventEmitter<Iguala> = new EventEmitter();
  // Inicialization of form control.
  public igualasModalForm: FormGroup;
  // Variable that stores the old iguala if the update is canceled.
  public oldIguala: Iguala;
  // Variable to check in test what action is executed between components.
  public modalAction: string = '';

  public constructor(private httpService: HttpService) { }

  public ngOnChanges() {
    if(!this.iguala) {
      this.iguala = new Iguala();
    } else {
      this.oldIguala = new Iguala(this.iguala);
    }
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

  public requestCloseThisModal() {
    this.modalAction = 'Close modal';
    this.requestCloseModal.emit(this.modalAction);
  }

  /**
  * Set iguala with TWDB with old values or clear object if it's new.
  **/
  public cancelForm() {
    if(this.oldIguala) {
      this.iguala = this.oldIguala;
      this.igualaUpdated.emit(this.iguala);
    } else {
      this.iguala = new Iguala();
    }
  }
}
