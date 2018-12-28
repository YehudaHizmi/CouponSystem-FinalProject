(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner{\r\n  position: absolute;\r\n  height: 100px;\r\n  width: 100px;\r\n  top: 50%;\r\n  left: 50%;\r\n  margin-left: -50px;\r\n  margin-top: -50px;\r\n  background-size: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast position=\"top-right\" [style]=\"{marginTop: '80px'}\"></p-toast>\n<app-header></app-header>\n<!-- <p-progressSpinner *ngIf=\"Active==ture\" class=\"spinner\"></p-progressSpinner> -->\n<br>\n<br>\n<br>\n<br>\n<br>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'CouponSystemCustomer';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/menu */ "./node_modules/primeng/menu.js");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_menu__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_customer_main_area_customer_main_area_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/customer-main-area/customer-main-area.component */ "./src/app/components/customer-main-area/customer-main-area.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var primeng_dragdrop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dragdrop */ "./node_modules/primeng/dragdrop.js");
/* harmony import */ var primeng_dragdrop__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_dragdrop__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _services_web_api_customer_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/web-api-customer.service */ "./src/app/services/web-api-customer.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/panel.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_panel__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/scrollpanel */ "./node_modules/primeng/scrollpanel.js");
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/fieldset */ "./node_modules/primeng/fieldset.js");
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_fieldset__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _components_purchase_coupon_purchase_coupon_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/purchase-coupon/purchase-coupon.component */ "./src/app/components/purchase-coupon/purchase-coupon.component.ts");
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/dataview */ "./node_modules/primeng/dataview.js");
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_dataview__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_purchased_coupons_purchased_coupons_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/purchased-coupons/purchased-coupons.component */ "./src/app/components/purchased-coupons/purchased-coupons.component.ts");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/slider */ "./node_modules/primeng/slider.js");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(primeng_slider__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/chart */ "./node_modules/primeng/chart.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(primeng_chart__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _components_coupons_chart_coupons_chart_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/coupons-chart/coupons-chart.component */ "./src/app/components/coupons-chart/coupons-chart.component.ts");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/progressspinner */ "./node_modules/primeng/progressspinner.js");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(primeng_progressspinner__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _components_customer_main_area_customer_main_area_component__WEBPACK_IMPORTED_MODULE_5__["CustomerMainAreaComponent"],
                _components_purchase_coupon_purchase_coupon_component__WEBPACK_IMPORTED_MODULE_18__["PurchaseCouponComponent"],
                _components_purchased_coupons_purchased_coupons_component__WEBPACK_IMPORTED_MODULE_23__["PurchasedCouponsComponent"],
                _components_coupons_chart_coupons_chart_component__WEBPACK_IMPORTED_MODULE_26__["CouponsChartComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                primeng_menu__WEBPACK_IMPORTED_MODULE_4__["MenuModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                primeng_dragdrop__WEBPACK_IMPORTED_MODULE_8__["DragDropModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_10__["ToastModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_12__["HttpModule"],
                primeng_panel__WEBPACK_IMPORTED_MODULE_13__["PanelModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_14__["TableModule"],
                primeng_dataview__WEBPACK_IMPORTED_MODULE_19__["DataViewModule"],
                primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_15__["ScrollPanelModule"],
                primeng_fieldset__WEBPACK_IMPORTED_MODULE_17__["FieldsetModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_16__["ButtonModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_20__["DialogModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__["DropdownModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"],
                primeng_slider__WEBPACK_IMPORTED_MODULE_24__["SliderModule"],
                primeng_chart__WEBPACK_IMPORTED_MODULE_25__["ChartModule"],
                primeng_progressspinner__WEBPACK_IMPORTED_MODULE_27__["ProgressSpinnerModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([
                    {
                        path: 'couponChart',
                        component: _components_coupons_chart_coupons_chart_component__WEBPACK_IMPORTED_MODULE_26__["CouponsChartComponent"]
                    },
                    {
                        path: 'purchaseCoupon',
                        component: _components_purchase_coupon_purchase_coupon_component__WEBPACK_IMPORTED_MODULE_18__["PurchaseCouponComponent"]
                    },
                    {
                        path: 'purchasedCoupons',
                        component: _components_purchased_coupons_purchased_coupons_component__WEBPACK_IMPORTED_MODULE_23__["PurchasedCouponsComponent"]
                    },
                    { path: '',
                        redirectTo: '/couponChart',
                        pathMatch: 'full'
                    },
                ])
            ],
            providers: [_services_web_api_customer_service__WEBPACK_IMPORTED_MODULE_11__["WebApiCustomerService"], primeng_api__WEBPACK_IMPORTED_MODULE_9__["MessageService"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_28__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_28__["HashLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/common/Customer.ts":
/*!***********************************************!*\
  !*** ./src/app/components/common/Customer.ts ***!
  \***********************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
var Customer = /** @class */ (function () {
    function Customer(id, custName, password, coupons) {
        this.id = id;
        this.custName = custName;
        this.password = password;
        this.coupons = coupons;
    }
    return Customer;
}());



/***/ }),

/***/ "./src/app/components/coupons-chart/coupons-chart.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/coupons-chart/coupons-chart.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\r\n  text-align: center;\r\n}\r\n\r\nh4 {\r\n  text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/coupons-chart/coupons-chart.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/coupons-chart/coupons-chart.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!hasCoupons===true\">\n<h2>You Haven't Purchased Any Coupons Yet</h2>\n<h4>Please Go To Puechase Coupons Screen</h4>\n</div>\n<div *ngIf=\"hasCoupons===true\">\n    <h2>Number Of Coupons By Type</h2>\n    <h4>At the following chart you can see the number of coupons by type you've purchased </h4>\n    <br>\n<p-chart type=\"pie\" [data]=\"data\"  width=\"100vw\" height=\"60vh\"></p-chart>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/coupons-chart/coupons-chart.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/coupons-chart/coupons-chart.component.ts ***!
  \*********************************************************************/
/*! exports provided: CouponsChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponsChartComponent", function() { return CouponsChartComponent; });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_services_web_api_customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/web-api-customer.service */ "./src/app/services/web-api-customer.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CouponsChartComponent = /** @class */ (function () {
    /*
    At the constructor we inject
    1. WebApiAdminService for the favor of the services
    2. MessageService for the favor of the custom messages
    */
    function CouponsChartComponent(customerService, messageService) {
        this.customerService = customerService;
        this.messageService = messageService;
        this.hasCoupons = true;
        // This method calculate number of coupons of each type
        this.calcNumOfCouponsByType();
        // Prepare the data for the chart
        this.data = {
            labels: ['Resturant', 'Electricity', 'Food', 'Health', 'Sports', 'Camping', 'Travelling'],
            datasets: [
                {
                    data: this.numOfCoupon,
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8E44AD', '#48C9B0', '#273746', '#FFFFFF'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8E44AD', '#48C9B0', '#273746', '#FFFFFF']
                }
            ]
        };
    }
    // initialze the types of the coupons from the service
    CouponsChartComponent.prototype.ngOnInit = function () {
        this.types = this.customerService.couponTypes;
    };
    // This method is activated from the constructor and it calculates the number of coupons of each type
    CouponsChartComponent.prototype.calcNumOfCouponsByType = function () {
        var _this = this;
        this.customerService.getPurchasedCouponsService().subscribe(function (resp) {
            _this.coupons = resp.json();
            _this.numOfCoupon = [0, 0, 0, 0, 0, 0, 0];
            for (var _i = 0, _a = _this.coupons; _i < _a.length; _i++) {
                var coupon = _a[_i];
                switch (coupon.type) {
                    case 'RESTURANT':
                        _this.numOfCoupon[0]++;
                        break;
                    case 'ELECTRICITY':
                        _this.numOfCoupon[1]++;
                        break;
                    case 'FOOD':
                        _this.numOfCoupon[2]++;
                        break;
                    case 'HEALTH':
                        _this.numOfCoupon[3]++;
                        break;
                    case 'SPORTS':
                        _this.numOfCoupon[4]++;
                        break;
                    case 'CAMPING':
                        _this.numOfCoupon[5]++;
                        break;
                    case 'TRAVELLING':
                        _this.numOfCoupon[6]++;
                        break;
                }
            }
            // console.log(this.numOfCoupon);
            // this.types = [
            //   {label: 'Resturant' , value: 'RESTURANT'},
            //   {label: 'Electricity', value: 'ELECTRICITY'},
            //   {label: 'Food', value: 'FOOD'},
            //   {label: 'Health', value: 'HEALTH'},
            //   {label: 'Sports', value: 'SPORTS'},
            //   {label: 'Camping', value: 'CAMPING'},
            //   {label: 'Travelling', value: 'TRAVELLING'},
            // ];
            _this.data = {
                labels: ['Resturant', 'Electricity', 'Food', 'Health', 'Sports', 'Camping', 'Travelling'],
                datasets: [
                    {
                        data: _this.numOfCoupon,
                        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8E44AD', '#48C9B0', '#273746', '#FFFFFF'],
                        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8E44AD', '#48C9B0', '#273746', '#FFFFFF']
                    }
                ]
            };
        }, function (error) {
            _this.hasCoupons = false;
            //  console.log(this.hasCoupons);
        });
    };
    CouponsChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-coupons-chart',
            template: __webpack_require__(/*! ./coupons-chart.component.html */ "./src/app/components/coupons-chart/coupons-chart.component.html"),
            styles: [__webpack_require__(/*! ./coupons-chart.component.css */ "./src/app/components/coupons-chart/coupons-chart.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_web_api_customer_service__WEBPACK_IMPORTED_MODULE_1__["WebApiCustomerService"], primeng_api__WEBPACK_IMPORTED_MODULE_0__["MessageService"]])
    ], CouponsChartComponent);
    return CouponsChartComponent;
}());



/***/ }),

/***/ "./src/app/components/customer-main-area/customer-main-area.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/customer-main-area/customer-main-area.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .drag-column {\r\n  padding-right: .5em;\r\n}\r\n:host ::ng-deep .drop-column {\r\n  border: 1px solid #c8c8c8;\r\n  background-color: #ffffff;\r\n  height: 200%;\r\n}\r\n.ui-g li {\r\n  list-style-type: none;\r\n  padding: 10px;\r\n  margin-bottom: 5px;\r\n  border: 1px solid #c8c8c8;\r\n  background-color: #ffffff;\r\n}\r\n.custombar1 .ui-scrollpanel-wrapper {\r\n  border-right: 9px solid #f4f4f4;\r\n}\r\n.custombar1 .ui-scrollpanel-bar {\r\n  background-color: #1976d2;\r\n  opacity: 1;\r\n  transition: background-color .3s;\r\n}\r\n.custombar1 .ui-scrollpanel-bar:hover {\r\n  background-color: #135ba1;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/customer-main-area/customer-main-area.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/customer-main-area/customer-main-area.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <p-fieldset [legend]=\"legend\">\n      <b><i>\n        At the left side all the qvailable coupons that you can purchase.\n        If you want to purchase please drag the wanted coupon to the right side\n      </i></b>\n    </p-fieldset>\n<br>\n  <div class=\"ui-g\">\n    <div class=\"ui-g-12 ui-md-6 ui-g-nopad drag-column\">\n        <p-scrollPanel  [style]=\"{ height: '75%'}\" styleClass=\"custombar1\">\n        <ul style=\"margin:0;padding:0\">\n            <li *ngFor=\"let coupon of availableCoupons\" class=\"ui-helper-clearfix\" pDraggable =\"coupons\"\n                (onDragStart)=\"dragStart($event,coupon)\" (onDragEnd)=\"dragEnd($event)\">\n                <i class=\"pi pi-arrows pi-2x\" style=\"float:right;margin-top:8px\"></i>\n                 <img [src]=\"coupon.image\" style=\"float:left\" draggable=\"true\">\n                 <div style=\"margin:8px 0 0 8px;float:left\">\n                  <table>\n                    <tr >\n                      <td>Title: </td><td style=\"text-align: right\"> &nbsp; {{coupon.title}}</td>\n                    </tr>\n                    <tr>\n                        <td>Start Date</td><td style=\"text-align: right\"> &nbsp; {{coupon.startDate}}</td>\n                    </tr>\n                    <tr>\n                        <td>Start Date</td><td style=\"text-align: right\"> &nbsp; {{coupon.startDate}}</td>\n                    </tr>\n                    <tr>\n                        <td>Start Date</td><td style=\"text-align: right\"> &nbsp; {{coupon.startDate}}</td>\n                    </tr>\n                    <tr>\n                        <td>Start Date</td><td style=\"text-align: right\"> &nbsp; {{coupon.startDate}}</td>\n                    </tr>\n\n                  <!-- Title: {{coupon.title}}<br>\n                  Start Date: {{coupon.startDate}}<br>\n                  End Date: {{coupon.endDate}}<br>\n                  Type: {{coupon.type}}<br>\n                  Amount: {{coupon.amount}}<br>\n                  Message: {{coupon.message}}<br>\n                  Price: {{coupon.price}}<br> -->\n                </table>\n                </div>\n            </li>\n\n        </ul>\n      </p-scrollPanel>\n    </div>\n    <div class=\"ui-g-12 ui-md-6 drop-column\" pDroppable=\"coupons\"\n    (onDrop)=\"drop($event)\">\n    <p-table [value]=\"selectedCoupons\" [paginator]=\"true\" [rows]=\"10\">\n        <ng-template pTemplate=\"header\">\n            <tr>\n                <th *ngFor=\"let col of cols\" [pSortableColumn]=\"col.field\" pResizableColumn>\n                    {{ col.displayName }}\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-coupon>\n            <tr>\n                <td>{{coupon.title}}</td>\n                <td>{{coupon.startDate}}</td>\n                <td>{{coupon.endDate}}</td>\n                <td>{{coupon.price}}</td>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/customer-main-area/customer-main-area.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/customer-main-area/customer-main-area.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CustomerMainAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerMainAreaComponent", function() { return CustomerMainAreaComponent; });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_web_api_customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/web-api-customer.service */ "./src/app/services/web-api-customer.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerMainAreaComponent = /** @class */ (function () {
    /*
    At the constructor we inject
    1. WebApiAdminService for the favor of the services
    2. MessageService for the favor of the custom messages
    */
    function CustomerMainAreaComponent(customerService, messageService) {
        this.customerService = customerService;
        this.messageService = messageService;
        this.legend = 'Purchase A Coupon';
    }
    // This method is activated from the onNgInit in order to present the user all the avilable coupons.
    CustomerMainAreaComponent.prototype.getAllCoupons = function () {
        var _this = this;
        this.customerService.getAllCouponsService().subscribe(function (resp) {
            _this.availableCoupons = resp.json();
            // Make default sort of companies array
            _this.sortArry(_this.availableCoupons);
        }, function (error) {
            _this.messageService.add({ severity: 'error', summary: 'Data Unavailable', detail: error._body });
        });
    };
    // This method is activated from the onNgInit in order to present the user all the purchased coupons.
    // and the mark the user all the coupons that he has already purchased
    CustomerMainAreaComponent.prototype.getPurchasedCoupons = function () {
        var _this = this;
        this.customerService.getPurchasedCouponsService().subscribe(function (resp) {
            _this.selectedCoupons = resp.json();
            // Make default sort of companies array
            _this.sortArry(_this.selectedCoupons);
        }, function (error) {
            _this.messageService.add({ severity: 'error', summary: 'Data Unavailable', detail: error._body });
        });
    };
    CustomerMainAreaComponent.prototype.dragStart = function (event, coupon) {
        this.draggedCoupon = coupon;
    };
    CustomerMainAreaComponent.prototype.dragEnd = function (event) {
        this.draggedCoupon = null;
    };
    CustomerMainAreaComponent.prototype.drop = function (event) {
        var _this = this;
        this.couponTitle = this.draggedCoupon.title;
        if (this.draggedCoupon) {
            this.customerService.purchaseCouponService(this.draggedCoupon).subscribe(function (resp) {
                _this.getPurchasedCoupons();
                _this.messageService.add({ severity: 'success', summary: 'Coupon Was Added', detail: _this.couponTitle +
                        ' Was Purchased Successfully' });
            }, function (error) {
                _this.messageService.add({ severity: 'error', summary: 'Coupon Was\'t Purchased', detail: error._body });
            });
            this.draggedCoupon = null;
        }
    };
    CustomerMainAreaComponent.prototype.sortArry = function (arryToSort) {
        arryToSort.sort(function (a, b) {
            if (a.title < b.title) {
                return -1;
            }
            else if (a.title > b.title) {
                return 1;
            }
            else {
                return 0;
            }
        });
    };
    CustomerMainAreaComponent.prototype.ngOnInit = function () {
        this.availableCoupons = [];
        this.selectedCoupons = [];
        this.getAllCoupons();
        this.getPurchasedCoupons();
        this.cols = [
            // { displayName: 'Id',          field: 'id',          type: 'number',   display: 'false'  },
            { displayName: 'Title', field: 'title', type: 'text', display: 'true' },
            { displayName: 'Start Date', field: 'startDate', type: 'date', display: 'true' },
            { displayName: 'End Date', field: 'endDate', type: 'date', display: 'true' },
            // { displayName: 'Amount',      field: 'amount',      type: 'number',   display: 'false'  },
            // { displayName: 'Type',        field: 'type',        type: 'text',     display: 'flase'  },
            // { displayName: 'Message',     field: 'message' ,    type: 'text',     display: 'flase'  },
            { displayName: 'Price', field: 'price', type: 'number', display: 'true' },
        ];
    };
    CustomerMainAreaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-customer-main-area',
            template: __webpack_require__(/*! ./customer-main-area.component.html */ "./src/app/components/customer-main-area/customer-main-area.component.html"),
            styles: [__webpack_require__(/*! ./customer-main-area.component.css */ "./src/app/components/customer-main-area/customer-main-area.component.css")]
        }),
        __metadata("design:paramtypes", [_services_web_api_customer_service__WEBPACK_IMPORTED_MODULE_1__["WebApiCustomerService"], primeng_api__WEBPACK_IMPORTED_MODULE_0__["MessageService"]])
    ], CustomerMainAreaComponent);
    return CustomerMainAreaComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-brand {\r\n  position: absolute;\r\n  width: 100%;\r\n  left: 0;\r\n  top: 0;\r\n  text-align: center;\r\n  margin: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n  <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n          <div class=\"navbar-brand\">CouponSystem</div>\n        </div>\n      <div id=\"navbar\" class=\"navbar-collapse collapse\">\n          <ul class=\"nav navbar-nav navbar-left\">\n              <li>\n                  <p-menu [showTransitionOptions]=\"'0ms'\" [hideTransitionOptions]=\"'0ms'\" #menu [popup]=\"true\" [model]=\"items\" [style]=\"{'width':'250px'}\"></p-menu>\n                  <a class=\"glyphicon glyphicon-list\"  label=\"Show\" (click)=\"menu.toggle($event)\"></a>\n              </li>\n          </ul>\n          <ul class=\"nav navbar-nav navbar-right\">\n              <li><a><span class=\"glyphicon glyphicon-user\"></span>Hello {{customer.custName}}</a></li>\n              <li><a (click)=\"logout()\"><span class=\"glyphicon glyphicon-off\"></span> Log Out</a></li>\n          </ul>\n      </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_Customer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../common/Customer */ "./src/app/components/common/Customer.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_web_api_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/web-api-customer.service */ "./src/app/services/web-api-customer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { MenuItem } from 'primeng/components/common/menuitem';



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(customerService, messageService) {
        this.customerService = customerService;
        this.messageService = messageService;
        this.customer = new _common_Customer__WEBPACK_IMPORTED_MODULE_1__["Customer"](null, '', '');
        this.getCustomerInfo();
        this.prefixLogOutUrl = customerService.prefixLogOutUrl;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.items = [
            {
                label: 'Coupon',
                items: [
                    { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/couponChart' },
                    { label: 'Purchase Coupon', icon: 'pi pi-fw pi-plus', routerLink: '/purchaseCoupon' },
                    { label: 'Purchased Coupons', icon: 'pi pi-fw pi-shopping-cart', routerLink: '/purchasedCoupons' }
                ]
            }
        ];
    };
    HeaderComponent.prototype.getCustomerInfo = function () {
        var _this = this;
        this.customerService.getCustomerInfo().subscribe(function (resp) {
            _this.customer = resp.json();
        });
    };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.customerService.logOutService(this.request, this.response).subscribe(function (resp) {
            _this.messageService.add({ severity: 'success', summary: 'LogOut', detail: 'You Were Logged Out Successfully' });
            window.location.href = _this.prefixLogOutUrl;
        }, function (error) {
            _this.messageService.add({ severity: 'success', summary: 'LogOut', detail: 'Logged Out Failed' });
        });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_web_api_customer_service__WEBPACK_IMPORTED_MODULE_3__["WebApiCustomerService"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/purchase-coupon/purchase-coupon.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/purchase-coupon/purchase-coupon.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".boldDiv {\r\n  font-weight: bold;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/purchase-coupon/purchase-coupon.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/purchase-coupon/purchase-coupon.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n    <p-dataView #dv [value]=\"availableCoupons\" [style]=\"{'text-align':'center'}\" layout=\"grid\" [paginator]=\"true\" [rows]=\"20\"\n      filterBy=\"type\"   [sortField]=\"sortField\" [sortOrder]=\"sortOrder\">\n        <p-header>\n            <h4><i>{{ headr }}</i></h4>\n            <div class=\"ui-helper-clearfix\">\n                <div class=\"ui-g\">\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <p-dropdown [options]=\"sortOptions\" [(ngModel)]=\"sortKey\" placeholder=\"Sort By\" (onChange)=\"onSortChange($event)\" [autoWidth]=\"false\" [style]=\"{'min-width':'15em'}\">\n                      </p-dropdown>\n                    </div>\n                    <div class=\"ui-g-6 ui-md-4\">\n                        <div style=\"position:relative\">\n                            <input type=\"search\" pInputText placeholder=\"Search By Type\" size=30% (keyup)=\"dv.filter($event.target.value)\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </p-header>\n        <ng-template let-coupon pTemplate=\"gridItem\" >\n            <div style=\"padding:.5em;\" class=\"ui-g-12 ui-md-3\">\n                <p-panel [header]=\"coupon.type\" [style]=\"{'text-align':'center'}\">\n                    <img src=\"{{ coupon.image }}\" width=\"120\" height=\"100\">\n                    <br><br>\n                    <div class=\"boldDiv\">{{coupon.title}}</div>\n                    <hr style=\"border-top-width: 3px\">\n                    <div *ngIf=\"coupon.purchased\">\n                      <button  pButton type=\"button\" label=\"Already Purchased\"  class=\"ui-button-rounded ui-button-info\" (click)=\"selectCoupon($event, coupon)\"></button>\n                    </div>\n                    <div *ngIf=\"!coupon.purchased\">\n                      <button  pButton type=\"button\" label=\"Details\" class=\"ui-button-rounded ui-button-success\" (click)=\"selectCoupon($event, coupon)\"></button>\n                    </div>\n                </p-panel>\n            </div>\n        </ng-template>\n    </p-dataView>\n  </div>\n\n\n<p-dialog header=\"Coupon Details\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" width=\"300\" (onAfterHide)=\"onDialogHide()\"\ncloseOnEscape=\"true\" dismissableMask=\"true\"\n>\n    <div class=\"ui-g\" *ngIf=\"selectedCoupon\">\n        <div class=\"ui-g-12\" style=\"text-align:center\">\n            <img src=\"{{ selectedCoupon.image }}\" width=\"90\" height=\"90\">\n            <hr style=\"border-top-width: 3px\">\n        </div>\n        <div class=\"ui-g-4 boldDiv\">Title:</div>\n        <div class=\"ui-g-8\">{{selectedCoupon.title}}</div>\n\n        <div class=\"ui-g-4 boldDiv\">Start Date: </div>\n        <div class=\"ui-g-8\">{{selectedCoupon.startDate}}</div>\n\n        <div class=\"ui-g-4 boldDiv\">End Date: </div>\n        <div class=\"ui-g-8\">{{selectedCoupon.endDate}}</div>\n\n        <div class=\"ui-g-4 boldDiv\">Amount: </div>\n        <div class=\"ui-g-8\">{{selectedCoupon.amount}}</div>\n\n        <div class=\"ui-g-4 boldDiv\">Type: </div>\n        <div class=\"ui-g-8 \">{{selectedCoupon.type}}</div>\n\n        <div class=\"ui-g-4 boldDiv\">Price: </div>\n        <div class=\"ui-g-8\">{{selectedCoupon.price}}</div>\n\n        <div class=\"ui-g-4 boldDiv\">Message: </div>\n        <div class=\"ui-g-8\">{{selectedCoupon.message}}</div>\n        <div class=\"ui-g-4\">\n            <!-- <button pButton type=\"button\" label=\"Purchase\" class=\"ui-button-rounded\" onclick=(purchase)></button> -->\n            <button disabled=\"{{selectedCoupon.purchased}}\" type=\"button\"  pButton label=\"Purchsae\" class=\"ui-button-rounded ui-button-success\" (click)=\"purchaseCoupon()\"></button>\n        </div>\n\n    </div>\n</p-dialog>\n"

/***/ }),

/***/ "./src/app/components/purchase-coupon/purchase-coupon.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/purchase-coupon/purchase-coupon.component.ts ***!
  \*************************************************************************/
/*! exports provided: PurchaseCouponComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseCouponComponent", function() { return PurchaseCouponComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_web_api_customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/web-api-customer.service */ "./src/app/services/web-api-customer.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PurchaseCouponComponent = /** @class */ (function () {
    /*
    At the constructor we inject
    1. WebApiAdminService for the favor of the services
    2. MessageService for the favor of the custom messages
    */
    function PurchaseCouponComponent(customerService, messageService) {
        this.customerService = customerService;
        this.messageService = messageService;
        this.headr = 'Available Coupons';
        // this method populate the alreadyPurchasedCoupons array with all the purchased coupons
        this.getPurchasedCoupons();
    }
    PurchaseCouponComponent.prototype.ngOnInit = function () {
        // this method populate the availableCoupons array with all the available coupons
        this.getAllCoupons();
        this.sortOptions = this.customerService.sortOptions;
        // this.sortOptions = [
        //   {label: 'Type', value: 'type'},
        //   {label: 'Price L2H', value: 'price'},
        //   {label: 'Price H2L', value: '!price'},
        //   {label: 'Start Date', value: 'startDate'},
        //   {label: 'End Date', value: 'endDate'},
        // ];
    };
    // This mwthod is activated (by event) and sort the view according to the selection of the user
    PurchaseCouponComponent.prototype.onSortChange = function (event) {
        this.value = event.value;
        if (this.value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = this.value.substring(1, this.value.length);
        }
        else {
            this.sortOrder = 1;
            this.sortField = this.value;
        }
    };
    // This methos is activated from the ngOnInit and it activates the getAllCouponsService service and populate the
    // availableCoupons array with all the available coupons
    PurchaseCouponComponent.prototype.getAllCoupons = function () {
        var _this = this;
        this.customerService.getAllCouponsService().subscribe(function (resp) {
            _this.availableCoupons = resp.json();
            _this.sortArry(_this.availableCoupons);
            if (_this.alreadyPurchasedCoupons != null && _this.alreadyPurchasedCoupons.length !== 0) {
                _this.markAllreadyPurchasedCoupons();
            }
        }, function (error) {
            _this.messageService.add({ severity: 'error', summary: 'Data Unavailable', detail: error._body });
        });
    };
    // This methos is activated from the constructor and it activates the getPurchasedCouponsService service and populate the
    // alreadyPurchasedCoupons array with all the purchased coupons
    PurchaseCouponComponent.prototype.getPurchasedCoupons = function () {
        var _this = this;
        this.customerService.getPurchasedCouponsService().subscribe(function (resp) {
            _this.alreadyPurchasedCoupons = resp.json();
        }, function (error) {
            // Do Nothing
        });
    };
    // This method mark in the main screen (where the user sees all the available coupons) all the coupons that he already purchased
    PurchaseCouponComponent.prototype.markAllreadyPurchasedCoupons = function () {
        var _this = this;
        this.availableCoupons.forEach(function (coupon) {
            if (_this.alreadyPurchasedCoupons.find(function (_a) {
                var id = _a.id;
                return coupon.id === id;
            })) {
                coupon.purchased = true;
            }
        });
    };
    // this method is activated once the user press the detailes button and it present the infromation of the coupon and the option
    // to purchase it in a popup window
    PurchaseCouponComponent.prototype.selectCoupon = function (event, coupon) {
        this.selectedCoupon = coupon;
        // console.log(this.selectCoupon);
        this.displayDialog = true;
        event.preventDefault();
    };
    PurchaseCouponComponent.prototype.onDialogHide = function () {
        this.selectedCoupon = null;
    };
    // This method is activated from the popup window - when the user want to purchase the coupon.
    // It activates the purchaseCouponService service and mark this coupon as a purchased coupon
    PurchaseCouponComponent.prototype.purchaseCoupon = function () {
        var _this = this;
        this.customerService.purchaseCouponService(this.selectedCoupon).subscribe(function (resp) {
            _this.messageService.add({ severity: 'success', summary: 'Coupon Was Purchased', detail: _this.selectedCoupon.title +
                    ' Was Purchased Successfully' });
            _this.selectedCoupon.amount = _this.selectedCoupon.amount - 1;
            _this.selectedCoupon.purchased = true;
        }, function (error) {
            _this.messageService.add({ severity: 'error', summary: 'Coupon Was\'t Purchased', detail: error._body });
        });
        this.displayDialog = false;
    };
    // This function responsible to sort the array accoring to the title of the coupon
    PurchaseCouponComponent.prototype.sortArry = function (arryToSort) {
        arryToSort.sort(function (a, b) {
            if (a.title < b.title) {
                return -1;
            }
            else if (a.title > b.title) {
                return 1;
            }
            else {
                return 0;
            }
        });
    };
    PurchaseCouponComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-purchase-coupon',
            template: __webpack_require__(/*! ./purchase-coupon.component.html */ "./src/app/components/purchase-coupon/purchase-coupon.component.html"),
            styles: [__webpack_require__(/*! ./purchase-coupon.component.css */ "./src/app/components/purchase-coupon/purchase-coupon.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [src_app_services_web_api_customer_service__WEBPACK_IMPORTED_MODULE_1__["WebApiCustomerService"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], PurchaseCouponComponent);
    return PurchaseCouponComponent;
}());



/***/ }),

