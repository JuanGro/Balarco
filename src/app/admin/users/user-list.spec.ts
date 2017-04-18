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
import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list.component';
import { UserFormComponent } from './user-form.component';

// Models
import { User } from './user-model';
import { Group } from './group-model';

describe('UserListComponent  tests.', () => {
    // Fixture for debugging and testing a UsersComponent.
    let fixtureParent: ComponentFixture<UsersComponent>;
    // Fixture for debugging and testing a UserFormComponent.
    let fixtureChildForm: ComponentFixture<UserFormComponent>;
    // Fixture for debugging and testing a UserListComponent .
    let fixtureChildTable: ComponentFixture<UserListComponent>;

    // Save UsersComponent to test it's methods and variables.
    let componentParent: UsersComponent;
    // Save UserFormComponent to test it's methods and variables.
    let componentForm: UserFormComponent;
    // Save UserListComponent  to test it's methods and variables.
    let component: UserListComponent;

    // Handles on the component's DOM element.
    let de: DebugElement;
    let el: HTMLElement;

    // Variable to test which action is executing in modal.
    let modalAction;

    // Create a User object example.
    let testUser: User = { id: 2, username: 'juan@balarco.com', first_name: 'Juan', last_name: 'Hernández',
                            password: 'password'};

    // Create a user list example.
    let testUserList: User[] = [
                                { id: 2, username: 'juan@balarco.com', first_name: 'Juan', last_name: 'Hernández',
                                password: 'password'},
                                { id: 3, username: 'juan@balarco.com', first_name: 'Julian', last_name: 'Nieves',
                                password: 'password'}
                                ];

    let testGroupList: Group[] = [
                                 { id: 1, name: 'admin' },
                                 { id: 2, name: 'cuentas'}
                                 ];

    // Base state before each test runs.
    // Handles asynchronous compilation.
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            // Declare all what the test component has.
            declarations: [ UsersComponent, UserListComponent , UserFormComponent ],
            imports: [ ng2Bootstrap.Ng2BootstrapModule, CommonModule, ReactiveFormsModule, FormsModule,
            ChartsModule, DropdownModule, ModalModule.forRoot(), ToasterModule ],
            providers: [ UserListComponent ,
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
        // Create an instance of the UserListComponent.
        fixtureChildTable = TestBed.createComponent(UserListComponent);

        // UsersComponent test instance.
        componentParent = fixtureParent.componentInstance;
        // UserFormComponent test instance.
        componentForm = fixtureChildForm.componentInstance;
        // UserListComponent  test instance.
        component = fixtureChildTable.componentInstance;

        // Query for the title <h1> by CSS element selector.
        de = fixtureParent.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    }));

    describe('Components defined for the child user list table component', () => {
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

    describe('Initialization of variable for child user list table component', () => {
        /**
        * Tests that the User object received from parent component is not empty.
        **/
        it('should load correctly user list in userList Input', () => {
            component.userList = testUserList;
            fixtureParent.detectChanges();
            expect(component.userList).toEqual(testUserList);
        });

        /**
        * Tests that the Client object received from parent component is not empty.
        **/
        it('should load correctly group list in groupList Input', () => {
            component.groupList = testGroupList;
            fixtureParent.detectChanges();
            expect(component.groupList).toEqual(testGroupList);
        });
    });

    describe('EventEmitter of modal requests for child user list table component', () => {
        /**
        * Get the current component to use it in observables.
        **/
        beforeEach(inject([ UserListComponent ], result => {
            modalAction = result;
        }));

        /**
        * Tests that the open new user modal request is correctly received.
        **/
        it('should request to open the new user modal', async(() => {
            modalAction.requestShowNewUserModal.subscribe(result => {
                expect(result).toBe('Open new user modal');
            });
            modalAction.requestNewUserModal();
        }));

        /**
        * Tests that the open update modal request is correctly received.
        **/
        it('should request to open the new user modal', async(() => {
            modalAction.requestShowUpdateUserModal.subscribe(result => {
                expect(result).toBe('Open update user modal');
            });
            modalAction.requestUpdateUserModal();
        }));
    });

    describe('EventEmitter of current user requests for child user list table component', () => {
        /**
        * Get the current component to use it in observables.
        **/
        beforeEach(inject([ UserListComponent ], result => {
            modalAction = result;
        }));

        /**
        * Tests that the sendCurrentUser request is correctly received.
        **/
        it('should request to send a user object', async(() => {
            modalAction.currentUser.subscribe(result => {
                expect(result).toEqual(testUser);
            });
            modalAction.sendCurrentUser(testUser);
        }));
    });
});
