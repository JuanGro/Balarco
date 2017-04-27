import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

// Modals
import  * as ng2Bootstrap from 'ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/modal';

// Forms
import { FormsModule }  from '@angular/forms';

// Pagination
import { NgxPaginationModule } from 'ngx-pagination';

// Services
import { BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { HttpService } from './../../shared/http-service/http.service';
import { CustomToastService } from '../../shared/toast/custom-toast.service';

// Datepicker
import { DatepickerModule } from 'ng2-bootstrap/datepicker';
import { SelectModule } from 'ng2-select';

// Components
import { WorksComponent } from './works.component';
import { WorksListComponent } from './works-list.component';
import { WorkFormComponent } from './work-form.component';
import { WorkFilterFormComponent } from './work-filter-form.component';

// Pipes
import { CalculateDeliveryDatePipe } from './work-dates-format-table.pipe';

// Models
import { ArtWork } from './art-works/art-work-model';
import { Contact } from '../../accounts/contacts/contact-model';
import { Client } from '../../accounts/clients/client-model';
import { Iguala } from '../../accounts/igualas/iguala-model';
import { Status } from './status/status-model';
import { Work } from './work-model';
import { WorkType } from './work-type/work-type-model';

describe('WorkFormComponent tests', () => {
  // Fixture for debugging and testing a WorksComponent.
  let fixtureParent: ComponentFixture<WorksComponent>;
  // Fixture for debugging and testing a WorkFormComponent.
  let fixtureChildForm: ComponentFixture<WorkFormComponent>;
  // Fixture for debugging and testing a WorksListComponent .
  let fixtureChildTable: ComponentFixture<WorksListComponent>;
  // Fixture for debugging and testing a WorksFilterFormComponent .
  let fixtureChildFilterForm: ComponentFixture<WorkFilterFormComponent>;

  // Save WorksComponent to test it's methods and variables.
  let componentParent: WorksComponent;
  // Save WorkFormComponent to test it's methods and variables.
  let component: WorkFormComponent;
  // Save WorksListComponent  to test it's methods and variables.
  let componentTable: WorksListComponent;
  // Save WorkFilterFormComponent  to test it's methods and variables.
  let componentFilterForm: WorkFilterFormComponent;

  // Variable to test which action is executing in modal.
  let modalAction;

  // Create a test Work
  let testWork1 = new Work({
    id: 1, name: 'Test Work', creation_date: new Date(), expected_delivery_date: new Date(),
    brief: 'Foo', final_link: 'Bar.com', contact: 1, work_type: 1, iguala: 1, current_status: 1,
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

  let testContactList: Contact[] = [
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

  let testClientsList: Client[] = [
    new Client({ id: 1, name: 'Starbucks', address: 'Example' }),
    new Client({ id: 2, name: 'Oxxo', address: 'Example' }),
    new Client({ id: 3, name: 'Mc', address: 'Example' }),
  ];

  let testIgualasList: Iguala[] = [
    new Iguala ({ id: 1, name: 'Starbucks 2018', client: 2,
    start_date: new Date(2011, 10, 10), end_date: new Date(2012, 10, 10)}),
    new Iguala ({ id: 2, name: 'Oxxo 2018', client: 1,
    start_date: new Date(2011, 10, 10), end_date: new Date(2012, 10, 10)})
  ];

  let testWorkTypesList: WorkType[] = [
    new WorkType({ id: 1, name: 'Art', work_type_id: 1 }),
    new WorkType({ id: 2, name: 'Art2', work_type_id: 2 }),
  ];

  let testGraduationArtTypes: ArtWork[] = [
    new ArtWork({ id: 1, name: 'Nuevo Arte', quantity: 1 }),
    new ArtWork({ id: 2, name: 'Nuevo Arte2', quantity: 10 }),
  ];

  let testStatusList: Status[] = [
    new Status({ id: 1, name: 'Status 1', status_id: 1 }),
    new Status({ id: 2, name: 'Status 2', status_id: 2 }),
  ];

  // Base state before each test runs.
  // Handles asynchronous compilation.
  beforeEach(async(() => {
      TestBed.configureTestingModule({
          // Declare all what the test component has.
          declarations: [ WorksComponent, WorksListComponent , WorkFormComponent, WorkFilterFormComponent, CalculateDeliveryDatePipe ],
          imports: [ ng2Bootstrap.Ng2BootstrapModule, CommonModule, FormsModule,
          ChartsModule, DropdownModule, ModalModule.forRoot(), ToasterModule, DatepickerModule.forRoot(),
          SelectModule, NgxPaginationModule ],
          providers: [ WorkFormComponent,
              {
                provide: HttpService, useFactory: (backend, options) => {
                  return new HttpService(backend, options);
                },
                deps: [MockBackend, BaseRequestOptions]
              },
              { provide: ActivatedRoute, useClass: class { navigate = jasmine.createSpy('navigate'); } },
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
      componentParent = fixtureParent.componentInstance;
      // WorkFormComponent test instance.
      component = fixtureChildForm.componentInstance;
      // WorksListComponent  test instance.
      componentTable = fixtureChildTable.componentInstance;
      // WorkFilterFormComponent test instance.
      componentFilterForm = fixtureChildFilterForm.componentInstance;
    }));

    describe('Components defined for the child works form component', () => {
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

   describe('Correct behaviour of OnChanges hook in the component', () => {
      /**
      * Tests that the current component is correctly built depending of OnChanges hook,
      * in this case, the client and oldClient is undefined.
      **/
      it('should have an defined work with undefined attributes', () => {
          component.ngOnChanges();
          fixtureChildForm.detectChanges();

          expect(component.work).toBeDefined();
          expect(component.work.id).toBeUndefined();
          expect(component.work.name).toBeUndefined();
          expect(component.work.contact).toBeUndefined();
          expect(component.work.iguala).toBeUndefined();
          expect(component.work.work_type).toBeUndefined();

          expect(component.oldWork).toBeUndefined();
      });

      /**
      * Tests that the current component is correctly built depending of OnChanges hook,
      * in this case, the client and oldClient is defined.
      **/
      it('should have a defined work and its atributes correctly defined', () => {
          component.work = testWork1;
          component.contactsList = testContactList;
          component.ngOnChanges();
          fixtureChildForm.detectChanges();

          expect(component.work).toBeDefined();
          expect(component.work.id).toBeDefined();
          expect(component.work.name).toBeDefined();
          expect(component.work.contact).toBeDefined();
          expect(component.work.iguala).toBeDefined();
          expect(component.work.work_type).toBeDefined();

          expect(component.oldWork).toBeDefined();
          expect(component.oldWork.id).toBeDefined();
          expect(component.oldWork.name).toBeDefined();
          expect(component.oldWork.contact).toBeDefined();
          expect(component.oldWork.iguala).toBeDefined();
          expect(component.oldWork.work_type).toBeDefined();
      });
   });

   describe('Initialization of variable for child contacts form component', () => {
        /**
        * Tests that the Work object received from parent component is not empty.
        **/
        it('should load correctly a work in contact Input', () => {
            component.work = testWork1;
            fixtureParent.detectChanges();
            expect(component.work).toEqual(testWork1);
        });

        /**
        * Tests that the contact list received from parent is correct
        **/
        it('should load correctly the contact list Input', () => {
            component.contactsList = testContactList;
            fixtureParent.detectChanges();
            expect(component.contactsList).toEqual(testContactList);
        });

        /**
        * Tests that the client list received from parent is correct
        **/
        it('should load correctly the client list Input', () => {
            component.clientsList = testClientsList;
            fixtureParent.detectChanges();
            expect(component.clientsList).toEqual(testClientsList);
        });

        /**
        * Tests that the igualas list received from parent is correct
        **/
        it('should load correctly the igualas list Input', () => {
            component.igualasList = testIgualasList;
            fixtureParent.detectChanges();
            expect(component.igualasList).toEqual(testIgualasList);
        });

        /**
        * Tests that the worktypes list received from parent is correct
        **/
        it('should load correctly the work types list Input', () => {
            component.workTypesList = testWorkTypesList;
            fixtureParent.detectChanges();
            expect(component.workTypesList).toEqual(testWorkTypesList);
        });

        /**
        * Tests that the status list received from parent is correct
        **/
        it('should load correctly the status list Input', () => {
            component.statusList = testStatusList;
            fixtureParent.detectChanges();
            expect(component.statusList).toEqual(testStatusList);
        });

        /**
        * Tests that the graduationTypes list received from parent is correct
        **/
        it('should load correctly the graduationArtTypes list Input', () => {
            component.graduationArtTypes = testGraduationArtTypes;
            fixtureParent.detectChanges();
            expect(component.graduationArtTypes).toEqual(testGraduationArtTypes);
        });
    });

    describe('EventEmitter of modal requests for child works form component', () => {
       /**
       * Get the current component to use it in observables.
       **/
       beforeEach(inject([WorkFormComponent], result => {
           modalAction = result;
       }));

       /**
       * Tests that the close modal request is correctly received.
       **/
       it('should request to close the current modal', async(() => {
           modalAction.requestCloseThisModal();
           modalAction.requestCloseModal.subscribe(result => {
               expect(result).toBe('Close modal');
           });
       }));

       /**
       * Tests that the show warning modal request is correctly received.
       **/
       it('should request to close the show warning modal', async(() => {
           modalAction.requestWarningModal();
           modalAction.requestWarning.subscribe(result => {
               expect(result).toBe('Show warning modal');
           });
       }));
   });
});
