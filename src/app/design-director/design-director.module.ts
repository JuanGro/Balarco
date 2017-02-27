import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'ng2-bootstrap/modal';

import { DesignsListComponent } from './designs-list.component';
import { DesignDirectorRoutingModule } from './design-director-routing.module';
import { CanActivateAuthGuard } from '../shared/auth/auth.service';

@NgModule({
  imports: [
    CommonModule,
    DesignDirectorRoutingModule,
    ChartsModule,
    DropdownModule,
    ModalModule.forRoot()
  ],
  declarations: [ DesignsListComponent ],
  providers: [ CanActivateAuthGuard ]
})
export class DesignDirectorModule { }
