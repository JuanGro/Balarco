import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ng2-bootstrap/modal';

//Router
import { AdminRoutingModule } from './admin-routing.module';

//Components
import { CompletedDesignsListService } from './completed-designs-list.service';
import { CompletedDesignsListComponent } from './completed-designs-list.component';
import { CompletedDesignsListModal } from './completed-designs-list.modal';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ChartsModule,
    DropdownModule,
    ModalModule.forRoot()
  ],
  declarations: [ CompletedDesignsListComponent, CompletedDesignsListModal ],
  providers: [ CompletedDesignsListService ]
})
export class AdminModule { }
