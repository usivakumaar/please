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
		var e = new Error('Cannot find module "' + req + '".');
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"container-fluid padding0\">\n    <header>\n      <nav class=\"navbar\">\n        <div class=\"container-fluid\">\n          <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#GhoNow\">\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n            </button>\n            <div class=\"cart-container hidden-lg hidden-md hidden-sm pull-right\">\n              <img src=\"assets/images/cart_icon.png\" alt=\"cart\" class=\"cart\">\n              <div class=\"cart-count\">1</div>\n            </div>\n            <a class=\"navbar-brand\" href=\"#\">\n              <img src=\"assets/images/logo.png\" alt=\"GhoNow\" />\n            </a>\n          </div>\n          <div class=\"collapse navbar-collapse\" id=\"GhoNow\">\n            <ul class=\"nav navbar-nav navbar-right\">\n              <li *ngIf=\"data.loginSuccess\">\n                <a href=\"javascript:;\" (click)=\"profile();\">Profiles</a>\n              </li>\n              <li *ngIf=\"data.loginSuccess\">\n                <a href=\"javascript:;\" (click)=\"myaccount();\">My Account</a>\n              </li>\n              <li class=\"hidden-xs\">\n                <a class=\"cart-container\">Cart\n                  <img src=\"assets/images/cart_icon.png\" alt=\"cart\" class=\"cart\" />\n                  <div class=\"cart-count\">1</div>\n                </a>\n              </li>\n              <li>\n                <a *ngIf=\"!data.loginSuccess\" href=\"javascript:;\" (click)=\"login();\">Log In</a>\n                <a *ngIf=\"data.loginSuccess\" href=\"javascript:;\" (click)=\"login();\">Log Out</a>\n              </li>\n\n\n            </ul>\n          </div>\n        </div>\n      </nav>\n    </header>\n\n    <section class=\"hero-banner\"></section>\n\n\n    <router-outlet></router-outlet>\n\n\n\n    <footer>\n      <div class=\"coneect-with-us\">\n        Connect With Us:\n        <a>\n          <img src=\"assets/images/facebook_icon.png\" alt=\"facebook_icon\" />\n        </a>\n        <a>\n          <img src=\"assets/images/twitter_icon.png\" alt=\"twitter_icon\" />\n        </a>\n        <a>\n          <img src=\"assets/images/pintrest_icon.png\" alt=\"pintrest_icon\" />\n        </a>\n        <a>\n          <img src=\"assets/images/instagram_icon.png\" alt=\"instagram_icon\" />\n        </a>\n      </div>\n      <div class=\"footer-links\">\n        <ul>\n          <li>\n            <a>Get Email Updates</a>\n          </li>\n          <li>\n            <a>Catalog</a>\n          </li>\n          <li>\n            <a>Collections</a>\n          </li>\n          <li>\n            <a>Our Stores</a>\n          </li>\n          <li>\n            <a>Blog</a>\n          </li>\n          <li>\n            <a>About Us</a>\n          </li>\n          <li>\n            <a>Contact Us</a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"version pull-right\">2.4.3</div>\n    </footer>\n\n    <div class=\"checkout-slider\">\n      <h3>Your Cart\n        <span class=\"close pull-right\">X\n        </span>\n      </h3>\n      <div class=\"cart-item\">\n        <img src=\"assets/images/product_socks_red.png\" alt=\"cart-item\" />\n        <div class=\"cart-item-details\">\n          <h5>Soccer socks\n            <span class=\"remove-item pull-right\">X</span>\n          </h5>\n          <div class=\"cart-item-footer\">\n            <div class=\"controls\">\n              <span class=\"add\">+</span>\n              <span class=\"cart-item-count\">1</span>\n              <span class=\"remove\">-</span>\n            </div>\n            <div class=\"cart-item-price\">$7.00</div>\n          </div>\n        </div>\n      </div>\n      <h4>Subtotal\n        <span class=\"subtotal-price pull-right\">$7.00</span>\n      </h4>\n      <p class=\"shipping-text\">\n        <em>Shipping & taxes calculated at checkout.</em>\n      </p>\n      <div class=\"col-md-12 checkout\">\n        <a href=\"#\">\n          <img src=\"assets/images/btnCheckout.png\" alt=\"checkout\" />\n        </a>\n        <a href=\"#\">\n          <img src=\"assets/images/button_masterpass@3x.png\" alt=\"masterpass\" />\n        </a>\n      </div>\n    </div>\n  </div>\n</div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "./src/app/services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(_router, data) {
        this._router = _router;
        this.data = data;
        this.title = 'app';
    }
    AppComponent.prototype.profile = function () {
        this._router.navigateByUrl("profile");
    };
    AppComponent.prototype.myaccount = function () {
        this._router.navigateByUrl("myaccount");
    };
    AppComponent.prototype.login = function () {
        this._router.navigateByUrl("login");
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_2__["Services"]])
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
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _catalog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./catalog.component */ "./src/app/catalog.component.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login.component */ "./src/app/login.component.ts");
/* harmony import */ var _myaccount_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./myaccount.component */ "./src/app/myaccount.component.ts");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile.component */ "./src/app/profile.component.ts");
/* harmony import */ var _registeruser_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./registeruser.component */ "./src/app/registeruser.component.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services */ "./src/app/services.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _catalog_component__WEBPACK_IMPORTED_MODULE_6__["CatalogComponent"],
                _login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _myaccount_component__WEBPACK_IMPORTED_MODULE_8__["MyAccountComponent"],
                _profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                _registeruser_component__WEBPACK_IMPORTED_MODULE_10__["RegisterUserComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            providers: [_services__WEBPACK_IMPORTED_MODULE_11__["Services"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _catalog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catalog.component */ "./src/app/catalog.component.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/login.component.ts");
/* harmony import */ var _myaccount_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./myaccount.component */ "./src/app/myaccount.component.ts");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile.component */ "./src/app/profile.component.ts");
/* harmony import */ var _registeruser_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registeruser.component */ "./src/app/registeruser.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _catalog_component__WEBPACK_IMPORTED_MODULE_2__["CatalogComponent"], },
    { path: 'login', component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], },
    { path: 'myaccount', component: _myaccount_component__WEBPACK_IMPORTED_MODULE_4__["MyAccountComponent"], },
    { path: 'profile', component: _profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"], },
    { path: 'registeruser', component: _registeruser_component__WEBPACK_IMPORTED_MODULE_6__["RegisterUserComponent"], },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/catalog.component.html":
/*!****************************************!*\
  !*** ./src/app/catalog.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n  <h2>Catelog</h2>\n  <div class=\"category-select pull-right\">\n    <select>\n      <option value=\"0\">Filter By:</option>\n      <option value=\"13\">Basics</option>\n      <option value=\"14\">Accessories</option>\n      <option value=\"15\">Clothing</option>\n    </select>\n  </div>\n  <div class=\"products\">\n    <ul>\n      <li *ngFor=\"let p of productList\" class=\"product-item-container\" data-toggle=\"modal\" data-target=\"#soccer-socks\">\n        <div class=\"product-item\" (click)=\"showmodel(p.productId)\">\n          <img [src]=\"p.productImage\" alt=\"products\" class=\"product-image\" />\n          <p class=\"product-title\">{{p.productTitle}}</p>\n          <p class=\"product-price\">${{p.productPrice}}</p>\n        </div>\n        <!-- Modal -->\n        <div id=\"soccer-socks-{{p.productId}}\" class=\"modal fade\" role=\"dialog\">\n          <div class=\"modal-dialog modal-lg\">\n            <div class=\"modal-content\">\n              <span (click)=\"hidemodel(p.productId)\">\n                <img src=\"assets/images/product_detail_close_button.png\" alt=\"close\" class=\"pull-right\" />\n              </span>\n              <div class=\"modal-body\" style=\"margin-top:20px;\">\n                <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n                  <div class=\"product-detail-img\">\n                    <img src=\"assets/images/product_socks_red.png\" alt=\"soccer-socks\" class=\"img-responsive\" />\n                  </div>\n                </div>\n                <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-12\">\n                  <div class=\"product-detail-info\">\n                    <p class=\"product-title\">{{p.productTitle}}</p>\n                    <p class=\"product-price\">${{p.productPrice}}</p>\n                    <p class=\"product-content\">{{p.ProductDescription}}</p>\n                    <p class=\"size-text\" *ngIf=\"p.hasSize == 'yes'\">Size:</p>\n                    <div class=\"col-lg-12 size-container padding0\">\n                      <div *ngFor=\"let s of p.sizes\" (click)=\"sizes(s)\" class=\"product-size\">{{s}}</div>\n\n                    </div>\n                    <button type=\"submit\" value=\"Update\" id=\"UpdateBasketLink\" class=\"image-button addToBasketButton\">\n                      <img src=\"assets/images/add_to_cart_button.png\" alt=\"Add to Cart\" class=\"img-responsive\">\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/catalog.component.ts":
/*!**************************************!*\
  !*** ./src/app/catalog.component.ts ***!
  \**************************************/
/*! exports provided: CatalogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogComponent", function() { return CatalogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/app/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CatalogComponent = /** @class */ (function () {
    function CatalogComponent(http) {
        this.http = http;
        this.productList = [];
        this.CONFIG = Object(_config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"])();
        this.getProductslist();
    }
    CatalogComponent.prototype.getProductslist = function () {
        var _this = this;
        this.http.get(this.CONFIG.getProductslistURL).subscribe(function (response) {
            var data = JSON.parse(response._body);
            _this.productList = data.data.productList;
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    CatalogComponent.prototype.showmodel = function (p) {
        console.log($);
        $("#soccer-socks-" + p).addClass("in");
        $("#soccer-socks-" + p).css("display", "block");
        $("body").addClass("modal-open");
        $("#modelbackdrop").addClass("modal-backdrop fade in");
    };
    CatalogComponent.prototype.hidemodel = function (p) {
        console.log(p);
        $("#soccer-socks-" + p).removeClass("in");
        $("#soccer-socks-" + p).css("display", "none");
        $("body").removeClass("modal-open");
        $("#modelbackdrop").removeClass("modal-backdrop fade in");
    };
    CatalogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '',
            template: __webpack_require__(/*! ./catalog.component.html */ "./src/app/catalog.component.html")
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], CatalogComponent);
    return CatalogComponent;
}());



/***/ }),

/***/ "./src/app/config.ts":
/*!***************************!*\
  !*** ./src/app/config.ts ***!
  \***************************/
/*! exports provided: CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIG", function() { return CONFIG; });
var _CONFIG = /** @class */ (function () {
    function _CONFIG() {
        this.getProductslistURL = "http://ghonow.herokuapp.com/getproductslist";
        this.registerURL = "http://ghonow.herokuapp.com/registerUser";
        this.loginURL = "http://ghonow.herokuapp.com/login";
    }
    return _CONFIG;
}());
var _instance = null;
/*
* @summary  Used to get the singleton instance.
* @param {Object} [params] Constructor parameters to the object.
* @return {Object} A singleton instance of the SiteList object.
* */
function CONFIG() {
    if (_instance === null) {
        _instance = new _CONFIG();
    }
    return _instance;
}


/***/ }),