/***/ "./src/app/components/purchased-coupons/purchased-coupons.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/purchased-coupons/purchased-coupons.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* .inlineElements {\r\n  display: inline-block;\r\n   justify-content: space-between;\r\n}\r\n\r\n .ui-slider  {\r\n  margin-bottom: 1000px;\r\n} */\r\n\r\n\r\n.boldDiv {\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n/*\r\nui-dataview {\r\n  color: red;\r\n}\r\n\r\nui-dataview-header {\r\n  color: red;\r\n}\r\n\r\n\r\nui-dataview-content {\r\n  height: 20px;\r\n}\r\n\r\noutput {\r\n  position: absolute;\r\n  background-image: linear-gradient(to bottom, #444444, #999999);\r\n  width: 40px;\r\n  height: 30px;\r\n  text-align: center;\r\n  color: white;\r\n  border-radius: 10px;\r\n  display: inline-block;\r\n  font: bold 15px/30px Georgia;\r\n  bottom: 175%;\r\n  left: 0;\r\n  margin-left: -1%;\r\n}\r\n\r\noutput:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 10px solid #999999;\r\n  border-left: 5px solid transparent;\r\n  border-right: 5px solid transparent;\r\n  top: 100%;\r\n  left: 50%;\r\n  margin-left: -5px;\r\n  margin-top: -1px;\r\n} */\r\n"

