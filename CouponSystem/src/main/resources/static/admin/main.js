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

module.exports = "<p-toast position=\"top-right\" [style]=\"{marginTop: '80px'}\"></p-toast>\n<app-header></app-header>\n<br>\n<br>\n<br>\n<br>\n<br>\n<router-outlet></router-outlet>\n\n"

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
        this.title = 'CouponSystemAdmin';
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
/* harmony import */ var _components_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/create-company/create-company.component */ "./src/app/components/create-company/create-company.component.ts");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/accordion.js");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_accordion__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/password */ "./node_modules/primeng/password.js");
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_password__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _services_web_api_admin_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/web-api-admin.service */ "./src/app/services/web-api-admin.service.ts");
/* harmony import */ var _components_get_all_companies_get_all_companies_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/get-all-companies/get-all-companies.component */ "./src/app/components/get-all-companies/get-all-companies.component.ts");
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dataview */ "./node_modules/primeng/dataview.js");
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_dataview__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/paginator */ "./node_modules/primeng/paginator.js");
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_paginator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_admin_area_admin_area_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/admin-area/admin-area.component */ "./src/app/components/admin-area/admin-area.component.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/panelmenu */ "./node_modules/primeng/panelmenu.js");
/* harmony import */ var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_panelmenu__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _components_common_header_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/common/header/header.component */ "./src/app/components/common/header/header.component.ts");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/menu */ "./node_modules/primeng/menu.js");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(primeng_menu__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_get_company_by_id_get_company_by_id_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/get-company-by-id/get-company-by-id.component */ "./src/app/components/get-company-by-id/get-company-by-id.component.ts");
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/fieldset */ "./node_modules/primeng/fieldset.js");
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(primeng_fieldset__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _components_admin_area_customer_admin_area_customer_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/admin-area-customer/admin-area-customer.component */ "./src/app/components/admin-area-customer/admin-area-customer.component.ts");
/* harmony import */ var _components_get_customer_by_id_get_customer_by_id_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/get-customer-by-id/get-customer-by-id.component */ "./src/app/components/get-customer-by-id/get-customer-by-id.component.ts");
/* harmony import */ var _components_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/create-customer/create-customer.component */ "./src/app/components/create-customer/create-customer.component.ts");
/* harmony import */ var _components_common_messages_messages_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/common/messages/messages.component */ "./src/app/components/common/messages/messages.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_31__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















// import { DeleteCompanyComponent } from './components/delete-company/delete-company.component';













// import { ShowHidePasswordModule } from 'ngx-show-hide-password';


