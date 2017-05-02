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
import { HttpService } from './../../shared/http-service/http.service';
import { CustomToastService } from '../../shared/toast/custom-toast.service';
import { User } from '../../admin/users/user-model';
import { Work } from '../../general-user/works/work-model';
import { Designer } from '../../general-user/works/designer/designer-model';
import { URLSearchParams } from '@angular/http';
import { environment } from '../../../environments/environment';
var AssignmentsComponent = (function () {
    function AssignmentsComponent(httpService, toaster) {
        this.httpService = httpService;
        this.toaster = toaster;
    }
    AssignmentsComponent.prototype.ngOnInit = function () {
        this.title = 'Asignaciones';
        this.titleUpdateModal = 'Asignar diseñadores a trabajo';
        this.designerListDefault = [];
        this.loadWorksList(environment.WORKS_URL);
        this.loadUserList(environment.USERS_URL);
    };
    AssignmentsComponent.prototype.loadWorksList = function (url) {
        var _this = this;
        var params = new URLSearchParams();
        params.append('current_status_id', '1');
        this.httpService.getObject(url, params)
            .map(function (data) { return data.json(); })
            .subscribe(function (worksListJSON) {
            _this.worksList = [];
            _this.completeWorksList = [];
            for (var _i = 0, worksListJSON_1 = worksListJSON; _i < worksListJSON_1.length; _i++) {
                var workJSON = worksListJSON_1[_i];
                _this.worksList.push(new Work(workJSON));
                _this.completeWorksList.push(new Work(workJSON));
            }
        }, function (error) {
            _this.toaster.show(error, 'Error', 'Ocurrió un error al cargar los trabajos');
        });
    };
    AssignmentsComponent.prototype.loadUserList = function (url) {
        var _this = this;
        var params = new URLSearchParams();
        params.append('group_name', 'Super usuario');
        params.append('group_name', 'Director de arte');
        params.append('group_name', 'Diseñador SR');
        params.append('group_name', 'Diseñador JR');
        this.httpService.getObject(url, params)
            .map(function (data) { return data.json(); })
            .subscribe(function (userListJSON) {
            _this.userList = [];
            _this.designerListDefault = [];
            for (var _i = 0, userListJSON_1 = userListJSON; _i < userListJSON_1.length; _i++) {
                var userJSON = userListJSON_1[_i];
                _this.userList.push(new User(userJSON));
                var designer = new Designer();
                designer.designer = userJSON.id;
                designer.active_work = false;
                _this.designerListDefault.push(designer);
            }
        }, function (error) {
            _this.toaster.show(error, 'Error', 'Ocurrió un error al cargar los usuarios');
        });
    };
    AssignmentsComponent.prototype.getValueSearch = function (value) {
        this.valueSearch = value;
        this.worksList = [];
        this.completeWorksList.sort();
        if (this.valueSearch === '') {
            this.worksList = this.completeWorksList;
        }
        else {
            for (var _i = 0, _a = this.completeWorksList; _i < _a.length; _i++) {
                var workFromList = _a[_i];
                if (workFromList.name.toLowerCase().includes(this.valueSearch.toLowerCase()) ||
                    workFromList.work_type_complete.name.toLowerCase().includes(this.valueSearch.toLowerCase())) {
                    this.worksList.push(new Work(workFromList));
                }
            }
        }
    };
    AssignmentsComponent.prototype.changeTitle = function (event) {
        this.titleUpdateModal = event;
    };
    AssignmentsComponent.prototype.getWorkFromTable = function (object) {
        this.work = object;
    };
    AssignmentsComponent.prototype.onWorkUpdated = function (event) {
        var oldWork = this.worksList.filter(function (work) { return work.id === event.id; })[0];
        var index = this.worksList.indexOf(oldWork);
        if (index >= 0) {
            this.worksList[index] = event;
        }
        var oldWorkBase = this.completeWorksList.filter(function (work) { return work.id === event.id; })[0];
        var indexBase = this.completeWorksList.indexOf(oldWorkBase);
        if (indexBase >= 0) {
            this.completeWorksList[indexBase] = event;
        }
    };
    return AssignmentsComponent;
}());
__decorate([
    Input('valueSearch'),
    __metadata("design:type", String)
], AssignmentsComponent.prototype, "valueSearch", void 0);
AssignmentsComponent = __decorate([
    Component({
        selector: 'assignments',
        templateUrl: 'assignments.component.html'
    }),
    __metadata("design:paramtypes", [HttpService, CustomToastService])
], AssignmentsComponent);
export { AssignmentsComponent };
//# sourceMappingURL=../../../../../../src/app/design-director/assignments/assignments.component.js.map