webpackJsonp([6,10],{

/***/ 1071:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(511);


/***/ },

/***/ 433:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'body',
        template: '<router-outlet></router-outlet>'
    })
], AppComponent);

//# sourceMappingURL=/Users/juan/Desktop/Balarco/src/app.component.js.map

/***/ },

/***/ 434:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FullLayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FullLayoutComponent = (function () {
    /* End of example */
    function FullLayoutComponent() {
        /* Example */
        this.charge = "Cuentas";
        //We are going to make some permissions for the example
        //public permission: number = 1;
        this.designDirector = true;
        this.designer = true;
        this.accounts = true;
        this.admin = true;
        this.disabled = false;
        this.status = { isopen: false };
    }
    FullLayoutComponent.prototype.toggled = function (open) {
        console.log('Dropdown is now: ', open);
    };
    FullLayoutComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    FullLayoutComponent.prototype.ngOnInit = function () { };
    return FullLayoutComponent;
}());
FullLayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(806)
    }),
    __metadata("design:paramtypes", [])
], FullLayoutComponent);

//# sourceMappingURL=/Users/juan/Desktop/Balarco/src/full-layout.component.js.map

/***/ },

/***/ 435:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SimpleLayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SimpleLayoutComponent = (function () {
    function SimpleLayoutComponent() {
    }
    SimpleLayoutComponent.prototype.ngOnInit = function () { };
    return SimpleLayoutComponent;
}());
SimpleLayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: '<router-outlet></router-outlet>',
    }),
    __metadata("design:paramtypes", [])
], SimpleLayoutComponent);

//# sourceMappingURL=/Users/juan/Desktop/Balarco/src/simple-layout.component.js.map

/***/ },

/***/ 510:
/***/ function(module, exports, __webpack_require__) {

var map = {
	"./accounts/accounts.module": [
		1074,
		0
	],
	"./admin/admin.module": [
		1075,
		1
	],
	"./dashboard/dashboard.module": [
		1076,
		5
	],
	"./design-director/design-director.module": [
		1077,
		3
	],
	"./designer/designer.module": [
		1078,
		2
	],
	"./pages/pages.module": [
		1079,
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 510;


/***/ },

/***/ 511:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(640);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=/Users/juan/Desktop/Balarco/src/main.js.map

/***/ },

/***/ 519:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CompletedDesignsListService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompletedDesignsListService = (function () {
    function CompletedDesignsListService(http) {
        this.http = http;
        this.completedDesignsListUrl = 'http://jsonplaceholder.typicode.com/posts';
        //Nothing here
    }
    //Get the json with observables
    CompletedDesignsListService.prototype.getDocuments = function () {
        return this.http.get(this.completedDesignsListUrl)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //sendDocuments(): {}
    CompletedDesignsListService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(errMsg);
    };
    return CompletedDesignsListService;
}());
CompletedDesignsListService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], CompletedDesignsListService);

var _a;
//# sourceMappingURL=/Users/juan/Desktop/Balarco/src/completed-designs-list.service.js.map

/***/ },

/***/ 638:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_dropdown__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_tabs__ = __webpack_require__(799);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_nav_dropdown_directive__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_completed_designs_list_service__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_charts_ng2_charts__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_sidebar_directive__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_aside_directive__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_breadcrumb_component__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_routing__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__layouts_full_layout_component__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__layouts_simple_layout_component__ = __webpack_require__(435);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//Django







// Routing Module

//Layouts


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_14__app_routing__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_dropdown__["a" /* DropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_tabs__["a" /* TabsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_10_ng2_charts_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* HttpModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_15__layouts_full_layout_component__["a" /* FullLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_16__layouts_simple_layout_component__["a" /* SimpleLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_6__shared_nav_dropdown_directive__["a" /* NAV_DROPDOWN_DIRECTIVES */],
            __WEBPACK_IMPORTED_MODULE_13__shared_breadcrumb_component__["a" /* BreadcrumbsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__shared_sidebar_directive__["a" /* SIDEBAR_TOGGLE_DIRECTIVES */],
            __WEBPACK_IMPORTED_MODULE_12__shared_aside_directive__["a" /* AsideToggleDirective */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__admin_completed_designs_list_service__["a" /* CompletedDesignsListService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* LocationStrategy */],
                useClass: __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* HashLocationStrategy */]
            }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/Users/juan/Desktop/Balarco/src/app.module.js.map

/***/ },

/***/ 639:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layouts_full_layout_component__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layouts_simple_layout_component__ = __webpack_require__(435);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//Layouts


