import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'ng2-bootstrap/modal';

import { CompaniesListComponent } from './companies-list/companies-list.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { IgualasListComponent } from './igualas-list/igualas-list.component';
import { DesignsListComponent } from './designs-list/designs-list.component';

// import { CompaniesListModalComponent } from './companies-list/companies-list.modal';
import { ContactsListTableComponent } from './contacts-list/contacts-list.table';
// import { IgualasListModalComponent } from './igualas-list/igualas-list.modal';
// import { DesignsListModalComponent } from './designs-list/designs-list.modal';

import { AccountsRoutingModule } from './accounts-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AccountsRoutingModule,
    ChartsModule,
    DropdownModule,
    ModalModule.forRoot()
  ],
  declarations: [ CompaniesListComponent, ContactsListComponent, IgualasListComponent, DesignsListComponent, 
  ContactsListTableComponent ]
})
export class AccountsModule { }
