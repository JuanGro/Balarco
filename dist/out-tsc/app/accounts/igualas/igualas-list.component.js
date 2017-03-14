var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, Input, EventEmitter } from '@angular/core';
var IgualasListComponent = (function () {
    function IgualasListComponent() {
        this.requestShowNewIgualaModal = new EventEmitter();
        this.requestShowUpdateIgualaModal = new EventEmitter();
        this.currentIguala = new EventEmitter();
        this.modalAction = '';
    }
    IgualasListComponent.prototype.requestNewIgualaModal = function () {
        this.modalAction = 'Open new Iguala modal';
        this.requestShowNewIgualaModal.emit(this.modalAction);
    };
    IgualasListComponent.prototype.requestUpdateIgualaModal = function () {
        this.modalAction = 'Open update Iguala modal';
        this.requestShowUpdateIgualaModal.emit(this.modalAction);
    };
    IgualasListComponent.prototype.sendCurrentIguala = function (object) {
        this.currentIguala.emit(object);
    };
    return IgualasListComponent;
}());
__decorate([
    Input('igualasList'),
    __metadata("design:type", Array)
], IgualasListComponent.prototype, "igualasList", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], IgualasListComponent.prototype, "requestShowNewIgualaModal", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], IgualasListComponent.prototype, "requestShowUpdateIgualaModal", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], IgualasListComponent.prototype, "currentIguala", void 0);
IgualasListComponent = __decorate([
    Component({
        selector: 'igualas-list-table',
        templateUrl: 'igualas-list.component.html'
    }),
    __metadata("design:paramtypes", [])
], IgualasListComponent);
export { IgualasListComponent };
//# sourceMappingURL=../../../../../src/app/accounts/igualas/igualas-list.component.js.map