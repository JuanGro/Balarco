import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateAuthGuard } from '../shared/auth/auth.service';
// Base
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { ContactsComponent } from './contacts/contacts.component';
import { IgualasListComponent } from './igualas-list/igualas-list.component';
import { DesignsListComponent } from './designs-list/designs-list.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [CanActivateAuthGuard],
    data: {
      title: 'Accounts'
    },
    children: [
      {
        path: 'companies-list',
        component: CompaniesListComponent,
        data: {
          title: 'Companies List'
        }
      },
      {
        path: 'contacts-list',
        component: ContactsComponent,
        data: {
          title: 'Contacts List'
        }
      },
      {
        path: 'igualas-list',
        component: IgualasListComponent,
        data: {
          title: 'Igualas List'
        }
      },
      {
        path: 'designs-list',
        component: DesignsListComponent,
        data: {
          title: 'Designs List'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule {}
