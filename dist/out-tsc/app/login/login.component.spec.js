import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpService } from '../shared/http-service/http.service';
import { LoginComponent } from './login.component';
import { LoginComplexFormComponent } from './login.complexform';
describe('Component: LoginComponent', function () {
    var loginComponent;
    var fixture;
    beforeEach(function () {
        TestBed.configureTestingModule({
            declarations: [LoginComponent, LoginComplexFormComponent],
            imports: [ReactiveFormsModule],
            providers: [HttpService],
        });
        var loginFixture = TestBed.createComponent(LoginComponent);
        loginComponent = loginFixture.componentInstance;
    });
    it('should have a defined component', function () {
        expect(loginComponent).toBeDefined();
    });
});
//# sourceMappingURL=../../../../src/app/login/login.component.spec.js.map