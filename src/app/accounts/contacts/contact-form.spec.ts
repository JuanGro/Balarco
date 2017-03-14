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
import { ContactsComponent } from './contacts.component';
import { ContactsListComponent  } from './contacts-list.component';
import { ContactFormComponent } from './contact-form.component';

// Models
import { Contact } from './contact-model';
import { Client } from './../clients/client-model';

describe('ContactFormComponent tests.', () => {
    // Fixture for debugging and testing a ContactsComponent.
    let fixtureParent: ComponentFixture<ContactsComponent>;
    // Fixture for debugging and testing a ContactsFormComponent.
    let fixtureChildForm: ComponentFixture<ContactFormComponent>;
    // Fixture for debugging and testing a ContactsListComponent .
    let fixtureChildTable: ComponentFixture<ContactsListComponent >;

    // Save ContactsComponent to test it's methods and variables.
    let componentParent: ContactsComponent;
    // Save ContactsFormComponent to test it's methods and variables.
    let componentTable: ContactsListComponent ;
    // Save ContactsListComponent  to test it's methods and variables.
    let component: ContactFormComponent;

    // Variable to test which action is executing in modal.
    let modalAction;

    // Create a Contact object example.
    let testContact: Contact = { id: 2, name: 'Juan', last_name: 'Hernández', client: 2,
                                charge: 'Estudent', landline: '2211111', extension: '22',
                                mobile_phone_1: '4422222222', mobile_phone_2: '4112223322',
                                email: 'juan@gmail.com', alternate_email: 'juan@gmail.com',
                                is_active: true };

    let testListClients: Client[] = [
                                { id: 1, name: 'Starbucks', address: 'Example' },
                                { id: 2, name: 'General Electric', address: 'Example' }
                                ];

    // Base state before each test runs.
    // Handles asynchronous compilation.
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            // Declare all what the test component has.
            declarations: [ ContactsComponent, ContactsListComponent , ContactFormComponent ],
            imports: [ ng2Bootstrap.Ng2BootstrapModule, CommonModule, FormsModule,
            ChartsModule, DropdownModule, ModalModule.forRoot() ],
            providers: [ ContactFormComponent,
                {
                  provide: HttpService, useFactory: (backend, options) => {
                    return new HttpService(backend, options);
                  },
                  deps: [MockBackend, BaseRequestOptions]
                },
                MockBackend, BaseRequestOptions
            ]
        });

        // Create an instance of the ContactsComponent.
        fixtureParent = TestBed.createComponent(ContactsComponent);
        // Create an instance of the ContactsFormComponent.
        fixtureChildForm = TestBed.createComponent(ContactFormComponent);
        // Create an instance of the ContactsListComponent .
        fixtureChildTable = TestBed.createComponent(ContactsListComponent );

        // ContactsComponent test instance.
        componentParent = fixtureParent.componentInstance;
        // ContactsFormComponent test instance.
        component = fixtureChildForm.componentInstance;
        // ContactsListComponent  test instance.
        componentTable = fixtureChildTable.componentInstance;
    }));

    describe('Components defined for the child contacts form component', () => {
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

    describe('Initialization of variable for child contacts form component', () => {
        /**
        * Tests that the Contact object received from parent component is not empty.
        **/
        it('should load correctly a contact in contact Input', () => {
            component.contact = testContact;
            fixtureParent.detectChanges();
            expect(component.contact).toEqual(testContact);
        });

        /**
        * Tests that the clients object list received from parent component is not empty.
        **/
        it('should load correctly clients list in clientsList Input', () => {
            component.clientsList = testListClients;
            fixtureParent.detectChanges();
            expect(component.clientsList).toEqual(testListClients);
        });
    });

    describe('EventEmitter of modal requests for child contacts form component', () => {
        /**
        * Get the current component to use it in observables.
        **/
        beforeEach(inject([ContactFormComponent], result => {
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
