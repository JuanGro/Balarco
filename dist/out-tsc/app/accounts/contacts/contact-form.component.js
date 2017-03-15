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
import { Contact } from './contact-model';
import { HttpService } from './../../shared/http-service/http.service';
import { CustomToastService } from '../../shared/toast/custom-toast.service';
var ContactFormComponent = (function () {
    function ContactFormComponent(httpService, toaster) {
        this.httpService = httpService;
        this.toaster = toaster;
        this.requestCloseModal = new EventEmitter();
        this.requestWarning = new EventEmitter();
        this.contactCreated = new EventEmitter();
        this.contactUpdated = new EventEmitter();
        this.success = false;
        this.modalAction = '';
        this.active = true;
    }
    ContactFormComponent.prototype.ngOnChanges = function () {
        if (!this.contact) {
            this.contact = new Contact();
            this.oldContact = new Contact();
        }
        else {
            this.oldContact = new Contact(this.contact);
        }
    };
    ContactFormComponent.prototype.submitContactForm = function (object) {
        var _this = this;
        if (this.contact.id) {
            this.submitUpdatedContact(object, this.contact.id);
        }
        else {
            this.submitNewContact(object);
        }
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
        this.success = true;
    };
    ContactFormComponent.prototype.submitUpdatedContact = function (object, id) {
        var _this = this;
        this.httpService.updateObject('clients/contacts/' + id + '/', object).subscribe(function (result) {
            if (result.ok) {
                var updatedContact = new Contact(result.json());
                _this.contactUpdated.emit(updatedContact);
                _this.toaster.show(result, 'Contacto actualizado', 'El contacto se actualizó con éxito');
            }
        }, function (error) {
            _this.toaster.show(error, 'Error', 'Ocurrió un error al actualizar el conacto');
        });
    };
    ContactFormComponent.prototype.submitNewContact = function (object) {
        var _this = this;
        this.httpService.postObject('clients/contacts/', object).subscribe(function (result) {
            if (result.ok) {
                var newContact = new Contact(result.json());
                _this.contactCreated.emit(newContact);
                _this.toaster.show(result, 'Contacto guardado', 'El contacto se guardó con éxito');
            }
        }, function (error) {
            _this.toaster.show(error, 'Error', 'Ocurrió un error al guardar el conacto');
        });
        this.contact = new Contact();
    };
    ContactFormComponent.prototype.requestWarningModal = function () {
        this.modalAction = 'Show warning modal';
        this.requestWarning.emit(this.modalAction);
    };
    ContactFormComponent.prototype.requestCloseThisModal = function () {
        this.modalAction = 'Close modal';
        this.requestCloseModal.emit(this.modalAction);
    };
    ContactFormComponent.prototype.cancelForm = function () {
        var _this = this;
        if (this.oldContact.id) {
            this.contact = this.oldContact;
            var updatedContact = new Contact(this.oldContact);
            this.contactUpdated.emit(updatedContact);
        }
        this.contact = new Contact();
        setTimeout(function () { return _this.active = false; }, 1);
        setTimeout(function () { return _this.active = true; }, 0);
    };
    return ContactFormComponent;
}());
__decorate([
    Input('contact'),
    __metadata("design:type", Contact)
], ContactFormComponent.prototype, "contact", void 0);
__decorate([
    Input('clientsList'),
    __metadata("design:type", Array)
], ContactFormComponent.prototype, "clientsList", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ContactFormComponent.prototype, "requestCloseModal", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ContactFormComponent.prototype, "requestWarning", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ContactFormComponent.prototype, "contactCreated", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ContactFormComponent.prototype, "contactUpdated", void 0);
ContactFormComponent = __decorate([
    Component({
        selector: 'contact-form',
        templateUrl: 'contact-form.component.html'
    }),
    __metadata("design:paramtypes", [HttpService, CustomToastService])
], ContactFormComponent);
export { ContactFormComponent };
//# sourceMappingURL=../../../../../src/app/accounts/contacts/contact-form.component.js.map