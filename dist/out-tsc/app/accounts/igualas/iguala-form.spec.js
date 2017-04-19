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
import { IgualasComponent } from './igualas.component';
import { IgualasListComponent } from './igualas-list.component';
import { IgualaFormComponent } from './iguala-form.component';
describe('IgualaFormComponent tests.', function () {
    var fixtureParent;
    var fixtureChildForm;
    var fixtureChildTable;
    var componentParent;
    var componentTable;
    var component;
    var modalAction;
    var testIguala = {
        id: 1,
        name: 'Starbucks 2018',
        client: 2,
        start_date: new Date(2011, 10, 10),
        end_date: new Date(2012, 10, 10)
    };
    var testListClients = [
        { id: 1, name: 'Starbucks', address: 'Example' },
        { id: 2, name: 'General Electric', address: 'Example' }
    ];
    var testListArtWorls = [
        { id: 1, name: 'Test Diseño 1', quantity: 100 },
        { id: 2, name: 'Test Diseño 2', quantity: 200 },
        { id: 3, name: 'Test Diseño 3', quantity: 300 },
    ];
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [IgualasComponent, IgualasListComponent, IgualaFormComponent],
            imports: [ng2Bootstrap.Ng2BootstrapModule, CommonModule, FormsModule, ToasterModule,
                ChartsModule, DropdownModule, ModalModule.forRoot(), DatepickerModule.forRoot(), SelectModule],
            providers: [IgualaFormComponent,
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
        component = fixtureChildForm.componentInstance;
        componentTable = fixtureChildTable.componentInstance;
    }));
    describe('Components defined for the child Igualas form component', function () {
        it('should have a defined current component', function () {
            component.ngOnChanges();
            expect(component).toBeDefined();
        });
        it('should have a defined parent component', function () {
            componentParent.ngOnInit();
            expect(componentParent).toBeDefined();
        });
    });
    describe('Initialization of variable for child Igualas form component', function () {
        it('should load correctly a Iguala in Iguala Input', function () {
            component.Iguala = testIguala;
            fixtureParent.detectChanges();
            expect(component.Iguala).toEqual(testIguala);
        });
        it('should load correctly clients list in clientsList Input', function () {
            component.clientsList = testListClients;
            fixtureParent.detectChanges();
            expect(component.clientsList).toEqual(testListClients);
        });
        it('should load correctly artwork list in ArtworkList Input', function () {
            component.artWorkList = testListArtWorls;
            fixtureParent.detectChanges();
            expect(component.artWorkList).toEqual(testListArtWorls);
        });
    });
    describe('EventEmitter of modal requests for child Igualas form component', function () {
        beforeEach(inject([IgualaFormComponent], function (result) {
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
//# sourceMappingURL=../../../../../src/app/accounts/igualas/iguala-form.spec.js.map