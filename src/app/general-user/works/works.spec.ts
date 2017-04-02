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

// Components
import { WorksComponent } from './works.component';
import { WorksListComponent } from './works-list.component';
import { WorkFormComponent } from './work-form.component';

// Datepicker
import { DatepickerModule } from 'ng2-bootstrap/datepicker';
import { SelectModule } from 'ng2-select';

// Models
import { Contact } from './contact-model';
import { Client } from './../clients/client-model';


describe('WorksComponent tests', () => {
  // Fixture for debugging and testing a WorksComponent.
    let fixtureParent: ComponentFixture<WorksComponent>;
    // Fixture for debugging and testing a WorkFormComponent.
    let fixtureChildForm: ComponentFixture<WorkFormComponent>;
    // Fixture for debugging and testing a WorksListComponent .
    let fixtureChildTable: ComponentFixture<WorksListComponent>;

    // Save WorksComponent to test it's methods and variables.
    let component: WorksComponent;
    // Save WorkFormComponent to test it's methods and variables.
    let componentForm: WorkFormComponent;
    // Save WorksListComponent  to test it's methods and variables.
    let componentTable: WorksListComponent ;

    // Handles on the component's DOM element.
    let de: DebugElement;
    let el: HTMLElement;

    // Base state before each test runs.
    // Handles asynchronous compilation.
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            // Declare all what the test component has.
            declarations: [ WorksComponent, WorksListComponent , WorkFormComponent ],
            imports: [ ng2Bootstrap.Ng2BootstrapModule, CommonModule, ReactiveFormsModule, FormsModule,
            ChartsModule, DropdownModule, ModalModule.forRoot(), ToasterModule, DatepickerModule.forRoot(), SelectModule ],
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
        component = fixtureParent.componentInstance;
        // WorkFormComponent test instance.
        componentForm = fixtureChildForm.componentInstance;
        // WorksListComponent  test instance.
        componentTable = fixtureChildTable.componentInstance;

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
            expect(component.title).toContain('Lista de Trabajos');
        });

        /**
        * Tests that the new work modal has correct attributes.
        **/
        it('should show the new work modal with correct attributes', () => {
            fixtureParent.detectChanges();
            expect(component.titleNewModal).toContain('Nuevo Trabajo');
        });

        /**
        * Tests that the update work modal has correct attributes.
        **/
        it('should show the update work modal with correct attributes', () => {
            fixtureParent.detectChanges();
            expect(component.titleUpdateModal).toContain('Modificar Trabajo');
        });

        /**
        * Tests that the danger modal has correct attributes.
        **/
        it('should show the danger modal with correct attributes', () => {
            fixtureParent.detectChanges();
            expect(component.titleDangerModal).toContain('Eliminar Trabajo');
            expect(component.descriptionDangerModal).toContain('¿Está usted seguro de eliminar este trabajo?');
        });
    });
});
