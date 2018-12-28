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

module.exports = "outer-outlet {\r\n  margin-top: 1000px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast position=\"top-right\" [style]=\"{marginTop: '80px'}\"></p-toast>\n<app-header></app-header>\n<br>\n<br>\n<br>\n<br>\n<br>\n <router-outlet></router-outlet>\n\n"

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
        this.title = 'CouponSystemCompany';
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
/* harmony import */ var _services_web_api_company_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/web-api-company.service */ "./src/app/services/web-api-company.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_company_main_area_company_main_area_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/company-main-area/company-main-area.component */ "./src/app/components/company-main-area/company-main-area.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/menu */ "./node_modules/primeng/menu.js");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_menu__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_create_coupon_create_coupon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/create-coupon/create-coupon.component */ "./src/app/components/create-coupon/create-coupon.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/fieldset */ "./node_modules/primeng/fieldset.js");
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_fieldset__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _components_common_dialog_container_dialog_container_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/common/dialog-container/dialog-container.component */ "./src/app/components/common/dialog-container/dialog-container.component.ts");
/* harmony import */ var _components_get_coupon_by_id_get_coupon_by_id_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/get-coupon-by-id/get-coupon-by-id.component */ "./src/app/components/get-coupon-by-id/get-coupon-by-id.component.ts");
/* harmony import */ var _components_get_company_info_get_company_info_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/get-company-info/get-company-info.component */ "./src/app/components/get-company-info/get-company-info.component.ts");
/* harmony import */ var _components_get_coupons_by_price_get_coupons_by_price_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/get-coupons-by-price/get-coupons-by-price.component */ "./src/app/components/get-coupons-by-price/get-coupons-by-price.component.ts");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/slider */ "./node_modules/primeng/slider.js");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(primeng_slider__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _components_get_coupons_by_date_get_coupons_by_date_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/get-coupons-by-date/get-coupons-by-date.component */ "./src/app/components/get-coupons-by-date/get-coupons-by-date.component.ts");
/* harmony import */ var _components_get_coupons_by_type_get_coupons_by_type_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/get-coupons-by-type/get-coupons-by-type.component */ "./src/app/components/get-coupons-by-type/get-coupons-by-type.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_company_main_area_company_main_area_component__WEBPACK_IMPORTED_MODULE_5__["CompanyMainAreaComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _components_create_coupon_create_coupon_component__WEBPACK_IMPORTED_MODULE_9__["CreateCouponComponent"],
                _components_common_dialog_container_dialog_container_component__WEBPACK_IMPORTED_MODULE_20__["DialogContainerComponent"],
                _components_get_coupon_by_id_get_coupon_by_id_component__WEBPACK_IMPORTED_MODULE_21__["GetCouponByIdComponent"],
                _components_get_company_info_get_company_info_component__WEBPACK_IMPORTED_MODULE_22__["GetCompanyInfoComponent"],
                _components_get_coupons_by_price_get_coupons_by_price_component__WEBPACK_IMPORTED_MODULE_23__["GetCouponsByPriceComponent"],
                _components_get_coupons_by_date_get_coupons_by_date_component__WEBPACK_IMPORTED_MODULE_25__["GetCouponsByDateComponent"],
                _components_get_coupons_by_type_get_coupons_by_type_component__WEBPACK_IMPORTED_MODULE_26__["GetCouponsByTypeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                primeng_menu__WEBPACK_IMPORTED_MODULE_7__["MenuModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                primeng_fieldset__WEBPACK_IMPORTED_MODULE_11__["FieldsetModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__["InputTextModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_13__["CalendarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_14__["HttpModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__["DropdownModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_16__["TableModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_17__["DialogModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_19__["ToastModule"],
                primeng_slider__WEBPACK_IMPORTED_MODULE_24__["SliderModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot([
                    {
                        path: 'allCoupons',
                        component: _components_company_main_area_company_main_area_component__WEBPACK_IMPORTED_MODULE_5__["CompanyMainAreaComponent"]
                    },
                    {
                        path: 'addCoupon',
                        component: _components_create_coupon_create_coupon_component__WEBPACK_IMPORTED_MODULE_9__["CreateCouponComponent"]
                    },
                    {
                        path: 'getCoupon',
                        component: _components_get_coupon_by_id_get_coupon_by_id_component__WEBPACK_IMPORTED_MODULE_21__["GetCouponByIdComponent"]
                    },
                    {
                        path: 'companyInfo',
                        component: _components_get_company_info_get_company_info_component__WEBPACK_IMPORTED_MODULE_22__["GetCompanyInfoComponent"]
                    },
                    {
                        path: 'getCouponsByPrice',
                        component: _components_get_coupons_by_price_get_coupons_by_price_component__WEBPACK_IMPORTED_MODULE_23__["GetCouponsByPriceComponent"]
                    },
                    {
                        path: 'getCouponsByDate',
                        component: _components_get_coupons_by_date_get_coupons_by_date_component__WEBPACK_IMPORTED_MODULE_25__["GetCouponsByDateComponent"]
                    },
                    {
                        path: 'getCouponsByType',
                        component: _components_get_coupons_by_type_get_coupons_by_type_component__WEBPACK_IMPORTED_MODULE_26__["GetCouponsByTypeComponent"]
                    },
                    {
                        path: '',
                        redirectTo: '/allCoupons',
                        pathMatch: 'full'
                    },
                ])
            ],
            providers: [_services_web_api_company_service__WEBPACK_IMPORTED_MODULE_0__["WebApiCompanyService"], primeng_api__WEBPACK_IMPORTED_MODULE_18__["MessageService"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_27__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_27__["HashLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/common/Company.ts":
/*!**********************************************!*\
  !*** ./src/app/components/common/Company.ts ***!
  \**********************************************/
/*! exports provided: Company */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Company", function() { return Company; });
var Company = /** @class */ (function () {
    function Company(id, compName, email, password, coupons) {
        this.id = id;
        this.compName = compName;
        this.email = email;
        this.password = password;
        this.coupons = coupons;
    }
    return Company;
}());



/***/ }),

/***/ "./src/app/components/common/Coupon.ts":
/*!*********************************************!*\
  !*** ./src/app/components/common/Coupon.ts ***!
  \*********************************************/
/*! exports provided: Coupon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coupon", function() { return Coupon; });
var Coupon = /** @class */ (function () {
    function Coupon(id, title, startDate, endDate, amount, type, message, price, image) {
        this.id = id;
        this.title = title;
        this.startDate = startDate;
        this.endDate = endDate;
        this.amount = amount;
        this.type = type;
        this.message = message;
        this.price = price;
        this.image = image;
    }
    return Coupon;
}());



/***/ }),

/***/ "./src/app/components/common/dialog-container/dialog-container.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/common/dialog-container/dialog-container.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/common/dialog-container/dialog-container.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/common/dialog-container/dialog-container.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dialog-container works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/common/dialog-container/dialog-container.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/common/dialog-container/dialog-container.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DialogContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogContainerComponent", function() { return DialogContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DialogContainerComponent = /** @class */ (function () {
    function DialogContainerComponent() {
    }
    DialogContainerComponent.prototype.ngOnInit = function () {
    };
    DialogContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog-container',
            template: __webpack_require__(/*! ./dialog-container.component.html */ "./src/app/components/common/dialog-container/dialog-container.component.html"),
            styles: [__webpack_require__(/*! ./dialog-container.component.css */ "./src/app/components/common/dialog-container/dialog-container.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DialogContainerComponent);
    return DialogContainerComponent;
}());



/***/ }),

/***/ "./src/app/components/company-main-area/company-main-area.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/company-main-area/company-main-area.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".componentsInputs {\r\n  width: 470px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/company-main-area/company-main-area.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/company-main-area/company-main-area.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div *ngIf=\"hasData!==true\">\n        <div class=\"alert alert-info\" style=\"text-align: center\">\n            <strong>There aren't any coupons in the system</strong>\n          </div>\n    </div>\n  <p-fieldset [legend]=\"caption\">\n   <p-table  [columns]=\"cols\" [value]=\"coupons\" selectionMode=\"single\" [paginator]=\"true\" [(selection)]=\"selectedCoupon\" (onRowSelect)=\"onRowSelect($event)\"\n   [rows]=\"10\" [resizableColumns]=\"true\">\n    <ng-template pTemplate=\"caption\">\n        {{ numOfCoupons }} Listed Coupons\n      </ng-template>\n    <ng-template pTemplate=\"header\">\n        <tr>\n            <th *ngFor=\"let col of cols\" [pSortableColumn]=\"col.field\" pResizableColumn>\n            {{ col.displayName }}\n            <p-sortIcon [field]=\"col.field\"></p-sortIcon>\n            </th>\n        </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n        <tr [pSelectableRow]=\"rowData\">\n            <td *ngFor=\"let col of columns\">\n                <span *ngIf=\"col.field!=='startDate' && col.field!=='endDate'\" >{{rowData[col.field]}}</span>\n                <span *ngIf=\"col.field==='startDate' || col.field==='endDate'\" >{{rowData[col.field]|date:'dd/MM/yyyy'}}</span>\n            </td>\n        </tr>\n    </ng-template>\n    <ng-template pTemplate=\"summary\" let-rowData>\n        <div style=\"text-align:left\">\n            <button pButton class=\"ui-button-rounded\" type=\"button\"  icon=\"pi pi-plus\" (click)=\"showDialogToAdd()\" label=\"Add\"></button>\n        </div>\n    </ng-template>\n  </p-table>\n  <span>*For update/delete a record please select a row</span>\n  </p-fieldset>\n  </div>\n\n <p-dialog header=\"Coupon Details\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [width]=\"500\"\n  [dismissableMask]=\"true\">\n   <br>\n   <form [formGroup]=\"createCouponDialogForm\">\n      <div class=\"form-group\" style=\"text-align:center\" *ngIf=\"!newCoupon\">\n          <img id=\"img\" [src]=\"coupon.image\" width=\"90\" height=\"90\">\n          <hr style=\"border-top-width: 3px\">\n    </div>\n    <div class=\"form-group\" [class.has-error]=\"createCouponDialogForm.controls['title'].invalid && createCouponDialogForm.controls['title'].touched\"\n    [class.has-success]=\"createCouponDialogForm.controls[cols[1].field].valid && createCouponDialogForm.controls['title'].touched\">\n    <span class=\"ui-float-label\">\n      <input id=\"title\" type=\"text\" formControlName=\"title\" class=\"form-control\" name=\"title\" [(ngModel)]=\"coupon.title\"\n       pInputText>\n      <label for=\"title\" class=\"control-label\">Title</label>\n    </span>\n    <span class=\"help-block\" *ngIf=\"createCouponDialogForm.controls['title'].invalid && createCouponDialogForm.controls['title'].touched\">\n      Title Is Required</span>\n  </div><br>\n\n  <div class=\"form-group\" [class.has-error]=\"createCouponDialogForm.controls['startDate'].invalid && createCouponDialogForm.controls['startDate'].touched\"\n    [class.has-success]=\"createCouponDialogForm.controls['startDate'].valid && createCouponDialogForm.controls['startDate'].touched\">\n    <span class=\"ui-float-label\">\n      <p-calendar id=\"startDate\" formControlName=\"startDate\" inputStyleClass=\"form-control\" name=\"startDate\"  [(ngModel)]=\"coupon.startDate\"\n      [style]=\"{'width':'470px'}\"\n      ></p-calendar>\n      <label for=\"startDate\">Start Date</label>\n    </span>\n    <span class=\"help-block\" *ngIf=\"createCouponDialogForm.controls['startDate'].invalid && createCouponDialogForm.controls['startDate'].touched\">\n      <span class=\"help-block\" *ngIf=\"createCouponDialogForm.get('startDate').errors['DateMustBeGreaterThanSysdate']\">\n          Satrt Date Must Be Equal/Greater than Today\n      </span>\n      <span class=\"help-block\" *ngIf=\"createCouponDialogForm.get('startDate').errors['StartDateMustBeLessThanEndDate']\">\n          Satrt Date Must Be Equal/Less than End Date\n      </span>\n      <span class=\"help-block\" *ngIf=\"createCouponDialogForm.get('startDate').errors['required']\">\n          Start Date Is Required\n      </span>\n  </span>\n    <!-- <span class=\"help-block\" *ngIf=\"createCouponDialogForm.controls['startDate'].invalid && createCouponDialogForm.controls['startDate'].touched\">\n      Start Date Is Required</span> -->\n  </div><br>\n\n  <div class=\"form-group\" [class.has-error]=\"createCouponDialogForm.controls['endDate'].invalid && createCouponDialogForm.controls['endDate'].touched\"\n    [class.has-success]=\"createCouponDialogForm.controls['endDate'].valid && createCouponDialogForm.controls['endDate'].touched\">\n    <span class=\"ui-float-label\">\n      <p-calendar  id=\"endDate\" formControlName=\"endDate\" inputStyleClass=\"form-control\" name=\"endDate\" [(ngModel)]=\"coupon.endDate\"\n      [style]=\"{'width':'470px'}\"\n      ></p-calendar>\n      <label for=\"endDate\">End Date</label>\n    </span>\n    <span class=\"help-block\" *ngIf=\"createCouponDialogForm.controls['endDate'].invalid && createCouponDialogForm.controls['endDate'].touched\">\n      <span class=\"help-block\" *ngIf=\"createCouponDialogForm.get('endDate').errors['DateMustBeGreaterThanSysdate']\">\n          End Date Must Be Equal/Greater than Today\n      </span>\n      <span class=\"help-block\" *ngIf=\"createCouponDialogForm.get('endDate').errors['EndDateMustBeGreaterThanStartDate']\">\n          End Date Must Be Equal/Greater than Start Date\n      </span>\n      <span class=\"help-block\" *ngIf=\"createCouponDialogForm.get('endDate').errors['required']\">\n              End Date Is Required\n      </span>\n  </span>\n    <!-- <span class=\"help-block\" *ngIf=\"createCouponDialogForm.controls['endDate'].invalid && createCouponDialogForm.controls['endDate'].touched\">\n      End Date Is Required</span> -->\n  </div><br>\n\n  <div class=\"form-group\" [class.has-error]=\"createCouponDialogForm.controls['amount'].invalid && createCouponDialogForm.controls['amount'].touched\"\n    [class.has-success]=\"createCouponDialogForm.controls['amount'].valid && createCouponDialogForm.controls['amount'].touched\">\n    <span class=\"ui-float-label\">\n      <input  id=\"amount\" type=\"number\" formControlName=\"amount\" class=\"form-control\" name=\"amount\" [(ngModel)]=\"coupon.amount\"\n       pInputText>\n      <label for=\"amount\" class=\"control-label\" >Amount</label>\n    </span>\n    <span class=\"help-block\" *ngIf=\"createCouponDialogForm.controls['amount'].invalid && createCouponDialogForm.controls['amount'].touched\">\n      Amount Is Required</span>\n  </div><br>\n\n  <div class=\"form-group\" [class.has-error]=\"createCouponDialogForm.controls['type'].invalid && createCouponDialogForm.controls['type'].touched\"\n    [class.has-success]=\"createCouponDialogForm.controls['type'].valid && createCouponDialogForm.controls['type'].touched\">\n    <span class=\"ui-float-label\">\n      <p-dropdown id=\"type\" [options]=\"types\" name=\"type\" inputStyleClass=\"form-control\" [autoDisplayFirst]=\"false\"\n        [showClear]=\"true\" formControlName=\"type\" [(ngModel)]=\"coupon.type\" [style]=\"{'width':'470px'}\">\n      </p-dropdown>\n      <label for=\"type\" class=\"control-label\">Type</label>\n    </span>\n    <span class=\"help-block\" *ngIf=\"createCouponDialogForm.controls['type'].invalid && createCouponDialogForm.controls['type'].touched\">\n      Type Is Required</span>\n  </div><br>\n\n  <div class=\"form-group\" [class.has-error]=\"createCouponDialogForm.controls['message'].invalid && createCouponDialogForm.controls['message'].touched\"\n    [class.has-success]=\"createCouponDialogForm.controls['message'].valid && createCouponDialogForm.controls['message'].touched\">\n    <span class=\"ui-float-label\">\n      <input id=\"message\" type=\"text\" formControlName=\"message\" class=\"form-control\" name=\"message\" [(ngModel)]=\"coupon.message\"\n       pInputText>\n      <label for=\"message\" class=\"control-label\">Message</label>\n    </span>\n    <span class=\"help-block\" *ngIf=\"createCouponDialogForm.controls['message'].invalid && createCouponDialogForm.controls['message'].touched\">\n      Message Is Required</span>\n  </div><br>\n\n  <div class=\"form-group\" [class.has-error]=\"createCouponDialogForm.controls['price'].invalid && createCouponDialogForm.controls['price'].touched\"\n    [class.has-success]=\"createCouponDialogForm.controls['price'].valid && createCouponDialogForm.controls['price'].touched\">\n    <span class=\"ui-float-label\">\n      <input id=\"price\" type=\"price\" formControlName=\"price\" class=\"form-control\" name=\"price\" [(ngModel)]=\"coupon.price\"\n       pInputText>\n      <label for=\"price\" class=\"control-label\">Price</label>\n    </span>\n    <span class=\"help-block\" *ngIf=\"createCouponDialogForm.controls['price'].invalid && createCouponDialogForm.controls['price'].touched\">Price\n      Is Required</span>\n  </div><br>\n\n  <div class=\"form-group\" [class.has-error]=\"createCouponDialogForm.controls['image'].invalid && createCouponDialogForm.controls['image'].touched\"\n    [class.has-success]=\"createCouponDialogForm.controls['image'].valid && createCouponDialogForm.controls['image'].touched\">\n    <span class=\"ui-float-label\">\n      <input id=\"image\" type=\"text\" formControlName=\"image\" class=\"form-control\" name=\"image\" [(ngModel)]=\"coupon.image\"\n       pInputText>\n      <label for=\"image\" class=\"control-label\">Image</label>\n    </span>\n    <span class=\"help-block\" *ngIf=\"createCouponDialogForm.controls['image'].invalid && createCouponDialogForm.controls['image'].touched\">\n      Image Is Required</span>\n  </div><br>\n  <p-footer>\n      <div class=\"ui-dialog-buttonpane ui-helper-clearfix ui-button-icon-left\">\n          <button  type=\"button\" pButton class=\"ui-button-rounded ui-button-danger\" icon=\"pi pi-times\" (click)=\"delete()\" [label]=\"DialogLeftButton\"></button>\n          &nbsp;\n          <button type=\"button\" [disabled]=\"!createCouponDialogForm.valid\" pButton  class=\"ui-button-rounded ui-button-success\" icon=\"pi pi-save\" (click)=\"save()\" [label]=\"DialogRightButton\"></button>\n      </div>\n  </p-footer>\n</form>\n\n  </p-dialog>\n\n"

/***/ }),

/***/ "./src/app/components/company-main-area/company-main-area.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/company-main-area/company-main-area.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CompanyMainAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyMainAreaComponent", function() { return CompanyMainAreaComponent; });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_web_api_company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/web-api-company.service */ "./src/app/services/web-api-company.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_Coupon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Coupon */ "./src/app/components/common/Coupon.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CompanyMainAreaComponent = /** @class */ (function () {
    /*
    At the constructor we inject
    1. FormBuilder for the favor validation of the forms
    2. WebApiAdminService for the favor of the services
    3. MessageService for the favor of the custom messages
    */
    function CompanyMainAreaComponent(formBuilder, companyService, messageService) {
        this.formBuilder = formBuilder;
        this.companyService = companyService;
        this.messageService = messageService;
        this.coupons = [];
        this.caption = 'Company Main Management Area';
        this.coupon = new _common_Coupon__WEBPACK_IMPORTED_MODULE_3__["Coupon"](null, '', null, null, null, '', '', null, '');
        this.DialogLeftButton = 'Delete';
        this.DialogRightButton = 'Update';
        this.date = new Date();
        this.hasData = false;
        // this.hasData = companyService.hasData;
        this.cols = companyService.couponCols;
        this.types = companyService.couponTypes;
        // This date is reset to contains only date without time in order to compare dates based on day and not day and time
        this.date.setSeconds(0);
        this.date.setHours(0);
        this.date.setMinutes(0);
        this.date.setMilliseconds(0);
        // In the code we define the validation for each input.
        // For the dates there are three addtioanl validations (the methods are defined at the end of this file)
        this.createCouponDialogForm = formBuilder.group({
            'title': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            'startDate': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.checkDate.bind(this), this.checkStartDate.bind(this)])],
            'endDate': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.checkDate.bind(this), this.checkEndDate.bind(this)])],
            'amount': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            'type': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            'message': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            'price': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            'image': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])]
        });
        this.getAllCoupons();
    }
    CompanyMainAreaComponent.prototype.ngOnInit = function () {
    };
    // When this method is activated a pop up window is opening and a new coupon can be added
    CompanyMainAreaComponent.prototype.showDialogToAdd = function () {
        this.newCoupon = true;
        this.coupon = new _common_Coupon__WEBPACK_IMPORTED_MODULE_3__["Coupon"](null, '', null, null, null, '', '', null, '');
        this.displayDialog = true;
        this.createCouponDialogForm.reset();
        this.disabledInputs('Add');
        this.DialogLeftButton = 'Cancel';
        this.DialogRightButton = 'Save';
    };
    // When this method is activated a pop up window is opening and a new coupon can be edited
    CompanyMainAreaComponent.prototype.onRowSelect = function (event) {
        this.newCoupon = false;
        // this.createCouponDialogForm.reset();
        this.coupon = this.cloneCoupon(event.data);
        this.displayDialog = true;
        this.disabledInputs('Update');
        this.DialogLeftButton = 'Delete';
        this.DialogRightButton = 'Update';
    };
    // This method is activated from onRowSelect in order to present the edited coupon
    CompanyMainAreaComponent.prototype.cloneCoupon = function (coupon) {
        var tempCoupon = new _common_Coupon__WEBPACK_IMPORTED_MODULE_3__["Coupon"](null, '', null, null, null, '', '', null, '');
        // tslint:disable-next-line:forin
        for (var prop in coupon) {
            if (prop === 'startDate' || prop === 'endDate') {
                tempCoupon[prop] = new Date(coupon[prop]);
            }
            else {
                tempCoupon[prop] = coupon[prop];
            }
        }
        // console.log(tempCoupon);
        return tempCoupon;
    };
    // This method responsible for enabling and disabling editable inputs
    CompanyMainAreaComponent.prototype.disabledInputs = function (source) {
        this.createCouponDialogForm.disable();
        this.createCouponDialogForm.get('endDate').enable();
        this.createCouponDialogForm.get('price').enable();
        // this.createCouponDialogForm.get('title').disable();
        // this.createCouponDialogForm.get('startDate').disable();
        // this.createCouponDialogForm.get('endDate').enable();
        // this.createCouponDialogForm.get('amount').disable();
        // this.createCouponDialogForm.get('type').disable();
        // this.createCouponDialogForm.get('message').disable();
        // this.createCouponDialogForm.get('price').enable();
        // this.createCouponDialogForm.get('image').disable();
        if (source === 'Add') {
            this.createCouponDialogForm.enable();
            // this.createCouponDialogForm.get('title').disable();
            // this.createCouponDialogForm.get('startDate').disable();
            // this.createCouponDialogForm.get('amount').disable();
            // this.createCouponDialogForm.get('type').disable();
            // this.createCouponDialogForm.get('message').disable();
            // this.createCouponDialogForm.get('image').disable();
        }
    };
    /* This method responsible to save the data in two cases:
       1. When a new coupon being added the addNewCouponService service is activated
       2. When an existing coupon being edited than the updateCouponService service is activated
    */
    CompanyMainAreaComponent.prototype.save = function () {
        var _this = this;
        this.couponTitle = this.coupon.title;
        if (this.newCoupon) {
            this.companyService.addNewCouponService(this.coupon).subscribe(function (resp) {
                _this.getAllCoupons();
                _this.messageService.add({ severity: 'success', summary: 'Coupon Was Added', detail: _this.couponTitle +
                        ' Was Added Successfully' });
            }, function (error) {
                _this.messageService.add({ severity: 'error', summary: 'Coupon Was\'t Added', detail: error._body });
            });
        }
        else {
            this.companyService.updateCouponService(this.coupon).subscribe(function () {
                _this.getAllCoupons();
                _this.messageService.add({ severity: 'success', summary: 'Coupon Was Updated', detail: _this.couponTitle +
                        ' Was Updated Successfully' });
            }, function (error) {
                _this.messageService.add({ severity: 'error', summary: 'Coupon Was\'t Updated', detail: error._body });
            });
        }
        // this.coupon = null;
        this.displayDialog = false;
    };
    // When a coupon is deleted than this method is activated and it activate the deleteCouponService service
    CompanyMainAreaComponent.prototype.delete = function () {
        var _this = this;
        this.couponTitle = this.coupon.title;
        if (!this.newCoupon) {
            this.companyService.deleteCouponService(this.selectedCoupon).subscribe(function () {
                _this.getAllCoupons();
                _this.messageService.add({ severity: 'success', summary: 'Coupon Was Deleted', detail: _this.couponTitle +
                        ' Was Deleted Successfully' });
            }, function (error) {
                _this.messageService.add({ severity: 'error', summary: 'Customer Was\'t Deleted', detail: error._body });
            });
        }
        // this.coupon = null;
        // this.createCouponDialogForm.reset();
        this.displayDialog = false;
    };
    // This method is activated from the constructor - in order to intialize the data for the first time
    CompanyMainAreaComponent.prototype.getAllCoupons = function () {
        var _this = this;
        this.companyService.getAllCouponsService().subscribe(function (resp) {
            _this.hasData = true;
            _this.coupons = resp.json();
            _this.numOfCoupons = _this.coupons.length;
            // Make default sort of companies array
            _this.sortArry(_this.coupons);
        }, function (error) {
            if (_this.hasData) {
                _this.messageService.add({ severity: 'error', summary: 'Data Unavailable', detail: error._body });
            }
        });
    };
    // This function responsible to sort the array accoring to the title of the coupon
    CompanyMainAreaComponent.prototype.sortArry = function (arryToSort) {
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
    /* The following 3 methods responsible for the dates validations
      1. checkDate - checks if the date selected is greated than today
      2. checkStartDate - checks if the start date is less than the end date
      3. checkEndDate - checks if the end date is greater than start date
    */
    CompanyMainAreaComponent.prototype.checkDate = function (control) {
        if (control.value !== null && control.value < this.date) {
            return { 'DateMustBeGreaterThanSysdate': true };
        }
        return null;
    };
    CompanyMainAreaComponent.prototype.checkStartDate = function (control) {
        if (this.coupon.endDate !== null && control.value > this.coupon.endDate) {
            return { 'StartDateMustBeLessThanEndDate': true };
        }
        // this.newCoupon.startDate = this.newCoupon.startDate;
        return null;
    };
    CompanyMainAreaComponent.prototype.checkEndDate = function (control) {
        if (this.coupon.startDate !== null && control.value < this.coupon.startDate) {
            return { 'EndDateMustBeGreaterThanStartDate': true };
        }
        // this.newCoupon.endDate = this.newCoupon.endDate;
        return null;
    };
    CompanyMainAreaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-company-main-area',
            template: __webpack_require__(/*! ./company-main-area.component.html */ "./src/app/components/company-main-area/company-main-area.component.html"),
            styles: [__webpack_require__(/*! ./company-main-area.component.css */ "./src/app/components/company-main-area/company-main-area.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _services_web_api_company_service__WEBPACK_IMPORTED_MODULE_1__["WebApiCompanyService"], primeng_api__WEBPACK_IMPORTED_MODULE_0__["MessageService"]])
    ], CompanyMainAreaComponent);
    return CompanyMainAreaComponent;
}());



