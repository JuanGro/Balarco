import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';
import { CommonModule } from '@angular/common';

// Modals
import * as ng2Bootstrap from 'ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/modal';

// Forms
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';

// Pagination
import { NgxPaginationModule } from 'ngx-pagination';

// Services
import { BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { HttpService } from './../../shared/http-service/http.service';
import { CustomToastService } from '../../shared/toast/custom-toast.service';

// Components
import { WorksComponent } from './works.component';
import { WorksListComponent } from './works-list.component';
import { WorkFormComponent } from './work-form.component';
import { WorkFilterFormComponent } from './work-filter-form.component';

// Pipes
import { CalculateDeliveryDatePipe } from './work-dates-format-table.pipe';

// Datepicker
import { DatepickerModule } from 'ng2-bootstrap/datepicker';
import { SelectModule } from 'ng2-select';

// Models
import { WorkFilter } from './work-filter-model';

// Pipes
import { CalculateDeliveryDatePipe } from './work-dates-format-table.pipe';

describe('WorksFilterFormComponent tests', () => {
  // Fixture for debugging and testing a WorksComponent.
    let fixtureParent: ComponentFixture<WorksComponent>;
    // Fixture for debugging and testing a WorkFormComponent.
    let fixtureChildForm: ComponentFixture<WorkFormComponent>;
    // Fixture for debugging and testing a WorksListComponent .
    let fixtureChildTable: ComponentFixture<WorksListComponent>;
    // Fixture for debugging and testing a WorksFilterFormComponent .
    let fixtureChildFilterForm: ComponentFixture<WorkFilterFormComponent>;

    // Save WorksComponent to test it's methods and variables.
    let componentWorks: WorksComponent;
    // Save WorkFormComponent to test it's methods and variables.
    let componentForm: WorkFormComponent;
    // Save WorksListComponent  to test it's methods and variables.
    let componentTable: WorksListComponent;
    // Save WorkFilterFormComponent  to test it's methods and variables.
    let component: WorkFilterFormComponent;

    // Handles on the component's DOM element.
    let de: DebugElement;
    let el: HTMLElement;

    // Create a test Work
    let testWork = new WorkFilter({
        searchByClient: true,
        searchByContact: false,
        searchByIguala: false,
        searchByStatus: false,
        searchByCreationDate: false,
        searchByDeliveryDate: false,
        creation_date: new Date(),
        expected_delivery_date: new Date(),
        client: 1,
        contact: 2,
        iguala: 3,
        current_status: 4
    });

    let testWork2 = new WorkFilter({
        searchByClient: true,
        searchByContact: true,
        searchByIguala: true,
        searchByStatus: true,
        searchByCreationDate: false,
        searchByDeliveryDate: false,
        creation_date: new Date(),
        expected_delivery_date: new Date(),
        client: 1,
        contact: 2,
        iguala: 3,
        current_status: 4
    });

    let testWork3 = new WorkFilter({
        searchByClient: true,
        searchByContact: true,
        searchByIguala: true,
        searchByStatus: true,
        searchByCreationDate: true,
        searchByDeliveryDate: true,
        creation_date: new Date(),
        expected_delivery_date: new Date(),
        client: 1,
        contact: 2,
        iguala: 3,
        current_status: 4
    });

    // Base state before each test runs.
    // Handles asynchronous compilation.
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            // Declare all what the test component has.
            declarations: [ WorksComponent, WorksListComponent , WorkFormComponent, WorkFilterFormComponent, CalculateDeliveryDatePipe ],
            imports: [ ng2Bootstrap.Ng2BootstrapModule, CommonModule, ReactiveFormsModule, FormsModule, NgxPaginationModule,
            ChartsModule, DropdownModule, ModalModule.forRoot(), ToasterModule, DatepickerModule.forRoot(), SelectModule ],
            providers: [
                {
                  provide: HttpService, useFactory: (backend, options) => {
                    return new HttpService(backend, options);
                  },
                  deps: [MockBackend, BaseRequestOptions]
                },
                MockBackend, BaseRequestOptions, CustomToastService
            ]
        });

        // Create an instance of the WorksComponent.
        fixtureParent = TestBed.createComponent(WorksComponent);
        // Create an instance of the WorkFormComponent.
        fixtureChildForm = TestBed.createComponent(WorkFormComponent);
        // Create an instance of the WorksListComponent.
        fixtureChildTable = TestBed.createComponent(WorksListComponent);
        // Create an instance of the WorkFormComponent.
        fixtureChildFilterForm = TestBed.createComponent(WorkFilterFormComponent);

        // WorksComponent test instance.
        componentWorks = fixtureParent.componentInstance;
        // WorkFormComponent test instance.
        componentForm = fixtureChildForm.componentInstance;
        // WorksListComponent  test instance.
        componentTable = fixtureChildTable.componentInstance;
        // WorkFilterFormComponent test instance.
        component = fixtureChildFilterForm.componentInstance;

        // Query for the title <h1> by CSS element selector.
        de = fixtureParent.debugElement.query(By.css('h1'));
        el = de.nativeElement;

      }));

    describe('Use works filter', () => {
        /**
        * Tests that the submitWorkFilterForm method sends the correct request url
        * with just one param to search.
        **/
        it('should send the client to search in an url request', () => {
            component.submitWorkFilterForm(testWork);
            expect(component.urlTesting).toBe('works/works/?client=1');
        });

        /**
        * Tests that the submitWorkFilterForm method sends the correct request url
        * with four params to search.
        **/
        it('should send the four params to search in an url request', () => {
            component.submitWorkFilterForm(testWork2);
            expect(component.urlTesting).toBe('works/works/?client=1&contact=2&iguala=3&current_status=4');
        });

        /**
        * Tests that the submitWorkFilterForm method sends the correct request url
        * with all the params to search.
        **/
        it('should send all the params to search in an url request', () => {
            component.submitWorkFilterForm(testWork3);
            let date: Date = new Date();
            let dateString: string = (date.getUTCFullYear() + '-' + (date.getUTCMonth() + 1) + '-' +
                                 date.getUTCDate()).toString();
            expect(component.urlTesting).toBe('works/works/?client=1&contact=2&iguala=3&current_status=4&creation_date='
                                             + dateString + '&expected_delivery_date=' + dateString);
        });
    });
});
