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
    }
    CustomToastService.prototype.showWithMessage = function (success, message, title) {
        if (success) {
            if (!title) {
                title = 'Operación Exitosa';
            }
            this.toasterService.pop('success', title, message);
        }
        else {
            if (!title) {
                title = 'Operación Fallida';
            }
            this.toasterService.pop('error', title, message);
        }
    };
    CustomToastService.prototype.show = function (response, title, message) {
        switch (response.status) {
            case 200:
                if (!title) {
                    title = 'Operación Exitosa';
                }
                this.toasterService.pop('success', title, response.statusText);
                break;
            case 201:
                if (!title) {
                    title = 'Objeto Creado';
                }
                this.toasterService.pop('success', title, response.statusText);
                break;
            case 400 || 401:
                if (!title) {
                    title = 'Operación Fallida';
                }
                if (message) {
                    this.toasterService.pop('error', title, message);
                }
                else {
                    this.toasterService.pop('error', title, response.statusText);
                }
                break;
            case 0:
                title = 'No hay conexión';
                message = 'No es posible realizar conexión con servidor';
                this.toasterService.pop('warning', title, message);
                break;
            default:
                console.log('No status supported for toast: STATUS ' + response.status);
                break;
        }
    };
    return CustomToastService;
}());
CustomToastService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ToasterService])
], CustomToastService);
export { CustomToastService };
//# sourceMappingURL=../../../../../src/app/shared/toast/custom-toast.service.js.map