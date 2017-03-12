import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
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

// Datepicker
import { DatepickerModule } from 'ng2-bootstrap/datepicker';
import { SelectModule } from 'ng2-select';

// Components
import { IgualasComponent } from './igualas.component';
import { IgualasListComponent } from './igualas-list.component';
import { IgualaFormComponent } from './iguala-form.component';

// Models
import { Iguala } from './iguala-model';

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

   // Create Iguala object example.
   let testIguala: Iguala = new Iguala();
   testIguala.name = 'Starbucks 2018';
   testIguala.id = 1;
   testIguala.start_date = new Date();
   testIguala.end_date = new Date();
   testIguala.client = 1;

  // Base state before each test runs.
  // Handles asynchronous compilation.
  beforeEach(async(() => {
      TestBed.configureTestingModule({
          // Declare all what the test component has.
          declarations: [ IgualasComponent, IgualasListComponent , IgualaFormComponent ],
          imports: [ ng2Bootstrap.Ng2BootstrapModule, CommonModule, ReactiveFormsModule, FormsModule,
          ChartsModule, DropdownModule, ModalModule.forRoot(), DatepickerModule.forRoot(), SelectModule ],
          providers: [
              {
                provide: HttpService, useFactory: (backend, options) => {
                  return new HttpService(backend, options);
                },
                deps: [MockBackend, BaseRequestOptions]
              },
              MockBackend, BaseRequestOptions
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
      });
  });

});
