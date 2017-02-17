import { NgModule } from '@angular/core';

import { NotFoundComponent } from './not-found.component';
import { InternalServerErrorComponent } from './internal-server-error.component';
import { RegisterComponent } from './register.component';

import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [ PagesRoutingModule ],
  declarations: [
    NotFoundComponent,
    InternalServerErrorComponent,
    RegisterComponent
  ]
})
export class PagesModule { }
