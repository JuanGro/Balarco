var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';
var IgualasListComponent = (function () {
    function IgualasListComponent() {
        this.requestShowNewIgualaModal = new EventEmitter();
        this.modalAction = '';
        this.igualas = [
            { 'id': '1', 'company': 'Starbucks', 'igualas_total': '90', 'igualas_available': '9' },
            { 'id': '2', 'company': 'General Electric', 'igualas_total': '100', 'igualas_available': '32' },
            { 'id': '3', 'company': 'Comex', 'igualas_total': '77', 'igualas_available': '2' },
            { 'id': '4', 'company': 'Starbucks', 'igualas_total': '90', 'igualas_available': '9' },
            { 'id': '5', 'company': 'General Electric', 'igualas_total': '100', 'igualas_available': '32' },
            { 'id': '6', 'company': 'Comex', 'igualas_total': '77', 'igualas_available': '2' },
            { 'id': '7', 'company': 'Starbucks', 'igualas_total': '90', 'igualas_available': '9' },
            { 'id': '8', 'company': 'General Electric', 'igualas_total': '100', 'igualas_available': '32' },
            { 'id': '9', 'company': 'Comex', 'igualas_total': '77', 'igualas_available': '2' },
            { 'id': '10', 'company': 'Starbucks', 'igualas_total': '90', 'igualas_available': '9' }
        ];
    }
    IgualasListComponent.prototype.requestNewIgualaModal = function () {
        console.log('In BUtton');
        this.modalAction = 'Open new Iguala modal';
        this.requestShowNewIgualaModal.emit(this.modalAction);
    };
    IgualasListComponent.prototype.showChildModal = function () {
        this.childModal.show();
    };
    IgualasListComponent.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    return IgualasListComponent;
}());
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], IgualasListComponent.prototype, "requestShowNewIgualaModal", void 0);
__decorate([
    ViewChild('childModal'),
    __metadata("design:type", ModalDirective)
], IgualasListComponent.prototype, "childModal", void 0);
IgualasListComponent = __decorate([
    Component({
        selector: 'igualas-list-table',
        templateUrl: 'igualas-list.component.html'
    }),
    __metadata("design:paramtypes", [])
], IgualasListComponent);
export { IgualasListComponent };
//# sourceMappingURL=../../../../../src/app/accounts/igualas/igualas-list.component.js.map