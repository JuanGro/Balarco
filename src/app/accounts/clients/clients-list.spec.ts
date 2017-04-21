import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';

// Modals
import  * as ng2Bootstrap from 'ng2-bootstrap';
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
import { ClientsComponent } from './clients.component';
import { ClientsListComponent } from './clients-list.component';
import { ClientFormComponent } from './client-form.component';

// Models
import { Client } from './client-model';

describe('ClientsListComponent  tests.', () => {
    // Fixture for debugging and testing a ClientsComponent.
    let fixtureParent: ComponentFixture<ClientsComponent>;
    // Fixture for debugging and testing a ClientsFormComponent.
    let fixtureChildForm: ComponentFixture<ClientFormComponent>;
    // Fixture for debugging and testing a ClientsListComponent .
    let fixtureChildTable: ComponentFixture<ClientsListComponent>;

    // Save ClientsComponent to test it's methods and variables.
    let componentParent: ClientsComponent;
    // Save ClientsFormComponent to test it's methods and variables.
    let componentForm: ClientFormComponent;
    // Save ClientsListComponent  to test it's methods and variables.
    let component: ClientsListComponent;

    // let httpServiceStub;
    // Handles on the component's DOM element.
    let de: DebugElement;
    let el: HTMLElement;

    // Variable to test which action is executing in modal.
    let modalAction;

    // Create a Client object example.
    let testClient: Client = { id: 2, name: 'Juan', address: 'Example' };

    let testListClients: Client[] = [
                                { id: 1, name: 'Starbucks', address: 'Example' },
                                { id: 2, name: 'General Electric', address: 'Example' }
                                ];

    // Base state before each test runs.
    // Handles asynchronous compilation.
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            // Declare all what the test component has.
            declarations: [ ClientsComponent, ClientsListComponent , ClientFormComponent ],
            imports: [ ng2Bootstrap.Ng2BootstrapModule, CommonModule, ReactiveFormsModule, FormsModule,
            ChartsModule, DropdownModule, ModalModule.forRoot(), ToasterModule, NgxPaginationModule ],
            providers: [ ClientsListComponent ,
                {
                  provide: HttpService, useFactory: (backend, options) => {
                    return new HttpService(backend, options);
                  },
                  deps: [MockBackend, BaseRequestOptions]
                },
                MockBackend, BaseRequestOptions, CustomToastService
            ]
        });

        // Create an instance of the ClientsComponent.
        fixtureParent = TestBed.createComponent(ClientsComponent);
        // Create an instance of the ClientsFormComponent.
        fixtureChildForm = TestBed.createComponent(ClientFormComponent);
        // Create an instance of the ClientsListComponent.
        fixtureChildTable = TestBed.createComponent(ClientsListComponent);

        // ClientsComponent test instance.
        componentParent = fixtureParent.componentInstance;
        // ClientsFormComponent test instance.
        componentForm = fixtureChildForm.componentInstance;
        // ClientsListComponent  test instance.
        component = fixtureChildTable.componentInstance;

        // Query for the title <h1> by CSS element selector.
        de = fixtureParent.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    }));

    describe('Components defined for the child clients list table component', () => {
        /**
        * Tests that the current component is correctly built.
        **/
        it('should have a defined current component', () => {
            expect(component).toBeDefined();
        });

        /**
        * Tests that the parent component is correctly built.
        **/
        it('should have a defined parent component', () => {
            componentParent.ngOnInit();
            expect(componentParent).toBeDefined();
        });
    });

    describe('Initialization of variable for child clients list table component', () => {
        /**
        * Tests that the Client object received from parent component is not empty.
        **/
        it('should load correctly clients list in clientsList Input', () => {
            component.clientsList = testListClients;
            fixtureParent.detectChanges();
            expect(component.clientsList).toEqual(testListClients);
        });
    });

    describe('EventEmitter of modal requests for child clients list table component', () => {
        /**
        * Get the current component to use it in observables.
        **/
        beforeEach(inject([ ClientsListComponent ], result => {
            modalAction = result;
        }));

        /**
        * Tests that the open new client modal request is correctly received.
        **/
        it('should request to open the new client modal', async(() => {
            modalAction.requestShowNewClientModal.subscribe(result => {
                expect(result).toBe('Open new Client modal');
            });
            modalAction.requestNewClientModal();
        }));

        /**
        * Tests that the open update modal request is correctly received.
        **/
        it('should request to open the new client modal', async(() => {
            modalAction.requestShowUpdateClientModal.subscribe(result => {
                expect(result).toBe('Open update Client modal');
            });
            modalAction.requestUpdateClientModal();
        }));
    });

    describe('EventEmitter of current client requests for child clients list table component', () => {
        /**
        * Get the current component to use it in observables.
        **/
        beforeEach(inject([ ClientsListComponent ], result => {
            modalAction = result;
        }));

        /**
        * Tests that the sendCurrentClient request is correctly received.
        **/
        it('should request to send a client object', async(() => {
            modalAction.currentClient.subscribe(result => {
                expect(result).toEqual(testClient);
            });
            modalAction.sendCurrentClient(testClient);
        }));
    });
});
