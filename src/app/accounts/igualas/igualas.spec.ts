import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';
import { CommonModule } from '@angular/common';

// Modals
import * as ng2Bootstrap from 'ng2-bootstrap';
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
import { ArtWork } from './../../general-user/works/art-works/art-work-model';
import { Client } from './../clients/client-model';

describe('Igualas Component tests.', () => {
    // Fixture for debugging and testing a IgualasComponent.
    let fixtureParent: ComponentFixture<IgualasComponent>;
    // Fixture for debugging and testing a IgualaFormComponent.
    let fixtureChildForm: ComponentFixture<IgualaFormComponent>;
    // Fixture for debugging and testing a IgualasListComponent .
    let fixtureChildTable: ComponentFixture<IgualasListComponent >;

    // Save IgualasComponent to test it's methods and variables.
    let component: IgualasComponent;
    // Save IgualaFormComponent to test it's methods and variables.
    let componentForm: IgualaFormComponent;
    // Save IgualasListComponent  to test it's methods and variables.
    let componentTable: IgualasListComponent ;

    // Handles on the component's DOM element.
    let de: DebugElement;
    let el: HTMLElement;

    // Create a Client object example
    let testClient: Client = { id: 1, name: 'Starbucks', address: 'Example' };
    // Create a Client object example
    let testClient2: Client = { id: 2, name: 'General Electric', address: 'Example' };

    // Initialize Client objects
    testClient = new Client(testClient);
    testClient2 = new Client(testClient2);

    let testArtWork: ArtWork = {
        id: 1, name: 'Test Diseño 1', quantity: 100
    };

    let testArtWork2: ArtWork = {
        id: 2, name: 'Test Diseño 2', quantity: 200
    };

    let testArtWork3: ArtWork = {
        id: 3, name: 'Test Diseño 3', quantity: 300
    };

    testArtWork = new ArtWork(testArtWork);
    testArtWork2 = new ArtWork(testArtWork2);
    testArtWork3 = new ArtWork(testArtWork3);

    let testListArtWorks: ArtWork[] = [
                                testArtWork,
                                testArtWork2,
                                testArtWork3
                                ];

    // Create Iguala object example.
    let testIguala: Iguala = {
        id: 1,
        name: 'Starbucks 2018',
        client: 2,
        client_complete: testClient,
        start_date: new Date(2011, 10, 10),
        end_date: new Date(2012, 10, 10),
        art_iguala: testListArtWorks
    };

    let testIguala2: Iguala = {
        id: 2,
        name: 'Oxxo 2018',
        client: 2,
        client_complete: testClient2,
        start_date: new Date(2011, 10, 10),
        end_date: new Date(2012, 10, 10),
        art_iguala: testListArtWorks
    };

    let testIgualaUpdate: Iguala = {
        id: 2,
        name: 'GE 2018',
        client: 2,
        client_complete: testClient,
        start_date: new Date(2011, 10, 10),
        end_date: new Date(2012, 10, 10),
        art_iguala: testListArtWorks
    };

    testIguala = new Iguala(testIguala);
    testIguala2 = new Iguala(testIguala2);
    testIgualaUpdate = new Iguala(testIgualaUpdate);

    let testIgualaList: Iguala[] = [
        testIguala,
        testIguala2
    ];

    let testIgualaList2: Iguala[] = [
        testIguala,
        testIguala2,
        testIguala
    ];

    let testListIgualaUpdated: Iguala[] = [
                                testIguala,
                                testIgualaUpdate
                                ];

    let testListUnique: Iguala[] = [
                                testIguala
                                ];

  // Base state before each test runs.
  // Handles asynchronous compilation.
  beforeEach(async(() => {
      TestBed.configureTestingModule({
          // Declare all what the test component has.
          declarations: [ IgualasComponent, IgualasListComponent , IgualaFormComponent ],
          imports: [ ng2Bootstrap.Ng2BootstrapModule, CommonModule, ReactiveFormsModule, FormsModule,
          ChartsModule, DropdownModule, ModalModule.forRoot(), DatepickerModule.forRoot(), SelectModule, ToasterModule ],
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

      // Create an instance of the ContactsComponent.
      fixtureParent = TestBed.createComponent(IgualasComponent);
      // Create an instance of the ContactsFormComponent.
      fixtureChildForm = TestBed.createComponent(IgualaFormComponent);
      // Create an instance of the ContactsListComponent .
      fixtureChildTable = TestBed.createComponent(IgualasListComponent );

      // ContactsComponent test instance.
      component = fixtureParent.componentInstance;
      // ContactsFormComponent test instance.
      componentForm = fixtureChildForm.componentInstance;
      // ContactsListComponent  test instance.
      componentTable = fixtureChildTable.componentInstance;

      // Query for the title <h1> by CSS element selector.
      de = fixtureParent.debugElement.query(By.css('h1'));
      el = de.nativeElement;
  }));

  describe('Components defined for the parent contacts component', () => {
      /**
      * Tests that the current component is correctly built.
      **/
      it('should have a defined current component', () => {
          component.ngOnInit();
          expect(component).toBeDefined();
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

  describe('Initialization of variable for parent contacts component', () => {
      /**
      * Tests that the page title is correct.
      **/
      it('should show the new iguala modal with correct attributes', () => {
          fixtureParent.detectChanges();
          expect(component.title).toContain('Lista de Igualas');
      });

      /**
      * Tests that the new iguala modal has correct attributes.
      **/
      it('should show the new iguala modal with correct attributes', () => {
          fixtureParent.detectChanges();
          expect(component.titleNewModal).toContain('Nueva Iguala');
      });

      /**
      * Tests that the update iguala modal has correct attributes.
      **/
      it('should show the update iguala modal with correct attributes', () => {
          fixtureParent.detectChanges();
          expect(component.titleUpdateModal).toContain('Modificar Iguala');
      });

      /**
      * Tests that the danger modal has correct attributes.
      **/
      it('should show the danger modal with correct attributes', () => {
          fixtureParent.detectChanges();
          expect(component.titleDangerModal).toContain('Eliminar Iguala');
          expect(component.descriptionDangerModal).toContain('¿Está usted seguro de eliminar esta iguala?');
      });
  });

  describe('Load of the variables to the template for parent contacts component', () => {
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
          expect(el.textContent).toContain(component.title);
          expect(el.textContent).not.toBe(null);
      });
  });

  describe('Use of methods for parent contacts component', () => {
      /**
      * Tests that the initialize modal method is working correctly, setting the contact to null.
      **/
      it('should initialize the modal', () => {
          component.initializeModal();
          expect(component.iguala.id).toBeUndefined();
          expect(component.iguala.name).toBeUndefined();
          expect(component.iguala.client).toBeUndefined();
          expect(component.iguala.start_date).toBeUndefined();
          expect(component.iguala.end_date).toBeUndefined();
      });

      /**
      * Tests that the getContactFromTable method doesn't returns a Contact object empty.
      **/
      it('should return a not empty Contact object', () => {
          component.getIgualaFromTable(testIguala);
          expect(component.iguala).toEqual(testIguala);
          expect(component.currentArtWorkList).toEqual(component.iguala.art_iguala);
      });

      /**
      * Tests that the getContactFromTable method doesn't returns a Contact object empty.
      **/
      it('should return a not empty Contact object', () => {
          component.getIgualaListFromTable(testIgualaList);
          expect(component.igualasList).toEqual(testIgualaList);
      });
   });

   describe('Use of methods for TWDB', () => {
        /**
        * Tests that the onIgualaCreated method returns the new Iguala object and
        * is added to the complete iguala list.
        **/
        it('should add the new iguala', () => {
            let testList: Iguala[] = [ testIguala, testIguala2 ];
            component.completeIgualaList = testList;
            component.igualasList = testList;
            component.onIgualaCreated(testIguala);
            fixtureParent.detectChanges();
            expect(component.completeIgualaList).toEqual(testIgualaList2);
            expect(component.igualasList).toEqual(testIgualaList2);
        });

        /**
        * Tests that the onIgualaUpdated method update the Iguala object.
        **/
        it('should update the iguala', () => {
            let testList: Iguala[] = [ testIguala, testIguala2 ];
            component.completeIgualaList = testList;
            component.igualasList = testList;
            component.onIgualaUpdated(testIgualaUpdate);
            fixtureParent.detectChanges();
            expect(component.completeIgualaList).toEqual(testListIgualaUpdated);
            expect(component.igualasList).toEqual(testListIgualaUpdated);
        });
    });

    describe('Search finds the correct objects', () => {
        /**
        * Tests that the search obtains objects which contains the text to find.
        **/
        it('should find an specific object', async(() => {
            component.completeIgualaList = testIgualaList;
            component.getValueSearch('Starbucks');
            fixtureParent.detectChanges();
            expect(component.igualasList).toEqual(testListUnique);
        }));
    });
});
