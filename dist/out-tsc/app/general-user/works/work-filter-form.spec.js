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
import { CalculateDeliveryDatePipe } from './work-dates-format-table.pipe';
import { DatepickerModule } from 'ng2-bootstrap/datepicker';
import { SelectModule } from 'ng2-select';
import { WorkFilter } from './work-filter-model';
describe('WorksFilterFormComponent tests', function () {
    var fixtureParent;
    var fixtureChildForm;
    var fixtureChildTable;
    var fixtureChildFilterForm;
    var componentWorks;
    var componentForm;
    var componentTable;
    var component;
    var de;
    var el;
    var testWork = new WorkFilter({
        searchByClient: true,
        searchByContact: false,
        searchByIguala: false,
        searchByStatus: false,
        searchByCreationDate: false,
        searchByDeliveryDate: false,
        creation_date: new Date(),
        expected_delivery_date: new Date(),
        client: 1,
        contact: 2,
        iguala: 3,
        current_status: 4
    });
    var testWork2 = new WorkFilter({
        searchByClient: true,
        searchByContact: true,
        searchByIguala: true,
        searchByStatus: true,
        searchByCreationDate: false,
        searchByDeliveryDate: false,
        creation_date: new Date(),
        expected_delivery_date: new Date(),
        client: 1,
        contact: 2,
        iguala: 3,
        current_status: 4
    });
    var testWork3 = new WorkFilter({
        searchByClient: true,
        searchByContact: true,
        searchByIguala: true,
        searchByStatus: true,
        searchByCreationDate: true,
        searchByDeliveryDate: true,
        creation_date: new Date(),
        expected_delivery_date: new Date(),
        client: 1,
        contact: 2,
        iguala: 3,
        current_status: 4
    });
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [WorksComponent, WorksListComponent, WorkFormComponent, WorkFilterFormComponent, CalculateDeliveryDatePipe],
            imports: [ng2Bootstrap.Ng2BootstrapModule, CommonModule, ReactiveFormsModule, FormsModule, NgxPaginationModule,
                ChartsModule, DropdownModule, ModalModule.forRoot(), ToasterModule, DatepickerModule.forRoot(), SelectModule],
            providers: [
                {
                    provide: HttpService, useFactory: function (backend, options) {
                        return new HttpService(backend, options);
                    },
                    deps: [MockBackend, BaseRequestOptions]
                },
                MockBackend, BaseRequestOptions, CustomToastService, ActivatedRoute
            ]
        });
        fixtureParent = TestBed.createComponent(WorksComponent);
        fixtureChildForm = TestBed.createComponent(WorkFormComponent);
        fixtureChildTable = TestBed.createComponent(WorksListComponent);
        fixtureChildFilterForm = TestBed.createComponent(WorkFilterFormComponent);
        componentWorks = fixtureParent.componentInstance;
        componentForm = fixtureChildForm.componentInstance;
        componentTable = fixtureChildTable.componentInstance;
        component = fixtureChildFilterForm.componentInstance;
        de = fixtureParent.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    }));
    describe('Use works filter', function () {
        it('should send the client to search in an url request', function () {
            component.submitWorkFilterForm(testWork);
            expect(component.urlTesting).toBe('works/works/?client=1');
        });
        it('should send the four params to search in an url request', function () {
            component.submitWorkFilterForm(testWork2);
            expect(component.urlTesting).toBe('works/works/?client=1&contact=2&iguala=3&current_status=4');
        });
        it('should send all the params to search in an url request', function () {
            component.submitWorkFilterForm(testWork3);
            var date = new Date();
            var dateString = (date.getUTCFullYear() + '-' + (date.getUTCMonth() + 1) + '-' +
                date.getUTCDate()).toString();
            expect(component.urlTesting).toBe('works/works/?client=1&contact=2&iguala=3&current_status=4&creation_date='
                + dateString + '&expected_delivery_date=' + dateString);
        });
    });
});
//# sourceMappingURL=../../../../../src/app/general-user/works/work-filter-form.spec.js.map