// import {ConfirmDialogModule} from 'primeng/confirmdialog';
// import {ConfirmationService} from 'primeng/api';
// import {ToastModule} from 'primeng/toast';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_3__["CreateCompanyComponent"],
                _components_get_all_companies_get_all_companies_component__WEBPACK_IMPORTED_MODULE_11__["GetAllCompaniesComponent"],
                // DeleteCompanyComponent,
                _components_admin_area_admin_area_component__WEBPACK_IMPORTED_MODULE_17__["AdminAreaComponent"],
                _components_common_header_header_component__WEBPACK_IMPORTED_MODULE_20__["HeaderComponent"],
                // MessagesComponent,
                _components_get_company_by_id_get_company_by_id_component__WEBPACK_IMPORTED_MODULE_23__["GetCompanyByIdComponent"],
                _components_admin_area_customer_admin_area_customer_component__WEBPACK_IMPORTED_MODULE_25__["AdminAreaCustomerComponent"],
                _components_get_customer_by_id_get_customer_by_id_component__WEBPACK_IMPORTED_MODULE_26__["GetCustomerByIdComponent"],
                _components_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_27__["CreateCustomerComponent"],
                _components_common_messages_messages_component__WEBPACK_IMPORTED_MODULE_28__["MessagesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                primeng_accordion__WEBPACK_IMPORTED_MODULE_4__["AccordionModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputTextModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
                primeng_password__WEBPACK_IMPORTED_MODULE_9__["PasswordModule"],
                primeng_dataview__WEBPACK_IMPORTED_MODULE_12__["DataViewModule"],
                primeng_paginator__WEBPACK_IMPORTED_MODULE_13__["PaginatorModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_14__["DropdownModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_14__["PanelModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_15__["DialogModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_18__["TableModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_14__["DataTableModule"],
                primeng_panelmenu__WEBPACK_IMPORTED_MODULE_19__["PanelMenuModule"],
                primeng_menu__WEBPACK_IMPORTED_MODULE_21__["MenuModule"],
                primeng_fieldset__WEBPACK_IMPORTED_MODULE_24__["FieldsetModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_30__["ToastModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                // ConfirmDialogModule,
                // ConfirmationService,
                // ToastModule,
                // MessagesModule,
                // MessageModule,
                // ShowHidePasswordModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"].forRoot([
                    {
                        path: 'allCompanies',
                        component: _components_admin_area_admin_area_component__WEBPACK_IMPORTED_MODULE_17__["AdminAreaComponent"]
                    },
                    {
                        path: 'addCompany',
                        component: _components_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_3__["CreateCompanyComponent"]
                    },
                    {
                        path: 'getCompany',
                        component: _components_get_company_by_id_get_company_by_id_component__WEBPACK_IMPORTED_MODULE_23__["GetCompanyByIdComponent"]
                    },
                    {
                        path: 'allCustomers',
                        component: _components_admin_area_customer_admin_area_customer_component__WEBPACK_IMPORTED_MODULE_25__["AdminAreaCustomerComponent"]
                    },
                    {
                        path: 'addCustomer',
                        component: _components_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_27__["CreateCustomerComponent"]
                    },
                    {
                        path: 'getCustomer',
                        component: _components_get_customer_by_id_get_customer_by_id_component__WEBPACK_IMPORTED_MODULE_26__["GetCustomerByIdComponent"]
                    },
                    {
                        path: '',
                        redirectTo: '/allCompanies',
                        pathMatch: 'full'
                    }
                ])
                // SplitButtonModule
            ],
            providers: [_services_web_api_admin_service__WEBPACK_IMPORTED_MODULE_10__["WebApiAdminService"], primeng_api__WEBPACK_IMPORTED_MODULE_31__["MessageService"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_29__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_29__["HashLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/admin-area-customer/admin-area-customer.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/admin-area-customer/admin-area-customer.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".field-icon {\r\n  float: right;\r\n  margin-left: -25px;\r\n  margin-top: -25px;\r\n  position: relative;\r\n  z-index: 2;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/admin-area-customer/admin-area-customer.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/admin-area-customer/admin-area-customer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <p-fieldset [legend]=\"caption\">\n     <p-table [columns]=\"cols\" [value]=\"customers\" selectionMode=\"single\" [paginator]=\"true\" [(selection)]=\"selectedCustomer\" (onRowSelect)=\"onRowSelect($event)\"\n     [rows]=\"20\" [resizableColumns]=\"true\">\n      <ng-template pTemplate=\"caption\">\n          {{ numOfCustomers }} Listed Customers\n        </ng-template>\n      <ng-template pTemplate=\"header\">\n          <tr>\n              <th *ngFor=\"let col of cols\" [pSortableColumn]=\"col.field\" pResizableColumn>\n              {{ col.displayName }}\n              <p-sortIcon [field]=\"col.field\"></p-sortIcon>\n              </th>\n          </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n          <tr [pSelectableRow]=\"rowData\">\n              <td *ngFor=\"let col of columns\">\n                  <div *ngIf=\"col.displayName==='Password'\">****************</div>\n                  <div *ngIf=\"col.displayName!=='Password'\">{{rowData[col.field]}}</div>\n                </td>\n          </tr>\n      </ng-template>\n      <ng-template pTemplate=\"summary\" let-rowData>\n          <div style=\"text-align:left\">\n              <button pButton class=\"ui-button-rounded\" type=\"button\" pi-times icon=\"pi pi-plus\" (click)=\"showDialogToAdd()\" label=\"Add\"></button>\n          </div>\n      </ng-template>\n    </p-table>\n    <span>*For update/delete a record please select a row</span>\n    </p-fieldset>\n    </div>\n    <p-dialog id=\"customerDialog\" header=\"Customer Details\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [width]=\"500\"\n[dismissableMask]=\"true\">\n <br>\n    <form [formGroup]=\"createCustomerDialogForm\">\n        <div class=\"form-group\" [class.has-error]=\"createCustomerDialogForm.controls['custName'].invalid && createCustomerDialogForm.controls['custName'].touched\"\n        [class.has-success]=\"createCustomerDialogForm.controls['custName'].valid && createCustomerDialogForm.controls['custName'].touched\">\n        <span class=\"ui-float-label\">\n          <input id=\"custName\" type=\"text\" formControlName=\"custName\" class=\"form-control\" name=\"custName\" [(ngModel)]=\"customer.custName\"\n           pInputText>\n          <label for=\"custName\" class=\"control-label\">Name</label>\n        </span>\n        <span class=\"help-block\" *ngIf=\"createCustomerDialogForm.controls['custName'].invalid && createCustomerDialogForm.controls['custName'].touched\">\n            Name Is Required</span>\n      </div><br>\n\n      <div class=\"form-group\" [class.has-error]=\"createCustomerDialogForm.controls['password'].invalid && createCustomerDialogForm.controls['password'].touched\"\n      [class.has-success]=\"createCustomerDialogForm.controls['password'].valid && createCustomerDialogForm.controls['password'].touched\">\n      <span class=\"ui-float-label\">\n        <input id=\"password\" type=\"password\" formControlName=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"customer.password\"\n         pInputText>\n        <label for=\"password\" class=\"control-label\">Password</label>\n      </span>\n      <span id=\"hideShowPassword\" toggle=\"#password\" class=\"pi pi-pw pi-eye field-icon toggle-password\"></span>\n      <span class=\"help-block\" *ngIf=\"createCustomerDialogForm.controls['password'].invalid && createCustomerDialogForm.controls['password'].touched\">\n          Password Is Required\n      </span>\n    </div><br>\n\n  <p-footer>\n      <div class=\"ui-dialog-buttonpane ui-helper-clearfix ui-button-icon-left\">\n          <button  type=\"button\" pButton class=\"ui-button-rounded ui-button-danger\" icon=\"pi pi-times\" (click)=\"delete()\" [label]=\"DialogLeftButton\"></button>\n          &nbsp;\n          <button type=\"button\" [disabled]=\"!createCustomerDialogForm.valid\" pButton  class=\"ui-button-rounded ui-button-success\" icon=\"pi pi-save\" (click)=\"save()\" [label]=\"DialogRightButton\"></button>\n      </div>\n  </p-footer>\n    </form>\n</p-dialog>\n\n\n\n\n    <!-- <p-dialog header=\"Customer Details\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [width]=\"300\">\n        <div class=\"ui-g ui-fluid\" *ngIf=\"customer\">\n            <div class=\"ui-g-12\" *ngFor=\"let col of cols\">\n                <div class=\"ui-g-4\">\n                    <label for=\"{col.field}\">{{ col.displayName }}</label>\n                </div>\n                <div class=\"ui-g-8\">\n                    <input [type]=\"col.type\" attr.id=\"col.field\" [(ngModel)]=\"customer[col.field]\" [disabled]=\"col.disabled==='true'\"/>\n                </div>\n            </div>\n        </div>\n        <p-footer>\n            <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n                <button type=\"button\" pButton icon=\"pi pi-times\" (click)=\"delete()\" [label]=\"DialogLeftButton\"></button>\n                <button type=\"button\" pButton icon=\"pi pi-save\" (click)=\"save()\" [label]=\"DialogRightButton\"></button>\n            </div>\n        </p-footer>\n    </p-dialog> -->\n\n"

/***/ }),

/***/ "./src/app/components/admin-area-customer/admin-area-customer.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/admin-area-customer/admin-area-customer.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AdminAreaCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAreaCustomerComponent", function() { return AdminAreaCustomerComponent; });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_web_api_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/web-api-admin.service */ "./src/app/services/web-api-admin.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_Customer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Customer */ "./src/app/components/common/Customer.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminAreaCustomerComponent = /** @class */ (function () {
    /*
    At the constructor we inject
    1. FormBuilder for the favor validation of the forms
    2. WebApiAdminService for the favor of the services
    3. MessageService for the favor of the custom messages
    */
    function AdminAreaCustomerComponent(formBuilder, adminService, messageService) {
        this.formBuilder = formBuilder;
        this.adminService = adminService;
        this.messageService = messageService;
        this.customers = [];
        this.caption = 'Customer Main Management Area';
        this.customer = new _common_Customer__WEBPACK_IMPORTED_MODULE_3__["Customer"](null, '', '');
        this.DialogLeftButton = 'Delete';
        this.DialogRightButton = 'Update';
        this.getAllCustomers();
        this.cols = adminService.customerCols;
        this.createCustomerDialogForm = formBuilder.group({
            'custName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])]
        });
    }
    // on the ngOnInit a java script function responsible for covering and uncovering the password
    AdminAreaCustomerComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_5__('#customerDialog').hover(function () {
            jquery__WEBPACK_IMPORTED_MODULE_5__('.toggle-password').click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_5__(this).toggleClass('pi-eye pi-eye-slash');
                var input = jquery__WEBPACK_IMPORTED_MODULE_5__(jquery__WEBPACK_IMPORTED_MODULE_5__(this).attr('toggle'));
                if (input.attr('type') === 'password') {
                    input.attr('type', 'text');
                }
                else {
                    input.attr('type', 'password');
                }
            });
        });
        // this.cols = [
        //   { displayName: 'Id',        field: 'id',        type: 'number'},
        //   { displayName: 'Name',      field: 'custName' , type: 'text'  },
        //   { displayName: 'Password',  field: 'password' , type: 'text'  }
        // ];
    };
    // When this method is activated a pop up window is opening and a new customer can be added
    AdminAreaCustomerComponent.prototype.showDialogToAdd = function () {
        this.newCustomer = true;
        this.customer = new _common_Customer__WEBPACK_IMPORTED_MODULE_3__["Customer"](null, '', '');
        this.displayDialog = true;
        this.createCustomerDialogForm.reset();
        this.disabledInputs('Add');
        this.DialogLeftButton = 'Cancel';
        this.DialogRightButton = 'Save';
    };
    // When this method is activated a pop up window is opening and a new customer can be edited
    AdminAreaCustomerComponent.prototype.onRowSelect = function (event) {
        this.newCustomer = false;
        this.customer = this.cloneCustomer(event.data);
        this.displayDialog = true;
        this.disabledInputs('Update');
        this.DialogLeftButton = 'Delete';
        this.DialogRightButton = 'Update';
    };
    // This method is activated from onRowSelect in order to present the edited customer
    AdminAreaCustomerComponent.prototype.cloneCustomer = function (cust) {
        var tempCust = new _common_Customer__WEBPACK_IMPORTED_MODULE_3__["Customer"](null, '', '');
        // tslint:disable-next-line:forin
        for (var prop in cust) {
            tempCust[prop] = cust[prop];
        }
        return tempCust;
    };
    // This method responsible for enabling and disabling editable inputs
    AdminAreaCustomerComponent.prototype.disabledInputs = function (source) {
        this.createCustomerDialogForm.disable();
        this.createCustomerDialogForm.get('password').enable();
        if (source === 'Add') {
            this.createCustomerDialogForm.enable();
        }
    };
    /* This method responsible to save the data in two cases:
       1. When a new customer being added the addNewCustomerService service is activated
       2. When an existing customer being edited than the updateCustomerService service is activated
    */
    AdminAreaCustomerComponent.prototype.save = function () {
        var _this = this;
        this.customerName = this.customer.custName;
        if (this.newCustomer) {
            this.adminService.addNewCustomerService(this.customer).subscribe(function (resp) {
                _this.getAllCustomers();
                _this.messageService.add({ severity: 'success', summary: 'Customer Was Added', detail: _this.customerName +
                        ' Was Added Successfully' });
            }, function (error) {
                _this.messageService.add({ severity: 'error', summary: 'Customer Was\'t Added', detail: error._body });
            });
        }
        else {
            this.adminService.updateCustomerService(this.customer).subscribe(function () {
                _this.getAllCustomers();
                _this.messageService.add({ severity: 'success', summary: 'Customer Was Updated', detail: _this.customerName +
                        ' Was Updated Successfully' });
            }, function (error) {
                _this.messageService.add({ severity: 'error', summary: 'Customer Was\'t Updated', detail: error._body });
            });
        }
        // this.customer = null;
        this.displayDialog = false;
    };
    // When a customer is deleted than this method is activated and it activate the deleteCustomerService service
    AdminAreaCustomerComponent.prototype.delete = function () {
        var _this = this;
        this.customerName = this.customer.custName;
        if (!this.newCustomer) {
            this.adminService.deleteCustomerService(this.selectedCustomer).subscribe(function () {
                _this.getAllCustomers();
                _this.messageService.add({ severity: 'success', summary: 'Customer Was Deleted', detail: _this.customerName +
                        ' Was Deleted Successfully' });
            }, function (error) {
                _this.messageService.add({ severity: 'error', summary: 'Customer Was\'t Deleted', detail: error._body });
            });
        }
        // this.customer = null;
        this.displayDialog = false;
    };
    // This method is activated from the constructor - in order to intialize the data for the first time
    AdminAreaCustomerComponent.prototype.getAllCustomers = function () {
        var _this = this;
        this.adminService.getAllCustomersService().subscribe(function (resp) {
            _this.customers = resp.json();
            _this.numOfCustomers = _this.customers.length;
            // Make default sort of companies array
            _this.sortArry(_this.customers);
        }, function (error) {
            _this.customers = [];
            _this.messageService.add({ severity: 'error', summary: 'Data Unavailable', detail: error._body });
        });
    };
    // This function responsible to sort the array accoring to the customer name
    AdminAreaCustomerComponent.prototype.sortArry = function (arryToSort) {
        arryToSort.sort(function (a, b) {
            if (a.custName < b.custName) {
                return -1;
            }
            else if (a.custName > b.custName) {
                return 1;
            }
            else {
                return 0;
            }
        });
    };
    AdminAreaCustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-admin-area-customer',
            template: __webpack_require__(/*! ./admin-area-customer.component.html */ "./src/app/components/admin-area-customer/admin-area-customer.component.html"),
            styles: [__webpack_require__(/*! ./admin-area-customer.component.css */ "./src/app/components/admin-area-customer/admin-area-customer.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _services_web_api_admin_service__WEBPACK_IMPORTED_MODULE_1__["WebApiAdminService"], primeng_api__WEBPACK_IMPORTED_MODULE_0__["MessageService"]])
    ], AdminAreaCustomerComponent);
    return AdminAreaCustomerComponent;
}());



