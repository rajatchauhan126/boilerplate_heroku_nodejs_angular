(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/counter.service.ts":
  /*!************************************!*\
    !*** ./src/app/counter.service.ts ***!
    \************************************/

  /*! exports provided: CounterService */

  /***/
  function srcAppCounterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CounterService", function () {
      return CounterService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    let CounterService = class CounterService {
      constructor(http) {
        this.http = http; // private postUrl =`http://localhost:3000/api`;

        this.postUrl = "api";
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
      }

      createPost(postData) {
        let url = this.postUrl + '/counter';
        return this.http.post(url, postData, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(newpost => {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('errorpost')));
      }

      setgamesData(gamesData) {
        let url = this.postUrl + '/post-games';
        return this.http.post(url, gamesData, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(newpost => {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('errorpost')));
      }

      getgamesData(gamesData) {
        let url = this.postUrl + '/get-games';
        return this.http.post(url, gamesData, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(newpost => {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('errorpost')));
      }

      postgamesCountData(gamesData) {
        let url = this.postUrl + '/post-games-count';
        return this.http.post(url, gamesData, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(newpost => {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('errorpost')));
      }

      setCovidData(covidData) {
        let url = this.postUrl + '/admin/post-covid';
        return this.http.post(url, covidData, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(newpost => {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('errorpost')));
      }

      getCovidData(covidData) {
        let url = this.postUrl + '/admin/get-covid';
        return this.http.post(url, covidData, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(newpost => {}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('errorpost')));
      }

      handleError(operation = 'operation', result) {
        return error => {
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
          // TODO: better job of transforming error for user consumption

          console.error("".concat(operation, " failed: ").concat(error.message)); // Let the app keep running by returning an empty result.

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
      }

    };

    CounterService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }];

    CounterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CounterService);
    /***/
  },

  /***/
  "./src/app/post.service.ts":
  /*!*********************************!*\
    !*** ./src/app/post.service.ts ***!
    \*********************************/

  /*! exports provided: PostService */

  /***/
  function srcAppPostServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostService", function () {
      return PostService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    let PostService = class PostService {
      constructor(http) {
        this.http = http; // private postUrl =`http://localhost:3000/api`;

        this.postUrl = "api";
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
      }

      createPost(postData) {
        let url = this.postUrl + '/post/create-post';
        console.log('url', url);
        return this.http.post(url, postData, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(newpost => console.log("new post")), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('errorpost')));
      }

      getAllPost() {
        return this.http.get(this.postUrl + '/post/get-all-post').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => console.log('fetched post')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('posts', [])));
      }

      handleError(operation = 'operation', result) {
        return error => {
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
          // TODO: better job of transforming error for user consumption

          console.error("".concat(operation, " failed: ").concat(error.message)); // Let the app keep running by returning an empty result.

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
      }

    };

    PostService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }];

    PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PostService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map