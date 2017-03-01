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
import { ToasterService } from 'angular2-toaster/angular2-toaster';
var CustomToastService = (function () {
    function CustomToastService(toasterService) {
        this.toasterService = toasterService;
        this.DefaultTitles = {
            title_200: 'Operación Exitosa',
            title_201: 'Objeto Creado',
            title_400_401: 'Operación Fallida',
            title_0: 'No hay conexión'
        };
    }
    CustomToastService.prototype.createToast = function (response, title, message) {
        var type;
        switch (response.status) {
            case 200:
                if (!title) {
                    title = this.DefaultTitles.title_200;
                }
                type = 'success';
                message = response.statusText;
                break;
            case 201:
                if (!title) {
                    title = this.DefaultTitles.title_201;
                }
                type = 'success';
                message = response.statusText;
                break;
            case 400:
            case 401:
                if (!title) {
                    title = this.DefaultTitles.title_400_401;
                }
                if (!message) {
                    message = response.statusText;
                }
                type = 'error';
                break;
            case 0:
                title = this.DefaultTitles.title_0;
                message = 'No es posible realizar conexión con servidor';
                type = 'warning';
                break;
            default:
                title = message = type = '';
                console.log('No status supported for toast: STATUS ' + response.status);
                break;
        }
        var toast = {
            type: type,
            title: title,
            body: message,
            showCloseButton: false
        };
        return toast;
    };
    CustomToastService.prototype.show = function (response, title, message) {
        var toast = this.createToast(response, title, message);
        console.log(toast.title);
        this.toasterService.pop(toast);
    };
    CustomToastService.prototype.getDefaultTiltles = function () {
        return this.DefaultTitles;
    };
    return CustomToastService;
}());
CustomToastService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ToasterService])
], CustomToastService);
export { CustomToastService };
//# sourceMappingURL=../../../../../src/app/shared/toast/custom-toast.service.js.map