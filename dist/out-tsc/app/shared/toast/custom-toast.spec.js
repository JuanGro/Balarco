import { TestBed, inject } from '@angular/core/testing';
import { Response, ResponseOptions } from '@angular/http';
import { CustomToastService } from './custom-toast.service';
import { ToasterService } from 'angular2-toaster/angular2-toaster';
describe('Toast Generic Class', function () {
    var toasterService;
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
            body: body,
        });
        var res = new Response(options);
        var toast = testService.createToast(res, title);
        expect(toast.type).toBe('success');
    }));
});
//# sourceMappingURL=../../../../../src/app/shared/toast/custom-toast.spec.js.map