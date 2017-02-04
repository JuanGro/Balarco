webpackJsonp([5,22],{

/***/ 1044:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notifications_component__ = __webpack_require__(833);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NotificationsRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__notifications_component__["a" /* NotificationsComponent */],
        data: {
            title: 'Notifications'
        }
    }
];
var NotificationsRoutingModule = (function () {
    function NotificationsRoutingModule() {
    }
    return NotificationsRoutingModule;
}());
NotificationsRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], NotificationsRoutingModule);

//# sourceMappingURL=/Users/juan/Desktop/Angular2_CLI_Full_Project/src/notifications-routing.module.js.map

/***/ },

/***/ 1080:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toast_component__ = __webpack_require__(849);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toaster_container_component__ = __webpack_require__(851);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toaster_service__ = __webpack_require__(761);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ToasterModule; });





var ToasterModule = (function () {
    function ToasterModule() {
    }
    ToasterModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
                    declarations: [
                        __WEBPACK_IMPORTED_MODULE_2__toast_component__["a" /* ToastComponent */],
                        __WEBPACK_IMPORTED_MODULE_3__toaster_container_component__["a" /* ToasterContainerComponent */]
                    ],
                    providers: [__WEBPACK_IMPORTED_MODULE_4__toaster_service__["a" /* ToasterService */]],
                    exports: [
                        __WEBPACK_IMPORTED_MODULE_3__toaster_container_component__["a" /* ToasterContainerComponent */],
                        __WEBPACK_IMPORTED_MODULE_2__toast_component__["a" /* ToastComponent */]
                    ]
                },] },
    ];
    /** @nocollapse */
    ToasterModule.ctorParameters = function () { return []; };
    return ToasterModule;
}());
//# sourceMappingURL=toaster.module.js.map

/***/ },

/***/ 1220:
/***/ function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"card\">\n        <div class=\"card-header\">Notifications</div>\n        <div class=\"card-block\">\n            <button class=\"btn btn-success\" (click)=\"showSuccess()\">Try Success</button>\n            <button class=\"btn btn-danger\" (click)=\"showError()\">Try Error</button>\n            <button class=\"btn btn-warning\" (click)=\"showWarning()\">Try Warning</button>\n            <button class=\"btn btn-info\" (click)=\"showInfo()\">Try Info</button>\n            <button class=\"btn btn-primary\" (click)=\"showPrimary()\">Try Primary</button>\n        </div>\n    </div>\n</div>\n<toaster-container [toasterconfig]=\"toasterconfig\"></toaster-container>\n"

/***/ },

/***/ 666:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster_angular2_toaster__ = __webpack_require__(848);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notifications_component__ = __webpack_require__(833);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notifications_routing_module__ = __webpack_require__(1044);
/* harmony export (binding) */ __webpack_require__.d(exports, "NotificationsModule", function() { return NotificationsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Notifications


//Routing

var NotificationsModule = (function () {
    function NotificationsModule() {
    }
    return NotificationsModule;
}());
NotificationsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__notifications_routing_module__["a" /* NotificationsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2_angular2_toaster_angular2_toaster__["a" /* ToasterModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__notifications_component__["a" /* NotificationsComponent */]
        ]
    })
], NotificationsModule);

//# sourceMappingURL=/Users/juan/Desktop/Angular2_CLI_Full_Project/src/notifications.module.js.map

/***/ },

/***/ 688:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var ConnectableObservable_1 = __webpack_require__(710);
/* tslint:disable:max-line-length */
/**
 * Returns an Observable that emits the results of invoking a specified selector on items
 * emitted by a ConnectableObservable that shares a single subscription to the underlying stream.
 *
 * <img src="./img/multicast.png" width="100%">
 *
 * @param {Function|Subject} Factory function to create an intermediate subject through
 * which the source sequence's elements will be multicast to the selector function
 * or Subject to push source elements into.
 * @param {Function} Optional selector function that can use the multicasted source stream
 * as many times as needed, without causing multiple subscriptions to the source stream.
 * Subscribers to the given source will receive all notifications of the source from the
 * time of the subscription forward.
 * @return {Observable} an Observable that emits the results of invoking the selector
 * on the items emitted by a `ConnectableObservable` that shares a single subscription to
 * the underlying stream.
 * @method multicast
 * @owner Observable
 */
