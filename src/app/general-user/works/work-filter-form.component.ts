import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

// Models
import { WorkFilter } from './work-filter.model';
import { Client } from '../../accounts/clients/client-model';
import { Contact } from '../../accounts/contacts/contact-model';
import { Iguala } from '../../accounts/igualas/iguala-model';
import { Status } from './status/status-model';

// Services
import { HttpService } from './../../shared/http-service/http.service';
import { CustomToastService } from '../../shared/toast/custom-toast.service';

// Environment
import { environment } from '../../../environments/environment';

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
export class WorkFilterFormComponent implements OnChanges {
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
    // Sends the url to send to the API.
    @Output() resultSearch: EventEmitter<string> = new EventEmitter<string>();
    // Variable to check in test what action is executed between components.
    public modalAction: string = '';
    // Variable to control the work filter.
    public workFilter: WorkFilter;
    // Variable for filtering Contacts by Client selected in dropdown.
    private currentContacts: Contact[];
    // Variable to set the client when an existing work is received.
    private client_id: number;
    // Variable to set the contact when client dropdown changes.
    private contact_id: number;
    // Array to keep track of the possible status the work can get into.
    private possibleStatus: Status[];

    public constructor(private httpService: HttpService, private toaster: CustomToastService) { }

    /**
     * Builds the component each time when it's called.
     *   - Initialize the form depending if the new or update work form is called.
     *   - Use an auxiliary variable to select a default value for the dropdown used in the form.
     **/
    public ngOnChanges() {
        this.workFilter = new WorkFilter();
        if (this.statusList) {
            this.possibleStatus =  this.getPossibleStatusForProject();
        }
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

        if (this.possibleStatus && this.possibleStatus.length > 0) {
            this.workFilter.current_status = this.possibleStatus[0].id;
        }
    }

    /**
     * Executes the submitWorkFilterForm and create the link to filter works depending of
     * what is received.
     **/
    public submitWorkFilterForm(object: WorkFilter) {
        let urlFilterWorks: string = environment.WORKS_URL + '?';
        let params = 0;

        if (object.searchByClient) {
            urlFilterWorks += 'client=' + object.client;
            params++;
        }

        if (object.searchByContact) {
            if (params === 0) {
                urlFilterWorks += 'contact=' + object.contact;
            } else {
                urlFilterWorks += '&contact=' + object.contact;
            }
            params++;
        }

        if (object.searchByIguala) {
            if (params === 0) {
                urlFilterWorks += 'iguala=' + object.iguala;
            } else {
                urlFilterWorks += '&iguala=' + object.iguala;
            }
            params++;
        }

        if (object.searchByStatus) {
            if (params === 0) {
                urlFilterWorks += 'current_status=' + object.current_status;
            } else {
                urlFilterWorks += '&current_status=' + object.current_status;
            }
            params++;
        }

        if (object.searchByCreationDate) {
            let creation_date = object.creation_date.getUTCFullYear() + '-' +
                                  (object.creation_date.getUTCMonth() + 1) + '-' +
                                  object.creation_date.getUTCDate();

            if (params === 0) {
                urlFilterWorks += 'creation_date=' + creation_date;
            } else {
                urlFilterWorks += '&creation_date=' + creation_date;
            }
            params++;
        }

        if (object.searchByDeliveryDate) {
            let delivery_date = object.expected_delivery_date.getUTCFullYear() + '-' +
                                  (object.expected_delivery_date.getUTCMonth() + 1) + '-' +
                                  object.expected_delivery_date.getUTCDate();

            if (params === 0) {
                urlFilterWorks += 'expected_delivery_date=' + delivery_date;
            } else {
                urlFilterWorks += '&expected_delivery_date=' + delivery_date;
            }
            params++;
        }

        this.resultSearch.emit(urlFilterWorks);
    }

    /**
     * Function that returns an array of possible status if the project is new.
     * Returns:
     *   - Array of Status.
     **/
    private getPossibleStatusForProject(): Status[] {
        return this.statusList.filter(status => status.status_id === 0 || status.status_id === 1);
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
     * Reset the current form.
     **/
    public cancelForm(form: NgForm) {
        form.control.markAsUntouched();
    }
}
