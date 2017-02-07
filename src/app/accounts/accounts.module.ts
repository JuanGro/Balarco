import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'ng2-bootstrap/modal';

import { CompaniesListComponent } from './companies-list.component';
import { ClientsListComponent } from './clients-list.component';
import { IgualasListComponent } from './igualas-list.component';
import { DesignsListComponent } from './designs-list.component';

import { AccountsRoutingModule } from './accounts-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AccountsRoutingModule,
    ChartsModule,
    DropdownModule,
    ModalModule.forRoot()
  ],
  declarations: [ CompaniesListComponent, ClientsListComponent, IgualasListComponent, DesignsListComponent ]
})
export class AccountsModule { }
