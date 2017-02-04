import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { CommonModule } from '@angular/common';

import { OwnedDesignsListComponent } from './owned-designs-list.component';
import { DesignerRoutingModule } from './designer-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DesignerRoutingModule,
    ChartsModule,
    DropdownModule
  ],
  declarations: [ OwnedDesignsListComponent ]
})
export class DesignerModule { }
