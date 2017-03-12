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
import { HttpService } from './../../shared/http-service/http.service';
var IgualasComponent = (function () {
    function IgualasComponent(httpService) {
        this.httpService = httpService;
    }
    IgualasComponent.prototype.ngOnInit = function () {
        this.title = 'Lista de Igualas';
        this.titleNewModal = 'Nueva Iguala';
        this.titleUpdateModal = 'Modificar Iguala';
        this.titleDangerModal = 'Eliminar Iguala';
        this.descriptionDangerModal = '¿Estás seguro que deseas eliminar esta iguala?';
        this.loadIgualasList('works/igualas/');
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
    IgualasComponent.prototype.getIgualaFromTable = function (object) {
        this.iguala = object;
        console.log('object received');
        console.log(object);
    };
    IgualasComponent.prototype.onIgualaUpdated = function (event) {
        var oldIguala = this.igualasList.filter(function (iguala) { return iguala.id === event.id; })[0];
        var index = this.igualasList.indexOf(oldIguala);
        if (index >= 0) {
            this.igualasList[index] = event;
        }
    };
    return IgualasComponent;
}());
IgualasComponent = __decorate([
    Component({
        selector: 'igualas',
        templateUrl: 'igualas.component.html'
    }),
    __metadata("design:paramtypes", [HttpService])
], IgualasComponent);
export { IgualasComponent };
//# sourceMappingURL=../../../../../src/app/accounts/igualas/igualas.component.js.map