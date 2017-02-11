webpackJsonp([5,10],{

/***/ 1076:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_dropdown__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_component__ = __webpack_require__(1100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_routing_module__ = __webpack_require__(1110);
/* harmony export (binding) */ __webpack_require__.d(exports, "DashboardModule", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__dashboard_routing_module__["a" /* DashboardRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_dropdown__["a" /* DropdownModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__dashboard_component__["a" /* DashboardComponent */]]
    })
], DashboardModule);

//# sourceMappingURL=/Users/juan/Desktop/Balarco/src/dashboard.module.js.map

/***/ },

/***/ 1100:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(305);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(router) {
        this.router = router;
        this.brandPrimary = '#20a8d8';
        this.brandSuccess = '#4dbd74';
        this.brandInfo = '#63c2de';
        this.brandWarning = '#f8cb00';
        this.brandDanger = '#f86c6b';
        this.mainChartData1 = [0, 0, 1, 2, 21, 9, 12, 10, 31, 13, 65, 10, 12, 6, 4, 3, 0];
        this.mainChartData2 = [0, 0, 1, 2, 7, 5, 6, 8, 24, 7, 12, 5, 6, 3, 2, 2, 0];
        this.mainChartData3 = [0, 0, 1, 0, 2, 0, 1, 0, 2, 3, 0, 2, 3, 2, 1, 0, 0];
        this.mainChartData = [
            {
                data: this.mainChartData1,
                label: 'Current'
            },
            {
                data: this.mainChartData2,
                label: 'Previous'
            },
            {
                data: this.mainChartData3,
                label: 'BEP'
            }
        ];
        this.mainChartLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday'];
        this.mainChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            drawOnChartArea: false,
                        },
                        ticks: {
                            callback: function (value) {
                                return value.charAt(0);
                            }
                        }
                    }],
                yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            maxTicksLimit: 5,
                        }
                    }]
            },
            elements: {
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3,
                }
            },
            legend: {
                display: false
            }
        };
        this.mainChartColours = [
            {
                backgroundColor: this.convertHex(this.brandInfo, 10),
                borderColor: this.brandInfo,
                pointHoverBackgroundColor: '#fff'
            },
            {
                backgroundColor: 'transparent',
                borderColor: this.brandSuccess,
                pointHoverBackgroundColor: '#fff'
            },
            {
                backgroundColor: 'transparent',
                borderColor: this.brandDanger,
                pointHoverBackgroundColor: '#fff',
                borderWidth: 1,
                borderDash: [8, 5]
            }
        ];
        this.mainChartLegend = false;
        this.mainChartType = 'line';
        // social box charts
        this.socialChartData1 = [
            {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Facebook'
            }
        ];
        this.socialChartData2 = [
            {
                data: [1, 13, 9, 17, 34, 41, 38],
                label: 'Twitter'
            }
        ];
        this.socialChartData3 = [
            {
                data: [78, 81, 80, 45, 34, 12, 40],
                label: 'LinkedIn'
            }
        ];
        this.socialChartData4 = [
            {
                data: [35, 23, 56, 22, 97, 23, 64],
                label: 'Google+'
            }
        ];
        this.socialChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.socialChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                    }],
                yAxes: [{
                        display: false,
                    }]
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3,
                }
            },
            legend: {
                display: false
            }
        };
        this.socialChartColours = [
            {
                backgroundColor: 'rgba(255,255,255,.1)',
                borderColor: 'rgba(255,255,255,.55)',
                pointHoverBackgroundColor: '#fff'
            }
        ];
        this.socialChartLegend = false;
        this.socialChartType = 'line';
        // sparkline charts
        this.sparklineChartData1 = [
            {
                data: [35, 23, 56, 22, 97, 23, 64],
                label: 'Clients'
            }
        ];
        this.sparklineChartData2 = [
            {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Clients'
            }
        ];
        this.sparklineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.sparklineChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                    }],
                yAxes: [{
                        display: false,
                    }]
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3,
                }
            },
            legend: {
                display: false
            }
        };
        this.sparklineChartDefault = [
            {
                backgroundColor: 'transparent',
                borderColor: '#d1d4d7',
            }
        ];
        this.sparklineChartPrimary = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandPrimary,
            }
        ];
        this.sparklineChartInfo = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandInfo,
            }
        ];
        this.sparklineChartDanger = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandDanger,
            }
        ];
        this.sparklineChartWarning = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandWarning,
            }
        ];
        this.sparklineChartSuccess = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandSuccess,
            }
        ];
        this.sparklineChartLegend = false;
        this.sparklineChartType = 'line';
    }
    //convert Hex to RGBA
    DashboardComponent.prototype.convertHex = function (hex, opacity) {
        hex = hex.replace('#', '');
        var r = parseInt(hex.substring(0, 2), 16);
        var g = parseInt(hex.substring(2, 4), 16);
        var b = parseInt(hex.substring(4, 6), 16);
        var rgba = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
        return rgba;
    };
    // events
    DashboardComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    // mainChart
    DashboardComponent.prototype.random = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    DashboardComponent.prototype.ngOnInit = function () { };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(1120)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=/Users/juan/Desktop/Balarco/src/dashboard.component.js.map

