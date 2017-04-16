import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  Http,
  XHRBackend,
  RequestOptions,
  RequestOptionsArgs,
  Headers,
  Request,
  Response,
  URLSearchParams
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { Role } from '../auth/role';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

/**
* Generic class (service) that will manage the construction and configuration
* of all requests from the platform:
* - Builds URL.
* - Configures request.
* - Adds auth token in header of every request.
* - Intercepts response.
* - Manages login / logout with token storage.
**/
@Injectable()
export class HttpService extends Http {
  public token: string;

  constructor(
    private backend: XHRBackend,
    private defaultOptions: RequestOptions,
    private router: Router
  ) {
    super(backend, defaultOptions);
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  /**
  * Overrides base clase method.
  **/
  request(
    request: string | Request,
    options: RequestOptionsArgs = { headers: new Headers()}): Observable<Response> {
    this.configureRequest(request, options);
    // console.log('REQUEST: ' + request);
    return this.interceptResponse(request, options);
  }

  /**
  * Configures request with given arguments.
  * Params:
  *   - request: Request to be configured.
  *   - options: Arguments to be injected in request.
  **/
  private configureRequest(request: string | Request, options: RequestOptionsArgs) {
    if (typeof request === 'string') {
      request = this.getUrl(request);
      this.setHeaders(options);
    } else {
      request['url'] = this.getUrl(request['url']);
      this.setHeaders(request);
    }
  }

  /**
  * Intercepts request's response to return an observable.
  * Params:
  *   - request: Request to be sent.
  *   - options: Arguments for the request sent.
  * Returns:
  *   - Observable with the request's response.
  **/
  private interceptResponse(request: string | Request, options: RequestOptionsArgs): Observable<Response> {
    const observableRequest = super.request(request, options).catch(this.onCatch()).finally(this.onFinally());
    return observableRequest;
  }

  /**
  * Builds the url for the request.
  * Params:
  *   - currentUrl: Segment of the url specifying the web service.
  * Returns:
  *   - string representation of the complete url built.
  **/
  private getUrl(currentUrl: string): string {
    if (!currentUrl.includes('/assets/')) { // Useful in problem with CORS.
      return environment.API_URL + currentUrl;
    } else {
      return currentUrl;
    }
  }

  /**
  * Interceptor set the headers for the request.
  * Params:
  *   - objectToSetHeadersTo: Request or Arguments that will contain the headers.
  **/
  private setHeaders(objectToSetHeadersTo: Request | RequestOptionsArgs) {
    const headers = objectToSetHeadersTo.headers;
    headers.set('Content-Type', 'application/json');
    if (this.token) {
      headers.set('Authorization', 'Token ' + this.token);
    }
  }

  /**
  * Interceptor to catch request errors.
  * If the response contains security (no authorization), then the user will be
  * redirected to the Login page.
  **/
  private onCatch() {
    return (response: Response) => {
      // Security errors
      if (response.status === 401 || response.status === 403) {
        // TODO: Redirect to login to ask credentials
      }
      return Observable.throw(response);
    };
  }

  /**
  * Method that executes after the request has finished.
  **/
  private onFinally() {
    return () => console.log('FINISH!');
  }

  /**
  * Method that authenticates a user sending a request.
  * If the user is authenticated the token returned is stored in Angula's
  * local storage.
  * Params:
  *   - username: Name of user (email).
  *   - password: Password for username.
  * Returns:
  *   - Observable with boolean based on request response.
  **/
  public login(username: string, password: string): Observable<boolean> {
    let user = JSON.stringify({ username: username, password: password });
    return this.post('users/auth/login/', user)
      .map((response: Response) => {
        let token = response.json() && response.json().token;
        if (token) {
          this.token = token;
          let currentUser = JSON.stringify({ username: username, token: token });
          localStorage.setItem('currentUser', currentUser);
          return true;
        } else {
          return false;
        }
      });
  }


  /**
  * Method for storing the current user roles in Angular Local Storage.
  * Params:
  *   - roleNames: Names of the roles received from WS
  **/
  public setUserRoles(roleNames: string[]) {
    let roles: number[] = [];

    for (let roleName of roleNames) {
      switch (roleName) {
        case "Director de cuentas":
          roles.push(Role.DIRECTOR_CUENTAS);
          break;
        case "Ejecutivo":
          roles.push(Role.EJECUTIVO);
          break;
        case "Ventas":
          roles.push(Role.VENTAS);
          break;
        case "Director de arte":
          roles.push(Role.DIRECTOR_ARTE);
          break;
        case "Diseñador SR":
          roles.push(Role.DISENADOR_SR);
          break;
        case "Diseñador JR":
          roles.push(Role.DISENADOR_JR);
          break;
        case "Super usuario":
          roles.push(Role.SUPER_USUARIO);
          break;
        default:
          break;
      }
    }

    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    currentUser = JSON.stringify({ username: currentUser.username, token: currentUser.token, roles: roles });
    localStorage.setItem('currentUser', currentUser);
  }

  /**
  * Method that get the current User roles from Angular Local Storage.
  * Returns:
  *   - Array of number with the id of role (based on Role enum).
  **/
  public getCurrentUserRoles(): number[]{
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser.roles;
  }


  /**
  * Method to finish the current session.
  * Removes token from Angular's local storage.
  **/
  public logout() {
    this.token = null;
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login/login']);
  }

  /**
  * Generic post method.
  * Params:
  *   - url: Url for the request.
  *   - object: Object to be sent and saved in the DB.
  * Returns:
  *   - Observable with the response.
  **/
  public postObject(url: string, object: any): Observable<Response> {
    return this.post(url, object);
  }

  /**
  * Generic get method.
  * Params:
  *   - url: Url for the request.
  *   - params: Params for the request.
  * Returns:
  *   - Observable with the response.
  **/
  public getObject(url: string, params: URLSearchParams = null): Observable<Response> {
    return this.get(url, { search: params });
  }

  /**
  * Generic update method.
  * Params:
  *   - url: Url for the request.
  *   - object: Object to be sent and updated in the DB.
  * Returns:
  *   - Observable with the response.
  **/
  public updateObject(url: string, object: any): Observable<Response> {
    return this.put(url, object);
  }

  /**
  * Generic delete method.
  * Params:
  *   - url: Url for the request.
  * Returns:
  *   - Observable with the response.
  **/
  public deleteObject(url: string): Observable<Response> {
    return this.delete(url);
  }
}
