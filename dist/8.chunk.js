webpackJsonp([8,22],{

/***/ 1047:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compose_component__ = __webpack_require__(835);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inbox_component__ = __webpack_require__(836);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_component__ = __webpack_require__(837);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return EmailRoutingModule; });
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
            title: 'Email App'
        },
        children: [
            {
                path: 'compose',
                component: __WEBPACK_IMPORTED_MODULE_2__compose_component__["a" /* ComposeComponent */],
                data: {
                    title: 'Compose'
                }
            },
            {
                path: 'inbox',
                component: __WEBPACK_IMPORTED_MODULE_3__inbox_component__["a" /* InboxComponent */],
                data: {
                    title: 'Inbox'
                }
            },
            {
                path: 'message',
                component: __WEBPACK_IMPORTED_MODULE_4__message_component__["a" /* MessageComponent */],
                data: {
                    title: 'Message'
                }
            }
        ]
    }
];
var EmailRoutingModule = (function () {
    function EmailRoutingModule() {
    }
    return EmailRoutingModule;
}());
EmailRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], EmailRoutingModule);

//# sourceMappingURL=/Users/juan/Desktop/Angular2_CLI_Full_Project/src/email-routing.module.js.map

/***/ },

/***/ 1222:
/***/ function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <div class=\"card email-app\">\n                <nav>\n                    <a href=\"#\" class=\"btn btn-danger btn-block\">New Email</a>\n\n                    <ul class=\"nav\">\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-inbox\"></i> Inbox <span class=\"badge badge-danger\">4</span></a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-star\"></i> Stared</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-rocket\"></i> Sent</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-trash-o\"></i> Trash</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-bookmark\"></i> Important<span class=\"badge badge-info\">5</span></a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-inbox\"></i> Inbox <span class=\"badge badge-danger\">4</span></a>\n                        </li>\n                    </ul>\n                </nav>\n\n                <main>\n\n                    <div class=\"message clearfix\">\n\n                        <p class=\"text-center\">New Message</p>\n\n                        <form>\n                            <div class=\"form-group row\">\n                                <label for=\"to\" class=\"col-sm-1 form-control-label\">To:</label>\n                                <div class=\"col-sm-11\">\n                                    <input type=\"email\" class=\"form-control\" id=\"to\" placeholder=\"Type email\">\n                                </div>\n                            </div>\n\n                            <div class=\"form-group row\">\n                                <label for=\"cc\" class=\"col-sm-1 form-control-label\">CC:</label>\n                                <div class=\"col-sm-11\">\n                                    <input type=\"email\" class=\"form-control\" id=\"cc\" placeholder=\"Type email\">\n                                </div>\n                            </div>\n\n                            <div class=\"form-group row\">\n                                <label for=\"bcc\" class=\"col-sm-1 form-control-label\">BCC:</label>\n                                <div class=\"col-sm-11\">\n                                    <input type=\"email\" class=\"form-control\" id=\"bcc\" placeholder=\"Type email\">\n                                </div>\n                            </div>\n\n                        </form>\n\n                        <div class=\"row\">\n                            <div class=\"col-sm-11 offset-sm-1\">\n\n                                <div class=\"btn-toolbar\" role=\"toolbar\">\n\n                                    <div class=\"btn-group\">\n                                        <button type=\"button\" class=\"btn btn-secondary\">\n                                            <span class=\"fa fa-bold\"></span>\n                                        </button>\n                                        <button type=\"button\" class=\"btn btn-secondary\">\n                                            <span class=\"fa fa-italic\"></span>\n                                        </button>\n                                        <button type=\"button\" class=\"btn btn-secondary\">\n                                            <span class=\"fa fa-underline\"></span>\n                                        </button>\n                                    </div>\n\n                                    <div class=\"btn-group\">\n                                        <button type=\"button\" class=\"btn btn-secondary\">\n                                            <span class=\"fa fa-align-left\"></span>\n                                        </button>\n                                        <button type=\"button\" class=\"btn btn-secondary\">\n                                            <span class=\"fa fa-align-right\"></span>\n                                        </button>\n                                        <button type=\"button\" class=\"btn btn-secondary\">\n                                            <span class=\"fa fa-align-center\"></span>\n                                        </button>\n                                        <button type=\"button\" class=\"btn btn-secondary\">\n                                            <span class=\"fa fa-align-justify\"></span>\n                                        </button>\n                                    </div>\n\n                                    <div class=\"btn-group\">\n                                        <button type=\"button\" class=\"btn btn-secondary\">\n                                            <span class=\"fa fa-indent\"></span>\n                                        </button>\n                                        <button type=\"button\" class=\"btn btn-secondary\">\n                                            <span class=\"fa fa-outdent\"></span>\n                                        </button>\n                                    </div>\n\n                                    <div class=\"btn-group\">\n                                        <button type=\"button\" class=\"btn btn-secondary\">\n                                            <span class=\"fa fa-list-ul\"></span>\n                                        </button>\n                                        <button type=\"button\" class=\"btn btn-secondary\">\n                                            <span class=\"fa fa-list-ol\"></span>\n                                        </button>\n                                    </div>\n\n                                    <button type=\"button\" class=\"btn btn-secondary\">\n                                        <span class=\"fa fa-trash-o\"></span>\n                                    </button>\n                                    <button type=\"button\" class=\"btn btn-secondary\">\n                                        <span class=\"fa fa-paperclip\"></span>\n                                    </button>\n\n                                    <div class=\"btn-group\">\n                                        <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\">\n                                            <span class=\"fa fa-tags\"></span>\n                                            <span class=\"caret\"></span>\n                                        </button>\n                                        <ul class=\"dropdown-menu\">\n                                            <li><a href=\"#\">add label <span class=\"badge badge-danger\"> Home</span></a>\n                                            </li>\n                                            <li><a href=\"#\">add label <span class=\"badge badge-info\">Job</span></a>\n                                            </li>\n                                            <li><a href=\"#\">add label <span class=\"badge badge-success\">Clients</span></a>\n                                            </li>\n                                            <li><a href=\"#\">add label <span class=\"badge badge-warning\">News</span></a>\n                                            </li>\n                                        </ul>\n                                    </div>\n\n                                </div>\n\n                                <br/>\n\n                                <div class=\"form-group\">\n\n                                    <textarea class=\"form-control\" id=\"message\" name=\"body\" rows=\"12\" placeholder=\"Click here to reply\"></textarea>\n\n                                </div>\n\n                                <div class=\"form-group\">\n\n                                    <button type=\"submit\" class=\"btn btn-success\">Send</button>\n                                    <button type=\"submit\" class=\"btn btn-secondary\">Draft</button>\n                                    <button type=\"submit\" class=\"btn btn-danger\">Discard</button>\n\n                                </div>\n\n                            </div>\n                        </div>\n                    </div>\n                </main>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ },

