import { TestBed, async, inject } from '@angular/core/testing';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';
import { CommonModule } from '@angular/common';
import * as ng2Bootstrap from 'ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { HttpService } from './../../shared/http-service/http.service';
import { CustomToastService } from '../../shared/toast/custom-toast.service';
import { ContactsComponent } from './contacts.component';
import { ContactsListComponent } from './contacts-list.component';
import { ContactFormComponent } from './contact-form.component';
describe('ContactFormComponent tests.', function () {
    var fixtureParent;
    var fixtureChildForm;
    var fixtureChildTable;
    var componentParent;
    var componentTable;
    var component;
    var modalAction;
    var testContact = { id: 2, name: 'Juan', last_name: 'Hernández', client: 2,
        charge: 'Estudent', landline: '2211111', extension: '22',
        mobile_phone_1: '4422222222', mobile_phone_2: '4112223322',
        email: 'juan@gmail.com', alternate_email: 'juan@gmail.com',
        is_active: true };
    var testListClients = [
        { id: 1, name: 'Starbucks', address: 'Example' },
        { id: 2, name: 'General Electric', address: 'Example' }
    ];
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ContactsComponent, ContactsListComponent, ContactFormComponent],
            imports: [ng2Bootstrap.Ng2BootstrapModule, CommonModule, FormsModule,
                ChartsModule, DropdownModule, ModalModule.forRoot(), ToasterModule],
            providers: [ContactFormComponent,
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
        component = fixtureChildForm.componentInstance;
        componentTable = fixtureChildTable.componentInstance;
    }));
    describe('Components defined for the child contacts form component', function () {
        it('should have a defined current component', function () {
            component.ngOnChanges();
            expect(component).toBeDefined();
        });
        it('should have a defined parent component', function () {
            componentParent.ngOnInit();
            expect(componentParent).toBeDefined();
        });
    });
    describe('Initialization of variable for child contacts form component', function () {
        it('should load correctly a contact in contact Input', function () {
            component.contact = testContact;
            fixtureParent.detectChanges();
            expect(component.contact).toEqual(testContact);
        });
        it('should load correctly clients list in clientsList Input', function () {
            component.clientsList = testListClients;
            fixtureParent.detectChanges();
            expect(component.clientsList).toEqual(testListClients);
        });
    });
    describe('EventEmitter of modal requests for child contacts form component', function () {
        beforeEach(inject([ContactFormComponent], function (result) {
            modalAction = result;
        }));
        it('should request to close the current modal', async(function () {
            modalAction.requestCloseModal.subscribe(function (result) {
                expect(result).toBe('Close modal');
            });
            modalAction.requestCloseThisModal();
        }));
        it('should request to close the show warning modal', async(function () {
            modalAction.requestWarning.subscribe(function (result) {
                expect(result).toBe('Show warning modal');
            });
            modalAction.requestWarningModal();
        }));
    });
});
//# sourceMappingURL=../../../../../src/app/accounts/contacts/contact-form.spec.js.map