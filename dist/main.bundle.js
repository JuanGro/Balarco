webpackJsonp([18,22],{

/***/ 300:
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

//# sourceMappingURL=/Users/juan/Desktop/Angular2_CLI_Full_Project/src/app.component.js.map

/***/ },

/***/ 301:
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
    function FullLayoutComponent() {
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
        template: __webpack_require__(643)
    }),
    __metadata("design:paramtypes", [])
], FullLayoutComponent);

//# sourceMappingURL=/Users/juan/Desktop/Angular2_CLI_Full_Project/src/full-layout.component.js.map

/***/ },

/***/ 302:
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

//# sourceMappingURL=/Users/juan/Desktop/Angular2_CLI_Full_Project/src/simple-layout.component.js.map

/***/ },

/***/ 350:
/***/ function(module, exports, __webpack_require__) {

var map = {
	"./advanced-forms/advanced-forms.module": [
		658,
		2
	],
	"./basic-forms/basic-forms.module": [
		659,
		12
	],
	"./calendar/calendar.module": [
		663,
		1
	],
	"./chartjs/chartjs.module": [
		655,
		14
	],
	"./components/components.module": [
		656,
		3
	],
	"./dashboard/dashboard.module": [
		657,
		13
	],
	"./datatable/datatable.module": [
		664,
		0
	],
	"./draggable-cards/draggable-cards.module": [
		665,
		4
	],
	"./email/email.module": [
		669,
		8
	],
	"./forms/forms.module": [
		660,
		17
	],
	"./icons/icons.module": [
		661,
		6
	],
	"./invoicing/invoice.module": [
		670,
		10
	],
	"./notifications/notifications.module": [
		666,
		5
	],
	"./pages/pages.module": [
		662,
		7
	],
	"./plugins/plugins.module": [
		667,
		16
	],
	"./spinners/spinners.module": [
		668,
		11
	],
	"./uikits/uikits.module": [
		671,
		15
	],
	"./widgets/widgets.module": [
		672,
		9
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
webpackAsyncContext.id = 350;


/***/ },

/***/ 351:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(478);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=/Users/juan/Desktop/Angular2_CLI_Full_Project/src/main.js.map

/***/ },

/***/ 476:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_dropdown__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_tabs__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_nav_dropdown_directive__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts_ng2_charts__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_sidebar_directive__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_aside_directive__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_breadcrumb_component__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__layouts_full_layout_component__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__layouts_simple_layout_component__ = __webpack_require__(302);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











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
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_11__app_routing__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_dropdown__["a" /* DropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_tabs__["a" /* TabsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7_ng2_charts_ng2_charts__["ChartsModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__layouts_full_layout_component__["a" /* FullLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_13__layouts_simple_layout_component__["a" /* SimpleLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_6__shared_nav_dropdown_directive__["a" /* NAV_DROPDOWN_DIRECTIVES */],
            __WEBPACK_IMPORTED_MODULE_10__shared_breadcrumb_component__["a" /* BreadcrumbsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__shared_sidebar_directive__["a" /* SIDEBAR_TOGGLE_DIRECTIVES */],
            __WEBPACK_IMPORTED_MODULE_9__shared_aside_directive__["a" /* AsideToggleDirective */]
        ],
        providers: [{
                provide: __WEBPACK_IMPORTED_MODULE_2__angular_common__["LocationStrategy"],
                useClass: __WEBPACK_IMPORTED_MODULE_2__angular_common__["HashLocationStrategy"]
            }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/Users/juan/Desktop/Angular2_CLI_Full_Project/src/app.module.js.map

/***/ },

/***/ 477:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layouts_full_layout_component__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layouts_simple_layout_component__ = __webpack_require__(302);
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
        redirectTo: 'dashboard',
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
            {
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

//# sourceMappingURL=/Users/juan/Desktop/Angular2_CLI_Full_Project/src/app.routing.js.map

/***/ },

/***/ 478:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(300);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(476);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/Users/juan/Desktop/Angular2_CLI_Full_Project/src/index.js.map

/***/ },

/***/ 479:
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

//# sourceMappingURL=/Users/juan/Desktop/Angular2_CLI_Full_Project/src/aside.directive.js.map

/***/ },

