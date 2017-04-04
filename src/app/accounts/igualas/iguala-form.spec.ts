import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';
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
import { CustomToastService } from '../../shared/toast/custom-toast.service';

// Datepicker
import { DatepickerModule } from 'ng2-bootstrap/datepicker';
import { SelectModule } from 'ng2-select';

// Components
import { IgualasComponent } from './igualas.component';
import { IgualasListComponent  } from './igualas-list.component';
import { IgualaFormComponent } from './iguala-form.component';

// Models
import { Iguala } from './iguala-model';
import { Client } from './../clients/client-model';
import { ArtWork } from './../../general-user/works/art-works/art-work-model';

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

    // Variable to test if the iguala is correctly updated in emitters.
    let updatedIguala;

    let testArtWork: ArtWork = {
        id: 1, name: 'Test Diseño 1', quantity: 100
    };

    let testArtWork2: ArtWork = {
        id: 2, name: 'Test Diseño 2', quantity: 200
    };

    let testArtWork3: ArtWork = {
        id: 3, name: 'Test Diseño 3', quantity: 300
    };

    let testListArtWorks: ArtWork[] = [
                                testArtWork,
                                testArtWork2,
                                testArtWork3
                                ];

    // Create a Iguala object example.
    let testIguala: Iguala = {
      id: 1,
      name: 'Starbucks 2018',
      client: 2,
      start_date: new Date(2011, 10, 10),
      end_date: new Date(2012, 10, 10),
      art_iguala: testListArtWorks
    };

    testIguala = new Iguala(testIguala);

    let testClient: Client = {
        id: 1, name: 'Starbucks', address: 'Example'
    };

    let testClient2: Client = {
        id: 1, name: 'Starbucks', address: 'Example'
    };

    let testListClients: Client[] = [
                                testClient,
                                testClient2
                                ];

    // Base state before each test runs.
    // Handles asynchronous compilation.
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            // Declare all what the test component has.
            declarations: [ IgualasComponent, IgualasListComponent , IgualaFormComponent ],
            imports: [ ng2Bootstrap.Ng2BootstrapModule, CommonModule, FormsModule, ToasterModule,
            ChartsModule, DropdownModule, ModalModule.forRoot(), DatepickerModule.forRoot(), SelectModule ],
            providers: [ IgualaFormComponent,
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
            component.iguala = testIguala;
            fixtureParent.detectChanges();
            expect(component.iguala).toEqual(testIguala);
        });

        /**
        * Tests that the clients object list received from parent component is not empty.
        **/
        it('should load correctly clients list in clientsList Input', () => {
            component.clientsList = testListClients;
            fixtureParent.detectChanges();
            expect(component.clientsList).toEqual(testListClients);
        });

        /**
        * Tests that the artwork object list received from parent component is not empty.
        **/
        it('should load correctly artwork list in ArtworkList Input', () => {
            component.artWorkList = testListArtWorks;
            fixtureParent.detectChanges();
            expect(component.artWorkList).toEqual(testListArtWorks);
        });
    });

    describe('Correct behaviour of OnChanges hook in the component', () => {
        /**
        * Tests that the current component is correctly built depending of OnChanges hook,
        * in this case, the iguala and oldIguala is undefined.
        **/
        it('should have a defined iguala but with its atributes undefined', () => {
            component.ngOnChanges();

            expect(component.iguala).toBeDefined();
            expect(component.iguala.name).toBeUndefined();
            expect(component.iguala.client).toBeUndefined();
            expect(component.iguala.start_date).toBeUndefined();
            expect(component.iguala.end_date).toBeUndefined();

            expect(component.oldIguala).toBeUndefined();
        });

        /**
        * Tests that the current component is correctly built depending of OnChanges hook,
        * in this case, the iguala and oldIguala is defined.
        **/
        it('should have a defined iguala and its atributes correctly defined', () => {
            component.iguala = testIguala;
            component.ngOnChanges();

            expect(component.iguala).toBeDefined();
            expect(component.iguala.name).toBeDefined();
            expect(component.iguala.client).toBeDefined();
            expect(component.iguala.start_date).toBeDefined();
            expect(component.iguala.end_date).toBeDefined();

            expect(component.oldIguala).toBeDefined();
            expect(component.oldIguala.name).toBeDefined();
            expect(component.oldIguala.client).toBeDefined();
            expect(component.oldIguala.start_date).toBeDefined();
            expect(component.oldIguala.end_date).toBeDefined();
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

     describe('Cancel form method is correctly send depending if its current iguala is not empty', () => {
        /**
        * Get the current component to use it in observables.
        **/
        beforeEach(inject([IgualaFormComponent], result => {
            updatedIguala = result;
        }));

        /**
        * Tests that the send of the iguala updated is working correctly.
        **/
        it('should send the iguala updated', async(() => {
            component.iguala = testIguala;
            component.ngOnChanges();
            component.cancelForm();

            expect(component.iguala).toBeDefined();
            expect(component.iguala.name).toBeUndefined();
            expect(component.iguala.client).toBeUndefined();
            expect(component.iguala.start_date).toBeUndefined();
            expect(component.iguala.end_date).toBeUndefined();
        }));
    });
});