/***/ }),

/***/ "./src/app/components/admin-area/admin-area.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/admin-area/admin-area.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".field-icon {\r\n  float: right;\r\n  margin-left: -25px;\r\n  margin-top: -25px;\r\n  position: relative;\r\n  z-index: 2;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/admin-area/admin-area.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/admin-area/admin-area.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<p-fieldset [legend]=\"caption\">\n <p-table [columns]=\"cols\" [value]=\"companies\" selectionMode=\"single\" [paginator]=\"true\" [(selection)]=\"selectedCompany\" (onRowSelect)=\"onRowSelect($event)\"\n [rows]=\"20\" [resizableColumns]=\"true\">\n <ng-template pTemplate=\"caption\">\n  {{ numOfCompanies }} Listed Companies\n  </ng-template>\n  <ng-template pTemplate=\"header\">\n      <tr>\n          <th *ngFor=\"let col of cols\" [pSortableColumn]=\"col.field\" pResizableColumn>\n          {{ col.displayName }}\n          <p-sortIcon [field]=\"col.field\"></p-sortIcon>\n          </th>\n      </tr>\n  </ng-template>\n  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n      <tr [pSelectableRow]=\"rowData\">\n          <td *ngFor=\"let col of columns\">\n            <div *ngIf=\"col.displayName==='Password'\">****************</div>\n            <div *ngIf=\"col.displayName!=='Password'\">{{rowData[col.field]}}</div>\n          </td>\n      </tr>\n  </ng-template>\n  <ng-template pTemplate=\"summary\" let-rowData>\n      <div style=\"text-align:left\">\n          <button pButton class=\"ui-button-rounded\" type=\"button\"  icon=\"pi pi-plus\" (click)=\"showDialogToAdd()\" label=\"Add\"></button>\n      </div>\n  </ng-template>\n</p-table>\n<span>*For update/delete a record please select a row</span>\n</p-fieldset>\n</div>\n<p-dialog id=\"compnayDialog\" header=\"Company Details\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [width]=\"500\"\n[dismissableMask]=\"true\">\n <br>\n    <form [formGroup]=\"createCompanyDialogForm\">\n        <div class=\"form-group\" [class.has-error]=\"createCompanyDialogForm.controls['compName'].invalid && createCompanyDialogForm.controls['compName'].touched\"\n        [class.has-success]=\"createCompanyDialogForm.controls['compName'].valid && createCompanyDialogForm.controls['compName'].touched\">\n        <span class=\"ui-float-label\">\n          <input id=\"compName\" type=\"text\" formControlName=\"compName\" class=\"form-control\" name=\"compName\" [(ngModel)]=\"company.compName\"\n           pInputText>\n          <label for=\"compName\" class=\"control-label\">Name</label>\n        </span>\n        <span class=\"help-block\" *ngIf=\"createCompanyDialogForm.controls['compName'].invalid && createCompanyDialogForm.controls['compName'].touched\">\n            Name Is Required</span>\n      </div><br>\n\n      <div class=\"form-group\" [class.has-error]=\"createCompanyDialogForm.controls['password'].invalid && createCompanyDialogForm.controls['password'].touched\"\n      [class.has-success]=\"createCompanyDialogForm.controls['password'].valid && createCompanyDialogForm.controls['password'].touched\">\n      <span class=\"ui-float-label\">\n        <input id=\"password\" type=\"password\" formControlName=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"company.password\"\n        pPassword>\n        <label for=\"password\" class=\"control-label\">Password</label>\n      </span>\n      <span toggle=\"#password\" class=\"pi pi-pw pi-eye field-icon toggle-password\"></span>\n      <span class=\"help-block\" *ngIf=\"createCompanyDialogForm.controls['password'].invalid && createCompanyDialogForm.controls['password'].touched\">\n          Password Is Required\n        </span>\n    </div><br>\n\n    <div class=\"form-group\" [class.has-error]=\"createCompanyDialogForm.controls['email'].invalid && createCompanyDialogForm.controls['email'].touched\"\n    [class.has-success]=\"createCompanyDialogForm.controls['email'].valid && createCompanyDialogForm.controls['email'].touched\">\n    <span class=\"ui-float-label\">\n      <input id=\"email\" type=\"text\" formControlName=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"company.email\"\n       pInputText>\n      <label for=\"email\" class=\"control-label\">Email</label>\n    </span>\n    <span class=\"help-block\" *ngIf=\"createCompanyDialogForm.controls['email'].invalid && createCompanyDialogForm.controls['email'].touched\">\n        <span class=\"help-block\" *ngIf=\"createCompanyDialogForm.get('email').errors['required']\">\n        Email Is Required\n    </span>\n        <span class=\"help-block\" *ngIf=\"createCompanyDialogForm.get('email').errors['email']\">\n            Please Enter A vaild Email\n        </span>\n      </span>\n  </div><br>\n  <p-footer>\n      <div class=\"ui-dialog-buttonpane ui-helper-clearfix ui-button-icon-left\">\n          <button  type=\"button\" pButton class=\"ui-button-rounded ui-button-danger\" icon=\"pi pi-times\" (click)=\"delete()\" [label]=\"DialogLeftButton\"></button>\n          &nbsp;\n          <button type=\"button\" [disabled]=\"!createCompanyDialogForm.valid\" pButton  class=\"ui-button-rounded ui-button-success\" icon=\"pi pi-save\" (click)=\"save()\" [label]=\"DialogRightButton\"></button>\n      </div>\n  </p-footer>\n    </form>\n</p-dialog>\n\n<!-- <p-dialog header=\"Company Details\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [width]=\"300\">\n    <div class=\"ui-g ui-fluid\" *ngIf=\"company\">\n        <div class=\"ui-g-12\" *ngFor=\"let col of cols\">\n            <div class=\"ui-g-4\">\n                <label for=\"{col.field}\">{{ col.displayName }}</label>\n            </div>\n            <div class=\"ui-g-8\">\n                <input [type]=\"col.type\" attr.id=\"col.field\" [(ngModel)]=\"company[col.field]\" required [disabled]=\"col.disabled==='true'\"/>\n            </div>\n        </div>\n    </div>\n    <p-footer>\n        <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n            <button type=\"button\" pButton icon=\"pi pi-times\" (click)=\"delete()\" [label]=\"DialogLeftButton\"></button>\n            <button type=\"button\" pButton icon=\"pi pi-save\" (click)=\"save()\" [label]=\"DialogRightButton\"></button>\n        </div>\n    </p-footer>\n</p-dialog> -->\n\n"

/***/ }),

