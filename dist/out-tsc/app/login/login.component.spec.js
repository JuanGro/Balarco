import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';
import { LoginComponent } from './login.component';
import { LoginComplexFormComponent } from './login.complexform';
import { HttpService } from '../shared/http-service/http.service';
import { CustomToastService } from '../shared/toast/custom-toast.service';
describe('Login Component', function () {
    var comp;
    var fixture;
    var de;
    var el;
    var httpServiceStub;
    var httpService;
    var mockRouter;
    var navigate;
    beforeEach(function () {
        httpServiceStub = {
            isLoggedIn: true,
            user: { name: 'Test User' }
        };
        mockRouter = {
            navigate: navigate
        };
        TestBed.configureTestingModule({
            imports: [FormsModule, ReactiveFormsModule, ToasterModule],
            declarations: [LoginComponent, LoginComplexFormComponent],
            providers: [
                { provide: HttpService, useValue: httpServiceStub },
                { provide: Router, useValue: mockRouter },
                CustomToastService,
            ]
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
    it('should display a different test title', function () {
        comp.title = 'Test Title';
        fixture.detectChanges();
        expect(el.textContent).toContain('Test Title');
    });
    it('should display updated title after detectChanges', function () {
        comp.title = 'Test Title';
        fixture.detectChanges();
        expect(el.textContent).toContain(comp.title);
    });
});
//# sourceMappingURL=../../../../src/app/login/login.component.spec.js.map