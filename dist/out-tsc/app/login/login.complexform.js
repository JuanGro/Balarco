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
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../shared/http-service/http.service';
var LoginComplexFormComponent = (function () {
    function LoginComplexFormComponent(_fb, loginService) {
        this._fb = _fb;
        this.loginService = loginService;
        this.events = [];
    }
    LoginComplexFormComponent.prototype.ngOnInit = function () {
        var emailRegex = '[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?';
        this.loginForm = new FormGroup({
            username: new FormControl('', [Validators.required, Validators.pattern(emailRegex)]),
            password: new FormControl('', [Validators.required, Validators.minLength(6)])
        });
    };
    LoginComplexFormComponent.prototype.submitForm = function (model, isValid) {
        var _this = this;
        this.loginService.login(model.username, model.password).subscribe(function (result) {
            if (result == true) {
                console.log('TOKEN: ' + _this.loginService.token);
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