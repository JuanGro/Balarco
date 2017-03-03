import { TestBed, inject } from '@angular/core/testing';
import { Response, ResponseOptions } from '@angular/http';
import { ToasterService } from 'angular2-toaster/angular2-toaster';
import { CustomToastService } from './custom-toast.service';
describe('Toast Generic Class', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [CustomToastService, ToasterService]
        });
    });
    it('success toast should be created in a 200 status response', inject([CustomToastService], function (testService) {
        var body = 'Success test';
        var title = 'Test';
        var options = new ResponseOptions({
            status: 200,
            statusText: body,
        });
        var res = new Response(options);
        var toast = testService.createToast(res, title);
        expect(toast.type).toBe('success');
        expect(toast.title).toBe(title);
        expect(toast.body).toBe(body);
    }));
    it('success toast should be created in a 201 status response', inject([CustomToastService], function (testService) {
        var body = 'Success test';
        var title = 'Test';
        var options = new ResponseOptions({
            status: 201,
            statusText: body,
        });
        var res = new Response(options);
        var toast = testService.createToast(res, title);
        expect(toast.type).toBe('success');
        expect(toast.title).toBe(title);
        expect(toast.body).toBe(body);
    }));
    it('error toast should be created in a 400 status response', inject([CustomToastService], function (testService) {
        var body = 'Error test';
        var title = 'Test';
        var options = new ResponseOptions({
            status: 400,
            statusText: body,
        });
        var res = new Response(options);
        var toast = testService.createToast(res, title);
        expect(toast.type).toBe('error');
        expect(toast.title).toBe(title);
        expect(toast.body).toBe(body);
    }));
    it('error toast should be created in a 401 status response', inject([CustomToastService], function (testService) {
        var body = 'Error test';
        var title = 'Test';
        var options = new ResponseOptions({
            status: 401,
            statusText: body,
        });
        var res = new Response(options);
        var toast = testService.createToast(res, title);
        expect(toast.type).toBe('error');
        expect(toast.title).toBe(title);
        expect(toast.body).toBe(body);
    }));
    it('warning toast should be created in a 0 status response', inject([CustomToastService], function (testService) {
        var options = new ResponseOptions({
            status: 0,
        });
        var res = new Response(options);
        var toast = testService.createToast(res);
        expect(toast.type).toBe('warning');
    }));
    it('if no title is passed the defaults are used', inject([CustomToastService], function (testService) {
        var options = new ResponseOptions({
            status: 200,
        });
        var res = new Response(options);
        var toast = testService.createToast(res);
        expect(toast.title).toBe(testService.getDefaultTiltles().title_200);
        options = new ResponseOptions({
            status: 201,
        });
        res = new Response(options);
        toast = testService.createToast(res);
        expect(toast.title).toBe(testService.getDefaultTiltles().title_201);
        options = new ResponseOptions({
            status: 400,
        });
        res = new Response(options);
        toast = testService.createToast(res);
        expect(toast.title).toBe(testService.getDefaultTiltles().title_400_401);
        options = new ResponseOptions({
            status: 401,
        });
        res = new Response(options);
        toast = testService.createToast(res);
        expect(toast.title).toBe(testService.getDefaultTiltles().title_400_401);
        options = new ResponseOptions({
            status: 0,
        });
        res = new Response(options);
        toast = testService.createToast(res);
        expect(toast.title).toBe(testService.getDefaultTiltles().title_0);
    }));
});
//# sourceMappingURL=../../../../../src/app/shared/toast/custom-toast.spec.js.map