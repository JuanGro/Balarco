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
import { WorksComponent } from './works.component';
import { WorksListComponent } from './works-list.component';
import { WorkFormComponent } from './work-form.component';
import { DatepickerModule } from 'ng2-bootstrap/datepicker';
import { SelectModule } from 'ng2-select';
describe('WorksComponent tests', function () {
    var fixtureParent;
    var fixtureChildForm;
    var fixtureChildTable;
    var component;
    var componentForm;
    var componentTable;
    var de;
    var el;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [WorksComponent, WorksListComponent, WorkFormComponent],
            imports: [ng2Bootstrap.Ng2BootstrapModule, CommonModule, ReactiveFormsModule, FormsModule,
                ChartsModule, DropdownModule, ModalModule.forRoot(), ToasterModule, DatepickerModule.forRoot(), SelectModule],
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
        component = fixtureParent.componentInstance;
        componentForm = fixtureChildForm.componentInstance;
        componentTable = fixtureChildTable.componentInstance;
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
            expect(component.title).toContain('Lista de Trabajos');
        });
        it('should show the new work modal with correct attributes', function () {
            fixtureParent.detectChanges();
            expect(component.titleNewModal).toContain('Nuevo Trabajo');
        });
        it('should show the update work modal with correct attributes', function () {
            fixtureParent.detectChanges();
            expect(component.titleUpdateModal).toContain('Modificar Trabajo');
        });
        it('should show the danger modal with correct attributes', function () {
            fixtureParent.detectChanges();
            expect(component.titleDangerModal).toContain('Eliminar Trabajo');
            expect(component.descriptionDangerModal).toContain('¿Está usted seguro de eliminar este trabajo?');
        });
    });
});
//# sourceMappingURL=../../../../../src/app/general-user/works/works.spec.js.map