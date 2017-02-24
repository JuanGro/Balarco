var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';
export var routes = [
    {
        path: '',
        redirectTo: 'designer/owned-designs-list',
        pathMatch: 'full',
    },
    {
        path: '',
        component: FullLayoutComponent,
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'accounts',
                loadChildren: './accounts/accounts.module#AccountsModule'
            },
            {
                path: 'admin',
                loadChildren: './admin/admin.module#AdminModule'
            },
            {
                path: 'design-director',
                loadChildren: './design-director/design-director.module#DesignDirectorModule'
            },
            {
                path: 'designer',
                loadChildren: './designer/designer.module#DesignerModule'
            }
        ]
    },
    {
        path: 'login',
        component: SimpleLayoutComponent,
        data: {
            title: 'Login'
        },
        children: [
            {
                path: '',
                loadChildren: './login/login.module#LoginModule',
            }
        ]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=../../../src/app/app.routing.js.map