/***/ },

/***/ 1110:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__(1100);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DashboardRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */],
        data: {
            title: 'Dashboard'
        }
    }
];
var DashboardRoutingModule = (function () {
    function DashboardRoutingModule() {
    }
    return DashboardRoutingModule;
}());
DashboardRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], DashboardRoutingModule);

//# sourceMappingURL=/Users/juan/Desktop/Balarco/src/dashboard-routing.module.js.map

/***/ },

/***/ 1120:
/***/ function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"card-group\">\n        <div class=\"card\">\n            <div class=\"card-block\">\n                <div class=\"h1 text-muted text-right mb-2\">\n                    <i class=\"icon-people\"></i>\n                </div>\n                <div class=\"h4 mb-0\">87.500</div>\n                <small class=\"text-muted text-uppercase font-weight-bold\">Visitors</small>\n                <div class=\"progress progress-xs mt-1 mb-0\">\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                </div>\n            </div>\n        </div>\n        <div class=\"card\">\n            <div class=\"card-block\">\n                <div class=\"h1 text-muted text-right mb-2\">\n                    <i class=\"icon-user-follow\"></i>\n                </div>\n                <div class=\"h4 mb-0\">385</div>\n                <small class=\"text-muted text-uppercase font-weight-bold\">New Clients</small>\n                <div class=\"progress progress-xs mt-1 mb-0\">\n                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                </div>\n            </div>\n        </div>\n        <div class=\"card\">\n            <div class=\"card-block\">\n                <div class=\"h1 text-muted text-right mb-2\">\n                    <i class=\"icon-basket-loaded\"></i>\n                </div>\n                <div class=\"h4 mb-0\">1238</div>\n                <small class=\"text-muted text-uppercase font-weight-bold\">Products sold</small>\n                <div class=\"progress progress-xs mt-1 mb-0\">\n                    <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                </div>\n            </div>\n        </div>\n        <div class=\"card\">\n            <div class=\"card-block\">\n                <div class=\"h1 text-muted text-right mb-2\">\n                    <i class=\"icon-pie-chart\"></i>\n                </div>\n                <div class=\"h4 mb-0\">28%</div>\n                <small class=\"text-muted text-uppercase font-weight-bold\">Returning Visitors</small>\n                <div class=\"progress progress-xs mt-1 mb-0\">\n                    <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                </div>\n            </div>\n        </div>\n        <div class=\"card\">\n            <div class=\"card-block\">\n                <div class=\"h1 text-muted text-right mb-2\">\n                    <i class=\"icon-speedometer\"></i>\n                </div>\n                <div class=\"h4 mb-0\">5:34:11</div>\n                <small class=\"text-muted text-uppercase font-weight-bold\">Avg. Time</small>\n                <div class=\"progress progress-xs mt-1 mb-0\">\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-block\">\n            <div class=\"row\">\n                <div class=\"col-sm-5\">\n                    <h4 class=\"card-title mb-0\">Traffic</h4>\n                    <div class=\"small text-muted\">November 2015</div>\n                </div>\n                <!--/.col-->\n                <div class=\"col-sm-7 hidden-sm-down\">\n                    <button type=\"button\" class=\"btn btn-primary float-right\"><i class=\"icon-cloud-download\"></i>\n                    </button>\n                    <div class=\"btn-toolbar float-right\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\n                        <div class=\"btn-group mr-1\" data-toggle=\"buttons\" aria-label=\"First group\">\n                            <label class=\"btn btn-outline-secondary\">\n                                <input type=\"radio\" name=\"options\" id=\"option1\">Day\n                            </label>\n                            <label class=\"btn btn-outline-secondary active\">\n                                <input type=\"radio\" name=\"options\" id=\"option2\" checked>Month\n                            </label>\n                            <label class=\"btn btn-outline-secondary\">\n                                <input type=\"radio\" name=\"options\" id=\"option3\">Year\n                            </label>\n                        </div>\n                    </div>\n                </div>\n                <!--/.col-->\n            </div>\n            <!--/.row-->\n            <div class=\"chart-wrapper\" style=\"height:300px;margin-top:40px;\">\n                <canvas baseChart class=\"chart\" [datasets]=\"mainChartData\" [labels]=\"mainChartLabels\" [options]=\"mainChartOptions\" [colors]=\"mainChartColours\" [legend]=\"mainChartLegend\" [chartType]=\"mainChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n            </div>\n        </div>\n        <div class=\"card-footer\">\n            <ul>\n                <li>\n                    <div class=\"text-muted\">Visits</div>\n                    <strong>29.703 Users (40%)</strong>\n                    <div class=\"progress progress-xs mt-h\">\n                        <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 40%\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </div>\n                </li>\n                <li class=\"hidden-sm-down\">\n                    <div class=\"text-muted\">Unique</div>\n                    <strong>24.093 Users (20%)</strong>\n                    <div class=\"progress progress-xs mt-h\">\n                        <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 20%\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"text-muted\">Pageviews</div>\n                    <strong>78.706 Views (60%)</strong>\n                    <div class=\"progress progress-xs mt-h\">\n                        <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 60%\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </div>\n                </li>\n                <li class=\"hidden-sm-down\">\n                    <div class=\"text-muted\">New Users</div>\n                    <strong>22.123 Users (80%)</strong>\n                    <div class=\"progress progress-xs mt-h\">\n                        <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 80%\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </div>\n                </li>\n                <li class=\"hidden-sm-down\">\n                    <div class=\"text-muted\">Bounce Rate</div>\n                    <strong>40.15%</strong>\n                    <div class=\"progress progress-xs mt-h\">\n                        <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 40%\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <!--/.card-->\n    <div class=\"row\">\n        <div class=\"col-sm-6 col-lg-3\">\n            <div class=\"social-box facebook\">\n                <i class=\"fa fa-facebook\"></i>\n                <div class=\"chart-wrapper\" style=\"height:90px;\">\n                    <canvas baseChart class=\"chart\" [datasets]=\"socialChartData1\" [labels]=\"socialChartLabels\" [options]=\"socialChartOptions\" [colors]=\"socialChartColours\" [legend]=\"socialChartLegend\" [chartType]=\"socialChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n                </div>\n                <ul>\n                    <li>\n                        <strong>89k</strong>\n                        <span>friends</span>\n                    </li>\n                    <li>\n                        <strong>459</strong>\n                        <span>feeds</span>\n                    </li>\n                </ul>\n            </div>\n            <!--/.social-box-->\n        </div>\n        <!--/.col-->\n        <div class=\"col-sm-6 col-lg-3\">\n            <div class=\"social-box twitter\">\n                <i class=\"fa fa-twitter\"></i>\n                <div class=\"chart-wrapper\" style=\"height:90px;\">\n                    <canvas baseChart class=\"chart\" [datasets]=\"socialChartData2\" [labels]=\"socialChartLabels\" [options]=\"socialChartOptions\" [colors]=\"socialChartColours\" [legend]=\"socialChartLegend\" [chartType]=\"socialChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n                </div>\n                <ul>\n                    <li>\n                        <strong>973k</strong>\n                        <span>followers</span>\n                    </li>\n                    <li>\n                        <strong>1.792</strong>\n                        <span>tweets</span>\n                    </li>\n                </ul>\n            </div>\n            <!--/.social-box-->\n        </div>\n        <!--/.col-->\n        <div class=\"col-sm-6 col-lg-3\">\n            <div class=\"social-box linkedin\">\n                <i class=\"fa fa-linkedin\"></i>\n                <div class=\"chart-wrapper\" style=\"height:90px;\">\n                    <canvas baseChart class=\"chart\" [datasets]=\"socialChartData3\" [labels]=\"socialChartLabels\" [options]=\"socialChartOptions\" [colors]=\"socialChartColours\" [legend]=\"socialChartLegend\" [chartType]=\"socialChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n                </div>\n                <ul>\n                    <li>\n                        <strong>500+</strong>\n                        <span>contacts</span>\n                    </li>\n                    <li>\n                        <strong>292</strong>\n                        <span>feeds</span>\n                    </li>\n                </ul>\n            </div>\n            <!--/.social-box-->\n        </div>\n        <!--/.col-->\n        <div class=\"col-sm-6 col-lg-3\">\n            <div class=\"social-box google-plus\">\n                <i class=\"fa fa-google-plus\"></i>\n                <div class=\"chart-wrapper\" style=\"height:90px;\">\n                    <canvas baseChart class=\"chart\" [datasets]=\"socialChartData4\" [labels]=\"socialChartLabels\" [options]=\"socialChartOptions\" [colors]=\"socialChartColours\" [legend]=\"socialChartLegend\" [chartType]=\"socialChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n                </div>\n                <ul>\n                    <li>\n                        <strong>894</strong>\n                        <span>followers</span>\n                    </li>\n                    <li>\n                        <strong>92</strong>\n                        <span>circles</span>\n                    </li>\n                </ul>\n            </div>\n            <!--/.social-box-->\n        </div>\n        <!--/.col-->\n    </div>\n    <!--/.row-->\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    Traffic &amp; Sales\n                </div>\n                <div class=\"card-block\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-lg-4\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <div class=\"callout callout-info\">\n                                        <small class=\"text-muted\">New Clients</small>\n                                        <br>\n                                        <strong class=\"h4\">9,123</strong>\n                                        <div class=\"chart-wrapper\" style=\"width:100px;height:30px;\">\n                                            <canvas baseChart class=\"chart\" [datasets]=\"sparklineChartData1\" [labels]=\"sparklineChartLabels\" [options]=\"sparklineChartOptions\" [colors]=\"sparklineChartInfo\" [legend]=\"sparklineChartLegend\" [chartType]=\"sparklineChartType\" (chartHover)=\"chartHovered($event)\"\n                                            (chartClick)=\"chartClicked($event)\"></canvas>\n                                        </div>\n                                    </div>\n                                </div>\n                                <!--/.col-->\n                                <div class=\"col-sm-6\">\n                                    <div class=\"callout callout-danger\">\n                                        <small class=\"text-muted\">Recuring Clients</small>\n                                        <br>\n                                        <strong class=\"h4\">22,643</strong>\n                                        <div class=\"chart-wrapper\" style=\"width:100px;height:30px;\">\n                                            <canvas baseChart class=\"chart\" [datasets]=\"sparklineChartData2\" [labels]=\"sparklineChartLabels\" [options]=\"sparklineChartOptions\" [colors]=\"sparklineChartDanger\" [legend]=\"sparklineChartLegend\" [chartType]=\"sparklineChartType\" (chartHover)=\"chartHovered($event)\"\n                                            (chartClick)=\"chartClicked($event)\"></canvas>\n                                        </div>\n                                    </div>\n                                </div>\n                                <!--/.col-->\n                            </div>\n                            <!--/.row-->\n                            <hr class=\"mt-0\">\n                            <ul class=\"horizontal-bars\">\n                                <li>\n                                    <div class=\"title\">\n                                        Monday\n                                    </div>\n                                    <div class=\"bars\">\n                                        <div class=\"progress progress-xs\">\n                                            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 34%\" aria-valuenow=\"34\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                                        </div>\n                                        <div class=\"progress progress-xs\">\n                                            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 78%\" aria-valuenow=\"78\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                                        </div>\n                                    </div>\n                                </li>\n                                <li>\n                                    <div class=\"title\">\n                                        Tuesday\n                                    </div>\n                                    <div class=\"bars\">\n                                        <div class=\"progress progress-xs\">\n                                            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 56%\" aria-valuenow=\"56\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                                        </div>\n                                        <div class=\"progress progress-xs\">\n                                            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 94%\" aria-valuenow=\"94\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                                        </div>\n                                    </div>\n                                </li>\n                                <li>\n                                    <div class=\"title\">\n                                        Wednesday\n                                    </div>\n                                    <div class=\"bars\">\n                                        <div class=\"progress progress-xs\">\n                                            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 12%\" aria-valuenow=\"12\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                                        </div>\n                                        <div class=\"progress progress-xs\">\n                                            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 67%\" aria-valuenow=\"67\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                                        </div>\n                                    </div>\n                                </li>\n                                <li>\n                                    <div class=\"title\">\n                                        Thursday\n                                    </div>\n                                    <div class=\"bars\">\n                                        <div class=\"progress progress-xs\">\n                                            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 43%\" aria-valuenow=\"43\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                                        </div>\n                                        <div class=\"progress progress-xs\">\n                                            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 91%\" aria-valuenow=\"91\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                                        </div>\n                                    </div>\n                                </li>\n                                <li>\n                                    <div class=\"title\">\n                                        Friday\n                                    </div>\n                                    <div class=\"bars\">\n                                        <div class=\"progress progress-xs\">\n                                            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 22%\" aria-valuenow=\"22\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                                        </div>\n                                        <div class=\"progress progress-xs\">\n                                            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 73%\" aria-valuenow=\"73\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                                        </div>\n                                    </div>\n                                </li>\n                                <li>\n                                    <div class=\"title\">\n                                        Saturday\n                                    </div>\n                                    <div class=\"bars\">\n                                        <div class=\"progress progress-xs\">\n                                            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 53%\" aria-valuenow=\"53\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                                        </div>\n                                        <div class=\"progress progress-xs\">\n                                            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 82%\" aria-valuenow=\"82\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                                        </div>\n                                    </div>\n                                </li>\n                                <li>\n                                    <div class=\"title\">\n                                        Sunday\n                                    </div>\n                                    <div class=\"bars\">\n                                        <div class=\"progress progress-xs\">\n                                            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 9%\" aria-valuenow=\"9\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                                        </div>\n                                        <div class=\"progress progress-xs\">\n                                            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 69%\" aria-valuenow=\"69\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                                        </div>\n                                    </div>\n                                </li>\n                                <li class=\"legend\">\n                                    <span class=\"badge badge-pill badge-info\"></span>\n                                    <small>New clients</small>&nbsp;\n                                    <span class=\"badge badge-pill badge-danger\"></span>\n                                    <small>Recurring clients</small>\n                                </li>\n                            </ul>\n                        </div>\n                        <!--/.col-->\n                        <div class=\"col-sm-6 col-lg-4\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <div class=\"callout callout-warning\">\n                                        <small class=\"text-muted\">Pageviews</small>\n                                        <br>\n                                        <strong class=\"h4\">78,623</strong>\n                                        <div class=\"chart-wrapper\" style=\"width:100px;height:30px;\">\n                                            <canvas baseChart class=\"chart\" [datasets]=\"sparklineChartData1\" [labels]=\"sparklineChartLabels\" [options]=\"sparklineChartOptions\" [colors]=\"sparklineChartWarning\" [legend]=\"sparklineChartLegend\" [chartType]=\"sparklineChartType\" (chartHover)=\"chartHovered($event)\"\n                                            (chartClick)=\"chartClicked($event)\"></canvas>\n                                        </div>\n                                    </div>\n                                </div>\n                                <!--/.col-->\n                                <div class=\"col-sm-6\">\n                                    <div class=\"callout callout-success\">\n                                        <small class=\"text-muted\">Organic</small>\n                                        <br>\n                                        <strong class=\"h4\">49,123</strong>\n                                        <div class=\"chart-wrapper\" style=\"width:100px;height:30px;\">\n                                            <canvas baseChart class=\"chart\" [datasets]=\"sparklineChartData2\" [labels]=\"sparklineChartLabels\" [options]=\"sparklineChartOptions\" [colors]=\"sparklineChartSuccess\" [legend]=\"sparklineChartLegend\" [chartType]=\"sparklineChartType\" (chartHover)=\"chartHovered($event)\"\n                                            (chartClick)=\"chartClicked($event)\"></canvas>\n                                        </div>\n                                    </div>\n                                </div>\n                                <!--/.col-->\n                            </div>\n                            <!--/.row-->\n                            <hr class=\"mt-0\">\n                            <ul class=\"horizontal-bars type-2\">\n                                <li>\n                                    <i class=\"icon-user\"></i>\n                                    <span class=\"title\">Male</span>\n                                    <span class=\"value\">43%</span>\n                                    <div class=\"bars\">\n                                        <div class=\"progress progress-xs\">\n                                            <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 43%\" aria-valuenow=\"43\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                                        </div>\n                                    </div>\n                                </li>\n                                <li>\n                                    <i class=\"icon-user-female\"></i>\n                                    <span class=\"title\">Female</span>\n                                    <span class=\"value\">37%</span>\n                                    <div class=\"bars\">\n                                        <div class=\"progress progress-xs\">\n                                            <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 37%\" aria-valuenow=\"37\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                                        </div>\n                                    </div>\n                                </li>\n                                <li class=\"divider\"></li>\n                                <li>\n                                    <i class=\"icon-globe\"></i>\n                                    <span class=\"title\">Organic Search</span>\n                                    <span class=\"value\">191,235\n                                        <span class=\"text-muted small\">(56%)</span>\n                                    </span>\n                                    <div class=\"bars\">\n                                        <div class=\"progress progress-xs\">\n                                            <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 56%\" aria-valuenow=\"56\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                                        </div>\n                                    </div>\n                                </li>\n                                <li>\n                                    <i class=\"icon-social-facebook\"></i>\n                                    <span class=\"title\">Facebook</span>\n                                    <span class=\"value\">51,223\n                                        <span class=\"text-muted small\">(15%)</span>\n                                    </span>\n                                    <div class=\"bars\">\n                                        <div class=\"progress progress-xs\">\n                                            <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 15%\" aria-valuenow=\"15\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                                        </div>\n                                    </div>\n                                </li>\n                                <li>\n                                    <i class=\"icon-social-twitter\"></i>\n                                    <span class=\"title\">Twitter</span>\n                                    <span class=\"value\">37,564\n                                        <span class=\"text-muted small\">(11%)</span>\n                                    </span>\n                                    <div class=\"bars\">\n                                        <div class=\"progress progress-xs\">\n                                            <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 11%\" aria-valuenow=\"11\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                                        </div>\n                                    </div>\n                                </li>\n                                <li>\n                                    <i class=\"icon-social-linkedin\"></i>\n                                    <span class=\"title\">LinkedIn</span>\n                                    <span class=\"value\">27,319\n                                        <span class=\"text-muted small\">(8%)</span>\n                                    </span>\n                                    <div class=\"bars\">\n                                        <div class=\"progress progress-xs\">\n                                            <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 8%\" aria-valuenow=\"8\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                                        </div>\n                                    </div>\n                                </li>\n                                <li class=\"divider text-center\">\n                                    <button type=\"button\" class=\"btn btn-sm btn-link text-muted\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\"show more\"><i class=\"icon-options\"></i>\n                                    </button>\n                                </li>\n                            </ul>\n                        </div>\n                        <!--/.col-->\n                        <div class=\"col-sm-6 col-lg-4\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <div class=\"callout\">\n                                        <small class=\"text-muted\">CTR</small>\n                                        <br>\n                                        <strong class=\"h4\">23%</strong>\n                                        <div class=\"chart-wrapper\" style=\"width:100px;height:30px;\">\n                                            <canvas baseChart class=\"chart\" [datasets]=\"sparklineChartData1\" [labels]=\"sparklineChartLabels\" [options]=\"sparklineChartOptions\" [colors]=\"sparklineChartDefault\" [legend]=\"sparklineChartLegend\" [chartType]=\"sparklineChartType\" (chartHover)=\"chartHovered($event)\"\n                                            (chartClick)=\"chartClicked($event)\"></canvas>\n                                        </div>\n                                    </div>\n                                </div>\n                                <!--/.col-->\n                                <div class=\"col-sm-6\">\n                                    <div class=\"callout callout-primary\">\n                                        <small class=\"text-muted\">Bounce Rate</small>\n                                        <br>\n                                        <strong class=\"h4\">5%</strong>\n                                        <div class=\"chart-wrapper\" style=\"width:100px;height:30px;\">\n                                            <canvas baseChart class=\"chart\" [datasets]=\"sparklineChartData2\" [labels]=\"sparklineChartLabels\" [options]=\"sparklineChartOptions\" [colors]=\"sparklineChartPrimary\" [legend]=\"sparklineChartLegend\" [chartType]=\"sparklineChartType\" (chartHover)=\"chartHovered($event)\"\n                                            (chartClick)=\"chartClicked($event)\"></canvas>\n                                        </div>\n                                    </div>\n                                </div>\n                                <!--/.col-->\n                            </div>\n                            <!--/.row-->\n                            <hr class=\"mt-0\">\n                            <ul class=\"icons-list\">\n                                <li>\n                                    <i class=\"icon-screen-desktop bg-primary\"></i>\n                                    <div class=\"desc\">\n                                        <div class=\"title\">iMac 4k</div>\n                                        <small>Lorem ipsum dolor sit amet</small>\n                                    </div>\n                                    <div class=\"value\">\n                                        <div class=\"small text-muted\">Sold this week</div>\n                                        <strong>1.924</strong>\n                                    </div>\n                                    <div class=\"actions\">\n                                        <button type=\"button\" class=\"btn btn-link text-muted\"><i class=\"icon-settings\"></i>\n                                        </button>\n                                    </div>\n                                </li>\n                                <li>\n                                    <i class=\"icon-screen-smartphone bg-info\"></i>\n                                    <div class=\"desc\">\n                                        <div class=\"title\">Samsung Galaxy Edge</div>\n                                        <small>Lorem ipsum dolor sit amet</small>\n                                    </div>\n                                    <div class=\"value\">\n                                        <div class=\"small text-muted\">Sold this week</div>\n                                        <strong>1.224</strong>\n                                    </div>\n                                    <div class=\"actions\">\n                                        <button type=\"button\" class=\"btn btn-link text-muted\"><i class=\"icon-settings\"></i>\n                                        </button>\n                                    </div>\n                                </li>\n                                <li>\n                                    <i class=\"icon-screen-smartphone bg-warning\"></i>\n                                    <div class=\"desc\">\n                                        <div class=\"title\">iPhone 6S</div>\n                                        <small>Lorem ipsum dolor sit amet</small>\n                                    </div>\n                                    <div class=\"value\">\n                                        <div class=\"small text-muted\">Sold this week</div>\n                                        <strong>1.163</strong>\n                                    </div>\n                                    <div class=\"actions\">\n                                        <button type=\"button\" class=\"btn btn-link text-muted\"><i class=\"icon-settings\"></i>\n                                        </button>\n                                    </div>\n                                </li>\n                                <li>\n                                    <i class=\"icon-user bg-danger\"></i>\n                                    <div class=\"desc\">\n                                        <div class=\"title\">Premium accounts</div>\n                                        <small>Lorem ipsum dolor sit amet</small>\n                                    </div>\n                                    <div class=\"value\">\n                                        <div class=\"small text-muted\">Sold this week</div>\n                                        <strong>928</strong>\n                                    </div>\n                                    <div class=\"actions\">\n                                        <button type=\"button\" class=\"btn btn-link text-muted\"><i class=\"icon-settings\"></i>\n                                        </button>\n                                    </div>\n                                </li>\n                                <li>\n                                    <i class=\"icon-social-spotify bg-success\"></i>\n                                    <div class=\"desc\">\n                                        <div class=\"title\">Spotify Subscriptions</div>\n                                        <small>Lorem ipsum dolor sit amet</small>\n                                    </div>\n                                    <div class=\"value\">\n                                        <div class=\"small text-muted\">Sold this week</div>\n                                        <strong>893</strong>\n                                    </div>\n                                    <div class=\"actions\">\n                                        <button type=\"button\" class=\"btn btn-link text-muted\"><i class=\"icon-settings\"></i>\n                                        </button>\n                                    </div>\n                                </li>\n                                <li>\n                                    <i class=\"icon-cloud-download bg-danger\"></i>\n                                    <div class=\"desc\">\n                                        <div class=\"title\">Ebook</div>\n                                        <small>Lorem ipsum dolor sit amet</small>\n                                    </div>\n                                    <div class=\"value\">\n                                        <div class=\"small text-muted\">Downloads</div>\n                                        <strong>121.924</strong>\n                                    </div>\n                                    <div class=\"actions\">\n                                        <button type=\"button\" class=\"btn btn-link text-muted\"><i class=\"icon-settings\"></i>\n                                        </button>\n                                    </div>\n                                </li>\n                                <li>\n                                    <i class=\"icon-camera bg-warning\"></i>\n                                    <div class=\"desc\">\n                                        <div class=\"title\">Photos</div>\n                                        <small>Lorem ipsum dolor sit amet</small>\n                                    </div>\n                                    <div class=\"value\">\n                                        <div class=\"small text-muted\">Uploaded</div>\n                                        <strong>12.125</strong>\n                                    </div>\n                                    <div class=\"actions\">\n                                        <button type=\"button\" class=\"btn btn-link text-muted\"><i class=\"icon-settings\"></i>\n                                        </button>\n                                    </div>\n                                </li>\n                                <li class=\"divider text-center\">\n                                    <button type=\"button\" class=\"btn btn-sm btn-link text-muted\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"show more\"><i class=\"icon-options\"></i>\n                                    </button>\n                                </li>\n                            </ul>\n                        </div>\n                        <!--/.col-->\n                    </div>\n                    <!--/.row-->\n                    <br>\n                    <table class=\"table table-hover table-outline mb-0 hidden-sm-down\">\n                        <thead class=\"thead-default\">\n                            <tr>\n                                <th class=\"text-center\"><i class=\"icon-people\"></i>\n                                </th>\n                                <th>User</th>\n                                <th class=\"text-center\">Country</th>\n                                <th>Usage</th>\n                                <th class=\"text-center\">Payment Method</th>\n                                <th>Activity</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td class=\"text-center\">\n                                    <div class=\"avatar\">\n                                        <img src=\"assets/img/avatars/1.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\" src=\"assets/img/avatars/1.jpg\">\n                                        <span class=\"avatar-status badge-success\"></span>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div>Yiorgos Avraamu</div>\n                                    <div class=\"small text-muted\">\n                                        <span>New</span>| Registered: Jan 1, 2015\n                                    </div>\n                                </td>\n                                <td class=\"text-center\">\n                                    <img src=\"assets/img/flags/USA.png\" alt=\"USA\" style=\"height:24px;\" src=\"assets/img/flags/USA.png\">\n                                </td>\n                                <td>\n                                    <div class=\"clearfix\">\n                                        <div class=\"float-left\">\n                                            <strong>50%</strong>\n                                        </div>\n                                        <div class=\"float-right\">\n                                            <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                                        </div>\n                                    </div>\n                                    <div class=\"progress progress-xs\">\n                                        <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                                    </div>\n                                </td>\n                                <td class=\"text-center\">\n                                    <i class=\"fa fa-cc-mastercard\" style=\"font-size:24px\"></i>\n                                </td>\n                                <td>\n                                    <div class=\"small text-muted\">Last login</div>\n                                    <strong>10 sec ago</strong>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td class=\"text-center\">\n                                    <div class=\"avatar\">\n                                        <img src=\"assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\" src=\"assets/img/avatars/2.jpg\">\n                                        <span class=\"avatar-status badge-danger\"></span>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div>Avram Tarasios</div>\n                                    <div class=\"small text-muted\">\n\n                                        <span>Recurring</span>| Registered: Jan 1, 2015\n                                    </div>\n                                </td>\n                                <td class=\"text-center\">\n                                    <img src=\"assets/img/flags/Brazil.png\" alt=\"Brazil\" style=\"height:24px;\" src=\"assets/img/flags/Brazil.png\">\n                                </td>\n                                <td>\n                                    <div class=\"clearfix\">\n                                        <div class=\"float-left\">\n                                            <strong>10%</strong>\n                                        </div>\n                                        <div class=\"float-right\">\n                                            <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                                        </div>\n                                    </div>\n                                    <div class=\"progress progress-xs\">\n                                        <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 10%\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                                    </div>\n                                </td>\n                                <td class=\"text-center\">\n                                    <i class=\"fa fa-cc-visa\" style=\"font-size:24px\"></i>\n                                </td>\n                                <td>\n                                    <div class=\"small text-muted\">Last login</div>\n                                    <strong>5 minutes ago</strong>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td class=\"text-center\">\n                                    <div class=\"avatar\">\n                                        <img src=\"assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\" src=\"assets/img/avatars/3.jpg\">\n                                        <span class=\"avatar-status badge-warning\"></span>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div>Quintin Ed</div>\n                                    <div class=\"small text-muted\">\n                                        <span>New</span>| Registered: Jan 1, 2015\n                                    </div>\n                                </td>\n                                <td class=\"text-center\">\n                                    <img src=\"assets/img/flags/India.png\" alt=\"India\" style=\"height:24px;\" src=\"assets/img/flags/India.png\">\n                                </td>\n                                <td>\n                                    <div class=\"clearfix\">\n                                        <div class=\"float-left\">\n                                            <strong>74%</strong>\n                                        </div>\n                                        <div class=\"float-right\">\n                                            <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                                        </div>\n                                    </div>\n                                    <div class=\"progress progress-xs\">\n                                        <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 74%\" aria-valuenow=\"74\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                                    </div>\n                                </td>\n                                <td class=\"text-center\">\n                                    <i class=\"fa fa-cc-stripe\" style=\"font-size:24px\"></i>\n                                </td>\n                                <td>\n                                    <div class=\"small text-muted\">Last login</div>\n                                    <strong>1 hour ago</strong>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td class=\"text-center\">\n                                    <div class=\"avatar\">\n                                        <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\" src=\"assets/img/avatars/4.jpg\">\n                                        <span class=\"avatar-status badge-default\"></span>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div>Enéas Kwadwo</div>\n                                    <div class=\"small text-muted\">\n                                        <span>New</span>| Registered: Jan 1, 2015\n                                    </div>\n                                </td>\n                                <td class=\"text-center\">\n                                    <img src=\"assets/img/flags/France.png\" alt=\"France\" style=\"height:24px;\" src=\"assets/img/flags/France.png\">\n                                </td>\n                                <td>\n                                    <div class=\"clearfix\">\n                                        <div class=\"float-left\">\n                                            <strong>98%</strong>\n                                        </div>\n                                        <div class=\"float-right\">\n                                            <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                                        </div>\n                                    </div>\n                                    <div class=\"progress progress-xs\">\n                                        <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 98%\" aria-valuenow=\"98\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                                    </div>\n                                </td>\n                                <td class=\"text-center\">\n                                    <i class=\"fa fa-paypal\" style=\"font-size:24px\"></i>\n                                </td>\n                                <td>\n                                    <div class=\"small text-muted\">Last login</div>\n                                    <strong>Last month</strong>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td class=\"text-center\">\n                                    <div class=\"avatar\">\n                                        <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\" src=\"assets/img/avatars/5.jpg\">\n                                        <span class=\"avatar-status badge-success\"></span>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div>Agapetus Tadeáš</div>\n                                    <div class=\"small text-muted\">\n                                        <span>New</span>| Registered: Jan 1, 2015\n                                    </div>\n                                </td>\n                                <td class=\"text-center\">\n                                    <img src=\"assets/img/flags/Spain.png\" alt=\"Spain\" style=\"height:24px;\" src=\"assets/img/flags/Spain.png\">\n                                </td>\n                                <td>\n                                    <div class=\"clearfix\">\n                                        <div class=\"float-left\">\n                                            <strong>22%</strong>\n                                        </div>\n                                        <div class=\"float-right\">\n                                            <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                                        </div>\n                                    </div>\n                                    <div class=\"progress progress-xs\">\n                                        <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 22%\" aria-valuenow=\"22\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                                    </div>\n                                </td>\n                                <td class=\"text-center\">\n                                    <i class=\"fa fa-google-wallet\" style=\"font-size:24px\"></i>\n                                </td>\n                                <td>\n                                    <div class=\"small text-muted\">Last login</div>\n                                    <strong>Last week</strong>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td class=\"text-center\">\n                                    <div class=\"avatar\">\n                                        <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\" src=\"assets/img/avatars/6.jpg\">\n                                        <span class=\"avatar-status badge-danger\"></span>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div>Friderik Dávid</div>\n                                    <div class=\"small text-muted\">\n                                        <span>New</span>| Registered: Jan 1, 2015\n                                    </div>\n                                </td>\n                                <td class=\"text-center\">\n                                    <img src=\"assets/img/flags/Poland.png\" alt=\"Poland\" style=\"height:24px;\" src=\"assets/img/flags/Poland.png\">\n                                </td>\n                                <td>\n                                    <div class=\"clearfix\">\n                                        <div class=\"float-left\">\n                                            <strong>43%</strong>\n                                        </div>\n                                        <div class=\"float-right\">\n                                            <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                                        </div>\n                                    </div>\n                                    <div class=\"progress progress-xs\">\n                                        <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 43%\" aria-valuenow=\"43\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                                    </div>\n                                </td>\n                                <td class=\"text-center\">\n                                    <i class=\"fa fa-cc-amex\" style=\"font-size:24px\"></i>\n                                </td>\n                                <td>\n                                    <div class=\"small text-muted\">Last login</div>\n                                    <strong>Yesterday</strong>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n    </div>\n    <!--/.row-->\n</div>\n"

/***/ }

});
//# sourceMappingURL=5.bundle.map