var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found.component';
import { InternalServerErrorComponent } from './internal-server-error.component';
import { RegisterComponent } from './register.component';
var routes = [
    {
        path: '',
        data: {
            title: 'Example Pages'
        },
        children: [
            {
                path: 'notfound',
                component: NotFoundComponent,
                data: {
                    title: 'Page 404'
                }
            },
            {
                path: 'internalservererror',
                component: InternalServerErrorComponent,
                data: {
                    title: 'Page 500'
                }
            },
            {
                path: 'register',
                component: RegisterComponent,
                data: {
                    title: 'Register Page'
                }
            }
        ]
    }
];
var PagesRoutingModule = (function () {
    function PagesRoutingModule() {
    }
    return PagesRoutingModule;
}());
PagesRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], PagesRoutingModule);
export { PagesRoutingModule };
//# sourceMappingURL=../../../../src/app/pages/pages-routing.module.js.map