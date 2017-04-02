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
import { ArtWork } from './art-works/art-work-model';
import { Client } from '../../accounts/clients/client-model';
import { Contact } from '../../accounts/contacts/contact-model';
import { Iguala } from '../../accounts/igualas/iguala-model';
import { Work } from './work-model';
import { WorkType } from './work-type/work-type-model';
import { URLSearchParams } from '@angular/http';
import { environment } from '../../../environments/environment';
var WorksComponent = (function () {
    function WorksComponent(httpService, toaster) {
        this.httpService = httpService;
        this.toaster = toaster;
    }
    WorksComponent.prototype.ngOnInit = function () {
        this.title = 'Lista de Trabajos';
        this.titleNewModal = 'Nuevo Trabajo';
        this.titleUpdateModal = 'Modificar Trabajo';
        this.titleDangerModal = 'Eliminar Trabajo';
        this.descriptionDangerModal = '¿Está usted seguro de eliminar este trabajo?';
        this.loadWorksList(environment.WORKS_URL);
        this.loadClientsList(environment.CLIENTS_URL);
        this.loadContactsList(environment.CONTACTS_URL);
        this.loadIgualasList(environment.IGUALAS_URL);
        this.loadWorkTypesList(environment.WORK_TYPES_URL);
        this.loadWorkTypesForGraduation(environment.ART_TYPES_URL);
    };
    WorksComponent.prototype.loadWorksList = function (url) {
        var _this = this;
        this.httpService.getObject(url)
            .map(function (data) { return data.json(); })
            .subscribe(function (worksListJSON) {
            _this.worksList = [];
            console.log(worksListJSON);
            for (var _i = 0, worksListJSON_1 = worksListJSON; _i < worksListJSON_1.length; _i++) {
                var workJSON = worksListJSON_1[_i];
                _this.worksList.push(new Work(workJSON));
            }
            console.log(_this.worksList);
        });
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
    WorksComponent.prototype.loadIgualasList = function (url) {
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
    WorksComponent.prototype.loadWorkTypesList = function (url) {
        var _this = this;
        this.httpService.getObject(url)
            .map(function (data) { return data.json(); })
            .subscribe(function (workTypesListJSON) {
            _this.workTypesList = [];
            for (var _i = 0, workTypesListJSON_1 = workTypesListJSON; _i < workTypesListJSON_1.length; _i++) {
                var workTypeJSON = workTypesListJSON_1[_i];
                _this.workTypesList.push(new WorkType(workTypeJSON));
            }
        });
    };
    WorksComponent.prototype.loadWorkTypesForGraduation = function (url) {
        var _this = this;
        var graduation_id = '2';
        var params = new URLSearchParams();
        params.set('work_work_type_id', graduation_id);
        this.httpService.getObject(url, params)
            .map(function (data) { return data.json(); })
            .subscribe(function (graduationArtTypesJSON) {
            _this.graduationArtTypes = [];
            for (var _i = 0, graduationArtTypesJSON_1 = graduationArtTypesJSON; _i < graduationArtTypesJSON_1.length; _i++) {
                var artType = graduationArtTypesJSON_1[_i];
                _this.graduationArtTypes.push(new ArtWork(artType));
            }
        });
    };
    WorksComponent.prototype.getWorkFromTable = function (object) {
        this.work = object;
    };
    WorksComponent.prototype.initializeModal = function () { };
    WorksComponent.prototype.onWorkCreated = function (event) {
        this.worksList.push(event);
    };
    WorksComponent.prototype.removeWork = function (object) {
        var _this = this;
        this.httpService.deleteObject(environment.WORKS_URL + object.id + '/').subscribe(function (result) {
            if (result.ok) {
                var index = _this.worksList.indexOf(object);
                if (index >= 0) {
                    _this.worksList.splice(index, 1);
                }
                _this.toaster.show(result, 'Trabajo eliminado', 'El trabajo se eliminó con éxito');
            }
        }, function (error) {
            _this.toaster.show(error, 'Error', 'Ocurrió un error al eliminar trabajo');
        });
    };
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