/***/ }),

/***/ "./src/app/components/create-coupon/create-coupon.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/create-coupon/create-coupon.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/components/create-coupon/create-coupon.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/create-coupon/create-coupon.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <p-fieldset [legend]=\"caption\">\n    <form [formGroup]=\"createCouponForm\">\n      <div class=\"form-group\" [class.has-error]=\"createCouponForm.controls['title'].invalid && createCouponForm.controls['title'].touched\"\n        [class.has-success]=\"createCouponForm.controls['title'].valid && createCouponForm.controls['title'].touched\">\n        <span class=\"ui-float-label\">\n          <input required id=\"title\" type=\"text\" formControlName=\"title\" class=\"form-control\" name=\"title\" [(ngModel)]=\"newCoupon.title\" pInputText>\n          <label for=\"title\" class=\"control-label\">Title</label>\n        </span>\n        <span class=\"help-block\" *ngIf=\"createCouponForm.controls['title'].invalid && createCouponForm.controls['title'].touched\">\n          Title Is Required</span>\n      </div><br>\n\n      <div class=\"form-group\" [class.has-error]=\"createCouponForm.controls['startDate'].invalid && createCouponForm.controls['startDate'].touched\"\n        [class.has-success]=\"createCouponForm.controls['startDate'].valid && createCouponForm.controls['startDate'].touched\">\n        <span class=\"ui-float-label\">\n          <p-calendar [required]=\"true\" id=\"startDate\" formControlName=\"startDate\" inputStyleClass=\"form-control\" name=\"startDate\"  [(ngModel)]=\"newCoupon.startDate\"\n          [style]=\"{'width':'100%'}\"></p-calendar>\n          <label for=\"startDate\">Start Date</label>\n        </span>\n        <span class=\"help-block\" *ngIf=\"createCouponForm.controls['startDate'].invalid && createCouponForm.controls['startDate'].touched\">\n            <span class=\"help-block\" *ngIf=\"createCouponForm.get('startDate').errors['DateMustBeGreaterThanSysdate']\">\n                Satrt Date Must Be Equal/Greater than Today\n            </span>\n            <span class=\"help-block\" *ngIf=\"createCouponForm.get('startDate').errors['StartDateMustBeLessThanEndDate']\">\n                Satrt Date Must Be Equal/Less than End Date\n            </span>\n            <span class=\"help-block\" *ngIf=\"createCouponForm.get('startDate').errors['required']\">\n                Start Date Is Required\n            </span>\n        </span>\n      </div><br>\n\n      <div class=\"form-group\" [class.has-error]=\"createCouponForm.controls['endDate'].invalid && createCouponForm.controls['endDate'].touched\"\n        [class.has-success]=\"createCouponForm.controls['endDate'].valid && createCouponForm.controls['endDate'].touched\">\n        <span class=\"ui-float-label\">\n          <p-calendar [required]=\"true\" id=\"endDate\" formControlName=\"endDate\" inputStyleClass=\"form-control\" name=\"endDate\" [(ngModel)]=\"newCoupon.endDate\"\n          [style]=\"{'width':'100%'}\"></p-calendar>\n          <label for=\"endDate\">End Date</label>\n        </span>\n        <span class=\"help-block\" *ngIf=\"createCouponForm.controls['endDate'].invalid && createCouponForm.controls['endDate'].touched\">\n            <span class=\"help-block\" *ngIf=\"createCouponForm.get('endDate').errors['DateMustBeGreaterThanSysdate']\">\n                End Date Must Be Equal/Greater than Today\n            </span>\n            <span class=\"help-block\" *ngIf=\"createCouponForm.get('endDate').errors['EndDateMustBeGreaterThanStartDate']\">\n                End Date Must Be Equal/Greater than Start Date\n            </span>\n            <span class=\"help-block\" *ngIf=\"createCouponForm.get('endDate').errors['required']\">\n                    End Date Is Required\n            </span>\n        </span>\n      </div><br>\n\n      <div class=\"form-group\" [class.has-error]=\"createCouponForm.controls['amount'].invalid && createCouponForm.controls['amount'].touched\"\n        [class.has-success]=\"createCouponForm.controls['amount'].valid && createCouponForm.controls['amount'].touched\">\n        <span class=\"ui-float-label\">\n          <input required id=\"amount\" type=\"number\" formControlName=\"amount\" class=\"form-control\" name=\"amount\" [(ngModel)]=\"newCoupon.amount\" pInputText>\n          <label for=\"amount\" class=\"control-label\">Amount</label>\n        </span>\n        <span class=\"help-block\" *ngIf=\"createCouponForm.controls['amount'].invalid && createCouponForm.controls['amount'].touched\">\n          Amount Is Required</span>\n      </div><br>\n\n      <div class=\"form-group\" [class.has-error]=\"createCouponForm.controls['type'].invalid && createCouponForm.controls['type'].touched\"\n        [class.has-success]=\"createCouponForm.controls['type'].valid && createCouponForm.controls['type'].touched\">\n        <span class=\"ui-float-label\">\n          <p-dropdown id=\"type\" [options]=\"types\" name=\"type\" inputStyleClass=\"form-control\" [autoDisplayFirst]=\"false\"\n            [showClear]=\"true\" formControlName=\"type\" [(ngModel)]=\"newCoupon.type\" [style]=\"{'width':'100%'}\">\n          </p-dropdown>\n          <label for=\"type\" class=\"control-label\">Type</label>\n        </span>\n        <span class=\"help-block\" *ngIf=\"createCouponForm.controls['type'].invalid && createCouponForm.controls['type'].touched\">\n          Type Is Required</span>\n      </div><br>\n\n      <div class=\"form-group\" [class.has-error]=\"createCouponForm.controls['message'].invalid && createCouponForm.controls['message'].touched\"\n        [class.has-success]=\"createCouponForm.controls['message'].valid && createCouponForm.controls['message'].touched\">\n        <span class=\"ui-float-label\">\n          <input required id=\"message\" type=\"text\" formControlName=\"message\" class=\"form-control\" name=\"message\" [(ngModel)]=\"newCoupon.message\" pInputText>\n          <label for=\"message\" class=\"control-label\">Message</label>\n        </span>\n        <span class=\"help-block\" *ngIf=\"createCouponForm.controls['message'].invalid && createCouponForm.controls['message'].touched\">\n          Message Is Required</span>\n      </div><br>\n\n      <div class=\"form-group\" [class.has-error]=\"createCouponForm.controls['price'].invalid && createCouponForm.controls['price'].touched\"\n        [class.has-success]=\"createCouponForm.controls['price'].valid && createCouponForm.controls['price'].touched\">\n        <span class=\"ui-float-label\">\n          <input required id=\"price\" type=\"price\" formControlName=\"price\" class=\"form-control\" name=\"price\" [(ngModel)]=\"newCoupon.price\" pInputText>\n          <label for=\"price\" class=\"control-label\">Price</label>\n        </span>\n        <span class=\"help-block\" *ngIf=\"createCouponForm.controls['price'].invalid && createCouponForm.controls['price'].touched\">Price\n          Is Required</span>\n      </div><br>\n\n      <div class=\"form-group\" [class.has-error]=\"createCouponForm.controls['image'].invalid && createCouponForm.controls['image'].touched\"\n        [class.has-success]=\"createCouponForm.controls['image'].valid && createCouponForm.controls['image'].touched\">\n        <span class=\"ui-float-label\">\n          <input required id=\"image\" type=\"text\" formControlName=\"image\" class=\"form-control\" name=\"image\" [(ngModel)]=\"newCoupon.image\" pInputText>\n          <label for=\"image\" class=\"control-label\">Image</label>\n        </span>\n        <span class=\"help-block\" *ngIf=\"createCouponForm.controls['image'].invalid && createCouponForm.controls['image'].touched\">\n          Image Is Required</span>\n      </div><br>\n\n      <button pButton [disabled]=\"!createCouponForm.valid\"  type=\"submit\" class=\"ui-button-rounded\" label=\"Add Coupon\" (click)=\"addNewCoupon(); createCouponForm.reset()\"></button>\n    </form>\n  </p-fieldset>\n</div>\n"

