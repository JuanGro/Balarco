import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateAuthGuard } from '../shared/auth/auth.service';
// Base
import { DesignsListComponent } from './designs-list.component';
import { AssignmentsComponent } from './assignments/assignments.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [CanActivateAuthGuard],
    data: {
      title: 'DesignDirector'
    },
    children: [
      {
        path: 'designs-list',
        component: DesignsListComponent,
        data: {
          title: 'Designs List'
        }
      },
      {
        path: 'assignments',
        component: AssignmentsComponent,
        data: {
          title: 'Assignments'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignDirectorRoutingModule {}
