import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';
// Components
import { LoginComponent } from './login.component';
import { LoginComplexFormComponent } from './login.complexform';
// Services
import { HttpService } from '../shared/http-service/http.service';
import { CustomToastService } from '../shared/toast/custom-toast.service';


describe('Login Component', () => {
  let comp: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let httpServiceStub;
  let httpService;
  let mockRouter;
  let navigate;

  beforeEach(() => {

    // Mock service, avoids requirements in providing all HttpService dependencies.
    httpServiceStub = {
      isLoggedIn: true,
      user: { name: 'Test User'}
    };

    // Mock provider for Router
    mockRouter = {
      //noinspection TypeScriptUnresolvedFunction
      navigate = jasmine.createSpy('navigate');
    };

    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule, ToasterModule],
      declarations: [ LoginComponent, LoginComplexFormComponent ],
      providers: [
        {provide: HttpService, useValue: httpServiceStub },
        {provide: Router, useValue: mockRouter },
        CustomToastService,
      ]
    });

    // UserService actually injected into the component
    httpService = TestBed.get(HttpService);

    fixture = TestBed.createComponent(LoginComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });

  /**
  * Tests the mock provider for the test.
  **/
  it('stub object and injected HttpService should not be the same', () => {
    expect(httpServiceStub === httpService).toBe(false);

    // Changing the stub object has no effect on the injected service.
    httpServiceStub.isLoggedIn = false;
    expect(httpService.isLoggedIn).toBe(true);
  });

  /**
  * Tests the interface consistance with LoginComponent.
  **/
  it('should display original title', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain(comp.title);
  });

  /**
  * Tests changes in component reflects in interface.
  **/
  it('should display a different test title', () => {
    comp.title = 'Test Title';
    fixture.detectChanges();
    expect(el.textContent).toContain('Test Title');
  });

  /**
  * Tests changes in component reflects in interface and component changes kept.
  **/
  it('should display updated title after detectChanges', () => {
    comp.title = 'Test Title';
    fixture.detectChanges(); // detect changes explicitly
    expect(el.textContent).toContain(comp.title);
  });

});
