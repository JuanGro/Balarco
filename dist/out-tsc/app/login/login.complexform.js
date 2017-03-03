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
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../shared/http-service/http.service';
import { CustomToastService } from '../shared/toast/custom-toast.service';
var LoginComplexFormComponent = (function () {
    function LoginComplexFormComponent(loginService, router, toaster) {
        this.loginService = loginService;
        this.router = router;
        this.toaster = toaster;
        this.events = [];
    }
    LoginComplexFormComponent.prototype.ngOnInit = function () {
        var emailRegex = '[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`\
                      {|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?';
        this.loginForm = new FormGroup({
            username: new FormControl('', [Validators.required, Validators.pattern(emailRegex)]),
            password: new FormControl('', [Validators.required, Validators.minLength(6)])
        });
    };
    LoginComplexFormComponent.prototype.submitForm = function (model) {
        var _this = this;
        this.loginService.login(model.username, model.password).subscribe(function (result) {
            if (result === true) {
                _this.router.navigateByUrl('designer/owned-designs-list');
            }
        }, function (error) {
            _this.toaster.show(error, 'Error al ingresar', 'Usuario o contraseña incorrectos');
        });
    };
    return LoginComplexFormComponent;
}());
LoginComplexFormComponent = __decorate([
    Component({
        selector: 'login-complex-form',
        templateUrl: 'login.complexform.html'
    }),
    __metadata("design:paramtypes", [HttpService, Router, CustomToastService])
], LoginComplexFormComponent);
export { LoginComplexFormComponent };
//# sourceMappingURL=../../../../src/app/login/login.complexform.js.map