var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
var CanActivateAuthGuard = (function () {
    function CanActivateAuthGuard(router) {
        this.router = router;
    }
    CanActivateAuthGuard.prototype.canActivate = function (route) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            if (route.data['roles']) {
                var roles = route.data['roles'];
                return this.shareAtLeastOneElement(currentUser.roles, roles);
            }
            else {
                return true;
            }
        }
        else {
            this.router.navigate(['/login/login']);
            return false;
        }
    };
    CanActivateAuthGuard.prototype.shareAtLeastOneElement = function (a1, a2) {
        for (var _i = 0, a1_1 = a1; _i < a1_1.length; _i++) {
            var e = a1_1[_i];
            if (a2.indexOf(e) !== -1) {
                return true;
            }
        }
        return false;
    };
    return CanActivateAuthGuard;
}());
CanActivateAuthGuard = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Router])
], CanActivateAuthGuard);
export { CanActivateAuthGuard };
//# sourceMappingURL=../../../../../src/app/shared/auth/auth.service.js.map