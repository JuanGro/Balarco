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
import { ClientsComponent } from './clients.component';
import { ClientsListComponent } from './clients-list.component';
import { ClientFormComponent } from './client-form.component';
describe('ClientsComponent tests.', function () {
    var fixtureParent;
    var fixtureChildForm;
    var fixtureChildTable;
    var component;
    var componentForm;
    var componentTable;
    var de;
    var el;
    var testClient = { id: 1, name: 'Starbucks', address: 'Example' };
    var testListClients = [
        { id: 1, name: 'Starbucks', address: 'Example' },
        { id: 2, name: 'General Electric', address: 'Example' }
    ];
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ClientsComponent, ClientsListComponent, ClientFormComponent],
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
        fixtureParent = TestBed.createComponent(ClientsComponent);
        fixtureChildForm = TestBed.createComponent(ClientFormComponent);
        fixtureChildTable = TestBed.createComponent(ClientsListComponent);
        component = fixtureParent.componentInstance;
        componentForm = fixtureChildForm.componentInstance;
        componentTable = fixtureChildTable.componentInstance;
        de = fixtureParent.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    }));
    describe('Components defined for the parent client component', function () {
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
    describe('Initialization of variable for parent client component', function () {
        it('should show the new client modal with correct attributes', function () {
            fixtureParent.detectChanges();
            expect(component.title).toContain('Lista de compañías');
        });
        it('should show the new client modal with correct attributes', function () {
            fixtureParent.detectChanges();
            expect(component.titleNewModal).toContain('Nueva compañía');
        });
        it('should show the update client modal with correct attributes', function () {
            fixtureParent.detectChanges();
            expect(component.titleUpdateModal).toContain('Modificar compañía');
        });
        it('should show the danger modal with correct attributes', function () {
            fixtureParent.detectChanges();
            expect(component.titleDangerModal).toContain('Eliminar compañía');
            expect(component.descriptionDangerModal).toContain('¿Está usted seguro de eliminar esta compañía?');
        });
    });
    describe('Load of the variables to the template for parent client component', function () {
        it('no title in the DOM until manually call `detectChanges`', function () {
            expect(el.textContent).toEqual('');
        });
        it('should display original page title', function () {
            fixtureParent.detectChanges();
            expect(el.textContent).toContain(component.title);
            expect(el.textContent).not.toBe(null);
        });
    });
    describe('Load of example data to simulate that Input variables are correctly assigned for parent client component', function () {
        it('should load correctly clients list in clientsList Input', function () {
            component.clientsList = testListClients;
            fixtureParent.detectChanges();
            expect(component.clientsList).toEqual(testListClients);
        });
    });
    describe('Use of methods for parent client component', function () {
        it('should initialize the modal', function () {
            component.initializeModal();
            expect(component.client.id).toBeUndefined();
            expect(component.client.name).toBeUndefined();
            expect(component.client.address).toBeUndefined();
        });
        it('should return a not empty client object', function () {
            component.getClientFromTable(testClient);
            expect(component.client).toEqual(testClient);
        });
    });
});
//# sourceMappingURL=../../../../../src/app/accounts/clients/clients.spec.js.map