/***/ "./src/app/components/admin-area/admin-area.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/admin-area/admin-area.component.ts ***!
  \***************************************************************/
/*! exports provided: AdminAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAreaComponent", function() { return AdminAreaComponent; });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_web_api_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/web-api-admin.service */ "./src/app/services/web-api-admin.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_Company__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Company */ "./src/app/components/common/Company.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminAreaComponent = /** @class */ (function () {
    // emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
    /*
    At the constructor we inject
    1. FormBuilder for the favor validation of the forms
    2. WebApiAdminService for the favor of the services
    3. MessageService for the favor of the custom messages
    */
    function AdminAreaComponent(formBuilder, adminService, messageService) {
        this.formBuilder = formBuilder;
        this.adminService = adminService;
        this.messageService = messageService;
        // Define variables
        this.companies = [];
        this.caption = 'Company Main Management Area';
        this.company = new _common_Company__WEBPACK_IMPORTED_MODULE_3__["Company"](null, '', '', '');
        this.DialogLeftButton = 'Delete';
        this.DialogRightButton = 'Update';
        this.getAllCompanies();
        this.cols = adminService.companyCols;
        this.createCompanyDialogForm = formBuilder.group({
            'compName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email])]
        });
    }
    // on the ngOnInit a java script function responsible for covering and uncovering the password
    AdminAreaComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_5__('#compnayDialog').hover(function () {
            jquery__WEBPACK_IMPORTED_MODULE_5__('.toggle-password').click(function () {
                var input = jquery__WEBPACK_IMPORTED_MODULE_5__(jquery__WEBPACK_IMPORTED_MODULE_5__(this).attr('toggle'));
                jquery__WEBPACK_IMPORTED_MODULE_5__(this).toggleClass('pi-eye pi-eye-slash');
                if (input.attr('type') === 'password') {
                    input.attr('type', 'text');
                }
                else {
                    input.attr('type', 'password');
                }
            });
        });
        // this.cols = [
        //   { displayName: 'Id',        field: 'id',        type: 'number' },
        //   { displayName: 'Name',      field: 'compName' , type: 'text'   },
        //   { displayName: 'Password',  field: 'password' , type: 'text'   },
        //   { displayName: 'Email',     field: 'email',     type: 'email'  },
        // ];
    };
    // When this method is activated a pop up window is opening and a new company can be added
    AdminAreaComponent.prototype.showDialogToAdd = function () {
        this.newCompany = true;
        this.company = new _common_Company__WEBPACK_IMPORTED_MODULE_3__["Company"](null, '', '', '');
        this.displayDialog = true;
        this.createCompanyDialogForm.reset();
        this.disabledInputs('Add');
        this.DialogLeftButton = 'Cancel';
        this.DialogRightButton = 'Save';
        // const elem = $('#compnayDialog').find('.toggle-password');
        // elem.click(function() {
        //   $(this).removeClass ('pi-eye-slash');
        //   $(this).addClass ('pi-eye');
        //   $($(this).attr('toggle')).attr('type', 'password');
        // });
    };
    // When this method is activated a pop up window is opening and a new company can be edited
    AdminAreaComponent.prototype.onRowSelect = function (event) {
        this.newCompany = false;
        // this.createCompanyDialogForm.reset();
        this.company = this.cloneCompany(event.data);
        this.displayDialog = true;
        this.disabledInputs('Update');
        this.DialogLeftButton = 'Delete';
        this.DialogRightButton = 'Update';
    };
    // This method is activated from onRowSelect in order to present the edited company
    AdminAreaComponent.prototype.cloneCompany = function (comp) {
        var tempComp = new _common_Company__WEBPACK_IMPORTED_MODULE_3__["Company"](null, '', '', '');
        // tslint:disable-next-line:forin
        for (var prop in comp) {
            tempComp[prop] = comp[prop];
        }
        return tempComp;
    };
    // This method responsible for enabling and disabling editable inputs
    AdminAreaComponent.prototype.disabledInputs = function (source) {
        this.createCompanyDialogForm.disable();
        this.createCompanyDialogForm.get('password').enable();
        this.createCompanyDialogForm.get('email').enable();
        if (source === 'Add') {
            this.createCompanyDialogForm.enable();
        }
    };
    /* This method responsible to save the data in two cases:
       1. When a new company being added the ddNewCompanyService service is activated
       2. When an existing company being edited than the updateCompanyService service is activated
    */
    AdminAreaComponent.prototype.save = function () {
        var _this = this;
        this.companyName = this.company.compName;
        if (this.newCompany) {
            this.adminService.addNewCompanyService(this.company).subscribe(function (resp) {
                _this.getAllCompanies();
                _this.messageService.add({ severity: 'success', summary: 'Company Was Added', detail: _this.companyName +
                        ' Was Added Successfully' });
            }, function (error) {
                _this.messageService.add({ severity: 'error', summary: 'Company Was\'t Added', detail: error._body });
            });
        }
        else {
            this.adminService.updateCompanyService(this.company).subscribe(function (resp) {
                _this.getAllCompanies();
                _this.messageService.add({ severity: 'success', summary: 'Company Was Updated', detail: _this.companyName +
                        ' Was Updated Successfully' });
            }, function (error) {
                _this.messageService.add({ severity: 'error', summary: 'Company Was\'t Updated', detail: error._body });
            });
        }
        // this.company = null;
        this.displayDialog = false;
    };
    // When a company is deleted than this method is activated and it activate the deleteCompanyService service
    AdminAreaComponent.prototype.delete = function () {
        var _this = this;
        this.companyName = this.company.compName;
        if (!this.newCompany) {
            this.adminService.deleteCompanyService(this.selectedCompany).subscribe(function (resp) {
                _this.getAllCompanies();
                _this.messageService.add({ severity: 'success', summary: 'Company Was Deleted', detail: _this.companyName +
                        ' Was Deleted Successfully' });
            }, function (error) {
                _this.messageService.add({ severity: 'error', summary: 'Company Was\'t Deleted', detail: error._body });
            });
        }
        // this.company = null;
        this.displayDialog = false;
    };
    // This method is activated from the constructor - in order to intialize the data for the first time
    AdminAreaComponent.prototype.getAllCompanies = function () {
        var _this = this;
        this.adminService.getAllCompaniesService().subscribe(function (resp) {
            _this.companies = resp.json();
            _this.numOfCompanies = _this.companies.length;
            // Make default sort of companies array
            _this.sortArry(_this.companies);
        }, function (error) {
            _this.companies = [];
            _this.messageService.add({ severity: 'error', summary: 'Data Unavailable', detail: error._body });
        });
    };
    // This function responsible to sort the array accoring to the company name
    AdminAreaComponent.prototype.sortArry = function (arryToSort) {
        arryToSort.sort(function (a, b) {
            if (a.compName < b.compName) {
                return -1;
            }
            else if (a.compName > b.compName) {
                return 1;
            }
            else {
                return 0;
            }
        });
    };
    AdminAreaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-admin-area',
            template: __webpack_require__(/*! ./admin-area.component.html */ "./src/app/components/admin-area/admin-area.component.html"),
            styles: [__webpack_require__(/*! ./admin-area.component.css */ "./src/app/components/admin-area/admin-area.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _services_web_api_admin_service__WEBPACK_IMPORTED_MODULE_1__["WebApiAdminService"], primeng_api__WEBPACK_IMPORTED_MODULE_0__["MessageService"]])
    ], AdminAreaComponent);
    return AdminAreaComponent;
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

/***/ "./src/app/components/common/header/header.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/common/header/header.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n  margin-top: 10px;\r\n  background: transparent;\r\n}\r\n\r\n.navbar-brand {\r\n  position: absolute;\r\n  width: 100%;\r\n  left: 0;\r\n  top: 0;\r\n  text-align: center;\r\n  margin: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/common/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/common/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n    <div class=\"container-fluid\">\n\t    <div class=\"navbar-header\">\n      <div class=\"navbar-brand\">CouponSystem</div>\n    </div>\n        <div id=\"navbar\" class=\"navbar-collapse collapse\">\n            <ul class=\"nav navbar-nav navbar-left\">\n                <li>\n                    <!-- <p-menu #menu [popup]=\"true\" [model]=\"items\"></p-menu> -->\n                    <p-menu [showTransitionOptions]=\"'0ms'\" [hideTransitionOptions]=\"'0ms'\" #menu [popup]=\"true\" [model]=\"items\"></p-menu>\n                    <a class=\"glyphicon glyphicon-list\"  label=\"Show\" (click)=\"menu.toggle($event)\"></a>\n                </li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li><a><span class=\"glyphicon glyphicon-user\"></span> Hello Admin</a></li>\n                <li><a (click)=\"logout()\"><span class=\"glyphicon glyphicon-off\"></span>Log Out</a></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/common/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/common/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_web_api_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/web-api-admin.service */ "./src/app/services/web-api-admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { MenuItem } from 'primeng/primeng';



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(adminService, messageService) {
        this.adminService = adminService;
        this.messageService = messageService;
        this.prefixLogOutUrl = adminService.prefixLogOutUrl;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.items = [
            {
                label: 'Company',
                items: [
                    { label: 'Manage Area', icon: 'pi pi-fw pi-file', routerLink: '/allCompanies' },
                    { label: 'Company {Id}', icon: 'pi pi-fw pi-file', routerLink: '/getCompany' },
                    { label: 'Add {Single}', icon: 'pi pi-fw pi-plus', routerLink: '/addCompany' },
                ]
            },
            {
                label: 'Customer',
                items: [
                    { label: 'Manage Area', icon: 'pi pi-fw pi-file', routerLink: '/allCustomers' },
                    { label: 'Customer {Id}', icon: 'pi pi-fw pi-file', routerLink: '/getCustomer' },
                    { label: 'Add {Single}', icon: 'pi pi-fw pi-plus', routerLink: '/addCustomer' }
                ]
            }
        ];
    };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.adminService.logOutService(this.request, this.response).subscribe(function (resp) {
            _this.messageService.add({ severity: 'success', summary: 'LogOut', detail: 'You Were Logged Out Successfully' });
            window.location.href = _this.prefixLogOutUrl;
        }, function (error) {
            _this.messageService.add({ severity: 'success', summary: 'LogOut', detail: 'Logged Out Failed' });
        });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/common/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/common/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_web_api_admin_service__WEBPACK_IMPORTED_MODULE_2__["WebApiAdminService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/common/messages/messages.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/common/messages/messages.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-toast position=\"center\" key=\"c\" (onClose)=\"onReject()\" [modal]=\"true\" [baseZIndex]=\"5000\">\n  <ng-template let-message pTemplate=\"message\">\n      <div style=\"text-align: center\">\n          <i class=\"pi pi-exclamation-triangle\" style=\"font-size: 3em\"></i>\n          <h3>{{message.summary}}</h3>\n          <p>{{message.detail}}</p>\n      </div>\n      <div class=\"ui-g ui-fluid\">\n          <div class=\"ui-g-6\">\n              <button type=\"button\" pButton (click)=\"onConfirm()\" label=\"Yes\" class=\"ui-button-success\"></button>\n          </div>\n          <div class=\"ui-g-6\">\n              <button type=\"button\" pButton (click)=\"onReject()\" label=\"No\" class=\"ui-button-secondary\"></button>\n          </div>\n      </div>\n  </ng-template>\n</p-toast>\n"

/***/ }),

