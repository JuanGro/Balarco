import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Interface
import { ContactsList } from './contacts-list';

@Injectable()
export class ContactsListService {
    private contactsListUrl = './contacts-list.json';

    constructor(private http: Http) {
        // Nothing here
    }

    // Get the json with observables
    getDocuments(): Observable<ContactsList[]> {
        return this.http.get(this.contactsListUrl)
                        .map((response: Response) => <Document[]>response.json())
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