function multicast(subjectOrSubjectFactory, selector) {
    var subjectFactory;
    if (typeof subjectOrSubjectFactory === 'function') {
        subjectFactory = subjectOrSubjectFactory;
    }
    else {
        subjectFactory = function subjectFactory() {
            return subjectOrSubjectFactory;
        };
    }
    if (typeof selector === 'function') {
        return this.lift(new MulticastOperator(subjectFactory, selector));
    }
    var connectable = Object.create(this, ConnectableObservable_1.connectableObservableDescriptor);
    connectable.source = this;
    connectable.subjectFactory = subjectFactory;
    return connectable;
}
exports.multicast = multicast;
var MulticastOperator = (function () {
    function MulticastOperator(subjectFactory, selector) {
        this.subjectFactory = subjectFactory;
        this.selector = selector;
    }
    MulticastOperator.prototype.call = function (subscriber, source) {
        var selector = this.selector;
        var subject = this.subjectFactory();
        var subscription = selector(subject).subscribe(subscriber);
        subscription.add(source.subscribe(subject));
        return subscription;
    };
    return MulticastOperator;
}());
exports.MulticastOperator = MulticastOperator;
//# sourceMappingURL=multicast.js.map

/***/ },

/***/ 710:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__(99);
var Observable_1 = __webpack_require__(17);
var Subscriber_1 = __webpack_require__(26);
var Subscription_1 = __webpack_require__(138);
/**
 * @class ConnectableObservable<T>
 */
var ConnectableObservable = (function (_super) {
    __extends(ConnectableObservable, _super);
    function ConnectableObservable(source, subjectFactory) {
        _super.call(this);
        this.source = source;
        this.subjectFactory = subjectFactory;
        this._refCount = 0;
    }
    ConnectableObservable.prototype._subscribe = function (subscriber) {
        return this.getSubject().subscribe(subscriber);
    };
    ConnectableObservable.prototype.getSubject = function () {
        var subject = this._subject;
        if (!subject || subject.isStopped) {
            this._subject = this.subjectFactory();
        }
        return this._subject;
    };
    ConnectableObservable.prototype.connect = function () {
        var connection = this._connection;
        if (!connection) {
            connection = this._connection = new Subscription_1.Subscription();
            connection.add(this.source
                .subscribe(new ConnectableSubscriber(this.getSubject(), this)));
            if (connection.closed) {
                this._connection = null;
                connection = Subscription_1.Subscription.EMPTY;
            }
            else {
                this._connection = connection;
            }
        }
        return connection;
    };
    ConnectableObservable.prototype.refCount = function () {
        return this.lift(new RefCountOperator(this));
    };
    return ConnectableObservable;
}(Observable_1.Observable));
exports.ConnectableObservable = ConnectableObservable;
exports.connectableObservableDescriptor = {
    operator: { value: null },
    _refCount: { value: 0, writable: true },
    _subscribe: { value: ConnectableObservable.prototype._subscribe },
    getSubject: { value: ConnectableObservable.prototype.getSubject },
    connect: { value: ConnectableObservable.prototype.connect },
    refCount: { value: ConnectableObservable.prototype.refCount }
};
var ConnectableSubscriber = (function (_super) {
    __extends(ConnectableSubscriber, _super);
    function ConnectableSubscriber(destination, connectable) {
        _super.call(this, destination);
        this.connectable = connectable;
    }
    ConnectableSubscriber.prototype._error = function (err) {
        this._unsubscribe();
        _super.prototype._error.call(this, err);
    };
    ConnectableSubscriber.prototype._complete = function () {
        this._unsubscribe();
        _super.prototype._complete.call(this);
    };
    ConnectableSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (connectable) {
            this.connectable = null;
            var connection = connectable._connection;
            connectable._refCount = 0;
            connectable._subject = null;
            connectable._connection = null;
            if (connection) {
                connection.unsubscribe();
            }
        }
    };
    return ConnectableSubscriber;
}(Subject_1.SubjectSubscriber));
var RefCountOperator = (function () {
    function RefCountOperator(connectable) {
        this.connectable = connectable;
    }
    RefCountOperator.prototype.call = function (subscriber, source) {
        var connectable = this.connectable;
        connectable._refCount++;
        var refCounter = new RefCountSubscriber(subscriber, connectable);
        var subscription = source.subscribe(refCounter);
        if (!refCounter.closed) {
            refCounter.connection = connectable.connect();
        }
        return subscription;
    };
    return RefCountOperator;
}());
var RefCountSubscriber = (function (_super) {
    __extends(RefCountSubscriber, _super);
    function RefCountSubscriber(destination, connectable) {
        _super.call(this, destination);
        this.connectable = connectable;
    }
    RefCountSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (!connectable) {
            this.connection = null;
            return;
        }
        this.connectable = null;
        var refCount = connectable._refCount;
        if (refCount <= 0) {
            this.connection = null;
            return;
        }
        connectable._refCount = refCount - 1;
        if (refCount > 1) {
            this.connection = null;
            return;
        }
        ///
        // Compare the local RefCountSubscriber's connection Subscription to the
        // connection Subscription on the shared ConnectableObservable. In cases
        // where the ConnectableObservable source synchronously emits values, and
        // the RefCountSubscriber's downstream Observers synchronously unsubscribe,
        // execution continues to here before the RefCountOperator has a chance to
        // supply the RefCountSubscriber with the shared connection Subscription.
        // For example:
        // ```
        // Observable.range(0, 10)
        //   .publish()
        //   .refCount()
        //   .take(5)
        //   .subscribe();
        // ```
        // In order to account for this case, RefCountSubscriber should only dispose
        // the ConnectableObservable's shared connection Subscription if the
        // connection Subscription exists, *and* either:
        //   a. RefCountSubscriber doesn't have a reference to the shared connection
        //      Subscription yet, or,
        //   b. RefCountSubscriber's connection Subscription reference is identical
        //      to the shared connection Subscription
        ///
        var connection = this.connection;
        var sharedConnection = connectable._connection;
        this.connection = null;
        if (sharedConnection && (!connection || sharedConnection === connection)) {
            sharedConnection.unsubscribe();
        }
    };
    return RefCountSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=ConnectableObservable.js.map

/***/ },

