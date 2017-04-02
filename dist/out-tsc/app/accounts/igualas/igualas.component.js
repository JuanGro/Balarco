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
import { Iguala } from './iguala-model';
import { Client } from './../clients/client-model';
import { ArtWork } from './../../general-user/works/art-works/art-work-model';
import { URLSearchParams } from '@angular/http';
import { HttpService } from './../../shared/http-service/http.service';
import { CustomToastService } from '../../shared/toast/custom-toast.service';
import { environment } from '../../../environments/environment';
var IgualasComponent = (function () {
    function IgualasComponent(httpService, toaster) {
        this.httpService = httpService;
        this.toaster = toaster;
    }
    IgualasComponent.prototype.ngOnInit = function () {
        this.title = 'Lista de Igualas';
        this.titleNewModal = 'Nueva Iguala';
        this.titleUpdateModal = 'Modificar Iguala';
        this.titleDangerModal = 'Eliminar Iguala';
        this.descriptionDangerModal = '¿Está usted seguro de eliminar esta iguala?';
        this.loadIgualasList(environment.IGUALAS_URL);
        this.loadClientsList(environment.CLIENTS_URL);
        this.loadArtTypeList(environment.ART_TYPES_URL);
    };
    IgualasComponent.prototype.loadIgualasList = function (url) {
        var _this = this;
        this.httpService.getObject(url)
            .map(function (data) { return data.json(); })
            .subscribe(function (igualasListJSON) {
            _this.igualasList = [];
            for (var _i = 0, igualasListJSON_1 = igualasListJSON; _i < igualasListJSON_1.length; _i++) {
                var igualaJSON = igualasListJSON_1[_i];
                _this.igualasList.push(new Iguala(igualaJSON));
            }
        }, function (err) {
        });
    };
    IgualasComponent.prototype.loadClientsList = function (url) {
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
    IgualasComponent.prototype.loadArtTypeList = function (url) {
        var _this = this;
        var work_work_type_id = '1';
        var params = new URLSearchParams();
        params.set('work_work_type_id', work_work_type_id);
        this.httpService.getObject(url, params)
            .map(function (data) { return data.json(); })
            .subscribe(function (artTypesJSON) {
            _this.artWorkList = [];
            for (var _i = 0, artTypesJSON_1 = artTypesJSON; _i < artTypesJSON_1.length; _i++) {
                var artJSON = artTypesJSON_1[_i];
                _this.artWorkList.push(new ArtWork(artJSON));
            }
        }, function (err) {
        });
    };
    IgualasComponent.prototype.getIgualaFromTable = function (object) {
        this.iguala = object;
        this.currentArtWorkList = this.iguala.art_iguala;
    };
    IgualasComponent.prototype.onIgualaCreated = function (event) {
        this.igualasList.push(event);
    };
    IgualasComponent.prototype.onIgualaUpdated = function (event) {
        var oldIguala = this.igualasList.filter(function (iguala) { return iguala.id === event.id; })[0];
        var index = this.igualasList.indexOf(oldIguala);
        if (index >= 0) {
            this.igualasList[index] = event;
        }
    };
    IgualasComponent.prototype.removeIguala = function (object) {
        var _this = this;
        this.httpService.deleteObject(environment.IGUALAS_URL + object.id + '/').subscribe(function (result) {
            if (result.ok) {
                var index = _this.igualasList.indexOf(object);
                if (index >= 0) {
                    _this.igualasList.splice(index, 1);
                }
                _this.toaster.show(result, 'Iguala eliminada', 'La iguala se eliminó con éxito');
            }
        }, function (error) {
            _this.toaster.show(error, 'Error', 'Ocurrió un error al eliminar iguala');
        });
    };
    IgualasComponent.prototype.initializeModal = function () {
        this.iguala = new Iguala();
    };
    return IgualasComponent;
}());
IgualasComponent = __decorate([
    Component({
        selector: 'igualas',
        templateUrl: 'igualas.component.html'
    }),
    __metadata("design:paramtypes", [HttpService, CustomToastService])
], IgualasComponent);
export { IgualasComponent };
//# sourceMappingURL=../../../../../src/app/accounts/igualas/igualas.component.js.map