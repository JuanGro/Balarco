import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';

// Modals
import  * as ng2Bootstrap from 'ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/modal';

// Forms
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';

// Services
import { BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { HttpService } from './../../shared/http-service/http.service';

// Components
import { ContactsComponent } from './contacts.component';
import { ContactsListTableComponent } from './contacts-list-table.component';
import { ContactFormComponent } from './contact-form.component';

// Models
import { Contact } from './contact-model';
import { Client } from './../clients/client-model';

describe('ContactsListTableComponent tests.', () => {
    // Fixture for debugging and testing a ContactsComponent.
    let fixtureParent: ComponentFixture<ContactsComponent>;
    // Fixture for debugging and testing a ContactsFormComponent.
    let fixtureChildForm: ComponentFixture<ContactFormComponent>;
    // Fixture for debugging and testing a ContactsListTableComponent.
    let fixtureChildTable: ComponentFixture<ContactsListTableComponent>;

    // Save ContactsComponent to test it's methods and variables.
    let componentParent: ContactsComponent;
    // Save ContactsFormComponent to test it's methods and variables.
    let componentForm: ContactFormComponent;
    // Save ContactsListTableComponent to test it's methods and variables.
    let component: ContactsListTableComponent;

    // let httpServiceStub;
    // Handles on the component's DOM element.
    let de: DebugElement;
    let el: HTMLElement;

    // Variable to test which action is executing in modal.
    let modalAction;

    // Create a Contact object example.
    let testContact: Contact = { id: 2, name: 'Juan', last_name: 'Hernández', client: 2,
                                charge: 'Estudent', landline: '2211111', extension: '22',
                                mobile_phone_1: '4422222222', mobile_phone_2: '4112223322',
                                email: 'juan@gmail.com', alternate_email: 'juan@gmail.com',
                                is_active: true };

    // Create a Contact object example.
    let testListContacts: Contact[] = [
                                { id: 2, name: 'Juan', last_name: 'Hernández', client: 2,
                                charge: 'Estudent', landline: '2211111', extension: '22',
                                mobile_phone_1: '4422222222', mobile_phone_2: '4112223322',
                                email: 'juan@gmail.com', alternate_email: 'juan@gmail.com',
                                is_active: true },
                                { id: 3, name: 'José', last_name: 'Perez', client: 3,
                                charge: 'Estudent', landline: '2211111', extension: '11',
                                mobile_phone_1: '4422222222', mobile_phone_2: '4112223322',
                                email: 'jose@gmail.com', alternate_email: 'jose@gmail.com',
                                is_active: true }
                                ];

    let testListClients: Client[] = [
                                { id: 1, name: 'Starbucks', address: 'Example' },
                                { id: 2, name: 'General Electric', address: 'Example' }
                                ];

    // Base state before each test runs.
    // Handles asynchronous compilation.
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            // Declare all what the test component has.
            declarations: [ ContactsComponent, ContactsListTableComponent, ContactFormComponent ],
            imports: [ ng2Bootstrap.Ng2BootstrapModule, CommonModule, ReactiveFormsModule, FormsModule,
            ChartsModule, DropdownModule, ModalModule.forRoot() ],
            providers: [ ContactsListTableComponent,
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
        // Create an instance of the ContactsListTableComponent.
        fixtureChildTable = TestBed.createComponent(ContactsListTableComponent);

        // ContactsComponent test instance.
        componentParent = fixtureParent.componentInstance;
        // ContactsFormComponent test instance.
        componentForm = fixtureChildForm.componentInstance;
        // ContactsListTableComponent test instance.
        component = fixtureChildTable.componentInstance;

        // Query for the title <h1> by CSS element selector.
        de = fixtureParent.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    }));

    describe('Components defined for the child contacts list table component', () => {
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

    describe('Initialization of variable for child contacts list table component', () => {
        /**
        * Tests that the Contact object received from parent component is not empty.
        **/
        it('should load correctly contacts list in contactsList Input', () => {
            component.contactsList = testListContacts;
            fixtureParent.detectChanges();
            expect(component.contactsList).toEqual(testListContacts);
        });

        /**
        * Tests that the Client object received from parent component is not empty.
        **/
        it('should load correctly clients list in clientsList Input', () => {
            component.clientsList = testListClients;
            fixtureParent.detectChanges();
            expect(component.clientsList).toEqual(testListClients);
        });
    });

    describe('EventEmitter of modal requests for child contacts list table component', () => {
        /**
        * Get the current component to use it in observables.
        **/
        beforeEach(inject([ContactsListTableComponent], result => {
            modalAction = result;
        }));

        /**
        * Tests that the open new contact modal request is correctly received.
        **/
        it('should request to open the new contact modal', async(() => {
            modalAction.requestShowNewContactModal.subscribe(result => {
                expect(result).toBe('Open new Contact modal');
            });
            modalAction.requestNewContactModal();
        }));

        /**
        * Tests that the open update modal request is correctly received.
        **/
        it('should request to open the new contact modal', async(() => {
            modalAction.requestShowUpdateContactModal.subscribe(result => {
                expect(result).toBe('Open update Contact modal');
            });
            modalAction.requestUpdateContactModal();
        }));
    });

    describe('EventEmitter of current contact requests for child contacts list table component', () => {
        /**
        * Get the current component to use it in observables.
        **/
        beforeEach(inject([ContactsListTableComponent], result => {
            modalAction = result;
        }));

        /**
        * Tests that the sendCurrentContact request is correctly received.
        **/
        it('should request to send a contact object', async(() => {
            modalAction.currentContact.subscribe(result => {
                expect(result).toEqual(testContact);
            });
            modalAction.sendCurrentContact(testContact);
        }));
    });
});