/***/ "./src/app/login.component.html":
/*!**************************************!*\
  !*** ./src/app/login.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"login-container\">\r\n    <h2>Log in</h2>\r\n    <br>\r\n    <p>Don't have an account?\r\n        <a href=\"javascript:;\" (click)=\"registerUser();\">Click here to register.</a>\r\n    </p>\r\n    <form>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-12 edit-label\">Email Adress</div>\r\n            <div class=\"col-lg-4 col-md-4 col-sm-5 col-xs-12\">\r\n                <input [(ngModel)]=\"email\" data-val=\"true\" data-val-required=\"The Email address field is required.\" id=\"Email\" name=\"Email\"\r\n                    type=\"email\" value=\"\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-12 edit-label\">Password</div>\r\n            <div class=\"col-lg-4 col-md-4 col-sm-5 col-xs-12\">\r\n                <input [(ngModel)]=\"password\" data-val=\"true\" data-val-required=\"The Email address field is required.\" id=\"pwd\" name=\"pwd\"\r\n                    type=\"password\" value=\"\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-12 text-right edit-label\"></div>\r\n            <div class=\"col-lg-4 col-md-4 col-sm-5 col-xs-12 text-center\">\r\n                <button type=\"submit\" class=\"image-button\" (click)=\"login()\">\r\n                    <img src=\"assets/images/btn_login.png\" alt=\"login\" />\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</section>"

/***/ }),

