import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginComplexFormComponent } from './login.complexform';
import { LoginService } from './login.service';

@NgModule({
  imports: [
    LoginRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ LoginComponent, LoginComplexFormComponent ],
  providers: [ LoginService ]
})
export class LoginModule {
  constructor(){

  }
}