/***/ }),

/***/ "./src/app/components/create-coupon/create-coupon.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/create-coupon/create-coupon.component.ts ***!
  \*********************************************************************/
/*! exports provided: CreateCouponComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCouponComponent", function() { return CreateCouponComponent; });
/* harmony import */ var _services_web_api_company_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/web-api-company.service */ "./src/app/services/web-api-company.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_Coupon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Coupon */ "./src/app/components/common/Coupon.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateCouponComponent = /** @class */ (function () {
    /*
    At the constructor we inject
    1. FormBuilder for the favor validation of the forms
    2. WebApiAdminService for the favor of the services
    3. MessageService for the favor of the custom messages
    */
    function CreateCouponComponent(formBuilder, companyService, messageService) {
        this.formBuilder = formBuilder;
        this.companyService = companyService;
        this.messageService = messageService;
        this.newCoupon = new _common_Coupon__WEBPACK_IMPORTED_MODULE_2__["Coupon"](null, '', null, null, null, '', '', null, '');
        this.caption = 'Create A New Coupon';
        this.date = new Date();
        // This date is reset to contains only date without time in order to compare dates based on day and not day and time
        this.date.setSeconds(0);
        this.date.setHours(0);
        this.date.setMinutes(0);
        this.date.setMilliseconds(0);
        // initialize the coupon types for the favor of the drop down list
        this.types = [
            { label: 'Resturant', value: 'RESTURANT' },
            { label: 'Electricity', value: 'ELECTRICITY' },
            { label: 'Food', value: 'FOOD' },
            { label: 'Health', value: 'HEALTH' },
            { label: 'Sports', value: 'SPORTS' },
            { label: 'Camping', value: 'CAMPING' },
            { label: 'Travelling', value: 'TRAVELLING' },
        ];
        // In the code we define the validation for each input.
        // For the dates there are three addtioanl validations (the methods are defined at the end of this file)
        this.createCouponForm = formBuilder.group({
            'title': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            'startDate': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.checkDate.bind(this), this.checkStartDate.bind(this)])],
            'endDate': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.checkDate.bind(this), this.checkEndDate.bind(this)])],
            'amount': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            'type': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            'message': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            'price': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            'image': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])]
        });
    }
    CreateCouponComponent.prototype.ngOnInit = function () {
    };
    // This method is activated afte the user finished to enter all the coupon infromation into the form and activate the save button.
    // It activates the addNewCouponService service.
    CreateCouponComponent.prototype.addNewCoupon = function () {
        var _this = this;
        console.log(this.newCoupon);
        this.couponTitle = this.newCoupon.title;
        this.companyService.addNewCouponService(this.newCoupon).subscribe(function (resp) {
            _this.messageService.add({ severity: 'success', summary: 'Company Was Added', detail: _this.couponTitle +
                    ' Was Added Successfully' });
        }, function (error) {
            _this.messageService.add({ severity: 'error', summary: 'Company Was\'t Added', detail: error._body });
        });
        this.newCoupon = new _common_Coupon__WEBPACK_IMPORTED_MODULE_2__["Coupon"](null, '', null, null, null, '', '', null, '');
    };
    /* The following 3 methods responsible for the dates validations
      1. checkDate - checks if the date selected is greated than today
      2. checkStartDate - checks if the start date is less than the end date
      3. checkEndDate - checks if the end date is greater than start date
    */
    CreateCouponComponent.prototype.checkDate = function (control) {
        if (control.value !== null && control.value < this.date) {
            return { 'DateMustBeGreaterThanSysdate': true };
        }
        return null;
    };
    CreateCouponComponent.prototype.checkStartDate = function (control) {
        if (this.newCoupon.endDate !== null && control.value > this.newCoupon.endDate) {
            return { 'StartDateMustBeLessThanEndDate': true };
        }
        // this.newCoupon.startDate = this.newCoupon.startDate;
        return null;
    };
    CreateCouponComponent.prototype.checkEndDate = function (control) {
        if (this.newCoupon.startDate !== null && control.value < this.newCoupon.startDate) {
            return { 'EndDateMustBeGreaterThanStartDate': true };
        }
        // this.newCoupon.endDate = this.newCoupon.endDate;
        return null;
    };
    CreateCouponComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-coupon',
            template: __webpack_require__(/*! ./create-coupon.component.html */ "./src/app/components/create-coupon/create-coupon.component.html"),
            styles: [__webpack_require__(/*! ./create-coupon.component.css */ "./src/app/components/create-coupon/create-coupon.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _services_web_api_company_service__WEBPACK_IMPORTED_MODULE_0__["WebApiCompanyService"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], CreateCouponComponent);
    return CreateCouponComponent;
}());



