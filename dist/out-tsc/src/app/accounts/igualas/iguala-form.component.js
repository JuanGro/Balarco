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
import { CustomToastService } from '../../shared/toast/custom-toast.service';
import { environment } from '../../../environments/environment';
import { Iguala } from './iguala-model';
var IgualaFormComponent = (function () {
    function IgualaFormComponent(httpService, toaster) {
        this.httpService = httpService;
        this.toaster = toaster;
        this.requestCloseModal = new EventEmitter();
        this.requestWarning = new EventEmitter();
        this.igualaCreated = new EventEmitter();
        this.igualaUpdated = new EventEmitter();
        this.modalAction = '';
    }
    IgualaFormComponent.prototype.ngOnChanges = function () {
        if (!this.iguala) {
            this.iguala = new Iguala();
        }
        else if (this.iguala && !this.iguala.id) {
            this.initialDropdownSetup();
        }
        else if (this.iguala && this.iguala.id) {
            this.oldIguala = new Iguala(this.iguala);
        }
    };
    IgualaFormComponent.prototype.initialDropdownSetup = function () {
        if (this.clientsList && this.clientsList.length > 0) {
            this.iguala.client = this.clientsList[0].id;
        }
    };
    IgualaFormComponent.prototype.submitIgualaForm = function (form) {
        this.iguala.art_iguala = this.artWorkList;
        if (this.iguala.id) {
            this.submitUpdatedIguala();
        }
        else {
            this.submitNewIguala();
        }
        form.control.markAsUntouched();
    };
    IgualaFormComponent.prototype.submitNewIguala = function () {
        var _this = this;
        this.httpService.postObject(environment.IGUALAS_URL, this.iguala.generateJSONForPOST()).subscribe(function (result) {
            if (result.ok) {
                var newIguala = new Iguala(result.json());
                _this.igualaCreated.emit(newIguala);
            }
            _this.toaster.show(result, 'Iguala creada', 'La iguala se creó con éxito');
        }, function (error) {
            _this.toaster.show(error, 'Error', 'Ocurrió un error al guardar la iguala');
        });
        this.iguala = new Iguala();
    };
    IgualaFormComponent.prototype.submitUpdatedIguala = function () {
        var _this = this;
        this.httpService.updateObject(environment.IGUALAS_URL + this.iguala.id + '/', this.iguala.generateJSONForPOST()).subscribe(function (result) {
            if (result.ok) {
                var updatedIguala = new Iguala(result.json());
                _this.igualaUpdated.emit(updatedIguala);
            }
            _this.toaster.show(result, 'Iguala actualizada', 'La iguala se actualizó con éxito');
        }, function (error) {
            _this.toaster.show(error, 'Error', 'Ocurrió un error al actualizar la iguala');
        });
    };
    IgualaFormComponent.prototype.requestCloseThisModal = function () {
        this.modalAction = 'Close modal';
        this.requestCloseModal.emit(this.modalAction);
    };
    IgualaFormComponent.prototype.requestWarningModal = function () {
        this.modalAction = 'Show warning modal';
        this.requestWarning.emit(this.modalAction);
    };
    IgualaFormComponent.prototype.cancelForm = function (form) {
        if (this.oldIguala) {
            this.igualaUpdated.emit(this.oldIguala);
        }
        form.control.markAsUntouched();
    };
    IgualaFormComponent.prototype.downloadReport = function () {
        var _this = this;
        this.httpService.getObject(environment.IGUALAS_URL + this.iguala.id + '/report/')
            .subscribe(function (result) {
            var parsedResponse = result.text();
            _this.extractContent(parsedResponse, _this.iguala.name);
        });
    };
    IgualaFormComponent.prototype.extractContent = function (data, name) {
        var blob = new Blob(['\ufeff', data], { type: 'text/csv' });
        var url = window.URL.createObjectURL(blob);
        var anchor = document.createElement('a');
        anchor.download = name + '_report.csv';
        anchor.href = url;
        anchor.click();
    };
    return IgualaFormComponent;
}());
__decorate([
    Input('iguala'),
    __metadata("design:type", Iguala)
], IgualaFormComponent.prototype, "iguala", void 0);
__decorate([
    Input('clientsList'),
    __metadata("design:type", Array)
], IgualaFormComponent.prototype, "clientsList", void 0);
__decorate([
    Input('artWorkList'),
    __metadata("design:type", Array)
], IgualaFormComponent.prototype, "artWorkList", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], IgualaFormComponent.prototype, "requestCloseModal", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], IgualaFormComponent.prototype, "requestWarning", void 0);
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
    __metadata("design:paramtypes", [HttpService, CustomToastService])
], IgualaFormComponent);
export { IgualaFormComponent };
//# sourceMappingURL=../../../../../../src/app/accounts/igualas/iguala-form.component.js.map