/***/ "./src/app/login.component.ts":
/*!************************************!*\
  !*** ./src/app/login.component.ts ***!
  \************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/app/config.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services */ "./src/app/services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(_router, data) {
        this._router = _router;
        this.data = data;
        this.CONFIG = Object(_config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"])();
    }
    LoginComponent.prototype.registerUser = function () {
        this._router.navigateByUrl("registeruser");
    };
    LoginComponent.prototype.catalog = function () {
        this.data.loginSuccess = true;
        this._router.navigateByUrl("");
    };
    LoginComponent.prototype.login = function () {
        var validateEmail = "" + this.email;
        var regex = /^(([^<>()\[\]\\.,;:+%*\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regex.test(validateEmail)) {
            alert("Not a valid email format");
            return false;
        }
        var data = null;
        var context = this;
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
                var temp = JSON.parse(this.responseText);
                if (temp.status == "failure") {
                    alert(temp.error);
                }
                else {
                    context.catalog();
                }
            }
        });
        xhr.open("GET", this.CONFIG.loginURL);
        xhr.setRequestHeader("authorization", "Basic " + btoa(this.email + ":" + this.password));
        xhr.setRequestHeader("cache-control", "no-cache");
        xhr.send(data);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_3__["Services"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/myaccount.component.html":
/*!******************************************!*\
  !*** ./src/app/myaccount.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"account-container\">\r\n    <form>\r\n        <h2>My Account</h2>\r\n        <p>Configure the following options to alter how the demo will behave.</p>\r\n        <hr>\r\n        <h3>General</h3>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-6\">\r\n                Display Name:\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-6\">\r\n                <input class=\"text-box valid\" name=\"DisplayName\" type=\"text\" value=\"JOHN BAKER\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-6\">\r\n                Show co-branded Masterpass button:\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-6\">\r\n                <input checked=\"checked\" data-val=\"true\" data-val-required=\"The DisplayCoBrandedBtn field is required.\" name=\"DisplayCoBrandedBtn\"\r\n                    type=\"checkbox\" value=\"true\" class=\"valid\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-6\">\r\n                Web to App flow type:\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-6\">\r\n                <input data-val=\"true\" data-val-required=\"The WebToAppFlowType field is required.\" name=\"WebToAppFlowType\" type=\"radio\" value=\"None\">\r\n                <label>None</label>\r\n                <br>\r\n                <input checked=\"checked\" name=\"WebToAppFlowType\" type=\"radio\" value=\"QrCode\">\r\n                <label>QR Code</label>\r\n                <br>\r\n                <input name=\"WebToAppFlowType\" type=\"radio\" value=\"PushNotification\">\r\n                <label>Push Notification</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-6\">\r\n                Show order confirmation page:\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-6\">\r\n                <input checked=\"checked\" data-val=\"true\" data-val-required=\"The ShowPlacingOrderPage field is required.\" name=\"ShowPlacingOrderPage\"\r\n                    type=\"checkbox\" value=\"true\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-6\">\r\n                Push notification Wallet Devices IDs:\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-6\">\r\n                <input class=\"text-box valid\" name=\"WalletDeviceID\" type=\"text\" value=\"test1234\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-6\">\r\n                Push notification Merchant Devices IDs:\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-6\">\r\n                <input class=\"text-box valid\" name=\"WalletMerchantID\" type=\"text\" value=\"\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-6\">\r\n                Currency:\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-6\">\r\n                <input data-val=\"true\" data-val-required=\"The WebToAppFlowType field is required.\" name=\"WebToAppFlowType\" type=\"radio\" value=\"GBP\">\r\n                <label>GBP</label>\r\n                <br>\r\n                <input name=\"WebToAppFlowType\" type=\"radio\" value=\"USD\">\r\n                <label>USD</label>\r\n                <br>\r\n                <input checked=\"checked\" name=\"WebToAppFlowType\" type=\"radio\" value=\"EUR\">\r\n                <label>EUR</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-6\">\r\n                Can Use Loyalty Points:\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-6\">\r\n                <input checked=\"checked\" class=\"check-box\" data-val=\"true\" data-val-required=\"The CanUseLoyaltyPoints field is required.\"\r\n                    name=\"CanUseLoyaltyPoints\" type=\"checkbox\" value=\"true\">\r\n            </div>\r\n        </div>\r\n        <hr>\r\n        <h3>ACH</h3>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-6\">\r\n                Merchant supports Card payments:\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-6\">\r\n                <input checked=\"checked\" data-val=\"true\" data-val-required=\"The CardPayments field is required.\" name=\"CardPayments\" type=\"checkbox\"\r\n                    value=\"true\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-6\">\r\n                Merchant supports ACH payments:\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-6\">\r\n                <input checked=\"checked\" data-val=\"true\" data-val-required=\"The ACHStatus field is required.\" name=\"ACHStatus\" type=\"checkbox\"\r\n                    value=\"true\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-6\">\r\n                Process ACH payments as card:\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-6\">\r\n                <input checked=\"checked\" data-val=\"true\" data-val-required=\"The IssuerACH field is required.\" name=\"IssuerACH\" type=\"checkbox\"\r\n                    value=\"true\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-6\">\r\n                Digital by default:\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-6\">\r\n                <input checked=\"checked\" data-val=\"true\" data-val-required=\"The DigitizeByDefault field is required.\" name=\"DigitizeByDefault\"\r\n                    type=\"checkbox\" value=\"true\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <button type=\"submit\" class=\"image-button\">\r\n                <img src=\"assets/images/btn_save.png\" alt=\"save\" />\r\n            </button>\r\n        </div>\r\n    </form>\r\n</section>"

/***/ }),