/***/ }),

/***/ "./src/app/components/get-company-info/get-company-info.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/get-company-info/get-company-info.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/get-company-info/get-company-info.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/get-company-info/get-company-info.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <p-fieldset [legend]=\"caption\">\n    <form>\n       <div class=\"form-group\">\n            <span class=\"ui-float-label\">\n                <input id=\"\"  type=\"number\" class=\"form-control\" name=\"id\" [(ngModel)]=\"requestedCompany.id\" pInputText>\n                <label for=\"id\">Company Id</label>\n            </span>\n        </div><br>\n        <div class=\"form-group\">\n            <span class=\"ui-float-label\">\n                <input id=\"compName\" type=\"text\" class=\"form-control\" name=\"compName\" [(ngModel)]=\"requestedCompany.compName\" disabled=\"true\"  pInputText>\n                <label for=\"compName\">Name</label>\n            </span>\n        </div><br>\n        <div class=\"form-group\">\n            <span class=\"ui-float-label\">\n                <input id=\"password\"  type=\"text\" class=\"form-control\" name=\"password\" [(ngModel)]=\"requestedCompany.password\" disabled=\"true\" pInputText>\n                <label for=\"password\">Password</label>\n            </span>\n        </div><br>\n        <div class=\"form-group\">\n          <span class=\"ui-float-label\">\n              <input id=\"email\" type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"requestedCompany.email\" disabled=\"true\" pInputText>\n              <label for=\"email\">Email</label>\n          </span>\n        </div>\n      <!-- <span ><button pButton type=\"submit\" class=\"ui-button-rounded\" label=\"Show\" (click)=\"getCompanyInfo()\"></button></span> -->\n    </form>\n    </p-fieldset>\n  </div>\n"

