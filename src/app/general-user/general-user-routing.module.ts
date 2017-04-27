import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateAuthGuard } from '../shared/auth/auth.service';
// Base
import { WorksComponent } from './works/works.component';
import { AssignmentFilter } from './works/works.component';

// Enum
import { Role } from '../shared/auth/role';


const routes: Routes = [
  {
    path: '',
    canActivate: [CanActivateAuthGuard],
    data: {
      title: 'General User'
    },
    children: [
      {
        path: 'works',
        canActivate: [CanActivateAuthGuard],
        component: WorksComponent,
        data: {
          title: 'Works',
          type: AssignmentFilter.ALL_WORKS,
          roles: [ Role.SUPER_USUARIO, Role.DIRECTOR_CUENTAS, Role.DIRECTOR_ARTE ]
        }
      },
      {
        path: 'my_assignments',
        component: WorksComponent,
        data: {
          title: 'My Assignments',
          type: AssignmentFilter.MY_ASSIGNMENTS
        }
      },
      {
        path: 'to_be_paid',
        canActivate: [CanActivateAuthGuard],
        component: WorksComponent,
        data: {
          title: 'To Be Paid',
          type: AssignmentFilter.TO_BE_PAID,
          roles: [ Role.SUPER_USUARIO, Role.ADMINISTRACION ]
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralUserRoutingModule {}
