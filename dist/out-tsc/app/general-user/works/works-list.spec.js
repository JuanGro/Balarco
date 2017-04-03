import { TestBed, async } from '@angular/core/testing';
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
describe('WorksComponent tests', function () {
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
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [WorksComponent, WorksListComponent, WorkFormComponent],
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
});
//# sourceMappingURL=../../../../../src/app/general-user/works/works-list.spec.js.map