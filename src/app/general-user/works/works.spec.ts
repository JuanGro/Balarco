import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

// Modals
import * as ng2Bootstrap from 'ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/modal';

// Forms
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';

// Pagination
import { NgxPaginationModule } from 'ngx-pagination';

// Services
import { BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { HttpService } from './../../shared/http-service/http.service';
import { CustomToastService } from '../../shared/toast/custom-toast.service';

// Components
import { WorksComponent } from './works.component';
import { WorksListComponent } from './works-list.component';
import { WorkFormComponent } from './work-form.component';
import { WorkFilterFormComponent } from './work-filter-form.component';

// Datepicker
import { DatepickerModule } from 'ng2-bootstrap/datepicker';
import { SelectModule } from 'ng2-select';

// Pipes
import { CalculateDeliveryDatePipe } from './work-dates-format-table.pipe';

// Models
import { ArtWork } from './art-works/art-work-model';
import { Client } from '../../accounts/clients/client-model';
import { Iguala } from '../../accounts/igualas/iguala-model';
import { Status } from './status/status-model';
import { Work } from './work-model';
import { WorkType } from './work-type/work-type-model';
import { CurrentUser } from '../../shared/current-user/current-user-model';


describe('WorksComponent tests', () => {
  // Fixture for debugging and testing a WorksComponent.
    let fixtureParent: ComponentFixture<WorksComponent>;
    // Fixture for debugging and testing a WorkFormComponent.
    let fixtureChildForm: ComponentFixture<WorkFormComponent>;
    // Fixture for debugging and testing a WorksListComponent .
    let fixtureChildTable: ComponentFixture<WorksListComponent>;
    // Fixture for debugging and testing a WorksFilterFormComponent .
    let fixtureChildFilterForm: ComponentFixture<WorkFilterFormComponent>;

    // Save WorksComponent to test it's methods and variables.
    let component: WorksComponent;
    // Save WorkFormComponent to test it's methods and variables.
    let componentForm: WorkFormComponent;
    // Save WorksListComponent  to test it's methods and variables.
    let componentTable: WorksListComponent;
    // Save WorkFilterFormComponent  to test it's methods and variables.
    let componentFilterForm: WorkFilterFormComponent;

    // Handles on the component's DOM element.
    let de: DebugElement;
    let el: HTMLElement;

    // Create a test Work
    let testWork = new Work({
      id: 1, name: 'Test Work', creation_date: new Date(), expected_delivery_date: new Date(),
      brief: 'Foo', final_link: 'Bar.com',
      contact_complete: {
        id: 1, name: 'TestGuy', last_name: 'TestLast', client: 2,
        charge: 'TestCEO', landline: '111111111111', extension: '12',
        mobile_phone_1: '4271000000', email: 'test@tes.com', client_complete: new Client(),
      },
      work_type_complete: new WorkType({ id: 1, name: 'TestType' }),
      iguala_complete: new Iguala ({ id: 1, name: 'Iguala', client: 2, start_date: new Date(), end_date: new Date()}),
      current_status_complete: new Status ({ id: 3, name: 'Testing' }),
      art_works: [
        new ArtWork({id: 1, name: 'New art', quantity: 12}),
        new ArtWork({id: 2, name: 'Test art', quantity: 5}),
      ]
    });

    let testWork2 = new Work({
      id: 2, name: 'Test Work 2', creation_date: new Date(), expected_delivery_date: new Date(),
      brief: 'Foo', final_link: 'Bar.com',
      contact_complete: {
        id: 1, name: 'TestGuy', last_name: 'TestLast', client: 2,
        charge: 'TestCEO', landline: '111111111111', extension: '12',
        mobile_phone_1: '4271000000', email: 'test@tes.com', client_complete: new Client(),
      },
      work_type_complete: new WorkType({ id: 1, name: 'TestType' }),
      iguala_complete: new Iguala ({ id: 1, name: 'Iguala', client: 2, start_date: new Date(), end_date: new Date()}),
      current_status_complete: new Status ({ id: 3, name: 'Testing' }),
      art_works: [
        new ArtWork({id: 1, name: 'New art', quantity: 12}),
        new ArtWork({id: 2, name: 'Test art', quantity: 5}),
      ]
    });

    let testWorkUpdated = new Work({
      id: 1, name: 'Test Work Updated', creation_date: new Date(), expected_delivery_date: new Date(),
      brief: 'Foo', final_link: 'Bar.com',
      contact_complete: {
        id: 1, name: 'TestGuy', last_name: 'TestLast', client: 2,
        charge: 'TestCEO', landline: '111111111111', extension: '12',
        mobile_phone_1: '4271000000', email: 'test@tes.com', client_complete: new Client(),
      },
      work_type_complete: new WorkType({ id: 1, name: 'TestTypeUpdated' }),
      iguala_complete: new Iguala ({ id: 1, name: 'IgualaUpdated', client: 2, start_date: new Date(), end_date: new Date()}),
      current_status_complete: new Status ({ id: 3, name: 'Testing' }),
      art_works: [
        new ArtWork({id: 1, name: 'New art', quantity: 2}),
        new ArtWork({id: 2, name: 'Test art', quantity: 16}),
      ]
    });

    // Base state before each test runs.
    // Handles asynchronous compilation.
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            // Declare all what the test component has.
            declarations: [ WorksComponent, WorksListComponent , WorkFormComponent, WorkFilterFormComponent, CalculateDeliveryDatePipe ],
            imports: [ ng2Bootstrap.Ng2BootstrapModule, CommonModule, ReactiveFormsModule, FormsModule,
            ChartsModule, DropdownModule, ModalModule.forRoot(), ToasterModule, DatepickerModule.forRoot(),
            SelectModule, NgxPaginationModule ],
            providers: [
                {
                  provide: HttpService, useFactory: (backend, options) => {
                    return new HttpService(backend, options);
                  },
                  deps: [MockBackend, BaseRequestOptions]
                },
                { provide: ActivatedRoute, useClass: class { navigate = jasmine.createSpy("navigate"); } },
                MockBackend, BaseRequestOptions, CustomToastService
            ]
        });

        // Create an instance of the WorksComponent.
        fixtureParent = TestBed.createComponent(WorksComponent);
        // Create an instance of the WorkFormComponent.
        fixtureChildForm = TestBed.createComponent(WorkFormComponent);
        // Create an instance of the WorksListComponent.
        fixtureChildTable = TestBed.createComponent(WorksListComponent);
        // Create an instance of the WorkFormComponent.
        fixtureChildFilterForm = TestBed.createComponent(WorkFilterFormComponent);

        // WorksComponent test instance.
        component = fixtureParent.componentInstance;
        component.currentUser = new CurrentUser({ id: 1, username: 'hi'});
        console.log(component.currentUser);
        // WorkFormComponent test instance.
        componentForm = fixtureChildForm.componentInstance;
        componentForm.currentUser = component.currentUser;
        // WorksListComponent  test instance.
        componentTable = fixtureChildTable.componentInstance;
        componentTable.currentUser = component.currentUser;
        // WorkFilterFormComponent test instance.
        componentFilterForm = fixtureChildFilterForm.componentInstance;

        // Query for the title <h1> by CSS element selector.
        de = fixtureParent.debugElement.query(By.css('h1'));
        el = de.nativeElement;

      }));

      describe('Components defined for the parent works component', () => {
        /**
        * Tests that the current component is correctly built.
        **/
        it('should have a defined current component', () => {
            component.ngOnInit();
            expect(component.title).toBeDefined();
            expect(component.titleDangerModal).toBeDefined();
            expect(component.titleNewModal).toBeDefined();
            expect(component.titleUpdateModal).toBeDefined();
            expect(component.descriptionDangerModal).toBeDefined();
        });

        /**
        * Tests that the child form component is correctly built.
        **/
        it('should have a defined child form component', () => {
            componentForm.ngOnChanges();
            expect(componentForm).toBeDefined();
        });

        /**
        * Tests that the child table component is correctly built.
        **/
        it('should have a defined child table component', () => {
            expect(componentTable).toBeDefined();
        });
    });

    describe('Initialization of variable for parent works component', () => {
        /**
        * Tests that the page title is correct.
        **/
        it('should show the work component with correct attributes', () => {
            fixtureParent.detectChanges();
            expect(component.title).toBe('Lista de Trabajos');
        });

        /**
        * Tests that the new work modal has correct attributes.
        **/
        it('should show the new work modal with correct attributes', () => {
            fixtureParent.detectChanges();
            expect(component.titleNewModal).toBe('Nuevo Trabajo');
        });

        /**
        * Tests that the update work modal has correct attributes.
        **/
        it('should show the update work modal with correct attributes', () => {
            fixtureParent.detectChanges();
            expect(component.titleUpdateModal).toBe('Modificar Trabajo');
        });

        /**
        * Tests that the danger modal has correct attributes.
        **/
        it('should show the danger modal with correct attributes', () => {
            fixtureParent.detectChanges();
            expect(component.titleDangerModal).toBe('Eliminar Trabajo');
            expect(component.descriptionDangerModal).toBe('¿Está usted seguro de eliminar este trabajo?');
        });
    });

    describe('Load of the variables to the template for parent works component', () => {
        /**
        * Tests that the title is empty before the use of the title variable.
        **/
        it('no title in the DOM until manually call `detectChanges`', () => {
            expect(el.textContent).toEqual('');
        });

        /**
        * Tests that the component have the correct title when everything is loaded.
        **/
        it('should display original page title', () => {
            fixtureParent.detectChanges();
            expect(el.textContent).toBe(component.title);
            expect(el.textContent).not.toBe(null);
        });
    });

    describe('Use of methods for parent works component', () => {
        /**
        * Tests that the getContactFromTable method returns the correct Contact object.
        **/
        it('should return a not empty Work object', () => {
            component.getWorkFromTable(testWork);
            expect(component.work).toEqual(testWork);
        });
    });

    describe('Use of methods for TWDB', () => {
        /**
        * Tests that the onWorkCreated method returns the new Work object and
        * is added to the complete work list.
        **/
        it('should add the new work', () => {
            let testList: Work[] = [ testWork, testWork ];
            component.worksList = testList;
            component.onWorkCreated(testWork);
            fixtureParent.detectChanges();
            expect(component.worksList.length).toEqual(3);
            expect(component.worksList[2]).toEqual(testWork);
        });

        /**
        * Tests that the onWorkUpdated method updated the Work object in
        * the complete work list.
        **/
        it('should update work object', () => {
            let testList: Work[] = [ testWork, testWork2 ];
            let updatedList: Work[] = [ testWorkUpdated, testWork2 ];
            component.worksList = testList;
            component.onWorkUpdated(testWorkUpdated);
            fixtureParent.detectChanges();
            expect(component.worksList).toEqual(updatedList);
        });
    });
});
