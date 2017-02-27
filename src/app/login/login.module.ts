import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginComplexFormComponent } from './login.complexform';
import { HttpService } from '../shared/http-service/http.service';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';
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
