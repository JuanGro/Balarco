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
    CustomToastService.prototype.showSuccessToast = function (message) {
        this.toasterService.pop('success', message, 'Hi');
    };
    return CustomToastService;
}());
CustomToastService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ToasterService])
], CustomToastService);
export { CustomToastService };
//# sourceMappingURL=../../../../../src/app/shared/toast/custom-toast.service.js.map