/***/ }),

/***/ "./src/app/components/get-company-info/get-company-info.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/get-company-info/get-company-info.component.ts ***!
  \***************************************************************************/
/*! exports provided: GetCompanyInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCompanyInfoComponent", function() { return GetCompanyInfoComponent; });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Company__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../common/Company */ "./src/app/components/common/Company.ts");
/* harmony import */ var _services_web_api_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/web-api-company.service */ "./src/app/services/web-api-company.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GetCompanyInfoComponent = /** @class */ (function () {
    /*
    At the constructor we inject
    1. WebApiAdminService for the favor of the services
    2. MessageService for the favor of the custom messages
    */
    function GetCompanyInfoComponent(companyService, messageService) {
        this.companyService = companyService;
        this.messageService = messageService;
        this.requestedCompany = new _common_Company__WEBPACK_IMPORTED_MODULE_1__["Company"](null, '', '', '');
        this.caption = 'Company Information';
        this.getCompanyInfo();
    }
    // This method is activated from the constructor every time the user rout to compny info link
    GetCompanyInfoComponent.prototype.getCompanyInfo = function () {
        var _this = this;
        this.companyService.getCompanyInfo().subscribe(function (resp) {
            _this.requestedCompany = resp.json();
        }, function (error) {
            _this.messageService.add({ severity: 'error', summary: 'Data Unavailable', detail: error._body });
        });
    };
    GetCompanyInfoComponent.prototype.ngOnInit = function () {
    };
    GetCompanyInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-get-company-info',
            template: __webpack_require__(/*! ./get-company-info.component.html */ "./src/app/components/get-company-info/get-company-info.component.html"),
            styles: [__webpack_require__(/*! ./get-company-info.component.css */ "./src/app/components/get-company-info/get-company-info.component.css")]
        }),
        __metadata("design:paramtypes", [_services_web_api_company_service__WEBPACK_IMPORTED_MODULE_2__["WebApiCompanyService"], primeng_api__WEBPACK_IMPORTED_MODULE_0__["MessageService"]])
    ], GetCompanyInfoComponent);
    return GetCompanyInfoComponent;
}());



/***/ }),

/***/ "./src/app/components/get-coupon-by-id/get-coupon-by-id.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/get-coupon-by-id/get-coupon-by-id.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/get-coupon-by-id/get-coupon-by-id.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/get-coupon-by-id/get-coupon-by-id.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <p-fieldset [legend]=\"caption\">\n      <!-- <form [formGroup]=\"showCompanyForm\"> -->\n      <form>\n          <div class=\"form-group\" *ngIf=\"requestedCoupon.image && requestedCoupon.id\" style=\"text-align:center\">\n              <!-- <span class=\"ui-float-label\">\n                  <input id=\"image\" type=\"image\" class=\"form-control\" name=\"image\" [(ngModel)]=\"requestedCoupon.image\" disabled=\"true\" pInputText>\n                  <label for=\"image\">Image</label>\n              </span> -->\n              <img id=\"img\" [src]=\"requestedCoupon.image\" width=\"120\" height=\"90\">\n          </div>\n       <div class=\"form-group\">\n            <span class=\"ui-float-label\">\n                <input id=\"\"  type=\"number\" class=\"form-control\" name=\"id\" [(ngModel)]=\"requestedCoupon.id\" pInputText>\n                <label for=\"id\">Company Id</label>\n            </span>\n        </div><br>\n        <div class=\"form-group\">\n            <span class=\"ui-float-label\">\n                <input id=\"title\" type=\"text\" class=\"form-control\" name=\"title\" [ngModel]=\"requestedCoupon.title\" disabled=\"true\"  pInputText>\n                <label for=\"title\">Title</label>\n            </span>\n        </div><br>\n        <div class=\"form-group\">\n            <span class=\"ui-float-label\">\n                <input id=\"startDate\"  type=\"text\" class=\"form-control\" name=\"startDate\" [ngModel]=\"requestedCoupon.startDate|date:'dd/MM/yyyy'\" disabled=\"true\" pInputText>\n                <label for=\"startDate\">Start Date</label>\n            </span>\n        </div><br>\n        <div class=\"form-group\">\n            <span class=\"ui-float-label\">\n                <input id=\"endDate\"  type=\"text\" class=\"form-control\" name=\"endDate\" [ngModel]=\"requestedCoupon.endDate|date:'dd/MM/yyyy'\" disabled=\"true\" pInputText>\n                <label for=\"endDate\">End Date</label>\n            </span>\n        </div><br>\n        <div class=\"form-group\">\n          <span class=\"ui-float-label\">\n              <input id=\"amount\" type=\"number\" class=\"form-control\" name=\"amount\" [ngModel]=\"requestedCoupon.amount\" disabled=\"true\" pInputText>\n              <label for=\"amount\">Amount</label>\n          </span>\n        </div><br>\n        <div class=\"form-group\">\n            <span class=\"ui-float-label\">\n                <input id=\"type\" type=\"text\" class=\"form-control\" name=\"type\" [ngModel]=\"requestedCoupon.type\" disabled=\"true\" pInputText>\n                <label for=\"type\">Type</label>\n            </span>\n          </div><br>\n          <div class=\"form-group\">\n              <span class=\"ui-float-label\">\n                  <input id=\"message\" type=\"text\" class=\"form-control\" name=\"message\" [ngModel]=\"requestedCoupon.message\" disabled=\"true\" pInputText>\n                  <label for=\"message\">Message</label>\n              </span>\n          </div><br>\n          <div class=\"form-group\">\n              <span class=\"ui-float-label\">\n                  <input id=\"price\" type=\"number\" class=\"form-control\" name=\"price\" [ngModel]=\"requestedCoupon.price\" disabled=\"true\" pInputText>\n                  <label for=\"price\">Price</label>\n              </span>\n          </div><br>\n          <br>\n      <span ><button [disabled]=\"!requestedCoupon.id\" pButton type=\"submit\" class=\"ui-button-rounded\" label=\"Show\"\n        (click)=\"getCoupon(requestedCoupon.id)\"></button></span>\n    </form>\n    </p-fieldset>\n  </div>\n"

