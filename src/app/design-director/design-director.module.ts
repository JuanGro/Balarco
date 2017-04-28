import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ng2-bootstrap/modal';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';

// Components
import { DesignsListComponent } from './designs-list.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AssignmentsListComponent } from './assignments/assignment-list.component';
import { AssignmentFormComponent } from './assignments/assignment-form.component';

// Module
import { DesignDirectorRoutingModule } from './design-director-routing.module';

// Datepicker
import { DatepickerModule } from 'ng2-bootstrap/datepicker';

// Ng-select
import { SelectModule } from 'ng2-select';

// Services
import { HttpService } from '../shared/http-service/http.service';
import { CanActivateAuthGuard } from '../shared/auth/auth.service';
import { CustomToastService } from '../shared/toast/custom-toast.service';

// Pagination
import { NgxPaginationModule } from 'ngx-pagination';

// Pipes
import { CalculateDeliveryDatePipe } from './assignments/assignments-dates-format-table.pipe';

@NgModule({
  imports: [
    CommonModule,
    DesignDirectorRoutingModule,
    FormsModule,
    ChartsModule,
    NgxPaginationModule,
    DropdownModule,
    ModalModule.forRoot(),
    DatepickerModule.forRoot(),
    SelectModule,
    ToasterModule
  ],
  declarations: [ DesignsListComponent, AssignmentsComponent, AssignmentsListComponent,
                  AssignmentFormComponent, CalculateDeliveryDatePipe ],
  providers: [ CanActivateAuthGuard, HttpService, CustomToastService ]
})
export class DesignDirectorModule { }
