import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateAuthGuard } from '../shared/auth/auth.service';
// Base
import { ClientsComponent } from './clients/clients.component';
import { ContactsComponent } from './contacts/contacts.component';
import { IgualasComponent } from './igualas/igualas.component';
import { DesignsListComponent } from './designs-list/designs-list.component';
// Enum
import { Role } from '../shared/auth/role';

const routes: Routes = [
  {
    path: '',
    canActivate: [CanActivateAuthGuard],
    data: {
      title: 'Accounts',
      roles: [ Role.DIRECTOR_CUENTAS, Role.SUPER_USUARIO ]
    },
    children: [
      {
        path: 'clients-list',
        component: ClientsComponent,
        data: {
          title: 'Clients List'
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
        component: IgualasComponent,
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
