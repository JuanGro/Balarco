import { Component, OnChanges, OnInit, Input, Output, EventEmitter } from '@angular/core';

// Models
import { WorkFilter } from './work-filter.model';
import { Client } from '../../accounts/clients/client-model';
import { Contact } from '../../accounts/contacts/contact-model';
import { Iguala } from '../../accounts/igualas/iguala-model';
import { Status } from './status/status-model';

@Component({
  selector: 'work-filter-form',
  templateUrl: 'work-filter-form.component.html'
})
/**
* Component which manage the forms for update and create a work:
* - Use OnChanges feature because it's important to know if the user opens a new modal or update modal depending
* in the work object value, the component is listening for each change in that variable.
* - Initialize form.
* - Create validations.
* - Request save the work.
* - Request actions in modals to the parent component.
**/
export class WorkFilterFormComponent implements OnChanges, OnInit {
    // Receives the contacts list from parent component.
    @Input('contactsList') contactsList: Contact[];
    // Receives the clients list from parent component.
    @Input('clientsList') clientsList: Client[];
    // Receives the igualas list from parent component.
    @Input('igualasList') igualasList: Iguala[];
    // Receives status list from parent component.
    @Input('statusList') statusList: Status[];
    // Requests close of the current modal to parent component.
    @Output() requestCloseModal: EventEmitter<string> = new EventEmitter();
    // Variable to check in test what action is executed between components.
    public modalAction: string = '';
    // Variable to control the work filter.
    public workFilter: WorkFilter;
    // Variable to active the form.
    public active: boolean = true;
    // Variable for filtering Contacts by Client selected in dropown..
    private currentContacts: Contact[];
    // Variable to set the client when an existing work is received.
    private client_id: number;
    // Variable to set the contact when client dropdown changes.
    private contact_id: number;

    public ngOnInit() {
        this.workFilter = new WorkFilter();
        this.initialDropdownSetup();
    }

    /**
     * Builds the component for first time each time when it's called.
     *   - Initialize the form depending if the new or update work form is called.
     *   - Use an auxiliary variable to select a default value for the dropdown used in the form.
     **/
    public ngOnChanges() {
        this.workFilter = new WorkFilter();
        this.initialDropdownSetup();
    }

    /**
     * Method to fill dropdowns initially when the modal is shown and Work is new.
     **/
    private initialDropdownSetup() {
        if (this.clientsList && this.contactsList && this.clientsList.length > 0) {
            this.client_id = this.clientsList[0].id;
            this.filterContactsByClientId(this.client_id);
        }
    }

    /**
     * Method that listens to event of change in the Clients dropdown.
     * Params:
     *   - id: Id of the new client selected.
     **/
    public onClientChange(id: number) {
        this.filterContactsByClientId(id);
    }

    /**
     * Method that filters the contacts by the client id.
     * Params:
     *   - id: Id of the client from which the contacts will be filtered.
     **/
    private filterContactsByClientId(id: number) {
        if (this.contactsList) {
            this.currentContacts = this.contactsList.filter(x => x.client === +id);
            if (this.currentContacts.length > 0) {
            this.contact_id = this.currentContacts[0].id;
            }
        }
    }

    /**
     * Requests to parent component to close the current modal.
     **/
    public requestCloseThisModal() {
        this.modalAction = 'Close modal';
        this.requestCloseModal.emit(this.modalAction);
    }

    /**
     * Set work with TWDB with old values or clear object if it's new.
     **/
    public cancelForm() {
        this.workFilter = new WorkFilter();
        setTimeout(() => this.active = false, 0);
        setTimeout(() => this.active = true, 1);
    }
}