/***/ 725:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(17);
var share_1 = __webpack_require__(726);
Observable_1.Observable.prototype.share = share_1.share;
//# sourceMappingURL=share.js.map

/***/ },

/***/ 726:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var multicast_1 = __webpack_require__(688);
var Subject_1 = __webpack_require__(99);
function shareSubjectFactory() {
    return new Subject_1.Subject();
}
/**
 * Returns a new Observable that multicasts (shares) the original Observable. As long as there is at least one
 * Subscriber this Observable will be subscribed and emitting data. When all subscribers have unsubscribed it will
 * unsubscribe from the source Observable. Because the Observable is multicasting it makes the stream `hot`.
 * This is an alias for .publish().refCount().
 *
 * <img src="./img/share.png" width="100%">
 *
 * @return {Observable<T>} an Observable that upon connection causes the source Observable to emit items to its Observers
 * @method share
 * @owner Observable
 */
function share() {
    return multicast_1.multicast.call(this, shareSubjectFactory).refCount();
}
exports.share = share;
;
//# sourceMappingURL=share.js.map

/***/ },

/***/ 760:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BodyOutputType; });
var BodyOutputType;
(function (BodyOutputType) {
    BodyOutputType[BodyOutputType["Default"] = 0] = "Default";
    BodyOutputType[BodyOutputType["TrustedHtml"] = 1] = "TrustedHtml";
    BodyOutputType[BodyOutputType["Component"] = 2] = "Component";
})(BodyOutputType || (BodyOutputType = {}));
//# sourceMappingURL=bodyOutputType.js.map

/***/ },

/***/ 761:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ToasterService; });




