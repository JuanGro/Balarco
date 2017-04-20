var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, XHRBackend, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { Role } from '../auth/role';
import { CurrentUser } from '../current-user/current-user-model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
var HttpService = (function (_super) {
    __extends(HttpService, _super);
    function HttpService(backend, defaultOptions, router) {
        var _this = _super.call(this, backend, defaultOptions) || this;
        _this.backend = backend;
        _this.defaultOptions = defaultOptions;
        _this.router = router;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        _this.token = currentUser && currentUser.token;
        return _this;
    }
    HttpService.prototype.request = function (request, options) {
        if (options === void 0) { options = { headers: new Headers() }; }
        this.configureRequest(request, options);
        return this.interceptResponse(request, options);
    };
    HttpService.prototype.configureRequest = function (request, options) {
        if (typeof request === 'string') {
            request = this.getUrl(request);
            this.setHeaders(options);
        }
        else {
            request['url'] = this.getUrl(request['url']);
            this.setHeaders(request);
        }
    };
    HttpService.prototype.interceptResponse = function (request, options) {
        var observableRequest = _super.prototype.request.call(this, request, options).catch(this.onCatch()).finally(this.onFinally());
        return observableRequest;
    };
    HttpService.prototype.getUrl = function (currentUrl) {
        if (!currentUrl.includes('/assets/')) {
            return environment.API_URL + currentUrl;
        }
        else {
            return currentUrl;
        }
    };
    HttpService.prototype.setHeaders = function (objectToSetHeadersTo) {
        var headers = objectToSetHeadersTo.headers;
        headers.set('Content-Type', 'application/json');
        if (this.token) {
            headers.set('Authorization', 'Token ' + this.token);
        }
    };
    HttpService.prototype.onCatch = function () {
        return function (response) {
            if (response.status === 401 || response.status === 403) {
            }
            return Observable.throw(response);
        };
    };
    HttpService.prototype.onFinally = function () {
        return function () { return console.log('FINISH!'); };
    };
    HttpService.prototype.login = function (username, password) {
        var _this = this;
        var user = JSON.stringify({ username: username, password: password });
        return this.post('users/auth/login/', user)
            .map(function (response) {
            var token = response.json() && response.json().token;
            if (token) {
                _this.token = token;
                var currentUser = JSON.stringify({ username: username, token: token });
                localStorage.setItem('currentUser', currentUser);
                return true;
            }
            else {
                return false;
            }
        });
    };
    HttpService.prototype.setUserRoles = function (roleNames) {
        var roles = [];
        for (var _i = 0, roleNames_1 = roleNames; _i < roleNames_1.length; _i++) {
            var roleName = roleNames_1[_i];
            switch (roleName) {
                case 'Director de cuentas':
                    roles.push(Role.DIRECTOR_CUENTAS);
                    break;
                case 'Ejecutivo SR':
                    roles.push(Role.EJECUTIVO_SR);
                    break;
                case 'Ejecutivo JR':
                    roles.push(Role.EJECUTIVO_JR);
                    break;
                case 'Administración':
                    roles.push(Role.ADMINISTRACION);
                    break;
                case 'Director de arte':
                    roles.push(Role.DIRECTOR_ARTE);
                    break;
                case 'Diseñador SR':
                    roles.push(Role.DISENADOR_SR);
                    break;
                case 'Diseñador JR':
                    roles.push(Role.DISENADOR_JR);
                    break;
                case 'Super usuario':
                    roles.push(Role.SUPER_USUARIO);
                    break;
                default:
                    break;
            }
        }
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        currentUser = JSON.stringify({ username: currentUser.username, token: currentUser.token, roles: roles });
        localStorage.setItem('currentUser', currentUser);
    };
    HttpService.prototype.getCurrentUser = function () {
        return new CurrentUser(JSON.parse(localStorage.getItem('currentUser')));
    };
    HttpService.prototype.logout = function () {
        this.token = null;
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login/login']);
    };
    HttpService.prototype.postObject = function (url, object) {
        return this.post(url, object);
    };
    HttpService.prototype.getObject = function (url, params) {
        if (params === void 0) { params = null; }
        return this.get(url, { search: params });
    };
    HttpService.prototype.updateObject = function (url, object) {
        return this.put(url, object);
    };
    HttpService.prototype.deleteObject = function (url) {
        return this.delete(url);
    };
    return HttpService;
}(Http));
HttpService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [XHRBackend,
        RequestOptions,
        Router])
], HttpService);
export { HttpService };
//# sourceMappingURL=../../../../../src/app/shared/http-service/http.service.js.map