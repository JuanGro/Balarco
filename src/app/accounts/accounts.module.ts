import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ng2-bootstrap/modal';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';

// Components
import { AccountsRoutingModule } from './accounts-routing.module';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsListComponent } from './contacts/contacts-list.component';
import { ContactFormComponent } from './contacts/contact-form.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientsListComponent } from './clients/clients-list.component';
import { ClientFormComponent } from './clients/client-form.component';
import { IgualasListComponent } from './igualas/igualas-list.component';
import { IgualasComponent } from './igualas/igualas.component';
import { IgualaFormComponent } from './igualas/iguala-form.component';
import { DesignsListComponent } from './designs-list/designs-list.component';

// Datepicker
import { DatepickerModule } from 'ng2-bootstrap/datepicker';
import { SelectModule } from 'ng2-select';

// Services
import { HttpService } from '../shared/http-service/http.service';
import { CanActivateAuthGuard } from '../shared/auth/auth.service';
import { CustomToastService } from '../shared/toast/custom-toast.service';

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
    ToasterModule
  ],
  declarations: [ ContactsComponent, IgualasListComponent, IgualasComponent, IgualaFormComponent,
                  DesignsListComponent, ContactsListComponent, ContactFormComponent, ClientsComponent,
                  ClientsListComponent, ClientFormComponent ],

  providers: [ CanActivateAuthGuard, HttpService, CustomToastService ]
})
export class AccountsModule { }
