webpackJsonp([10,22],{

/***/ 1048:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoice_component__ = __webpack_require__(838);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return InvoiceRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'invoice',
        component: __WEBPACK_IMPORTED_MODULE_2__invoice_component__["a" /* InvoiceComponent */],
        data: {
            title: 'Invoice'
        }
    }
];
var InvoiceRoutingModule = (function () {
    function InvoiceRoutingModule() {
    }
    return InvoiceRoutingModule;
}());
InvoiceRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], InvoiceRoutingModule);

//# sourceMappingURL=/Users/juan/Desktop/Angular2_CLI_Full_Project/src/invoice-routing.module.js.map

/***/ },

/***/ 1225:
/***/ function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-header\">\n        Invoice\n        <strong>#90-98792</strong>\n        <a href=\"#\" class=\"btn btn-sm btn-info float-right\" onclick=\"javascript:window.print();\"><i class=\"fa fa-print\"></i> Print</a>\n        <a href=\"#\" class=\"btn btn-sm btn-info float-right\"><i class=\"fa fa-save\"></i> Save</a>\n    </div>\n    <div class=\"card-block\">\n        <div class=\"row mb-2\">\n\n            <div class=\"col-sm-4\">\n                <h6 class=\"mb-1\">From:</h6>\n                <div>\n                    <strong>BootstrapMaster.com</strong>\n                </div>\n                <div>Konopnickiej 42</div>\n                <div>43-190 Mikolow, Poland</div>\n                <div>Email: lukasz@bootstrapmaster.com</div>\n                <div>Phone: +48 123 456 789</div>\n            </div>\n            <!--/.col-->\n\n            <div class=\"col-sm-4\">\n                <h6 class=\"mb-1\">To:</h6>\n                <div>\n                    <strong>BootstrapMaster.com</strong>\n                </div>\n                <div>Konopnickiej 42</div>\n                <div>43-190 Mikolow, Poland</div>\n                <div>Email: lukasz@bootstrapmaster.com</div>\n                <div>Phone: +48 123 456 789</div>\n            </div>\n            <!--/.col-->\n\n            <div class=\"col-sm-4\">\n                <h6 class=\"mb-1\">Details:</h6>\n                <div>Invoice\n                    <strong>#90-98792</strong>\n                </div>\n                <div>March 30, 2013</div>\n                <div>VAT: PL9877281777</div>\n                <div>Account Name: BootstrapMaster.com</div>\n                <div>\n                    <strong>SWIFT code: 99 8888 7777 6666 5555</strong>\n                </div>\n            </div>\n            <!--/.col-->\n\n        </div>\n        <!--/.row-->\n\n        <div class=\"table-responsive\">\n            <table class=\"table table-striped\">\n                <thead>\n                    <tr>\n                        <th class=\"center\">#</th>\n                        <th>Item</th>\n                        <th>Description</th>\n                        <th class=\"center\">Quantity</th>\n                        <th class=\"right\">Unit Cost</th>\n                        <th class=\"right\">Total</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td class=\"center\">1</td>\n                        <td class=\"left\">Origin License</td>\n                        <td class=\"left\">Extended License</td>\n                        <td class=\"center\">1</td>\n                        <td class=\"right\">$999,00</td>\n                        <td class=\"right\">$999,00</td>\n                    </tr>\n                    <tr>\n                        <td class=\"center\">2</td>\n                        <td class=\"left\">Custom Services</td>\n                        <td class=\"left\">Instalation and Customization (cost per hour)</td>\n                        <td class=\"center\">20</td>\n                        <td class=\"right\">$150,00</td>\n                        <td class=\"right\">$3.000,00</td>\n                    </tr>\n                    <tr>\n                        <td class=\"center\">3</td>\n                        <td class=\"left\">Hosting</td>\n                        <td class=\"left\">1 year subcription</td>\n                        <td class=\"center\">1</td>\n                        <td class=\"right\">$499,00</td>\n                        <td class=\"right\">$499,00</td>\n                    </tr>\n                    <tr>\n                        <td class=\"center\">4</td>\n                        <td class=\"left\">Platinum Support</td>\n                        <td class=\"left\">1 year subcription 24/7</td>\n                        <td class=\"center\">1</td>\n                        <td class=\"right\">$3.999,00</td>\n                        <td class=\"right\">$3.999,00</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n\n        <div class=\"row\">\n\n            <div class=\"col-lg-4 col-sm-5\">\n                <div class=\"well\">\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\n                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n                </div>\n            </div>\n            <!--/.col-->\n\n            <div class=\"col-lg-4 offset-lg-4 col-sm-5 offset-sm-2\">\n                <table class=\"table table-clear\">\n                    <tbody>\n                        <tr>\n                            <td class=\"left\">\n                                <strong>Subtotal</strong>\n                            </td>\n                            <td class=\"right\">$8.497,00</td>\n                        </tr>\n                        <tr>\n                            <td class=\"left\">\n                                <strong>Discount (20%)</strong>\n                            </td>\n                            <td class=\"right\">$1,699,40</td>\n                        </tr>\n                        <tr>\n                            <td class=\"left\">\n                                <strong>VAT (10%)</strong>\n                            </td>\n                            <td class=\"right\">$679,76</td>\n                        </tr>\n                        <tr>\n                            <td class=\"left\">\n                                <strong>Total</strong>\n                            </td>\n                            <td class=\"right\">\n                                <strong>$7.477,36</strong>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                <a href=\"#\" class=\"btn btn-success\"><i class=\"fa fa-usd\"></i> Proceed to Payment</a>\n            </div>\n            <!--/.col-->\n\n        </div>\n        <!--/.row-->\n    </div>\n</div>\n"

/***/ },

/***/ 670:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoice_component__ = __webpack_require__(838);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__invoice_routing_module__ = __webpack_require__(1048);
/* harmony export (binding) */ __webpack_require__.d(exports, "InvoiceModule", function() { return InvoiceModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Invoice

//Routing

//
var InvoiceModule = (function () {
    function InvoiceModule() {
    }
    return InvoiceModule;
}());
InvoiceModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__invoice_routing_module__["a" /* InvoiceRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__invoice_component__["a" /* InvoiceComponent */]
        ]
    })
], InvoiceModule);

//# sourceMappingURL=/Users/juan/Desktop/Angular2_CLI_Full_Project/src/invoice.module.js.map

/***/ },

/***/ 838:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return InvoiceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InvoiceComponent = (function () {
    function InvoiceComponent() {
    }
    return InvoiceComponent;
}());
InvoiceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(1225)
    })
], InvoiceComponent);

//# sourceMappingURL=/Users/juan/Desktop/Angular2_CLI_Full_Project/src/invoice.component.js.map

/***/ }

});
//# sourceMappingURL=10.bundle.map