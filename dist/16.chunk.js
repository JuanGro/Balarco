webpackJsonp([16,22],{

/***/ 1045:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(215);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PluginsRoutingModule; });
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
            title: 'Plugins'
        },
        children: [
            {
                path: 'calendar',
                loadChildren: './calendar/calendar.module#CalendarInitModule'
            },
            {
                path: 'datatable',
                loadChildren: './datatable/datatable.module#DatatableInitModule'
            },
            {
                path: 'draggable-cards',
                loadChildren: './draggable-cards/draggable-cards.module#DraggableCardsModule'
            },
            // Waiting fot angular2-ladda update, now have conflict with latest version of angular-cli
            //   {
            //     path: 'loading-buttons',
            //     loadChildren: './loading-buttons/loading-buttons.module#LoadingButtonsModule'
            //   },
            {
                path: 'notifications',
                loadChildren: './notifications/notifications.module#NotificationsModule'
            },
            {
                path: 'spinners',
                loadChildren: './spinners/spinners.module#SpinnersModule'
            }
        ]
    }
];
var PluginsRoutingModule = (function () {
    function PluginsRoutingModule() {
    }
    return PluginsRoutingModule;
}());
PluginsRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], PluginsRoutingModule);

//# sourceMappingURL=/Users/juan/Desktop/Angular2_CLI_Full_Project/src/plugins-routing.module.js.map

/***/ },

/***/ 667:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plugins_routing_module__ = __webpack_require__(1045);
/* harmony export (binding) */ __webpack_require__.d(exports, "PluginsModule", function() { return PluginsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//Routing

var PluginsModule = (function () {
    function PluginsModule() {
    }
    return PluginsModule;
}());
PluginsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__plugins_routing_module__["a" /* PluginsRoutingModule */]
        ],
        declarations: []
    })
], PluginsModule);

//# sourceMappingURL=/Users/juan/Desktop/Angular2_CLI_Full_Project/src/plugins.module.js.map

/***/ }

});
//# sourceMappingURL=16.bundle.map