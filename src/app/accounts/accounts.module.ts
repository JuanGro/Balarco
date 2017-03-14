import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ng2-bootstrap/modal';

// Components
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { IgualasComponent } from './igualas/igualas.component';
import { IgualasListComponent } from './igualas/igualas-list.component';
import { IgualaFormComponent } from './igualas/iguala-form.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsListComponent } from './contacts/contacts-list.component';
import { ContactFormComponent } from './contacts/contact-form.component';
import { DesignsListComponent } from './designs-list/designs-list.component';

// Contacts
import { AccountsRoutingModule } from './accounts-routing.module';

// Datepicker
import { DatepickerModule } from 'ng2-bootstrap/datepicker';
import { SelectModule } from 'ng2-select';

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
    ModalModule.forRoot(),
    DatepickerModule.forRoot(),
    SelectModule,
  ],
  declarations: [ CompaniesListComponent, IgualasComponent,
                  IgualasListComponent, IgualaFormComponent, DesignsListComponent,
                  ContactsComponent, ContactsListComponent, ContactFormComponent
                ],
  providers: [ CanActivateAuthGuard, HttpService ]
})
export class AccountsModule { }
