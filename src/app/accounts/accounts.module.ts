import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'ng2-bootstrap/modal';

import { CompaniesListComponent } from './companies-list.component';
import { ClientsListComponent } from './clients-list.component';
import { IgualasComponent } from './igualas/igualas.component';
import { IgualasListComponent } from './igualas/igualas-list.component';
import { IgualaFormComponent } from './igualas/iguala-form.component';
import { DesignsListComponent } from './designs-list.component';
import { CanActivateAuthGuard } from '../shared/auth/auth.service';
import { AccountsRoutingModule } from './accounts-routing.module';
import { HttpService } from '../shared/http-service/http.service';
// Datepicker
import { DatepickerModule } from 'ng2-bootstrap/datepicker';
import { SelectModule } from 'ng2-select';

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
  declarations: [ CompaniesListComponent, ClientsListComponent, IgualasComponent, IgualasListComponent, IgualaFormComponent, DesignsListComponent ],
  providers: [ CanActivateAuthGuard, HttpService ]
})
export class AccountsModule { }
