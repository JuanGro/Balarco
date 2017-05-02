var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { URLSearchParams } from '@angular/http';
import { HttpService } from '../shared/http-service/http.service';
import { CustomToastService } from '../shared/toast/custom-toast.service';
import { Login } from './login';
import { environment } from '../../environments/environment';
var LoginFormComponent = (function () {
    function LoginFormComponent(loginService, router, toaster) {
        this.loginService = loginService;
        this.router = router;
        this.toaster = toaster;
        this.active = true;
        this.titleRecoverPasswordModal = 'Recuperar tu contraseña';
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        this.login = new Login();
    };
    LoginFormComponent.prototype.submitLoginForm = function (model) {
        var _this = this;
        this.loginService.login(model.username, model.password).subscribe(function (result) {
            if (result === true) {
                _this.setCurrentUserRoles(model.username);
            }
        }, function (error) {
            _this.toaster.show(error, 'Error al ingresar', 'Usuario o contraseña incorrectos');
        });
    };
    LoginFormComponent.prototype.setCurrentUserRoles = function (username) {
        var _this = this;
        var params = new URLSearchParams();
        params.set('username', username);
        this.loginService.getObject(environment.USERS_URL, params)
            .map(function (data) { return data.json(); })
            .subscribe(function (usersList) {
            if (usersList.length === 1) {
                var groupNames = [];
                for (var _i = 0, _a = usersList[0].groups_complete; _i < _a.length; _i++) {
                    var group = _a[_i];
                    groupNames.push(group.name);
                }
                _this.loginService.setUserInfo(groupNames, usersList[0].id, usersList[0].first_name, usersList[0].last_name);
                _this.router.navigateByUrl('designer/owned-designs-list');
            }
        });
    };
    return LoginFormComponent;
}());
LoginFormComponent = __decorate([
    Component({
        selector: 'login-form',
        templateUrl: 'login-form.component.html'
    }),
    __metadata("design:paramtypes", [HttpService, Router, CustomToastService])
], LoginFormComponent);
export { LoginFormComponent };
//# sourceMappingURL=../../../../../src/app/login/login-form.component.js.map