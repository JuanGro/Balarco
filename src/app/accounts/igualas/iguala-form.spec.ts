import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { CommonModule } from '@angular/common';

// Modals
import  * as ng2Bootstrap from 'ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/modal';

// Forms
import { FormsModule }  from '@angular/forms';

// Services
import { BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { HttpService } from './../../shared/http-service/http.service';

// Datepicker
import { DatepickerModule } from 'ng2-bootstrap/datepicker';
import { SelectModule } from 'ng2-select';

// Components
import { IgualasComponent } from './igualas.component';
import { IgualasListComponent  } from './igualas-list.component';
import { IgualaFormComponent } from './iguala-form.component';

// Models
import { Iguala } from './iguala-model';

describe('IgualaFormComponent tests.', () => {
    // Fixture for debugging and testing a IgualasComponent.
    let fixtureParent: ComponentFixture<IgualasComponent>;
    // Fixture for debugging and testing a IgualasFormComponent.
    let fixtureChildForm: ComponentFixture<IgualaFormComponent>;
    // Fixture for debugging and testing a IgualasListComponent .
    let fixtureChildTable: ComponentFixture<IgualasListComponent>;

    // Save IgualasComponent to test it's methods and variables.
    let componentParent: IgualasComponent;
    // Save IgualasFormComponent to test it's methods and variables.
    let componentTable: IgualasListComponent ;
    // Save IgualasListComponent  to test it's methods and variables.
    let component: IgualaFormComponent;

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

    // Base state before each test runs.
    // Handles asynchronous compilation.
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            // Declare all what the test component has.
            declarations: [ IgualasComponent, IgualasListComponent , IgualaFormComponent ],
            imports: [ ng2Bootstrap.Ng2BootstrapModule, CommonModule, FormsModule,
            ChartsModule, DropdownModule, ModalModule.forRoot(), DatepickerModule.forRoot(), SelectModule ],
            providers: [ IgualaFormComponent,
                {
                  provide: HttpService, useFactory: (backend, options) => {
                    return new HttpService(backend, options);
                  },
                  deps: [MockBackend, BaseRequestOptions]
                },
                MockBackend, BaseRequestOptions
            ]
        });

        // Create an instance of the IgualasComponent.
        fixtureParent = TestBed.createComponent(IgualasComponent);
        // Create an instance of the IgualasFormComponent.
        fixtureChildForm = TestBed.createComponent(IgualaFormComponent);
        // Create an instance of the IgualasListComponent .
        fixtureChildTable = TestBed.createComponent(IgualasListComponent );

        // IgualasComponent test instance.
        componentParent = fixtureParent.componentInstance;
        // IgualasFormComponent test instance.
        component = fixtureChildForm.componentInstance;
        // IgualasListComponent  test instance.
        componentTable = fixtureChildTable.componentInstance;
    }));

    describe('Components defined for the child Igualas form component', () => {
        /**
        * Tests that the current component is correctly built.
        **/
        it('should have a defined current component', () => {
            component.ngOnChanges();
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

    describe('Initialization of variable for child Igualas form component', () => {
        /**
        * Tests that the Iguala object received from parent component is not empty.
        **/
        it('should load correctly a Iguala in Iguala Input', () => {
            component.Iguala = testIguala;
            fixtureParent.detectChanges();
            expect(component.Iguala).toEqual(testIguala);
        });
    });

    describe('EventEmitter of modal requests for child Igualas form component', () => {
        /**
        * Get the current component to use it in observables.
        **/
        beforeEach(inject([IgualaFormComponent], result => {
            modalAction = result;
        }));

        /**
        * Tests that the close modal request is correctly received.
        **/
        it('should request to close the current modal', async(() => {
            modalAction.requestCloseModal.subscribe(result => {
                expect(result).toBe('Close modal');
            });
            modalAction.requestCloseThisModal();
        }));

        /**
        * Tests that the show warning modal request is correctly received.
        **/
        it('should request to close the show warning modal', async(() => {
            modalAction.requestWarning.subscribe(result => {
                expect(result).toBe('Show warning modal');
            });
            modalAction.requestWarningModal();
        }));
    });
});