var ToasterService = (function () {
    /**
     * Creates an instance of ToasterService.
     */
    function ToasterService() {
        var _this = this;
        this.addToast = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) { return _this._addToast = observer; }).share();
        this.clearToasts = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) { return _this._clearToasts = observer; }).share();
        this._removeToastSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.removeToast = this._removeToastSubject.share();
    }
    /**
     * Synchronously create and show a new toast instance.
     *
     * @param {(string | Toast)} type The type of the toast, or a Toast object.
     * @param {string=} title The toast title.
     * @param {string=} body The toast body.
     * @returns {Toast}
     *          The newly created Toast instance with a randomly generated GUID Id.
     */
    ToasterService.prototype.pop = function (type, title, body) {
        var toast = typeof type === 'string' ? { type: type, title: title, body: body } : type;
        toast.toastId = Guid.newGuid();
        if (!this._addToast) {
            throw new Error("No Toaster Containers have been initialized to receive toasts.");
        }
        this._addToast.next(toast);
        return toast;
    };
    /**
     * Asynchronously create and show a new toast instance.
     *
     * @param {(string | Toast)} type The type of the toast, or a Toast object.
     * @param {string=} title The toast title.
     * @param {string=} body The toast body.
     * @returns {Observable<Toast>}
     *          A hot Observable that can be subscribed to in order to receive the Toast instance
     *          with a randomly generated GUID Id.
     */
    ToasterService.prototype.popAsync = function (type, title, body) {
        var _this = this;
        setTimeout(function () {
            _this.pop(type, title, body);
        }, 0);
        return this.addToast;
    };
    /**
     * Clears a toast by toastId and/or toastContainerId.
     *
     * @param {string} toastId The toastId to clear.
     * @param {number=} toastContainerId
     *        The toastContainerId of the container to remove toasts from.
     */
    ToasterService.prototype.clear = function (toastId, toastContainerId) {
        var clearWrapper = {
            toastId: toastId, toastContainerId: toastContainerId
        };
        this._clearToasts.next(clearWrapper);
    };
    ToasterService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    ToasterService.ctorParameters = function () { return []; };
    return ToasterService;
}());
// http://stackoverflow.com/questions/26501688/a-typescript-guid-class
var Guid = (function () {
    function Guid() {
    }
    Guid.newGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return Guid;
}());
//# sourceMappingURL=toaster.service.js.map

/***/ },

/***/ 833:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_toaster_angular2_toaster__ = __webpack_require__(848);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NotificationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsComponent = (function () {
    function NotificationsComponent(toasterService) {
        this.toasterconfig = new __WEBPACK_IMPORTED_MODULE_1_angular2_toaster_angular2_toaster__["b" /* ToasterConfig */]({
            tapToDismiss: true,
            timeout: 5000
        });
        this.toasterService = toasterService;
    }
    NotificationsComponent.prototype.showSuccess = function () {
        this.toasterService.pop('success', 'Success Toaster', 'This is toaster description');
    };
    NotificationsComponent.prototype.showError = function () {
        this.toasterService.pop('error', 'Error Toaster', 'This is toaster description');
    };
    NotificationsComponent.prototype.showWarning = function () {
        this.toasterService.pop('warning', 'Warning Toaster', 'This is toaster description');
    };
    NotificationsComponent.prototype.showInfo = function () {
        this.toasterService.pop('info', 'Info Toaster', 'This is toaster description');
    };
    NotificationsComponent.prototype.showPrimary = function () {
        this.toasterService.pop('primary', 'Primary Toaster', 'This is toaster description');
    };
    return NotificationsComponent;
}());
NotificationsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(1220)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_toaster_angular2_toaster__["c" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_toaster_angular2_toaster__["c" /* ToasterService */]) === "function" && _a || Object])
], NotificationsComponent);

var _a;
//# sourceMappingURL=/Users/juan/Desktop/Angular2_CLI_Full_Project/src/notifications.component.js.map

/***/ },

/***/ 848:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_toast_component__ = __webpack_require__(849);
/* unused harmony reexport ToastComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_toaster_container_component__ = __webpack_require__(851);
/* unused harmony reexport ToasterContainerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_toaster_service__ = __webpack_require__(761);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__src_toaster_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_toaster_config__ = __webpack_require__(850);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__src_toaster_config__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_bodyOutputType__ = __webpack_require__(760);
/* unused harmony reexport BodyOutputType */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_toaster_module__ = __webpack_require__(1080);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__src_toaster_module__["a"]; });






//# sourceMappingURL=angular2-toaster.js.map

/***/ },

