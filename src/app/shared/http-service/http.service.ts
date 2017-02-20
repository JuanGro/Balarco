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

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpService extends Http {
  // TODO: This should be in environment variables
  public apiUrl = 'http://localhost:8000/';
  public token: string;

  constructor(
    backend: XHRBackend,
    defaultOptions: RequestOptions,
    // TODO: Define user token sessions variable
  ) {
    super(backend, defaultOptions);
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  /**
  * Overrides base clase method
  **/
  request(
    request: string | Request,
    options: RequestOptionsArgs = { headers: new Headers()}): Observable<Response> {
    this.configureRequest(request, options);
    return this.interceptResponse(request, options);
  }

  private configureRequest(request: string | Request, options: RequestOptionsArgs) {
    console.log('CONFIGURING REQUEST!');
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

  /**
  * Useful in problems with CORS
  **/
  private getUrl(currentUrl) {
    if (!currentUrl.includes('/assets/')) {
      return this.apiUrl + currentUrl;
    } else {
      return currentUrl;
    }
  }

  /**
  * Interceptor to build headers in each request
  **/
  private setHeaders(objectToSetHeadersTo: Request | RequestOptionsArgs) {
    const headers = objectToSetHeadersTo.headers;
    headers.set('Content-Type', 'application/json');
  }

  /**
  * Interceptor for general errors catch
  **/
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

  login(username: string, password: string): Observable<boolean> {
    let user = JSON.stringify({ username: username, password: password });
    return this.post('users/api-login/', user)
      .map((response: Response) => {
        let token = response.json() && response.json().token;
        if (token) {
          this.token = token;
          localStorage.setItem('currentUser', user);
          return true;
        } else {
          return false;
        }
      });
  }

  logout() {
    this.token = null;
    localStorage.removeItem('currentUser');
  }

  postObject(url: string, object: any): Observable<Response> {
    return this.post(url, object);
  }
}