/***/ }),

/***/ "./src/app/components/purchased-coupons/purchased-coupons.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/purchased-coupons/purchased-coupons.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <br>\n    <div *ngIf=\"hasData!==true\">\n        <div class=\"alert alert-info\" style=\"text-align: center\">\n            <strong>You haven't purchased any coupons yet</strong>\n          </div>\n    </div>\n<div *ngIf=\"hasData===true\">\n    <p-dataView  #dv [value]=\"coupons\" [style]=\"{'text-align':'center'}\" layout=\"grid\" [paginator]=\"true\" [rows]=\"20\"\n      filterBy=\"title\"   [sortField]=\"sortField\" [sortOrder]=\"sortOrder\">\n        <p-header>\n            <h4><i>{{ headr }}</i></h4>\n            <div class=\"row\">\n                <div class=\"ui-g-12 ui-md-4\">\n                    <button type=\"button\" pButton label=\"Show All Purchased Coupons\" class=\"ui-button-rounded\" (click)=\"getPurchasedCoupons()\"></button>\n                </div>\n                    <!-- <div class=\"ui-g-12 ui-md-3\" >\n                        <input style=\"margin-left: 100px\" #search [(ngModel)]=\"searchInput\" type=\"search\" pInputText placeholder=\"Search By Title\"\n                        size=25% (keyup)=\"dv.filter($event.target.value)\">\n                    </div> -->\n                    <div class=\"ui-g-12 ui-md-4 pull-right\">\n                        <p-dropdown [options]=\"sortOptions\" [(ngModel)]=\"sortKey\" placeholder=\"Sort By\" (onChange)=\"onSortChange($event)\" [autoWidth]=\"false\" [style]=\"{'min-width':'15em'}\">\n                      </p-dropdown>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4 pull-right\">\n                        <p-dropdown id=\"type\"  [options]=\"types\" [(ngModel)]=\"selectKey\" name=\"type\" [autoDisplayFirst]=\"false\" [showClear]=\"true\" (onChange)=\"onTypeChange($event)\"\n                        placeholder=\"Select a Type\"></p-dropdown>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"ui-g-12 ui-md-2\">\n                          <b class=\"pull-right\"><i> Filter By Price: </i></b>\n                        </div>\n                      <div class=\"ui-g-12 ui-md-1\">\n                          <b class=\"pull-right\"><i> {{minPrice}} </i></b>\n                        </div>\n                       <div class=\"ui-g-12 ui-md-6\" style=\"margin-top:10px;\">\n                                <p-slider  type='range' id=\"rng\" name=\"rng\" [style]=\"{'width':'auto'}\"  (onSlideEnd)=\"onPriceChange($event)\"\n                                [(ngModel)]=\"price\" [step]=\"steps\" [min]=\"minPrice\" [max]=\"maxPrice\" [animate]=\"true\">\n                                </p-slider>\n                                <!-- <output for=\"rng\" onforminput=\"value=rng.price\"></output> -->\n                        </div>\n                        <div class=\"ui-g-12 ui-md-1\">\n                            <b class=\"pull-left\"><i>{{maxPrice}} </i></b>\n                          </div>\n                      <div class=\"ui-g-12 ui-md-2\">\n                          <b class=\"pull-left\"><i>Current Price: </i> <span style=\"color:navy\">{{price}} </span> </b>\n                      </div>\n                </div>\n        </p-header>\n        <ng-template let-coupon pTemplate=\"gridItem\" styleClass=\"ui-dataview-content\">\n            <div style=\"padding:.5em\" class=\"ui-g-12 ui-md-3\">\n                <p-panel  [header]=\"coupon.type\" [style]=\"{'text-align':'center'}\">\n                    <img src=\"{{ coupon.image }}\" width=\"90\" height=\"90\">\n                    <br><br>\n                    <div class=\"boldDiv\">{{coupon.title}}</div>\n                    <hr style=\"border-top-width: 3px\">\n                    <button pButton type=\"button\" label=\"Details\" class=\"ui-button-rounded ui-button-info\" (click)=\"selectCoupon($event, coupon);\"></button>\n                </p-panel>\n            </div>\n        </ng-template>\n\n    </p-dataView>\n</div>\n\n<p-dialog header=\"Coupon Details\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" width=\"300\" (onAfterHide)=\"onDialogHide()\"\ncloseOnEscape=\"true\" dismissableMask=\"true\"\n>\n    <div class=\"ui-g\" *ngIf=\"selectedCoupon\">\n        <div class=\"ui-g-12\" style=\"text-align:center\">\n            <img src=\"{{ selectedCoupon.image }}\" width=\"90\" height=\"90\">\n            <hr style=\"border-top-width: 3px\">\n        </div>\n        <div class=\"ui-g-4 boldDiv\">Title:</div>\n        <div class=\"ui-g-8\">{{selectedCoupon.title}}</div>\n\n        <div class=\"ui-g-4 boldDiv\">Start Date: </div>\n        <div class=\"ui-g-8\">{{selectedCoupon.startDate}}</div>\n\n        <div class=\"ui-g-4 boldDiv\">End Date: </div>\n        <div class=\"ui-g-8\">{{selectedCoupon.endDate}}</div>\n\n        <div class=\"ui-g-4 boldDiv\">Amount: </div>\n        <div class=\"ui-g-8\">{{selectedCoupon.amount}}</div>\n\n        <div class=\"ui-g-4 boldDiv\">Type: </div>\n        <div class=\"ui-g-8 \">{{selectedCoupon.type}}</div>\n\n        <div class=\"ui-g-4 boldDiv\">Price: </div>\n        <div class=\"ui-g-8\">{{selectedCoupon.price}}</div>\n\n        <div class=\"ui-g-4 boldDiv\">Message: </div>\n        <div class=\"ui-g-8\">{{selectedCoupon.message}}</div>\n        <div class=\"ui-g-4\">\n            <!-- <button pButton type=\"button\" label=\"Purchase\" class=\"ui-button-rounded\" onclick=(purchase)></button> -->\n            <!-- <button type=\"button\"  pButton label=\"Purchase\" class=\"ui-button-rounded ui-button-success\" (click)=\"purchaseCoupon()\"></button> -->\n        </div>\n\n    </div>\n</p-dialog>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/purchased-coupons/purchased-coupons.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/purchased-coupons/purchased-coupons.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PurchasedCouponsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasedCouponsComponent", function() { return PurchasedCouponsComponent; });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_web_api_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/web-api-customer.service */ "./src/app/services/web-api-customer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PurchasedCouponsComponent = /** @class */ (function () {
    // searchInput: string;
    /*
    At the constructor we inject
    1. WebApiAdminService for the favor of the services
    2. MessageService for the favor of the custom messages
    */
    function PurchasedCouponsComponent(customerService, messageService) {
        this.customerService = customerService;
        this.messageService = messageService;
        this.headr = 'Purchased Coupons';
        this.steps = 0.01;
        this.legend = 'Filters';
        this.hasData = false;
        this.types = customerService.couponTypes;
        // this.types = [
        //   {label: 'Resturant' , value: 'RESTURANT'},
        //   {label: 'Electricity', value: 'ELECTRICITY'},
        //   {label: 'Food', value: 'FOOD'},
        //   {label: 'Health', value: 'HEALTH'},
        //   {label: 'Sports', value: 'SPORTS'},
        //   {label: 'Camping', value: 'CAMPING'},
        //   {label: 'Travelling', value: 'TRAVELLING'},
        // ];
    }
    PurchasedCouponsComponent.prototype.ngOnInit = function () {
        // this method populate the alreadyPurchasedCoupons array with all the purchased coupons
        this.getPurchasedCoupons();
        this.sortOptions = this.customerService.sortOptions;
        // this.sortOptions = [
        //   {label: 'Type', value: 'type'},
        //   {label: 'Price L2H', value: 'price'},
        //   {label: 'Price H2L', value: '!price'},
        //   {label: 'Start Date', value: 'startDate'},
        //   {label: 'End Date', value: 'endDate'},
        // ];
    };
    // updatePrice() {
    //   let newPoint, newPlace, offset, width;
    //   const elemant = $('p-slider');
    //   console.log(elemant);
    //   width = elemant.width ();
    //   console.log(width);
    //   newPoint = (this.price - this.minPrice) / (this.maxPrice - this.minPrice);
    //   offset = -1.3;
    //   if (newPoint < 0 ) {
    //     newPlace = 0;
    //   } else if (newPoint > 1) {
    //     newPlace = width;
    //   } else {
    //     newPlace = width * newPoint + offset;
    //     offset -= newPoint;
    //   }
    //   elemant.next('output').css({
    //     left: newPlace,
    //     marginLeft: offset + '%'
    //   }).text(this.price);
    // }
    // This mwthod is activated (by event) and sort the view according to the selection of the user
    PurchasedCouponsComponent.prototype.onSortChange = function (event) {
        this.value = event.value;
        if (this.value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = this.value.substring(1, this.value.length);
        }
        else {
            this.sortOrder = 1;
            this.sortField = this.value;
        }
    };
    // this method is activated once the user press the detailes button and it present the infromation of the coupon and the option to
    // view its information
    PurchasedCouponsComponent.prototype.selectCoupon = function (event, coupon) {
        this.selectedCoupon = coupon;
        this.displayDialog = true;
        event.preventDefault();
    };
    PurchasedCouponsComponent.prototype.onDialogHide = function () {
        this.selectedCoupon = null;
    };
    // This method is activated and presnt all the purchased coupons.
    // it reset all the filters in the screen
    PurchasedCouponsComponent.prototype.getPurchasedCoupons = function () {
        var _this = this;
        this.sortKey = null;
        this.selectKey = null;
        // this.searchInput = null;
        this.customerService.getPurchasedCouponsService().subscribe(function (resp) {
            _this.hasData = true;
            _this.coupons = resp.json();
            _this.sortArry(_this.coupons);
            _this.getMinMaxPrices();
        }, function (error) {
            if (_this.hasData) {
                _this.messageService.add({ severity: 'error', summary: 'Data Unavailable', detail: error._body });
            }
        });
    };
    // This method is activated based on event and activte the getCouponByTypeService service and present the relevant data
    // every time the user changed his selection
    PurchasedCouponsComponent.prototype.onTypeChange = function (event) {
        var _this = this;
        if (event.value !== null) {
            this.customerService.getCouponByTypeService(event.value).subscribe(function (resp) {
                _this.coupons = resp.json();
                _this.sortArry(_this.coupons);
            }, function (error) {
                // this.getPurchasedCoupons();
                _this.messageService.add({ severity: 'error', summary: 'Data Unavailable', detail: error._body });
            });
        }
        else {
            this.getPurchasedCoupons();
        }
    };
    // This method is activated based on event and activte the getCouponByPriceService service and present the relevant data
    // every time the user changed the price
    PurchasedCouponsComponent.prototype.onPriceChange = function (event) {
        var _this = this;
        this.customerService.getCouponByPriceService(event.value).subscribe(function (resp) {
            _this.coupons = resp.json();
            _this.sortArry(_this.coupons);
            // this.maxPrice = this.price;
        }, function (error) {
            _this.messageService.add({ severity: 'error', summary: 'Data Unavailable', detail: error._body });
            _this.coupons = [];
        });
    };
    // This function responsible to sort the array accoring to the title of the coupon
    PurchasedCouponsComponent.prototype.sortArry = function (arryToSort) {
        arryToSort.sort(function (a, b) {
            if (a.title < b.title) {
                return -1;
            }
            else if (a.title > b.title) {
                return 1;
            }
            else {
                return 0;
            }
        });
    };
    PurchasedCouponsComponent.prototype.getMinMaxPrices = function () {
        this.coupons.sort(function (a, b) {
            if (a.price < b.price) {
                return -1;
            }
            else if (a.price > b.price) {
                return 1;
            }
            else {
                return 0;
            }
        });
        this.minPrice = this.coupons[0].price;
        this.maxPrice = this.coupons[this.coupons.length - 1].price;
        this.price = this.maxPrice;
    };
    PurchasedCouponsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-purchased-coupons',
            template: __webpack_require__(/*! ./purchased-coupons.component.html */ "./src/app/components/purchased-coupons/purchased-coupons.component.html"),
            styles: [__webpack_require__(/*! ./purchased-coupons.component.css */ "./src/app/components/purchased-coupons/purchased-coupons.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [src_app_services_web_api_customer_service__WEBPACK_IMPORTED_MODULE_2__["WebApiCustomerService"], primeng_api__WEBPACK_IMPORTED_MODULE_0__["MessageService"]])
    ], PurchasedCouponsComponent);
    return PurchasedCouponsComponent;
}());



