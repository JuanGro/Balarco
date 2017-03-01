import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { CommonModule } from '@angular/common';

// Modals
import  * as ng2Bootstrap from 'ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/modal';

// Forms
import { FormGroup, FormControl, FormBuilder, Validators, FormsModule, ReactiveFormsModule }  from '@angular/forms';

// Services
import { HttpModule, XHRBackend, Response, BrowserXhr, ResponseOptions, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { HttpService } from './../../shared/http-service/http.service';

// Components
import { ContactsComponent } from './contacts.component';
import { ContactsListTableComponent } from './contacts-list-table.component';
import { ContactFormComponent } from './contact-form.component';

describe('ContactsComponent (inline template)', () => {
    let fixtureParent: ComponentFixture<ContactsComponent>;
    let fixtureChildForm: ComponentFixture<ContactFormComponent>;
    let fixtureChildTable: ComponentFixture<ContactsListTableComponent>;

    let componentParent: ContactsComponent;
    let componentTable: ContactsListTableComponent;
    let component: ContactFormComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            // Declare all what the test component has.
            declarations: [ ContactsComponent, ContactsListTableComponent, ContactFormComponent ],
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

        fixtureParent = TestBed.createComponent(ContactsComponent);
        fixtureChildForm = TestBed.createComponent(ContactFormComponent);
        fixtureChildTable = TestBed.createComponent(ContactsListTableComponent);

        componentParent = fixtureParent.componentInstance; // ContactsComponent test instance
        component = fixtureChildForm.componentInstance;
        componentTable = fixtureChildTable.componentInstance;
    }));

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

    it('should create a `FormBuilder` comprised of `FormControl`s', () => {
        component.ngOnChanges();
        expect(component.fb instanceof FormBuilder).toBe(true);
    });

    it('should return true if the form control is valid', () => {
        const formControl = new FormControl( {name: 'hi'});

        // componentForm.contactsModalForm.controls = formControl;
        // expect(component.isValid).toBe(true); 
    });
});
