import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginComplexFormComponent } from './login.complexform';
import { HttpService } from '../shared/http-service/http.service';
import { CanActivateAuthGuard } from '../shared/auth/auth.service';

@NgModule({
  imports: [
    LoginRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ LoginComponent, LoginComplexFormComponent ],
  providers: [ HttpService, CanActivateAuthGuard ]
})
export class LoginModule {
  constructor() {

  }
}
