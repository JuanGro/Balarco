var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ng2-bootstrap/modal';
import { AdminRoutingModule } from './admin-routing.module';
import { CompletedDesignsListService } from './completed-designs-list.service';
import { CompletedDesignsListComponent } from './completed-designs-list.component';
import { CompletedDesignsListModalComponent } from './completed-designs-list.modal';
import { CanActivateAuthGuard } from '../shared/auth/auth.service';
var AdminModule = (function () {
    function AdminModule() {
    }
    return AdminModule;
}());
AdminModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            AdminRoutingModule,
            ChartsModule,
            DropdownModule,
            ModalModule.forRoot()
        ],
        declarations: [CompletedDesignsListComponent, CompletedDesignsListModalComponent],
        providers: [CompletedDesignsListService, CanActivateAuthGuard]
    })
], AdminModule);
export { AdminModule };
//# sourceMappingURL=../../../../src/app/admin/admin.module.js.map