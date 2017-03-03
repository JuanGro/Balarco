var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Contact } from './contact-model';
import { HttpService } from './../../shared/http-service/http.service';
var ContactsComponent = (function () {
    function ContactsComponent(httpService) {
        this.httpService = httpService;
    }
    ContactsComponent.prototype.ngOnInit = function () {
        this.title = 'Lista de contactos';
        this.titleNewModal = 'Nuevo Contacto';
        this.titleUpdateModal = 'Modificar Contacto';
        this.titleDangerModal = 'Eliminar contacto';
        this.descriptionDangerModal = '¿Está usted seguro de eliminar este contacto?';
        this.loadClientsList('clients/clients/');
        this.loadContactsList('clients/contacts/');
    };
    ContactsComponent.prototype.loadContactsList = function (url) {
        var _this = this;
        this.httpService.getObject(url)
            .map(function (data) { return data.json(); })
            .subscribe(function (contactsList) { return _this.contactsList = contactsList; }, function (err) {
        });
    };
    ContactsComponent.prototype.loadClientsList = function (url) {
        var _this = this;
        this.httpService.getObject(url)
            .map(function (data) { return data.json(); })
            .subscribe(function (clientsList) { return _this.clientsList = clientsList; }, function (err) {
        });
    };
    ContactsComponent.prototype.initializeModal = function () {
        this.contact = null;
    };
    ContactsComponent.prototype.removeContact = function (object) {
        this.httpService.deleteObject('clients/contacts/' + object.id + '/').subscribe(function (result) {
        });
    };
    ContactsComponent.prototype.getContactFromTable = function (object) {
        this.contact = object;
    };
    ContactsComponent.prototype.onContactCreated = function (event) {
        this.contactsList.push(event);
    };
    ContactsComponent.prototype.onContactUpdated = function (event) {
        var oldContact = this.contactsList.filter(function (contact) { return contact.id == event.id; })[0];
        var index = this.contactsList.indexOf(oldContact);
        if (index >= 0) {
            this.contactsList[index] = event;
        }
    };
    return ContactsComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Contact)
], ContactsComponent.prototype, "currentContact", void 0);
ContactsComponent = __decorate([
    Component({
        selector: 'contacts',
        templateUrl: 'contacts.component.html'
    }),
    __metadata("design:paramtypes", [HttpService])
], ContactsComponent);
export { ContactsComponent };
//# sourceMappingURL=../../../../../src/app/accounts/contacts/contacts.component.js.map