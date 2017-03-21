import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'designer/owned-designs-list', // Mock dashboard route.
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'accounts',
        loadChildren: './accounts/accounts.module#AccountsModule'
      },
      {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule'
      },
      {
        path: 'design-director',
        loadChildren: './design-director/design-director.module#DesignDirectorModule'
      },
      {
        path: 'designer',
        loadChildren: './designer/designer.module#DesignerModule'
      },
      {
        path: 'general-user',
        loadChildren: './general-user/general-user.module#GeneralUserModule'
      }
    ]
  },
  {
    path: 'login',
    component: SimpleLayoutComponent,
    data: {
      title: 'Login'
    },
    children: [
      {
        path: '',
        loadChildren: './login/login.module#LoginModule',
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
