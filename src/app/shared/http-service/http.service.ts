import { Injectable } from '@angular/core';
import {
  Http,
  XHRBackend,
  RequestOptions,
  RequestOptionsArgs,
  Headers,
  Request,
  Response
} from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService extends Http {
  // This should be in environment variables
  public apiUrl = 'http://127.0.0.1:8000/'

  constructor(
    backend: XHRBackend,
    defaultOptions: RequestOptions,
    //private router: Router,
    //private userStore: SessionStoreService
  ) {
    super(backend, defaultOptions);

  }

  request(
    request: string | Request,
    options: RequestOptionsArgs = { headers: new Headers()}): Observable<Response> {
    this.configureRequest(request, options);
    return this.interceptResponse(request, options);
  }

  private configureRequest(request: string | Request, options: RequestOptionsArgs) {
    if (typeof request === 'string') {
      request = this.getUrl(request);
      this.setHeaders(options);
    } else {
      request['url'] = this.getUrl(request['url']);
      this.setHeaders(request);
    }
  }

  private interceptResponse(request: string | Request, options: RequestOptionsArgs): Observable<Response> {
    const observableRequest = super.request(request, options).catch(this.onCatch()).finally(this.onFinally());
    return observableRequest;
  }

  private getUrl(currentUrl) {
    return this.apiUrl + currentUrl;
  }

  private setHeaders(objectToSetHeadersTo: Request | RequestOptionsArgs) {
    const headers = objectToSetHeadersTo.headers;
    headers.set('Content-Type', 'application/json');
  }

  private onCatch() {
    return (res: Response) => {
      // Security errors
      if (res.status == 401 || res.status == 403) {
        // TODO: Redirect to login to ask credentials
      }
      return Observable.throw(res);
    };
  }

  private onFinally() {
    return () => console.log('FINISH!');
  }
}