/***/ "./src/app/myaccount.component.ts":
/*!****************************************!*\
  !*** ./src/app/myaccount.component.ts ***!
  \****************************************/
/*! exports provided: MyAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountComponent", function() { return MyAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MyAccountComponent = /** @class */ (function () {
    function MyAccountComponent() {
    }
    MyAccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '',
            template: __webpack_require__(/*! ./myaccount.component.html */ "./src/app/myaccount.component.html")
        })
    ], MyAccountComponent);
    return MyAccountComponent;
}());



/***/ }),

/***/ "./src/app/profile.component.html":
/*!****************************************!*\
  !*** ./src/app/profile.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"profile-container\">\n  <h2>Profiles</h2>\n  <p>View, create or delete profiles.</p>\n  <hr>\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 padding0\">\n    <div class=\"application pull-right\">\n      <label class=\"style-label\">Application</label>\n      <select class=\"style-input\" name=\"appId\" onchange=\"ProfilesAppChanged()\">\n        <option selected=\"selected\" value=\"1\">Merchant</option>\n        <option value=\"2\">Wallet</option>\n      </select>\n    </div>\n  </div>\n  <span>Name</span>\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 profiles\">\n    <div class=\"row\">\n      <label>Merchant - Currency = INR</label>\n      <div class=\"actions pull-right\">\n        <a class=\"action-btn\" href=\"#\">Delete X</a>\n        <a class=\"action-btn\" href=\"#\">Details ></a>\n      </div>\n    </div>\n    <div class=\"row even-row\">\n      <label>Merchant - Currency = USD</label>\n      <div class=\"actions pull-right\">\n        <a class=\"action-btn\" href=\"#\">Delete X</a>\n        <a class=\"action-btn\" href=\"#\">Details ></a>\n      </div>\n    </div>\n    <div class=\"row\">\n      <label>Merchant - Currency = GBP</label>\n      <div class=\"actions pull-right\">\n        <a class=\"action-btn\" href=\"#\">Delete X</a>\n        <a class=\"action-btn\" href=\"#\">Details ></a>\n      </div>\n    </div>\n    <div class=\"row even-row\">\n      <label>Merchant - Currency = EUR</label>\n      <div class=\"actions pull-right\">\n        <a class=\"action-btn\" href=\"#\">Delete X</a>\n        <a class=\"action-btn\" href=\"#\">Details ></a>\n      </div>\n    </div>\n    <div class=\"row\">\n      <label>Merchant - Currency = YEN</label>\n      <div class=\"actions pull-right\">\n        <a class=\"action-btn\" href=\"#\">Delete X</a>\n        <a class=\"action-btn\" href=\"#\">Details ></a>\n      </div>\n    </div>\n    <div class=\"row even-row\">\n      <label>Merchant - Currency = PHP</label>\n      <div class=\"actions pull-right\">\n        <a class=\"action-btn\" href=\"#\">Delete X</a>\n        <a class=\"action-btn\" href=\"#\">Details ></a>\n      </div>\n    </div>\n    <div class=\"row\">\n      <label>Merchant - Currency = BRL</label>\n      <div class=\"actions pull-right\">\n        <a class=\"action-btn\" href=\"#\">Delete X</a>\n        <a class=\"action-btn\" href=\"#\">Details ></a>\n      </div>\n    </div>\n    <div class=\"add-row even-row\">\n      <input class=\"style-input\" type=\"text\" maxlength=\"256\" placeholder=\"Name\" oninput=\"ProfilesCreateValidate($(this).parent().parent());\">\n      <div class=\"actions pull-right padding-top15\">\n        <a class=\"action-btn-create\" href=\"#\">Create +</a>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/profile.component.ts":
/*!**************************************!*\
  !*** ./src/app/profile.component.ts ***!
  \**************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile.component.html")
        })
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/registeruser.component.html":
/*!*********************************************!*\
  !*** ./src/app/registeruser.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"login-container\">\r\n    <h2>Register</h2>\r\n    <br>\r\n    <form>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-12 edit-label\">Email Adress</div>\r\n            <div class=\"col-lg-4 col-md-4 col-sm-5 col-xs-12\">\r\n                <input data-val=\"true\" [(ngModel)]=\"email\" data-val-required=\"The Email address field is required.\" id=\"Email\" name=\"Email\"\r\n                    type=\"email\" value=\"\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-12 edit-label\">First Name</div>\r\n            <div class=\"col-lg-4 col-md-4 col-sm-5 col-xs-12\">\r\n                <input [(ngModel)]=\"firstname\" data-val=\"true\" data-val-required=\"The Email address field is required.\" id=\"fname\" name=\"fname\"\r\n                    type=\"text\" value=\"\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-12 edit-label\">Last Name</div>\r\n            <div class=\"col-lg-4 col-md-4 col-sm-5 col-xs-12\">\r\n                <input [(ngModel)]=\"lastname\" data-val=\"true\" data-val-required=\"The Email address field is required.\" id=\"lname\" name=\"lname\"\r\n                    type=\"text\" value=\"\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-12 edit-label\">Password</div>\r\n            <div class=\"col-lg-4 col-md-4 col-sm-5 col-xs-12\">\r\n                <input [(ngModel)]=\"password\" data-val=\"true\" data-val-required=\"The Email address field is required.\" id=\"pwd\" name=\"pwd\"\r\n                    type=\"password\" value=\"\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-2 col-md-2 col-sm-3 col-xs-12 edit-label\">Confirm Password</div>\r\n            <div class=\"col-lg-4 col-md-4 col-sm-5 col-xs-12\">\r\n                <input [(ngModel)]=\"confirmpassword\" data-val=\"true\" data-val-required=\"The Email address field is required.\" id=\"cpwd\" name=\"cpwd\"\r\n                    type=\"password\" value=\"\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-12 text-right edit-label\"></div>\r\n            <div class=\"col-lg-4 col-md-4 col-sm-5 col-xs-12 text-center\">\r\n                <button type=\"submit\" class=\"image-button\" (click)=\"register()\">\r\n                    <img src=\"assets/images/btn_register.png\" alt=\"register\" />\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</section>"

/***/ }),