/***/ 1223:
/***/ function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <div class=\"card email-app\">\n                <nav>\n                    <a href=\"#\" class=\"btn btn-danger btn-block\">New Email</a>\n\n                    <ul class=\"nav\">\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-inbox\"></i> Inbox <span class=\"badge badge-danger\">4</span></a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-star\"></i> Stared</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-rocket\"></i> Sent</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-trash-o\"></i> Trash</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-bookmark\"></i> Important<span class=\"badge badge-info\">5</span></a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-inbox\"></i> Inbox <span class=\"badge badge-danger\">4</span></a>\n                        </li>\n                    </ul>\n                </nav>\n\n                <main>\n                    <div class=\"toolbar\">\n                        <span class=\"btn-group\">\n                            <button type=\"button\" class=\"btn btn-secondary\">\n                                <span class=\"fa fa-envelope\"></span>\n                            </button>\n                            <button type=\"button\" class=\"btn btn-secondary\">\n                                <span class=\"fa fa-star\"></span>\n                            </button>\n                            <button type=\"button\" class=\"btn btn-secondary\">\n                                <span class=\"fa fa-star-o\"></span>\n                            </button>\n                            <button type=\"button\" class=\"btn btn-secondary\">\n                                <span class=\"fa fa-bookmark-o\"></span>\n                            </button>\n                        </span>\n\n                        <span class=\"btn-group\">\n                            <button type=\"button\" class=\"btn btn-secondary\">\n                                <span class=\"fa fa-mail-reply\"></span>\n                            </button>\n                            <button type=\"button\" class=\"btn btn-secondary\">\n                                <span class=\"fa fa-mail-reply-all\"></span>\n                            </button>\n                            <button type=\"button\" class=\"btn btn-secondary\">\n                                <span class=\"fa fa-mail-forward\"></span>\n                            </button>\n                        </span>\n\n                        <button type=\"button\" class=\"btn btn-secondary\">\n                            <span class=\"fa fa-trash-o\"></span>\n                        </button>\n\n                        <span class=\"btn-group\">\n                            <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\">\n                                <span class=\"fa fa-tags\"></span>\n                                <span class=\"caret\"></span>\n                            </button>\n                            <ul class=\"dropdown-menu\">\n                                <li><a href=\"#\">add label <span class=\"badge badge-danger\"> Home</span></a>\n                                </li>\n                                <li><a href=\"#\">add label <span class=\"badge badge-info\">Job</span></a>\n                                </li>\n                                <li><a href=\"#\">add label <span class=\"badge badge-success\">Clients</span></a>\n                                </li>\n                                <li><a href=\"#\">add label <span class=\"badge badge-warning\">News</span></a>\n                                </li>\n                            </ul>\n                        </span>\n\n                        <span class=\"btn-group float-right\">\n                            <button type=\"button\" class=\"btn btn-secondary\">\n                                <span class=\"fa fa-chevron-left\"></span>\n                            </button>\n                            <button type=\"button\" class=\"btn btn-secondary\">\n                                <span class=\"fa fa-chevron-right\"></span>\n                            </button>\n                        </span>\n                    </div>\n\n                    <ul class=\"messages-list\">\n\n                        <li class=\"unread\">\n                            <a ui-sref=\"app.uikits.email.compose\">\n                                <div class=\"header\">\n                                    <span class=\"action\"><i class=\"fa fa-square-o\"></i>\n                                    </span>\n                                    <span class=\"from\">Lukasz Holeczek</span>\n                                    <span class=\"date\">\n                                        <span class=\"fa fa-paper-clip\"></span>Today, 3:47 PM</span>\n                                </div>\n                                <div class=\"title\">\n                                    <span class=\"action\"><i class=\"fa fa-star-o\"></i>\n                                    </span>\n                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                                </div>\n                                <div class=\"description\">\n                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\n                                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n                                </div>\n                            </a>\n                        </li>\n\n                        <li>\n                            <a ui-sref=\"app.uikits.email.compose\">\n                                <div class=\"header\">\n                                    <span class=\"action\"><i class=\"fa fa-square-o\"></i>\n                                    </span>\n                                    <span class=\"from\">Lukasz Holeczek</span>\n                                    <span class=\"date\">\n                                        <span class=\"fa fa-paper-clip\"></span>Today, 3:47 PM</span>\n                                </div>\n                                <div class=\"title\">\n                                    <span class=\"action\"><i class=\"fa fa-star-o\"></i>\n                                    </span>\n                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n                                </div>\n                                <div class=\"description\">\n                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\n                                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n                                </div>\n                            </a>\n                        </li>\n\n                        <li>\n                            <a ui-sref=\"app.uikits.email.compose\">\n                                <div class=\"header\">\n                                    <span class=\"action\"><i class=\"fa fa-square-o\"></i>\n                                    </span>\n                                    <span class=\"from\">Lukasz Holeczek</span>\n                                    <span class=\"date\">Today, 3:47 PM</span>\n                                </div>\n                                <div class=\"title\">\n                                    <span class=\"action\"><i class=\"fa fa-star-o\"></i>\n                                    </span>\n                                    Lorem ipsum dolor sit amet.\n                                </div>\n                                <div class=\"description\">\n                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\n                                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n                                </div>\n                            </a>\n                        </li>\n\n                        <li class=\"unread\">\n                            <a ui-sref=\"app.uikits.email.compose\">\n                                <div class=\"header\">\n                                    <span class=\"action\"><i class=\"fa fa-square-o\"></i>\n                                    </span>\n                                    <span class=\"from\">Lukasz Holeczek</span>\n                                    <span class=\"date\">Today, 3:47 PM</span>\n                                </div>\n                                <div class=\"title\">\n                                    <span class=\"action\"><i class=\"fa fa-star-o\"></i>\n                                    </span>\n                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                                </div>\n                                <div class=\"description\">\n                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\n                                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n                                </div>\n                            </a>\n                        </li>\n\n                        <li class=\"unread\">\n                            <a ui-sref=\"app.uikits.email.compose\">\n                                <div class=\"header\">\n                                    <span class=\"action\"><i class=\"fa fa-square-o\"></i>\n                                    </span>\n                                    <span class=\"from\">Lukasz Holeczek</span>\n                                    <span class=\"date\">Today, 3:47 PM</span>\n                                </div>\n                                <div class=\"title\">\n                                    <span class=\"action\"><i class=\"fa fa-star-o\"></i>\n                                    </span>\n                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n                                </div>\n                                <div class=\"description\">\n                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\n                                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n                                </div>\n\n                            </a>\n                        </li>\n\n                        <li>\n                            <a ui-sref=\"app.uikits.email.compose\">\n                                <div class=\"header\">\n                                    <span class=\"action\"><i class=\"fa fa-square-o\"></i>\n                                    </span>\n                                    <span class=\"from\">Lukasz Holeczek</span>\n                                    <span class=\"date\">Today, 3:47 PM</span>\n                                </div>\n                                <div class=\"title\">\n                                    <span class=\"action\"><i class=\"fa fa-star-o\"></i>\n                                    </span>\n                                    Lorem ipsum dolor sit amet.\n                                </div>\n                                <div class=\"description\">\n                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\n                                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n                                </div>\n                            </a>\n                        </li>\n\n                        <li class=\"unread\">\n                            <a ui-sref=\"app.uikits.email.compose\">\n                                <div class=\"header\">\n                                    <span class=\"action\"><i class=\"fa fa-square-o\"></i>\n                                    </span>\n                                    <span class=\"from\">Lukasz Holeczek</span>\n                                    <span class=\"date\">Today, 3:47 PM</span>\n                                </div>\n                                <div class=\"title\">\n                                    <span class=\"action\"><i class=\"fa fa-star-o\"></i>\n                                    </span>\n                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                                </div>\n                                <div class=\"description\">\n                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\n                                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n                                </div>\n                            </a>\n                        </li>\n\n                        <li>\n                            <a ui-sref=\"app.uikits.email.compose\">\n                                <div class=\"header\">\n                                    <span class=\"action\"><i class=\"fa fa-square-o\"></i>\n                                    </span>\n                                    <span class=\"from\">Lukasz Holeczek</span>\n                                    <span class=\"date\">Today, 3:47 PM</span>\n                                </div>\n                                <div class=\"title\">\n                                    <span class=\"action\"><i class=\"fa fa-star-o\"></i>\n                                    </span>\n                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n                                </div>\n                                <div class=\"description\">\n                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\n                                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n                                </div>\n                            </a>\n                        </li>\n\n                        <li>\n                            <a ui-sref=\"app.uikits.email.compose\">\n                                <div class=\"header\">\n                                    <span class=\"action\"><i class=\"fa fa-square-o\"></i>\n                                    </span>\n                                    <span class=\"from\">Lukasz Holeczek</span>\n                                    <span class=\"date\">Today, 3:47 PM</span>\n                                </div>\n                                <div class=\"title\">\n                                    <span class=\"action\"><i class=\"fa fa-star-o\"></i>\n                                    </span>\n                                    Lorem ipsum dolor sit amet.\n                                </div>\n                                <div class=\"description\">\n                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\n                                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n                                </div>\n                            </a>\n                        </li>\n                    </ul>\n                </main>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ },

/***/ 1224:
/***/ function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <div class=\"card email-app\">\n                <nav>\n                    <a href=\"#\" class=\"btn btn-danger btn-block\">New Email</a>\n\n                    <ul class=\"nav\">\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-inbox\"></i> Inbox <span class=\"badge badge-danger\">4</span></a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-star\"></i> Stared</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-rocket\"></i> Sent</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-trash-o\"></i> Trash</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-bookmark\"></i> Important<span class=\"badge badge-info\">5</span></a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-inbox\"></i> Inbox <span class=\"badge badge-danger\">4</span></a>\n                        </li>\n                    </ul>\n                </nav>\n\n                <main>\n                    <div class=\"toolbar\">\n                        <span class=\"btn-group\">\n                            <button type=\"button\" class=\"btn btn-secondary\">\n                                <span class=\"fa fa-star\"></span>\n                            </button>\n                            <button type=\"button\" class=\"btn btn-secondary\">\n                                <span class=\"fa fa-star-o\"></span>\n                            </button>\n                            <button type=\"button\" class=\"btn btn-secondary\">\n                                <span class=\"fa fa-bookmark-o\"></span>\n                            </button>\n                        </span>\n\n                        <span class=\"btn-group\">\n                            <button type=\"button\" class=\"btn btn-secondary\">\n                                <span class=\"fa fa-mail-reply\"></span>\n                            </button>\n                            <button type=\"button\" class=\"btn btn-secondary\">\n                                <span class=\"fa fa-mail-reply-all\"></span>\n                            </button>\n                            <button type=\"button\" class=\"btn btn-secondary\">\n                                <span class=\"fa fa-mail-forward\"></span>\n                            </button>\n                        </span>\n\n                        <button type=\"button\" class=\"btn btn-secondary\">\n                            <span class=\"fa fa-trash-o\"></span>\n                        </button>\n\n                        <span class=\"btn-group\">\n                            <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\">\n                                <span class=\"fa fa-tags\"></span>\n                                <span class=\"caret\"></span>\n                            </button>\n                            <ul class=\"dropdown-menu\">\n                                <li><a href=\"#\">add label <span class=\"badge badge-danger\"> Home</span></a>\n                                </li>\n                                <li><a href=\"#\">add label <span class=\"badge badge-info\">Job</span></a>\n                                </li>\n                                <li><a href=\"#\">add label <span class=\"badge badge-success\">Clients</span></a>\n                                </li>\n                                <li><a href=\"#\">add label <span class=\"badge badge-warning\">News</span></a>\n                                </li>\n                            </ul>\n                        </span>\n                    </div>\n\n                    <div class=\"message\">\n\n\n\n                        <div class=\"message-title\">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</div>\n                        <div class=\"header\">\n\n                            <img class=\"avatar\" src=\"img/avatars/7.jpg\">\n\n\n                            <div class=\"from\">\n                                <span>Lukasz Holeczek</span>\n                                lukasz@bootstrapmaster.com\n                            </div>\n                            <div class=\"date\">Today, <b>3:47 PM</b>\n                            </div>\n\n                            <div class=\"menu\"></div>\n\n                        </div>\n\n                        <div class=\"content\">\n                            <p>\n                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\n                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                            </p>\n                            <blockquote>\n                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\n                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                            </blockquote>\n                        </div>\n\n                        <div class=\"attachments\">\n                            <ul>\n                                <li>\n                                    <span class=\"badge badge-danger\">zip</span> <b>bootstrap.zip</b>  <i>(2,5MB)</i>\n                                    <span class=\"quickMenu\">\n                                        <a href=\"#\" class=\"fa fa-search\"><i></i></a>\n                                        <a href=\"#\" class=\"fa fa-share\"><i></i></a>\n                                        <a href=\"#\" class=\"fa fa-cloud-download\"><i></i></a>\n                                    </span>\n                                </li>\n                                <li>\n                                    <span class=\"badge badge-info\">txt</span> <b>readme.txt</b>  <i>(7KB)</i>\n                                    <span class=\"quickMenu\">\n                                        <a href=\"#\" class=\"fa fa-search\"><i></i></a>\n                                        <a href=\"#\" class=\"fa fa-share\"><i></i></a>\n                                        <a href=\"#\" class=\"fa fa-cloud-download\"><i></i></a>\n                                    </span>\n                                </li>\n                                <li>\n                                    <span class=\"badge badge-success\">xls</span> <b>spreadsheet.xls</b>  <i>(984KB)</i>\n                                    <span class=\"quickMenu\">\n                                        <a href=\"#\" class=\"fa fa-search\"><i></i></a>\n                                        <a href=\"#\" class=\"fa fa-share\"><i></i></a>\n                                        <a href=\"#\" class=\"fa fa-cloud-download\"><i></i></a>\n                                    </span>\n                                </li>\n                            </ul>\n                        </div>\n\n                        <form method=\"post\" action=\"\">\n\n                            <div class=\"form-group\">\n\n                                <textarea class=\"form-control\" id=\"message\" name=\"body\" rows=\"12\" placeholder=\"Click here to reply\"></textarea>\n\n                            </div>\n\n                            <div class=\"form-group\">\n\n                                <button tabindex=\"3\" type=\"submit\" class=\"btn btn-success\">Send message</button>\n\n                            </div>\n\n                        </form>\n\n                    </div>\n\n\n                </main>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ },

/***/ 669:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compose_component__ = __webpack_require__(835);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inbox_component__ = __webpack_require__(836);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_component__ = __webpack_require__(837);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__email_routing_module__ = __webpack_require__(1047);
/* harmony export (binding) */ __webpack_require__.d(exports, "EmailModule", function() { return EmailModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Email



// Routing

var EmailModule = (function () {
    function EmailModule() {
    }
    return EmailModule;
}());
EmailModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__email_routing_module__["a" /* EmailRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__compose_component__["a" /* ComposeComponent */],
            __WEBPACK_IMPORTED_MODULE_3__inbox_component__["a" /* InboxComponent */],
            __WEBPACK_IMPORTED_MODULE_4__message_component__["a" /* MessageComponent */]
        ]
    })
], EmailModule);

//# sourceMappingURL=/Users/juan/Desktop/Angular2_CLI_Full_Project/src/email.module.js.map

/***/ },

/***/ 835:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ComposeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComposeComponent = (function () {
    function ComposeComponent() {
    }
    return ComposeComponent;
}());
ComposeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(1222)
    })
], ComposeComponent);

//# sourceMappingURL=/Users/juan/Desktop/Angular2_CLI_Full_Project/src/compose.component.js.map

/***/ },

/***/ 836:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return InboxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InboxComponent = (function () {
    function InboxComponent() {
    }
    return InboxComponent;
}());
InboxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(1223)
    })
], InboxComponent);

//# sourceMappingURL=/Users/juan/Desktop/Angular2_CLI_Full_Project/src/inbox.component.js.map

/***/ },

/***/ 837:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MessageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageComponent = (function () {
    function MessageComponent() {
    }
    return MessageComponent;
}());
MessageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(1224)
    })
], MessageComponent);

//# sourceMappingURL=/Users/juan/Desktop/Angular2_CLI_Full_Project/src/message.component.js.map

/***/ }

});
//# sourceMappingURL=8.bundle.map