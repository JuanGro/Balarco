import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ng2-bootstrap/modal';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';

// Router
import { AdminRoutingModule } from './admin-routing.module';

// Pagination
import { NgxPaginationModule } from 'ngx-pagination';

// Components
import { CompletedDesignsListService } from './completed-designs/completed-designs-list.service';
import { CompletedDesignsListComponent } from './completed-designs/completed-designs-list.component';
import { CompletedDesignsListModalComponent } from './completed-designs/completed-designs-list.modal';
import { UsersComponent } from './users/users.component';
import { UserListComponent } from './users/user-list.component';
import { UserFormComponent } from './users/user-form.component';

// Services
import { HttpService } from '../shared/http-service/http.service';
import { CanActivateAuthGuard } from '../shared/auth/auth.service';
import { CustomToastService } from '../shared/toast/custom-toast.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    ChartsModule,
    DropdownModule,
    ModalModule.forRoot(),
    ToasterModule,
    NgxPaginationModule
  ],
  declarations: [ CompletedDesignsListComponent, CompletedDesignsListModalComponent, UsersComponent,
  UserListComponent, UserFormComponent],
  providers: [ CanActivateAuthGuard, HttpService, CustomToastService, CompletedDesignsListService ]
})
export class AdminModule { }
