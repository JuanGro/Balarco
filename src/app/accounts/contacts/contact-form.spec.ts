import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { CommonModule } from '@angular/common';

// Modals
import  * as ng2Bootstrap from 'ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/modal';

// Forms
import { FormBuilder, FormsModule, ReactiveFormsModule }  from '@angular/forms';

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
    let fixtureParent: ComponentFixture<ContactsComponent>;
    let fixtureChildForm: ComponentFixture<ContactFormComponent>;
    let fixtureChildTable: ComponentFixture<ContactsListTableComponent>;

    let componentParent: ContactsComponent;
    let componentTable: ContactsListTableComponent;
    let component: ContactFormComponent;

    // Create a Contact object example
    let testContact: Contact = { id: 2, name: 'Juan', last_name: 'Hernández', client: 2,
                                charge: 'Estudent', landline: '2211111', extension: '22',
                                mobile_phone_1: '4422222222', mobile_phone_2: '4112223322',
                                email: 'juan@gmail.com', alternate_email: 'juan@gmail.com',
                                is_active: true };

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

        fixtureParent = TestBed.createComponent(ContactsComponent);
        fixtureChildForm = TestBed.createComponent(ContactFormComponent);
        fixtureChildTable = TestBed.createComponent(ContactsListTableComponent);

        componentParent = fixtureParent.componentInstance; // ContactsComponent test instance
        component = fixtureChildForm.componentInstance;
        componentTable = fixtureChildTable.componentInstance;
    }));

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

    /**
    * Tests that the Client object received from parent component is not empty.
    **/
    it('should receive a not empty Client object', () => {
        expect(component.clientsList).not.toBeNull();
    });

    /**
    * Tests that the Contact object received from parent component is not empty.
    **/
    it('should receive a not empty Contact object', () => {
        expect(component.contact).not.toBeNull();
    });

    /**
    * Tests that the form is correctly built with FormBuilder.
    **/
    it('should create a `FormBuilder` comprised of `FormControl`s', () => {
        component.ngOnChanges();
        expect(component.fb instanceof FormBuilder).toBe(true);
    });

    /**
    * Tests that the contact is correctly managed by submitContactForm method.
    **/
    it('should send current Contact in the form to submit method', () => {
        component.submitContactForm(testContact, true);
        expect(component.success).toBeTruthy();
    });

    /* it('should reset the form', () => {
        component.contactsModalForm.value(testContact);
        console.log(component.contactsModalForm);
        component.resetForm();
        console.log(component.contactsModalForm);
        expect(component.contactsModalForm).not.toBeNull();
    }); */
});
