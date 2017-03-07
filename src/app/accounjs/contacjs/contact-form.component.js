"use strict";var __decorate=this&&this.__decorate||function(t,e,o,r){var i,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,r);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(s=(n<3?i(s):n>3?i(e,o,s):i(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s},core_1=require("@angular/core"),forms_1=require("@angular/forms"),ContactFormComponent=function(){function t(t,e){this.fb=t,this.httpService=e,this.requestCloseModal=new core_1.EventEmitter,this.requestWarning=new core_1.EventEmitter}return t.prototype.ngOnChanges=function(){var t="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`                          {|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";this.contact?this.contactsModalForm=this.fb.group({name:[this.contact.name,[forms_1.Validators.required,forms_1.Validators.minLength(2)]],last_name:[this.contact.last_name,[forms_1.Validators.required,forms_1.Validators.minLength(4)]],client:[this.contact.client,[forms_1.Validators.required]],charge:[this.contact.charge,[forms_1.Validators.required,forms_1.Validators.minLength(3)]],landline:[this.contact.landline,[forms_1.Validators.required,forms_1.Validators.minLength(6)]],extension:[this.contact.extension],mobile_phone_1:[this.contact.mobile_phone_1,[forms_1.Validators.required,forms_1.Validators.minLength(6)]],mobile_phone_2:[this.contact.mobile_phone_2],email:[this.contact.email,[forms_1.Validators.required,forms_1.Validators.pattern(t)]],alternate_email:[this.contact.alternate_email,[forms_1.Validators.pattern(t)]],is_active:[this.contact.is_active,[forms_1.Validators.required]]}):this.contactsModalForm=this.fb.group({name:["",[forms_1.Validators.required,forms_1.Validators.minLength(2)]],last_name:["",[forms_1.Validators.required,forms_1.Validators.minLength(4)]],client:["",[forms_1.Validators.required]],charge:["",[forms_1.Validators.required,forms_1.Validators.minLength(3)]],landline:["",[forms_1.Validators.required,forms_1.Validators.minLength(6)]],extension:[""],mobile_phone_1:["",[forms_1.Validators.required,forms_1.Validators.minLength(6)]],mobile_phone_2:[""],email:["",[forms_1.Validators.required,forms_1.Validators.pattern(t)]],alternate_email:["",[forms_1.Validators.pattern(t)]],is_active:[!0,[forms_1.Validators.required]]})},t.prototype.submitContactForm=function(t,e){e===!0?this.contact?this.submitUpdatedContact(t,this.contact.id):(this.submitNewContact(t),console.log(t)):console.log("Error sending the contact from internal methods")},t.prototype.submitUpdatedContact=function(t,e){this.httpService.updateObject("clients/contacts/"+e+"/",t).subscribe(function(){})},t.prototype.submitNewContact=function(t){this.httpService.postObject("clients/contacts/",t).subscribe(function(){})},t.prototype.requestWarningModal=function(){this.requestWarning.emit()},t.prototype.requestCloseThisModal=function(){this.requestCloseModal.emit()},t.prototype.resetForm=function(){this.contactsModalForm.reset()},__decorate([core_1.Input()],t.prototype,"contact",void 0),__decorate([core_1.Input("clientsList")],t.prototype,"clientsList",void 0),__decorate([core_1.Output()],t.prototype,"requestCloseModal",void 0),__decorate([core_1.Output()],t.prototype,"requestWarning",void 0),t=__decorate([core_1.Component({selector:"contact-form",templateUrl:"contact-form.component.html"})],t)}();exports.ContactFormComponent=ContactFormComponent;