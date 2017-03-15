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
import { Client } from './../clients/client-model';
import { HttpService } from './../../shared/http-service/http.service';
import { CustomToastService } from '../../shared/toast/custom-toast.service';
var ContactsComponent = (function () {
    function ContactsComponent(httpService, toaster) {
        this.httpService = httpService;
        this.toaster = toaster;
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
            .subscribe(function (contactsListJSON) {
            _this.contactsList = [];
            for (var _i = 0, contactsListJSON_1 = contactsListJSON; _i < contactsListJSON_1.length; _i++) {
                var contactJSON = contactsListJSON_1[_i];
                _this.contactsList.push(new Contact(contactJSON));
            }
        }, function (err) {
        });
    };
    ContactsComponent.prototype.loadClientsList = function (url) {
        var _this = this;
        this.httpService.getObject(url)
            .map(function (data) { return data.json(); })
            .subscribe(function (clientsListJSON) {
            _this.clientsList = [];
            for (var _i = 0, clientsListJSON_1 = clientsListJSON; _i < clientsListJSON_1.length; _i++) {
                var clientJSON = clientsListJSON_1[_i];
                _this.clientsList.push(new Client(clientJSON));
            }
        }, function (err) {
        });
    };
    ContactsComponent.prototype.initializeModal = function () {
        this.contact = new Contact();
    };
    ContactsComponent.prototype.removeContact = function (object) {
        var _this = this;
        this.httpService.deleteObject('clients/contacts/' + object.id + '/').subscribe(function (result) {
            if (result.ok) {
                var index = _this.contactsList.indexOf(object);
                if (index >= 0) {
                    _this.contactsList.splice(index, 1);
                    _this.toaster.show(result, 'Contacto eliminado', 'El contacto se eliminó con éxito');
                }
            }
        }, function (error) {
            _this.toaster.show(error, 'Error', 'Ocurrió un error al eliminar contacto');
        });
    };
    ContactsComponent.prototype.getContactFromTable = function (object) {
        this.contact = object;
    };
    ContactsComponent.prototype.onContactCreated = function (event) {
        this.contactsList.push(event);
    };
    ContactsComponent.prototype.onContactUpdated = function (event) {
        var oldContact = this.contactsList.filter(function (contact) { return contact.id === event.id; })[0];
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
    __metadata("design:paramtypes", [HttpService, CustomToastService])
], ContactsComponent);
export { ContactsComponent };
//# sourceMappingURL=../../../../../src/app/accounts/contacts/contacts.component.js.map