/***/ 849:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bodyOutputType__ = __webpack_require__(760);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ToastComponent; });



var ToastComponent = (function () {
    function ToastComponent(sanitizer, componentFactoryResolver, changeDetectorRef) {
        this.sanitizer = sanitizer;
        this.componentFactoryResolver = componentFactoryResolver;
        this.changeDetectorRef = changeDetectorRef;
        this.bodyOutputType = __WEBPACK_IMPORTED_MODULE_2__bodyOutputType__["a" /* BodyOutputType */];
        this.clickEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ToastComponent.prototype.ngOnInit = function () {
        if (this.toast.closeHtml) {
            this.safeCloseHtml = this.sanitizer.bypassSecurityTrustHtml(this.toast.closeHtml);
        }
    };
    ToastComponent.prototype.ngAfterViewInit = function () {
        if (this.toast.bodyOutputType === this.bodyOutputType.Component) {
            var component = this.componentFactoryResolver.resolveComponentFactory(this.toast.body);
            var componentInstance = this.componentBody.createComponent(component, null, this.componentBody.injector);
            componentInstance.instance.toast = this.toast;
            this.changeDetectorRef.detectChanges();
        }
    };
    ToastComponent.prototype.click = function (event, toast) {
        event.stopPropagation();
        this.clickEvent.emit({
            value: { toast: toast, isCloseButton: true }
        });
    };
    ToastComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: '[toastComp]',
                    template: "\n        <i class=\"toaster-icon\" [ngClass]=\"iconClass\"></i>\n        <div class=\"toast-content\">\n            <div [ngClass]=\"toast.toasterConfig.titleClass\">{{toast.title}}</div>\n            <div [ngClass]=\"toast.toasterConfig.messageClass\" [ngSwitch]=\"toast.bodyOutputType\">\n                <div *ngSwitchCase=\"bodyOutputType.Component\" #componentBody></div>\n                <div *ngSwitchCase=\"bodyOutputType.TrustedHtml\" [innerHTML]=\"toast.body\"></div>\n                <div *ngSwitchCase=\"bodyOutputType.Default\">{{toast.body}}</div>\n            </div>\n        </div>\n        <div class=\"toast-close-button\" *ngIf=\"toast.showCloseButton\" (click)=\"click($event, toast)\"\n            [innerHTML]=\"safeCloseHtml\">\n        </div>",
                    outputs: ['clickEvent']
                },] },
    ];
    /** @nocollapse */
    ToastComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
    ]; };
    ToastComponent.propDecorators = {
        'toast': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'iconClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'componentBody': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ['componentBody', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] },] },],
    };
    return ToastComponent;
}());
//# sourceMappingURL=toast.component.js.map

/***/ },

/***/ 850:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bodyOutputType__ = __webpack_require__(760);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ToasterConfig; });

var ToasterConfig = (function () {
    function ToasterConfig(configOverrides) {
        configOverrides = configOverrides || {};
        this.limit = configOverrides.limit || null;
        this.tapToDismiss = configOverrides.tapToDismiss != null ? configOverrides.tapToDismiss : true;
        this.showCloseButton = configOverrides.showCloseButton != null ? configOverrides.showCloseButton : false;
        this.closeHtml = configOverrides.closeHtml || '<button class="toast-close-button" type="button">&times;</button>';
        this.newestOnTop = configOverrides.newestOnTop != null ? configOverrides.newestOnTop : true;
        this.timeout = configOverrides.timeout != null ? configOverrides.timeout : 5000;
        this.typeClasses = configOverrides.typeClasses || {
            error: 'toast-error',
            info: 'toast-info',
            wait: 'toast-wait',
            success: 'toast-success',
            warning: 'toast-warning'
        };
        this.iconClasses = configOverrides.iconClasses || {
            error: 'icon-error',
            info: 'icon-info',
            wait: 'icon-wait',
            success: 'icon-success',
            warning: 'icon-warning'
        };
        this.bodyOutputType = configOverrides.bodyOutputType || __WEBPACK_IMPORTED_MODULE_0__bodyOutputType__["a" /* BodyOutputType */].Default;
        this.bodyTemplate = configOverrides.bodyTemplate || 'toasterBodyTmpl.html';
        this.defaultTypeClass = configOverrides.defaultTypeClass || 'toast-info';
        this.positionClass = configOverrides.positionClass || 'toast-top-right';
        this.animationClass = configOverrides.animationClass || '';
        this.titleClass = configOverrides.titleClass || 'toast-title';
        this.messageClass = configOverrides.messageClass || 'toast-message';
        this.preventDuplicates = configOverrides.preventDuplicates != null ? configOverrides.preventDuplicates : false;
        this.mouseoverTimerStop = configOverrides.mouseoverTimerStop != null ? configOverrides.mouseoverTimerStop : false;
        this.toastContainerId = configOverrides.toastContainerId != null ? configOverrides.toastContainerId : null;
    }
    return ToasterConfig;
}());
//# sourceMappingURL=toaster-config.js.map

