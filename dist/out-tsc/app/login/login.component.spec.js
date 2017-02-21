import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginComplexFormComponent } from './login.complexform';
import { HttpService } from '../shared/http-service/http.service';
describe('Login Component', function () {
    var comp;
    var fixture;
    var de;
    var el;
    var httpServiceStub;
    var httpService;
    beforeEach(function () {
        httpServiceStub = {
            isLoggedIn: true,
            user: { name: 'Test User' }
        };
        TestBed.configureTestingModule({
            imports: [FormsModule, ReactiveFormsModule],
            declarations: [LoginComponent, LoginComplexFormComponent],
            providers: [{ provide: HttpService, useValue: httpServiceStub }]
        });
        httpService = TestBed.get(HttpService);
        fixture = TestBed.createComponent(LoginComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    });
    it('stub object and injected HttpService should not be the same', function () {
        expect(httpServiceStub === httpService).toBe(false);
        httpServiceStub.isLoggedIn = false;
        expect(httpService.isLoggedIn).toBe(true);
    });
    it('should display original title', function () {
        fixture.detectChanges();
        expect(el.textContent).toContain(comp.title);
    });
});
//# sourceMappingURL=../../../../src/app/login/login.component.spec.js.map