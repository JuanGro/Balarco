import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import * as ng2Bootstrap from 'ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { HttpService } from './../../shared/http-service/http.service';
import { DatepickerModule } from 'ng2-bootstrap/datepicker';
import { SelectModule } from 'ng2-select';
import { IgualasComponent } from './igualas.component';
import { IgualasListComponent } from './igualas-list.component';
import { IgualaFormComponent } from './iguala-form.component';
import { Iguala } from './iguala-model';
describe('Igualas Component tests.', function () {
    var fixtureParent;
    var fixtureChildForm;
    var fixtureChildTable;
    var component;
    var componentForm;
    var componentTable;
    var de;
    var el;
    var testIguala = new Iguala();
    testIguala.name = 'Starbucks 2018';
    testIguala.id = 1;
    testIguala.start_date = new Date();
    testIguala.end_date = new Date();
    testIguala.client = 1;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [IgualasComponent, IgualasListComponent, IgualaFormComponent],
            imports: [ng2Bootstrap.Ng2BootstrapModule, CommonModule, ReactiveFormsModule, FormsModule,
                ChartsModule, DropdownModule, ModalModule.forRoot(), DatepickerModule.forRoot(), SelectModule],
            providers: [
                {
                    provide: HttpService, useFactory: function (backend, options) {
                        return new HttpService(backend, options);
                    },
                    deps: [MockBackend, BaseRequestOptions]
                },
                MockBackend, BaseRequestOptions
            ]
        });
        fixtureParent = TestBed.createComponent(IgualasComponent);
        fixtureChildForm = TestBed.createComponent(IgualaFormComponent);
        fixtureChildTable = TestBed.createComponent(IgualasListComponent);
        component = fixtureParent.componentInstance;
        componentForm = fixtureChildForm.componentInstance;
        componentTable = fixtureChildTable.componentInstance;
        de = fixtureParent.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    }));
    describe('Components defined for the parent contacts component', function () {
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
    describe('Initialization of variable for parent contacts component', function () {
        it('should show the new iguala modal with correct attributes', function () {
            fixtureParent.detectChanges();
            expect(component.title).toContain('Lista de Igualas');
        });
        it('should show the new iguala modal with correct attributes', function () {
            fixtureParent.detectChanges();
            expect(component.titleNewModal).toContain('Nueva Iguala');
        });
        it('should show the update iguala modal with correct attributes', function () {
            fixtureParent.detectChanges();
            expect(component.titleUpdateModal).toContain('Modificar Iguala');
        });
        it('should show the danger modal with correct attributes', function () {
            fixtureParent.detectChanges();
            expect(component.titleDangerModal).toContain('Eliminar Iguala');
            expect(component.descriptionDangerModal).toContain('¿Está usted seguro de eliminar esta iguala?');
        });
    });
    describe('Load of the variables to the template for parent contacts component', function () {
        it('no title in the DOM until manually call `detectChanges`', function () {
            expect(el.textContent).toEqual('');
        });
        it('should display original page title', function () {
            fixtureParent.detectChanges();
            expect(el.textContent).toContain(component.title);
            expect(el.textContent).not.toBe(null);
        });
    });
    describe('Use of methods for parent contacts component', function () {
        it('should initialize the modal', function () {
            component.initializeModal();
            expect(component.iguala.id).toBeUndefined();
            expect(component.iguala.name).toBeUndefined();
            expect(component.iguala.client).toBeUndefined();
            expect(component.iguala.start_date).toBeUndefined();
            expect(component.iguala.end_date).toBeUndefined();
        });
        it('should return a not empty Contact object', function () {
            component.getIgualaFromTable(testIguala);
            expect(component.iguala).toEqual(testIguala);
        });
    });
});
//# sourceMappingURL=../../../../../src/app/accounts/igualas/igualas.spec.js.map