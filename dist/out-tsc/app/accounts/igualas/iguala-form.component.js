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
import { Iguala } from './iguala-model';
var IgualaFormComponent = (function () {
    function IgualaFormComponent(httpService) {
        this.httpService = httpService;
    }
    IgualaFormComponent.prototype.ngOnChanges = function () {
        this.iguala = {
            name: '', client: null, start_date: null, end_date: null, is_active: true
        };
    };
    IgualaFormComponent.prototype.submitIgualaForm = function (value) {
        console.log("In submit!");
        console.log(this.iguala);
    };
    return IgualaFormComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Iguala)
], IgualaFormComponent.prototype, "iguala", void 0);
IgualaFormComponent = __decorate([
    Component({
        selector: 'iguala-form',
        templateUrl: 'iguala-form.component.html'
    }),
    __metadata("design:paramtypes", [HttpService])
], IgualaFormComponent);
export { IgualaFormComponent };
//# sourceMappingURL=../../../../../src/app/accounts/igualas/iguala-form.component.js.map