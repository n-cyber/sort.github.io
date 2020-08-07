function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"w-100 h-100 d-flex flex-column\">\r\n  <div class=\"d-flex flex-column flex-fill bg-light\">\r\n    <div class=\"d-flex flex-row container justify-content-center\">\r\n      <div *ngFor=\"let d of data; let i = index; let l = last\">\r\n        <div></div>\r\n        <div\r\n          [class.mr-1]=\"!l\"\r\n          class=\"sort-item\"\r\n          [style.height.px]=\"d.value * 5\"\r\n          [style.minWidth.px]=\"itemWidth\"\r\n          [class.bg-primary]=\"!d.active\"\r\n          [class.bg-success]=\"d.active && !d.swapping\"\r\n          [class.bg-danger]=\"d.swapping\"\r\n          [class.bg-secondary]=\"d.finalrun\"\r\n          [class.bg-warning]=\"d.pivot\"\r\n        >\r\n          <div style=\"color: red;\">{{ d.value }}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <footer class=\"bg-white p-3 mat-elevation-z1\">\r\n    <div class=\"container footer-bar\">\r\n      <div class=\"left d-flex flex-row justify-content-start\">\r\n        <div\r\n          class=\"h-100 d-flex flex-column align-items-center justify-content-center\"\r\n        >\r\n          <h6 class=\"text-secondary\">{{ sortingAlg.name }}</h6>\r\n        </div>\r\n      </div>\r\n      <div\r\n        class=\"center d-flex flex-column justify-content-center align-items-center\"\r\n      >\r\n        <div>\r\n          <button\r\n            mat-icon-button\r\n            matTooltip=\"Shuffle array\"\r\n            (click)=\"randomize()\"\r\n          >\r\n            <mat-icon>shuffle</mat-icon>\r\n          </button>\r\n\r\n          <button\r\n            mat-icon-button\r\n            class=\"mx-4\"\r\n            *ngIf=\"!($start | async); else stopBtn\"\r\n            (click)=\"sort(data)\"\r\n          >\r\n            <mat-icon>play_circle_outline</mat-icon>\r\n          </button>\r\n\r\n          <ng-template #stopBtn>\r\n            <button mat-icon-button class=\"mx-4\" (click)=\"stop()\">\r\n              <mat-icon>pause_circle_outline</mat-icon>\r\n            </button>\r\n          </ng-template>\r\n\r\n          <button mat-icon-button (click)=\"reset()\" matTooltip=\"Reset array\">\r\n            <mat-icon>refresh</mat-icon>\r\n          </button>\r\n        </div>\r\n        <div>\r\n          <button\r\n            *ngFor=\"let sort of availableSortingAlg; let l = last\"\r\n            class=\"btn btn-link sort-selection\"\r\n            [class.text-muted]=\"sort.active\"\r\n            [class.active]=\"sort.active\"\r\n            [disabled]=\"sort.active || ($start | async)\"\r\n            (click)=\"setSorter(sort.alg)\"\r\n          >\r\n            <small>{{ sort.name }}</small>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div class=\"right\">\r\n        <div class=\"d-flex align-items-center justify-content-end\">\r\n          <mat-icon matTooltip=\"Sorting speed\" class=\"mr-2\">speed</mat-icon>\r\n          <mat-slider\r\n            min=\"0\"\r\n            max=\"1000\"\r\n            step=\"1\"\r\n            (input)=\"setDelay($event)\"\r\n            [value]=\"1000\"\r\n            color=\"primary\"\r\n          >\r\n          </mat-slider>\r\n        </div>\r\n        <div class=\"d-flex align-items-center justify-content-end\">\r\n          <mat-icon matTooltip=\"Element size\" class=\"mr-2\"\r\n            >keyboard_arrow_up</mat-icon\r\n          >\r\n          <mat-slider\r\n            min=\"0\"\r\n            max=\"300\"\r\n            step=\"1\"\r\n            (input)=\"setItemWidth($event)\"\r\n            color=\"primary\"\r\n            [value]=\"300\"\r\n          >\r\n          </mat-slider>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sort-selection {\n  cursor: pointer;\n  text-decoration: none;\n}\n.sort-selection.active {\n  cursor: default;\n}\n.sort-selection:focus, .sort-selection:active, .sort-selection:focus-within, .sort-selection:active:focus {\n  box-shadow: none !important;\n}\n.start-btn {\n  cursor: pointer;\n  border-radius: 50px;\n}\n.footer-bar {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: 90px;\n  padding: 0 16px;\n}\n.footer-bar .left, .footer-bar .right {\n  width: 30%;\n  min-width: 180px;\n}\n.footer-bar .center {\n  width: 40%;\n  max-width: 722px;\n}\nbutton:focus {\n  outline: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxTbmVoYWxcXERvY3VtZW50c1xcR2l0SHViXFxBbmd1bGFyXFxzb3J0LXZpc3VhbGl6ZXIvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0FDQ0Y7QURBRTtFQUNFLGVBQUE7QUNFSjtBREFFO0VBSUUsMkJBQUE7QUNESjtBREtBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDRkY7QURLQTtFQUdFLG1CQUFBO0VBR0EsYUFBQTtFQUlBLG1CQUFBO0VBR0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0ZGO0FESUU7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUNGSjtBRElFO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FDRko7QURPSTtFQUNJLHdCQUFBO0FDSlIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc29ydC1zZWxlY3Rpb24ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgJi5hY3RpdmUge1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gIH1cclxuICAmOmZvY3VzLFxyXG4gICY6YWN0aXZlLFxyXG4gICY6Zm9jdXMtd2l0aGluLFxyXG4gICY6YWN0aXZlOmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5zdGFydC1idG4ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59XHJcblxyXG4uZm9vdGVyLWJhciB7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XHJcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xyXG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGhlaWdodDogOTBweDtcclxuICBwYWRkaW5nOiAwIDE2cHg7XHJcblxyXG4gIC5sZWZ0LCAucmlnaHQge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1pbi13aWR0aDogMTgwcHg7XHJcbiAgfVxyXG4gIC5jZW50ZXIge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIG1heC13aWR0aDogNzIycHg7XHJcbiAgfVxyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59IiwiLnNvcnQtc2VsZWN0aW9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uc29ydC1zZWxlY3Rpb24uYWN0aXZlIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLnNvcnQtc2VsZWN0aW9uOmZvY3VzLCAuc29ydC1zZWxlY3Rpb246YWN0aXZlLCAuc29ydC1zZWxlY3Rpb246Zm9jdXMtd2l0aGluLCAuc29ydC1zZWxlY3Rpb246YWN0aXZlOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uc3RhcnQtYnRuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG4uZm9vdGVyLWJhciB7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgaGVpZ2h0OiA5MHB4O1xuICBwYWRkaW5nOiAwIDE2cHg7XG59XG4uZm9vdGVyLWJhciAubGVmdCwgLmZvb3Rlci1iYXIgLnJpZ2h0IHtcbiAgd2lkdGg6IDMwJTtcbiAgbWluLXdpZHRoOiAxODBweDtcbn1cbi5mb290ZXItYmFyIC5jZW50ZXIge1xuICB3aWR0aDogNDAlO1xuICBtYXgtd2lkdGg6IDcyMnB4O1xufVxuXG5idXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_lib_sorter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/lib/sorter */
    "./src/lib/sorter/index.ts");
    /* harmony import */


    var src_lib_util_sleep__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/lib/util/sleep */
    "./src/lib/util/sleep.ts");
    /* harmony import */


    var src_lib_util_tokens__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/lib/util/tokens */
    "./src/lib/util/tokens.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = "sort-visualizer";
        this.cachedRandomData = [];
        this.data = [];
        this.maxValue = 100;
        this.itemWidth = 10;
        this.maxWidth = 20;
        this.maxDelay = 500;
        this.widthScalingRate = 50;
        this.delayScalingRate = 200;
        this.arraySizeScalingRate = 100;
        this.delayToken = new src_lib_util_tokens__WEBPACK_IMPORTED_MODULE_5__["DelayToken"]();
        this.delay = 0;
        this.maxArraySize = 50;
        this.minArraySize = 4;
        this.arraySize = this.maxArraySize;
        this.availableSortingAlg = [{
          name: "Bubble Sort",
          alg: src_lib_sorter__WEBPACK_IMPORTED_MODULE_3__["SortingAlg"].bubble,
          active: true
        }, {
          name: "Merge Sort",
          alg: src_lib_sorter__WEBPACK_IMPORTED_MODULE_3__["SortingAlg"].merge,
          active: false
        }, {
          name: "Heap Sort",
          alg: src_lib_sorter__WEBPACK_IMPORTED_MODULE_3__["SortingAlg"].heap,
          active: false
        }];
        this.$start = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.randomize();
          this.delayToken.set(this.delay);
        }
      }, {
        key: "randomize",
        value: function randomize() {
          var _this = this;

          this.cachedRandomData = Array(this.maxArraySize).fill(null).map(function () {
            return {
              value: Math.floor(Math.random() * _this.maxValue),
              active: false,
              finalrun: false,
              swapping: false,
              pivot: false
            };
          });
          this.reset();
        }
      }, {
        key: "reset",
        value: function reset() {
          if (typeof this.stoppingToken !== "undefined") this.stoppingToken.stop();
          this.data = this.cachedRandomData.slice(0, this.arraySize);

          for (var i = 0; i < this.data.length; i++) {
            this.data[i] = Object.assign({}, this.data[i], {
              active: false,
              swapping: false,
              finalrun: false,
              pivot: false
            });
          }

          delete this.stoppingToken;
        }
      }, {
        key: "sort",
        value: function sort(data) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var comparator;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (typeof this.stoppingToken !== "undefined") this.stop();
                    this.$start.next(true);

                    comparator = function comparator(a, b) {
                      return a.value > b.value;
                    };

                    this.stoppingToken = new src_lib_util_tokens__WEBPACK_IMPORTED_MODULE_5__["CancellationToken"]();
                    data.forEach(function (q) {
                      return Object.assign({}, q, {
                        active: false,
                        swapping: false,
                        finalrun: false,
                        pivot: false
                      });
                    });
                    _context.t0 = this.sortingAlg.alg;
                    _context.next = _context.t0 === src_lib_sorter__WEBPACK_IMPORTED_MODULE_3__["SortingAlg"].bubble ? 8 : _context.t0 === src_lib_sorter__WEBPACK_IMPORTED_MODULE_3__["SortingAlg"].merge ? 11 : _context.t0 === src_lib_sorter__WEBPACK_IMPORTED_MODULE_3__["SortingAlg"].heap ? 14 : 17;
                    break;

                  case 8:
                    _context.next = 10;
                    return Object(src_lib_sorter__WEBPACK_IMPORTED_MODULE_3__["bubbleSort"])(data, comparator, this.delayToken, this.stoppingToken);

                  case 10:
                    return _context.abrupt("break", 17);

                  case 11:
                    _context.next = 13;
                    return Object(src_lib_sorter__WEBPACK_IMPORTED_MODULE_3__["mergeSort"])(data, comparator, this.delayToken, this.stoppingToken);

                  case 13:
                    return _context.abrupt("break", 17);

                  case 14:
                    _context.next = 16;
                    return Object(src_lib_sorter__WEBPACK_IMPORTED_MODULE_3__["heapSort"])(data, comparator, this.delayToken, this.stoppingToken);

                  case 16:
                    return _context.abrupt("break", 17);

                  case 17:
                    if (!(typeof this.stoppingToken !== "undefined" && !this.stoppingToken.cancelRequested)) {
                      _context.next = 22;
                      break;
                    }

                    data.forEach(function (q) {
                      return Object.assign({}, q, {
                        active: true
                      });
                    });
                    _context.next = 21;
                    return Object(src_lib_util_sleep__WEBPACK_IMPORTED_MODULE_4__["sleep"])(1000);

                  case 21:
                    data.forEach(function (q) {
                      return Object.assign({}, q, {
                        active: false
                      });
                    });

                  case 22:
                    this.stop();

                  case 23:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "stop",
        value: function stop() {
          var _this2 = this;

          this.$start.next(false);
          if (typeof this.stoppingToken !== "undefined") this.stoppingToken.stop();
          this.data.forEach(function (q) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      return _context2.abrupt("return", Object.assign({}, q, {
                        active: false,
                        swapping: false,
                        finalrun: false,
                        pivot: false
                      }));

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));
          });
        }
      }, {
        key: "setItemWidth",
        value: function setItemWidth(_ref) {
          var value = _ref.value;
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var offset;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    offset = Math.log(1 - 5 / this.maxWidth) * this.widthScalingRate * -1;
                    this.arraySize = 5 + this.maxArraySize * (1 - Math.exp(-value / this.arraySizeScalingRate));
                    this.itemWidth = 5 + this.maxWidth * Math.exp(-(value + offset) / this.widthScalingRate);
                    this.reset();

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "setDelay",
        value: function setDelay(_ref2) {
          var value = _ref2.value;
          var delay = this.maxDelay * Math.exp(-value / this.delayScalingRate);
          this.delayToken.set(delay);
        }
      }, {
        key: "setSorter",
        value: function setSorter(sort) {
          this.availableSortingAlg = this.availableSortingAlg.map(function (q) {
            return Object.assign({}, q, {
              active: q.alg === sort
            });
          });
        }
      }, {
        key: "sortingAlg",
        get: function get() {
          return this.availableSortingAlg.find(function (q) {
            return q.active;
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-root",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/lib/sorter/bubblesort.ts":
  /*!**************************************!*\
    !*** ./src/lib/sorter/bubblesort.ts ***!
    \**************************************/

  /*! exports provided: bubbleSort */

  /***/
  function srcLibSorterBubblesortTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "bubbleSort", function () {
      return bubbleSort;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _util_sleep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../util/sleep */
    "./src/lib/util/sleep.ts");

    function bubbleSort(data, comparator, delayToken, stoppingToken) {
      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var n, i, cur, next, temp;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                n = data.length - 1;

              case 1:
                i = 0;

              case 2:
                if (!(i < n)) {
                  _context4.next = 28;
                  break;
                }

                if (!stoppingToken.cancelRequested) {
                  _context4.next = 5;
                  break;
                }

                return _context4.abrupt("break", 28);

              case 5:
                cur = data[i];
                next = data[i + 1];
                cur.active = true;
                next.active = true;

                if (!comparator(cur, next)) {
                  _context4.next = 21;
                  break;
                }

                _context4.next = 12;
                return Object(_util_sleep__WEBPACK_IMPORTED_MODULE_1__["sleep"])(delayToken.delay);

              case 12:
                cur.swapping = true;
                next.swapping = true;
                _context4.next = 16;
                return Object(_util_sleep__WEBPACK_IMPORTED_MODULE_1__["sleep"])(delayToken.delay);

              case 16:
                temp = cur.value;
                cur.value = next.value;
                next.value = temp;
                cur.swapping = false;
                next.swapping = false;

              case 21:
                _context4.next = 23;
                return Object(_util_sleep__WEBPACK_IMPORTED_MODULE_1__["sleep"])(delayToken.delay);

              case 23:
                cur.active = false;
                next.active = false;

              case 25:
                i++;
                _context4.next = 2;
                break;

              case 28:
                if (!stoppingToken.cancelRequested) data[n].finalrun = true;
                n--;

              case 30:
                if (n && !stoppingToken.cancelRequested) {
                  _context4.next = 1;
                  break;
                }

              case 31:
                if (!stoppingToken.cancelRequested) data[0].finalrun = true;

              case 32:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));
    }
    /***/

  },

  /***/
  "./src/lib/sorter/heapsort.ts":
  /*!************************************!*\
    !*** ./src/lib/sorter/heapsort.ts ***!
    \************************************/

  /*! exports provided: heapSort */

  /***/
  function srcLibSorterHeapsortTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "heapSort", function () {
      return heapSort;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _util_sleep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../util/sleep */
    "./src/lib/util/sleep.ts");

    function heap_root(input, i, len, comparator, delayToken, stoppingToken) {
      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var left, right, max;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                left = 2 * i + 1;
                right = 2 * i + 2;
                max = i;

                if (left < len && comparator(input[left], input[max])) {
                  max = left;
                }

                if (right < len && comparator(input[right], input[max])) {
                  max = right;
                }

                input[i].active = true;
                input[max].active = true;
                _context5.next = 9;
                return Object(_util_sleep__WEBPACK_IMPORTED_MODULE_1__["sleep"])(delayToken.delay);

              case 9:
                if (!(max != i)) {
                  _context5.next = 20;
                  break;
                }

                input[i].swapping = true;
                input[max].swapping = true;
                _context5.next = 14;
                return Object(_util_sleep__WEBPACK_IMPORTED_MODULE_1__["sleep"])(delayToken.delay);

              case 14:
                _context5.next = 16;
                return swap(input, i, max);

              case 16:
                input[i].swapping = false;
                input[max].swapping = false;
                _context5.next = 20;
                return heap_root(input, max, len, comparator, delayToken, stoppingToken);

              case 20:
                input[i].active = false;
                input[max].active = false;

              case 22:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));
    }

    function swap(input, index1, index_B) {
      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var temp;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                temp = input[index1];
                input[index1] = input[index_B];
                input[index_B] = temp;

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));
    }

    function heapSort(data, comparator, delayToken, stoppingToken) {
      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var len, i;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                len = data.length;
                i = Math.floor(len / 2);

              case 2:
                if (!(i >= 0)) {
                  _context7.next = 10;
                  break;
                }

                if (!stoppingToken.cancelRequested) {
                  _context7.next = 5;
                  break;
                }

                return _context7.abrupt("break", 10);

              case 5:
                _context7.next = 7;
                return heap_root(data, i, len, comparator, delayToken, stoppingToken);

              case 7:
                i -= 1;
                _context7.next = 2;
                break;

              case 10:
                i = data.length - 1;

              case 11:
                if (!(i > 0)) {
                  _context7.next = 23;
                  break;
                }

                if (!stoppingToken.cancelRequested) {
                  _context7.next = 14;
                  break;
                }

                return _context7.abrupt("break", 23);

              case 14:
                _context7.next = 16;
                return swap(data, 0, i);

              case 16:
                len--;
                _context7.next = 19;
                return heap_root(data, 0, len, comparator, delayToken, stoppingToken);

              case 19:
                data[len].finalrun = true;

              case 20:
                i--;
                _context7.next = 11;
                break;

              case 23:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));
    }
    /***/

  },

  /***/
  "./src/lib/sorter/index.ts":
  /*!*********************************!*\
    !*** ./src/lib/sorter/index.ts ***!
    \*********************************/

  /*! exports provided: SortingAlg, bubbleSort, quickSort, mergeSort, heapSort */

  /***/
  function srcLibSorterIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortingAlg", function () {
      return SortingAlg;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _bubblesort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./bubblesort */
    "./src/lib/sorter/bubblesort.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "bubbleSort", function () {
      return _bubblesort__WEBPACK_IMPORTED_MODULE_1__["bubbleSort"];
    });
    /* harmony import */


    var _quicksort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./quicksort */
    "./src/lib/sorter/quicksort.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "quickSort", function () {
      return _quicksort__WEBPACK_IMPORTED_MODULE_2__["quickSort"];
    });
    /* harmony import */


    var _mergesort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./mergesort */
    "./src/lib/sorter/mergesort.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "mergeSort", function () {
      return _mergesort__WEBPACK_IMPORTED_MODULE_3__["mergeSort"];
    });
    /* harmony import */


    var _heapsort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./heapsort */
    "./src/lib/sorter/heapsort.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "heapSort", function () {
      return _heapsort__WEBPACK_IMPORTED_MODULE_4__["heapSort"];
    });

    var SortingAlg;

    (function (SortingAlg) {
      SortingAlg[SortingAlg["bubble"] = 0] = "bubble";
      SortingAlg[SortingAlg["merge"] = 1] = "merge";
      SortingAlg[SortingAlg["heap"] = 2] = "heap";
    })(SortingAlg || (SortingAlg = {}));
    /***/

  },

  /***/
  "./src/lib/sorter/mergesort.ts":
  /*!*************************************!*\
    !*** ./src/lib/sorter/mergesort.ts ***!
    \*************************************/

  /*! exports provided: mergeSort */

  /***/
  function srcLibSorterMergesortTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mergeSort", function () {
      return mergeSort;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _util_sleep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../util/sleep */
    "./src/lib/util/sleep.ts");

    function merge(array, left, right, comparator, stoppingToken) {
      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        var nL, nR, l, r, a, _left, _right;

        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                nL = left.length, nR = right.length;
                l = 0, r = 0, a = 0;

              case 2:
                if (!(l < nL && r < nR)) {
                  _context8.next = 11;
                  break;
                }

                _left = left[l];
                _right = right[r];

                if (!stoppingToken.cancelRequested) {
                  _context8.next = 7;
                  break;
                }

                return _context8.abrupt("break", 11);

              case 7:
                if (!comparator(_left, _right)) {
                  array[a] = Object.assign({}, _left);
                  l++;
                } else {
                  array[a] = Object.assign({}, _right);
                  r++;
                }

                a++;
                _context8.next = 2;
                break;

              case 11:
                while (l < nL) {
                  array[a] = left[l];
                  l++;
                  a++;
                }

                while (r < nR) {
                  array[a] = right[r];
                  r++;
                  a++;
                }

              case 13:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));
    }

    function mergeSorter(originalArray, array, comparator, delayToken, stoppingToken) {
      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
        var len, mid, left, right, arrayRef, next, i, ref, _n;

        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                len = array.length;

                if (!(len === 1)) {
                  _context9.next = 3;
                  break;
                }

                return _context9.abrupt("return");

              case 3:
                mid = Math.round(len / 2);
                left = array.slice(0, mid);
                right = array.slice(mid, len);
                _context9.next = 8;
                return mergeSorter(originalArray, left, comparator, delayToken, stoppingToken);

              case 8:
                _context9.next = 10;
                return mergeSorter(originalArray, right, comparator, delayToken, stoppingToken);

              case 10:
                arrayRef = array.slice(0);
                _context9.next = 13;
                return merge(array, left, right, comparator, stoppingToken);

              case 13:
                next = array;
                i = 0;

              case 15:
                if (!(i < len)) {
                  _context9.next = 38;
                  break;
                }

                if (!stoppingToken.cancelRequested) {
                  _context9.next = 18;
                  break;
                }

                return _context9.abrupt("break", 38);

              case 18:
                ref = arrayRef[i];
                _n = next[i];
                if (originalArray.length === array.length) _n.finalrun = true;
                _n.active = true;
                originalArray[_n.index].active = true;
                originalArray[ref.index].active = true;
                _context9.next = 26;
                return Object(_util_sleep__WEBPACK_IMPORTED_MODULE_1__["sleep"])(delayToken.delay);

              case 26:
                if (!comparator(originalArray[_n.index], originalArray[ref.index]) && originalArray[_n.index] !== originalArray[ref.index]) {
                  originalArray[_n.index].swapping = true;
                  originalArray[ref.index].swapping = true;
                }

                _context9.next = 29;
                return Object(_util_sleep__WEBPACK_IMPORTED_MODULE_1__["sleep"])(delayToken.delay);

              case 29:
                originalArray[_n.index].swapping = false;
                originalArray[ref.index].swapping = false;
                originalArray[ref.index] = _n;
                _n.active = false;
                originalArray[_n.index].active = false;
                originalArray[ref.index].active = false;
                i++;
                _context9.next = 15;
                break;

              case 38:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));
    }

    function mergeSort(array, comparator, delayToken, stoppingToken) {
      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
        var arr;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                arr = array.map(function (q, index) {
                  return Object.assign({}, q, {
                    index: index
                  });
                });
                _context10.next = 3;
                return mergeSorter(array, arr, comparator, delayToken, stoppingToken);

              case 3:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));
    }
    /***/

  },

  /***/
  "./src/lib/sorter/quicksort.ts":
  /*!*************************************!*\
    !*** ./src/lib/sorter/quicksort.ts ***!
    \*************************************/

  /*! exports provided: quickSort */

  /***/
  function srcLibSorterQuicksortTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "quickSort", function () {
      return quickSort;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _util_sleep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../util/sleep */
    "./src/lib/util/sleep.ts");

    function swap(array, indexA, indexB) {
      var temp = array[indexA];
      array[indexA] = array[indexB];
      array[indexB] = temp;
    }

    function partition(array, pivot, left, right, comparator, delayToken, stoppingToken) {
      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
        var storeIndex, pivotValue, v;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                if (!stoppingToken.cancelRequested) {
                  _context11.next = 2;
                  break;
                }

                return _context11.abrupt("return");

              case 2:
                storeIndex = left, pivotValue = array[pivot];
                swap(array, pivot, right);
                v = left;

              case 5:
                if (!(v < right)) {
                  _context11.next = 29;
                  break;
                }

                if (!stoppingToken.cancelRequested) {
                  _context11.next = 8;
                  break;
                }

                return _context11.abrupt("break", 29);

              case 8:
                array[v].active = true;
                array[storeIndex].active = true;
                _context11.next = 12;
                return Object(_util_sleep__WEBPACK_IMPORTED_MODULE_1__["sleep"])(delayToken.delay);

              case 12:
                if (!(comparator(pivotValue, array[v]) && pivotValue.value !== array[v].value)) {
                  _context11.next = 24;
                  break;
                }

                array[v].swapping = true;
                array[storeIndex].swapping = true;
                _context11.next = 17;
                return Object(_util_sleep__WEBPACK_IMPORTED_MODULE_1__["sleep"])(delayToken.delay);

              case 17:
                swap(array, v, storeIndex);
                array[v].swapping = false;
                array[storeIndex].swapping = false;
                _context11.next = 22;
                return Object(_util_sleep__WEBPACK_IMPORTED_MODULE_1__["sleep"])(delayToken.delay);

              case 22:
                array[storeIndex].active = false;
                storeIndex++;

              case 24:
                array[v].active = false;
                array[storeIndex].active = false;

              case 26:
                v++;
                _context11.next = 5;
                break;

              case 29:
                swap(array, right, storeIndex);
                return _context11.abrupt("return", storeIndex);

              case 31:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));
    }

    function sort(array, left, right, comparator, delayToken, stoppingToken) {
      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
        var _this3 = this;

        var pivot, newPivot;
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                pivot = null;

                if (typeof left !== "number") {
                  left = 0;
                }

                if (typeof right !== "number") {
                  right = array.length - 1;
                }

                if (!(left < right)) {
                  _context13.next = 14;
                  break;
                }

                pivot = left + Math.ceil((right - left) * 0.5);
                array[pivot].pivot = true;
                _context13.next = 8;
                return partition(array, pivot, left, right, comparator, delayToken, stoppingToken);

              case 8:
                newPivot = _context13.sent;
                _context13.next = 11;
                return sort(array, left, newPivot - 1, comparator, delayToken, stoppingToken);

              case 11:
                _context13.next = 13;
                return sort(array, newPivot + 1, right, comparator, delayToken, stoppingToken);

              case 13:
                array.forEach(function (q) {
                  return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
                    return regeneratorRuntime.wrap(function _callee12$(_context12) {
                      while (1) {
                        switch (_context12.prev = _context12.next) {
                          case 0:
                            return _context12.abrupt("return", q.pivot = false);

                          case 1:
                          case "end":
                            return _context12.stop();
                        }
                      }
                    }, _callee12);
                  }));
                });

              case 14:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }));
    }

    function quickSort(data, comparator, delay, stoppingToken) {
      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return sort(data, undefined, undefined, comparator, delay, stoppingToken);

              case 2:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14);
      }));
    }
    /***/

  },

  /***/
  "./src/lib/util/sleep.ts":
  /*!*******************************!*\
    !*** ./src/lib/util/sleep.ts ***!
    \*******************************/

  /*! exports provided: sleep */

  /***/
  function srcLibUtilSleepTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "sleep", function () {
      return sleep;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    function sleep(ms) {
      return new Promise(function (res) {
        setTimeout(function () {
          return res();
        }, ms);
      });
    }
    /***/

  },

  /***/
  "./src/lib/util/tokens.ts":
  /*!********************************!*\
    !*** ./src/lib/util/tokens.ts ***!
    \********************************/

  /*! exports provided: CancellationToken, DelayToken */

  /***/
  function srcLibUtilTokensTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CancellationToken", function () {
      return CancellationToken;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DelayToken", function () {
      return DelayToken;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var CancellationToken = /*#__PURE__*/function () {
      function CancellationToken() {
        _classCallCheck(this, CancellationToken);

        this._cancelRequested = false;
        this._pause = false;
      }

      _createClass(CancellationToken, [{
        key: "stop",
        value: function stop() {
          this._cancelRequested = true;
        }
      }, {
        key: "pause",
        value: function pause(_pause) {
          this._pause = _pause;
        }
      }, {
        key: "cancelRequested",
        get: function get() {
          return this._cancelRequested;
        }
      }, {
        key: "paused",
        get: function get() {
          return this._pause;
        }
      }]);

      return CancellationToken;
    }();

    var DelayToken = /*#__PURE__*/function () {
      function DelayToken() {
        _classCallCheck(this, DelayToken);

        this._delay = 0;
      }

      _createClass(DelayToken, [{
        key: "set",
        value: function set(delay) {
          this._delay = delay;
        }
      }, {
        key: "delay",
        get: function get() {
          return this._delay;
        }
      }]);

      return DelayToken;
    }();
    /***/

  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Snehal\Documents\GitHub\Angular\sort-visualizer\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map