/***/ "./src/app/components/common/messages/messages.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/common/messages/messages.component.ts ***!
  \******************************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.onConfirm = function () {
        this.messageService.clear('c');
    };
    MessagesComponent.prototype.onReject = function () {
        this.messageService.clear('c');
    };
    MessagesComponent.prototype.clear = function () {
        this.messageService.clear();
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/components/common/messages/messages.component.html")
        }),
        __metadata("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/components/create-company/create-company.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/create-company/create-company.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".field-icon {\r\n  float: right;\r\n  margin-left: -25px;\r\n  margin-top: -25px;\r\n  position: relative;\r\n  z-index: 2;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/create-company/create-company.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/create-company/create-company.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<p-fieldset [legend]=\"caption\">\n    <form [formGroup]=\"createCompanyForm\">\n        <div class=\"form-group\" [class.has-error]=\"createCompanyForm.controls['compName'].invalid && createCompanyForm.controls['compName'].touched\"\n        [class.has-success]=\"createCompanyForm.controls['compName'].valid && createCompanyForm.controls['compName'].touched\">\n      <span class=\"ui-float-label\">\n          <input id=\"compName\" type=\"text\" formControlName=\"compName\" class=\"form-control\" name=\"compName\" [(ngModel)]=\"newCompany.compName\"\n           pInputText>\n          <label for=\"compName\" class=\"control-label\">Name</label>\n        </span>\n        <span class=\"help-block\" *ngIf=\"createCompanyForm.controls['compName'].invalid && createCompanyForm.controls['compName'].touched\">\n            Name Is Required</span>\n      </div><br>\n      <div class=\"form-group\" [class.has-error]=\"createCompanyForm.controls['password'].invalid && createCompanyForm.controls['password'].touched\"\n      [class.has-success]=\"createCompanyForm.controls['password'].valid && createCompanyForm.controls['password'].touched\">\n        <span class=\"ui-float-label\">\n            <input id=\"password\"  type=\"password\" formControlName=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"newCompany.password\" pPassword>\n            <label for=\"password\" class=\"control-label\">Password</label>\n        </span>\n        <span toggle=\"#password\" class=\"pi pi-pw pi-eye field-icon toggle-password\"></span>\n        <span class=\"help-block\" *ngIf=\"createCompanyForm.controls['password'].invalid && createCompanyForm.controls['password'].touched\">\n            Password Is Required\n          </span>\n    </div><br>\n    <div class=\"form-group\" [class.has-error]=\"createCompanyForm.controls['email'].invalid && createCompanyForm.controls['email'].touched\"\n    [class.has-success]=\"createCompanyForm.controls['email'].valid && createCompanyForm.controls['email'].touched\">\n      <span class=\"ui-float-label\">\n          <input id=\"email\" type=\"email\" formControlName=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"newCompany.email\" >\n          <label for=\"email\" class=\"control-label\">Email</label>\n      </span>\n      <span class=\"help-block\" *ngIf=\"createCompanyForm.controls['email'].invalid && createCompanyForm.controls['email'].touched\">\n          <span class=\"help-block\" *ngIf=\"createCompanyForm.get('email').errors['required']\">\n          Email Is Required\n      </span>\n          <span class=\"help-block\" *ngIf=\"createCompanyForm.get('email').errors['email']\">\n              Please Enter A vaild Email\n          </span>\n        </span>\n    </div>\n    <button pButton  [disabled]=\"!newCompany.compName\"  type=\"submit\" class=\"ui-button-rounded\" label=\"Add Company\" (click)=\"addNewCompany()\"></button>\n  </form>\n  </p-fieldset>\n</div>\n"

/***/ }),

/***/ "./src/app/components/create-company/create-company.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/create-company/create-company.component.ts ***!
  \***********************************************************************/