/***/ },

/***/ 851:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toaster_config__ = __webpack_require__(850);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toaster_service__ = __webpack_require__(761);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ToasterContainerComponent; });



var ToasterContainerComponent = (function () {
    function ToasterContainerComponent(toasterService, ref) {
        this.ref = ref;
        this.toasts = [];
        this.toasterService = toasterService;
    }
    ToasterContainerComponent.prototype.ngOnInit = function () {
        this.registerSubscribers();
        if (this.toasterconfig === null || typeof this.toasterconfig === 'undefined') {
            this.toasterconfig = new __WEBPACK_IMPORTED_MODULE_1__toaster_config__["a" /* ToasterConfig */]();
        }
    };
    // event handlers
    ToasterContainerComponent.prototype.click = function (toast, isCloseButton) {
        if (this.toasterconfig.tapToDismiss || (toast.showCloseButton && isCloseButton)) {
            var removeToast = true;
            if (toast.clickHandler) {
                if (typeof toast.clickHandler === "function") {
                    removeToast = toast.clickHandler(toast, isCloseButton);
                }
                else {
                    console.log("The toast click handler is not a callable function.");
                    return false;
                }
            }
            if (removeToast) {
                this.removeToast(toast);
            }
        }
    };
    ToasterContainerComponent.prototype.childClick = function ($event) {
        this.click($event.value.toast, $event.value.isCloseButton);
    };
    ToasterContainerComponent.prototype.stopTimer = function (toast) {
        if (this.toasterconfig.mouseoverTimerStop) {
            if (toast.timeoutId) {
                window.clearTimeout(toast.timeoutId);
                toast.timeoutId = null;
            }
        }
    };
    ToasterContainerComponent.prototype.restartTimer = function (toast) {
        if (this.toasterconfig.mouseoverTimerStop) {
            if (!toast.timeoutId) {
                this.configureTimer(toast);
            }
        }
        else if (toast.timeoutId === null) {
            this.removeToast(toast);
        }
    };
    // private functions
    ToasterContainerComponent.prototype.registerSubscribers = function () {
        var _this = this;
        this.addToastSubscriber = this.toasterService.addToast.subscribe(function (toast) {
            _this.addToast(toast);
        });
        this.clearToastsSubscriber = this.toasterService.clearToasts.subscribe(function (clearWrapper) {
            _this.clearToasts(clearWrapper);
        });
    };
    ToasterContainerComponent.prototype.addToast = function (toast) {
        toast.toasterConfig = this.toasterconfig;
        if (toast.toastContainerId && this.toasterconfig.toastContainerId
            && toast.toastContainerId !== this.toasterconfig.toastContainerId)
            return;
        if (!toast.type) {
            toast.type = this.toasterconfig.defaultTypeClass;
        }
        if (this.toasterconfig.preventDuplicates && this.toasts.length > 0) {
            if (toast.toastId && this.toasts.some(function (t) { return t.toastId === toast.toastId; })) {
                return;
            }
            else if (this.toasts.some(function (t) { return t.body === toast.body; })) {
                return;
            }
        }
        if (toast.showCloseButton === null || typeof toast.showCloseButton === "undefined") {
            if (typeof this.toasterconfig.showCloseButton === "object") {
                toast.showCloseButton = this.toasterconfig.showCloseButton[toast.type];
            }
            else if (typeof this.toasterconfig.showCloseButton === "boolean") {
                toast.showCloseButton = this.toasterconfig.showCloseButton;
            }
        }
        if (toast.showCloseButton) {
            toast.closeHtml = toast.closeHtml || this.toasterconfig.closeHtml;
        }
        toast.bodyOutputType = toast.bodyOutputType || this.toasterconfig.bodyOutputType;
        this.configureTimer(toast);
        if (this.toasterconfig.newestOnTop) {
            this.toasts.unshift(toast);
            if (this.isLimitExceeded()) {
                this.toasts.pop();
            }
        }
        else {
            this.toasts.push(toast);
            if (this.isLimitExceeded()) {
                this.toasts.shift();
            }
        }
        if (toast.onShowCallback) {
            toast.onShowCallback(toast);
        }
    };
    ToasterContainerComponent.prototype.configureTimer = function (toast) {
        var _this = this;
        var timeout = (typeof toast.timeout === "number")
            ? toast.timeout : this.toasterconfig.timeout;
        if (typeof timeout === "object")
            timeout = timeout[toast.type];
        if (timeout > 0) {
            toast.timeoutId = window.setTimeout(function () {
                _this.ref.markForCheck();
                _this.removeToast(toast);
            }, timeout);
        }
    };
    ToasterContainerComponent.prototype.isLimitExceeded = function () {
        return this.toasterconfig.limit && this.toasts.length > this.toasterconfig.limit;
    };
    ToasterContainerComponent.prototype.removeToast = function (toast) {
        var index = this.toasts.indexOf(toast);
        if (index < 0)
            return;
        this.toasts.splice(index, 1);
        if (toast.timeoutId) {
            window.clearTimeout(toast.timeoutId);
            toast.timeoutId = null;
        }
        if (toast.onHideCallback)
            toast.onHideCallback(toast);
        this.toasterService._removeToastSubject.next({ toastId: toast.toastId, toastContainerId: toast.toastContainerId });
    };
    ToasterContainerComponent.prototype.removeAllToasts = function () {
        for (var i = this.toasts.length - 1; i >= 0; i--) {
            this.removeToast(this.toasts[i]);
        }
    };
    ToasterContainerComponent.prototype.clearToasts = function (clearWrapper) {
        var toastId = clearWrapper.toastId;
        var toastContainerId = clearWrapper.toastContainerId;
        if (toastContainerId === null || typeof toastContainerId === 'undefined') {
            this.clearToastsAction(toastId);
        }
        else if (toastContainerId === this.toasterconfig.toastContainerId) {
            this.clearToastsAction(toastId);
        }
    };
    ToasterContainerComponent.prototype.clearToastsAction = function (toastId) {
        if (toastId) {
            this.removeToast(this.toasts.filter(function (t) { return t.toastId === toastId; })[0]);
        }
        else {
            this.removeAllToasts();
        }
    };
    ToasterContainerComponent.prototype.ngOnDestroy = function () {
        if (this.addToastSubscriber) {
            this.addToastSubscriber.unsubscribe();
        }
        if (this.clearToastsSubscriber) {
            this.clearToastsSubscriber.unsubscribe();
        }
    };
    ToasterContainerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'toaster-container',
                    template: "\n        <div id=\"toast-container\" [ngClass]=\"[toasterconfig.positionClass, toasterconfig.animationClass]\" class=\"ng-animate\">\n            <div toastComp *ngFor=\"let toast of toasts\" class=\"toast\" [toast]=\"toast\"\n                [iconClass]=\"toasterconfig.iconClasses[toast.type]\" \n                [ngClass]=\"toasterconfig.typeClasses[toast.type]\"\n                (click)=\"click(toast)\" (clickEvent)=\"childClick($event)\" \n                (mouseover)=\"stopTimer(toast)\" (mouseout)=\"restartTimer(toast)\">\n            </div>\n        </div>\n        " //,
                },] },
    ];
    /** @nocollapse */
    ToasterContainerComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__toaster_service__["a" /* ToasterService */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
    ]; };
    ToasterContainerComponent.propDecorators = {
        'toasterconfig': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return ToasterContainerComponent;
}());
//# sourceMappingURL=toaster-container.component.js.map

/***/ }

});
//# sourceMappingURL=5.bundle.map