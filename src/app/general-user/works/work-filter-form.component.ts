import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

// Models
import { WorkFilter } from './work-filter-model';
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
    // Variable to test request url.
    public urlTesting: string;

    public constructor(private httpService: HttpService, private toaster: CustomToastService) { }

    /**
     * Builds the component each time when it's called.
     *   - Initialize the form depending if the new or update work form is called.
     *   - Use an auxiliary variable to select a default value for the dropdown used in the form.
     **/
    public ngOnChanges() {
        this.workFilter = new WorkFilter();
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
        this.urlTesting = urlFilterWorks;

        this.resultSearch.emit(urlFilterWorks);
    }
}
