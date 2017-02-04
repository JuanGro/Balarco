webpackJsonp([15,22],{

/***/ 1049:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(215);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UIKitsRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    {
        path: '',
        data: {
            title: 'UIKits'
        },
        children: [
            {
                path: 'email',
                loadChildren: './email/email.module#EmailModule'
            },
            {
                path: 'invoicing',
                loadChildren: './invoicing/invoice.module#InvoiceModule'
            }
        ]
    }
];
var UIKitsRoutingModule = (function () {
    function UIKitsRoutingModule() {
    }
    return UIKitsRoutingModule;
}());
UIKitsRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], UIKitsRoutingModule);

//# sourceMappingURL=/Users/juan/Desktop/Angular2_CLI_Full_Project/src/uikits-routing.module.js.map

/***/ },

/***/ 671:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__uikits_routing_module__ = __webpack_require__(1049);
/* harmony export (binding) */ __webpack_require__.d(exports, "UIKitsModule", function() { return UIKitsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//Routing

var UIKitsModule = (function () {
    function UIKitsModule() {
    }
    return UIKitsModule;
}());
UIKitsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__uikits_routing_module__["a" /* UIKitsRoutingModule */]
        ],
        declarations: []
    })
], UIKitsModule);

//# sourceMappingURL=/Users/juan/Desktop/Angular2_CLI_Full_Project/src/uikits.module.js.map

/***/ }

});
//# sourceMappingURL=15.bundle.map