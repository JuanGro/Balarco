import { Pipe, PipeTransform } from '@angular/core';

import { Contact } from './contact';
import { Client } from './../companies-list/client';

@Pipe({ name: 'ClientNameByContactId' })
export class ClientNameByContactId implements PipeTransform {
    transform(items: Client[], args: Contact): any {
        let clientId: string = args.id.toString();
        return items.filter(client => client.id.toString().indexOf(clientId) > -1);
    }
}