/***/ }),

/***/ "./src/app/services/web-api-customer.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/web-api-customer.service.ts ***!
  \******************************************************/
/*! exports provided: WebApiCustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebApiCustomerService", function() { return WebApiCustomerService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WebApiCustomerService = /** @class */ (function () {
    function WebApiCustomerService(http) {
        this.http = http;
        this.prefixCustomerUrl = 'http://localhost:8080/customer/';
        this.prefixLogOutUrl = 'http://localhost:8080/';
        this.sortOptions = [
            { label: 'Type', value: 'type' },
            { label: 'Price L2H', value: 'price' },
            { label: 'Price H2L', value: '!price' },
            { label: 'Start Date', value: 'startDate' },
            { label: 'End Date', value: 'endDate' },
        ];
        this.couponTypes = [
            { label: 'Resturant', value: 'RESTURANT' },
            { label: 'Electricity', value: 'ELECTRICITY' },
            { label: 'Food', value: 'FOOD' },
            { label: 'Health', value: 'HEALTH' },
            { label: 'Sports', value: 'SPORTS' },
            { label: 'Camping', value: 'CAMPING' },
            { label: 'Travelling', value: 'TRAVELLING' },
        ];
    }
    WebApiCustomerService.prototype.getAllCouponsService = function () {
        // return this.http.get('http://localhost:8080/customer/get-all-coupons');
        return this.http.get(this.prefixCustomerUrl + 'get-all-coupons');
    };
    WebApiCustomerService.prototype.getPurchasedCouponsService = function () {
        // return this.http.get('http://localhost:8080/customer/get-purchased-coupons');
        return this.http.get(this.prefixCustomerUrl + 'get-purchased-coupons');
    };
    WebApiCustomerService.prototype.purchaseCouponService = function (coupon) {
        // return this.http.post('http://localhost:8080/customer/purchase-coupon', coupon);
        return this.http.post(this.prefixCustomerUrl + 'purchase-coupon', coupon);
    };
    WebApiCustomerService.prototype.getCouponByTypeService = function (type) {
        // return this.http.get('http://localhost:8080/customer/coupon-by-type?type=' + type);
        return this.http.get(this.prefixCustomerUrl + 'coupon-by-type?type=' + type);
    };
    WebApiCustomerService.prototype.getCouponByPriceService = function (price) {
        // return this.http.get('http://localhost:8080/customer/coupon-by-price?price=' + price);
        return this.http.get(this.prefixCustomerUrl + 'coupon-by-price?price=' + price);
    };
    WebApiCustomerService.prototype.getCustomerInfo = function () {
        // return this.http.get('http://localhost:8080/customer/customer-info');
        return this.http.get(this.prefixCustomerUrl + 'customer-info');
    };
    /**********************************************************************************/
    /*********************Services for the logout method*******************************/
    /**********************************************************************************/
    WebApiCustomerService.prototype.logOutService = function (request, response) {
        return this.http.post(this.prefixLogOutUrl + 'logout', request, response);
    };
    WebApiCustomerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"]])
    ], WebApiCustomerService);
    return WebApiCustomerService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Yehuda.Hizmi\JAVA COURSE\Angular 5\CouponSystemCustomer\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map