/***/ "./src/app/registeruser.component.ts":
/*!*******************************************!*\
  !*** ./src/app/registeruser.component.ts ***!
  \*******************************************/
/*! exports provided: RegisterUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterUserComponent", function() { return RegisterUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/app/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services */ "./src/app/services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterUserComponent = /** @class */ (function () {
    function RegisterUserComponent(_router, data) {
        this._router = _router;
        this.data = data;
        this.CONFIG = Object(_config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"])();
    }
    RegisterUserComponent.prototype.register = function () {
        var context = this;
        if (this.password != this.confirmpassword) {
            alert("Password does not match");
            return false;
        }
        var validateEmail = "" + this.email;
        var regex = /^(([^<>()\[\]\\.,;:+%*\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regex.test(validateEmail)) {
            alert("Not a valid email format");
            return false;
        }
        var data = JSON.stringify({
            "email": "" + this.email,
            "firstName": "" + this.firstname,
            "lastName": "" + this.lastname,
            "password": "" + this.password
        });
        console.log(data);
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                //console.log(this.responseText);
                var data_1 = JSON.parse(this.responseText);
                if (data_1.status == "success") {
                    context.onSuccess();
                }
                else {
                    alert(data_1.error);
                }
            }
        });
        xhr.open("POST", this.CONFIG.registerURL);
        xhr.setRequestHeader("content-type", "application/json");
        xhr.setRequestHeader("cache-control", "no-cache");
        xhr.send(data);
    };
    RegisterUserComponent.prototype.catalog = function () {
        this.data.loginSuccess = true;
        this._router.navigateByUrl("");
    };
    RegisterUserComponent.prototype.onSuccess = function () {
        alert("User registered successfully");
        this.data.loginSuccess = true;
        var data = null;
        var context = this;
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
                var temp = JSON.parse(this.responseText);
                if (temp.status == "failure") {
                    alert(temp.error);
                }
                else {
                    context.catalog();
                }
            }
        });
        xhr.open("GET", this.CONFIG.loginURL);
        xhr.setRequestHeader("authorization", "Basic " + btoa(this.email + ":" + this.password));
        xhr.setRequestHeader("cache-control", "no-cache");
        xhr.send(data);
        this.email = "";
        this.firstname = "";
        this.password = "";
        this.confirmpassword = "";
        this.lastname = "";
    };
    RegisterUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '',
            template: __webpack_require__(/*! ./registeruser.component.html */ "./src/app/registeruser.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_3__["Services"]])
    ], RegisterUserComponent);
    return RegisterUserComponent;
}());



/***/ }),

/***/ "./src/app/services.ts":
/*!*****************************!*\
  !*** ./src/app/services.ts ***!
  \*****************************/
/*! exports provided: Services */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Services", function() { return Services; });
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

var Services = /** @class */ (function () {
    function Services() {
        this.loginSuccess = false;
    }
    Services = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Services);
    return Services;
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

module.exports = __webpack_require__(/*! D:\ghonow\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map