/*! exports provided: CreateCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCompanyComponent", function() { return CreateCompanyComponent; });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Company__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../common/Company */ "./src/app/components/common/Company.ts");
/* harmony import */ var _services_web_api_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/web-api-admin.service */ "./src/app/services/web-api-admin.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateCompanyComponent = /** @class */ (function () {
    /*
  At the constructor we inject
  1. FormBuilder for the favor validation of the forms
  2. WebApiAdminService for the favor of the services
  3. MessageService for the favor of the custom messages
  */
    function CreateCompanyComponent(formBuilder, adminService, messageService) {
        this.formBuilder = formBuilder;
        this.adminService = adminService;
        this.messageService = messageService;
        this.newCompany = new _common_Company__WEBPACK_IMPORTED_MODULE_1__["Company"](null, '', '', '');
        this.caption = 'Create A New Company';
        this.cols = adminService.companyCols;
        this.createCompanyForm = formBuilder.group({
            'compName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email])]
        });
    }
    // This method is activated when a new company being added.
    // it gets the all the information from the form and sent it as a company object into the addNewCompanyService service
    CreateCompanyComponent.prototype.addNewCompany = function () {
        var _this = this;
        this.adminService.addNewCompanyService(this.newCompany).subscribe(function (resp) {
            _this.messageService.add({ severity: 'success', summary: 'Company Was Added', detail: _this.newCompany.compName +
                    ' Was Added Successfully' });
        }, function (error) {
            _this.messageService.add({ severity: 'error', summary: 'Company Was\'t Added', detail: error._body });
        });
        this.newCompany = new _common_Company__WEBPACK_IMPORTED_MODULE_1__["Company"](null, '', '', '');
        // this.messageService.clear();
    };
    // on the ngOnInit a java script function responsible for covering and uncovering the password
    CreateCompanyComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_5__('.toggle-password').click(function () {
            jquery__WEBPACK_IMPORTED_MODULE_5__(this).toggleClass('pi-eye pi-eye-slash');
            var input = jquery__WEBPACK_IMPORTED_MODULE_5__(jquery__WEBPACK_IMPORTED_MODULE_5__(this).attr('toggle'));
            if (input.attr('type') === 'password') {
                input.attr('type', 'text');
            }
            else {
                input.attr('type', 'password');
            }
        });
    };
    CreateCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-create-company',
            template: __webpack_require__(/*! ./create-company.component.html */ "./src/app/components/create-company/create-company.component.html"),
            styles: [__webpack_require__(/*! ./create-company.component.css */ "./src/app/components/create-company/create-company.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _services_web_api_admin_service__WEBPACK_IMPORTED_MODULE_2__["WebApiAdminService"], primeng_api__WEBPACK_IMPORTED_MODULE_0__["MessageService"]])
    ], CreateCompanyComponent);
    return CreateCompanyComponent;
}());



/***/ }),

/***/ "./src/app/components/create-customer/create-customer.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/create-customer/create-customer.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".field-icon {\r\n  float: right;\r\n  margin-left: -25px;\r\n  margin-top: -25px;\r\n  position: relative;\r\n  z-index: 2;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/create-customer/create-customer.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/create-customer/create-customer.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <p-fieldset [legend]=\"caption\">\n      <form [formGroup]=\"createCustomerForm\">\n          <div class=\"form-group\" [class.has-error]=\"createCustomerForm.controls['custName'].invalid && createCustomerForm.controls['custName'].touched\"\n          [class.has-success]=\"createCustomerForm.controls['custName'].valid && createCustomerForm.controls['custName'].touched\">\n        <span class=\"ui-float-label\">\n            <input id=\"compName\" type=\"text\" formControlName=\"custName\" class=\"form-control\" name=\"compName\" [(ngModel)]=\"newCustomer.custName\" pInputText>\n            <label for=\"compName\">Name</label>\n        </span>\n        <span class=\"help-block\" *ngIf=\"createCustomerForm.controls['custName'].invalid && createCustomerForm.controls['custName'].touched\">\n            Name Is Required</span>\n      </div><br>\n      <div class=\"form-group\" [class.has-error]=\"createCustomerForm.controls['password'].invalid && createCustomerForm.controls['password'].touched\"\n      [class.has-success]=\"createCustomerForm.controls['password'].valid && createCustomerForm.controls['password'].touched\">\n          <span class=\"ui-float-label\">\n              <input id=\"password\"  type=\"password\" formControlName=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"newCustomer.password\" pPassword>\n              <label for=\"password\">Password</label>\n          </span>\n          <span toggle=\"#password\" class=\"pi pi-pw pi-eye field-icon toggle-password\"></span>\n          <span class=\"help-block\" *ngIf=\"createCustomerForm.controls['password'].invalid && createCustomerForm.controls['password'].touched\">\n              Password Is Required</span>\n      </div><br>\n      <!-- <button pButton  [disabled]=\"!newCustomer.custName\"  type=\"submit\" class=\"ui-button-rounded\" label=\"Add Customer\" (click)=\"addNewCustomer(); AddCustForm.reset()\"></button> -->\n      <button pButton  [disabled]=\"!newCustomer.custName\"  type=\"submit\" class=\"ui-button-rounded\" label=\"Add Customer\" (click)=\"addNewCustomer()\"></button>\n    </form>\n    </p-fieldset>\n  </div>\n"

/***/ }),

/***/ "./src/app/components/create-customer/create-customer.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/create-customer/create-customer.component.ts ***!
  \*************************************************************************/
/*! exports provided: CreateCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCustomerComponent", function() { return CreateCustomerComponent; });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_web_api_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/web-api-admin.service */ "./src/app/services/web-api-admin.service.ts");
/* harmony import */ var _common_Customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../common/Customer */ "./src/app/components/common/Customer.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateCustomerComponent = /** @class */ (function () {
    /*
    At the constructor we inject
    1. FormBuilder for the favor validation of the forms
    2. WebApiAdminService for the favor of the services
    3. MessageService for the favor of the custom messages
    */
    function CreateCustomerComponent(formBuilder, adminService, messageService) {
        this.formBuilder = formBuilder;
        this.adminService = adminService;
        this.messageService = messageService;
        this.newCustomer = new _common_Customer__WEBPACK_IMPORTED_MODULE_2__["Customer"](null, '', '');
        this.caption = 'Create A New Customer';
        this.cols = adminService.customerCols;
        this.createCustomerForm = formBuilder.group({
            'custName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])]
        });
    }
    // This method is activated when a new customer being added.
    // it gets the all the information from the form and sent it as a customer object into the addNewCustomerService service
    CreateCustomerComponent.prototype.addNewCustomer = function () {
        var _this = this;
        this.adminService.addNewCustomerService(this.newCustomer).subscribe(function (resp) {
            _this.messageService.add({ severity: 'success', summary: 'Customer Was Added', detail: _this.newCustomer.custName +
                    ' Was Added Successfully' });
        }, function (error) {
            _this.messageService.add({ severity: 'error', summary: 'Customer Was\'t Added', detail: error._body });
        });
        this.newCustomer = new _common_Customer__WEBPACK_IMPORTED_MODULE_2__["Customer"](null, '', '');
    };
    // on the ngOnInit a java script function responsible for covering and uncovering the password
    CreateCustomerComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_5__('.toggle-password').click(function () {
            jquery__WEBPACK_IMPORTED_MODULE_5__(this).toggleClass('pi-eye pi-eye-slash');
            var input = jquery__WEBPACK_IMPORTED_MODULE_5__(jquery__WEBPACK_IMPORTED_MODULE_5__(this).attr('toggle'));
            if (input.attr('type') === 'password') {
                input.attr('type', 'text');
            }
            else {
                input.attr('type', 'password');
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('AddCustForm'),
        __metadata("design:type", Object)
    ], CreateCustomerComponent.prototype, "AddCustForm", void 0);
    CreateCustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-create-customer',
            template: __webpack_require__(/*! ./create-customer.component.html */ "./src/app/components/create-customer/create-customer.component.html"),
            styles: [__webpack_require__(/*! ./create-customer.component.css */ "./src/app/components/create-customer/create-customer.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _services_web_api_admin_service__WEBPACK_IMPORTED_MODULE_1__["WebApiAdminService"], primeng_api__WEBPACK_IMPORTED_MODULE_0__["MessageService"]])
    ], CreateCustomerComponent);
    return CreateCustomerComponent;
}());



