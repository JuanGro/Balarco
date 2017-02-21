import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Base
import { CompaniesListComponent } from './companies-list.component';
import { ContactsListComponent } from './contacts-list.component';
import { IgualasListComponent } from './igualas-list.component';
import { DesignsListComponent } from './designs-list.component';

const routes: Routes = [
  {
    path: '',
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
        component: ContactsListComponent,
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
