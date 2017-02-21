import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { LoginComponent } from './login.component';
describe('Component: LoginComponent', function () {
    var component;
    var fixture;
    var de;
    var el;
    beforeEach(function () {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [ReactiveFormsModule]
        });
        var fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    });
    it('should have a defined component', function () {
        expect(component).toBeDefined();
    });
    it('should display original title', function () {
        expect(el.textContent).toContain(component.title);
    });
    it('should still see original title after comp.title change', function () {
        var oldTitle = component.title;
        component.title = 'Test Title';
        expect(el.textContent).toContain(oldTitle);
    });
    it('should display updated title after detectChanges', function () {
        component.title = 'Test Title';
        fixture.detectChanges();
        expect(el.textContent).toContain(component.title);
    });
});
//# sourceMappingURL=../../../../src/app/login/login.component.spec.js.map