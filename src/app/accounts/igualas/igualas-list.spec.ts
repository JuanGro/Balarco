import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';

// Modals
import  * as ng2Bootstrap from 'ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/modal';

// Forms
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';

// Services
import { BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { HttpService } from './../../shared/http-service/http.service';
import { CustomToastService } from '../../shared/toast/custom-toast.service';

// Datepicker
import { DatepickerModule } from 'ng2-bootstrap/datepicker';
import { SelectModule } from 'ng2-select';

// Components
import { IgualasComponent } from './igualas.component';
import { IgualasListComponent } from './igualas-list.component';
import { IgualaFormComponent } from './iguala-form.component';

// Models
import { Iguala } from './iguala-model';

describe('IgualasListComponent  tests.', () => {
    // Fixture for debugging and testing a IgualasComponent.
    let fixtureParent: ComponentFixture<IgualasComponent>;
    // Fixture for debugging and testing a igualasFormComponent.
    let fixtureChildForm: ComponentFixture<IgualaFormComponent>;
    // Fixture for debugging and testing a IgualasListComponent .
    let fixtureChildTable: ComponentFixture<IgualasListComponent>;

    // Save IgualasComponent to test it's methods and variables.
    let componentParent: IgualasComponent;
    // Save igualasFormComponent to test it's methods and variables.
    let componentForm: IgualaFormComponent;
    // Save IgualasListComponent  to test it's methods and variables.
    let component: IgualasListComponent;

    // let httpServiceStub;
    // Handles on the component's DOM element.
    let de: DebugElement;
    let el: HTMLElement;

    // Variable to test which action is executing in modal.
    let modalAction;

    // Create a Iguala object example.
    let testIguala: Iguala = {
      id: 1,
      name: 'Starbucks 2018',
      client: 2,
      start_date: new Date(2011, 10, 10),
      end_date: new Date(2012, 10, 10)
    };

    // Create a Iguala object example.
    let testListigualas: Iguala[] = [
                                { id: 1, name: 'Starbucks 2018', client: 2,
                                start_date: new Date(2011, 10, 10), end_date: new Date(2012, 10, 10)},
                                { id: 2, name: 'Oxxo 2018', client: 1,
                                start_date: new Date(2011, 10, 10), end_date: new Date(2012, 10, 10)}
                                ];

    // Base state before each test runs.
    // Handles asynchronous compilation.
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            // Declare all what the test component has.
            declarations: [ IgualasComponent, IgualasListComponent , IgualaFormComponent ],
            imports: [ ng2Bootstrap.Ng2BootstrapModule, CommonModule, ReactiveFormsModule, FormsModule,
            ChartsModule, DropdownModule, ModalModule.forRoot(), DatepickerModule.forRoot(), SelectModule, ToasterModule ],
            providers: [ IgualasListComponent ,
                {
                  provide: HttpService, useFactory: (backend, options) => {
                    return new HttpService(backend, options);
                  },
                  deps: [MockBackend, BaseRequestOptions]
                },
                MockBackend, BaseRequestOptions, CustomToastService
            ]
        });

        // Create an instance of the IgualasComponent.
        fixtureParent = TestBed.createComponent(IgualasComponent);
        // Create an instance of the igualasFormComponent.
        fixtureChildForm = TestBed.createComponent(IgualaFormComponent);
        // Create an instance of the IgualasListComponent.
        fixtureChildTable = TestBed.createComponent(IgualasListComponent);

        // IgualasComponent test instance.
        componentParent = fixtureParent.componentInstance;
        // igualasFormComponent test instance.
        componentForm = fixtureChildForm.componentInstance;
        // IgualasListComponent  test instance.
        component = fixtureChildTable.componentInstance;

        // Query for the title <h1> by CSS element selector.
        de = fixtureParent.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    }));

    describe('Components defined for the child igualas list table component', () => {
        /**
        * Tests that the current component is correctly built.
        **/
        it('should have a defined current component', () => {
            expect(component).toBeDefined();
        });

        /**
        * Tests that the parent component is correctly built.
        **/
        it('should have a defined parent component', () => {
            componentParent.ngOnInit();
            expect(componentParent).toBeDefined();
        });
    });

    describe('Initialization of variable for child igualas list table component', () => {
        /**
        * Tests that the Iguala object received from parent component is not empty.
        **/
        it('should load correctly igualas list in igualasList Input', () => {
            component.igualasList = testListigualas;
            fixtureParent.detectChanges();
            expect(component.igualasList).toEqual(testListigualas);
        });

    });

    describe('EventEmitter of modal requests for child igualas list table component', () => {
        /**
        * Get the current component to use it in observables.
        **/
        beforeEach(inject([ IgualasListComponent ], result => {
            modalAction = result;
        }));

        /**
        * Tests that the open new iguala modal request is correctly received.
        **/
        it('should request to open the new iguala modal', async(() => {
            modalAction.requestShowNewIgualaModal.subscribe(result => {
                expect(result).toBe('Open new Iguala modal');
            });
            modalAction.requestNewIgualaModal();
        }));

        /**
        * Tests that the open update modal request is correctly received.
        **/
        it('should request to open the new iguala modal', async(() => {
            modalAction.requestShowUpdateIgualaModal.subscribe(result => {
                expect(result).toBe('Open update Iguala modal');
            });
            modalAction.requestUpdateIgualaModal();
        }));
    });

    describe('EventEmitter of current iguala requests for child igualas list table component', () => {
        /**
        * Get the current component to use it in observables.
        **/
        beforeEach(inject([ IgualasListComponent ], result => {
            modalAction = result;
        }));

        /**
        * Tests that the sendCurrentIguala request is correctly received.
        **/
        it('should request to send a iguala object', async(() => {
            modalAction.currentIguala.subscribe(result => {
                expect(result).toEqual(testIguala);
            });
            modalAction.sendCurrentIguala(testIguala);
        }));
    });
});
