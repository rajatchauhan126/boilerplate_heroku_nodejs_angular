(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\" style=\"margin-top: 5px;\">\n            <div class=\"card text-center\">\n                <div class=\"card-header\">\n                    <ul class=\"nav nav-tabs\" role=\"tablist\">\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link active\" data-toggle=\"tab\" [routerLink]=\"['/admin/covid']\">Covid</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" data-toggle=\"tab\" [routerLink]=\"['/admin/games']\">Games</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" data-toggle=\"tab\" [routerLink]=\"['/admin']\">World</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/coviddata/coviddata.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/coviddata/coviddata.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\" style=\"height: 14px;\">\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <h5 style=\"\n                    color: rgb(59, 47, 47);\n                    font-size: 18px;\n                    font-weight: 500;\n                    line-height: 22px;\n                     \" class=\"card-title\"><strong>Change Covid data</strong></h5>\n                    <button style=\"float: right; margin-bottom: 10px;\" class=\"btn btn-primary\" (click)=\"backClicked()\">Go back</button>\n                    <form [formGroup]=\"createPost\" (ngSubmit)=\"onSubmit(createPost.value)\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" id=\"last_updated\" formControlName=\"last_updated\"\n                                placeholder=\"last_updated\">\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" id=\"bangalore_total_cases\"\n                                formControlName=\"bangalore_total_cases\" placeholder=\"bangalore_total_cases\">\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" id=\"bangalore_total_recoverd\"\n                                formControlName=\"bangalore_total_recoverd\" placeholder=\"bangalore_total_recoverd\">\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" id=\"bangalore_total_death\"\n                                formControlName=\"bangalore_total_death\" placeholder=\"bangalore_total_death\">\n                        </div>\n\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" id=\"india_total_cases\"\n                                formControlName=\"india_total_cases\" placeholder=\"india_total_cases\">\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" id=\"india_total_recoverd\"\n                                formControlName=\"india_total_recoverd\" placeholder=\"india_total_recoverd\">\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" id=\"india_total_death\"\n                                formControlName=\"india_total_death\" placeholder=\"india_total_death\">\n                        </div>\n\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" id=\"world_total_cases\"\n                                formControlName=\"world_total_cases\" placeholder=\"world_total_cases\">\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" id=\"world_total_recoverd\"\n                                formControlName=\"world_total_recoverd\" placeholder=\"world_total_recoverd\">\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" id=\"world_total_death\"\n                                formControlName=\"world_total_death\" placeholder=\"world_total_death\">\n                        </div>\n                        <button style=\"float:right; min-width: 100px;\" type=\"submit\" class=\"btn btn-primary btn-sm\">\n                            Post Covid data </button>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/gamesddata/gamesddata.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/gamesddata/gamesddata.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\" style=\"height: 14px;\">\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <h5 style=\"\n                    color: rgb(59, 47, 47);\n                    font-size: 18px;\n                    font-weight: 500;\n                    line-height: 22px;\n                     \" class=\"card-title\"><strong>Add games</strong></h5>\n                    <button style=\"float: right; margin-bottom: 10px;\" class=\"btn btn-primary\" (click)=\"backClicked()\">Go back</button>\n                    <form [formGroup]=\"createGames\" (ngSubmit)=\"postGamesData(createGames.value)\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"name\" placeholder=\"name\">\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" id=\"link\" formControlName=\"link\" placeholder=\"link\">\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" id=\"count\" formControlName=\"count\"\n                                placeholder=\"count\">\n                        </div>\n                        <button style=\"float:right; min-width: 100px;\" type=\"submit\" class=\"btn btn-primary btn-sm\">\n                            Post Covid data </button>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminComponent = class AdminComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")).default]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _coviddata_coviddata_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coviddata/coviddata.component */ "./src/app/admin/coviddata/coviddata.component.ts");
/* harmony import */ var _gamesddata_gamesddata_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gamesddata/gamesddata.component */ "./src/app/admin/gamesddata/gamesddata.component.ts");








