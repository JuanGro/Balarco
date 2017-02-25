var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CanActivateAuthGuard } from '../shared/auth/auth.service';
import { CompaniesListComponent } from './companies-list.component';
import { ClientsListComponent } from './clients-list.component';
import { IgualasListComponent } from './igualas-list.component';
import { DesignsListComponent } from './designs-list.component';
var routes = [
    {
        path: '',
        canActivate: [CanActivateAuthGuard],
        data: {
            title: 'Accounts'
        },
        children: [
            {
                path: 'companies-list',
                component: CompaniesListComponent,
                data: {
                    title: 'Companies List'
                }
            },
            {
                path: 'clients-list',
                component: ClientsListComponent,
                data: {
                    title: 'Clients List'
                }
            },
            {
                path: 'igualas-list',
                component: IgualasListComponent,
                data: {
                    title: 'Igualas List'
                }
            },
            {
                path: 'designs-list',
                component: DesignsListComponent,
                data: {
                    title: 'Designs List'
                }
            }
        ]
    }
];
var AccountsRoutingModule = (function () {
    function AccountsRoutingModule() {
    }
    return AccountsRoutingModule;
}());
AccountsRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], AccountsRoutingModule);
export { AccountsRoutingModule };
//# sourceMappingURL=../../../../src/app/accounts/accounts-routing.module.js.map