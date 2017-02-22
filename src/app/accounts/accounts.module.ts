import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'ng2-bootstrap/modal';

// Contacts
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsListTableComponent } from './contacts-list/contacts-list-table.component';
import { ContactsListFormComponent } from './contacts-list/contacts-list-form.component';

import { CompaniesListComponent } from './companies-list/companies-list.component';
import { IgualasListComponent } from './igualas-list/igualas-list.component';
import { DesignsListComponent } from './designs-list/designs-list.component';

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
  ContactsListTableComponent, ContactsListFormComponent ]
})
export class AccountsModule { }
