import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';
import { CommonModule } from '@angular/common';
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
describe('ContactsComponent tests.', function () {
    var fixtureParent;
    var fixtureChildForm;
    var fixtureChildTable;
    var component;
    var componentForm;
    var componentTable;
    var de;
    var el;
    var testContact = { id: 2, name: 'Juan', last_name: 'Hernández', client: 2,
        charge: 'Estudent', landline: '2211111', extension: '22',
        mobile_phone_1: '4422222222', mobile_phone_2: '4112223322',
        email: 'juan@gmail.com', alternate_email: 'juan@gmail.com',
        is_active: true };
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ContactsComponent, ContactsListComponent, ContactFormComponent],
            imports: [ng2Bootstrap.Ng2BootstrapModule, CommonModule, ReactiveFormsModule, FormsModule,
                ChartsModule, DropdownModule, ModalModule.forRoot(), ToasterModule],
            providers: [
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
        component = fixtureParent.componentInstance;
        componentForm = fixtureChildForm.componentInstance;
        componentTable = fixtureChildTable.componentInstance;
        de = fixtureParent.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    }));
    describe('Components defined for the parent contacts component', function () {
        it('should have a defined current component', function () {
            component.ngOnInit();
            expect(component).toBeDefined();
        });
        it('should have a defined child form component', function () {
            componentForm.ngOnChanges();
            expect(componentForm).toBeDefined();
        });
        it('should have a defined child table component', function () {
            expect(componentTable).toBeDefined();
        });
    });
    describe('Initialization of variable for parent contacts component', function () {
        it('should show the new contact modal with correct attributes', function () {
            fixtureParent.detectChanges();
            expect(component.title).toContain('Lista de contactos');
        });
        it('should show the new contact modal with correct attributes', function () {
            fixtureParent.detectChanges();
            expect(component.titleNewModal).toContain('Nuevo Contacto');
        });
        it('should show the update contact modal with correct attributes', function () {
            fixtureParent.detectChanges();
            expect(component.titleUpdateModal).toContain('Modificar Contacto');
        });
        it('should show the danger modal with correct attributes', function () {
            fixtureParent.detectChanges();
            expect(component.titleDangerModal).toContain('Eliminar contacto');
            expect(component.descriptionDangerModal).toContain('¿Está usted seguro de eliminar este contacto?');
        });
    });
    describe('Load of the variables to the template for parent contacts component', function () {
        it('no title in the DOM until manually call `detectChanges`', function () {
            expect(el.textContent).toEqual('');
        });
        it('should display original page title', function () {
            fixtureParent.detectChanges();
            expect(el.textContent).toContain(component.title);
            expect(el.textContent).not.toBe(null);
        });
    });
    describe('Use of methods for parent contacts component', function () {
        it('should initialize the modal', function () {
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
        it('should return a not empty Contact object', function () {
            component.getContactFromTable(testContact);
            expect(component.contact).toEqual(testContact);
        });
    });
});
//# sourceMappingURL=../../../../../src/app/accounts/contacts/contacts.spec.js.map