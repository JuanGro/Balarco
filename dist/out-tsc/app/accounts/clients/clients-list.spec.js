import { TestBed, async, inject } from '@angular/core/testing';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';
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
describe('ClientsListComponent  tests.', function () {
    var fixtureParent;
    var fixtureChildForm;
    var fixtureChildTable;
    var componentParent;
    var componentForm;
    var component;
    var de;
    var el;
    var modalAction;
    var testClient = { id: 2, name: 'Juan', address: 'Example' };
    var testListClients = [
        { id: 1, name: 'Starbucks', address: 'Example' },
        { id: 2, name: 'General Electric', address: 'Example' }
    ];
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ClientsComponent, ClientsListComponent, ClientFormComponent],
            imports: [ng2Bootstrap.Ng2BootstrapModule, CommonModule, ReactiveFormsModule, FormsModule,
                ChartsModule, DropdownModule, ModalModule.forRoot(), ToasterModule],
            providers: [ClientsListComponent,
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
        componentParent = fixtureParent.componentInstance;
        componentForm = fixtureChildForm.componentInstance;
        component = fixtureChildTable.componentInstance;
        de = fixtureParent.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    }));
    describe('Components defined for the child clients list table component', function () {
        it('should have a defined current component', function () {
            expect(component).toBeDefined();
        });
        it('should have a defined parent component', function () {
            componentParent.ngOnInit();
            expect(componentParent).toBeDefined();
        });
    });
    describe('Initialization of variable for child clients list table component', function () {
        it('should load correctly clients list in clientsList Input', function () {
            component.clientsList = testListClients;
            fixtureParent.detectChanges();
            expect(component.clientsList).toEqual(testListClients);
        });
    });
    describe('EventEmitter of modal requests for child clients list table component', function () {
        beforeEach(inject([ClientsListComponent], function (result) {
            modalAction = result;
        }));
        it('should request to open the new client modal', async(function () {
            modalAction.requestShowNewClientModal.subscribe(function (result) {
                expect(result).toBe('Open new Client modal');
            });
            modalAction.requestNewClientModal();
        }));
        it('should request to open the new client modal', async(function () {
            modalAction.requestShowUpdateClientModal.subscribe(function (result) {
                expect(result).toBe('Open update Client modal');
            });
            modalAction.requestUpdateClientModal();
        }));
    });
    describe('EventEmitter of current client requests for child clients list table component', function () {
        beforeEach(inject([ClientsListComponent], function (result) {
            modalAction = result;
        }));
        it('should request to send a client object', async(function () {
            modalAction.currentClient.subscribe(function (result) {
                expect(result).toEqual(testClient);
            });
            modalAction.sendCurrentClient(testClient);
        }));
    });
});
//# sourceMappingURL=../../../../../src/app/accounts/clients/clients-list.spec.js.map