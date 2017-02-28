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

  it('success toast should be created in a 200 status response', inject([CustomToastService], (testService: CustomToastService) => {
    let body = 'Success test';
    let title = 'Test';
    let options = new ResponseOptions({
      status: 200,
      body: body,
    });
    let res = new Response(options);
    let toast = testService.createToast(res, title);
    expect(toast.type).toBe('success');
  }));
});