const routes = [
    { path: '', component: _admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"] },
    { path: 'covid', component: _coviddata_coviddata_component__WEBPACK_IMPORTED_MODULE_6__["CoviddataComponent"] },
    { path: 'games', component: _gamesddata_gamesddata_component__WEBPACK_IMPORTED_MODULE_7__["GamesddataComponent"] }
];
let AdminModule = class AdminModule {
};
AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"], _coviddata_coviddata_component__WEBPACK_IMPORTED_MODULE_6__["CoviddataComponent"], _gamesddata_gamesddata_component__WEBPACK_IMPORTED_MODULE_7__["GamesddataComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]
    })
], AdminModule);



/***/ }),

/***/ "./src/app/admin/coviddata/coviddata.component.css":
/*!*********************************************************!*\
  !*** ./src/app/admin/coviddata/coviddata.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvdmlkZGF0YS9jb3ZpZGRhdGEuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/admin/coviddata/coviddata.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/coviddata/coviddata.component.ts ***!
  \********************************************************/
/*! exports provided: CoviddataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoviddataComponent", function() { return CoviddataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _counter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../counter.service */ "./src/app/counter.service.ts");





let CoviddataComponent = class CoviddataComponent {
    constructor(formBuilder, counterService, _location) {
        this.formBuilder = formBuilder;
        this.counterService = counterService;
        this._location = _location;
        this.createPost = this.formBuilder.group({
            last_updated: new Date,
            bangalore_total_cases: '',
            bangalore_total_recoverd: '',
            bangalore_total_death: '',
            india_total_cases: '',
            india_total_recoverd: '',
            india_total_death: '',
            world_total_cases: '',
            world_total_recoverd: '',
            world_total_death: ''
        });
    }
    // 'March 29, 2020, 07:35 PM'
    ngOnInit() {
    }
    onSubmit(postData) {
        this.counterService.setCovidData(postData)
            .subscribe(post => {
            this.posts = post;
        });
    }
    backClicked() {
        this._location.back();
    }
};
CoviddataComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _counter_service__WEBPACK_IMPORTED_MODULE_4__["CounterService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
CoviddataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coviddata',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./coviddata.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/coviddata/coviddata.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./coviddata.component.css */ "./src/app/admin/coviddata/coviddata.component.css")).default]
    })
], CoviddataComponent);



/***/ }),

/***/ "./src/app/admin/gamesddata/gamesddata.component.css":
/*!***********************************************************!*\
  !*** ./src/app/admin/gamesddata/gamesddata.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2dhbWVzZGRhdGEvZ2FtZXNkZGF0YS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/admin/gamesddata/gamesddata.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/gamesddata/gamesddata.component.ts ***!
  \**********************************************************/
/*! exports provided: GamesddataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesddataComponent", function() { return GamesddataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _counter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../counter.service */ "./src/app/counter.service.ts");





let GamesddataComponent = class GamesddataComponent {
    constructor(formBuilder, counterService, _location) {
        this.formBuilder = formBuilder;
        this.counterService = counterService;
        this._location = _location;
        this.createGames = this.formBuilder.group({
            "name": '',
            "link": '',
            "count": '',
        });
    }
    ngOnInit() {
    }
    postGamesData(postData) {
        let countData = postData.count;
        postData.count = parseInt(countData);
        this.counterService.setgamesData(postData)
            .subscribe(games => {
            this.games = games;
        });
    }
    backClicked() {
        this._location.back();
    }
};
GamesddataComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _counter_service__WEBPACK_IMPORTED_MODULE_4__["CounterService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
GamesddataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gamesddata',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gamesddata.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/gamesddata/gamesddata.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gamesddata.component.css */ "./src/app/admin/gamesddata/gamesddata.component.css")).default]
    })
], GamesddataComponent);



/***/ })

}]);
//# sourceMappingURL=admin-admin-module-es2015.js.map