var routes = [
    {
        path: '',
        redirectTo: 'designer/owned-designs-list',
        pathMatch: 'full',
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__layouts_full_layout_component__["a" /* FullLayoutComponent */],
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            /*{
              path: 'components',
              loadChildren: './components/components.module#ComponentsModule'
            },
            {
              path: 'icons',
              loadChildren: './icons/icons.module#IconsModule'
            },
            {
              path: 'forms',
              loadChildren: './forms/forms.module#FormsModule'
            },
            {
              path: 'plugins',
              loadChildren: './plugins/plugins.module#PluginsModule'
            },
            {
              path: 'widgets',
              loadChildren: './widgets/widgets.module#WidgetsModule'
            },
            {
              path: 'charts',
              loadChildren: './chartjs/chartjs.module#ChartJSModule'
            },
            {
              path: 'uikits',
              loadChildren: './uikits/uikits.module#UIKitsModule'
            }, */
            //New
            {
                path: 'accounts',
                loadChildren: './accounts/accounts.module#AccountsModule'
            },
            {
                path: 'admin',
                loadChildren: './admin/admin.module#AdminModule'
            },
            {
                path: 'design-director',
                loadChildren: './design-director/design-director.module#DesignDirectorModule'
            },
            {
                path: 'designer',
                loadChildren: './designer/designer.module#DesignerModule'
            }
        ]
    },
    {
        path: 'pages',
        component: __WEBPACK_IMPORTED_MODULE_3__layouts_simple_layout_component__["a" /* SimpleLayoutComponent */],
        data: {
            title: 'Pages'
        },
        children: [
            {
                path: '',
                loadChildren: './pages/pages.module#PagesModule',
            }
        ]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=/Users/juan/Desktop/Balarco/src/app.routing.js.map

/***/ },

/***/ 640:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(433);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(638);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/Users/juan/Desktop/Balarco/src/index.js.map

/***/ },

/***/ 641:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AsideToggleDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
* Allows the aside to be toggled via click.
*/
var AsideToggleDirective = (function () {
    function AsideToggleDirective() {
    }
    AsideToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('aside-menu-hidden');
    };
    return AsideToggleDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AsideToggleDirective.prototype, "toggleOpen", null);
AsideToggleDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '.aside-menu-toggler',
    }),
    __metadata("design:paramtypes", [])
], AsideToggleDirective);

//# sourceMappingURL=/Users/juan/Desktop/Balarco/src/aside.directive.js.map

/***/ },

/***/ 642:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BreadcrumbsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BreadcrumbsComponent = (function () {
    function BreadcrumbsComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    BreadcrumbsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */]; }).subscribe(function (event) {
            _this.breadcrumbs = [];
            var currentRoute = _this.route.root, url = '';
            do {
                var childrenRoutes = currentRoute.children;
                currentRoute = null;
                childrenRoutes.forEach(function (route) {
                    if (route.outlet === 'primary') {
                        var routeSnapshot = route.snapshot;
                        url += '/' + routeSnapshot.url.map(function (segment) { return segment.path; }).join('/');
                        _this.breadcrumbs.push({
                            label: route.snapshot.data,
                            url: url
                        });
                        currentRoute = route;
                    }
                });
            } while (currentRoute);
        });
    };
    return BreadcrumbsComponent;
}());
BreadcrumbsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'breadcrumbs',
        template: "\n  <template ngFor let-breadcrumb [ngForOf]=\"breadcrumbs\" let-last = last>\n    <li class=\"breadcrumb-item\" *ngIf=\"breadcrumb.label.title&&breadcrumb.url.substring(breadcrumb.url.length-1) == '/' || breadcrumb.label.title&&last\" [ngClass]=\"{active: last}\">\n      <a *ngIf=\"!last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</a>\n      <span *ngIf=\"last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</span>\n    </li>\n  </template>"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === "function" && _b || Object])
], BreadcrumbsComponent);

var _a, _b;
//# sourceMappingURL=/Users/juan/Desktop/Balarco/src/breadcrumb.component.js.map

/***/ },

/***/ 643:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* unused harmony export NavDropdownDirective */
/* unused harmony export NavDropdownToggleDirective */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NAV_DROPDOWN_DIRECTIVES; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavDropdownDirective = (function () {
    function NavDropdownDirective() {
        this._open = false;
    }
    /**
    * Checks if the dropdown menu is open or not.
    */
    NavDropdownDirective.prototype.isOpen = function () { return this._open; };
    /**
    * Opens the dropdown menu.
    */
    NavDropdownDirective.prototype.open = function () {
        this._open = true;
    };
    /**
    * Closes the dropdown menu .
    */
    NavDropdownDirective.prototype.close = function () {
        this._open = false;
    };
    /**
    * Toggles the dropdown menu.
    */
    NavDropdownDirective.prototype.toggle = function () {
        if (this.isOpen()) {
            this.close();
        }
        else {
            this.open();
        }
    };
    return NavDropdownDirective;
}());
NavDropdownDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '.nav-dropdown',
        host: {
            '[class.open]': '_open',
        }
    })
], NavDropdownDirective);

