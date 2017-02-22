import { TestBed, inject, async } from '@angular/core/testing';
import { HttpModule, XHRBackend, Response } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { ResponseOptions } from '@angular/http';
import { HttpService } from './http.service';

describe('HttpService', () => {
  const setUpResponseBody: Function = (backend, body, status = 200) => {
    backend.connections.subscribe(
      (connection: MockConnection) => {
        let responseOptions: ResponseOptions = new ResponseOptions({
          body: body,
          status: status
        });
        let response: Response = new Response(responseOptions);
        if (status >= 200 && status <= 299) {
          setTimeout(() => {
            connection.mockRespond(response);
          }, 10);
        } else {
          connection.mockError();
        }
      }
    );
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [
        { provide: XHRBackend, useClass: MockBackend },
        HttpService
      ]
    });
  });

  it('authenticates the user if backend returns user token',
    async(inject([XHRBackend, HttpService], (mockBackend, httpService) => {
      setUpResponseBody(mockBackend, { token: 'valid_token' }, 200);
      httpService.login('juan@gmail.com', 'juanjuan').subscribe(result => {
        expect(result).toBe(true);
        console.log('Success', result);
        httpService.logout();
      });
    })));

  it('does not authenticate the user if the backend returns an error',
    async(inject([XHRBackend, HttpService], (mockBackend, httpService) => {
      let options = new ResponseOptions({
                  body: {error: 'somedata'},
                  status: 401
                });
      setUpResponseBody(mockBackend, options);
      httpService.logout();
      httpService.login('test@test.com', '123').subscribe(result => {
        expect(result).toBe(false);
      });
    })));
});