/***/ }),

/***/ "./src/app/components/get-all-companies/get-all-companies.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/get-all-companies/get-all-companies.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/get-all-companies/get-all-companies.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/get-all-companies/get-all-companies.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n"

/***/ }),

/***/ "./src/app/components/get-all-companies/get-all-companies.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/get-all-companies/get-all-companies.component.ts ***!
  \*****************************************************************************/
/*! exports provided: GetAllCompaniesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllCompaniesComponent", function() { return GetAllCompaniesComponent; });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_web_api_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/web-api-admin.service */ "./src/app/services/web-api-admin.service.ts");
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



var GetAllCompaniesComponent = /** @class */ (function () {
    /*
    At the constructor we inject
    1. WebApiAdminService for the favor of the services
    2. MessageService for the favor of the custom messages
    */
    function GetAllCompaniesComponent(webApiAdminService, messageService) {
        this.webApiAdminService = webApiAdminService;
        this.messageService = messageService;
    }
    GetAllCompaniesComponent.prototype.ngOnInit = function () {
        this.getCompanies();
    };
    GetAllCompaniesComponent.prototype.getCompanies = function () {
        var _this = this;
        this.webApiAdminService.getAllCompaniesService().subscribe(function (resp) {
            _this.companies = resp.json();
        }, function (error) {
            _this.messageService.add({ severity: 'error', summary: 'Data Unavailable', detail: error._body });
        });
    };
    GetAllCompaniesComponent.prototype.deleteCompany = function (company) {
        this.webApiAdminService.deleteCompanyService(company).subscribe(function () { });
        this.getCompanies();
    };
    GetAllCompaniesComponent.prototype.selectCompany = function (event, company) {
        this.selectedCompany = company;
        this.displayDialog = true;
        event.preventDefault();
    };
    GetAllCompaniesComponent.prototype.onSortChange = function (event) {
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
    GetAllCompaniesComponent.prototype.onDialogHide = function () {
        this.selectedCompany = null;
    };
    GetAllCompaniesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-get-all-companies',
            template: __webpack_require__(/*! ./get-all-companies.component.html */ "./src/app/components/get-all-companies/get-all-companies.component.html"),
            styles: [__webpack_require__(/*! ./get-all-companies.component.css */ "./src/app/components/get-all-companies/get-all-companies.component.css")]
        }),
        __metadata("design:paramtypes", [_services_web_api_admin_service__WEBPACK_IMPORTED_MODULE_1__["WebApiAdminService"], primeng_api__WEBPACK_IMPORTED_MODULE_0__["MessageService"]])
    ], GetAllCompaniesComponent);
    return GetAllCompaniesComponent;
}());



/***/ }),

/***/ "./src/app/components/get-company-by-id/get-company-by-id.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/get-company-by-id/get-company-by-id.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/get-company-by-id/get-company-by-id.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/get-company-by-id/get-company-by-id.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <p-fieldset [legend]=\"caption\">\n    <form>\n       <div class=\"form-group\">\n            <span class=\"ui-float-label\">\n                <input id=\"\"  type=\"number\" class=\"form-control\" name=\"id\" [(ngModel)]=\"requestedCompany.id\" pInputText>\n                <label for=\"id\">Company Id</label>\n            </span>\n        </div><br>\n        <div class=\"form-group\">\n            <span class=\"ui-float-label\">\n                <input id=\"compName\" type=\"text\" class=\"form-control\" name=\"compName\" [(ngModel)]=\"requestedCompany.compName\" disabled=\"true\"  pInputText>\n                <label for=\"compName\">Name</label>\n            </span>\n        </div><br>\n        <div class=\"form-group\">\n            <span class=\"ui-float-label\">\n                <input id=\"password\"  type=\"text\" class=\"form-control\" name=\"password\" [(ngModel)]=\"requestedCompany.password\" disabled=\"true\" pPassword>\n                <label for=\"password\">Password</label>\n            </span>\n        </div><br>\n        <div class=\"form-group\">\n          <span class=\"ui-float-label\">\n              <input id=\"email\" type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"requestedCompany.email\" disabled=\"true\" pInputText>\n              <label for=\"email\">Email</label>\n          </span>\n        </div>\n      <span ><button [disabled]=\"!requestedCompany.id\" pButton type=\"submit\" class=\"ui-button-rounded\" label=\"Show\" (click)=\"getCompany(requestedCompany.id)\"></button></span>\n    </form>\n    </p-fieldset>\n  </div>\n"

/***/ }),

/***/ "./src/app/components/get-company-by-id/get-company-by-id.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/get-company-by-id/get-company-by-id.component.ts ***!
  \*****************************************************************************/
/*! exports provided: GetCompanyByIdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCompanyByIdComponent", function() { return GetCompanyByIdComponent; });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Company__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../common/Company */ "./src/app/components/common/Company.ts");
/* harmony import */ var _services_web_api_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/web-api-admin.service */ "./src/app/services/web-api-admin.service.ts");
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




var GetCompanyByIdComponent = /** @class */ (function () {
    /*
    At the constructor we inject
    1. WebApiAdminService for the favor of the services
    2. MessageService for the favor of the custom messages
    */
    function GetCompanyByIdComponent(adminService, messageService) {
        this.adminService = adminService;
        this.messageService = messageService;
        this.requestedCompany = new _common_Company__WEBPACK_IMPORTED_MODULE_1__["Company"](null, '', '', '');
        this.caption = 'Company Information';
        this.inputs = adminService.companyCols;
    }
    // This methos activate getCompanyByIdService and return the infromation from the DB into requestedCompany variable
    GetCompanyByIdComponent.prototype.getCompany = function () {
        var _this = this;
        this.adminService.getCompanyByIdService(this.requestedCompany.id).subscribe(function (resp) {
            _this.requestedCompany = resp.json();
        }, function (error) {
            _this.messageService.add({ severity: 'error', summary: 'Data Unavailable', detail: error._body });
        });
    };
    GetCompanyByIdComponent.prototype.ngOnInit = function () {
        //   this.inputs = [
        //     { displayName: 'Id', field: 'id', type: 'number' , disabled: 'false' },
        //     { displayName: 'Company Name', field: 'compName' , type: 'text' , disabled: 'true'},
        //     { displayName: 'Password', field: 'password' , type: 'text', disabled: 'true'},
        //     { displayName: 'Email', field: 'email', type: 'email', disabled: 'true' },
        //   ];
        // }
    };
    GetCompanyByIdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-get-company-by-id',
            template: __webpack_require__(/*! ./get-company-by-id.component.html */ "./src/app/components/get-company-by-id/get-company-by-id.component.html"),
            styles: [__webpack_require__(/*! ./get-company-by-id.component.css */ "./src/app/components/get-company-by-id/get-company-by-id.component.css")]
        }),
        __metadata("design:paramtypes", [_services_web_api_admin_service__WEBPACK_IMPORTED_MODULE_2__["WebApiAdminService"], primeng_api__WEBPACK_IMPORTED_MODULE_0__["MessageService"]])
    ], GetCompanyByIdComponent);
    return GetCompanyByIdComponent;
}());



/***/ }),

