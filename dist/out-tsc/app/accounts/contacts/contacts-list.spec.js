import { TestBed, async, inject } from '@angular/core/testing';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';
import { By } from '@angular/platform-browser';
import * as ng2Bootstrap from 'ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { HttpService } from './../../shared/http-service/http.service';
import { CustomToastService } from '../../shared/toast/custom-toast.service';
import { ContactsComponent } from './contacts.component';
import { ContactsListComponent } from './contacts-list.component';
import { ContactFormComponent } from './contact-form.component';
describe('ContactsListComponent  tests.', function () {
    var fixtureParent;
    var fixtureChildForm;
    var fixtureChildTable;
    var componentParent;
    var componentForm;
    var component;
    var de;
    var el;
    var modalAction;
    var testContact = { id: 2, name: 'Juan', last_name: 'Hernández', client: 2,
        charge: 'Estudent', landline: '2211111', extension: '22',
        mobile_phone_1: '4422222222', mobile_phone_2: '4112223322',
        email: 'juan@gmail.com', alternate_email: 'juan@gmail.com',
        is_active: true };
    var testListContacts = [
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
    var testListClients = [
        { id: 1, name: 'Starbucks', address: 'Example' },
        { id: 2, name: 'General Electric', address: 'Example' }
    ];
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ContactsComponent, ContactsListComponent, ContactFormComponent],
            imports: [ng2Bootstrap.Ng2BootstrapModule, CommonModule, ReactiveFormsModule, FormsModule,
                ChartsModule, DropdownModule, ModalModule.forRoot(), ToasterModule],
            providers: [ContactsListComponent,
                {
                    provide: HttpService, useFactory: function (backend, options) {
                        return new HttpService(backend, options);
                    },
                    deps: [MockBackend, BaseRequestOptions]
                },
                MockBackend, BaseRequestOptions, CustomToastService
            ]
        });
        fixtureParent = TestBed.createComponent(ContactsComponent);
        fixtureChildForm = TestBed.createComponent(ContactFormComponent);
        fixtureChildTable = TestBed.createComponent(ContactsListComponent);
        componentParent = fixtureParent.componentInstance;
        componentForm = fixtureChildForm.componentInstance;
        component = fixtureChildTable.componentInstance;
        de = fixtureParent.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    }));
    describe('Components defined for the child contacts list table component', function () {
        it('should have a defined current component', function () {
            expect(component).toBeDefined();
        });
        it('should have a defined parent component', function () {
            componentParent.ngOnInit();
            expect(componentParent).toBeDefined();
        });
    });
    describe('Initialization of variable for child contacts list table component', function () {
        it('should load correctly contacts list in contactsList Input', function () {
            component.contactsList = testListContacts;
            fixtureParent.detectChanges();
            expect(component.contactsList).toEqual(testListContacts);
        });
        it('should load correctly clients list in clientsList Input', function () {
            component.clientsList = testListClients;
            fixtureParent.detectChanges();
            expect(component.clientsList).toEqual(testListClients);
        });
    });
    describe('EventEmitter of modal requests for child contacts list table component', function () {
        beforeEach(inject([ContactsListComponent], function (result) {
            modalAction = result;
        }));
        it('should request to open the new contact modal', async(function () {
            modalAction.requestShowNewContactModal.subscribe(function (result) {
                expect(result).toBe('Open new Contact modal');
            });
            modalAction.requestNewContactModal();
        }));
        it('should request to open the new contact modal', async(function () {
            modalAction.requestShowUpdateContactModal.subscribe(function (result) {
                expect(result).toBe('Open update Contact modal');
            });
            modalAction.requestUpdateContactModal();
        }));
    });
    describe('EventEmitter of current contact requests for child contacts list table component', function () {
        beforeEach(inject([ContactsListComponent], function (result) {
            modalAction = result;
        }));
        it('should request to send a contact object', async(function () {
            modalAction.currentContact.subscribe(function (result) {
                expect(result).toEqual(testContact);
            });
            modalAction.sendCurrentContact(testContact);
        }));
    });
});
//# sourceMappingURL=../../../../../src/app/accounts/contacts/contacts-list.spec.js.map