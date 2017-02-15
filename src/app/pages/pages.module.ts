import { NgModule } from '@angular/core';

import { NotFoundComponent } from './not-found.component';
import { InternalServerErrorComponent } from './internal-server-error.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [ PagesRoutingModule ],
  declarations: [
    NotFoundComponent,
    InternalServerErrorComponent,
    LoginComponent,
    RegisterComponent
  ]
})
export class PagesModule { }
