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
import { DatepickerModule } from 'ng2-bootstrap/datepicker';
import { SelectModule } from 'ng2-select';
import { IgualasComponent } from './igualas.component';
import { IgualasListComponent } from './igualas-list.component';
import { IgualaFormComponent } from './iguala-form.component';
describe('IgualasListComponent  tests.', function () {
    var fixtureParent;
    var fixtureChildForm;
    var fixtureChildTable;
    var componentParent;
    var componentForm;
    var component;
    var de;
    var el;
    var modalAction;
    var testArtWork = {
        id: 1, name: 'Test Diseño 1', quantity: 100
    };
    var testArtWork2 = {
        id: 2, name: 'Test Diseño 2', quantity: 200
    };
    var testArtWork3 = {
        id: 3, name: 'Test Diseño 3', quantity: 300
    };
    var testListArtWorks = [
        testArtWork,
        testArtWork2,
        testArtWork3
    ];
    var testIguala = {
        id: 1,
        name: 'Starbucks 2018',
        client: 2,
        start_date: new Date(2011, 10, 10),
        end_date: new Date(2012, 10, 10),
        art_iguala: testListArtWorks
    };
    var testIguala2 = {
        id: 2,
        name: 'Oxxo 2018',
        client: 1,
        start_date: new Date(2011, 10, 10),
        end_date: new Date(2012, 10, 10),
        art_iguala: testListArtWorks
    };
    var testListigualas = [
        testIguala,
        testIguala2
    ];
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [IgualasComponent, IgualasListComponent, IgualaFormComponent],
            imports: [ng2Bootstrap.Ng2BootstrapModule, CommonModule, ReactiveFormsModule, FormsModule,
                ChartsModule, DropdownModule, ModalModule.forRoot(), DatepickerModule.forRoot(), SelectModule, ToasterModule],
            providers: [IgualasListComponent,
                {
                    provide: HttpService, useFactory: function (backend, options) {
                        return new HttpService(backend, options);
                    },
                    deps: [MockBackend, BaseRequestOptions]
                },
                MockBackend, BaseRequestOptions, CustomToastService
            ]
        });
        fixtureParent = TestBed.createComponent(IgualasComponent);
        fixtureChildForm = TestBed.createComponent(IgualaFormComponent);
        fixtureChildTable = TestBed.createComponent(IgualasListComponent);
        componentParent = fixtureParent.componentInstance;
        componentForm = fixtureChildForm.componentInstance;
        component = fixtureChildTable.componentInstance;
        de = fixtureParent.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    }));
    describe('Components defined for the child igualas list table component', function () {
        it('should have a defined current component', function () {
            expect(component).toBeDefined();
        });
        it('should have a defined parent component', function () {
            componentParent.ngOnInit();
            expect(componentParent).toBeDefined();
        });
    });
    describe('Initialization of variable for child igualas list table component', function () {
        it('should load correctly igualas list in igualasList Input', function () {
            component.igualasList = testListigualas;
            fixtureParent.detectChanges();
            expect(component.igualasList).toEqual(testListigualas);
        });
    });
    describe('EventEmitter of modal requests for child igualas list table component', function () {
        beforeEach(inject([IgualasListComponent], function (result) {
            modalAction = result;
        }));
        it('should request to open the new iguala modal', async(function () {
            modalAction.requestShowNewIgualaModal.subscribe(function (result) {
                expect(result).toBe('Open new Iguala modal');
            });
            modalAction.requestNewIgualaModal();
        }));
        it('should request to open the new iguala modal', async(function () {
            modalAction.requestShowUpdateIgualaModal.subscribe(function (result) {
                expect(result).toBe('Open update Iguala modal');
            });
            modalAction.requestUpdateIgualaModal();
        }));
    });
    describe('EventEmitter of current iguala requests for child igualas list table component', function () {
        beforeEach(inject([IgualasListComponent], function (result) {
            modalAction = result;
        }));
        it('should request to send a iguala object', async(function () {
            modalAction.currentIguala.subscribe(function (result) {
                expect(result).toEqual(testIguala);
            });
            modalAction.sendCurrentIguala(testIguala);
        }));
    });
});
//# sourceMappingURL=../../../../../src/app/accounts/igualas/igualas-list.spec.js.map