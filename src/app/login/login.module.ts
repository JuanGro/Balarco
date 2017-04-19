import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
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
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ToasterModule
  ],
  declarations: [ LoginComponent, LoginComplexFormComponent ],
  providers: [ HttpService, CustomToastService ]
})
export class LoginModule {
  constructor() {

  }
}
