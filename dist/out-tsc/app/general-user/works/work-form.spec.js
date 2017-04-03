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
import { DatepickerModule } from 'ng2-bootstrap/datepicker';
import { SelectModule } from 'ng2-select';
import { WorksComponent } from './works.component';
import { WorksListComponent } from './works-list.component';
import { WorkFormComponent } from './work-form.component';
import { ArtWork } from './art-works/art-work-model';
import { Contact } from '../../accounts/contacts/contact-model';
import { Client } from '../../accounts/clients/client-model';
import { Iguala } from '../../accounts/igualas/iguala-model';
import { Status } from './status/status-model';
import { Work } from './work-model';
import { WorkType } from './work-type/work-type-model';
describe('WorkFormComponent tests', function () {
    var fixtureParent;
    var fixtureChildForm;
    var fixtureChildTable;
    var componentParent;
    var component;
    var componentTable;
    var de;
    var el;
    var modalAction;
    var action;
    var updatedWork;
    var testWork1 = new Work({
        id: 1, name: 'Test Work', creation_date: new Date(), expected_delivery_date: new Date(),
        brief: 'Foo', final_link: 'Bar.com', contact: 1, work_type: 1, iguala: 1, current_status: 1,
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
    var testContactList = [
        new Contact({
            id: 1, name: 'TestGuy', last_name: 'TestLast', client: 2,
            charge: 'TestCEO', landline: '111111111111', extension: '12',
            mobile_phone_1: '4271000000', email: 'test@tes.com', client_complete: new Client(),
        }),
        new Contact({
            id: 2, name: 'TestGuy2', last_name: 'TestLast2', client: 2,
            charge: 'TestCEO', landline: '111111111111', extension: '12',
            mobile_phone_1: '4271000000', email: 'test@tes.com', client_complete: new Client(),
        }),
    ];
    var testClientsList = [
        new Client({ id: 1, name: 'Starbucks', address: 'Example' }),
        new Client({ id: 2, name: 'Oxxo', address: 'Example' }),
        new Client({ id: 3, name: 'Mc', address: 'Example' }),
    ];
    var testIgualasList = [
        new Iguala({ id: 1, name: 'Starbucks 2018', client: 2,
            start_date: new Date(2011, 10, 10), end_date: new Date(2012, 10, 10) }),
        new Iguala({ id: 2, name: 'Oxxo 2018', client: 1,
            start_date: new Date(2011, 10, 10), end_date: new Date(2012, 10, 10) })
    ];
    var testWorkTypesList = [
        new WorkType({ id: 1, name: 'Art', work_type_id: 1 }),
        new WorkType({ id: 2, name: 'Art2', work_type_id: 2 }),
    ];
    var testGraduationArtTypes = [
        new ArtWork({ id: 1, name: 'Nuevo Arte', quantity: 1 }),
        new ArtWork({ id: 2, name: 'Nuevo Arte2', quantity: 10 }),
    ];
    var testStatusList = [
        new Status({ id: 1, name: 'Status 1', status_id: 1 }),
        new Status({ id: 2, name: 'Status 2', status_id: 2 }),
    ];
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [WorksComponent, WorksListComponent, WorkFormComponent],
            imports: [ng2Bootstrap.Ng2BootstrapModule, CommonModule, FormsModule,
                ChartsModule, DropdownModule, ModalModule.forRoot(), ToasterModule, DatepickerModule.forRoot(), SelectModule],
            providers: [WorkFormComponent,
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
        component = fixtureChildForm.componentInstance;
        componentTable = fixtureChildTable.componentInstance;
    }));
    describe('Components defined for the child works form component', function () {
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
        it('should load correctly a work in contact Input', function () {
            component.work = testWork1;
            fixtureParent.detectChanges();
            expect(component.work).toEqual(testWork1);
        });
        it('should load correctly the contact list Input', function () {
            component.contactsList = testContactList;
            fixtureParent.detectChanges();
            expect(component.contactsList).toEqual(testContactList);
        });
        it('should load correctly the client list Input', function () {
            component.clientsList = testClientsList;
            fixtureParent.detectChanges();
            expect(component.clientsList).toEqual(testClientsList);
        });
        it('should load correctly the igualas list Input', function () {
            component.igualasList = testIgualasList;
            fixtureParent.detectChanges();
            expect(component.igualasList).toEqual(testIgualasList);
        });
        it('should load correctly the work types list Input', function () {
            component.workTypesList = testWorkTypesList;
            fixtureParent.detectChanges();
            expect(component.workTypesList).toEqual(testWorkTypesList);
        });
        it('should load correctly the status list Input', function () {
            component.statusList = testStatusList;
            fixtureParent.detectChanges();
            expect(component.statusList).toEqual(testStatusList);
        });
    });
    describe('EventEmitter of modal requests for child works form component', function () {
        beforeEach(inject([WorkFormComponent], function (result) {
            modalAction = result;
        }));
        it('should request to close the current modal', async(function () {
            modalAction.requestCloseThisModal();
            modalAction.requestCloseModal.subscribe(function (result) {
                expect(result).toBe('Close modal');
            });
        }));
        it('should request to close the show warning modal', async(function () {
            modalAction.requestWarningModal();
            modalAction.requestWarning.subscribe(function (result) {
                expect(result).toBe('Show warning modal');
            });
        }));
    });
});
//# sourceMappingURL=../../../../../src/app/general-user/works/work-form.spec.js.map