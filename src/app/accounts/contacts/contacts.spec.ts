import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
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

    let component: ContactsComponent;
    let componentTable: ContactsListTableComponent;
    let componentForm: ContactFormComponent;

    let httpServiceStub;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ContactsComponent, ContactsListTableComponent, ContactFormComponent ], // declare the test component
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

        component = fixtureParent.componentInstance; // ContactsComponent test instance
        componentForm = fixtureChildForm.componentInstance;
        componentTable = fixtureChildTable.componentInstance;

        // query for the title <h1> by CSS element selector
        de = fixtureParent.debugElement.query(By.css('h1'));
        el = de.nativeElement;
        
    }));

    it('should have a defined component', () => {
        expect(component).toBeDefined();
    });

    it('no title in the DOM until manually call `detectChanges`', () => {
        expect(el.textContent).toEqual('');
    });

    it('should display original title', () => {
        fixtureParent.detectChanges();
        expect(el.textContent).toContain(component.title);
        expect(el.textContent).not.toBe(null);
    });

    it('should display a different test title', () => {
        component.title = 'Lista de contactos';
        fixtureParent.detectChanges();
        expect(el.textContent).toContain('Lista de contactos');
    });
});
