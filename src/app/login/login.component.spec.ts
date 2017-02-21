import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

// Components
import { LoginComponent } from './login.component';

describe('Component: LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent], // declare the test component
            imports: [ReactiveFormsModule]
        });

        const fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance; // LoginComponent test instance
        de = fixture.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    });

    it('should have a defined component', () => {
        expect(component).toBeDefined();
    });

    it('should display original title', () => {
      expect(el.textContent).toContain(component.title);
    });

    it('should still see original title after comp.title change', () => {
      const oldTitle = component.title;
      component.title = 'Test Title';
      expect(el.textContent).toContain(oldTitle);
    });

    it('should display updated title after detectChanges', () => {
      component.title = 'Test Title';
      fixture.detectChanges(); // detect changes explicitly
      expect(el.textContent).toContain(component.title);
    });

});
