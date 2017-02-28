var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';
var DesignsListComponent = (function () {
    function DesignsListComponent() {
        this.designs = [
            { 'id': '1', 'name': 'Campaña Té verde', 'company': 'Starbucks', 'status': 'Cobrado' },
            { 'id': '2', 'name': 'Campaña Predix', 'company': 'General Electric', 'status': 'Rechazado' },
            { 'id': '3', 'name': 'Campaña LigaMX', 'company': 'Comex', 'status': 'Por facturar' },
            { 'id': '4', 'name': 'Campaña Té verde', 'company': 'Starbucks', 'status': 'Por cobrar' },
            { 'id': '5', 'name': 'Campaña Predix', 'company': 'General Electric', 'status': 'Diseño' },
            { 'id': '6', 'name': 'Campaña LigaMX', 'company': 'Comex', 'status': 'Producción' },
            { 'id': '7', 'name': 'Campaña Té verde', 'company': 'Starbucks', 'status': 'Validación' },
            { 'id': '8', 'name': 'Campaña Predix', 'company': 'General Electric', 'status': 'Cobrado' },
            { 'id': '9', 'name': 'Campaña LigaMX', 'company': 'Comex', 'status': 'Por facturar' },
            { 'id': '10', 'name': 'Campaña Té verde', 'company': 'Starbucks', 'status': 'Rechazado' }
        ];
    }
    DesignsListComponent.prototype.showChildModal = function () {
        this.childModal.show();
    };
    DesignsListComponent.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    return DesignsListComponent;
}());
__decorate([
    ViewChild('childModal'),
    __metadata("design:type", ModalDirective)
], DesignsListComponent.prototype, "childModal", void 0);
DesignsListComponent = __decorate([
    Component({
        templateUrl: 'designs-list.component.html'
    }),
    __metadata("design:paramtypes", [])
], DesignsListComponent);
export { DesignsListComponent };
//# sourceMappingURL=../../../../src/app/accounts/designs-list.component.js.map