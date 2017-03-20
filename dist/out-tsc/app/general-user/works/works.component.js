var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { HttpService } from './../../shared/http-service/http.service';
import { CustomToastService } from '../../shared/toast/custom-toast.service';
import { Client } from '../../accounts/clients/client-model';
import { Contact } from '../../accounts/contacts/contact-model';
import { environment } from '../../../environments/environment';
var WorksComponent = (function () {
    function WorksComponent(httpService, toaster) {
        this.httpService = httpService;
        this.toaster = toaster;
    }
    WorksComponent.prototype.ngOnInit = function () {
        this.title = 'Lista de contactos';
        this.titleNewModal = 'Nuevo Trabajo';
        this.titleUpdateModal = 'Modificar Trabajo';
        this.titleDangerModal = 'Eliminar trabajo';
        this.descriptionDangerModal = '¿Está usted seguro de eliminar este trabajo?';
        this.loadClientsList(environment.CLIENTS_URL);
        this.loadContactsList(environment.CONTACTS_URL);
    };
    WorksComponent.prototype.loadClientsList = function (url) {
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
    WorksComponent.prototype.loadContactsList = function (url) {
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
    WorksComponent.prototype.initializeModal = function () { };
    return WorksComponent;
}());
WorksComponent = __decorate([
    Component({
        selector: 'works',
        templateUrl: 'works.component.html'
    }),
    __metadata("design:paramtypes", [HttpService, CustomToastService])
], WorksComponent);
export { WorksComponent };
//# sourceMappingURL=../../../../../src/app/general-user/works/works.component.js.map