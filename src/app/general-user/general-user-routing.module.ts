import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateAuthGuard } from '../shared/auth/auth.service';
// Base
import { WorksComponent } from './works/works.component';
import { AssignmentFilter } from './works/works.component';

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
        component: WorksComponent,
        data: {
          title: 'Works',
          type: AssignmentFilter.ALL_WORKS
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
        component: WorksComponent,
        data: {
          title: 'To Be Paid',
          type: AssignmentFilter.TO_BE_PAID
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
