var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { HttpService } from './../../shared/http-service/http.service';
import { CustomToastService } from '../../shared/toast/custom-toast.service';
var WorkFormComponent = (function () {
    function WorkFormComponent(httpService, toaster) {
        this.httpService = httpService;
        this.toaster = toaster;
        this.requestCloseModal = new EventEmitter();
        this.requestWarning = new EventEmitter();
        this.modalAction = '';
        this.active = true;
    }
    WorkFormComponent.prototype.ngOnChanges = function () {
    };
    return WorkFormComponent;
}());
__decorate([
    Input('contactsList'),
    __metadata("design:type", Array)
], WorkFormComponent.prototype, "contactsList", void 0);
__decorate([
    Input('clientsList'),
    __metadata("design:type", Array)
], WorkFormComponent.prototype, "clientsList", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], WorkFormComponent.prototype, "requestCloseModal", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], WorkFormComponent.prototype, "requestWarning", void 0);
WorkFormComponent = __decorate([
    Component({
        selector: 'work-form',
        templateUrl: 'work-form.component.html'
    }),
    __metadata("design:paramtypes", [HttpService, CustomToastService])
], WorkFormComponent);
export { WorkFormComponent };
//# sourceMappingURL=../../../../../src/app/general-user/works/work-form.component.js.map