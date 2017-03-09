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

// Components
import { ClientsComponent } from './clients.component';
import { ClientsListComponent } from './clients-list.component';
import { ClientFormComponent } from './client-form.component';

// Models
import { Client } from './/client-model';

describe('ClientsComponent tests.', () => {
    // Fixture for debugging and testing a ClientsComponent.
    let fixtureParent: ComponentFixture<ClientsComponent>;
    // Fixture for debugging and testing a ClientFormComponent.
    let fixtureChildForm: ComponentFixture<ClientFormComponent>;
    // Fixture for debugging and testing a ClientListTableComponent.
    let fixtureChildTable: ComponentFixture<ClientsListComponent>;

    // Save ClientsComponent to test it's methods and variables.
    let component: ClientsComponent;
    // Save ClientFormComponent to test it's methods and variables.
    let componentForm: ClientFormComponent;
    // Save ClientListTableComponent to test it's methods and variables.
    let componentTable: ClientsListComponent;

    // Handles on the component's DOM element.
    let de: DebugElement;
    let el: HTMLElement;

    // Create a Client object example.
    let testClient: Client = { id: 1, name: 'Starbucks', address: 'Example' };

    // Create a Client list example.
    let testListClients: Client[] = [
                                { id: 1, name: 'Starbucks', address: 'Example' },
                                { id: 2, name: 'General Electric', address: 'Example' }
                                ];

    // Base state before each test runs.
    // Handles asynchronous compilation.
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            // Declare all what the test component has.
            declarations: [ ClientsComponent, ClientsListComponent, ClientFormComponent ],
            imports: [ ng2Bootstrap.Ng2BootstrapModule, CommonModule, ReactiveFormsModule, FormsModule,
            ChartsModule, DropdownModule, ModalModule.forRoot() ],
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

        // Create an instance of the ClientsComponent.
        fixtureParent = TestBed.createComponent(ClientsComponent);
        // Create an instance of the ClientFormComponent.
        fixtureChildForm = TestBed.createComponent(ClientFormComponent);
        // Create an instance of the ClientListTableComponent.
        fixtureChildTable = TestBed.createComponent(ClientsListComponent);

        // ClientsComponent test instance.
        component = fixtureParent.componentInstance;
        // ClientFormComponent test instance.
        componentForm = fixtureChildForm.componentInstance;
        // ClientListTableComponent test instance.
        componentTable = fixtureChildTable.componentInstance;

        // Query for the title <h1> by CSS element selector.
        de = fixtureParent.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    }));

    describe('Components defined for the parent client component', () => {
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

    describe('Initialization of variable for parent client component', () => {
        /**
        * Tests that the page title is correct.
        **/
        it('should show the new client modal with correct attributes', () => {
            fixtureParent.detectChanges();
            expect(component.title).toContain('Lista de compañías');
        });

        /**
        * Tests that the new client modal has correct attributes.
        **/
        it('should show the new client modal with correct attributes', () => {
            fixtureParent.detectChanges();
            expect(component.titleNewModal).toContain('Nueva compañía');
        });

        /**
        * Tests that the update client modal has correct attributes.
        **/
        it('should show the update client modal with correct attributes', () => {
            fixtureParent.detectChanges();
            expect(component.titleUpdateModal).toContain('Modificar compañía');
        });

        /**
        * Tests that the danger modal has correct attributes.
        **/
        it('should show the danger modal with correct attributes', () => {
            fixtureParent.detectChanges();
            expect(component.titleDangerModal).toContain('Eliminar compañía');
            expect(component.descriptionDangerModal).toContain('¿Está usted seguro de eliminar esta compañía?');
        });
    });

    describe('Load of the variables to the template for parent client component', () => {
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

    describe('Load of example data to simulate that Input variables are correctly assigned for parent client component', () => {
        /**
        * Tests that the component doesn't obtain an error or empty client list.
        **/
        it('should load correctly clients list in clientsList Input', () => {
            component.clientsList = testListClients;
            fixtureParent.detectChanges();
            expect(component.clientsList).toEqual(testListClients);
        });
    });

    describe('Use of methods for parent client component', () => {
        /**
        * Tests that the initialize modal method is working correctly, setting the client to null.
        **/
        it('should initialize the modal', () => {
            component.initializeModal();
            expect(component.client.id).toBeUndefined();
            expect(component.client.name).toBeUndefined();
            expect(component.client.address).toBeUndefined();
        });

        /**
        * Tests that the getclientFromTable method doesn't returns a client object empty.
        **/
        it('should return a not empty client object', () => {
            component.getClientFromTable(testClient);
            expect(component.client).toEqual(testClient);
        });
    });
});
