import { TestBed, inject, async } from '@angular/core/testing';
import { Response, ResponseOptions } from '@angular/http';
import { CustomToastService } from './custom-toast.service';
import { ToasterService } from 'angular2-toaster/angular2-toaster';

describe('Toast Generic Class', () => {
  let toasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ CustomToastService, ToasterService ]
    });
  });

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

  it('warning toast should be created in a 0 status response',
      inject([CustomToastService], (testService: CustomToastService) => {
    let options = new ResponseOptions({
      status: 0,
    });
    let res = new Response(options);
    let toast = testService.createToast(res);
    expect(toast.type).toBe('warning');
  }));
});
