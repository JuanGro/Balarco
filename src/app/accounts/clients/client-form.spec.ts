import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { CommonModule } from '@angular/common';

// Modals
import  * as ng2Bootstrap from 'ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/modal';

// Forms
import { FormsModule }  from '@angular/forms';

// Services
import { BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { HttpService } from './../../shared/http-service/http.service';

// Components
import { ClientsComponent } from './clients.component';
import { ClientsListComponent  } from './clients-list.component';
import { ClientFormComponent } from './client-form.component';

// Models
import { Client } from './client-model';

describe('ClientFormComponent tests.', () => {
    // Fixture for debugging and testing a ClientsComponent.
    let fixtureParent: ComponentFixture<ClientsComponent>;
    // Fixture for debugging and testing a ClientsFormComponent.
    let fixtureChildForm: ComponentFixture<ClientFormComponent>;
    // Fixture for debugging and testing a ClientsListComponent .
    let fixtureChildTable: ComponentFixture<ClientsListComponent >;

    // Save ClientsComponent to test it's methods and variables.
    let componentParent: ClientsComponent;
    // Save ClientsFormComponent to test it's methods and variables.
    let componentTable: ClientsListComponent ;
    // Save ClientsListComponent  to test it's methods and variables.
    let component: ClientFormComponent;

    // Variable to test which action is executing in modal.
    let modalAction;

    // Create a Client object example.
    let testClient: Client = { id: 1, name: 'Starbucks', address: 'Example' };

    // Base state before each test runs.
    // Handles asynchronous compilation.
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            // Declare all what the test component has.
            declarations: [ ClientsComponent, ClientsListComponent , ClientFormComponent ],
            imports: [ ng2Bootstrap.Ng2BootstrapModule, CommonModule, FormsModule,
            ChartsModule, DropdownModule, ModalModule.forRoot() ],
            providers: [ ClientFormComponent,
                {
                  provide: HttpService, useFactory: (backend, options) => {
                    return new HttpService(backend, options);
                  },
                  deps: [MockBackend, BaseRequestOptions]
                },
                MockBackend, BaseRequestOptions
            ]
        });

        // Create an instance of the ClientsComponent.
        fixtureParent = TestBed.createComponent(ClientsComponent);
        // Create an instance of the ClientsFormComponent.
        fixtureChildForm = TestBed.createComponent(ClientFormComponent);
        // Create an instance of the ClientsListComponent .
        fixtureChildTable = TestBed.createComponent(ClientsListComponent );

        // ClientsComponent test instance.
        componentParent = fixtureParent.componentInstance;
        // ClientsFormComponent test instance.
        component = fixtureChildForm.componentInstance;
        // ClientsListComponent  test instance.
        componentTable = fixtureChildTable.componentInstance;
    }));

    describe('Components defined for the child clients form component', () => {
        /**
        * Tests that the current component is correctly built.
        **/
        it('should have a defined current component', () => {
            component.ngOnChanges();
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

    describe('Initialization of variable for child clients form component', () => {
        /**
        * Tests that the Client object received from parent component is not empty.
        **/
        it('should load correctly a client in client Input', () => {
            component.client = testClient;
            fixtureParent.detectChanges();
            expect(component.client).toEqual(testClient);
        });
    });

    describe('EventEmitter of modal requests for child clients form component', () => {
        /**
        * Get the current component to use it in observables.
        **/
        beforeEach(inject([ClientFormComponent], result => {
            modalAction = result;
        }));

        /**
        * Tests that the close modal request is correctly received.
        **/
        it('should request to close the current modal', async(() => {
            modalAction.requestCloseModal.subscribe(result => {
                expect(result).toBe('Close modal');
            });
            modalAction.requestCloseThisModal();
        }));

        /**
        * Tests that the show warning modal request is correctly received.
        **/
        it('should request to close the show warning modal', async(() => {
            modalAction.requestWarning.subscribe(result => {
                expect(result).toBe('Show warning modal');
            });
            modalAction.requestWarningModal();
        }));
    });
});
