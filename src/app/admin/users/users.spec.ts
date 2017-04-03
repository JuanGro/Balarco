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
import { UsersComponent } from './users.component';
import { UserListComponent  } from './user-list.component';
import { UserFormComponent } from './user-form.component';

// Models
import { User, Group } from './user-model';

describe('ContactsComponent tests.', () => {
    // Fixture for debugging and testing a UsersComponent.
    let fixtureParent: ComponentFixture<UsersComponent>;
    // Fixture for debugging and testing a UserFormComponent.
    let fixtureChildForm: ComponentFixture<UserFormComponent>;
    // Fixture for debugging and testing a UserListComponent .
    let fixtureChildTable: ComponentFixture<UserListComponent >;

    // Save UsersComponent to test it's methods and variables.
    let component: UsersComponent;
    // Save UserFormComponent to test it's methods and variables.
    let componentForm: UserFormComponent;
    // Save UserListComponent  to test it's methods and variables.
    let componentTable: UserListComponent;

    // Handles on the component's DOM element.
    let de: DebugElement;
    let el: HTMLElement;

    // Create a Contact object example.
    let testGroup: Group = { id: 1 };
    let testUser: User = { id: 2, username: 'example@balarco.com', first_name: 'Juan',
                            last_name: 'Hernández', groups: [testGroup]};
    // Base state before each test runs.
    // Handles asynchronous compilation.
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            // Declare all what the test component has.
            declarations: [ UsersComponent, UserListComponent , UserFormComponent ],
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

        // Create an instance of the UsersComponent.
        fixtureParent = TestBed.createComponent(UsersComponent);
        // Create an instance of the UserFormComponent.
        fixtureChildForm = TestBed.createComponent(UserFormComponent);
        // Create an instance of the UserListComponent .
        fixtureChildTable = TestBed.createComponent(UserListComponent );

        // UsersComponent test instance.
        component = fixtureParent.componentInstance;
        // UserFormComponent test instance.
        componentForm = fixtureChildForm.componentInstance;
        // UserListComponent  test instance.
        componentTable = fixtureChildTable.componentInstance;

        // Query for the title <h1> by CSS element selector.
        de = fixtureParent.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    }));

    describe('Components defined for the parent users component', () => {
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

    describe('Initialization of variable for parent users component', () => {
        /**
        * Tests that the page title is correct.
        **/
        it('should show the new contact modal with correct attributes', () => {
            fixtureParent.detectChanges();
            expect(component.title).toContain('Lista de usuarios');
        });

        /**
        * Tests that the new contact modal has correct attributes.
        **/
        it('should show the new contact modal with correct attributes', () => {
            fixtureParent.detectChanges();
            expect(component.titleNewModal).toContain('Nuevo Usuario');
        });

        /**
        * Tests that the update contact modal has correct attributes.
        **/
        it('should show the update contact modal with correct attributes', () => {
            fixtureParent.detectChanges();
            expect(component.titleUpdateModal).toContain('Modificar Usuario');
        });

        /**
        * Tests that the danger modal has correct attributes.
        **/
        it('should show the danger modal with correct attributes', () => {
            fixtureParent.detectChanges();
            expect(component.titleDangerModal).toContain('Eliminar Usuario');
            expect(component.descriptionDangerModal).toContain('¿Está usted seguro de eliminar este usuario?');
        });
    });

    describe('Load of the variables to the template for parent user component', () => {
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
            expect(component.user.id).toBeUndefined();
            expect(component.user.username).toBeUndefined();
            expect(component.user.first_name).toBeUndefined();
            expect(component.user.last_name).toBeUndefined();
            expect(component.user.password).toBeUndefined();
            expect(component.user.groups).toBeUndefined();
        });

        /**
        * Tests that the getContactFromTable method doesn't returns a Contact object empty.
        **/
        it('should return a not empty Contact object', () => {
            component.getUserFromTable(testUser);
            expect(component.user).toEqual(testUser);
        });
    });
});
