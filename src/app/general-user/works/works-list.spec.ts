import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';
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

// Components
import { WorksComponent } from './works.component';
import { WorksListComponent } from './works-list.component';
import { WorkFormComponent } from './work-form.component';

// Models
import { ArtWork } from './art-works/art-work-model';
import { Contact } from '../../accounts/contacts/contact-model';
import { Client } from '../../accounts/clients/client-model';
import { Iguala } from '../../accounts/igualas/iguala-model';
import { Status } from './status/status-model';
import { Work } from './work-model';
import { WorkType } from './work-type/work-type-model';

describe('WorksComponent tests', () => {
  // Fixture for debugging and testing a WorksComponent.
    let fixtureParent: ComponentFixture<WorksComponent>;
    // Fixture for debugging and testing a WorkFormComponent.
    let fixtureChildForm: ComponentFixture<WorkFormComponent>;
    // Fixture for debugging and testing a WorksListComponent .
    let fixtureChildTable: ComponentFixture<WorksListComponent>;

    // Save WorksComponent to test it's methods and variables.
    let componentParent: WorksComponent;
    // Save WorkFormComponent to test it's methods and variables.
    let componentForm: WorkFormComponent;
    // Save WorksListComponent  to test it's methods and variables.
    let component: WorksListComponent ;

    // Handles on the component's DOM element.
    let de: DebugElement;
    let el: HTMLElement;

    // Variable to test which action is executing in modal.
    let modalAction;
    // Variable to test which action is executing the sending requests.
    let action;

    // Create a test Work
    let testWork1 = new Work({
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

    // Create a test Work
    let testWork2 = new Work({
      id: 2, name: 'Test Work 2', creation_date: new Date(), expected_delivery_date: new Date(),
      brief: 'Bar', final_link: 'Foo.com',
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

    let testWorkList: Work[] = [testWork1, testWork2];
    
    // Base state before each test runs.
    // Handles asynchronous compilation.
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            // Declare all what the test component has.
            declarations: [ WorksComponent, WorksListComponent , WorkFormComponent ],
            imports: [ ng2Bootstrap.Ng2BootstrapModule, CommonModule, ReactiveFormsModule, FormsModule,
            ChartsModule, DropdownModule, ModalModule.forRoot(), ToasterModule ],
            providers: [
                {
                  provide: HttpService, useFactory: (backend, options) => {
                    return new HttpService(backend, options);
                  },
                  deps: [MockBackend, BaseRequestOptions]
                },
                MockBackend, BaseRequestOptions, CustomToastService
            ]
        });

        // Create an instance of the WorksComponent.
        fixtureParent = TestBed.createComponent(WorksComponent);
        // Create an instance of the WorkFormComponent.
        fixtureChildForm = TestBed.createComponent(WorkFormComponent);
        // Create an instance of the WorksListComponent.
        fixtureChildTable = TestBed.createComponent(WorksListComponent );

        // WorksComponent test instance.
        componentParent = fixtureParent.componentInstance;
        // WorkFormComponent test instance.
        componentForm = fixtureChildForm.componentInstance;
        // WorksListComponent  test instance.
        component = fixtureChildTable.componentInstance;

        // Query for the title <h1> by CSS element selector.
        de = fixtureParent.debugElement.query(By.css('h1'));
        el = de.nativeElement;
      }));

      describe('Components defined for the child works list table component', () => {
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

    describe('Initialization of variable for child work list table component', () => {
       /**
       * Tests that the Work list received is correct.
       **/
       it('should load correctly work list in worksList Input', () => {
           component.worksList = testWorkList;
           fixtureChildTable.detectChanges();
           expect(component.worksList).toEqual(testWorkList);
       });
   });
});
