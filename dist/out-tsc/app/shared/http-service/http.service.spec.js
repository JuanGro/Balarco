import { TestBed, inject, async } from '@angular/core/testing';
import { HttpModule, XHRBackend, Response } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { ResponseOptions } from '@angular/http';
import { HttpService } from './http.service';
describe('HttpService', function () {
    var setUpResponseBody = function (backend, body, status) {
        if (status === void 0) { status = 200; }
        backend.connections.subscribe(function (connection) {
            var responseOptions = new ResponseOptions({
                body: body,
                status: status
            });
            var response = new Response(responseOptions);
            if (status >= 200 && status <= 299) {
                setTimeout(function () {
                    connection.mockRespond(response);
                }, 10);
            }
            else {
                connection.mockError();
            }
        });
    };
    beforeEach(function () {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                { provide: XHRBackend, useClass: MockBackend },
                HttpService
            ]
        });
    });
    it('authenticates the user if backend returns user token', async(inject([XHRBackend, HttpService], function (mockBackend, httpService) {
        setUpResponseBody(mockBackend, { token: 'valid_token' }, 200);
        httpService.login('juan@gmail.com', 'juanjuan').subscribe(function (result) {
            expect(result).toBe(true);
            console.log('Success', result);
            httpService.logout();
        });
    })));
    it('does not authenticate the user if the backend returns an error', async(inject([XHRBackend, HttpService], function (mockBackend, httpService) {
        var options = new ResponseOptions({
            body: { error: 'somedata' },
            status: 401
        });
        setUpResponseBody(mockBackend, options);
        httpService.logout();
        httpService.login('test@test.com', '123').subscribe(function (result) {
            expect(result).toBe(false);
        });
    })));
});
//# sourceMappingURL=../../../../../src/app/shared/http-service/http.service.spec.js.map