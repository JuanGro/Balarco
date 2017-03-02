/*import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { CommonModule } from '@angular/common';

// Modals
import  * as ng2Bootstrap from 'ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/modal';

// Forms
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';

// Components
import { ContactsComponent } from './contacts.component';
import { ContactsListTableComponent } from './contacts-list-table.component';

describe('ContactsComponent (inline template)', () => {
    let fixtureParentComponent: ComponentFixture<ContactsComponent>;
    let fixtureCurrentComponent: ComponentFixture<ContactsListTableComponent>;

    let component: ContactsComponent;
    let componentTable: ContactsListTableComponent;

    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ContactsComponent, ContactsListTableComponent ], // declare the test component
            imports: [ ng2Bootstrap.Ng2BootstrapModule, CommonModule, ReactiveFormsModule, FormsModule,
            ChartsModule, DropdownModule, ModalModule.forRoot() ]
        });

        fixtureParentComponent = TestBed.createComponent(ContactsComponent);
        fixtureCurrentComponent = TestBed.createComponent(ContactsListTableComponent);

        component = fixtureParentComponent.componentInstance; // ContactsComponent test instance
        componentTable = fixtureCurrentComponent.componentInstance;

        // query for the title <h1> by CSS element selector
        de = fixtureParentComponent.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    }));

    it('should have a defined component', () => {
        expect(component).toBeDefined();
    });

    it('no title in the DOM until manually call `detectChanges`', () => {
        expect(el.textContent).toEqual('');
    });

    it('should display original title', () => {
        fixtureParentComponent.detectChanges();
        expect(el.textContent).toContain(component.title);
        expect(el.textContent).not.toBe(null);
    });

    it('should display a different test title', () => {
        component.title = 'Lista de contactos';
        fixtureParentComponent.detectChanges();
        expect(el.textContent).toContain('Lista de contactos');
    });
});
*/