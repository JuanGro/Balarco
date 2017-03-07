import { TestBed, inject } from '@angular/core/testing';
import { Response, ResponseOptions } from '@angular/http';
// Services
import { ToasterService } from 'angular2-toaster/angular2-toaster';
import { CustomToastService } from './custom-toast.service';

describe('Toast Generic Class', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ CustomToastService, ToasterService ]
    });
  });

  /**
  * Tests type consistance in a 200 response.
  * Tests title override for the toast passing optional param.
  * Tests body for the toast provided by the response.
  **/
  it('success toast should be created in a 200 status response',
      inject([CustomToastService], (testService: CustomToastService) => {
    let body = 'Success test';
    let title = 'Test';
    let options = new ResponseOptions({
      status: 200,
      statusText: body,
    });
    let res = new Response(options);
    let toast = testService.createToast(res, title);
    expect(toast.type).toBe('success');
    expect(toast.title).toBe(title);
    expect(toast.body).toBe(body);
  }));

  /**
  * Tests type consistance in a 201 response.
  * Tests title override for the toast passing optional param.
  * Tests body for the toast provided by the response.
  **/
  it('success toast should be created in a 201 status response',
      inject([CustomToastService], (testService: CustomToastService) => {
    let body = 'Success test';
    let title = 'Test';
    let options = new ResponseOptions({
      status: 201,
      statusText: body,
    });
    let res = new Response(options);
    let toast = testService.createToast(res, title);
    expect(toast.type).toBe('success');
    expect(toast.title).toBe(title);
    expect(toast.body).toBe(body);
  }));

  /**
  * Tests type consistance in a 400 response.
  * Tests title override for the toast passing optional param.
  * Tests body for the toast provided by the response.
  **/
  it('error toast should be created in a 400 status response',
      inject([CustomToastService], (testService: CustomToastService) => {
    let body = 'Error test';
    let title = 'Test';
    let options = new ResponseOptions({
      status: 400,
      statusText: body,
    });
    let res = new Response(options);
    let toast = testService.createToast(res, title);
    expect(toast.type).toBe('error');
    expect(toast.title).toBe(title);
    expect(toast.body).toBe(body);
  }));

  /**
  * Tests type consistance in a 401 response.
  * Tests title override for the toast passing optional param.
  * Tests body for the toast provided by the response.
  **/
  it('error toast should be created in a 401 status response',
      inject([CustomToastService], (testService: CustomToastService) => {
    let body = 'Error test';
    let title = 'Test';
    let options = new ResponseOptions({
      status: 401,
      statusText: body,
    });
    let res = new Response(options);
    let toast = testService.createToast(res, title);
    expect(toast.type).toBe('error');
    expect(toast.title).toBe(title);
    expect(toast.body).toBe(body);
  }));

  /**
  * Tests type consistance in a 0 response.
  * Tests title override for the toast passing optional param.
  * Tests body for the toast provided by the response.
  **/
  it('warning toast should be created in a 0 status response',
      inject([CustomToastService], (testService: CustomToastService) => {
    let options = new ResponseOptions({
      status: 0,
    });
    let res = new Response(options);
    let toast = testService.createToast(res);
    expect(toast.type).toBe('warning');
  }));

  /**
  * Tests use of default titles if no title is provided in the toast constructor.
  * It is tested in all status types supported (200, 201, 400, 401, 0).
  **/
  it('if no title is passed the defaults are used',
      inject([CustomToastService], (testService: CustomToastService) => {
    // Tests toast in status 200
    let options = new ResponseOptions({
      status: 200,
    });
    let res = new Response(options);
    let toast = testService.createToast(res);
    expect(toast.title).toBe(testService.getDefaultTiltles().title_200);

    // Tests toast in status 201
    options = new ResponseOptions({
      status: 201,
    });
    res = new Response(options);
    toast = testService.createToast(res);
    expect(toast.title).toBe(testService.getDefaultTiltles().title_201);

    // Tests toast in status 400
    options = new ResponseOptions({
      status: 400,
    });
    res = new Response(options);
    toast = testService.createToast(res);
    expect(toast.title).toBe(testService.getDefaultTiltles().title_400_401);

    // Tests toast in status 401
    options = new ResponseOptions({
      status: 401,
    });
    res = new Response(options);
    toast = testService.createToast(res);
    expect(toast.title).toBe(testService.getDefaultTiltles().title_400_401);

    // Tests toast in status 0
    options = new ResponseOptions({
      status: 0,
    });
    res = new Response(options);
    toast = testService.createToast(res);
    expect(toast.title).toBe(testService.getDefaultTiltles().title_0);
  }));
});
