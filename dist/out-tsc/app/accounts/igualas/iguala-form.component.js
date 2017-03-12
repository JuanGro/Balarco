var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from './../../shared/http-service/http.service';
import { Iguala } from './iguala-model';
var IgualaFormComponent = (function () {
    function IgualaFormComponent(httpService) {
        this.httpService = httpService;
        this.requestCloseModal = new EventEmitter();
        this.igualaCreated = new EventEmitter();
        this.igualaUpdated = new EventEmitter();
        this.modalAction = '';
    }
    IgualaFormComponent.prototype.ngOnChanges = function () {
        if (!this.iguala) {
            this.iguala = new Iguala();
        }
        else {
            this.oldIguala = new Iguala(this.iguala);
        }
    };
    IgualaFormComponent.prototype.submitIgualaForm = function () {
        if (this.iguala.id) {
        }
        else {
            this.submitNewIguala();
        }
    };
    IgualaFormComponent.prototype.submitNewIguala = function () {
        var _this = this;
        this.httpService.postObject('works/igualas/', this.iguala.generateJSONForPOST()).subscribe(function (result) {
            if (result.ok) {
                var newIguala = new Iguala(result.json());
                _this.igualaCreated.emit(newIguala);
            }
        });
    };
    IgualaFormComponent.prototype.requestCloseThisModal = function () {
        this.modalAction = 'Close modal';
        this.requestCloseModal.emit(this.modalAction);
    };
    IgualaFormComponent.prototype.cancelForm = function () {
        if (this.oldIguala) {
            this.iguala = this.oldIguala;
            this.igualaUpdated.emit(this.iguala);
        }
        else {
            this.iguala = new Iguala();
        }
    };
    return IgualaFormComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Iguala)
], IgualaFormComponent.prototype, "iguala", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], IgualaFormComponent.prototype, "requestCloseModal", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], IgualaFormComponent.prototype, "igualaCreated", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], IgualaFormComponent.prototype, "igualaUpdated", void 0);
IgualaFormComponent = __decorate([
    Component({
        selector: 'iguala-form',
        templateUrl: 'iguala-form.component.html'
    }),
    __metadata("design:paramtypes", [HttpService])
], IgualaFormComponent);
export { IgualaFormComponent };
//# sourceMappingURL=../../../../../src/app/accounts/igualas/iguala-form.component.js.map