/***/ }),

/***/ "./src/app/components/get-coupon-by-id/get-coupon-by-id.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/get-coupon-by-id/get-coupon-by-id.component.ts ***!
  \***************************************************************************/
/*! exports provided: GetCouponByIdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCouponByIdComponent", function() { return GetCouponByIdComponent; });
/* harmony import */ var _services_web_api_company_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/web-api-company.service */ "./src/app/services/web-api-company.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_Coupon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Coupon */ "./src/app/components/common/Coupon.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { FormBuilder, Validators, FormGroup } from '@angular/forms';
var GetCouponByIdComponent = /** @class */ (function () {
    /*
    At the constructor we inject
    1. WebApiAdminService for the favor of the services
    2. MessageService for the favor of the custom messages
    */
    function GetCouponByIdComponent(companyService, messageService) {
        this.companyService = companyService;
        this.messageService = messageService;
        this.requestedCoupon = new _common_Coupon__WEBPACK_IMPORTED_MODULE_3__["Coupon"](null, '', null, null, null, '', '', null, '');
        this.caption = 'Coupon Information';
    }
    // This method is activated once the user enter the coupon id and press the show button
    GetCouponByIdComponent.prototype.getCoupon = function () {
        var _this = this;
        this.companyService.getCouponByIdService(this.requestedCoupon.id).subscribe(function (resp) {
            _this.requestedCoupon = resp.json();
        }, function (error) {
            _this.messageService.add({ severity: 'error', summary: 'Data Unavailable', detail: error._body });
        });
    };
    GetCouponByIdComponent.prototype.ngOnInit = function () { };
    GetCouponByIdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-get-coupon-by-id',
            template: __webpack_require__(/*! ./get-coupon-by-id.component.html */ "./src/app/components/get-coupon-by-id/get-coupon-by-id.component.html"),
            styles: [__webpack_require__(/*! ./get-coupon-by-id.component.css */ "./src/app/components/get-coupon-by-id/get-coupon-by-id.component.css")]
        }),
        __metadata("design:paramtypes", [_services_web_api_company_service__WEBPACK_IMPORTED_MODULE_0__["WebApiCompanyService"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], GetCouponByIdComponent);
    return GetCouponByIdComponent;
}());



/***/ }),

/***/ "./src/app/components/get-coupons-by-date/get-coupons-by-date.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/get-coupons-by-date/get-coupons-by-date.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/get-coupons-by-date/get-coupons-by-date.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/get-coupons-by-date/get-coupons-by-date.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\n    <!-- <div *ngIf=\"hasData===true\"> -->\n  <div class=\"container right\">\n    <div class=\"col-md-9\"></div>\n    <div class=\"col-md-3\">\n        <p-calendar  [showIcon]=\"true\" [showButtonBar]=\"true\" dateFormat=\"dd/mm/yy\"  [(ngModel)]=\"date\" (onSelect)=\"onSelectDate($event)\"></p-calendar>\n      </div>\n  <!-- <strong>Select date a Date:</strong> &nbsp; -->\n</div>\n<div class=\"row\">\n    <div class=\"ui-g-12 ui-md-12\">\n  <p-fieldset [legend]=\"caption\">\n      <p-table [columns]=\"cols\" [value]=\"coupons\" selectionMode=\"single\" [paginator]=\"true\" [rows]=\"20\" [resizableColumns]=\"true\">\n       <ng-template pTemplate=\"caption\">\n           {{ numOfCoupons }} Listed Coupons\n         </ng-template>\n       <ng-template pTemplate=\"header\">\n           <tr>\n               <th *ngFor=\"let col of cols\" [pSortableColumn]=\"col.field\" pResizableColumn>\n               {{ col.displayName }}\n               <p-sortIcon [field]=\"col.field\"></p-sortIcon>\n               </th>\n           </tr>\n       </ng-template>\n       <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n           <tr [pSelectableRow]=\"rowData\">\n               <td *ngFor=\"let col of columns\">\n                  <span *ngIf=\"col.field!=='startDate' && col.field!=='endDate'\" >{{rowData[col.field]}}</span>\n                  <span *ngIf=\"col.field==='startDate' || col.field==='endDate'\" >{{rowData[col.field]|date:'dd/MM/yyyy'}}</span>\n               </td>\n           </tr>\n       </ng-template>\n     </p-table>\n    </p-fieldset>\n</div>\n</div>\n</div>\n<!-- </div> -->\n<!-- <div *ngIf=\"hasData!==true\">\n    <div class=\"alert alert-info\" style=\"text-align: center\">\n        <strong>There aren't any coupons in the system</strong>\n      </div>\n</div> -->\n"

/***/ }),

/***/ "./src/app/components/get-coupons-by-date/get-coupons-by-date.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/get-coupons-by-date/get-coupons-by-date.component.ts ***!
  \*********************************************************************************/
/*! exports provided: GetCouponsByDateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCouponsByDateComponent", function() { return GetCouponsByDateComponent; });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_web_api_company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/web-api-company.service */ "./src/app/services/web-api-company.service.ts");
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



var GetCouponsByDateComponent = /** @class */ (function () {
    // defaultDate: string;
    /*
    At the constructor we inject
    1. WebApiAdminService for the favor of the services
    2. MessageService for the favor of the custom messages
    */
    function GetCouponsByDateComponent(companyService, messageService) {
        this.companyService = companyService;
        this.messageService = messageService;
        this.coupons = [];
        this.caption = 'Coupons By Date';
        this.hasData = false;
        this.cols = companyService.couponCols;
    }
    GetCouponsByDateComponent.prototype.ngOnInit = function () {
    };
    // This method is activated (by event) every time the user select a date.
    // It activate the getCouponByDateService service that presnet the relevant data to the user
    GetCouponsByDateComponent.prototype.onSelectDate = function (event) {
        var _this = this;
        this.companyService.getCouponByDateService(this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + this.date.getDate())
            .subscribe(function (resp) {
            _this.hasData = true;
            _this.coupons = resp.json();
            _this.numOfCoupons = _this.coupons.length;
            _this.coupons.sort(function (a, b) {
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
        }, function (error) {
            // this.messageService.add({severity: 'error', summary: 'Data Unavailable', detail: error._body});
            _this.messageService.add({ severity: 'error', summary: 'Data Unavailable', detail: 'There aren\'t any listed coupons '
                    + 'with an end date less than ' + _this.date.getFullYear() + '-' + (_this.date.getMonth() + 1) + '-'
                    + _this.date.getDate() + ' in the system ' });
        });
    };
    GetCouponsByDateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-get-coupons-by-date',
            template: __webpack_require__(/*! ./get-coupons-by-date.component.html */ "./src/app/components/get-coupons-by-date/get-coupons-by-date.component.html"),
            styles: [__webpack_require__(/*! ./get-coupons-by-date.component.css */ "./src/app/components/get-coupons-by-date/get-coupons-by-date.component.css")]
        }),
        __metadata("design:paramtypes", [_services_web_api_company_service__WEBPACK_IMPORTED_MODULE_1__["WebApiCompanyService"], primeng_api__WEBPACK_IMPORTED_MODULE_0__["MessageService"]])
    ], GetCouponsByDateComponent);
    return GetCouponsByDateComponent;
}());



/***/ }),

/***/ "./src/app/components/get-coupons-by-price/get-coupons-by-price.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/get-coupons-by-price/get-coupons-by-price.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".startyear,\r\n.endyear {\r\n\tfloat: left;\r\n\twidth: 10vw;\r\n\tcolor: #333;\r\n\ttext-align: right;\r\n\tfont-weight: bold;\r\n}\r\n.endyear {\r\n\ttext-align: left;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/get-coupons-by-price/get-coupons-by-price.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/get-coupons-by-price/get-coupons-by-price.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!-- <h4 class=\"first\">Price: {{ price }}</h4> -->\n  <!-- <span class=\"startyear\">{{minPrice}}</span>\n  <p-slider id=\"priceSlider\" (onSlideEnd)=\"onPriceChange($event)\" [(ngModel)]=\"price\" [min]=\"minPrice\" [max]=\"maxPrice\" ></p-slider>\n  <span class=\"endyear\">{{maxPrice}}</span> -->\n  <!-- <div class=\"row\">\n    <div class=\"col-md-1\">\n        {{minPrice}}\n    </div>\n    <div class=\"col-md-9\">\n        <p-slider id=\"priceSlider\" (onSlideEnd)=\"onPriceChange($event)\" [(ngModel)]=\"price\" [min]=\"minPrice\" [max]=\"maxPrice\" ></p-slider>\n    </div>\n    <div class=\"col-md-2\">\n        {{maxPrice}}\n    </div>\n  </div> -->\n<div *ngIf=\"hasData===true\">\n  <div class=\"row\">\n      <div class=\"ui-g-12 ui-md-1\">\n          <b class=\"pull-right\"><i> Min Price {{minPrice}} </i></b>\n        </div>\n       <div class=\"ui-g-12 ui-md-10\" style=\"margin-top:25px;\">\n                <p-slider   (onSlideEnd)=\"onPriceChange($event)\" [(ngModel)]=\"price\"  [min]=\"minPrice\" [max]=\"maxPrice\" [animate]=\"true\">\n                </p-slider>\n        </div>\n        <div class=\"ui-g-12 ui-md-1\">\n            <b class=\"pull-left\"><i>Max Price {{maxPrice}} </i></b>\n  </div>\n</div>\n<hr>\n</div>\n  <div class=\"row\">\n      <div class=\"ui-g-12 ui-md-12\">\n  <p-fieldset [legend]=\"caption\">\n    <p-table [columns]=\"cols\"  [value]=\"coupons\" selectionMode=\"single\" [paginator]=\"true\" [rows]=\"10\" [resizableColumns]=\"true\">\n      <ng-template pTemplate=\"caption\">\n        {{ numOfCoupons }} Listed Coupons\n      </ng-template>\n      <ng-template pTemplate=\"header\">\n        <tr>\n          <th *ngFor=\"let col of cols\" [pSortableColumn]=\"col.field\" pResizableColumn>\n            {{ col.displayName }}\n            <p-sortIcon [field]=\"col.field\"></p-sortIcon>\n          </th>\n        </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n        <tr [pSelectableRow]=\"rowData\">\n          <td *ngFor=\"let col of columns\">\n              <span *ngIf=\"col.field!=='startDate' && col.field!=='endDate'\" >{{rowData[col.field]}}</span>\n              <span *ngIf=\"col.field==='startDate' || col.field==='endDate'\" >{{rowData[col.field]|date:'dd/MM/yyyy'}}</span>\n          </td>\n        </tr>\n      </ng-template>\n    </p-table>\n  </p-fieldset>\n</div>\n</div>\n</div>\n\n<!-- <div *ngIf=\"hasData!==true\">\n    <div class=\"alert alert-info\" style=\"text-align: center\">\n        <strong>There aren't any coupons in the system</strong>\n      </div>\n</div> -->\n"

/***/ }),

