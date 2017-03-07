import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ng2-bootstrap/modal';

// Contacts
import { AccountsRoutingModule } from './accounts-routing.module';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsListTableComponent } from './contacts/contacts-list-table.component';
import { ContactFormComponent } from './contacts/contact-form.component';
import { ClientComponent } from './clients/clients.component';
import { ClientListComponent } from './clients/clients-list.component';
import { ClientFormComponent } from './clients/client-form.component';
import { IgualasListComponent } from './igualas-list/igualas-list.component';
import { DesignsListComponent } from './designs-list/designs-list.component';

// Services
import { HttpService } from '../shared/http-service/http.service';
import { CanActivateAuthGuard } from '../shared/auth/auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AccountsRoutingModule,
    ChartsModule,
    DropdownModule,
    ModalModule.forRoot()
  ],
  declarations: [ ClientComponent, ClientListComponent, ClientFormComponent, ContactsComponent, IgualasListComponent, DesignsListComponent,
  ContactsListTableComponent, ContactFormComponent ],
  providers: [ CanActivateAuthGuard, HttpService ]
})
export class AccountsModule { }
