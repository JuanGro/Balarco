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
import { WorksComponent } from './works.component';
import { WorksListComponent } from './works-list.component';
import { WorkFormComponent } from './work-form.component';
import { ArtWork } from './art-works/art-work-model';
import { Client } from '../../accounts/clients/client-model';
import { Iguala } from '../../accounts/igualas/iguala-model';
import { Status } from './status/status-model';
import { Work } from './work-model';
import { WorkType } from './work-type/work-type-model';
describe('WorkListComponent tests', function () {
    var fixtureParent;
    var fixtureChildForm;
    var fixtureChildTable;
    var componentParent;
    var componentForm;
    var component;
    var de;
    var el;
    var modalAction;
    var action;
    var testWork1 = new Work({
        id: 1, name: 'Test Work', creation_date: new Date(), expected_delivery_date: new Date(),
        brief: 'Foo', final_link: 'Bar.com',
        contact_complete: {
            id: 1, name: 'TestGuy', last_name: 'TestLast', client: 2,
            charge: 'TestCEO', landline: '111111111111', extension: '12',
            mobile_phone_1: '4271000000', email: 'test@tes.com', client_complete: new Client(),
        },
        work_type_complete: new WorkType({ id: 1, name: 'TestType' }),
        iguala_complete: new Iguala({ id: 1, name: 'Iguala', client: 2, start_date: new Date(), end_date: new Date() }),
        current_status_complete: new Status({ id: 3, name: 'Testing' }),
        art_works: [
            new ArtWork({ id: 1, name: 'New art', quantity: 12 }),
            new ArtWork({ id: 2, name: 'Test art', quantity: 5 }),
        ]
    });
    var testWork2 = new Work({
        id: 2, name: 'Test Work 2', creation_date: new Date(), expected_delivery_date: new Date(),
        brief: 'Bar', final_link: 'Foo.com',
        contact_complete: {
            id: 1, name: 'TestGuy', last_name: 'TestLast', client: 2,
            charge: 'TestCEO', landline: '111111111111', extension: '12',
            mobile_phone_1: '4271000000', email: 'test@tes.com', client_complete: new Client(),
        },
        work_type_complete: new WorkType({ id: 1, name: 'TestType' }),
        iguala_complete: new Iguala({ id: 1, name: 'Iguala', client: 2, start_date: new Date(), end_date: new Date() }),
        current_status_complete: new Status({ id: 3, name: 'Testing' }),
        art_works: [
            new ArtWork({ id: 1, name: 'New art', quantity: 12 }),
            new ArtWork({ id: 2, name: 'Test art', quantity: 5 }),
        ]
    });
    var testWorkList = [testWork1, testWork2];
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [WorksComponent, WorksListComponent, WorkFormComponent],
            imports: [ng2Bootstrap.Ng2BootstrapModule, CommonModule, ReactiveFormsModule, FormsModule,
                ChartsModule, DropdownModule, ModalModule.forRoot(), ToasterModule],
            providers: [WorksListComponent,
                {
                    provide: HttpService, useFactory: function (backend, options) {
                        return new HttpService(backend, options);
                    },
                    deps: [MockBackend, BaseRequestOptions]
                },
                MockBackend, BaseRequestOptions, CustomToastService
            ]
        });
        fixtureParent = TestBed.createComponent(WorksComponent);
        fixtureChildForm = TestBed.createComponent(WorkFormComponent);
        fixtureChildTable = TestBed.createComponent(WorksListComponent);
        componentParent = fixtureParent.componentInstance;
        componentForm = fixtureChildForm.componentInstance;
        component = fixtureChildTable.componentInstance;
        de = fixtureParent.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    }));
    describe('Components defined for the child works list table component', function () {
        it('should have a defined current component', function () {
            expect(component).toBeDefined();
        });
        it('should have a defined parent component', function () {
            componentParent.ngOnInit();
            expect(componentParent).toBeDefined();
        });
    });
    describe('Initialization of variable for child work list table component', function () {
        it('should load correctly work list in worksList Input', function () {
            component.worksList = testWorkList;
            fixtureChildTable.detectChanges();
            expect(component.worksList).toEqual(testWorkList);
        });
    });
    describe('EventEmitter of modal requests for child works list table component', function () {
        beforeEach(inject([WorksListComponent], function (result) {
            modalAction = result;
        }));
        it('should request to open the new work modal', async(function () {
            modalAction.requestShowNewWorkModal.subscribe(function (result) {
                expect(result).toBe('Open new Work modal');
            });
            modalAction.requestNewWorkModal();
        }));
        it('should request to open the update work modal', async(function () {
            modalAction.requestShowUpdateWorkModal.subscribe(function (result) {
                expect(result).toBe('Open update Work modal');
            });
            modalAction.requestUpdateWorkModal();
        }));
    });
    describe('EventEmitter of current work requests for child works list table component', function () {
        beforeEach(inject([WorksListComponent], function (result) {
            action = result;
        }));
        it('should request to send a work object', async(function () {
            action.sendCurrentWork(testWork1);
            action.currentWork.subscribe(function (result) {
                expect(result).toEqual(testWork1);
            });
        }));
    });
});
//# sourceMappingURL=../../../../../src/app/general-user/works/works-list.spec.js.map