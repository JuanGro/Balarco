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
/**
* Component which manage the forms for update and create an Iguala:
*  - Use OnChanges feature because it's important to know if the user opens a new modal or update modal depending
* in the iguala object value, the component is listening for each change in that variable.
* - Initialize form.
* - Create validations.
* - Request save the contact.
* - Request actions in modals to the parent component.
**/
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

  /**
  * Builds the component for first time each time when it's called.
  *   - Initialize the form depending if the new or update iguala form is called.
  *   - Use an auxiliary variable to select a default value for the dropdown used in the form.
  **/
  public ngOnChanges() {
    if(!this.iguala) {
      this.iguala = new Iguala();
    } else {
      this.oldIguala = new Iguala(this.iguala);
    }
  }

  /**
  * Executes the submitUpdatedIguala or submitNewIguala depending if the iguala
  * received when the modal was called is empty or not.
  **/
  public submitIgualaForm() {
    if (this.iguala.id) {
      // Update iguala
    } else {
      // Create iguala
      this.submitNewIguala();
    }

  }

  /**
  * Requests the API to create a new Iguala.
  **/
  public submitNewIguala() {
    this.httpService.postObject('works/igualas/', this.iguala.generateJSONForPOST()).subscribe(result => {
      if(result.ok) {
        console.log('Iguala created');
      }
    });
  }

  /**
  * Requests to parent component to close the current modal.
  **/
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