/***/ "./src/app/components/get-coupons-by-price/get-coupons-by-price.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/get-coupons-by-price/get-coupons-by-price.component.ts ***!
  \***********************************************************************************/
/*! exports provided: GetCouponsByPriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCouponsByPriceComponent", function() { return GetCouponsByPriceComponent; });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_web_api_company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/web-api-company.service */ "./src/app/services/web-api-company.service.ts");
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



// import * as $ from 'jquery';
var GetCouponsByPriceComponent = /** @class */ (function () {
    /*
    At the constructor we inject
    1. WebApiAdminService for the favor of the services
    2. MessageService for the favor of the custom messages
    */
    function GetCouponsByPriceComponent(companyService, messageService) {
        this.companyService = companyService;
        this.messageService = messageService;
        this.coupons = [];
        this.couponsForPrices = [];
        this.caption = 'Coupons By Price';
        this.hasData = false;
        // this.hasData = companyService.hasData;
        this.cols = companyService.couponCols;
    }
    GetCouponsByPriceComponent.prototype.ngOnInit = function () {
        // this.cols = [
        //   { displayName: 'Id',          field: 'id',          type: 'number' ,  disabled: 'true' ,  tag: 'input'},
        //   { displayName: 'Title',       field: 'title',       type: 'text' ,    disabled: 'true' ,  tag: 'input'},
        //   { displayName: 'Start Date',  field: 'startDate',   type: 'date' ,    disabled: 'true' ,  tag: 'cal'},
        //   { displayName: 'End Date',    field: 'endDate',     type: 'date' ,    disabled: 'false',  tag: 'cal'},
        //   { displayName: 'Amount',      field: 'amount',      type: 'number' ,  disabled: 'true' ,  tag: 'input'},
        //   { displayName: 'Type',        field: 'type',        type: 'text' ,    disabled: 'true' ,  tag: 'list'},
        //   { displayName: 'Message',     field: 'message' ,    type: 'text' ,    disabled: 'true' ,  tag: 'input'},
        //   { displayName: 'Price',       field: 'price' ,      type: 'number',   disabled: 'false',  tag: 'input'},
        //   { displayName: 'Image',       field: 'image' ,      type: 'text',     disabled: 'true' ,  tag: 'input'}
        // ];
        // This methos populate the min price and the max price for the favor of the slider boundaries
        this.getMinMaxPrices();
    };
    // This method is activated (by event) every time the user changes the price.
    // It activate the getCouponByPriceService service that presnet the relevant data to the user
    GetCouponsByPriceComponent.prototype.onPriceChange = function (event) {
        var _this = this;
        this.companyService.getCouponByPriceService(event.value).subscribe(function (resp) {
            _this.coupons = resp.json();
            _this.numOfCoupons = _this.coupons.length;
            _this.coupons.sort(function (a, b) {
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
        }, function (error) {
            console.log(error._body);
            _this.messageService.add({ severity: 'error', summary: 'Data Unavailable', detail: error._body });
        });
    };
    // This method is activated from the ngOnInit and it responsible
    // to populate the min price and the max price for the favor of the slider boundaries
    GetCouponsByPriceComponent.prototype.getMinMaxPrices = function () {
        var _this = this;
        this.companyService.getAllCouponsService().subscribe(function (resp) {
            _this.couponsForPrices = resp.json();
            _this.couponsForPrices.sort(function (a, b) {
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
            _this.minPrice = _this.couponsForPrices[0].price;
            _this.maxPrice = _this.couponsForPrices[_this.couponsForPrices.length - 1].price;
            _this.price = _this.maxPrice;
            _this.initializeView(_this.price);
        });
    };
    // This method initialize the screen with all the coupons from the higher price to te lower price
    GetCouponsByPriceComponent.prototype.initializeView = function (price) {
        var _this = this;
        this.companyService.getCouponByPriceService(price).subscribe(function (resp) {
            _this.hasData = true;
            _this.coupons = resp.json();
            _this.numOfCoupons = _this.coupons.length;
            _this.coupons.sort(function (a, b) {
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
        }, function (error) {
            console.log(error._body);
            _this.messageService.add({ severity: 'error', summary: 'Data Unavailable', detail: error._body });
        });
    };
    GetCouponsByPriceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-get-coupons-by-price',
            template: __webpack_require__(/*! ./get-coupons-by-price.component.html */ "./src/app/components/get-coupons-by-price/get-coupons-by-price.component.html"),
            styles: [__webpack_require__(/*! ./get-coupons-by-price.component.css */ "./src/app/components/get-coupons-by-price/get-coupons-by-price.component.css")]
        }),
        __metadata("design:paramtypes", [_services_web_api_company_service__WEBPACK_IMPORTED_MODULE_1__["WebApiCompanyService"], primeng_api__WEBPACK_IMPORTED_MODULE_0__["MessageService"]])
    ], GetCouponsByPriceComponent);
    return GetCouponsByPriceComponent;
}());



/***/ }),

/***/ "./src/app/components/get-coupons-by-type/get-coupons-by-type.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/get-coupons-by-type/get-coupons-by-type.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/get-coupons-by-type/get-coupons-by-type.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/get-coupons-by-type/get-coupons-by-type.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIf=\"hasData!==true\">\n    <div class=\"alert alert-info\" style=\"text-align: center\">\n        <strong>There aren't any coupons in the system</strong>\n      </div>\n</div> -->\n<div class=\"container\" >\n    <div class=\"container\">\n      <div class=\"col-md-10\">\n      </div>\n      <div class=\"col-md-2\">\n          <p-dropdown id=\"type\" [options]=\"types\" name=\"type\" [autoDisplayFirst]=\"false\" [showClear]=\"true\" (onChange)=\"onTypeChange($event)\"\n          placeholder=\"Select a Type\"\n          ></p-dropdown>\n        </div>\n    <!-- <strong>Select date a Date:</strong> &nbsp; -->\n  </div>\n  <!-- <div *ngIf=\"hasData===true\"> -->\n  <div class=\"row\">\n      <div class=\"ui-g-12 ui-md-12\">\n    <p-fieldset [legend]=\"caption\">\n        <p-table [columns]=\"cols\" [value]=\"coupons\" selectionMode=\"single\" [paginator]=\"true\" [rows]=\"20\" [resizableColumns]=\"true\">\n         <ng-template pTemplate=\"caption\">\n             {{ numOfCoupons }} Listed Coupons\n           </ng-template>\n         <ng-template pTemplate=\"header\">\n             <tr>\n                 <th *ngFor=\"let col of cols\" [pSortableColumn]=\"col.field\" pResizableColumn>\n                 {{ col.displayName }}\n                 <p-sortIcon [field]=\"col.field\"></p-sortIcon>\n                 </th>\n             </tr>\n         </ng-template>\n         <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n             <tr [pSelectableRow]=\"rowData\">\n                 <td *ngFor=\"let col of columns\">\n                     {{rowData[col.field]}}\n                 </td>\n             </tr>\n         </ng-template>\n       </p-table>\n      </p-fieldset>\n  </div>\n</div>\n</div>\n<!-- </div> -->\n"

/***/ }),

/***/ "./src/app/components/get-coupons-by-type/get-coupons-by-type.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/get-coupons-by-type/get-coupons-by-type.component.ts ***!
  \*********************************************************************************/
