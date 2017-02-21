import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { LoginComplexFormComponent } from './login.complexform';
import { HttpService } from '../shared/http-service/http.service';

describe('Login Component', () => {
  let comp: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let httpServiceStub;
  let httpService;

  beforeEach(() => {

    httpServiceStub = {
      isLoggedIn: true,
      user: { name: 'Test User'}
    };

    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule],
      declarations: [ LoginComponent, LoginComplexFormComponent ],
      providers: [ {provide: HttpService, useValue: httpServiceStub }]
    });

    httpService = TestBed.get(HttpService);

    fixture = TestBed.createComponent(LoginComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });

  /**
  * Tests the mock provider for the test
  **/
  it('stub object and injected HttpService should not be the same', () => {
    expect(httpServiceStub === httpService).toBe(false);

    // Changing the stub object has no effect on the injected service
    httpServiceStub.isLoggedIn = false;
    expect(httpService.isLoggedIn).toBe(true);
  });

  /**
  * Tests the interface creation by the component
  **/
  it('should display original title', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain(comp.title);
  });

});
