var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CanActivateAuthGuard } from '../shared/auth/auth.service';
import { OwnedDesignsListComponent } from './owned-designs-list.component';
var routes = [
    {
        path: '',
        canActivate: [CanActivateAuthGuard],
        data: {
            title: 'Designer'
        },
        children: [
            {
                path: 'owned-designs-list',
                component: OwnedDesignsListComponent,
                data: {
                    title: 'Owned Designs List'
                }
            }
        ]
    }
];
var DesignerRoutingModule = (function () {
    function DesignerRoutingModule() {
    }
    return DesignerRoutingModule;
}());
DesignerRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], DesignerRoutingModule);
export { DesignerRoutingModule };
//# sourceMappingURL=../../../../src/app/designer/designer-routing.module.js.map