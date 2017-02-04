import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Base
import { OwnedDesignsListComponent } from './owned-designs-list.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Designer'
    },
    children: [
      {
        path: 'owned-designs-list',
        component: OwnedDesignsListComponent,
        data: {
          title: 'Owned Designs List'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignerRoutingModule {}