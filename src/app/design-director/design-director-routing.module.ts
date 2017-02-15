import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Base
import { DesignsListComponent } from './designs-list.component';

const routes: Routes = [
  {
    path: '',
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignDirectorRoutingModule {}
