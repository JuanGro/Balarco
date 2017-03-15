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
import { ClientsComponent } from './clients.component';
import { ClientsListComponent } from './clients-list.component';
import { ClientFormComponent } from './client-form.component';
describe('ClientFormComponent tests.', function () {
    var fixtureParent;
    var fixtureChildForm;
    var fixtureChildTable;
    var componentParent;
    var componentTable;
    var component;
    var modalAction;
    var testClient = { id: 1, name: 'Starbucks', address: 'Example' };
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ClientsComponent, ClientsListComponent, ClientFormComponent],
            imports: [ng2Bootstrap.Ng2BootstrapModule, CommonModule, FormsModule,
                ChartsModule, DropdownModule, ModalModule.forRoot(), ToasterModule],
            providers: [ClientFormComponent,
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
        component = fixtureChildForm.componentInstance;
        componentTable = fixtureChildTable.componentInstance;
    }));
    describe('Components defined for the child clients form component', function () {
        it('should have a defined current component', function () {
            component.ngOnChanges();
            expect(component).toBeDefined();
        });
        it('should have a defined parent component', function () {
            componentParent.ngOnInit();
            expect(componentParent).toBeDefined();
        });
    });
    describe('Initialization of variable for child clients form component', function () {
        it('should load correctly a client in client Input', function () {
            component.client = testClient;
            fixtureParent.detectChanges();
            expect(component.client).toEqual(testClient);
        });
    });
    describe('EventEmitter of modal requests for child clients form component', function () {
        beforeEach(inject([ClientFormComponent], function (result) {
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
//# sourceMappingURL=../../../../../src/app/accounts/clients/client-form.spec.js.map