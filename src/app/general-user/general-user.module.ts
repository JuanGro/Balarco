import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ng2-bootstrap/modal';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';

// Components
import { GeneralUserRoutingModule } from './general-user-routing.module';
import { WorksComponent } from './works/works.component';
import { WorksListComponent } from './works/works-list.component';
import { WorkFormComponent } from './works/work-form.component';
import { WorkFilterFormComponent } from './works/work-filter-form.component';

// Datepicker
import { DatepickerModule } from 'ng2-bootstrap/datepicker';
import { SelectModule } from 'ng2-select';

// Services
import { HttpService } from '../shared/http-service/http.service';
import { CanActivateAuthGuard } from '../shared/auth/auth.service';
import { CustomToastService } from '../shared/toast/custom-toast.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GeneralUserRoutingModule,
    ChartsModule,
    DropdownModule,
    ModalModule.forRoot(),
    DatepickerModule.forRoot(),
    SelectModule,
    ToasterModule
  ],
  declarations: [ WorksComponent, WorksListComponent, WorkFormComponent, WorkFilterFormComponent ],

  providers: [ CanActivateAuthGuard, HttpService, CustomToastService ]
})
export class GeneralUserModule { }