/**
* Allows the dropdown to be toggled via click.
*/
var NavDropdownToggleDirective = (function () {
    function NavDropdownToggleDirective(dropdown) {
        this.dropdown = dropdown;
    }
    NavDropdownToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        this.dropdown.toggle();
    };
    return NavDropdownToggleDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NavDropdownToggleDirective.prototype, "toggleOpen", null);
NavDropdownToggleDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '.nav-dropdown-toggle',
    }),
    __metadata("design:paramtypes", [NavDropdownDirective])
], NavDropdownToggleDirective);

var NAV_DROPDOWN_DIRECTIVES = [NavDropdownDirective, NavDropdownToggleDirective];
// export const NGB_DROPDOWN_DIRECTIVES = [NgbDropdownToggle, NgbDropdown];
//# sourceMappingURL=/Users/juan/Desktop/Balarco/src/nav-dropdown.directive.js.map

/***/ },

/***/ 644:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* unused harmony export SidebarToggleDirective */
/* unused harmony export MobileSidebarToggleDirective */
/* unused harmony export SidebarOffCanvasCloseDirective */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SIDEBAR_TOGGLE_DIRECTIVES; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
* Allows the sidebar to be toggled via click.
*/
var SidebarToggleDirective = (function () {
    function SidebarToggleDirective() {
    }
    SidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-hidden');
    };
    return SidebarToggleDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SidebarToggleDirective.prototype, "toggleOpen", null);
SidebarToggleDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '.sidebar-toggler',
    }),
    __metadata("design:paramtypes", [])
], SidebarToggleDirective);

var MobileSidebarToggleDirective = (function () {
    function MobileSidebarToggleDirective() {
    }
    //Check if element has class
    MobileSidebarToggleDirective.prototype.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    MobileSidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-mobile-show');
    };
    return MobileSidebarToggleDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MobileSidebarToggleDirective.prototype, "toggleOpen", null);
MobileSidebarToggleDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '.mobile-sidebar-toggler',
    }),
    __metadata("design:paramtypes", [])
], MobileSidebarToggleDirective);

/**
* Allows the off-canvas sidebar to be closed via click.
*/
var SidebarOffCanvasCloseDirective = (function () {
    function SidebarOffCanvasCloseDirective() {
    }
    //Check if element has class
    SidebarOffCanvasCloseDirective.prototype.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    //Toggle element class
    SidebarOffCanvasCloseDirective.prototype.toggleClass = function (elem, elementClassName) {
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
        if (this.hasClass(elem, elementClassName)) {
            while (newClass.indexOf(' ' + elementClassName + ' ') >= 0) {
                newClass = newClass.replace(' ' + elementClassName + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
        else {
            elem.className += ' ' + elementClassName;
        }
    };
    SidebarOffCanvasCloseDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        if (this.hasClass(document.querySelector('body'), 'sidebar-off-canvas')) {
            this.toggleClass(document.querySelector('body'), 'sidebar-opened');
        }
    };
    return SidebarOffCanvasCloseDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SidebarOffCanvasCloseDirective.prototype, "toggleOpen", null);
SidebarOffCanvasCloseDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '.sidebar-close',
    }),
    __metadata("design:paramtypes", [])
], SidebarOffCanvasCloseDirective);

var SIDEBAR_TOGGLE_DIRECTIVES = [SidebarToggleDirective, SidebarOffCanvasCloseDirective, MobileSidebarToggleDirective];
//# sourceMappingURL=/Users/juan/Desktop/Balarco/src/sidebar.directive.js.map

/***/ },

/***/ 645:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/juan/Desktop/Balarco/src/environment.js.map

/***/ },

/***/ 646:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1070);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/Users/juan/Desktop/Balarco/src/polyfills.js.map

/***/ },

