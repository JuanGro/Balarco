"use strict";var __extends=this&&this.__extends||function(t,e){function r(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)},__decorate=this&&this.__decorate||function(t,e,r,o){var n,s=arguments.length,i=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,r,o);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(i=(s<3?n(i):s>3?n(e,r,i):n(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i},core_1=require("@angular/core"),http_1=require("@angular/http"),Observable_1=require("rxjs/Observable"),environment_1=require("../../../environments/environment");require("rxjs/add/operator/catch"),require("rxjs/add/operator/finally"),require("rxjs/add/operator/map"),require("rxjs/add/observable/throw");var HttpService=function(t){function e(e,r){t.call(this,e,r);var o=JSON.parse(localStorage.getItem("currentUser"));this.token=o&&o.token}return __extends(e,t),e.prototype.request=function(t,e){return void 0===e&&(e={headers:new http_1.Headers}),this.configureRequest(t,e),this.interceptResponse(t,e)},e.prototype.configureRequest=function(t,e){"string"==typeof t?(t=this.getUrl(t),this.setHeaders(e)):(t.url=this.getUrl(t.url),this.setHeaders(t))},e.prototype.interceptResponse=function(e,r){var o=t.prototype.request.call(this,e,r)["catch"](this.onCatch())["finally"](this.onFinally());return o},e.prototype.getUrl=function(t){return t.includes("/assets/")?t:environment_1.environment.API_URL+t},e.prototype.setHeaders=function(t){var e=t.headers;e.set("Content-Type","application/json"),this.token&&e.set("Authorization","Token "+this.token)},e.prototype.onCatch=function(){return function(t){return 401===t.status||403===t.status,Observable_1.Observable["throw"](t)}},e.prototype.onFinally=function(){return function(){return console.log("FINISH!")}},e.prototype.login=function(t,e){var r=this,o=JSON.stringify({username:t,password:e});return this.post("users/api-login/",o).map(function(e){var o=e.json()&&e.json().token;if(o){r.token=o;var n=JSON.stringify({username:t,token:o});return localStorage.setItem("currentUser",n),!0}return!1})},e.prototype.logout=function(){this.token=null,localStorage.removeItem("currentUser")},e.prototype.postObject=function(t,e){return this.post(t,e)},e.prototype.getObject=function(t,e){return void 0===e&&(e=null),this.get(t,{search:e})},e.prototype.updateObject=function(t,e){return this.put(t,e)},e.prototype.deleteObject=function(t){return this["delete"](t)},e=__decorate([core_1.Injectable()],e)}(http_1.Http);exports.HttpService=HttpService;