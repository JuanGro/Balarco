"use strict";var __decorate=this&&this.__decorate||function(t,e,o,r){var n,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(s=(i<3?n(s):i>3?n(e,o,s):n(e,o))||s);return i>3&&s&&Object.defineProperty(e,o,s),s},core_1=require("@angular/core"),forms_1=require("@angular/forms"),ClientFormComponent=function(){function t(t,e){this.fb=t,this.httpService=e,this.requestCloseModal=new core_1.EventEmitter,this.requestWarning=new core_1.EventEmitter}return t.prototype.ngOnChanges=function(){console.log(this.client),this.client?this.clientModalForm=this.fb.group({name:[this.client.name,[forms_1.Validators.required,forms_1.Validators.minLength(2)]],address:[this.client.address,[forms_1.Validators.required,forms_1.Validators.minLength(2)]]}):this.clientModalForm=this.fb.group({name:["",[forms_1.Validators.required,forms_1.Validators.minLength(2)]],address:["",[forms_1.Validators.required,forms_1.Validators.minLength(2)]]}),console.log(this.clientModalForm.status),console.log(this.clientModalForm.value)},t.prototype.submitClientForm=function(t,e){e===!0?this.client?this.submitUpdatedClient(t,this.client.id):(this.submitNewClient(t),console.log(t)):console.log("Error sending the client from internal methods")},t.prototype.submitUpdatedClient=function(t,e){this.httpService.updateObject("clients/clients/"+e+"/",t).subscribe(function(t){console.log(t)})},t.prototype.submitNewClient=function(t){this.httpService.postObject("clients/clients/",t).subscribe(function(t){console.log(t)})},t.prototype.requestWarningModal=function(){this.requestWarning.emit()},t.prototype.requestCloseThisModal=function(){this.requestCloseModal.emit()},t.prototype.resetForm=function(){this.clientModalForm.reset()},__decorate([core_1.Input()],t.prototype,"client",void 0),__decorate([core_1.Output()],t.prototype,"requestCloseModal",void 0),__decorate([core_1.Output()],t.prototype,"requestWarning",void 0),t=__decorate([core_1.Component({selector:"client-form",templateUrl:"client-form.component.html"})],t)}();exports.ClientFormComponent=ClientFormComponent;