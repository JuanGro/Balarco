import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ng2-bootstrap/modal';

// Modules
import { LoginRoutingModule } from './login-routing.module';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';

// Components
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form.component';
import { RecoverPasswordFormComponent } from './recover-password-form.component';

// Services
import { HttpService } from '../shared/http-service/http.service';
import { CustomToastService } from '../shared/toast/custom-toast.service';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ToasterModule,
    ModalModule.forRoot(),
  ],
  declarations: [ LoginComponent, LoginFormComponent, RecoverPasswordFormComponent ],
  providers: [ HttpService, CustomToastService ]
})
export class LoginModule {}
