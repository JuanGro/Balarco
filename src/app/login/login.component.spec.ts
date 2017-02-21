import {
  TestBed,
  ComponentFixture,
  fakeAsync,
  inject
} from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { HttpService } from '../shared/http-service/http.service';
import { Http, XHRBackend, BrowserXhr, ResponseOptions, BaseRequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { DebugElement } from '@angular/core';

// Components
import { LoginComponent } from './login.component';
import  { LoginComplexFormComponent } from './login.complexform';

describe('Component: LoginComponent', () => {
    let loginComponent: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent, LoginComplexFormComponent], // declare the test component
            imports: [ReactiveFormsModule],
            providers: [ HttpService ],
        });

        const loginFixture = TestBed.createComponent(LoginComponent);
        loginComponent = loginFixture.componentInstance; // LoginComponent test instance
    });

    it('should have a defined component', () => {
        expect(loginComponent).toBeDefined();
    });


});
