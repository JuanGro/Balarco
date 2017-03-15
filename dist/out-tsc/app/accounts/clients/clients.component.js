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
import { Client } from './client-model';
import { HttpService } from './../../shared/http-service/http.service';
var ClientsComponent = (function () {
    function ClientsComponent(httpService) {
        this.httpService = httpService;
    }
    ClientsComponent.prototype.ngOnInit = function () {
        this.title = 'Lista de compañías';
        this.titleNewModal = 'Nueva compañía';
        this.titleUpdateModal = 'Modificar compañía';
        this.titleDangerModal = 'Eliminar compañía';
        this.descriptionDangerModal = '¿Está usted seguro de eliminar esta compañía?';
        this.loadClientsList('clients/clients/');
    };
    ClientsComponent.prototype.loadClientsList = function (url) {
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
    ClientsComponent.prototype.initializeModal = function () {
        this.client = new Client();
    };
    ClientsComponent.prototype.removeClient = function (object) {
        var _this = this;
        this.httpService.deleteObject('clients/clients/' + object.id + '/').subscribe(function (result) {
            if (result.ok) {
                var index = _this.clientsList.indexOf(object);
                if (index >= 0) {
                    _this.clientsList.splice(index, 1);
                }
            }
        });
    };
    ClientsComponent.prototype.getClientFromTable = function (object) {
        this.client = object;
    };
    ClientsComponent.prototype.onClientCreated = function (event) {
        this.clientsList.push(event);
    };
    ClientsComponent.prototype.onClientUpdated = function (event) {
        var oldClient = this.clientsList.filter(function (client) { return client.id === event.id; })[0];
        var index = this.clientsList.indexOf(oldClient);
        if (index >= 0) {
            this.clientsList[index] = event;
        }
    };
    return ClientsComponent;
}());
ClientsComponent = __decorate([
    Component({
        selector: 'clients',
        templateUrl: 'clients.component.html'
    }),
    __metadata("design:paramtypes", [HttpService])
], ClientsComponent);
export { ClientsComponent };
//# sourceMappingURL=../../../../../src/app/accounts/clients/clients.component.js.map