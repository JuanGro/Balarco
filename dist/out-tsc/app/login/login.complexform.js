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
import { FormBuilder } from '@angular/forms';
import { HttpService } from '../shared/http-service/http.service';
import { Login } from './login';
var LoginComplexFormComponent = (function () {
    function LoginComplexFormComponent(fb, loginService) {
        this.loginService = loginService;
        this.loginObject = new Login();
        this.loginForm = fb.group({
            'username': '',
            'password': ''
        });
        this.login();
    }
    LoginComplexFormComponent.prototype.login = function () {
        this.loginService.login('username', 'password').subscribe(function (result) {
            if (result == true) {
            }
            else {
            }
        });
    };
    return LoginComplexFormComponent;
}());
LoginComplexFormComponent = __decorate([
    Component({
        selector: 'login-complex-form',
        templateUrl: 'login.complexform.html'
    }),
    __metadata("design:paramtypes", [FormBuilder, HttpService])
], LoginComplexFormComponent);
export { LoginComplexFormComponent };
//# sourceMappingURL=../../../../src/app/login/login.complexform.js.map