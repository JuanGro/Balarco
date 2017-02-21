import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Interface
import { Token } from './token';

// Import RxJs required methods
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {
  private loginUrl: string = 'http://localhost:8000/users/api-login';

  constructor (private http: Http) { }

  sendLoginData(body: Object): Observable<Token> {
    // let bodyString = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.loginUrl, body, options)
                    .map((res: Response) => <Token>res.json())
                    .catch(this.handleError);
  }

  private handleError (error: Response | any) {
      let errMsg: string;
      if ( error instanceof Response) {
          const body = error.json() || '';
          const err = body.error || JSON.stringify(body);
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
          errMsg = error.message ? error.message : error.toString();
      }
      console.error(errMsg);
      return Observable.throw(errMsg);
  }
}