/***/ 480:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__(361);
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
//# sourceMappingURL=/Users/juan/Desktop/Angular2_CLI_Full_Project/src/breadcrumb.component.js.map

/***/ },

/***/ 481:
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
//# sourceMappingURL=/Users/juan/Desktop/Angular2_CLI_Full_Project/src/nav-dropdown.directive.js.map

/***/ },

/***/ 482:
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
//# sourceMappingURL=/Users/juan/Desktop/Angular2_CLI_Full_Project/src/sidebar.directive.js.map

/***/ },

/***/ 483:
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
//# sourceMappingURL=/Users/juan/Desktop/Angular2_CLI_Full_Project/src/environment.js.map

/***/ },

/***/ 484:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/Users/juan/Desktop/Angular2_CLI_Full_Project/src/polyfills.js.map

/***/ },

/***/ 643:
/***/ function(module, exports) {

module.exports = "<header class=\"app-header navbar\">\n    <button class=\"navbar-toggler mobile-sidebar-toggler hidden-lg-up\" type=\"button\">&#9776;</button>\n    <a class=\"navbar-brand\" href=\"#\"></a>\n\n    <ul class=\"nav navbar-nav hidden-md-down b-r-1\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link navbar-toggler sidebar-toggler\" href=\"#\">&#9776;</a>\n        </li>\n    </ul>\n    <form class=\"form-inline px-2 hidden-md-down\">\n        <i class=\"fa fa-search\"></i>\n        <input class=\"form-control\" type=\"text\" placeholder=\"Are you looking for something?\">\n    </form>\n    <ul class=\"nav navbar-nav ml-auto\">\n        <li class=\"nav-item dropdown hidden-md-down\" dropdown (onToggle)=\"toggled($event)\">\n            <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle [addToggleClass]=\"false\">\n                <i class=\"icon-bell\"></i>\n                <span class=\"badge badge-pill badge-danger\">5</span>\n            </a>\n            <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-lg\" dropdownMenu aria-labelledby=\"simple-dropdown\">\n\n                <div class=\"dropdown-header text-center\">\n                    <strong>You have 5 notifications</strong>\n                </div>\n\n                <a href=\"#\" class=\"dropdown-item\">\n                    <i class=\"icon-user-follow text-success\"></i> New user registered\n                </a>\n                <a href=\"#\" class=\"dropdown-item\">\n                    <i class=\"icon-user-unfollow text-danger\"></i> User deleted\n                </a>\n                <a href=\"#\" class=\"dropdown-item\">\n                    <i class=\"icon-chart text-info\"></i> Sales report is ready\n                </a>\n                <a href=\"#\" class=\"dropdown-item\">\n                    <i class=\"icon-basket-loaded text-primary\"></i> New client\n                </a>\n                <a href=\"#\" class=\"dropdown-item\">\n                    <i class=\"icon-speedometer text-warning\"></i> Server overloaded\n                </a>\n\n                <div class=\"dropdown-header text-center\">\n                    <strong>Server</strong>\n                </div>\n\n                <a href=\"#\" class=\"dropdown-item\">\n                    <div class=\"text-uppercase mb-q\">\n                        <small><b>CPU Usage</b>\n                        </small>\n                    </div>\n                    <span class=\"progress progress-xs\">\n                        <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </span>\n                    <small class=\"text-muted\">348 Processes. 1/4 Cores.</small>\n                </a>\n                <a href=\"#\" class=\"dropdown-item\">\n                    <div class=\"text-uppercase mb-q\">\n                        <small><b>Memory Usage</b>\n                        </small>\n                    </div>\n                    <span class=\"progress progress-xs\">\n                        <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 70%\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </span>\n                    <small class=\"text-muted\">11444GB/16384MB</small>\n                </a>\n                <a href=\"#\" class=\"dropdown-item\">\n                    <div class=\"text-uppercase mb-q\">\n                        <small><b>SSD 1 Usage</b>\n                        </small>\n                    </div>\n                    <span class=\"progress progress-xs\">\n                        <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 95%\" aria-valuenow=\"95\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </span>\n                    <small class=\"text-muted\">243GB/256GB</small>\n                </a>\n\n            </div>\n        </li>\n        <li class=\"nav-item dropdown hidden-md-down\" dropdown (onToggle)=\"toggled($event)\">\n            <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle [addToggleClass]=\"false\">\n                <i class=\"icon-list\"></i>\n                <span class=\"badge badge-pill badge-warning\">15</span>\n            </a>\n            <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-lg\" dropdownMenu aria-labelledby=\"simple-dropdown\">\n\n                <div class=\"dropdown-header text-center\">\n                    <strong>You have 5 pending tasks</strong>\n                </div>\n\n                <a href=\"#\" class=\"dropdown-item\">\n                    <div class=\"small mb-q\">Upgrade NPM &amp; Bower\n                        <span class=\"float-right\">\n                            <strong>0%</strong>\n                        </span>\n                    </div>\n                    <span class=\"progress progress-xs\">\n                        <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 0%\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </span>\n                </a>\n                <a href=\"#\" class=\"dropdown-item\">\n                    <div class=\"small mb-q\">ReactJS Version\n                        <span class=\"float-right\">\n                            <strong>25%</strong>\n                        </span>\n                    </div>\n                    <span class=\"progress progress-xs\">\n                        <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </span>\n                </a>\n                <a href=\"#\" class=\"dropdown-item\">\n                    <div class=\"small mb-q\">VueJS Version\n                        <span class=\"float-right\">\n                            <strong>50%</strong>\n                        </span>\n                    </div>\n                    <span class=\"progress progress-xs\">\n                        <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </span>\n                </a>\n                <a href=\"#\" class=\"dropdown-item\">\n                    <div class=\"small mb-q\">Add new layouts\n                        <span class=\"float-right\">\n                            <strong>75%</strong>\n                        </span>\n                    </div>\n                    <span class=\"progress progress-xs\">\n                        <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 75%\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </span>\n                </a>\n                <a href=\"#\" class=\"dropdown-item\">\n                    <div class=\"small mb-q\">Angular 2 Cli Version\n                        <span class=\"float-right\">\n                            <strong>100%</strong>\n                        </span>\n                    </div>\n                    <span class=\"progress progress-xs\">\n                        <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 100%\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </span>\n                </a>\n\n                <a href=\"#\" class=\"dropdown-item text-center\">\n                    <strong>View all tasks</strong>\n                </a>\n            </div>\n        </li>\n        <li class=\"nav-item dropdown hidden-md-down\" dropdown (onToggle)=\"toggled($event)\">\n            <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle [addToggleClass]=\"false\">\n                <i class=\"icon-envelope-letter\"></i>\n                <span class=\"badge badge-pill badge-info\">7</span>\n            </a>\n            <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-lg\" dropdownMenu aria-labelledby=\"simple-dropdown\">\n\n                <div class=\"dropdown-header text-center\">\n                    <strong>You have 4 messages</strong>\n                </div>\n\n                <a href=\"#\" class=\"dropdown-item\">\n                    <div class=\"message\">\n                        <div class=\"py-1 mr-1 float-left\">\n                            <div class=\"avatar\">\n                                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                                <span class=\"avatar-status badge-success\"></span>\n                            </div>\n                        </div>\n                        <div>\n                            <small class=\"text-muted\">John Doe</small>\n                            <small class=\"text-muted float-right mt-q\">Just now</small>\n                        </div>\n                        <div class=\"text-truncate font-weight-bold\">\n                            <span class=\"fa fa-exclamation text-danger\"></span>Important message</div>\n                        <div class=\"small text-muted text-truncate\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</div>\n                    </div>\n                </a>\n                <a href=\"#\" class=\"dropdown-item\">\n                    <div class=\"message\">\n                        <div class=\"py-1 mr-1 float-left\">\n                            <div class=\"avatar\">\n                                <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                                <span class=\"avatar-status badge-warning\"></span>\n                            </div>\n                        </div>\n                        <div>\n                            <small class=\"text-muted\">John Doe</small>\n                            <small class=\"text-muted float-right mt-q\">5 minutes ago</small>\n                        </div>\n                        <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n                        <div class=\"small text-muted text-truncate\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</div>\n                    </div>\n                </a>\n                <a href=\"#\" class=\"dropdown-item\">\n                    <div class=\"message\">\n                        <div class=\"py-1 mr-1 float-left\">\n                            <div class=\"avatar\">\n                                <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                                <span class=\"avatar-status badge-danger\"></span>\n                            </div>\n                        </div>\n                        <div>\n                            <small class=\"text-muted\">John Doe</small>\n                            <small class=\"text-muted float-right mt-q\">1:52 PM</small>\n                        </div>\n                        <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n                        <div class=\"small text-muted text-truncate\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</div>\n                    </div>\n                </a>\n                <a href=\"#\" class=\"dropdown-item\">\n                    <div class=\"message\">\n                        <div class=\"py-1 mr-1 float-left\">\n                            <div class=\"avatar\">\n                                <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                                <span class=\"avatar-status badge-info\"></span>\n                            </div>\n                        </div>\n                        <div>\n                            <small class=\"text-muted\">John Doe</small>\n                            <small class=\"text-muted float-right mt-q\">4:03 PM</small>\n                        </div>\n                        <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n                        <div class=\"small text-muted text-truncate\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</div>\n                    </div>\n                </a>\n\n                <a href=\"#\" class=\"dropdown-item text-center\">\n                    <strong>View all messages</strong>\n                </a>\n            </div>\n        </li>\n        <li class=\"nav-item hidden-md-down\">\n            <a class=\"nav-link\" href=\"#\"><i class=\"icon-location-pin\"></i></a>\n        </li>\n        <li class=\"nav-item dropdown\" dropdown>\n            <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle [addToggleClass]=\"false\">\n                <i class=\"icon-settings\"></i>\n            </a>\n            <div class=\"dropdown-menu dropdown-menu-right\" dropdownMenu aria-labelledby=\"simple-dropdown\">\n\n                <div class=\"dropdown-header text-center\">\n                    <strong>Account</strong>\n                </div>\n\n                <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-bell-o\"></i> Updates<span class=\"badge badge-info\">42</span></a>\n                <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-envelope-o\"></i> Messages<span class=\"badge badge-success\">42</span></a>\n                <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-tasks\"></i> Tasks<span class=\"badge badge-danger\">42</span></a>\n                <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-comments\"></i> Comment<span class=\"badge badge-warning\">42</span></a>\n\n                <div class=\"dropdown-header text-center\">\n                    <strong>Settings</strong>\n                </div>\n\n                <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-user\"></i> Profile</a>\n                <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-wrench\"></i> Setting</a>\n                <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-usd\"></i> Payments<span class=\"badge badge-default\">42</span></a>\n                <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-file\"></i> Projects<span class=\"badge badge-primary\">42</span></a>\n                <div class=\"divider\"></div>\n                <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-shield\"></i> Lock account</a>\n                <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-lock\"></i> Logout</a>\n            </div>\n        </li>\n        <li class=\"nav-item hidden-md-down\">\n            <a class=\"nav-link navbar-toggler aside-menu-toggler\" href=\"#\">&#9776;</a>\n        </li>\n    </ul>\n\n</header>\n\n<div class=\"app-body\">\n    <div class=\"sidebar\">\n\n        <div class=\"sidebar-header\">\n            <img src=\"assets/img/avatars/8.jpg\" class=\"img-avatar\" alt=\"Avatar\">\n            <div>\n                <strong>JOHN DOE</strong>\n            </div>\n            <div class=\"text-muted\">\n                <small>Founder &amp; CEO</small>\n            </div>\n\n            <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n                <button type=\"button\" class=\"btn btn-link\">\n                    <i class=\"icon-settings\"></i>\n                </button>\n                <button type=\"button\" class=\"btn btn-link\">\n                    <i class=\"icon-speech\"></i>\n                    <span class=\"badge badge-warning badge-pill\">5</span>\n                </button>\n                <button type=\"button\" class=\"btn btn-link\">\n                    <i class=\"icon-user\"></i>\n                </button>\n            </div>\n        </div>\n\n        <nav class=\"sidebar-nav\">\n            <ul class=\"nav\">\n                <li class=\"nav-title\">\n                    Dashboard\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\"><i class=\"icon-speedometer\"></i> Dashboard <span class=\"badge badge-info\">NEW</span></a>\n                </li>\n\n                <li class=\"divider\"></li>\n                <li class=\"nav-title\">\n                    UI Elements\n                </li>\n                <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\n                    <a class=\"nav-link nav-dropdown-toggle\" href=\"#\"><i class=\"icon-puzzle\"></i> Components</a>\n                    <ul class=\"nav-dropdown-items\">\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/buttons']\"><i class=\"icon-puzzle\"></i> Buttons</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/social-buttons']\"><i class=\"icon-puzzle\"></i> Social Buttons</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/cards']\"><i class=\"icon-puzzle\"></i> Cards</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/forms']\"><i class=\"icon-puzzle\"></i> Forms</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/modals']\"><i class=\"icon-puzzle\"></i> Modals</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/switches']\"><i class=\"icon-puzzle\"></i> Switches</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/tables']\"><i class=\"icon-puzzle\"></i> Tables</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/tabs']\"><i class=\"icon-puzzle\"></i> Tabs</a>\n                        </li>\n                    </ul>\n                </li>\n                <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\n                    <a class=\"nav-link nav-dropdown-toggle\" href=\"#\"><i class=\"icon-star\"></i> Icons</a>\n                    <ul class=\"nav-dropdown-items\">\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/icons/font-awesome']\"><i class=\"icon-star\"></i> Font Awesome</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/icons/glyphicons']\"><i class=\"icon-star\"></i> Glyphicons</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/icons/glyphicons-filetypes']\"><i class=\"icon-star\"></i> Filetypes</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/icons/glyphicons-social']\"><i class=\"icon-star\"></i> Glyphicons Social</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/icons/simple-line-icons']\"><i class=\"icon-star\"></i> Simple Line Icons</a>\n                        </li>\n                    </ul>\n                </li>\n                <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\n                    <a class=\"nav-link nav-dropdown-toggle\" href=\"#\"><i class=\"icon-note\"></i> Forms</a>\n                    <ul class=\"nav-dropdown-items\">\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/forms/basic-forms']\"><i class=\"icon-note\"></i> Basic Forms</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/forms/advanced-forms']\"><i class=\"icon-note\"></i> Advanced Forms</a>\n                        </li>\n                    </ul>\n                </li>\n                <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\n                    <a class=\"nav-link nav-dropdown-toggle\" href=\"#\"><i class=\"icon-energy\"></i> Plugins</a>\n                    <ul class=\"nav-dropdown-items\">\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/plugins/calendar']\"><i class=\"icon-calendar\"></i> Calendar</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/plugins/datatable']\"><i class=\"icon-menu\"></i> DataTable</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/plugins/draggable-cards']\"><i class=\"icon-cursor-move\"></i> Draggable Cards</a>\n                        </li>\n                        <!-- <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/plugins/loading-buttons']\"><i class=\"icon-cursor\"></i> Loading Buttons</a>\n            </li> -->\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/plugins/notifications']\"><i class=\"icon-info\"></i> Notifications</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/plugins/spinners']\"><i class=\"fa fa-spinner\"></i> Spinners</a>\n                        </li>\n                    </ul>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/widgets']\"><i class=\"icon-calculator\"></i> Widgets <span class=\"badge badge-info\">NEW</span></a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/charts']\"><i class=\"icon-pie-chart\"></i> Charts</a>\n                </li>\n                <li class=\"divider\"></li>\n                <li class=\"nav-title\">\n                    Extras\n                </li>\n                <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\n                    <a class=\"nav-link nav-dropdown-toggle\" href=\"#\"><i class=\"icon-star\"></i> Pages</a>\n                    <ul class=\"nav-dropdown-items\">\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pages/login']\"><i class=\"icon-star\"></i> Login</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pages/register']\"><i class=\"icon-star\"></i> Register</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pages/404']\"><i class=\"icon-star\"></i> Error 404</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pages/500']\"><i class=\"icon-star\"></i> Error 500</a>\n                        </li>\n                    </ul>\n                </li>\n                <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\n                    <a class=\"nav-link nav-dropdown-toggle\" href=\"#\"><i class=\"icon-layers\"></i> UI Kits</a>\n\n                    <ul class=\"nav-dropdown-items\">\n                        <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\n                            <a class=\"nav-link nav-dropdown-toggle\" href=\"#\"><i class=\"icon-speech\"></i> Invoicing</a>\n                            <ul class=\"nav-dropdown-items\">\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/uikits/invoicing/invoice']\"><i class=\"icon-speech\"></i> Invoice</a>\n                                </li>\n                            </ul>\n                        </li>\n                    </ul>\n                    <ul class=\"nav-dropdown-items\">\n                        <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\n                            <a class=\"nav-link nav-dropdown-toggle\" href=\"#\"><i class=\"icon-speech\"></i> Email</a>\n                            <ul class=\"nav-dropdown-items\">\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/uikits/email/inbox']\"><i class=\"icon-speech\"></i> Inbox</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/uikits/email/message']\"><i class=\"icon-speech\"></i> Message</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/uikits/email/compose']\"><i class=\"icon-speech\"></i> Compose</a>\n                                </li>\n                            </ul>\n                        </li>\n                    </ul>\n                </li>\n                <li class=\"divider m-h\"></li>\n                <li class=\"nav-title\">\n                    System Utilization\n                </li>\n                <li class=\"nav-item px-1 hidden-cn\">\n                    <div class=\"text-uppercase mb-q\">\n                        <small><b>CPU Usage</b>\n                        </small>\n                    </div>\n                    <div class=\"progress progress-xs\">\n                        <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </div>\n                    <small class=\"text-muted\">348 Processes. 1/4 Cores.</small>\n                </li>\n                <li class=\"nav-item px-1 hidden-cn\">\n                    <div class=\"text-uppercase mb-q\">\n                        <small><b>Memory Usage</b>\n                        </small>\n                    </div>\n                    <div class=\"progress progress-xs\">\n                        <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 70%\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </div>\n                    <small class=\"text-muted\">11444GB/16384MB</small>\n                </li>\n                <li class=\"nav-item px-1 hidden-cn\">\n                    <div class=\"text-uppercase mb-q\">\n                        <small><b>SSD 1 Usage</b>\n                        </small>\n                    </div>\n                    <div class=\"progress progress-xs\">\n                        <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 95%\" aria-valuenow=\"95\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </div>\n                    <small class=\"text-muted\">243GB/256GB</small>\n                </li>\n\n            </ul>\n        </nav>\n    </div>\n\n    <!-- Main content -->\n    <main class=\"main\">\n\n        <!-- Breadcrumb -->\n        <ol class=\"breadcrumb mb-0\">\n            <breadcrumbs></breadcrumbs>\n        </ol>\n\n        <div class=\"container-fluid\">\n            <router-outlet></router-outlet>\n        </div>\n        <!-- /.conainer-fluid -->\n    </main>\n\n    <aside class=\"aside-menu\">\n        <tabset>\n            <tab>\n                <template tabHeading><i class=\"icon-list\"></i>\n                </template>\n                <div class=\"callout m-0 py-h text-muted text-center bg-faded text-uppercase\">\n                    <small><b>Today</b>\n                    </small>\n                </div>\n                <hr class=\"transparent mx-1 my-0\">\n                <div class=\"callout callout-warning m-0 py-1\">\n                    <div class=\"avatar float-right\">\n                        <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                    </div>\n                    <div>Meeting with\n                        <strong>Lucas</strong>\n                    </div>\n                    <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 1 - 3pm</small>\n                    <small class=\"text-muted\"><i class=\"icon-location-pin\"></i>&nbsp; Palo Alto, CA</small>\n                </div>\n                <hr class=\"mx-1 my-0\">\n                <div class=\"callout callout-info m-0 py-1\">\n                    <div class=\"avatar float-right\">\n                        <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                    </div>\n                    <div>Skype with\n                        <strong>Megan</strong>\n                    </div>\n                    <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 4 - 5pm</small>\n                    <small class=\"text-muted\"><i class=\"icon-social-skype\"></i>&nbsp; On-line</small>\n                </div>\n                <hr class=\"transparent mx-1 my-0\">\n                <div class=\"callout m-0 py-h text-muted text-center bg-faded text-uppercase\">\n                    <small><b>Tomorrow</b>\n                    </small>\n                </div>\n                <hr class=\"transparent mx-1 my-0\">\n                <div class=\"callout callout-danger m-0 py-1\">\n                    <div>New UI Project -\n                        <strong>deadline</strong>\n                    </div>\n                    <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 10 - 11pm</small>\n                    <small class=\"text-muted\"><i class=\"icon-home\"></i>&nbsp; creativeLabs HQ</small>\n                    <div class=\"avatars-stack mt-h\">\n                        <div class=\"avatar avatar-xs\">\n                            <img src=\"assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                        </div>\n                        <div class=\"avatar avatar-xs\">\n                            <img src=\"assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                        </div>\n                        <div class=\"avatar avatar-xs\">\n                            <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                        </div>\n                        <div class=\"avatar avatar-xs\">\n                            <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                        </div>\n                        <div class=\"avatar avatar-xs\">\n                            <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                        </div>\n                    </div>\n                </div>\n                <hr class=\"mx-1 my-0\">\n                <div class=\"callout callout-success m-0 py-1\">\n                    <div>\n                        <strong>#10 Startups.Garden</strong>Meetup</div>\n                    <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 1 - 3pm</small>\n                    <small class=\"text-muted\"><i class=\"icon-location-pin\"></i>&nbsp; Palo Alto, CA</small>\n                </div>\n                <hr class=\"mx-1 my-0\">\n                <div class=\"callout callout-primary m-0 py-1\">\n                    <div>\n                        <strong>Team meeting</strong>\n                    </div>\n                    <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 4 - 6pm</small>\n                    <small class=\"text-muted\"><i class=\"icon-home\"></i>&nbsp; creativeLabs HQ</small>\n                    <div class=\"avatars-stack mt-h\">\n                        <div class=\"avatar avatar-xs\">\n                            <img src=\"assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                        </div>\n                        <div class=\"avatar avatar-xs\">\n                            <img src=\"assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                        </div>\n                        <div class=\"avatar avatar-xs\">\n                            <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                        </div>\n                        <div class=\"avatar avatar-xs\">\n                            <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                        </div>\n                        <div class=\"avatar avatar-xs\">\n                            <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                        </div>\n                        <div class=\"avatar avatar-xs\">\n                            <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                        </div>\n                        <div class=\"avatar avatar-xs\">\n                            <img src=\"assets/img/avatars/8.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                        </div>\n                    </div>\n                </div>\n                <hr class=\"mx-1 my-0\">\n            </tab>\n            <tab>\n                <template tabHeading><i class=\"icon-speech\"></i>\n                </template>\n                <div class=\"p-1\">\n                    <div class=\"message\">\n                        <div class=\"py-1 pb-3 mr-1 float-left\">\n                            <div class=\"avatar\">\n                                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                                <span class=\"avatar-status badge-success\"></span>\n                            </div>\n                        </div>\n                        <div>\n                            <small class=\"text-muted\">Lukasz Holeczek</small>\n                            <small class=\"text-muted float-right mt-q\">1:52 PM</small>\n                        </div>\n                        <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n                        <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n                    </div>\n                    <hr>\n                    <div class=\"message\">\n                        <div class=\"py-1 pb-3 mr-1 float-left\">\n                            <div class=\"avatar\">\n                                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                                <span class=\"avatar-status badge-success\"></span>\n                            </div>\n                        </div>\n                        <div>\n                            <small class=\"text-muted\">Lukasz Holeczek</small>\n                            <small class=\"text-muted float-right mt-q\">1:52 PM</small>\n                        </div>\n                        <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n                        <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n                    </div>\n                    <hr>\n                    <div class=\"message\">\n                        <div class=\"py-1 pb-3 mr-1 float-left\">\n                            <div class=\"avatar\">\n                                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                                <span class=\"avatar-status badge-success\"></span>\n                            </div>\n                        </div>\n                        <div>\n                            <small class=\"text-muted\">Lukasz Holeczek</small>\n                            <small class=\"text-muted float-right mt-q\">1:52 PM</small>\n                        </div>\n                        <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n                        <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n                    </div>\n                    <hr>\n                    <div class=\"message\">\n                        <div class=\"py-1 pb-3 mr-1 float-left\">\n                            <div class=\"avatar\">\n                                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                                <span class=\"avatar-status badge-success\"></span>\n                            </div>\n                        </div>\n                        <div>\n                            <small class=\"text-muted\">Lukasz Holeczek</small>\n                            <small class=\"text-muted float-right mt-q\">1:52 PM</small>\n                        </div>\n                        <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n                        <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n                    </div>\n                    <hr>\n                    <div class=\"message\">\n                        <div class=\"py-1 pb-3 mr-1 float-left\">\n                            <div class=\"avatar\">\n                                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                                <span class=\"avatar-status badge-success\"></span>\n                            </div>\n                        </div>\n                        <div>\n                            <small class=\"text-muted\">Lukasz Holeczek</small>\n                            <small class=\"text-muted float-right mt-q\">1:52 PM</small>\n                        </div>\n                        <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n                        <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n                    </div>\n                </div>\n            </tab>\n            <tab>\n                <template tabHeading><i class=\"icon-settings\"></i>\n                </template>\n                <div class=\"p-1\">\n                    <h6>Settings</h6>\n\n                    <div class=\"aside-options\">\n                        <div class=\"clearfix mt-2\">\n                            <small><b>Option 1</b>\n                            </small>\n                            <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\n                                <input type=\"checkbox\" class=\"switch-input\" checked>\n                                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                                <span class=\"switch-handle\"></span>\n                            </label>\n                        </div>\n                        <div>\n                            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\n                        </div>\n                    </div>\n\n                    <div class=\"aside-options\">\n                        <div class=\"clearfix mt-1\">\n                            <small><b>Option 2</b>\n                            </small>\n                            <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\n                                <input type=\"checkbox\" class=\"switch-input\">\n                                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                                <span class=\"switch-handle\"></span>\n                            </label>\n                        </div>\n                        <div>\n                            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\n                        </div>\n                    </div>\n\n                    <div class=\"aside-options\">\n                        <div class=\"clearfix mt-1\">\n                            <small><b>Option 3</b>\n                            </small>\n                            <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\n                                <input type=\"checkbox\" class=\"switch-input\">\n                                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                                <span class=\"switch-handle\"></span>\n                            </label>\n                        </div>\n                    </div>\n\n                    <div class=\"aside-options\">\n                        <div class=\"clearfix mt-1\">\n                            <small><b>Option 4</b>\n                            </small>\n                            <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\n                                <input type=\"checkbox\" class=\"switch-input\" checked>\n                                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                                <span class=\"switch-handle\"></span>\n                            </label>\n                        </div>\n                    </div>\n\n                    <hr>\n                    <h6>System Utilization</h6>\n\n                    <div class=\"text-uppercase mb-q mt-2\">\n                        <small><b>CPU Usage</b>\n                        </small>\n                    </div>\n                    <div class=\"progress progress-xs\">\n                        <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </div>\n                    <small class=\"text-muted\">348 Processes. 1/4 Cores.</small>\n\n                    <div class=\"text-uppercase mb-q mt-h\">\n                        <small><b>Memory Usage</b>\n                        </small>\n                    </div>\n                    <div class=\"progress progress-xs\">\n                        <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 70%\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </div>\n                    <small class=\"text-muted\">11444GB/16384MB</small>\n\n                    <div class=\"text-uppercase mb-q mt-h\">\n                        <small><b>SSD 1 Usage</b>\n                        </small>\n                    </div>\n                    <div class=\"progress progress-xs\">\n                        <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 95%\" aria-valuenow=\"95\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </div>\n                    <small class=\"text-muted\">243GB/256GB</small>\n\n                    <div class=\"text-uppercase mb-q mt-h\">\n                        <small><b>SSD 2 Usage</b>\n                        </small>\n                    </div>\n                    <div class=\"progress progress-xs\">\n                        <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 10%\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </div>\n                    <small class=\"text-muted\">25GB/256GB</small>\n                </div>\n            </tab>\n        </tabset>\n    </aside>\n</div>\n\n<footer class=\"app-footer\">\n    <a href=\"https://genesisui.com\">Real</a> &copy; 2017 creativeLabs.\n    <span class=\"float-right\">\n        Powered by <a href=\"https://genesisui.com\">GenesisUI</a>\n    </span>\n</footer>\n"

/***/ },

/***/ 652:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(351);


/***/ }

},[652]);
//# sourceMappingURL=main.bundle.map