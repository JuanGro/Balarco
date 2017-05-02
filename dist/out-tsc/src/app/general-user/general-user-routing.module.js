var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CanActivateAuthGuard } from '../shared/auth/auth.service';
import { WorksComponent } from './works/works.component';
import { AssignmentFilter } from './works/works.component';
import { Role } from '../shared/auth/role';
var routes = [
    {
        path: '',
        canActivate: [CanActivateAuthGuard],
        data: {
            title: 'General User'
        },
        children: [
            {
                path: 'works',
                canActivate: [CanActivateAuthGuard],
                component: WorksComponent,
                data: {
                    title: 'Works',
                    type: AssignmentFilter.ALL_WORKS,
                    roles: [Role.SUPER_USUARIO, Role.DIRECTOR_CUENTAS, Role.DIRECTOR_ARTE]
                }
            },
            {
                path: 'my_assignments',
                component: WorksComponent,
                data: {
                    title: 'My Assignments',
                    type: AssignmentFilter.MY_ASSIGNMENTS
                }
            },
            {
                path: 'to_be_paid',
                canActivate: [CanActivateAuthGuard],
                component: WorksComponent,
                data: {
                    title: 'To Be Paid',
                    type: AssignmentFilter.TO_BE_PAID,
                    roles: [Role.SUPER_USUARIO, Role.ADMINISTRACION]
                }
            }
        ]
    }
];
var GeneralUserRoutingModule = (function () {
    function GeneralUserRoutingModule() {
    }
    return GeneralUserRoutingModule;
}());
GeneralUserRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], GeneralUserRoutingModule);
export { GeneralUserRoutingModule };
//# sourceMappingURL=../../../../../src/app/general-user/general-user-routing.module.js.map