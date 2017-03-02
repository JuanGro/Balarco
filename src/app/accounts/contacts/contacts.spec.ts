import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { CommonModule } from '@angular/common';

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
import { Contact } from './contact';

describe('ContactsComponent (inline template)', () => {

    // Fixture for debugging and testing a ContactsComponent.
    let fixtureParent: ComponentFixture<ContactsComponent>;
    // Fixture for debugging and testing a ContactsFormComponent.
    let fixtureChildForm: ComponentFixture<ContactFormComponent>;
    // Fixture for debugging and testing a ContactsListTableComponent.
    let fixtureChildTable: ComponentFixture<ContactsListTableComponent>;

    // Save ContactsComponent to test it's methods and variables.
    let component: ContactsComponent;
    // Save ContactsFormComponent to test it's methods and variables.
    let componentForm: ContactFormComponent;
    // Save ContactsListTableComponent to test it's methods and variables.
    let componentTable: ContactsListTableComponent;

    // Handles on the component's DOM element.
    let de: DebugElement;
    let el: HTMLElement;

    // Create a Contact object example
    let testContact: Contact = { id: 2, name: 'Juan', last_name: 'Hernández', client: 2,
                                charge: 'Estudent', landline: '2211111', extension: '22',
                                mobile_phone_1: '4422222222', mobile_phone_2: '4112223322',
                                email: 'juan@gmail.com', alternate_email: 'juan@gmail.com',
                                is_active: true };

    // Base state before each test runs.
    // Handles asynchronous compilation.
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            // Declare all what the test component has.
            declarations: [ ContactsComponent, ContactsListTableComponent, ContactFormComponent ],
            imports: [ ng2Bootstrap.Ng2BootstrapModule, CommonModule, ReactiveFormsModule, FormsModule,
            ChartsModule, DropdownModule, ModalModule.forRoot() ],
            providers: [
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
        component = fixtureParent.componentInstance;
        // ContactsFormComponent test instance.
        componentForm = fixtureChildForm.componentInstance;
        // ContactsListTableComponent test instance.
        componentTable = fixtureChildTable.componentInstance;

        // Query for the title <h1> by CSS element selector.
        de = fixtureParent.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    }));

    /**
    * Tests that the current component is correctly built.
    **/
    it('should have a defined current component', () => {
        component.ngOnInit();
        expect(component).toBeDefined();
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

    /**
    * Tests that the component doesn't obtain an error or empty contacts list.
    **/
    it('should load the contacts list', () => {
        component.loadClientsList('clients/contacts/');
        expect(component.contactsList).not.toBeNull();
    });

    /**
    * Tests that the component doesn't obtain an error or empty clients list.
    **/
    it('should load the clients list', () => {
        component.loadContactsList('clients/clients/');
        expect(component.clientsList).not.toBeNull();
    });

    /**
    * Tests that the initialize modal method is working correctly, setting the contact to null.
    **/
    it('should initialize the modal', () => {
        component.initializeModal();
        expect(component.contact).toBeNull();
    });

    /**
    * Tests that the getContactFromTable method doesn't returns a Contact object empty.
    **/
    it('should return a not empty Contact object', () => {
        component.getContactFromTable(testContact);
        expect(component.contact).not.toBeNull();
    });
});
