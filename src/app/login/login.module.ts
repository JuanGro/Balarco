import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// Modules
import { LoginRoutingModule } from './login-routing.module';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';
// Components
import { LoginComponent } from './login.component';
import { LoginComplexFormComponent } from './login.complexform';
// Services
import { HttpService } from '../shared/http-service/http.service';
import { CustomToastService } from '../shared/toast/custom-toast.service';

@NgModule({
  imports: [
    LoginRoutingModule,
    ReactiveFormsModule,
    ToasterModule
  ],
  declarations: [ LoginComponent, LoginComplexFormComponent ],
  providers: [ HttpService, CustomToastService ]
})
export class LoginModule {
  constructor() {

  }
}
