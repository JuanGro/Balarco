import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateAuthGuard } from '../shared/auth/auth.service';
// Components
import { CompletedDesignsListComponent } from './completed-designs-list.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [CanActivateAuthGuard],
    data: {
      title: 'Admin'
    },
    children: [
      {
        path: 'completed-designs-list',
        component: CompletedDesignsListComponent,
        data: {
          title: 'Completed Designs List'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
