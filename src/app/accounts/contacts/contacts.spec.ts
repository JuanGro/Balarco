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

// Services
import { BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { HttpService } from './../../shared/http-service/http.service';
import { CustomToastService } from '../../shared/toast/custom-toast.service';

// Components
import { ContactsComponent } from './contacts.component';
import { ContactsListComponent  } from './contacts-list.component';
import { ContactFormComponent } from './contact-form.component';

// Models
import { Contact } from './contact-model';
import { Client } from './../clients/client-model';

describe('ContactsComponent tests.', () => {
    // Fixture for debugging and testing a ContactsComponent.
    let fixtureParent: ComponentFixture<ContactsComponent>;
    // Fixture for debugging and testing a ContactsFormComponent.
    let fixtureChildForm: ComponentFixture<ContactFormComponent>;
    // Fixture for debugging and testing a ContactsListComponent .
    let fixtureChildTable: ComponentFixture<ContactsListComponent >;

    // Save ContactsComponent to test it's methods and variables.
    let component: ContactsComponent;
    // Save ContactsFormComponent to test it's methods and variables.
    let componentForm: ContactFormComponent;
    // Save ContactsListComponent  to test it's methods and variables.
    let componentTable: ContactsListComponent ;

    // Handles on the component's DOM element.
    let de: DebugElement;
    let el: HTMLElement;

    // Create a Client object example
    let testClient: Client = { id: 1, name: 'Starbucks', address: 'Example' };
    // Create a Client object example
    let testClient2: Client = { id: 2, name: 'General Electric', address: 'Example' };

    // Initialize Client objects
    testClient = new Client(testClient);
    testClient2 = new Client(testClient2);

    // Create a Contact object example.
    let testContact: Contact = { id: 2, name: 'Juan', last_name: 'Hernández', client: 2,
                                charge: 'Student', landline: '2211111', extension: '22',
                                mobile_phone_1: '4422222222', mobile_phone_2: '4112223322',
                                email: 'juan@gmail.com', alternate_email: 'juan@gmail.com',
                                client_complete: testClient };

    // Create a Contact object example.
    let testContact2: Contact = { id: 3, name: 'José', last_name: 'Perez', client: 3,
                                charge: 'Student', landline: '2211111', extension: '11',
                                mobile_phone_1: '4422222222', mobile_phone_2: '4112223322',
                                email: 'jose@gmail.com', alternate_email: 'jose@gmail.com',
                                client_complete: testClient2
                            };

    // Initialize Contact objects
    testContact = new Contact(testContact);
    testContact2 = new Contact(testContact2);

    // Create a Contact object example.
    let testListContacts: Contact[] = [
                                testContact,
                                testContact2
                                ];

    // Create a Contact object example.
    let testListContacts2: Contact[] = [
                                testContact,
                                testContact2,
                                testContact
                                ];

    // Base state before each test runs.
    // Handles asynchronous compilation.
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            // Declare all what the test component has.
            declarations: [ ContactsComponent, ContactsListComponent , ContactFormComponent ],
            imports: [ ng2Bootstrap.Ng2BootstrapModule, CommonModule, ReactiveFormsModule, FormsModule,
            ChartsModule, DropdownModule, ModalModule.forRoot(), ToasterModule ],
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

        // Create an instance of the ContactsComponent.
        fixtureParent = TestBed.createComponent(ContactsComponent);
        // Create an instance of the ContactsFormComponent.
        fixtureChildForm = TestBed.createComponent(ContactFormComponent);
        // Create an instance of the ContactsListComponent .
        fixtureChildTable = TestBed.createComponent(ContactsListComponent );

        // ContactsComponent test instance.
        component = fixtureParent.componentInstance;
        // ContactsFormComponent test instance.
        componentForm = fixtureChildForm.componentInstance;
        // ContactsListComponent  test instance.
        componentTable = fixtureChildTable.componentInstance;

        // Query for the title <h1> by CSS element selector.
        de = fixtureParent.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    }));

    describe('Components defined for the parent contacts component', () => {
        /**
        * Tests that the current component is correctly built.
        **/
        it('should have a defined current component', () => {
            component.ngOnInit();
            expect(component.title).toBeDefined();
            expect(component.titleDangerModal).toBeDefined();
            expect(component.titleNewModal).toBeDefined();
            expect(component.titleUpdateModal).toBeDefined();
            expect(component.descriptionDangerModal).toBeDefined();
        });

        /**
        * Tests that the child form component is correctly built.
        **/
        it('should have a defined child form component', () => {
            componentForm.ngOnChanges();
            expect(componentForm).toBeDefined();
        });

        /**
        * Tests that the child table component is correctly built.
        **/
        it('should have a defined child table component', () => {
            expect(componentTable).toBeDefined();
        });
    });

    describe('Initialization of variable for parent contacts component', () => {
        /**
        * Tests that the page title is correct.
        **/
        it('should show the new contact modal with correct attributes', () => {
            fixtureParent.detectChanges();
            expect(component.title).toContain('Lista de contactos');
        });

        /**
        * Tests that the new contact modal has correct attributes.
        **/
        it('should show the new contact modal with correct attributes', () => {
            fixtureParent.detectChanges();
            expect(component.titleNewModal).toContain('Nuevo Contacto');
        });

        /**
        * Tests that the update contact modal has correct attributes.
        **/
        it('should show the update contact modal with correct attributes', () => {
            fixtureParent.detectChanges();
            expect(component.titleUpdateModal).toContain('Modificar Contacto');
        });

        /**
        * Tests that the danger modal has correct attributes.
        **/
        it('should show the danger modal with correct attributes', () => {
            fixtureParent.detectChanges();
            expect(component.titleDangerModal).toContain('Eliminar contacto');
            expect(component.descriptionDangerModal).toContain('¿Está usted seguro de eliminar este contacto?');
        });
    });

    describe('Load of the variables to the template for parent contacts component', () => {
        /**
        * Tests that the title is empty before the use of the title variable.
        **/
        it('no title in the DOM until manually call `detectChanges`', () => {
            expect(el.textContent).toEqual('');
        });

        /**
        * Tests that the component have the correct title when everything is loaded.
        **/
        it('should display original page title', () => {
            fixtureParent.detectChanges();
            expect(el.textContent).toContain(component.title);
            expect(el.textContent).not.toBe(null);
        });
    });

    describe('Use of methods for parent contacts component', () => {
        /**
        * Tests that the initialize modal method is working correctly, setting the contact to null.
        **/
        it('should initialize the modal', () => {
            component.initializeModal();
            expect(component.contact.id).toBeUndefined();
            expect(component.contact.name).toBeUndefined();
            expect(component.contact.last_name).toBeUndefined();
            expect(component.contact.client).toBeUndefined();
            expect(component.contact.charge).toBeUndefined();
            expect(component.contact.landline).toBeUndefined();
            expect(component.contact.extension).toBeUndefined();
            expect(component.contact.mobile_phone_1).toBeUndefined();
            expect(component.contact.mobile_phone_2).toBeUndefined();
            expect(component.contact.email).toBeUndefined();
            expect(component.contact.alternate_email).toBeUndefined();
            expect(component.contact.client_complete).toBeUndefined();
        });

        /**
        * Tests that the getContactFromTable method returns the correct Contact object.
        **/
        it('should return a not empty Contact object', () => {
            component.getContactFromTable(testContact);
            expect(component.contact).toEqual(testContact);
        });

        /**
        * Tests that the getContactsListFromTable method returns the correct Contact list.
        **/
        it('should return a not empty Contact object', () => {
            component.getContactsListFromTable(testListContacts);
            expect(component.contactsList).toEqual(testListContacts);
        });
    });

    describe('Use of methods for TWDB', () => {
        /**
        * Tests that the onContactCreated method returns the new Contact object and
        * is added to the complete contact list.
        **/
        it('should add the new contact to the complete contact list', () => {
            component.completeContactsList = testListContacts;
            fixtureParent.detectChanges();
            component.onContactCreated(testContact);
            expect(component.completeContactsList).toEqual(testListContacts2);
        });
    });
});
