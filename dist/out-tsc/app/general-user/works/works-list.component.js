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
import { CurrentUser } from '../../shared/current-user/current-user-model';
import { Role } from '../../shared/auth/role';
import { AssignmentFilter } from './works.component';
var WorksListComponent = (function () {
    function WorksListComponent() {
        this.requestShowNewWorkModal = new EventEmitter();
        this.requestShowUpdateWorkModal = new EventEmitter();
        this.requestShowFilterWorkModal = new EventEmitter();
        this.requestStopWorkFilter = new EventEmitter();
        this.currentWork = new EventEmitter();
        this.modalAction = '';
        this.staticEnum = AssignmentFilter;
        this.roleEnum = Role;
    }
    WorksListComponent.prototype.requestNewWorkModal = function () {
        this.modalAction = 'Open new Work modal';
        this.requestShowNewWorkModal.emit(this.modalAction);
    };
    WorksListComponent.prototype.requestUpdateWorkModal = function () {
        this.modalAction = 'Open update Work modal';
        this.requestShowUpdateWorkModal.emit(this.modalAction);
    };
    WorksListComponent.prototype.requestFilterWorkModal = function () {
        this.modalAction = 'Open filter Work modal';
        this.requestShowFilterWorkModal.emit(this.modalAction);
    };
    WorksListComponent.prototype.requestStopWorkFilterButton = function () {
        this.requestStopWorkFilter.emit('Stop');
    };
    WorksListComponent.prototype.sendCurrentWork = function (object) {
        this.currentWork.emit(object);
    };
    return WorksListComponent;
}());
__decorate([
    Input('worksList'),
    __metadata("design:type", Array)
], WorksListComponent.prototype, "worksList", void 0);
__decorate([
    Input('stopFilterButton'),
    __metadata("design:type", Boolean)
], WorksListComponent.prototype, "stopFilterButton", void 0);
__decorate([
    Input('assignmentFilter'),
    __metadata("design:type", Number)
], WorksListComponent.prototype, "assignmentFilter", void 0);
__decorate([
    Input('currentUser'),
    __metadata("design:type", CurrentUser)
], WorksListComponent.prototype, "currentUser", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], WorksListComponent.prototype, "requestShowNewWorkModal", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], WorksListComponent.prototype, "requestShowUpdateWorkModal", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], WorksListComponent.prototype, "requestShowFilterWorkModal", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], WorksListComponent.prototype, "requestStopWorkFilter", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], WorksListComponent.prototype, "currentWork", void 0);
WorksListComponent = __decorate([
    Component({
        selector: 'works-list',
        templateUrl: 'works-list.component.html'
    }),
    __metadata("design:paramtypes", [])
], WorksListComponent);
export { WorksListComponent };
//# sourceMappingURL=../../../../../src/app/general-user/works/works-list.component.js.map