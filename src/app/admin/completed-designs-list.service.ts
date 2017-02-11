import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Rx';

//Interface
import { CompletedDesignsList } from './completed-designs-list';

@Injectable()
export class CompletedDesignsListService {
    private completedDesignsListUrl = 'http://jsonplaceholder.typicode.com/posts';
    
    constructor(private http: Http) {
        //Nothing here
    }

    //Get the json with observables
    getDocuments(): Observable<CompletedDesignsList[]> {
        return this.http.get(this.completedDesignsListUrl)
                        .map((response: Response) => <Document[]>response.json())
                        .catch(this.handleError);
    }

    //sendDocuments(): {}
    
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
