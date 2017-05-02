import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import * as ng2Bootstrap from 'ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { HttpService } from './../../shared/http-service/http.service';
import { CustomToastService } from '../../shared/toast/custom-toast.service';
import { WorksComponent } from './works.component';
import { WorksListComponent } from './works-list.component';
import { WorkFormComponent } from './work-form.component';
import { WorkFilterFormComponent } from './work-filter-form.component';
import { DatepickerModule } from 'ng2-bootstrap/datepicker';
import { SelectModule } from 'ng2-select';
import { CalculateDeliveryDatePipe } from './work-dates-format-table.pipe';
import { ArtWork } from './art-works/art-work-model';
import { Client } from '../../accounts/clients/client-model';
import { Iguala } from '../../accounts/igualas/iguala-model';
import { Status } from './status/status-model';
import { Work } from './work-model';
import { WorkType } from './work-type/work-type-model';
import { CurrentUser } from '../../shared/current-user/current-user-model';
describe('WorksComponent tests', function () {
    var fixtureParent;
    var fixtureChildForm;
    var fixtureChildTable;
    var fixtureChildFilterForm;
    var component;
    var componentForm;
    var componentTable;
    var componentFilterForm;
    var de;
    var el;
    var testWork = new Work({
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
    var testWorkUpdated = new Work({
        id: 1, name: 'Test Work Updated', creation_date: new Date(), expected_delivery_date: new Date(),
        brief: 'Foo', final_link: 'Bar.com',
        contact_complete: {
            id: 1, name: 'TestGuy', last_name: 'TestLast', client: 2,
            charge: 'TestCEO', landline: '111111111111', extension: '12',
            mobile_phone_1: '4271000000', email: 'test@tes.com', client_complete: new Client(),
        },
        work_type_complete: new WorkType({ id: 1, name: 'TestTypeUpdated' }),
        iguala_complete: new Iguala({ id: 1, name: 'IgualaUpdated', client: 2, start_date: new Date(), end_date: new Date() }),
        current_status_complete: new Status({ id: 3, name: 'Testing' }),
        art_works: [
            new ArtWork({ id: 1, name: 'New art', quantity: 2 }),
            new ArtWork({ id: 2, name: 'Test art', quantity: 16 }),
        ]
    });
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [WorksComponent, WorksListComponent, WorkFormComponent, WorkFilterFormComponent, CalculateDeliveryDatePipe],
            imports: [ng2Bootstrap.Ng2BootstrapModule, CommonModule, ReactiveFormsModule, FormsModule,
                ChartsModule, DropdownModule, ModalModule.forRoot(), ToasterModule, DatepickerModule.forRoot(),
                SelectModule, NgxPaginationModule],
            providers: [
                {
                    provide: HttpService, useFactory: function (backend, options) {
                        return new HttpService(backend, options);
                    },
                    deps: [MockBackend, BaseRequestOptions]
                },
                { provide: ActivatedRoute, useClass: (function () {
                        function class_1() {
                            this.navigate = jasmine.createSpy('navigate');
                        }
                        return class_1;
                    }()) },
                MockBackend, BaseRequestOptions, CustomToastService
            ]
        });
        fixtureParent = TestBed.createComponent(WorksComponent);
        fixtureChildForm = TestBed.createComponent(WorkFormComponent);
        fixtureChildTable = TestBed.createComponent(WorksListComponent);
        fixtureChildFilterForm = TestBed.createComponent(WorkFilterFormComponent);
        component = fixtureParent.componentInstance;
        component.currentUser = new CurrentUser({ id: 1, username: 'hi' });
        componentForm = fixtureChildForm.componentInstance;
        componentForm.currentUser = component.currentUser;
        componentTable = fixtureChildTable.componentInstance;
        componentTable.currentUser = component.currentUser;
        componentFilterForm = fixtureChildFilterForm.componentInstance;
        de = fixtureParent.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    }));
    describe('Components defined for the parent works component', function () {
        it('should have a defined current component', function () {
            component.ngOnInit();
            expect(component.title).toBeDefined();
            expect(component.titleDangerModal).toBeDefined();
            expect(component.titleNewModal).toBeDefined();
            expect(component.titleUpdateModal).toBeDefined();
            expect(component.descriptionDangerModal).toBeDefined();
        });
        it('should have a defined child form component', function () {
            componentForm.ngOnChanges();
            expect(componentForm).toBeDefined();
        });
        it('should have a defined child table component', function () {
            expect(componentTable).toBeDefined();
        });
    });
    describe('Initialization of variable for parent works component', function () {
        it('should show the work component with correct attributes', function () {
            fixtureParent.detectChanges();
            expect(component.title).toBe('Lista de Trabajos');
        });
        it('should show the new work modal with correct attributes', function () {
            fixtureParent.detectChanges();
            expect(component.titleNewModal).toBe('Nuevo Trabajo');
        });
        it('should show the update work modal with correct attributes', function () {
            fixtureParent.detectChanges();
            expect(component.titleUpdateModal).toBe('Modificar Trabajo');
        });
        it('should show the danger modal with correct attributes', function () {
            fixtureParent.detectChanges();
            expect(component.titleDangerModal).toBe('Eliminar Trabajo');
            expect(component.descriptionDangerModal).toBe('¿Está usted seguro de eliminar este trabajo?');
        });
    });
    describe('Load of the variables to the template for parent works component', function () {
        it('no title in the DOM until manually call `detectChanges`', function () {
            expect(el.textContent).toEqual('');
        });
        it('should display original page title', function () {
            fixtureParent.detectChanges();
            expect(el.textContent).toBe(component.title);
            expect(el.textContent).not.toBe(null);
        });
    });
    describe('Use of methods for parent works component', function () {
        it('should return a not empty Work object', function () {
            component.getWorkFromTable(testWork);
            expect(component.work).toEqual(testWork);
        });
    });
    describe('Use of methods for TWDB', function () {
        it('should add the new work', function () {
            var testList = [testWork, testWork];
            component.worksList = testList;
            component.onWorkCreated(testWork);
            fixtureParent.detectChanges();
            expect(component.worksList.length).toEqual(3);
            expect(component.worksList[2]).toEqual(testWork);
        });
        it('should update work object', function () {
            var testList = [testWork, testWork2];
            var updatedList = [testWorkUpdated, testWork2];
            component.worksList = testList;
            component.onWorkUpdated(testWorkUpdated);
            fixtureParent.detectChanges();
            expect(component.worksList).toEqual(updatedList);
        });
    });
});
//# sourceMappingURL=../../../../../../src/app/general-user/works/works.spec.js.map