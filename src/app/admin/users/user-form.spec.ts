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

// Components
import { UsersComponent } from './users.component';
import { UserListComponent  } from './user-list.component';
import { UserFormComponent } from './user-form.component';

// Models
import { User, Group } from './user-model';

describe('UserFormComponent tests.', () => {
    // Fixture for debugging and testing a UsersComponent.
    let fixtureParent: ComponentFixture<UsersComponent>;
    // Fixture for debugging and testing a UserFormComponent.
    let fixtureChildForm: ComponentFixture<UserFormComponent>;
    // Fixture for debugging and testing a UserListComponent .
    let fixtureChildTable: ComponentFixture<UserListComponent >;

    // Save UsersComponent to test it's methods and variables.
    let componentParent: UsersComponent;
    // Save UserListComponent to test it's methods and variables.
    let componentTable: UserListComponent ;
    // Save UserFormComponent  to test it's methods and variables.
    let component: UserFormComponent;

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
            imports: [ ng2Bootstrap.Ng2BootstrapModule, CommonModule, FormsModule,
            ChartsModule, DropdownModule, ModalModule.forRoot(), ToasterModule ],
            providers: [ UserFormComponent,
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
        componentParent = fixtureParent.componentInstance;
        // UserFormComponent test instance.
        component = fixtureChildForm.componentInstance;
        // UserListComponent  test instance.
        componentTable = fixtureChildTable.componentInstance;
    }));

    describe('Components defined for the child user form component', () => {
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

    describe('Initialization of variable for child groups form component', () => {
        /**
        * Tests that the user object received from parent component is not empty.
        **/
        it('should load correctly a user in user Input', () => {
            component.user = testUser;
            fixtureParent.detectChanges();
            expect(component.user).toEqual(testUser);
        });

        /**
        * Tests that the clients object list received from parent component is not empty.
        **/
        it('should load correctly clients list in clientsList Input', () => {
            component.groupList = testGroupList;
            fixtureParent.detectChanges();
            expect(component.groupList).toEqual(testGroupList);
        });
    });

    describe('EventEmitter of modal requests for child user form component', () => {
        /**
        * Get the current component to use it in observables.
        **/
        beforeEach(inject([UserFormComponent], result => {
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
});
