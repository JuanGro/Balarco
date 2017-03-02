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
import { FormBuilder, Validators } from '@angular/forms';
import { Contact } from './contact';
import { HttpService } from './../../shared/http-service/http.service';
var ContactFormComponent = (function () {
    function ContactFormComponent(fb, httpService) {
        this.fb = fb;
        this.httpService = httpService;
        this.requestCloseModal = new EventEmitter();
        this.requestWarning = new EventEmitter();
        this.contactCreated = new EventEmitter();
    }
    ContactFormComponent.prototype.ngOnChanges = function () {
        var emailRegex = '[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`\
                          {|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?';
        if (this.contact) {
            this.contactsModalForm = this.fb.group({
                name: [this.contact.name, [Validators.required, Validators.minLength(2)]],
                last_name: [this.contact.last_name, [Validators.required, Validators.minLength(4)]],
                client: [this.contact.client, [Validators.required]],
                charge: [this.contact.charge, [Validators.required, Validators.minLength(3)]],
                landline: [this.contact.landline, [Validators.required, Validators.minLength(6)]],
                extension: [this.contact.extension],
                mobile_phone_1: [this.contact.mobile_phone_1, [Validators.required, Validators.minLength(6)]],
                mobile_phone_2: [this.contact.mobile_phone_2],
                email: [this.contact.email, [Validators.required, Validators.pattern(emailRegex)]],
                alternate_email: [this.contact.alternate_email, [Validators.pattern(emailRegex)]],
                is_active: [this.contact.is_active, [Validators.required]]
            });
        }
        else {
            this.contactsModalForm = this.fb.group({
                name: ['', [Validators.required, Validators.minLength(2)]],
                last_name: ['', [Validators.required, Validators.minLength(4)]],
                client: ['', [Validators.required]],
                charge: ['', [Validators.required, Validators.minLength(3)]],
                landline: ['', [Validators.required, Validators.minLength(6)]],
                extension: [''],
                mobile_phone_1: ['', [Validators.required, Validators.minLength(6)]],
                mobile_phone_2: [''],
                email: ['', [Validators.required, Validators.pattern(emailRegex)]],
                alternate_email: ['', [Validators.pattern(emailRegex)]],
                is_active: [true, [Validators.required]]
            });
        }
    };
    ContactFormComponent.prototype.submitContactForm = function (object, isValid) {
        if (isValid === true) {
            if (this.contact) {
                this.submitUpdatedContact(object, this.contact.id);
            }
            else {
                this.submitNewContact(object);
                console.log(object);
            }
        }
        else {
            console.log('Error sending the contact from internal methods');
        }
    };
    ContactFormComponent.prototype.submitUpdatedContact = function (object, id) {
        this.httpService.updateObject('clients/contacts/' + id + '/', object).subscribe(function (result) {
        });
    };
    ContactFormComponent.prototype.submitNewContact = function (object) {
        var _this = this;
        this.httpService.postObject('clients/contacts/', object).subscribe(function (result) {
            console.log('result');
            if (result.ok) {
                var newContact = new Contact(result.text());
                _this.contactCreated.emit({ contact: newContact });
            }
        });
    };
    ContactFormComponent.prototype.requestWarningModal = function () {
        this.requestWarning.emit();
    };
    ContactFormComponent.prototype.requestCloseThisModal = function () {
        this.requestCloseModal.emit();
    };
    ContactFormComponent.prototype.resetForm = function () {
        this.contactsModalForm.reset();
    };
    return ContactFormComponent;
}());
__decorate([
    Input(),
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
    __metadata("design:type", Object)
], ContactFormComponent.prototype, "contactCreated", void 0);
ContactFormComponent = __decorate([
    Component({
        selector: 'contact-form',
        templateUrl: 'contact-form.component.html'
    }),
    __metadata("design:paramtypes", [FormBuilder, HttpService])
], ContactFormComponent);
export { ContactFormComponent };
//# sourceMappingURL=../../../../../src/app/accounts/contacts/contact-form.component.js.map