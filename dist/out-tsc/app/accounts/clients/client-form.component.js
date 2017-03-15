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
import { Client } from './client-model';
import { HttpService } from './../../shared/http-service/http.service';
import { CustomToastService } from '../../shared/toast/custom-toast.service';
var ClientFormComponent = (function () {
    function ClientFormComponent(httpService, toaster) {
        this.httpService = httpService;
        this.toaster = toaster;
        this.requestCloseModal = new EventEmitter();
        this.requestWarning = new EventEmitter();
        this.clientCreated = new EventEmitter();
        this.clientUpdated = new EventEmitter();
        this.success = false;
        this.modalAction = '';
        this.active = true;
    }
    ClientFormComponent.prototype.ngOnChanges = function () {
        if (!this.client) {
            this.client = new Client();
            this.oldClient = new Client();
        }
        else {
            this.oldClient = new Client(this.client);
        }
    };
    ClientFormComponent.prototype.submitClientForm = function (object) {
        var _this = this;
        if (this.client.id) {
            this.submitUpdatedClient(object, this.client.id);
        }
        else {
            this.submitNewClient(object);
        }
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
        this.success = true;
    };
    ClientFormComponent.prototype.submitUpdatedClient = function (object, id) {
        var _this = this;
        this.httpService.updateObject('clients/clients/' + id + '/', object).subscribe(function (result) {
            if (result.ok) {
                var updatedClient = new Client(result.json());
                _this.clientUpdated.emit(updatedClient);
                _this.toaster.show(result, 'Cliente actualizado', 'El cliente se actualizó con éxito');
            }
        }, function (error) {
            _this.toaster.show(error, 'Error', 'Ocurrió un error al guardar el cliente');
        });
    };
    ClientFormComponent.prototype.submitNewClient = function (object) {
        var _this = this;
        this.httpService.postObject('clients/clients/', object).subscribe(function (result) {
            if (result.ok) {
                var newClient = new Client(result.json());
                _this.clientCreated.emit(newClient);
                _this.toaster.show(result, 'Cliente guardado', 'El cliente se guardó con éxito');
            }
        }, function (error) {
            _this.toaster.show(error, 'Error', 'Ocurrió un error al actualizar el cliente');
        });
    };
    ClientFormComponent.prototype.requestWarningModal = function () {
        this.modalAction = 'Show warning modal';
        this.requestWarning.emit(this.modalAction);
    };
    ClientFormComponent.prototype.requestCloseThisModal = function () {
        this.modalAction = 'Close modal';
        this.requestCloseModal.emit(this.modalAction);
    };
    ClientFormComponent.prototype.cancelForm = function () {
        var _this = this;
        if (this.oldClient.id) {
            this.client = this.oldClient;
            var updatedContact = new Client(this.oldClient);
            this.clientUpdated.emit(updatedContact);
        }
        this.client = new Client();
        setTimeout(function () { return _this.active = false; }, 1);
        setTimeout(function () { return _this.active = true; }, 0);
    };
    return ClientFormComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Client)
], ClientFormComponent.prototype, "client", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ClientFormComponent.prototype, "requestCloseModal", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ClientFormComponent.prototype, "requestWarning", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ClientFormComponent.prototype, "clientCreated", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ClientFormComponent.prototype, "clientUpdated", void 0);
ClientFormComponent = __decorate([
    Component({
        selector: 'client-form',
        templateUrl: 'client-form.component.html'
    }),
    __metadata("design:paramtypes", [HttpService, CustomToastService])
], ClientFormComponent);
export { ClientFormComponent };
//# sourceMappingURL=../../../../../src/app/accounts/clients/client-form.component.js.map