/***/ 806:
/***/ function(module, exports) {

module.exports = "<header class=\"app-header navbar\">\n    <button class=\"navbar-toggler mobile-sidebar-toggler hidden-lg-up\" type=\"button\">&#9776;</button>\n    <a class=\"navbar-brand\" href=\"#\"></a>\n\n    <ul class=\"nav navbar-nav hidden-md-down b-r-1\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link navbar-toggler sidebar-toggler\" href=\"#\">&#9776;</a>\n        </li>\n    </ul>\n    <!--<form class=\"form-inline px-2 hidden-md-down\">\n        <i class=\"fa fa-search\"></i>\n        <input class=\"form-control\" type=\"text\" placeholder=\"Are you looking for something?\">\n    </form>-->\n    <ul class=\"nav navbar-nav ml-auto\">\n        <li class=\"nav-item dropdown hidden-md-down\" dropdown (onToggle)=\"toggled($event)\">\n            <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle [addToggleClass]=\"false\">\n                <i class=\"icon-bell\"></i>\n                <span class=\"badge badge-pill badge-danger\">3</span>\n            </a>\n            <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-lg\" dropdownMenu aria-labelledby=\"simple-dropdown\">\n\n                <div class=\"dropdown-header text-center\">\n                    <strong>You have 3 notifications</strong>\n                </div>\n\n                <a href=\"#\" class=\"dropdown-item\">\n                    <i class=\"icon-user-follow text-success\"></i> New user registered\n                </a>\n                <a href=\"#\" class=\"dropdown-item\">\n                    <i class=\"icon-user-unfollow text-danger\"></i> User deleted\n                </a>\n                <a href=\"#\" class=\"dropdown-item\">\n                    <i class=\"icon-chart text-info\"></i> Sales report is ready\n                </a>\n                <!-- <a href=\"#\" class=\"dropdown-item\">\n                    <i class=\"icon-basket-loaded text-primary\"></i> New client\n                </a>\n                <a href=\"#\" class=\"dropdown-item\">\n                    <i class=\"icon-speedometer text-warning\"></i> Server overloaded\n                </a>\n\n                <div class=\"dropdown-header text-center\">\n                    <strong>Server</strong>\n                </div>\n\n                <a href=\"#\" class=\"dropdown-item\">\n                    <div class=\"text-uppercase mb-q\">\n                        <small><b>CPU Usage</b>\n                        </small>\n                    </div>\n                    <span class=\"progress progress-xs\">\n                        <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </span>\n                    <small class=\"text-muted\">348 Processes. 1/4 Cores.</small>\n                </a>\n                <a href=\"#\" class=\"dropdown-item\">\n                    <div class=\"text-uppercase mb-q\">\n                        <small><b>Memory Usage</b>\n                        </small>\n                    </div>\n                    <span class=\"progress progress-xs\">\n                        <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 70%\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </span>\n                    <small class=\"text-muted\">11444GB/16384MB</small>\n                </a>\n                <a href=\"#\" class=\"dropdown-item\">\n                    <div class=\"text-uppercase mb-q\">\n                        <small><b>SSD 1 Usage</b>\n                        </small>\n                    </div>\n                    <span class=\"progress progress-xs\">\n                        <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 95%\" aria-valuenow=\"95\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </span>\n                    <small class=\"text-muted\">243GB/256GB</small>\n                </a>-->\n\n            </div>\n        </li>\n        <!-- <li class=\"nav-item dropdown hidden-md-down\" dropdown (onToggle)=\"toggled($event)\">\n            <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle [addToggleClass]=\"false\">\n                <i class=\"icon-list\"></i>\n                <span class=\"badge badge-pill badge-warning\">15</span>\n            </a>\n            <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-lg\" dropdownMenu aria-labelledby=\"simple-dropdown\">\n\n                <div class=\"dropdown-header text-center\">\n                    <strong>You have 5 pending tasks</strong>\n                </div>\n\n                <a href=\"#\" class=\"dropdown-item\">\n                    <div class=\"small mb-q\">Upgrade NPM &amp; Bower\n                        <span class=\"float-right\">\n                            <strong>0%</strong>\n                        </span>\n                    </div>\n                    <span class=\"progress progress-xs\">\n                        <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 0%\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </span>\n                </a>\n                <a href=\"#\" class=\"dropdown-item\">\n                    <div class=\"small mb-q\">ReactJS Version\n                        <span class=\"float-right\">\n                            <strong>25%</strong>\n                        </span>\n                    </div>\n                    <span class=\"progress progress-xs\">\n                        <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </span>\n                </a>\n                <a href=\"#\" class=\"dropdown-item\">\n                    <div class=\"small mb-q\">VueJS Version\n                        <span class=\"float-right\">\n                            <strong>50%</strong>\n                        </span>\n                    </div>\n                    <span class=\"progress progress-xs\">\n                        <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </span>\n                </a>\n                <a href=\"#\" class=\"dropdown-item\">\n                    <div class=\"small mb-q\">Add new layouts\n                        <span class=\"float-right\">\n                            <strong>75%</strong>\n                        </span>\n                    </div>\n                    <span class=\"progress progress-xs\">\n                        <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 75%\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </span>\n                </a>\n                <a href=\"#\" class=\"dropdown-item\">\n                    <div class=\"small mb-q\">Angular 2 Cli Version\n                        <span class=\"float-right\">\n                            <strong>100%</strong>\n                        </span>\n                    </div>\n                    <span class=\"progress progress-xs\">\n                        <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 100%\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </span>\n                </a>\n\n                <a href=\"#\" class=\"dropdown-item text-center\">\n                    <strong>View all tasks</strong>\n                </a>\n            </div>\n        </li>\n        <li class=\"nav-item dropdown hidden-md-down\" dropdown (onToggle)=\"toggled($event)\">\n            <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle [addToggleClass]=\"false\">\n                <i class=\"icon-envelope-letter\"></i>\n                <span class=\"badge badge-pill badge-info\">7</span>\n            </a>\n            <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-lg\" dropdownMenu aria-labelledby=\"simple-dropdown\">\n\n                <div class=\"dropdown-header text-center\">\n                    <strong>You have 4 messages</strong>\n                </div>\n\n                <a href=\"#\" class=\"dropdown-item\">\n                    <div class=\"message\">\n                        <div class=\"py-1 mr-1 float-left\">\n                            <div class=\"avatar\">\n                                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                                <span class=\"avatar-status badge-success\"></span>\n                            </div>\n                        </div>\n                        <div>\n                            <small class=\"text-muted\">John Doe</small>\n                            <small class=\"text-muted float-right mt-q\">Just now</small>\n                        </div>\n                        <div class=\"text-truncate font-weight-bold\">\n                            <span class=\"fa fa-exclamation text-danger\"></span>Important message</div>\n                        <div class=\"small text-muted text-truncate\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</div>\n                    </div>\n                </a>\n                <a href=\"#\" class=\"dropdown-item\">\n                    <div class=\"message\">\n                        <div class=\"py-1 mr-1 float-left\">\n                            <div class=\"avatar\">\n                                <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                                <span class=\"avatar-status badge-warning\"></span>\n                            </div>\n                        </div>\n                        <div>\n                            <small class=\"text-muted\">John Doe</small>\n                            <small class=\"text-muted float-right mt-q\">5 minutes ago</small>\n                        </div>\n                        <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n                        <div class=\"small text-muted text-truncate\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</div>\n                    </div>\n                </a>\n                <a href=\"#\" class=\"dropdown-item\">\n                    <div class=\"message\">\n                        <div class=\"py-1 mr-1 float-left\">\n                            <div class=\"avatar\">\n                                <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                                <span class=\"avatar-status badge-danger\"></span>\n                            </div>\n                        </div>\n                        <div>\n                            <small class=\"text-muted\">John Doe</small>\n                            <small class=\"text-muted float-right mt-q\">1:52 PM</small>\n                        </div>\n                        <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n                        <div class=\"small text-muted text-truncate\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</div>\n                    </div>\n                </a>\n                <a href=\"#\" class=\"dropdown-item\">\n                    <div class=\"message\">\n                        <div class=\"py-1 mr-1 float-left\">\n                            <div class=\"avatar\">\n                                <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                                <span class=\"avatar-status badge-info\"></span>\n                            </div>\n                        </div>\n                        <div>\n                            <small class=\"text-muted\">John Doe</small>\n                            <small class=\"text-muted float-right mt-q\">4:03 PM</small>\n                        </div>\n                        <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n                        <div class=\"small text-muted text-truncate\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</div>\n                    </div>\n                </a>\n\n                <a href=\"#\" class=\"dropdown-item text-center\">\n                    <strong>View all messages</strong>\n                </a>\n            </div>\n        </li>\n        <li class=\"nav-item hidden-md-down\">\n            <a class=\"nav-link\" href=\"#\"><i class=\"icon-location-pin\"></i></a>\n        </li>-->\n        <li class=\"nav-item dropdown\" dropdown>\n            <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle [addToggleClass]=\"false\">\n                <i class=\"icon-settings\"></i>\n            </a>\n            <div class=\"dropdown-menu dropdown-menu-right\" dropdownMenu aria-labelledby=\"simple-dropdown\">\n\n                <div class=\"dropdown-header text-center\">\n                    <strong>Account</strong>\n                </div>\n\n                <!-- <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-bell-o\"></i> Updates<span class=\"badge badge-info\">42</span></a>\n                <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-envelope-o\"></i> Messages<span class=\"badge badge-success\">42</span></a>\n                <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-tasks\"></i> Tasks<span class=\"badge badge-danger\">42</span></a>\n                <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-comments\"></i> Comment<span class=\"badge badge-warning\">42</span></a>\n\n                <div class=\"dropdown-header text-center\">\n                    <strong>Settings</strong>\n                </div> -->\n\n                <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-user\"></i> Profile</a>\n                <!--<a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-wrench\"></i> Setting</a>\n                <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-usd\"></i> Payments<span class=\"badge badge-default\">42</span></a>\n                <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-file\"></i> Projects<span class=\"badge badge-primary\">42</span></a>\n                <div class=\"divider\"></div>\n                <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-shield\"></i> Lock account</a>-->\n                <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-lock\"></i> Logout</a>\n            </div>\n        </li>\n        <li class=\"nav-item hidden-md-down\">\n            <a class=\"nav-link navbar-toggler aside-menu-toggler\" href=\"#\">&#9776;</a>\n        </li>\n    </ul>\n\n</header>\n\n<div class=\"app-body\">\n    <div class=\"sidebar\">\n\n        <div class=\"sidebar-header\">\n            <img src=\"assets/img/avatars/8.jpg\" class=\"img-avatar\" alt=\"Avatar\">\n            <div>\n                <strong>Telma</strong>\n            </div>\n            <div class=\"text-muted\">\n                <small> Super Usuario</small>\n            </div>\n\n            <!--<div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n                <button type=\"button\" class=\"btn btn-link\">\n                    <i class=\"icon-settings\"></i>\n                </button>\n                <button type=\"button\" class=\"btn btn-link\">\n                    <i class=\"icon-speech\"></i>\n                    <span class=\"badge badge-warning badge-pill\">5</span>\n                </button>\n                <button type=\"button\" class=\"btn btn-link\">\n                    <i class=\"icon-user\"></i>\n                </button>\n            </div>-->\n        </div>\n\n        <!-- Left panel options -->\n\n        <nav class=\"sidebar-nav\">\n            <ul class=\"nav\">\n                <!-- <li class=\"nav-title\">\n                    Dashboard\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\"><i class=\"icon-speedometer\"></i> Dashboard <span class=\"badge badge-info\">NEW</span></a>\n                </li> -->\n\n                <!-- Example -->\n                <li class=\"divider\"></li>\n                <li class=\"nav-title\">\n                    {{ charge }}\n                </li>\n\n                <!-- Admin -->\n                <li *ngIf=\"admin == true\" class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">   \n                    <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/admin/completed-designs-list']\"><i class=\"glyphicons glyphicons-crown\"></i> Diseños terminados</a>\n                </li>\n\n                <!-- Account -->\n                <li *ngIf=\"accounts == true\" class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">   \n                    <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/accounts/designs-list']\"><i class=\"glyphicons glyphicons-shopping-cart\"></i> Diseños activos</a>\n                </li>\n                <li *ngIf=\"accounts == true\" class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">   \n                    <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/accounts/clients-list']\"><i class=\"glyphicons glyphicons-shopping-cart\"></i> Clientes</a>\n                </li>\n                <li *ngIf=\"accounts == true\" class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">   \n                    <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/accounts/companies-list']\"><i class=\"glyphicons glyphicons-shopping-cart\"></i> Compañias</a>\n                </li>\n                <li *ngIf=\"accounts == true\" class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">   \n                    <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/accounts/igualas-list']\"><i class=\"glyphicons glyphicons-shopping-cart\"></i> Igualas</a>\n                </li>\n\n                <!-- Design director -->\n                <li *ngIf=\"designDirector == true\" class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\n                    <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/design-director/designs-list']\"><i class=\"glyphicons glyphicons-pen\"></i> Diseños</a>\n                </li>\n\n                <!-- Designer -->\n                <li *ngIf=\"designer == true\" class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">   \n                    <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/designer/owned-designs-list']\"><i class=\"glyphicons glyphicons-brush\"></i> Mis diseños</a>\n                </li>\n\n                <!-- End of example -->\n                \n                <!-- End left panel options -->\n\n                <!-- <li class=\"divider m-h\"></li>\n                <li class=\"nav-title\">\n                    System Utilization\n                </li>\n                <li class=\"nav-item px-1 hidden-cn\">\n                    <div class=\"text-uppercase mb-q\">\n                        <small><b>CPU Usage</b>\n                        </small>\n                    </div>\n                    <div class=\"progress progress-xs\">\n                        <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </div>\n                    <small class=\"text-muted\">348 Processes. 1/4 Cores.</small>\n                </li>\n                <li class=\"nav-item px-1 hidden-cn\">\n                    <div class=\"text-uppercase mb-q\">\n                        <small><b>Memory Usage</b>\n                        </small>\n                    </div>\n                    <div class=\"progress progress-xs\">\n                        <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 70%\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </div>\n                    <small class=\"text-muted\">11444GB/16384MB</small>\n                </li>\n                <li class=\"nav-item px-1 hidden-cn\">\n                    <div class=\"text-uppercase mb-q\">\n                        <small><b>SSD 1 Usage</b>\n                        </small>\n                    </div>\n                    <div class=\"progress progress-xs\">\n                        <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 95%\" aria-valuenow=\"95\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </div>\n                    <small class=\"text-muted\">243GB/256GB</small>\n                </li> -->\n\n            </ul>\n        </nav>\n    </div>\n\n    <!-- Main content -->\n    <main class=\"main\">\n\n        <!-- Breadcrumb -->\n        <ol class=\"breadcrumb mb-0\">\n            <breadcrumbs></breadcrumbs>\n        </ol>\n\n        <div class=\"container-fluid\">\n            <router-outlet></router-outlet>\n        </div>\n        <!-- /.conainer-fluid -->\n    </main>\n\n    <aside class=\"aside-menu\">\n        <!--<tabset>\n            <tab>\n                <template tabHeading><i class=\"icon-list\"></i>\n                </template>-->\n                <div class=\"callout m-0 py-h text-muted text-center bg-faded text-uppercase\">\n                    <small><b>Today</b>\n                    </small>\n                </div>\n                <hr class=\"transparent mx-1 my-0\">\n                <div class=\"callout callout-warning m-0 py-1\">\n                    <div class=\"avatar float-right\">\n                        <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                    </div>\n                    <div>Meeting with\n                        <strong>Lucas</strong>\n                    </div>\n                    <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 1 - 3pm</small>\n                    <small class=\"text-muted\"><i class=\"icon-location-pin\"></i>&nbsp; Palo Alto, CA</small>\n                </div>\n                <hr class=\"mx-1 my-0\">\n                <div class=\"callout callout-info m-0 py-1\">\n                    <div class=\"avatar float-right\">\n                        <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                    </div>\n                    <div>Skype with\n                        <strong>Megan</strong>\n                    </div>\n                    <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 4 - 5pm</small>\n                    <small class=\"text-muted\"><i class=\"icon-social-skype\"></i>&nbsp; On-line</small>\n                </div>\n                <hr class=\"transparent mx-1 my-0\">\n                <div class=\"callout m-0 py-h text-muted text-center bg-faded text-uppercase\">\n                    <small><b>Yesterday</b>\n                    </small>\n                </div>\n                <hr class=\"transparent mx-1 my-0\">\n                <div class=\"callout callout-info m-0 py-1\">\n                    <div class=\"avatar float-right\">\n                        <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                    </div>\n                    <div>Skype with\n                        <strong>Megan</strong>\n                    </div>\n                    <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 4 - 5pm</small>\n                    <small class=\"text-muted\"><i class=\"icon-social-skype\"></i>&nbsp; On-line</small>\n                </div>\n                <hr class=\"transparent mx-1 my-0\">\n                <!-- <div class=\"callout callout-danger m-0 py-1\">\n                    <div>New UI Project -\n                        <strong>deadline</strong>\n                    </div>\n                    <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 10 - 11pm</small>\n                    <small class=\"text-muted\"><i class=\"icon-home\"></i>&nbsp; creativeLabs HQ</small>\n                    <div class=\"avatars-stack mt-h\">\n                        <div class=\"avatar avatar-xs\">\n                            <img src=\"assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                        </div>\n                        <div class=\"avatar avatar-xs\">\n                            <img src=\"assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                        </div>\n                        <div class=\"avatar avatar-xs\">\n                            <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                        </div>\n                        <div class=\"avatar avatar-xs\">\n                            <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                        </div>\n                        <div class=\"avatar avatar-xs\">\n                            <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                        </div>\n                    </div>\n                </div>\n                <hr class=\"mx-1 my-0\">\n                <div class=\"callout callout-success m-0 py-1\">\n                    <div>\n                        <strong>#10 Startups.Garden</strong>Meetup</div>\n                    <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 1 - 3pm</small>\n                    <small class=\"text-muted\"><i class=\"icon-location-pin\"></i>&nbsp; Palo Alto, CA</small>\n                </div>\n                <hr class=\"mx-1 my-0\">\n                <div class=\"callout callout-primary m-0 py-1\">\n                    <div>\n                        <strong>Team meeting</strong>\n                    </div>\n                    <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 4 - 6pm</small>\n                    <small class=\"text-muted\"><i class=\"icon-home\"></i>&nbsp; creativeLabs HQ</small>\n                    <div class=\"avatars-stack mt-h\">\n                        <div class=\"avatar avatar-xs\">\n                            <img src=\"assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                        </div>\n                        <div class=\"avatar avatar-xs\">\n                            <img src=\"assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                        </div>\n                        <div class=\"avatar avatar-xs\">\n                            <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                        </div>\n                        <div class=\"avatar avatar-xs\">\n                            <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                        </div>\n                        <div class=\"avatar avatar-xs\">\n                            <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                        </div>\n                        <div class=\"avatar avatar-xs\">\n                            <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                        </div>\n                        <div class=\"avatar avatar-xs\">\n                            <img src=\"assets/img/avatars/8.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                        </div>\n                    </div>\n                </div>\n                <hr class=\"mx-1 my-0\">\n            </tab><tab>\n                <template tabHeading><i class=\"icon-speech\"></i>\n                </template>\n                <div class=\"p-1\">\n                    <div class=\"message\">\n                        <div class=\"py-1 pb-3 mr-1 float-left\">\n                            <div class=\"avatar\">\n                                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                                <span class=\"avatar-status badge-success\"></span>\n                            </div>\n                        </div>\n                        <div>\n                            <small class=\"text-muted\">Lukasz Holeczek</small>\n                            <small class=\"text-muted float-right mt-q\">1:52 PM</small>\n                        </div>\n                        <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n                        <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n                    </div>\n                    <hr>\n                    <div class=\"message\">\n                        <div class=\"py-1 pb-3 mr-1 float-left\">\n                            <div class=\"avatar\">\n                                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                                <span class=\"avatar-status badge-success\"></span>\n                            </div>\n                        </div>\n                        <div>\n                            <small class=\"text-muted\">Lukasz Holeczek</small>\n                            <small class=\"text-muted float-right mt-q\">1:52 PM</small>\n                        </div>\n                        <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n                        <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n                    </div>\n                    <hr>\n                    <div class=\"message\">\n                        <div class=\"py-1 pb-3 mr-1 float-left\">\n                            <div class=\"avatar\">\n                                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                                <span class=\"avatar-status badge-success\"></span>\n                            </div>\n                        </div>\n                        <div>\n                            <small class=\"text-muted\">Lukasz Holeczek</small>\n                            <small class=\"text-muted float-right mt-q\">1:52 PM</small>\n                        </div>\n                        <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n                        <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n                    </div>\n                    <hr>\n                    <div class=\"message\">\n                        <div class=\"py-1 pb-3 mr-1 float-left\">\n                            <div class=\"avatar\">\n                                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                                <span class=\"avatar-status badge-success\"></span>\n                            </div>\n                        </div>\n                        <div>\n                            <small class=\"text-muted\">Lukasz Holeczek</small>\n                            <small class=\"text-muted float-right mt-q\">1:52 PM</small>\n                        </div>\n                        <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n                        <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n                    </div>\n                    <hr>\n                    <div class=\"message\">\n                        <div class=\"py-1 pb-3 mr-1 float-left\">\n                            <div class=\"avatar\">\n                                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                                <span class=\"avatar-status badge-success\"></span>\n                            </div>\n                        </div>\n                        <div>\n                            <small class=\"text-muted\">Lukasz Holeczek</small>\n                            <small class=\"text-muted float-right mt-q\">1:52 PM</small>\n                        </div>\n                        <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n                        <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n                    </div>\n                </div>\n            </tab>\n            <tab>\n                <template tabHeading><i class=\"icon-settings\"></i>\n                </template>\n                <div class=\"p-1\">\n                    <h6>Settings</h6>\n\n                    <div class=\"aside-options\">\n                        <div class=\"clearfix mt-2\">\n                            <small><b>Option 1</b>\n                            </small>\n                            <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\n                                <input type=\"checkbox\" class=\"switch-input\" checked>\n                                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                                <span class=\"switch-handle\"></span>\n                            </label>\n                        </div>\n                        <div>\n                            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\n                        </div>\n                    </div>\n\n                    <div class=\"aside-options\">\n                        <div class=\"clearfix mt-1\">\n                            <small><b>Option 2</b>\n                            </small>\n                            <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\n                                <input type=\"checkbox\" class=\"switch-input\">\n                                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                                <span class=\"switch-handle\"></span>\n                            </label>\n                        </div>\n                        <div>\n                            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\n                        </div>\n                    </div>\n\n                    <div class=\"aside-options\">\n                        <div class=\"clearfix mt-1\">\n                            <small><b>Option 3</b>\n                            </small>\n                            <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\n                                <input type=\"checkbox\" class=\"switch-input\">\n                                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                                <span class=\"switch-handle\"></span>\n                            </label>\n                        </div>\n                    </div>\n\n                    <div class=\"aside-options\">\n                        <div class=\"clearfix mt-1\">\n                            <small><b>Option 4</b>\n                            </small>\n                            <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\n                                <input type=\"checkbox\" class=\"switch-input\" checked>\n                                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                                <span class=\"switch-handle\"></span>\n                            </label>\n                        </div>\n                    </div>\n\n                    <hr>\n                    <h6>System Utilization</h6>\n\n                    <div class=\"text-uppercase mb-q mt-2\">\n                        <small><b>CPU Usage</b>\n                        </small>\n                    </div>\n                    <div class=\"progress progress-xs\">\n                        <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </div>\n                    <small class=\"text-muted\">348 Processes. 1/4 Cores.</small>\n\n                    <div class=\"text-uppercase mb-q mt-h\">\n                        <small><b>Memory Usage</b>\n                        </small>\n                    </div>\n                    <div class=\"progress progress-xs\">\n                        <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 70%\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </div>\n                    <small class=\"text-muted\">11444GB/16384MB</small>\n\n                    <div class=\"text-uppercase mb-q mt-h\">\n                        <small><b>SSD 1 Usage</b>\n                        </small>\n                    </div>\n                    <div class=\"progress progress-xs\">\n                        <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 95%\" aria-valuenow=\"95\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </div>\n                    <small class=\"text-muted\">243GB/256GB</small>\n\n                    <div class=\"text-uppercase mb-q mt-h\">\n                        <small><b>SSD 2 Usage</b>\n                        </small>\n                    </div>\n                    <div class=\"progress progress-xs\">\n                        <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 10%\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </div>\n                    <small class=\"text-muted\">25GB/256GB</small>\n                </div>\n            </tab>\n        </tabset>-->\n    </aside>\n</div>\n\n<footer class=\"app-footer\">\n    <a href=\"https://genesisui.com\">Real</a> &copy; 2017 creativeLabs.\n    <span class=\"float-right\">\n        Powered by <a href=\"https://genesisui.com\">GenesisUI</a>\n    </span>\n</footer>\n"

/***/ }

},[1071]);
//# sourceMappingURL=main.bundle.map