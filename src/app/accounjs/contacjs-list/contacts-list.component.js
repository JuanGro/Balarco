"use strict";var __decorate=this&&this.__decorate||function(t,e,r,o){var n,s=arguments.length,i=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,r,o);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(i=(s<3?n(i):s>3?n(e,r,i):n(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i},core_1=require("@angular/core"),ContactsListComponent=function(){function t(t){this.httpService=t}return t.prototype.ngOnInit=function(){this.title="Lista de contactos",this.loadDocuments("clients/contacts/")},t.prototype.loadDocuments=function(t){var e=this;this.httpService.getObject(t).map(function(t){return t.json()}).subscribe(function(t){return e.documents=t},function(t){console.log(t)})},t.prototype.initializeModal=function(){this.contact=null},t.prototype.removeContact=function(t){this.httpService.deleteObject("clients/contacts/"+t.id).subscribe(function(){})},t.prototype.getContactFromTable=function(t){this.contact=t},__decorate([core_1.Input()],t.prototype,"currentContact",void 0),t=__decorate([core_1.Component({selector:"contacts-list",templateUrl:"contacts-list.component.html"})],t)}();exports.ContactsListComponent=ContactsListComponent;