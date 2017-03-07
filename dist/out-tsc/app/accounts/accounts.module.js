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
import { CompaniesListComponent } from './companies-list.component';
import { ClientsListComponent } from './clients-list.component';
import { IgualasListComponent } from './igualas/igualas-list.component';
import { DesignsListComponent } from './designs-list.component';
import { CanActivateAuthGuard } from '../shared/auth/auth.service';
import { AccountsRoutingModule } from './accounts-routing.module';
var AccountsModule = (function () {
    function AccountsModule() {
    }
    return AccountsModule;
}());
AccountsModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            AccountsRoutingModule,
            ChartsModule,
            DropdownModule,
            ModalModule.forRoot()
        ],
        declarations: [CompaniesListComponent, ClientsListComponent, IgualasListComponent, DesignsListComponent],
        providers: [CanActivateAuthGuard]
    })
], AccountsModule);
export { AccountsModule };
//# sourceMappingURL=../../../../src/app/accounts/accounts.module.js.map