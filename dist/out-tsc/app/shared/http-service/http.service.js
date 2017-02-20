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
import { Http, XHRBackend, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
var HttpService = (function (_super) {
    __extends(HttpService, _super);
    function HttpService(backend, defaultOptions) {
        var _this = _super.call(this, backend, defaultOptions) || this;
        _this.apiUrl = 'http://127.0.0.1:8000/';
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
        return this.apiUrl + currentUrl;
    };
    HttpService.prototype.setHeaders = function (objectToSetHeadersTo) {
        var headers = objectToSetHeadersTo.headers;
        headers.set('Content-Type', 'application/json');
    };
    HttpService.prototype.onCatch = function () {
        return function (res) {
            if (res.status == 401 || res.status == 403) {
            }
            return Observable.throw(res);
        };
    };
    HttpService.prototype.onFinally = function () {
        return function () { return console.log('FINISH!'); };
    };
    return HttpService;
}(Http));
HttpService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [XHRBackend,
        RequestOptions])
], HttpService);
export { HttpService };
//# sourceMappingURL=../../../../../src/app/shared/http-service/http.service.js.map