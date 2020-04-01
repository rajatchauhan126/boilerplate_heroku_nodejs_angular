(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shared-shared-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/createpost/createpost.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/createpost/createpost.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedCreatepostCreatepostComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\" style=\"height: 14px;\">\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-2\">\n\n        </div>\n        <div class=\"col-sm-8\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <h5 style=\"\n                    color: rgb(59, 47, 47);\n                    font-size: 18px;\n                    font-weight: 500;\n                    line-height: 22px;\n                     \" class=\"card-title\"><strong>Create a post</strong></h5>\n                    <form [formGroup]=\"createPost\" (ngSubmit)=\"onSubmit(createPost.value)\">\n                        <div class=\"form-group\">\n                            <select class=\"form-control\" id=\"community\" formControlName=\"community\">\n                                <option selected>Choose a community</option>\n                                <option>Music and dance</option>\n                                <option>Art and craft</option>\n                                <option>Education and training</option>\n                                <option>Politics and religion</option>\n                                <option>Space and gravity</option>\n                            </select>\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"title\" class=\"form-control\" id=\"title\" formControlName=\"title\"\n                                placeholder=\"Title\">\n                        </div>\n                        <div class=\"form-group\">\n                            <textarea class=\"form-control\" id=\"optionaltext\" formControlName=\"optionaltext\"\n                                placeholder=\"Text (Optional)\" rows=\"3\"></textarea>\n                        </div>\n                        <!-- <div class=\"form-group\">\n                            <input type=\"file\" class=\"form-control-file btn btn-primary btn-sm\" formControlName=\"image\"\n                                id=\"image\">\n                        </div> -->\n                        <button style=\"float:right; min-width: 100px;\" type=\"submit\" class=\"btn btn-primary btn-sm\">\n                            Post </button>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-2\">\n            <!-- <div class=\"card\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Special title treatment</h5>\n                    <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.\n                    </p>\n                    <a href=\"#\" class=\"btn btn-primary btn-sm\">Lorem</a>\n                </div>\n            </div> -->\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/games/games.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/games/games.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedGamesGamesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\" style=\"margin-top: 10px;\">\n            <div class=\"card\">\n                <div class=\"card-header heading_1\">\n                    Game\n                </div>\n                <div class=\"card-body\">\n                    <ol class=\"list-group list-group-flush\" *ngIf=\"games\">\n                        <li *ngFor=\"let game of games; index as i;\" class=\"list-group-item\">\n                            <span style=\"padding-right:6px; color: #495057;\">{{i + 1 }}.</span>\n                            <a (click)=\"increaseCount(i)\" class=\"text-muted medium mb-4 mb-lg-0 badge_1\" target=\"_blank\"\n                                href=\"{{game.link}}\">{{game.name}}</a><span style=\"float: right;margin-top: 3px;\"\n                                class=\"medium badge badge-primary badge-pill\">{{game.count}}</span>\n                        </li>\n                    </ol>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/posts/posts.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/posts/posts.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedPostsPostsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\" style=\"height: 14px;\">\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card\">\n                <div class=\"form-group\" style=\"margin-bottom: 0.5rem; margin-top: 0.5rem;\">\n                    <a class=\"btn btn-primary btn-sm\" style=\"float: left; min-width: 100px; margin-left: .5rem;\"\n                        [routerLink]=\"['/shared/create-post']\">Create new post</a>\n                </div>\n            </div>\n            <div *ngIf=\"posts\">\n                <div *ngFor=\"let post of posts.reverse(); let i=index;\" >\n                    <div class=\"card text-center\">\n                        <div class=\"card-header\">\n                            <div class=\"tab-content\">\n                                <div class=\"container tab-pane active text-muted medium mb-4 mb-lg-0\"><br>\n                                    <strong style=\"float: left;\">{{post.title}}</strong><br>\n                                    <!-- <span>*</span> <span>Posted by: </span><span>{{post.userId}}</span> -->\n                                    <p style=\"text-align: left;\"> {{post.optionaltext}}</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n\n<!-- <div *ngIf=\"posts\">\n    <div *ngFor=\"let post of posts.reverse(); let i=index; let odd=odd; trackBy: trackById\" [class.odd]=\"odd\">\n        <div class=\"card\">\n            <div class=\"form-group\" style=\"margin-bottom: 0.5rem; margin-top: 0.5rem;                         color: rgb(59, 47, 47);\n                font-size: 18px;\n                font-weight: 500;\n                line-height: 22px;\n                text-align: left;\n                padding-left: .5rem;\">\n                <strong>{{post.title}}</strong>\n                <span>*</span> <span>Posted by: </span><span>{{post.userId}}</span>\n            </div>\n            <div class=\"form-group\" style=\"margin-bottom: 0.5rem; margin-top: 0.5rem;                         color: rgb(59, 47, 47);\n                font-size: 18px;\n                font-weight: 500;\n                line-height: 22px;\n                text-align: left;\n                padding-left: .5rem;\">\n                {{post.optionaltext}}\n            </div>\n            <div class=\"form-group\" style=\"margin-bottom: 0.5rem; margin-top: 0.5rem;\">\n                <div class=\"text-white showcase-img\"\n                    style=\"height: 400px; width: auto; background-image: url('assets/img/bg-showcase-1.jpg');\">\n                </div>\n\n\n                <a class=\"btn btn-primary btn-sm\"\n                        style=\"float: left; min-width: 100px; margin-left: .5rem;\">{{post._id}}</a>\n            </div>\n            <div class=\"form-group\" style=\"margin-bottom: 0.5rem; margin-top: 0.5rem;\">\n                <a class=\"btn btn-primary\" data-toggle=\"collapse\" href=\"{{'#' + post._id}}\" role=\"button\"\n                    aria-expanded=\"false\" aria-controls=\"collapseExample\"\n                    style=\"float: left; min-width: 100px; margin-left: .5rem;\">257 comments</a>\n                <a class=\"\" style=\"float: left; min-width: 100px; margin-left: .5rem;\">share</a>\n                <a class=\"\" style=\"float: left; min-width: 100px; margin-left: .5rem;\">{{post._id}}</a>\n            </div>\n            <div class=\"form-group\">\n                <form [formGroup]=\"createComment\">\n                    <div class=\"collapse\" id=\"{{post._id}}\">\n                        <input type=\"title\" style=\"\" value=\"{{post._id}}\" class=\"form-control\"\n                            id=\"{{post._id}}\" formControlName=\"postId\">\n                        <div class=\"card card-body\">\n                            <div class=\"form-group\">\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/shared.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/shared.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedSharedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>shared works!</p>\n";
    /***/
  },

  /***/
  "./src/app/shared/createpost/createpost.component.css":
  /*!************************************************************!*\
    !*** ./src/app/shared/createpost/createpost.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedCreatepostCreatepostComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jcmVhdGVwb3N0L2NyZWF0ZXBvc3QuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/shared/createpost/createpost.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/createpost/createpost.component.ts ***!
    \***********************************************************/

  /*! exports provided: CreatepostComponent */

  /***/
  function srcAppSharedCreatepostCreatepostComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreatepostComponent", function () {
      return CreatepostComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../post.service */
    "./src/app/post.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let CreatepostComponent = class CreatepostComponent {
      constructor(router, formBuilder, postService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.postService = postService;
        this.createPost = this.formBuilder.group({
          community: '',
          title: '',
          optionaltext: '',
          image: ''
        });
      }

      ngOnInit() {}

      onSubmit(postData) {
        postData.userId = 'Edgymnerch';
        postData.image = 'temp';
        this.postService.createPost(postData).subscribe(post => this.posts = post);
        this.createPost.reset();
        this.router.navigateByUrl('shared/posts');
      }

    };

    CreatepostComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"]
    }];

    CreatepostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-createpost',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./createpost.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/createpost/createpost.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./createpost.component.css */
      "./src/app/shared/createpost/createpost.component.css")).default]
    })], CreatepostComponent);
    /***/
  },

  /***/
  "./src/app/shared/games/games.component.css":
  /*!**************************************************!*\
    !*** ./src/app/shared/games/games.component.css ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedGamesGamesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9nYW1lcy9nYW1lcy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/shared/games/games.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/games/games.component.ts ***!
    \*************************************************/

  /*! exports provided: GamesComponent */

  /***/
  function srcAppSharedGamesGamesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GamesComponent", function () {
      return GamesComponent;
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


    var _counter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../counter.service */
    "./src/app/counter.service.ts");

    let GamesComponent = class GamesComponent {
      constructor(counterService) {
        this.counterService = counterService;
      }

      ngOnInit() {
        this.getGamesData();
        this.callAfterTimeout();
      }

      callAfterTimeout() {
        setTimeout(() => {
          this.getGamesData();
        }, 1000);
      }

      getGamesData() {
        this.counterService.getgamesData({}).subscribe(gamesData => {
          if (Object.keys(gamesData.games).length === 0) {
            this.games = [];
          } else {
            this.games = gamesData.games;
          }
        });
      }

      updateCount() {
        this.counterService.postgamesCountData(this.games).subscribe(gamesData => {
          this.games = gamesData.games;
        });
      }

      increaseCount(data) {
        this.games[data].count = this.games[data].count + 1;
        this.updateCount();
      }

    };

    GamesComponent.ctorParameters = () => [{
      type: _counter_service__WEBPACK_IMPORTED_MODULE_2__["CounterService"]
    }];

    GamesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-games',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./games.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/games/games.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./games.component.css */
      "./src/app/shared/games/games.component.css")).default]
    })], GamesComponent);
    /***/
  },

  /***/
  "./src/app/shared/posts/posts.component.css":
  /*!**************************************************!*\
    !*** ./src/app/shared/posts/posts.component.css ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedPostsPostsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wb3N0cy9wb3N0cy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/shared/posts/posts.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/posts/posts.component.ts ***!
    \*************************************************/

  /*! exports provided: PostsComponent */

  /***/
  function srcAppSharedPostsPostsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostsComponent", function () {
      return PostsComponent;
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


    var _post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../post.service */
    "./src/app/post.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    let PostsComponent = class PostsComponent {
      constructor(formBuilder, postService) {
        this.formBuilder = formBuilder;
        this.postService = postService;
        this.createComment = this.formBuilder.group({
          postId: '',
          comment: ''
        });
      }

      ngOnInit() {
        this.getAllPost();
        this.callAfterTimeout();
        this.callAfterTimeout2();
      }

      callAfterTimeout() {
        setTimeout(() => {
          this.getAllPost();
        }, 300);
      }

      callAfterTimeout2() {
        setTimeout(() => {
          this.getAllPost();
          this.getAllPost();
        }, 500);
      }

      getAllPost() {
        this.postService.getAllPost().subscribe(posts => {
          if (posts === null) {
            this.posts = [];
          } else {
            this.posts = posts;
          }
        });
      }

    };

    PostsComponent.ctorParameters = () => [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
    }, {
      type: _post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]
    }];

    PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-posts',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./posts.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/posts/posts.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./posts.component.css */
      "./src/app/shared/posts/posts.component.css")).default]
    })], PostsComponent);
    /***/
  },

  /***/
  "./src/app/shared/shared.component.css":
  /*!*********************************************!*\
    !*** ./src/app/shared/shared.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedSharedComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zaGFyZWQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/shared/shared.component.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/shared.component.ts ***!
    \********************************************/

  /*! exports provided: SharedComponent */

  /***/
  function srcAppSharedSharedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedComponent", function () {
      return SharedComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let SharedComponent = class SharedComponent {
      constructor() {}

      ngOnInit() {}

    };
    SharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-shared',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./shared.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/shared.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./shared.component.css */
      "./src/app/shared/shared.component.css")).default]
    })], SharedComponent);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shared.component */
    "./src/app/shared/shared.component.ts");
    /* harmony import */


    var _games_games_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./games/games.component */
    "./src/app/shared/games/games.component.ts");
    /* harmony import */


    var _createpost_createpost_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./createpost/createpost.component */
    "./src/app/shared/createpost/createpost.component.ts");
    /* harmony import */


    var _posts_posts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./posts/posts.component */
    "./src/app/shared/posts/posts.component.ts");

    const routes = [{
      path: '',
      component: _shared_component__WEBPACK_IMPORTED_MODULE_5__["SharedComponent"]
    }, {
      path: 'games',
      component: _games_games_component__WEBPACK_IMPORTED_MODULE_6__["GamesComponent"]
    }, {
      path: 'create-post',
      component: _createpost_createpost_component__WEBPACK_IMPORTED_MODULE_7__["CreatepostComponent"]
    }, {
      path: 'posts',
      component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_8__["PostsComponent"]
    }];
    let SharedModule = class SharedModule {};
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_shared_component__WEBPACK_IMPORTED_MODULE_5__["SharedComponent"], _games_games_component__WEBPACK_IMPORTED_MODULE_6__["GamesComponent"], _createpost_createpost_component__WEBPACK_IMPORTED_MODULE_7__["CreatepostComponent"], _posts_posts_component__WEBPACK_IMPORTED_MODULE_8__["PostsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_games_games_component__WEBPACK_IMPORTED_MODULE_6__["GamesComponent"]]
    })], SharedModule);
    /***/
  }
}]);
//# sourceMappingURL=shared-shared-module-es5.js.map