/***/ "./src/app/components/get-customer-by-id/get-customer-by-id.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/get-customer-by-id/get-customer-by-id.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/get-customer-by-id/get-customer-by-id.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/get-customer-by-id/get-customer-by-id.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <p-fieldset [legend]=\"caption\">\n  <form>\n     <div class=\"form-group\">\n          <span class=\"ui-float-label\">\n              <input id=\"\"  type=\"number\" class=\"form-control\" name=\"id\" [(ngModel)]=\"requestedCustomer.id\" pInputText>\n              <label for=\"id\">Company Id</label>\n          </span>\n      </div><br>\n      <div class=\"form-group\">\n          <span class=\"ui-float-label\">\n              <input id=\"compName\" type=\"text\" class=\"form-control\" name=\"compName\" [(ngModel)]=\"requestedCustomer.custName\" disabled=\"true\"  pInputText>\n              <label for=\"compName\">Name</label>\n          </span>\n      </div><br>\n      <div class=\"form-group\">\n          <span class=\"ui-float-label\">\n              <input id=\"password\"  type=\"text\" class=\"form-control\" name=\"password\" [(ngModel)]=\"requestedCustomer.password\" disabled=\"true\" pPassword>\n              <label for=\"password\">Password</label>\n          </span>\n      </div>\n      <br>\n    <span ><button [disabled]=\"!requestedCustomer.id\" pButton type=\"submit\" class=\"ui-button-rounded\" label=\"Show\" (click)=\"getCustomer(requestedCustomer.id)\"></button></span>\n    <!-- <span *ngIf=\"true\"><button pButton type=\"submit\" class=\"ui-button-rounded\" label=\"Update\" (click)=\"getCompany(requestedCompany.id)\"></button></span> -->\n  </form>\n  </p-fieldset>\n</div>\n"

/***/ }),

/***/ "./src/app/components/get-customer-by-id/get-customer-by-id.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/get-customer-by-id/get-customer-by-id.component.ts ***!
  \*******************************************************************************/
/*! exports provided: GetCustomerByIdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCustomerByIdComponent", function() { return GetCustomerByIdComponent; });
/* harmony import */ var _services_web_api_admin_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/web-api-admin.service */ "./src/app/services/web-api-admin.service.ts");
/* harmony import */ var _common_Customer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../common/Customer */ "./src/app/components/common/Customer.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GetCustomerByIdComponent = /** @class */ (function () {
    /*
    At the constructor we inject
    1. WebApiAdminService for the favor of the services
    2. MessageService for the favor of the custom messages
    */
    function GetCustomerByIdComponent(adminService, messageService) {
        this.adminService = adminService;
        this.messageService = messageService;
        this.requestedCustomer = new _common_Customer__WEBPACK_IMPORTED_MODULE_1__["Customer"](null, '', '');
        this.caption = 'Customer Information';
        this.inputs = adminService.customerCols;
    }
    // This methos activate getCustomerByIdService and return the infromation from the DB into requestedCustomer variable
    GetCustomerByIdComponent.prototype.getCustomer = function () {
        var _this = this;
        console.log(this.requestedCustomer.id);
        this.adminService.getCustomerByIdService(this.requestedCustomer.id).subscribe(function (resp) {
            _this.requestedCustomer = resp.json();
        }, function (error) {
            _this.messageService.add({ severity: 'error', summary: 'Data Unavailable', detail: error._body });
        });
    };
    GetCustomerByIdComponent.prototype.ngOnInit = function () {
        // this.inputs = [
        //   { displayName: 'Id', field: 'id', type: 'number' , disabled: 'false' },
        //   { displayName: 'Customer Name', field: 'custName' , type: 'text' , disabled: 'true'},
        //   { displayName: 'Password', field: 'password' , type: 'password', disabled: 'true'}
        // ];
    };
    GetCustomerByIdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-get-customer-by-id',
            template: __webpack_require__(/*! ./get-customer-by-id.component.html */ "./src/app/components/get-customer-by-id/get-customer-by-id.component.html"),
            styles: [__webpack_require__(/*! ./get-customer-by-id.component.css */ "./src/app/components/get-customer-by-id/get-customer-by-id.component.css")]
        }),
        __metadata("design:paramtypes", [_services_web_api_admin_service__WEBPACK_IMPORTED_MODULE_0__["WebApiAdminService"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], GetCustomerByIdComponent);
    return GetCustomerByIdComponent;
}());



/***/ }),

/***/ "./src/app/services/web-api-admin.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/web-api-admin.service.ts ***!
  \***************************************************/
/*! exports provided: WebApiAdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebApiAdminService", function() { return WebApiAdminService; });
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


var WebApiAdminService = /** @class */ (function () {
    function WebApiAdminService(http) {
        this.http = http;
        this.prefixCompanyUrl = 'http://localhost:8080/admin/company/';
        this.prefixCustomerUrl = 'http://localhost:8080/admin/customer/';
        this.prefixLogOutUrl = 'http://localhost:8080/';
        this.companyCols = [
            { displayName: 'Id', field: 'id', type: 'number', disabled: 'false' },
            { displayName: 'Name', field: 'compName', type: 'text', disabled: 'true' },
            { displayName: 'Password', field: 'password', type: 'text', disabled: 'true' },
            { displayName: 'Email', field: 'email', type: 'email', disabled: 'true' }
        ];
        this.customerCols = [
            { displayName: 'Id', field: 'id', type: 'number', disabled: 'false' },
            { displayName: 'Name', field: 'custName', type: 'text', disabled: 'true' },
            { displayName: 'Password', field: 'password', type: 'text', disabled: 'true' }
        ];
    }
    /**********************************************************************************/
    /*********************Services for all the company methods*************************/
    /**********************************************************************************/
    // Get all the companies from the DB
    WebApiAdminService.prototype.getAllCompaniesService = function () {
        // return this.http.get('http://localhost:8080/company/get-all-companies');
        return this.http.get(this.prefixCompanyUrl + 'get-all-companies');
    };
    WebApiAdminService.prototype.getCompanyByIdService = function (id) {
        // return this.http.get('http://localhost:8080/company/get-company/' + id);
        return this.http.get(this.prefixCompanyUrl + 'get-company/' + id);
    };
    // Add new company to the DB
    WebApiAdminService.prototype.addNewCompanyService = function (company) {
        // return this.http.post('http://localhost:8080/company/create-company/', company);
        return this.http.post(this.prefixCompanyUrl + 'create-company/', company);
    };
    // Delete a company to the DB
    WebApiAdminService.prototype.deleteCompanyService = function (company) {
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestOptions"]({
            body: company
        });
        // return this.http.delete ('http://localhost:8080/company/remove-company/' + company.id, options);
        return this.http.delete(this.prefixCompanyUrl + 'remove-company/' + company.id, options);
    };
    WebApiAdminService.prototype.updateCompanyService = function (company) {
        // return this.http.put ('http://localhost:8080/company/update-company/' + company.id, company);
        return this.http.put(this.prefixCompanyUrl + 'update-company/' + company.id, company);
    };
    /**********************************************************************************/
    /*********************Services for all the customer methods*************************/
    /**********************************************************************************/
    // Get all the companies from the DB
    WebApiAdminService.prototype.getAllCustomersService = function () {
        // return this.http.get('http://localhost:8080/customer/get-all-customers');
        return this.http.get(this.prefixCustomerUrl + 'get-all-customers');
    };
    WebApiAdminService.prototype.getCustomerByIdService = function (id) {
        // return this.http.get('http://localhost:8080/customer/get-customer/' + id);
        return this.http.get(this.prefixCustomerUrl + 'get-customer/' + id);
    };
    // Add new company to the DB
    WebApiAdminService.prototype.addNewCustomerService = function (customer) {
        // return this.http.post('http://localhost:8080/customer/create-customer/', customer);
        return this.http.post(this.prefixCustomerUrl + 'create-customer/', customer);
    };
    // Delete a company to the DB
    WebApiAdminService.prototype.deleteCustomerService = function (customer) {
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestOptions"]({
            body: customer
        });
        // return this.http.delete ('http://localhost:8080/customer/remove-customer/' + customer.id, options);
        return this.http.delete(this.prefixCustomerUrl + 'remove-customer/' + customer.id, options);
    };
    WebApiAdminService.prototype.updateCustomerService = function (customer) {
        // return this.http.put ('http://localhost:8080/customer/update-customer/' + customer.id, customer);
        return this.http.put(this.prefixCustomerUrl + 'update-customer/' + customer.id, customer);
    };
    /**********************************************************************************/
    /*********************Services for the logout method*******************************/
    /**********************************************************************************/
    WebApiAdminService.prototype.logOutService = function (request, response) {
        return this.http.post(this.prefixLogOutUrl + 'logout', request, response);
    };
    WebApiAdminService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"]])
    ], WebApiAdminService);
    return WebApiAdminService;
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

module.exports = __webpack_require__(/*! C:\Users\Yehuda.Hizmi\JAVA COURSE\Angular 5\CouponSystemAdmin\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map