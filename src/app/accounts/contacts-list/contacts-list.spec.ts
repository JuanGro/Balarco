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
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule }  from '@angular/forms';

import { ContactsListComponent } from './contacts-list.component';
import { ContactsListTableComponent } from './contacts-list-table.component';
import { ContactsListFormComponent } from './contacts-list-form.component';

describe('ContactsListComponent (inline template)', () => {
    let fixtureParent: ComponentFixture<ContactsListComponent>;
    let fixtureChildForm: ComponentFixture<ContactsListFormComponent>;
    let fixtureChildTable: ComponentFixture<ContactsListTableComponent>;
    
    let component: ContactsListComponent;
    let componentTable: ContactsListTableComponent;
    let componentForm: ContactsListFormComponent;

    let de: DebugElement;
    let el: HTMLElement;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ContactsListComponent, ContactsListTableComponent, ContactsListFormComponent ], // declare the test component
            imports: [ ng2Bootstrap.Ng2BootstrapModule, CommonModule, ReactiveFormsModule, FormsModule, ChartsModule, DropdownModule, ModalModule.forRoot() ]
        });

        fixtureParent = TestBed.createComponent(ContactsListComponent);
        fixtureChildForm = TestBed.createComponent(ContactsListFormComponent);
        fixtureChildTable = TestBed.createComponent(ContactsListTableComponent);
        
        component = fixtureParent.componentInstance; // ContactsListComponent test instance
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
    });
    
    it('should display a different test title', () => {
        component.title = 'Lista de contactos';
        fixtureParent.detectChanges();
        expect(el.textContent).toContain('Lista de contactos');
    });
});