/*! exports provided: GetCouponsByTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCouponsByTypeComponent", function() { return GetCouponsByTypeComponent; });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_web_api_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/web-api-company.service */ "./src/app/services/web-api-company.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetCouponsByTypeComponent = /** @class */ (function () {
    /*
    At the constructor we inject
    1. WebApiAdminService for the favor of the services
    2. MessageService for the favor of the custom messages
    */
    function GetCouponsByTypeComponent(companyService, messageService) {
        this.companyService = companyService;
        this.messageService = messageService;
        this.coupons = [];
        this.caption = 'Coupons By Type';
        this.hasData = false;
        // this.hasData = companyService.hasData;
        this.cols = companyService.couponCols;
        this.types = companyService.couponTypes;
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
    GetCouponsByTypeComponent.prototype.ngOnInit = function () {
        // this.cols = [
        //   { displayName: 'Id',          field: 'id'         },
        //   { displayName: 'Title',       field: 'title'      },
        //   { displayName: 'Start Date',  field: 'startDate'  },
        //   { displayName: 'End Date',    field: 'endDate'    },
        //   { displayName: 'Amount',      field: 'amount'     },
        //   { displayName: 'Type',        field: 'type'       },
        //   { displayName: 'Message',     field: 'message'    },
        //   { displayName: 'Price',       field: 'price'      },
        //   { displayName: 'Image',       field: 'image'      }
        // ];
    };
    // This method is activated (by event) every time the user changes the coupon type.
    // It activate the getCouponByTypeService service that presnet the relevant data to the user
    GetCouponsByTypeComponent.prototype.onTypeChange = function (event) {
        var _this = this;
        if (event.value !== null) {
            this.companyService.getCouponByTypeService(event.value).subscribe(function (resp) {
                _this.hasData = true;
                _this.coupons = resp.json();
                _this.numOfCoupons = _this.coupons.length;
                _this.coupons.sort(function (a, b) {
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
            }, function (error) {
                _this.messageService.add({ severity: 'error', summary: 'Data Unavailable', detail: error._body });
            });
        }
        else {
            this.coupons = [];
        }
    };
    GetCouponsByTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-get-coupons-by-type',
            template: __webpack_require__(/*! ./get-coupons-by-type.component.html */ "./src/app/components/get-coupons-by-type/get-coupons-by-type.component.html"),
            styles: [__webpack_require__(/*! ./get-coupons-by-type.component.css */ "./src/app/components/get-coupons-by-type/get-coupons-by-type.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_web_api_company_service__WEBPACK_IMPORTED_MODULE_2__["WebApiCompanyService"], primeng_api__WEBPACK_IMPORTED_MODULE_0__["MessageService"]])
    ], GetCouponsByTypeComponent);
    return GetCouponsByTypeComponent;
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

module.exports = "<nav class=\"navbar navbar-inverse\" role=\"navigation\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <div class=\"navbar-brand\">CouponSystem</div>\n    </div>\n      <div id=\"navbar\" class=\"navbar-collapse collapse\">\n          <ul class=\"nav navbar-nav navbar-left\">\n              <li>\n                  <p-menu [showTransitionOptions]=\"'0ms'\" [hideTransitionOptions]=\"'0ms'\" #menu [popup]=\"true\" [model]=\"items\"></p-menu>\n                  <a class=\"glyphicon glyphicon-list\"  label=\"Show\" (click)=\"menu.toggle($event)\"></a>\n              </li>\n          </ul>\n          <ul class=\"nav navbar-nav navbar-right\">\n              <li><a><span class=\"glyphicon glyphicon-user\"></span> Hello {{ company.compName }}</a></li>\n              <li><a (click)=\"logout()\"><span class=\"glyphicon glyphicon-off\"></span> Log Out</a></li>\n          </ul>\n      </div>\n  </div>\n</nav>\n\n"

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
/* harmony import */ var _common_Company__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../common/Company */ "./src/app/components/common/Company.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_web_api_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/web-api-company.service */ "./src/app/services/web-api-company.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(companyService, messageService) {
        this.companyService = companyService;
        this.messageService = messageService;
        this.company = new _common_Company__WEBPACK_IMPORTED_MODULE_0__["Company"](null, '', '', '');
        this.getCompanyInfo();
        this.prefixLogOutUrl = companyService.prefixLogOutUrl;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.items = [
            {
                label: 'Coupon',
                items: [
                    { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/allCoupons' },
                    { label: 'Coupon {Id}', icon: 'pi pi-fw pi-file', routerLink: '/getCoupon' },
                    { label: 'Add {Single}', icon: 'pi pi-fw pi-plus', routerLink: '/addCoupon' },
                    { label: 'Coupons {Price}', icon: 'pi pi-fw pi-dollar', routerLink: '/getCouponsByPrice' },
                    { label: 'Coupons {Date}', icon: 'pi pi-fw pi-calendar', routerLink: '/getCouponsByDate' },
                    { label: 'Coupons {Type}', icon: 'pi pi-fw pi-th-large', routerLink: '/getCouponsByType' }
                ]
            },
            {
                label: 'Company',
                items: [
                    { label: 'Company Info', icon: 'pi pi-fw pi-info', routerLink: '/companyInfo' }
                ]
            }
        ];
    };
    HeaderComponent.prototype.getCompanyInfo = function () {
        var _this = this;
        this.companyService.getCompanyInfo().subscribe(function (resp) {
            _this.company = resp.json();
        });
    };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.companyService.logOutService(this.request, this.response).subscribe(function (resp) {
            _this.messageService.add({ severity: 'success', summary: 'LogOut', detail: 'You Were Logged Out Successfully' });
            window.location.href = _this.prefixLogOutUrl;
        }, function (error) {
            _this.messageService.add({ severity: 'success', summary: 'LogOut', detail: 'Logged Out Failed' });
        });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_web_api_company_service__WEBPACK_IMPORTED_MODULE_3__["WebApiCompanyService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/services/web-api-company.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/web-api-company.service.ts ***!
  \*****************************************************/
/*! exports provided: WebApiCompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebApiCompanyService", function() { return WebApiCompanyService; });
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


var WebApiCompanyService = /** @class */ (function () {
    function WebApiCompanyService(http) {
        // this.hasData = false;
        this.http = http;
        this.prefixCompanyUrl = 'http://localhost:8080/company/';
        this.prefixLogOutUrl = 'http://localhost:8080/';
        this.couponCols = [
            { displayName: 'Id', field: 'id', type: 'number', disabled: 'true', tag: 'input' },
            { displayName: 'Title', field: 'title', type: 'text', disabled: 'true', tag: 'input' },
            { displayName: 'Start Date', field: 'startDate', type: 'date', disabled: 'true', tag: 'cal' },
            { displayName: 'End Date', field: 'endDate', type: 'date', disabled: 'false', tag: 'cal' },
            { displayName: 'Amount', field: 'amount', type: 'number', disabled: 'true', tag: 'input' },
            { displayName: 'Type', field: 'type', type: 'text', disabled: 'true', tag: 'list' },
            { displayName: 'Message', field: 'message', type: 'text', disabled: 'true', tag: 'input' },
            { displayName: 'Price', field: 'price', type: 'number', disabled: 'false', tag: 'input' },
            { displayName: 'Image', field: 'image', type: 'text', disabled: 'true', tag: 'input' }
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
    /**********************************************************************************/
    /*********************Services for all the company methods*************************/
    /**********************************************************************************/
    // Get all the coupons from the DB
    WebApiCompanyService.prototype.getAllCouponsService = function () {
        // return this.http.get('http://localhost:8080/company/get-all-coupons');
        return this.http.get(this.prefixCompanyUrl + 'get-all-coupons');
    };
    // Add new company to the DB
    WebApiCompanyService.prototype.addNewCouponService = function (coupon) {
        // return this.http.post('http://localhost:8080/company/create-coupon/', coupon);
        return this.http.post(this.prefixCompanyUrl + 'create-coupon/', coupon);
    };
    // Delete a company to the DB
    WebApiCompanyService.prototype.deleteCouponService = function (coupon) {
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestOptions"]({
            body: coupon
        });
        // return this.http.delete ('http://localhost:8080/company/remove-coupon/' + coupon.id, options);
        return this.http.delete(this.prefixCompanyUrl + 'remove-coupon/' + coupon.id, options);
    };
    WebApiCompanyService.prototype.updateCouponService = function (coupon) {
        // return this.http.put ('http://localhost:8080/company/update-coupon/' + coupon.id, coupon);
        return this.http.put(this.prefixCompanyUrl + 'update-coupon/' + coupon.id, coupon);
    };
    WebApiCompanyService.prototype.getCouponByIdService = function (id) {
        // return this.http.get('http://localhost:8080/company/get-coupon/' + id);
        return this.http.get(this.prefixCompanyUrl + 'get-coupon/' + id);
    };
    WebApiCompanyService.prototype.getCompanyInfo = function () {
        // return this.http.get('http://localhost:8080/company/company-info');
        return this.http.get(this.prefixCompanyUrl + 'company-info');
    };
    WebApiCompanyService.prototype.getCouponByPriceService = function (price) {
        // return this.http.get('http://localhost:8080/company/coupon-by-price?price=' + price);
        return this.http.get(this.prefixCompanyUrl + 'coupon-by-price?price=' + price);
    };
    WebApiCompanyService.prototype.getCouponByDateService = function (date) {
        // return this.http.get('http://localhost:8080/company/coupon-by-date?date=' + date);
        return this.http.get(this.prefixCompanyUrl + 'coupon-by-date?date=' + date);
    };
    WebApiCompanyService.prototype.getCouponByTypeService = function (type) {
        // return this.http.get('http://localhost:8080/company/coupon-by-type?type=' + type);
        return this.http.get(this.prefixCompanyUrl + 'coupon-by-type?type=' + type);
    };
    /**********************************************************************************/
    /*********************Services for the logout method*******************************/
    /**********************************************************************************/
    WebApiCompanyService.prototype.logOutService = function (request, response) {
        return this.http.post(this.prefixLogOutUrl + 'logout', request, response);
    };
    WebApiCompanyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"]])
    ], WebApiCompanyService);
    return WebApiCompanyService;
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

module.exports = __webpack_require__(/*! C:\Users\Yehuda.Hizmi\JAVA COURSE\Angular 5\CouponSystemCompany\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map