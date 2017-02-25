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
import { CanActivateAuthGuard } from '../shared/auth/auth.service';
import { OwnedDesignsListComponent } from './owned-designs-list.component';
import { DesignerRoutingModule } from './designer-routing.module';
var DesignerModule = (function () {
    function DesignerModule() {
    }
    return DesignerModule;
}());
DesignerModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            DesignerRoutingModule,
            ChartsModule,
            DropdownModule,
            ModalModule.forRoot()
        ],
        declarations: [OwnedDesignsListComponent],
        providers: [CanActivateAuthGuard]
    })
], DesignerModule);
export { DesignerModule };
//# sourceMappingURL=../../../../src/app/designer/designer.module.js.map