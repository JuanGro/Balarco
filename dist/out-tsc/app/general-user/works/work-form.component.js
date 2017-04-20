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
import { environment } from '../../../environments/environment';
import { ArtWork } from './art-works/art-work-model';
import { Status } from './status/status-model';
import { Work } from './work-model';
var WorkFormComponent = (function () {
    function WorkFormComponent(httpService, toaster) {
        this.httpService = httpService;
        this.toaster = toaster;
        this.requestCloseModal = new EventEmitter();
        this.requestWarning = new EventEmitter();
        this.workCreated = new EventEmitter();
        this.workUpdated = new EventEmitter();
        this.modalAction = '';
        this.active = true;
        this.currentWorkTypeId = 0;
    }
    WorkFormComponent.prototype.ngOnChanges = function () {
        if (!this.work) {
            this.work = new Work();
        }
        else if (this.work && !this.work.id) {
            if (this.statusList) {
                this.possibleStatus = this.getPossibleStatusForNewProject();
            }
            this.initialDropdownSetup();
        }
        else if (this.work && this.work.id) {
            this.oldWork = new Work(this.work);
            this.loadPossibleStatusForExistingProject();
            this.setValuesWithExistingWork();
        }
    };
    WorkFormComponent.prototype.initialDropdownSetup = function () {
        if (this.clientsList && this.contactsList && this.clientsList.length > 0) {
            this.client_id = this.clientsList[0].id;
            this.filterContactsByClientId(this.client_id);
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
        if (!this.work.id) {
            if (this.possibleStatus && this.possibleStatus.length > 0) {
                this.work.current_status = this.possibleStatus[0].id;
            }
            if (this.workTypesList && this.workTypesList.length > 0) {
                this.work.work_type = this.workTypesList[0].id;
                this.work.work_type_id_enum = this.workTypesList[0].work_type_id;
            }
        }
    };
    WorkFormComponent.prototype.setValuesWithExistingWork = function () {
        if (this.work) {
            if (this.work.contact_complete) {
                this.client_id = this.work.contact_complete.client;
                this.filterContactsByClientId(this.client_id);
            }
            this.currentWorkTypeId = this.work.work_type_complete.work_type_id;
            this.currentArtWorkList = this.work.art_works;
            this.contact_id = this.work.contact;
        }
    };
    WorkFormComponent.prototype.submitWorkForm = function () {
        var _this = this;
        this.work.art_works = this.currentArtWorkList;
        this.work.contact = this.contact_id;
        this.work.executive_id = 1;
        if (this.work.id) {
            this.submitUpdatedWork();
        }
        else {
            this.submitNewWork();
        }
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 1);
    };
    WorkFormComponent.prototype.submitNewWork = function () {
        var _this = this;
        this.httpService.postObject(environment.WORKS_URL, this.work.generateJSONForPOST()).subscribe(function (result) {
            if (result.ok) {
                var newWork = new Work(result.json());
                _this.workCreated.emit(newWork);
                _this.toaster.show(result, 'Trabajo creado', 'El trabajo se creó con éxito');
            }
        }, function (error) {
            _this.toaster.show(error, 'Error', 'Ocurrió un error al guardar el trabajo');
        });
    };
    WorkFormComponent.prototype.submitUpdatedWork = function () {
        var _this = this;
        console.log(this.work.generateJSONForPOST());
        this.httpService.updateObject(environment.WORKS_URL + this.work.id + '/', this.work.generateJSONForPOST()).subscribe(function (result) {
            if (result.ok) {
                var updatedWork = new Work(result.json());
                _this.workUpdated.emit(updatedWork);
                _this.toaster.show(result, 'Trabajo actulizado', 'El trabajo se actualizó con éxito');
            }
        }, function (error) {
            _this.toaster.show(error, 'Error', 'Ocurrió un error al actualizar el trabajo');
        });
    };
    WorkFormComponent.prototype.onClientChange = function (id) {
        this.filterContactsByClientId(id);
    };
    WorkFormComponent.prototype.filterContactsByClientId = function (id) {
        if (this.contactsList) {
            this.currentContacts = this.contactsList.filter(function (x) { return x.client === +id; });
            if (this.currentContacts.length > 0) {
                this.contact_id = this.currentContacts[0].id;
            }
        }
    };
    WorkFormComponent.prototype.onIgualaChange = function (id) {
        this.filterArtWorksByIgualaId(id);
    };
    WorkFormComponent.prototype.filterArtWorksByIgualaId = function (id) {
        this.currentArtWorkList = [];
        for (var _i = 0, _a = this.igualasList.filter(function (x) { return x.id === +id; })[0].art_iguala; _i < _a.length; _i++) {
            var artWork = _a[_i];
            this.currentArtWorkList.push(new ArtWork(artWork));
        }
    };
    WorkFormComponent.prototype.onWorkTypeChange = function (id) {
        this.currentWorkTypeId = this.getWorkTypeIdById(id);
        this.work.work_type_id_enum = this.currentWorkTypeId;
        if (this.currentWorkTypeId === 1 && this.igualasList && this.igualasList.length > 0) {
            this.filterArtWorksByIgualaId(this.igualasList[0].id);
            this.work.iguala = this.igualasList[0].id;
        }
        else if (this.currentWorkTypeId === 2) {
            this.currentArtWorkList = [];
            for (var _i = 0, _a = this.graduationArtTypes; _i < _a.length; _i++) {
                var artWork = _a[_i];
                this.currentArtWorkList.push(new ArtWork(artWork));
            }
        }
    };
    WorkFormComponent.prototype.getWorkTypeIdById = function (id) {
        return this.workTypesList.filter(function (x) { return x.id === +id; })[0].work_type_id;
    };
    WorkFormComponent.prototype.getPossibleStatusForNewProject = function () {
        return this.statusList.filter(function (status) { return status.status_id === 0 || status.status_id === 1; });
    };
    WorkFormComponent.prototype.loadPossibleStatusForExistingProject = function () {
        var _this = this;
        this.httpService.getObject(environment.WORKS_URL + this.work.id + '/possible-status-changes/')
            .map(function (data) { return data.json(); })
            .subscribe(function (statusListJSON) {
            _this.possibleStatus = [];
            for (var _i = 0, statusListJSON_1 = statusListJSON; _i < statusListJSON_1.length; _i++) {
                var status_1 = statusListJSON_1[_i];
                _this.possibleStatus.push(new Status(status_1));
            }
        });
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
        if (this.oldWork) {
            this.workUpdated.emit(this.oldWork);
        }
        setTimeout(function () { return _this.active = false; }, 0);
        setTimeout(function () { return _this.active = true; }, 1);
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
    Input('graduationArtTypes'),
    __metadata("design:type", Array)
], WorkFormComponent.prototype, "graduationArtTypes", void 0);
__decorate([
    Input('statusList'),
    __metadata("design:type", Array)
], WorkFormComponent.prototype, "statusList", void 0);
__decorate([
    Input('userExecutivesList'),
    __metadata("design:type", Array)
], WorkFormComponent.prototype, "userExecutivesList", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], WorkFormComponent.prototype, "requestCloseModal", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], WorkFormComponent.prototype, "requestWarning", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], WorkFormComponent.prototype, "workCreated", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], WorkFormComponent.prototype, "workUpdated", void 0);
WorkFormComponent = __decorate([
    Component({
        selector: 'work-form',
        templateUrl: 'work-form.component.html'
    }),
    __metadata("design:paramtypes", [HttpService, CustomToastService])
], WorkFormComponent);
export { WorkFormComponent };
//# sourceMappingURL=../../../../../src/app/general-user/works/work-form.component.js.map