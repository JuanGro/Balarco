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
import { ArtWork } from './art-works/art-work-model';
import { Status } from './status/status-model';
import { Work } from './work-model';
var WorkFormComponent = (function () {
    function WorkFormComponent(httpService, toaster) {
        this.httpService = httpService;
        this.toaster = toaster;
        this.requestCloseModal = new EventEmitter();
        this.requestWarning = new EventEmitter();
        this.modalAction = '';
        this.active = true;
        this.currentWorkTypeId = 0;
    }
    WorkFormComponent.prototype.ngOnChanges = function () {
        if (!this.work) {
            this.work = new Work();
            this.possibleStatus = this.getPossibleStatusForNewProject();
        }
        if (this.work && !this.work.id) {
            this.initialDropdownSetup();
        }
    };
    WorkFormComponent.prototype.initialDropdownSetup = function () {
        if (this.clientsList && this.contactsList && this.clientsList.length > 0) {
            this.filterContactsByClientId(this.clientsList[0].id);
        }
        if (this.igualasList && this.igualasList.length > 0) {
            this.filterArtWorksByIgualaId(this.igualasList[0].id);
        }
        if (this.workTypesList && this.workTypesList.length > 0) {
            this.currentWorkTypeId = this.workTypesList[0].work_type_id;
        }
        else {
            this.currentWorkTypeId = 0;
        }
    };
    WorkFormComponent.prototype.onClientChange = function (id) {
        this.filterContactsByClientId(id);
    };
    WorkFormComponent.prototype.filterContactsByClientId = function (id) {
        this.currentContacts = this.contactsList.filter(function (x) { return x.client == id; });
    };
    WorkFormComponent.prototype.onIgualaChange = function (id) {
        this.filterArtWorksByIgualaId(id);
    };
    WorkFormComponent.prototype.filterArtWorksByIgualaId = function (id) {
        this.currentArtWorkList = [];
        for (var _i = 0, _a = this.igualasList.filter(function (x) { return x.id == id; })[0].art_iguala; _i < _a.length; _i++) {
            var artWork = _a[_i];
            this.currentArtWorkList.push(new ArtWork(artWork));
        }
    };
    WorkFormComponent.prototype.onWorkTypeChange = function (id) {
        this.currentWorkTypeId = id;
        if (this.currentWorkTypeId == 1 && this.igualasList && this.igualasList.length > 0) {
            this.filterArtWorksByIgualaId(this.igualasList[0].id);
        }
        else if (this.currentWorkTypeId == 2) {
            this.currentArtWorkList = [];
            for (var _i = 0, _a = this.graduationArtTypes; _i < _a.length; _i++) {
                var artWork = _a[_i];
                this.currentArtWorkList.push(new ArtWork(artWork));
            }
        }
    };
    WorkFormComponent.prototype.getPossibleStatusForNewProject = function () {
        var possibleStatus = [];
        possibleStatus.push(new Status({ id: 0, name: 'Pendiente' }));
        possibleStatus.push(new Status({ id: 1, name: 'Diseño' }));
        return possibleStatus;
    };
    WorkFormComponent.prototype.requestCloseThisModal = function () {
        this.modalAction = 'Close modal';
        this.requestCloseModal.emit(this.modalAction);
    };
    WorkFormComponent.prototype.requestWarningModal = function () {
        this.modalAction = 'Show warning modal';
        this.requestWarning.emit(this.modalAction);
    };
    WorkFormComponent.prototype.cancelForm = function () {
        var _this = this;
        this.work = new Work();
        setTimeout(function () { return _this.active = false; }, 1);
        setTimeout(function () { return _this.active = true; }, 1);
        this.initialDropdownSetup();
    };
    return WorkFormComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Work)
], WorkFormComponent.prototype, "work", void 0);
__decorate([
    Input('contactsList'),
    __metadata("design:type", Array)
], WorkFormComponent.prototype, "contactsList", void 0);
__decorate([
    Input('clientsList'),
    __metadata("design:type", Array)
], WorkFormComponent.prototype, "clientsList", void 0);
__decorate([
    Input('igualasList'),
    __metadata("design:type", Array)
], WorkFormComponent.prototype, "igualasList", void 0);
__decorate([
    Input('workTypesList'),
    __metadata("design:type", Array)
], WorkFormComponent.prototype, "workTypesList", void 0);
__decorate([
    Input(' graduationArtTypes'),
    __metadata("design:type", Array)
], WorkFormComponent.prototype, "graduationArtTypes", void 0);
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