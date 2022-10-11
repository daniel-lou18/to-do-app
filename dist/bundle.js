/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./roboto-v30-latin-regular.woff2 */ "./src/roboto-v30-latin-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./roboto-v30-latin-regular.woff */ "./src/roboto-v30-latin-regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'Roboto';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2'),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\n  font-weight: 400;\n  font-style: normal;\n}\n\n:root {\n  --main-hd-color: rgb(255, 99, 71);\n  --main-hd-color-hover: rgb(200, 99, 71);\n  --main-bg-color: rgb(245,245,245, 0.5);\n  --main-hv-color: rgb(230,230,230);\n  --btn-bg-color: rgb(255,218,185);\n  --btn-bg-color-hover: rgb(239, 204, 174);\n  --main-bd-color: rgb(128, 128, 128, 0.5);\n  --main-bd-radius: 5px;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: 'Roboto', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\nli {\n  list-style: none;\n}\n\nbody {\n  display: grid;\n  align-content: start;\n  grid-template-columns: 325px 1fr;\n  grid-template-rows: 50px calc(100vh - 50px);\n  height: 100vh;\n}\n\nbody > * {\n  padding: 15px 3px 15px 35px;\n}\n\n.content-container {\n  padding-top: 30px;\n}\n\n.header-container {\n  background-color: var(--main-hd-color);\n\n}\n\n/* body>div:nth-child(odd) {\n  padding-right: 20px;\n} */\n\n.header-container-left {\n  display: flex;\n  justify-content: space-between;\n  padding-left: 43px;\n  padding-right: 25px;\n}\n\nspan.text-italic {\n  font-style: italic;\n  color: white;\n}\n\n.todo-container {\n  padding-left: 12%;\n  padding-right: 12%;\n}\n\n.projects-container {\n  background-color: var(--main-bg-color);\n}\n\n.project {\n  display: grid;\n  grid-template-columns: 24px 1fr 30px;\n  align-items: center;\n  padding-top: 7px;\n  padding-bottom: 7px;\n  padding-left: 8px;\n  border-radius: 5px;\n}\n\nli.project:hover, svg.cross:hover {\n  background-color: var(--main-hv-color);\n  cursor: pointer;\n}\n\ndiv.project button.add {\n  padding-right: 17px;\n\n}\n\n.count, .project button:last-child {\n  justify-self: end;\n  padding-right: 10px;\n  padding-right: 25px;\n  color: grey;\n  font-size: 0.8rem;\n}\n\n.title {\n  padding-left: 10px;\n}\n\n.title-projects-container {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.todo-container .btn-svg {\n  color: rgb(150, 150, 150);\n  border-radius: 3px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n}\n\n.todo-container .btn-svg:hover {\n  color: black;\n  background-color: rgb(220,220,220, 1);\n  cursor: pointer;\n}\n\n.task:hover .btn-svg, .todo-header:hover .btn-svg {\n  opacity: 0.6;\n}\n\n.title-projects-title {\n  font-weight: 600;\n}\n\ninput, .btn-svg, textarea {\n  border: none;\n  appearance: none;\n  outline: none;\n  background: none;\n}\n\ninput.list-title {\n  font-size: 1.2rem;\n}\n\n.list-title-container {\n  display: grid;\n  grid-template-columns: 25px 1fr repeat(3, 25px);\n  grid-template-rows: 30px;\n  align-items: start;\n  padding-top: 7px;\n  margin-bottom: 15px;\n}\n\n.task {\n  position: relative;\n  display: grid;\n  grid-template-columns: 1fr repeat(4, 25px);\n  grid-template-rows: 25px 17px 20px;\n  align-items: center;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid lightgrey;\n}\n\n.todo-header:hover, .todo-body:hover {\n  cursor: pointer;\n}\n\n\n.task:first-child .task-check {\n  position: absolute;\n  left: -100vw;\n}\n\n.custom-checkbox {\n  --check: 18px;\n  display: inline-block;\n  height: var(--check);\n  width: var(--check);\n  margin-right: 12px;\n  padding-left: 1px;\n  border: 2px solid rgb(30, 144, 255);\n  background-color: rgb(30, 144, 255, 0.2);\n  border-radius: 50%;\n}\n\n.task label:hover .custom-checkbox {\n  transform: scale(1.1);\n}\n\n.task:first-child .task-check + label span.task-text {\n  position: relative;\n}\n\n.task:first-child .task-check:checked + label span.task-text:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  height: 2px;\n  background: rgb(70, 70, 70, 0.6);\n}\n\n.custom-checkbox svg {\n  opacity: 0;\n}\n\n.task:first-child .task-check:checked + label svg {\n  opacity: 1;\n}\n\n.task label {\n  display: flex;\n  align-items: center;\n  font-size: 0.9rem;\n}\n\n.task label:hover {\n  cursor: pointer;\n}\n\n.task-check {\n  appearance: auto;\n}\n\n.task-text {\n  font-size: 0.9rem;\n}\n\np.task-descr {\n  justify-self: start;\n  font-size: 0.8rem;\n  color: grey;\n  margin-left: 30px;\n}\n\np.task-descr:hover {\n  color: black;\n}\n\n\n.calendar-container {\n  grid-row: 3 / 4;\n  display: flex;\n  align-items: center;\n  margin-left: 28px;\n}\n\n.task-calendar {\n  font-size: 0.8rem;\n  color: grey;\n}\n\n.form-main {\n  padding: 8px 8px;\n  border: 1px solid rgb(200, 200, 200, 0.5);\n  border-radius: 8px;\n}\n\n.form-text {\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n\n.form-descr {\n  font-size: 0.8rem;\n  color: black;\n  resize: none;\n  margin-top: 5px;\n}\n\n.task-form button {\n  height: 28px;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  margin-right: 8px;\n  padding: 7px 5px;\n  border: 1px solid var(--main-bd-color);\n  border-radius: var(--main-bd-radius);\n  background: none;\n  font-size: 0.8rem;\n  cursor: pointer;\n}\n\n.form-params {\n  display: flex;\n  justify-content: flex-start;\n}\n\n.form-project-container {\n  position: relative;\n}\n\nbutton.form-project, div.project-input {\n  border: 1px solid var(--main-bd-color);\n  border-radius: var(--main-bd-radius);\n  padding: 0;\n  margin-right: 8px;\n\n}\n\nbutton.form-project, li.project-input {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 0 12px 0 5px;\n}\n\nbutton.form-project {\n\n}\n\ndiv.project-input {\n  position: absolute;\n  top: 0;\n  background-color: white;\n  z-index: 5;\n}\n\nli.project-input {\n  height: 28px;\n}\n\nli.project-input:first-child {\n  background-color: var(--main-hv-color);\n}\n\nli.project-input:first-child:after {\n  content: \"\";\n  position: absolute;\n  height: 1px;\n  top: 20%;\n  left: 0;\n  right: 0;\n  background-color: var(--main-bd-color);\n}\n\n.project-input .option {\n  font-size: 0.8rem;\n}\n\n.project-input .option:hover {\n  background-color: rgb(245,245,245, 0.8);\n}\n\n.form-save {\n  display: flex;\n  margin-top: 8px;\n  justify-content: flex-end;\n}\n\n.form-save button {\n  padding: 7px 12px;\n  border: none;\n  letter-spacing: 0.05rem;\n}\n\n.form-save button:last-child {\n  margin-right: 0;\n  background-color: var(--main-hd-color);\n  color: white;\n}\n\n.form-save button:last-child:hover {\n  background-color: var(--main-hd-color-hover);\n}\n\n.form-save button:first-child {\n  background-color: var(--btn-bg-color);\n}\n\n.form-save button:first-child:hover {\n  background-color: var(--btn-bg-color-hover);\n}\n\n.backdrop {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 3;\n  background-color: var(--main-bd-color);\n}\n\n.modal {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 5;\n  width: 60%;\n  padding: 15px;\n  border-radius: var(--main-bd-radius);\n  background: white;\n}\n\n.modal .form-main {\n  border: none;\n}\n\n.hidden {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'Roboto';\n  src: url('./roboto-v30-latin-regular.woff2') format('woff2'),\n    url('./roboto-v30-latin-regular.woff') format('woff');\n  font-weight: 400;\n  font-style: normal;\n}\n\n:root {\n  --main-hd-color: rgb(255, 99, 71);\n  --main-hd-color-hover: rgb(200, 99, 71);\n  --main-bg-color: rgb(245,245,245, 0.5);\n  --main-hv-color: rgb(230,230,230);\n  --btn-bg-color: rgb(255,218,185);\n  --btn-bg-color-hover: rgb(239, 204, 174);\n  --main-bd-color: rgb(128, 128, 128, 0.5);\n  --main-bd-radius: 5px;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: 'Roboto', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\nli {\n  list-style: none;\n}\n\nbody {\n  display: grid;\n  align-content: start;\n  grid-template-columns: 325px 1fr;\n  grid-template-rows: 50px calc(100vh - 50px);\n  height: 100vh;\n}\n\nbody > * {\n  padding: 15px 3px 15px 35px;\n}\n\n.content-container {\n  padding-top: 30px;\n}\n\n.header-container {\n  background-color: var(--main-hd-color);\n\n}\n\n/* body>div:nth-child(odd) {\n  padding-right: 20px;\n} */\n\n.header-container-left {\n  display: flex;\n  justify-content: space-between;\n  padding-left: 43px;\n  padding-right: 25px;\n}\n\nspan.text-italic {\n  font-style: italic;\n  color: white;\n}\n\n.todo-container {\n  padding-left: 12%;\n  padding-right: 12%;\n}\n\n.projects-container {\n  background-color: var(--main-bg-color);\n}\n\n.project {\n  display: grid;\n  grid-template-columns: 24px 1fr 30px;\n  align-items: center;\n  padding-top: 7px;\n  padding-bottom: 7px;\n  padding-left: 8px;\n  border-radius: 5px;\n}\n\nli.project:hover, svg.cross:hover {\n  background-color: var(--main-hv-color);\n  cursor: pointer;\n}\n\ndiv.project button.add {\n  padding-right: 17px;\n\n}\n\n.count, .project button:last-child {\n  justify-self: end;\n  padding-right: 10px;\n  padding-right: 25px;\n  color: grey;\n  font-size: 0.8rem;\n}\n\n.title {\n  padding-left: 10px;\n}\n\n.title-projects-container {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.todo-container .btn-svg {\n  color: rgb(150, 150, 150);\n  border-radius: 3px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n}\n\n.todo-container .btn-svg:hover {\n  color: black;\n  background-color: rgb(220,220,220, 1);\n  cursor: pointer;\n}\n\n.task:hover .btn-svg, .todo-header:hover .btn-svg {\n  opacity: 0.6;\n}\n\n.title-projects-title {\n  font-weight: 600;\n}\n\ninput, .btn-svg, textarea {\n  border: none;\n  appearance: none;\n  outline: none;\n  background: none;\n}\n\ninput.list-title {\n  font-size: 1.2rem;\n}\n\n.list-title-container {\n  display: grid;\n  grid-template-columns: 25px 1fr repeat(3, 25px);\n  grid-template-rows: 30px;\n  align-items: start;\n  padding-top: 7px;\n  margin-bottom: 15px;\n}\n\n.task {\n  position: relative;\n  display: grid;\n  grid-template-columns: 1fr repeat(4, 25px);\n  grid-template-rows: 25px 17px 20px;\n  align-items: center;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid lightgrey;\n}\n\n.todo-header:hover, .todo-body:hover {\n  cursor: pointer;\n}\n\n\n.task:first-child .task-check {\n  position: absolute;\n  left: -100vw;\n}\n\n.custom-checkbox {\n  --check: 18px;\n  display: inline-block;\n  height: var(--check);\n  width: var(--check);\n  margin-right: 12px;\n  padding-left: 1px;\n  border: 2px solid rgb(30, 144, 255);\n  background-color: rgb(30, 144, 255, 0.2);\n  border-radius: 50%;\n}\n\n.task label:hover .custom-checkbox {\n  transform: scale(1.1);\n}\n\n.task:first-child .task-check + label span.task-text {\n  position: relative;\n}\n\n.task:first-child .task-check:checked + label span.task-text:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  height: 2px;\n  background: rgb(70, 70, 70, 0.6);\n}\n\n.custom-checkbox svg {\n  opacity: 0;\n}\n\n.task:first-child .task-check:checked + label svg {\n  opacity: 1;\n}\n\n.task label {\n  display: flex;\n  align-items: center;\n  font-size: 0.9rem;\n}\n\n.task label:hover {\n  cursor: pointer;\n}\n\n.task-check {\n  appearance: auto;\n}\n\n.task-text {\n  font-size: 0.9rem;\n}\n\np.task-descr {\n  justify-self: start;\n  font-size: 0.8rem;\n  color: grey;\n  margin-left: 30px;\n}\n\np.task-descr:hover {\n  color: black;\n}\n\n\n.calendar-container {\n  grid-row: 3 / 4;\n  display: flex;\n  align-items: center;\n  margin-left: 28px;\n}\n\n.task-calendar {\n  font-size: 0.8rem;\n  color: grey;\n}\n\n.form-main {\n  padding: 8px 8px;\n  border: 1px solid rgb(200, 200, 200, 0.5);\n  border-radius: 8px;\n}\n\n.form-text {\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n\n.form-descr {\n  font-size: 0.8rem;\n  color: black;\n  resize: none;\n  margin-top: 5px;\n}\n\n.task-form button {\n  height: 28px;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  margin-right: 8px;\n  padding: 7px 5px;\n  border: 1px solid var(--main-bd-color);\n  border-radius: var(--main-bd-radius);\n  background: none;\n  font-size: 0.8rem;\n  cursor: pointer;\n}\n\n.form-params {\n  display: flex;\n  justify-content: flex-start;\n}\n\n.form-project-container {\n  position: relative;\n}\n\nbutton.form-project, div.project-input {\n  border: 1px solid var(--main-bd-color);\n  border-radius: var(--main-bd-radius);\n  padding: 0;\n  margin-right: 8px;\n\n}\n\nbutton.form-project, li.project-input {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 0 12px 0 5px;\n}\n\nbutton.form-project {\n\n}\n\ndiv.project-input {\n  position: absolute;\n  top: 0;\n  background-color: white;\n  z-index: 5;\n}\n\nli.project-input {\n  height: 28px;\n}\n\nli.project-input:first-child {\n  background-color: var(--main-hv-color);\n}\n\nli.project-input:first-child:after {\n  content: \"\";\n  position: absolute;\n  height: 1px;\n  top: 20%;\n  left: 0;\n  right: 0;\n  background-color: var(--main-bd-color);\n}\n\n.project-input .option {\n  font-size: 0.8rem;\n}\n\n.project-input .option:hover {\n  background-color: rgb(245,245,245, 0.8);\n}\n\n.form-save {\n  display: flex;\n  margin-top: 8px;\n  justify-content: flex-end;\n}\n\n.form-save button {\n  padding: 7px 12px;\n  border: none;\n  letter-spacing: 0.05rem;\n}\n\n.form-save button:last-child {\n  margin-right: 0;\n  background-color: var(--main-hd-color);\n  color: white;\n}\n\n.form-save button:last-child:hover {\n  background-color: var(--main-hd-color-hover);\n}\n\n.form-save button:first-child {\n  background-color: var(--btn-bg-color);\n}\n\n.form-save button:first-child:hover {\n  background-color: var(--btn-bg-color-hover);\n}\n\n.backdrop {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 3;\n  background-color: var(--main-bd-color);\n}\n\n.modal {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 5;\n  width: 60%;\n  padding: 15px;\n  border-radius: var(--main-bd-radius);\n  background: white;\n}\n\n.modal .form-main {\n  border: none;\n}\n\n.hidden {\n  display: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");



const App = class {
  projects = [];
  constructor() {
    document.addEventListener('click', this.display.bind(this));
    this.init()
  }

  init() {
    const inbox = new _project__WEBPACK_IMPORTED_MODULE_0__["default"]('inbox');
    this.projects.push(inbox);
    const courses = new _project__WEBPACK_IMPORTED_MODULE_0__["default"]('courses', 'cornflowerblue');
    this.projects.push(courses);
    const enfants = new _project__WEBPACK_IMPORTED_MODULE_0__["default"]('enfants', 'crimson');
    this.projects.push(enfants);
    const travaux = new _project__WEBPACK_IMPORTED_MODULE_0__["default"]('travaux', 'darkorange');
    this.projects.push(travaux);
  }

  display(e) {
    const displayModifyTask = function() {
      const htmlFormModify = `<form class="task-form" id="task-0">
      <div class="form-main">
      <div class="form-text">
      <input class="form-text" type="text" name="task-text" id="task-1" value="Pommes" autofocus placeholder= "Tâche">
      </div>
      <div class="form-descr">
      <textarea class="form-descr" name="descr-1" id="descr-1" cols="30" rows="4" placeholder= "Description">à l'épicerie paysanne</textarea>
      </div>
      <div class="form-params">
      <button type="button" class="form-date">
      <svg class="form-date" style="width:15px;height:15px" viewBox="0 0 24 24">
      <path fill="currentColor" d="M19 3C20.11 3 21 3.89 21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.9 3 5 3H6V1H8V3H16V1H18V3H19M19 19V9H5V19H19M19 7V5H5V7H19M7 11H9V17H7V11" />
      </svg>
      <span class="form-date">19 oct</span>
      </button>
      <div class="form-project-container">
      <button type="button" class="form-project">
      <svg class="list-dot" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="cornflowerblue" stroke="none" class="feather feather-circle">
      <circle cx="12" cy="12" r="5"/>
      </svg>
      <span class="form-project">Courses</span>
      </button>
      <div class="project-input">
      <ul class="project-input list">
      <li class="project-input option inbox">
      <svg class="list-dot" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="cornflowerblue" stroke="none" class="feather feather-circle">
      <circle cx="12" cy="12" r="5"/>
      </svg>
      <span class="form-project">Courses</span>
      </li>
      <li class="project-input option inbox">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="dodgerblue" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-inbox"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/>
      <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
      </svg>
      <span class="inbox-title">Inbox</span>
  </li>
  <li class="project-input option" id="list-title-1">
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="cornflowerblue" stroke="none" class="feather feather-circle"><circle cx="12" cy="12" r="5"/></svg>
  <span class="project-input option">Courses</span>
  </li>
  <li class="project-input option" id="list-title-2">
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="crimson" stroke="none" class="feather feather-circle"><circle cx="12" cy="12" r="5"/></svg>
  <span class="project-input option">Enfants</span>
  </li>
  <li class="project-input option" id="list-title-3">
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="darkorange" stroke="none" class="feather feather-circle"><circle cx="12" cy="12" r="5"/></svg>
  <span class="project-input option">Travaux</span>
  </li>
  </ul>
  </div>
  </div>
  <button type="button" class="form-priority">
  <svg class="form-priority xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="red" stroke="red" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-flag">
  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>
  </svg>
  </button>
  </div>
  </div>
  <div class="form-save">
  <button type="button">Annnuler</button>
  <button>Enregistrer</button>
  </div>
        </form>`
        
      const displayFormModify = function() {
        const btnEdit = e.target.closest('.edit-task');
        if (btnEdit) {
          const task = btnEdit.closest('.task');
          task.classList.toggle('hidden');
          task.insertAdjacentHTML('afterend', htmlFormModify);
        };
      };
      
      displayFormModify();
    }
    
    const displayNewTask = function() {
      const backDrop = document.querySelector('.backdrop');
      const htmlNewFormModal = `
      <form class="task-form modal new-task" id="task-0">
      <div class="form-main">
      <div class="form-text">
      <input class="form-text" type="text" name="task-text" id="task-1" autofocus placeholder="Tâche">
      </div>
      <div class="form-descr">
      <textarea class="form-descr" name="descr-1" id="descr-1" cols="30" rows="4" placeholder="Description"></textarea>
      </div>
      <div class="form-params">
      <button type="button" class="form-date">
      <svg class="form-date" style="width:15px;height:15px" viewBox="0 0 24 24">
      <path fill="currentColor" d="M19 3C20.11 3 21 3.89 21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.9 3 5 3H6V1H8V3H16V1H18V3H19M19 19V9H5V19H19M19 7V5H5V7H19M7 11H9V17H7V11" />
      </svg>
      <span class="form-date">Échéance</span>
      </button>
      <div class="form-project-container">
      <button type="button" class="form-project">
      <svg class="list-dot" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="cornflowerblue" stroke="none" class="feather feather-circle">
      <circle cx="12" cy="12" r="5"/>
      </svg>
      <span class="form-project">Courses</span>
      </button>
      <div class="project-input hidden">
      <ul class="project-input list">
      <li class="project-input option selected" data-name= "selected">
      <svg class="list-dot" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="cornflowerblue" stroke="none" class="feather feather-circle">
      <circle cx="12" cy="12" r="5"/>
      </svg>
      <span class="form-project">Courses</span>
      </li>
      <li class="project-input option inbox" data-name= "inbox">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="dodgerblue" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-inbox"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/>
      <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
      </svg>
      <span class="inbox-title">Inbox</span>
      </li>
      </ul>
      </div>
      </div>
      <button type="button" class="form-priority">
      <svg class="form-priority xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="red" stroke="red" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-flag">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>
      </svg>
      </button>
      </div>
      </div>
      <div class="form-save">
      <button type="button">Annnuler</button>
      <button class="save-new-task save">Enregistrer</button>
      </div>
      </form>`;
  
      const displayNewTaskModal = function() {
        const addTask = e.target.closest('button.add-task');
        if (!addTask) return;
        backDrop.classList.toggle('hidden');
        backDrop.insertAdjacentHTML('afterend', htmlNewFormModal);
      };
  
      displayNewTaskModal.call(this);
  
      const saveTask = function() {
        const saveBtn = document.querySelector('.save-new-task');
        const clickSaveBtn = function(e) {
          e.preventDefault();
          const taskForm = e.target.closest(`form.task-form`);
          const taskTextInput = taskForm.querySelector('input.form-text').value;
          const taskDescrInput = taskForm.querySelector('textarea.form-descr').value;  
          const task = new _task__WEBPACK_IMPORTED_MODULE_1__["default"](taskTextInput, taskDescrInput);
          this.projects.forEach(project => project._projectName === 'inbox' && project.tasks.push(task));
          console.log(this.projects, taskForm);
        }
        saveBtn.addEventListener('click', clickSaveBtn.bind(this))
      };
         
      saveTask.call(this);
        
      // const displayProjects = function() {
      //   const projContainer = document.querySelector('.form-project-container');
      //   const clickProjBtn = function(e) {
      //     const btnProjects = e.target.closest('button.form-project');
      //     if (!btnProjects) return;
      //     console.log(btnProjects);
      //     const projectInput = btnProjects.nextElementSibling;
          
      //     if (!btnProjects.classList.contains('active') && !btnProjects.classList.contains('generated')) {
      //       const ulProjects = btnProjects.closest('.form-project-container').querySelector('ul.project-input');
      //       this.projects.forEach((project, index) => {
      //         const projectHtml = `
      //         <li class="project-input option personal" id="project-name-${index}" data-name= "${project._projectName}">
      //         <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill=${project._color} stroke="none" class="feather feather-circle"><circle cx="12" cy="12" r="5"/></svg>
      //         <span class="project-input option">${project._projectName[0].toUpperCase()}${project._projectName.slice(1).toLowerCase()}</span>
      //         </li>`
      //         if (index > 0) {
      //           ulProjects.insertAdjacentHTML('beforeend', projectHtml);
      //         };
      //       })
      //       projectInput.classList.toggle('hidden');
      //       btnProjects.classList.toggle('active');
      //       ulProjects.addEventListener('click', function(e) {
      //         const selectedProject = e.target.closest('li.selected');
      //         if (!selectedProject) return;
      //         projectInput.classList.toggle('hidden');
      //         btnProjects.classList.toggle('active');
      //         btnProjects.classList.add('generated');
      //       });
      //       selectProjectsForm(ulProjects);
      //     };
          
      //     if (!btnProjects.classList.contains('active')) {
      //       projectInput.classList.toggle('hidden');
      //       btnProjects.classList.toggle('active');
      //     };
      //   };
      //   projContainer.addEventListener('click', clickProjBtn.bind(this))
      // }
  
      //   displayProjects.call(this);
        
      //   function selectProjectsForm(element) {
      //     element.addEventListener('click', function(e) {
      //       const selectedElement = element.querySelector('li.selected');
      //       const selectedOption = e.target.closest('li.option');
      //       const cloneSelOption = selectedOption.cloneNode(true);
      //       if (!selectedOption) return;
      //       cloneSelOption.classList.add('selected');
      //       element.removeChild(selectedElement);
      //       element.prepend(cloneSelOption);
      //     })
      //   };
        
        
        
        const displayFormDate = function() {
          const btnDate = e.target.closest('button.form-date');
          if (!btnDate) return;
          console.log(btnDate);
        };
        
        const displayFormPriority = function() {
          const btnPriority = e.target.closest('button.form-priority');
          if (!btnPriority) return;
          console.log(btnPriority);
        };
      
      
  
    };

  }

  
};









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Project = class {
  tasks = [];
  constructor(projectName, color) {
    this._projectName = projectName;
    this._color = color;
    this.message();
  }

  message() {
    console.log('New Project created')
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Task = class {
  constructor(taskName, descr, deadline, project, priority) {
    this._taskName = taskName;
    this._descr = descr;
    this._deadline = deadline;
    this._project = project;
    this._priority = priority;
    this.message()
  }
  
  message() {
    console.log('New Task created')
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

/***/ }),

/***/ "./src/roboto-v30-latin-regular.woff":
/*!*******************************************!*\
  !*** ./src/roboto-v30-latin-regular.woff ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f1e2a76794cb86b2aa8e.woff";

/***/ }),

/***/ "./src/roboto-v30-latin-regular.woff2":
/*!********************************************!*\
  !*** ./src/roboto-v30-latin-regular.woff2 ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b009a76ad6afe4ebd301.woff2";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./src/app.js");



const content = document.querySelector('.todo-container');

const app = new _app__WEBPACK_IMPORTED_MODULE_1__["default"]();

// const Project = class {
//   tasks = [];
//   constructor(projectName, color) {
//     this._projectName = projectName;
//     this._color = color;
//     this.message();
//   }

//   message() {
//     console.log('New Project created')
//   }
// };

// const Task = class {
//   constructor(taskName, descr, deadline, project, priority) {
//     this._taskName = taskName;
//     this._descr = descr;
//     this._deadline = deadline;
//     this._project = project;
//     this._priority = priority;
//     this.message()
//   }
  
//   message() {
//     console.log('New Task created')
//   }
// };

// const App = class {
//   #projects = [];
//   constructor() {
//     document.addEventListener('click', this.displayForm.bind(this));
//     this.init()
//   }

//   init() {
//     const inbox = new Project('inbox');
//     this.#projects.push(inbox);
//     const courses = new Project('courses', 'cornflowerblue');
//     this.#projects.push(courses);
//     const enfants = new Project('enfants', 'crimson');
//     this.#projects.push(enfants);
//     const travaux = new Project('travaux', 'darkorange');
//     this.#projects.push(travaux);
//     console.log(this.#projects)
//   }

//   displayForm(e) {
//     const backDrop = document.querySelector('.backdrop');
//     const htmlNewFormModal = `
//     <form class="task-form modal new-task" id="task-0">
//       <div class="form-main">
//         <div class="form-text">
//           <input class="form-text" type="text" name="task-text" id="task-1" autofocus placeholder="Tâche">
//         </div>
//         <div class="form-descr">
//           <textarea class="form-descr" name="descr-1" id="descr-1" cols="30" rows="4" placeholder="Description"></textarea>
//         </div>
//         <div class="form-params">
//           <button type="button" class="form-date">
//             <svg class="form-date" style="width:15px;height:15px" viewBox="0 0 24 24">
//               <path fill="currentColor" d="M19 3C20.11 3 21 3.89 21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.9 3 5 3H6V1H8V3H16V1H18V3H19M19 19V9H5V19H19M19 7V5H5V7H19M7 11H9V17H7V11" />
//             </svg>
//             <span class="form-date">Échéance</span>
//           </button>
//           <div class="form-project-container">
//             <button type="button" class="form-project">
//                 <svg class="list-dot" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="cornflowerblue" stroke="none" class="feather feather-circle">
//                   <circle cx="12" cy="12" r="5"/>
//                 </svg>
//                 <span class="form-project">Courses</span>
//             </button>
//             <div class="project-input hidden">
//               <ul class="project-input list">
//                 <li class="project-input option selected" data-name= "selected">
//                   <svg class="list-dot" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="cornflowerblue" stroke="none" class="feather feather-circle">
//                     <circle cx="12" cy="12" r="5"/>
//                   </svg>
//                   <span class="form-project">Courses</span>
//                 </li>
//                 <li class="project-input option inbox" data-name= "inbox">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="dodgerblue" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-inbox"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/>
//                     <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
//                   </svg>
//                   <span class="inbox-title">Inbox</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <button type="button" class="form-priority">
//           <svg class="form-priority xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="red" stroke="red" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-flag">
//           <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>
//           </svg>
//           </button>
//         </div>
//       </div>
//       <div class="form-save">
//                 <button type="button">Annnuler</button>
//                 <button class="save-new-task save">Enregistrer</button>
//       </div>
//     </form>`;
//     const htmlFormModify = `<form class="task-form" id="task-0">
//     <div class="form-main">
//     <div class="form-text">
//     <input class="form-text" type="text" name="task-text" id="task-1" value="Pommes" autofocus placeholder= "Tâche">
//     </div>
//     <div class="form-descr">
//     <textarea class="form-descr" name="descr-1" id="descr-1" cols="30" rows="4" placeholder= "Description">à l'épicerie paysanne</textarea>
//     </div>
//     <div class="form-params">
//     <button type="button" class="form-date">
//     <svg class="form-date" style="width:15px;height:15px" viewBox="0 0 24 24">
//     <path fill="currentColor" d="M19 3C20.11 3 21 3.89 21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.9 3 5 3H6V1H8V3H16V1H18V3H19M19 19V9H5V19H19M19 7V5H5V7H19M7 11H9V17H7V11" />
//     </svg>
//     <span class="form-date">19 oct</span>
//     </button>
//     <div class="form-project-container">
//     <button type="button" class="form-project">
//     <svg class="list-dot" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="cornflowerblue" stroke="none" class="feather feather-circle">
//     <circle cx="12" cy="12" r="5"/>
//     </svg>
//     <span class="form-project">Courses</span>
//     </button>
//     <div class="project-input">
//     <ul class="project-input list">
//     <li class="project-input option inbox">
//     <svg class="list-dot" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="cornflowerblue" stroke="none" class="feather feather-circle">
//     <circle cx="12" cy="12" r="5"/>
//     </svg>
//     <span class="form-project">Courses</span>
//     </li>
//     <li class="project-input option inbox">
//     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="dodgerblue" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-inbox"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/>
//     <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
//     </svg>
//     <span class="inbox-title">Inbox</span>
// </li>
// <li class="project-input option" id="list-title-1">
// <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="cornflowerblue" stroke="none" class="feather feather-circle"><circle cx="12" cy="12" r="5"/></svg>
// <span class="project-input option">Courses</span>
// </li>
// <li class="project-input option" id="list-title-2">
// <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="crimson" stroke="none" class="feather feather-circle"><circle cx="12" cy="12" r="5"/></svg>
// <span class="project-input option">Enfants</span>
// </li>
// <li class="project-input option" id="list-title-3">
// <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="darkorange" stroke="none" class="feather feather-circle"><circle cx="12" cy="12" r="5"/></svg>
// <span class="project-input option">Travaux</span>
// </li>
// </ul>
// </div>
// </div>
// <button type="button" class="form-priority">
// <svg class="form-priority xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="red" stroke="red" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-flag">
// <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>
// </svg>
// </button>
// </div>
// </div>
// <div class="form-save">
// <button type="button">Annnuler</button>
// <button>Enregistrer</button>
// </div>
//       </form>`
      
//     const displayFormModify = function() {
//       const btnEdit = e.target.closest('.edit-task');
//       if (btnEdit) {
//         const task = btnEdit.closest('.task');
//         task.classList.toggle('hidden');
//         task.insertAdjacentHTML('afterend', htmlFormModify);
//       }
//     };
    
//     const displayFormDate = function() {
//       const btnDate = e.target.closest('button.form-date');
//       if (!btnDate) return;
//       console.log(btnDate);
//     };
    
//     const displayFormProjects = function() {
//       const btnProjects = e.target.closest('button.form-project');
//       if (!btnProjects) return;
//       const projectInput = btnProjects.nextElementSibling;
//       console.log(btnProjects);
//       if (!btnProjects.classList.contains('active') && !btnProjects.classList.contains('generated')) {
//         const ulProjects = btnProjects.closest('.form-project-container').querySelector('ul.project-input');
//         console.log(btnProjects, ulProjects);
//         app.#projects.forEach((project, index) => {
//           const projectHtml = `
//             <li class="project-input option personal" id="project-name-${index}" data-name= "${project._projectName}">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill=${project._color} stroke="none" class="feather feather-circle"><circle cx="12" cy="12" r="5"/></svg>
//                         <span class="project-input option">${project._projectName[0].toUpperCase()}${project._projectName.slice(1).toLowerCase()}</span>
//             </li>`
//           if (index > 0) {
//             ulProjects.insertAdjacentHTML('beforeend', projectHtml);
//           };
//         })
//         projectInput.classList.toggle('hidden');
//         btnProjects.classList.toggle('active');
//         ulProjects.addEventListener('click', function(e) {
//           const selectedProject = e.target.closest('li.selected');
//           if (!selectedProject) return;
//           projectInput.classList.toggle('hidden');
//           btnProjects.classList.toggle('active');
//           btnProjects.classList.add('generated');
//         });
//       };
//       if (!btnProjects.classList.contains('active')) {
//         projectInput.classList.toggle('hidden');
//         btnProjects.classList.toggle('active');
//       }
//     };
    
//     const selectProjectsForm = function() {
      
//     };
    
//     const displayFormPriority = function() {
//       const btnPriority = e.target.closest('button.form-priority');
//       if (!btnPriority) return;
//       console.log(btnPriority);
//     };
    
//     const createNewTask = function() {
//       const newTaskForm = document.querySelector('.new-task');
//       newTaskForm.addEventListener('click', function(e) {
//         const btnSave = e.target.closest('button.save-new-task');
//         const taskForm = e.target.closest(`form.task-form`);
//         const taskTextInput = taskForm.querySelector('input.form-text').value;
//         const taskDescrInput = taskForm.querySelector('textarea.form-descr').value;
//         e.preventDefault();
//         if (!btnSave) return;
//         console.log(btnSave);

//         const task = new Task(taskTextInput, taskDescrInput);
//         app.#projects.forEach(project => project._projectName === 'inbox' && project.tasks.push(task));
//         console.log(app.#projects, taskForm);
//         });
//     };
  
//     const displayNewTaskModal = function() {
//       const addTask = e.target.closest('button.add-task');
//       if (!addTask) return;
//       backDrop.classList.toggle('hidden');
//       backDrop.insertAdjacentHTML('afterend', htmlNewFormModal);
//       createNewTask();
//     };

//     displayFormModify();
//     displayFormDate();
//     displayFormProjects();
//     displayFormPriority();
//     displayNewTaskModal();

//   };
  
// };
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsUUFBUSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZ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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDRTtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNENBQUc7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEUsTUFBTSxnQkFBZ0IscUJBQXFCO0FBQ3ZILHFIQUFxSCxnQkFBZ0I7QUFDckksZ0VBQWdFLHNDQUFzQyxFQUFFLDRDQUE0QztBQUNwSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL3JvYm90by12MzAtbGF0aW4tcmVndWxhci53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vcm9ib3RvLXYzMC1sYXRpbi1yZWd1bGFyLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1tYWluLWhkLWNvbG9yOiByZ2IoMjU1LCA5OSwgNzEpO1xcbiAgLS1tYWluLWhkLWNvbG9yLWhvdmVyOiByZ2IoMjAwLCA5OSwgNzEpO1xcbiAgLS1tYWluLWJnLWNvbG9yOiByZ2IoMjQ1LDI0NSwyNDUsIDAuNSk7XFxuICAtLW1haW4taHYtY29sb3I6IHJnYigyMzAsMjMwLDIzMCk7XFxuICAtLWJ0bi1iZy1jb2xvcjogcmdiKDI1NSwyMTgsMTg1KTtcXG4gIC0tYnRuLWJnLWNvbG9yLWhvdmVyOiByZ2IoMjM5LCAyMDQsIDE3NCk7XFxuICAtLW1haW4tYmQtY29sb3I6IHJnYigxMjgsIDEyOCwgMTI4LCAwLjUpO1xcbiAgLS1tYWluLWJkLXJhZGl1czogNXB4O1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxubGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24tY29udGVudDogc3RhcnQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMyNXB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCBjYWxjKDEwMHZoIC0gNTBweCk7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5ib2R5ID4gKiB7XFxuICBwYWRkaW5nOiAxNXB4IDNweCAxNXB4IDM1cHg7XFxufVxcblxcbi5jb250ZW50LWNvbnRhaW5lciB7XFxuICBwYWRkaW5nLXRvcDogMzBweDtcXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1oZC1jb2xvcik7XFxuXFxufVxcblxcbi8qIGJvZHk+ZGl2Om50aC1jaGlsZChvZGQpIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufSAqL1xcblxcbi5oZWFkZXItY29udGFpbmVyLWxlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmctbGVmdDogNDNweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XFxufVxcblxcbnNwYW4udGV4dC1pdGFsaWMge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udG9kby1jb250YWluZXIge1xcbiAgcGFkZGluZy1sZWZ0OiAxMiU7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMiU7XFxufVxcblxcbi5wcm9qZWN0cy1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI0cHggMWZyIDMwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDdweDtcXG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxubGkucHJvamVjdDpob3Zlciwgc3ZnLmNyb3NzOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4taHYtY29sb3IpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5kaXYucHJvamVjdCBidXR0b24uYWRkIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDE3cHg7XFxuXFxufVxcblxcbi5jb3VudCwgLnByb2plY3QgYnV0dG9uOmxhc3QtY2hpbGQge1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMjVweDtcXG4gIGNvbG9yOiBncmV5O1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi50aXRsZSB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcblxcbi50aXRsZS1wcm9qZWN0cy1jb250YWluZXIge1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIC5idG4tc3ZnIHtcXG4gIGNvbG9yOiByZ2IoMTUwLCAxNTAsIDE1MCk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIC5idG4tc3ZnOmhvdmVyIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjAsMjIwLDIyMCwgMSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrOmhvdmVyIC5idG4tc3ZnLCAudG9kby1oZWFkZXI6aG92ZXIgLmJ0bi1zdmcge1xcbiAgb3BhY2l0eTogMC42O1xcbn1cXG5cXG4udGl0bGUtcHJvamVjdHMtdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuaW5wdXQsIC5idG4tc3ZnLCB0ZXh0YXJlYSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbmlucHV0Lmxpc3QtdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5saXN0LXRpdGxlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNXB4IDFmciByZXBlYXQoMywgMjVweCk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwcHg7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBwYWRkaW5nLXRvcDogN3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLnRhc2sge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIHJlcGVhdCg0LCAyNXB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjVweCAxN3B4IDIwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDhweDtcXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xcbn1cXG5cXG4udG9kby1oZWFkZXI6aG92ZXIsIC50b2RvLWJvZHk6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4udGFzazpmaXJzdC1jaGlsZCAudGFzay1jaGVjayB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAtMTAwdnc7XFxufVxcblxcbi5jdXN0b20tY2hlY2tib3gge1xcbiAgLS1jaGVjazogMThweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogdmFyKC0tY2hlY2spO1xcbiAgd2lkdGg6IHZhcigtLWNoZWNrKTtcXG4gIG1hcmdpbi1yaWdodDogMTJweDtcXG4gIHBhZGRpbmctbGVmdDogMXB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDMwLCAxNDQsIDI1NSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzAsIDE0NCwgMjU1LCAwLjIpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4udGFzayBsYWJlbDpob3ZlciAuY3VzdG9tLWNoZWNrYm94IHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLnRhc2s6Zmlyc3QtY2hpbGQgLnRhc2stY2hlY2sgKyBsYWJlbCBzcGFuLnRhc2stdGV4dCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50YXNrOmZpcnN0LWNoaWxkIC50YXNrLWNoZWNrOmNoZWNrZWQgKyBsYWJlbCBzcGFuLnRhc2stdGV4dDphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogNTAlO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBiYWNrZ3JvdW5kOiByZ2IoNzAsIDcwLCA3MCwgMC42KTtcXG59XFxuXFxuLmN1c3RvbS1jaGVja2JveCBzdmcge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnRhc2s6Zmlyc3QtY2hpbGQgLnRhc2stY2hlY2s6Y2hlY2tlZCArIGxhYmVsIHN2ZyB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udGFzayBsYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4udGFzayBsYWJlbDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWNoZWNrIHtcXG4gIGFwcGVhcmFuY2U6IGF1dG87XFxufVxcblxcbi50YXNrLXRleHQge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbnAudGFzay1kZXNjciB7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBjb2xvcjogZ3JleTtcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbn1cXG5cXG5wLnRhc2stZGVzY3I6aG92ZXIge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5cXG4uY2FsZW5kYXItY29udGFpbmVyIHtcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDI4cHg7XFxufVxcblxcbi50YXNrLWNhbGVuZGFyIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgY29sb3I6IGdyZXk7XFxufVxcblxcbi5mb3JtLW1haW4ge1xcbiAgcGFkZGluZzogOHB4IDhweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMDAsIDIwMCwgMjAwLCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4uZm9ybS10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmZvcm0tZGVzY3Ige1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBjb2xvcjogYmxhY2s7XFxuICByZXNpemU6IG5vbmU7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbi50YXNrLWZvcm0gYnV0dG9uIHtcXG4gIGhlaWdodDogMjhweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDhweDtcXG4gIHBhZGRpbmc6IDdweCA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tYWluLWJkLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1haW4tYmQtcmFkaXVzKTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZvcm0tcGFyYW1zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5mb3JtLXByb2plY3QtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuYnV0dG9uLmZvcm0tcHJvamVjdCwgZGl2LnByb2plY3QtaW5wdXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWFpbi1iZC1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tYWluLWJkLXJhZGl1cyk7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxuXFxufVxcblxcbmJ1dHRvbi5mb3JtLXByb2plY3QsIGxpLnByb2plY3QtaW5wdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG4gIHBhZGRpbmc6IDAgMTJweCAwIDVweDtcXG59XFxuXFxuYnV0dG9uLmZvcm0tcHJvamVjdCB7XFxuXFxufVxcblxcbmRpdi5wcm9qZWN0LWlucHV0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgei1pbmRleDogNTtcXG59XFxuXFxubGkucHJvamVjdC1pbnB1dCB7XFxuICBoZWlnaHQ6IDI4cHg7XFxufVxcblxcbmxpLnByb2plY3QtaW5wdXQ6Zmlyc3QtY2hpbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1odi1jb2xvcik7XFxufVxcblxcbmxpLnByb2plY3QtaW5wdXQ6Zmlyc3QtY2hpbGQ6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDFweDtcXG4gIHRvcDogMjAlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZC1jb2xvcik7XFxufVxcblxcbi5wcm9qZWN0LWlucHV0IC5vcHRpb24ge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi5wcm9qZWN0LWlucHV0IC5vcHRpb246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwyNDUsMjQ1LCAwLjgpO1xcbn1cXG5cXG4uZm9ybS1zYXZlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4uZm9ybS1zYXZlIGJ1dHRvbiB7XFxuICBwYWRkaW5nOiA3cHggMTJweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xcbn1cXG5cXG4uZm9ybS1zYXZlIGJ1dHRvbjpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4taGQtY29sb3IpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZm9ybS1zYXZlIGJ1dHRvbjpsYXN0LWNoaWxkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4taGQtY29sb3ItaG92ZXIpO1xcbn1cXG5cXG4uZm9ybS1zYXZlIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4tYmctY29sb3IpO1xcbn1cXG5cXG4uZm9ybS1zYXZlIGJ1dHRvbjpmaXJzdC1jaGlsZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4tYmctY29sb3ItaG92ZXIpO1xcbn1cXG5cXG4uYmFja2Ryb3Age1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgei1pbmRleDogMztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmQtY29sb3IpO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHotaW5kZXg6IDU7XFxuICB3aWR0aDogNjAlO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1haW4tYmQtcmFkaXVzKTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG4ubW9kYWwgLmZvcm0tbWFpbiB7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQjswREFDdUQ7RUFDdkQsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyx1Q0FBdUM7RUFDdkMsc0NBQXNDO0VBQ3RD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O0VBQ2Ysc0NBQXNDO0VBQ3RDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLE1BQU07RUFDTixTQUFTO0VBQ1QsVUFBVTtFQUNWLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxVQUFVO0VBQ1YsVUFBVTtFQUNWLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgc3JjOiB1cmwoJy4vcm9ib3RvLXYzMC1sYXRpbi1yZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICB1cmwoJy4vcm9ib3RvLXYzMC1sYXRpbi1yZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbjpyb290IHtcXG4gIC0tbWFpbi1oZC1jb2xvcjogcmdiKDI1NSwgOTksIDcxKTtcXG4gIC0tbWFpbi1oZC1jb2xvci1ob3ZlcjogcmdiKDIwMCwgOTksIDcxKTtcXG4gIC0tbWFpbi1iZy1jb2xvcjogcmdiKDI0NSwyNDUsMjQ1LCAwLjUpO1xcbiAgLS1tYWluLWh2LWNvbG9yOiByZ2IoMjMwLDIzMCwyMzApO1xcbiAgLS1idG4tYmctY29sb3I6IHJnYigyNTUsMjE4LDE4NSk7XFxuICAtLWJ0bi1iZy1jb2xvci1ob3ZlcjogcmdiKDIzOSwgMjA0LCAxNzQpO1xcbiAgLS1tYWluLWJkLWNvbG9yOiByZ2IoMTI4LCAxMjgsIDEyOCwgMC41KTtcXG4gIC0tbWFpbi1iZC1yYWRpdXM6IDVweDtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMjVweCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggY2FsYygxMDB2aCAtIDUwcHgpO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYm9keSA+ICoge1xcbiAgcGFkZGluZzogMTVweCAzcHggMTVweCAzNXB4O1xcbn1cXG5cXG4uY29udGVudC1jb250YWluZXIge1xcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4taGQtY29sb3IpO1xcblxcbn1cXG5cXG4vKiBib2R5PmRpdjpudGgtY2hpbGQob2RkKSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn0gKi9cXG5cXG4uaGVhZGVyLWNvbnRhaW5lci1sZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nLWxlZnQ6IDQzcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xcbn1cXG5cXG5zcGFuLnRleHQtaXRhbGljIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIHtcXG4gIHBhZGRpbmctbGVmdDogMTIlO1xcbiAgcGFkZGluZy1yaWdodDogMTIlO1xcbn1cXG5cXG4ucHJvamVjdHMtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNHB4IDFmciAzMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiA3cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogN3B4O1xcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbmxpLnByb2plY3Q6aG92ZXIsIHN2Zy5jcm9zczpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWh2LWNvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuZGl2LnByb2plY3QgYnV0dG9uLmFkZCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxN3B4O1xcblxcbn1cXG5cXG4uY291bnQsIC5wcm9qZWN0IGJ1dHRvbjpsYXN0LWNoaWxkIHtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XFxuICBjb2xvcjogZ3JleTtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4udGl0bGUtcHJvamVjdHMtY29udGFpbmVyIHtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciAuYnRuLXN2ZyB7XFxuICBjb2xvcjogcmdiKDE1MCwgMTUwLCAxNTApO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciAuYnRuLXN2Zzpob3ZlciB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIwLDIyMCwyMjAsIDEpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzazpob3ZlciAuYnRuLXN2ZywgLnRvZG8taGVhZGVyOmhvdmVyIC5idG4tc3ZnIHtcXG4gIG9wYWNpdHk6IDAuNjtcXG59XFxuXFxuLnRpdGxlLXByb2plY3RzLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbmlucHV0LCAuYnRuLXN2ZywgdGV4dGFyZWEge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG5pbnB1dC5saXN0LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ubGlzdC10aXRsZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjVweCAxZnIgcmVwZWF0KDMsIDI1cHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMHB4O1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgcGFkZGluZy10b3A6IDdweDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcblxcbi50YXNrIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciByZXBlYXQoNCwgMjVweCk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDI1cHggMTdweCAyMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiA4cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXG59XFxuXFxuLnRvZG8taGVhZGVyOmhvdmVyLCAudG9kby1ib2R5OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLnRhc2s6Zmlyc3QtY2hpbGQgLnRhc2stY2hlY2sge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogLTEwMHZ3O1xcbn1cXG5cXG4uY3VzdG9tLWNoZWNrYm94IHtcXG4gIC0tY2hlY2s6IDE4cHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IHZhcigtLWNoZWNrKTtcXG4gIHdpZHRoOiB2YXIoLS1jaGVjayk7XFxuICBtYXJnaW4tcmlnaHQ6IDEycHg7XFxuICBwYWRkaW5nLWxlZnQ6IDFweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigzMCwgMTQ0LCAyNTUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMwLCAxNDQsIDI1NSwgMC4yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnRhc2sgbGFiZWw6aG92ZXIgLmN1c3RvbS1jaGVja2JveCB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi50YXNrOmZpcnN0LWNoaWxkIC50YXNrLWNoZWNrICsgbGFiZWwgc3Bhbi50YXNrLXRleHQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udGFzazpmaXJzdC1jaGlsZCAudGFzay1jaGVjazpjaGVja2VkICsgbGFiZWwgc3Bhbi50YXNrLXRleHQ6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDUwJTtcXG4gIGhlaWdodDogMnB4O1xcbiAgYmFja2dyb3VuZDogcmdiKDcwLCA3MCwgNzAsIDAuNik7XFxufVxcblxcbi5jdXN0b20tY2hlY2tib3ggc3ZnIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi50YXNrOmZpcnN0LWNoaWxkIC50YXNrLWNoZWNrOmNoZWNrZWQgKyBsYWJlbCBzdmcge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnRhc2sgbGFiZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLnRhc2sgbGFiZWw6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1jaGVjayB7XFxuICBhcHBlYXJhbmNlOiBhdXRvO1xcbn1cXG5cXG4udGFzay10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG5wLnRhc2stZGVzY3Ige1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgY29sb3I6IGdyZXk7XFxuICBtYXJnaW4tbGVmdDogMzBweDtcXG59XFxuXFxucC50YXNrLWRlc2NyOmhvdmVyIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuXFxuLmNhbGVuZGFyLWNvbnRhaW5lciB7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAyOHB4O1xcbn1cXG5cXG4udGFzay1jYWxlbmRhciB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGNvbG9yOiBncmV5O1xcbn1cXG5cXG4uZm9ybS1tYWluIHtcXG4gIHBhZGRpbmc6IDhweCA4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjAwLCAyMDAsIDIwMCwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLmZvcm0tdGV4dCB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5mb3JtLWRlc2NyIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcmVzaXplOiBub25lO1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG4udGFzay1mb3JtIGJ1dHRvbiB7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogM3B4O1xcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxuICBwYWRkaW5nOiA3cHggNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWFpbi1iZC1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tYWluLWJkLXJhZGl1cyk7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mb3JtLXBhcmFtcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uZm9ybS1wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmJ1dHRvbi5mb3JtLXByb2plY3QsIGRpdi5wcm9qZWN0LWlucHV0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tYmQtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbWFpbi1iZC1yYWRpdXMpO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcblxcbn1cXG5cXG5idXR0b24uZm9ybS1wcm9qZWN0LCBsaS5wcm9qZWN0LWlucHV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBwYWRkaW5nOiAwIDEycHggMCA1cHg7XFxufVxcblxcbmJ1dHRvbi5mb3JtLXByb2plY3Qge1xcblxcbn1cXG5cXG5kaXYucHJvamVjdC1pbnB1dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHotaW5kZXg6IDU7XFxufVxcblxcbmxpLnByb2plY3QtaW5wdXQge1xcbiAgaGVpZ2h0OiAyOHB4O1xcbn1cXG5cXG5saS5wcm9qZWN0LWlucHV0OmZpcnN0LWNoaWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4taHYtY29sb3IpO1xcbn1cXG5cXG5saS5wcm9qZWN0LWlucHV0OmZpcnN0LWNoaWxkOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICB0b3A6IDIwJTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmQtY29sb3IpO1xcbn1cXG5cXG4ucHJvamVjdC1pbnB1dCAub3B0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4ucHJvamVjdC1pbnB1dCAub3B0aW9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsMjQ1LDI0NSwgMC44KTtcXG59XFxuXFxuLmZvcm0tc2F2ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLXRvcDogOHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLmZvcm0tc2F2ZSBidXR0b24ge1xcbiAgcGFkZGluZzogN3B4IDEycHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNXJlbTtcXG59XFxuXFxuLmZvcm0tc2F2ZSBidXR0b246bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWhkLWNvbG9yKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmZvcm0tc2F2ZSBidXR0b246bGFzdC1jaGlsZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWhkLWNvbG9yLWhvdmVyKTtcXG59XFxuXFxuLmZvcm0tc2F2ZSBidXR0b246Zmlyc3QtY2hpbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLWJnLWNvbG9yKTtcXG59XFxuXFxuLmZvcm0tc2F2ZSBidXR0b246Zmlyc3QtY2hpbGQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLWJnLWNvbG9yLWhvdmVyKTtcXG59XFxuXFxuLmJhY2tkcm9wIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHotaW5kZXg6IDM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJkLWNvbG9yKTtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB6LWluZGV4OiA1O1xcbiAgd2lkdGg6IDYwJTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tYWluLWJkLXJhZGl1cyk7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuXFxuLm1vZGFsIC5mb3JtLW1haW4ge1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcblxuY29uc3QgQXBwID0gY2xhc3Mge1xuICBwcm9qZWN0cyA9IFtdO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZGlzcGxheS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBpbmJveCA9IG5ldyBQcm9qZWN0KCdpbmJveCcpO1xuICAgIHRoaXMucHJvamVjdHMucHVzaChpbmJveCk7XG4gICAgY29uc3QgY291cnNlcyA9IG5ldyBQcm9qZWN0KCdjb3Vyc2VzJywgJ2Nvcm5mbG93ZXJibHVlJyk7XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKGNvdXJzZXMpO1xuICAgIGNvbnN0IGVuZmFudHMgPSBuZXcgUHJvamVjdCgnZW5mYW50cycsICdjcmltc29uJyk7XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKGVuZmFudHMpO1xuICAgIGNvbnN0IHRyYXZhdXggPSBuZXcgUHJvamVjdCgndHJhdmF1eCcsICdkYXJrb3JhbmdlJyk7XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKHRyYXZhdXgpO1xuICB9XG5cbiAgZGlzcGxheShlKSB7XG4gICAgY29uc3QgZGlzcGxheU1vZGlmeVRhc2sgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGh0bWxGb3JtTW9kaWZ5ID0gYDxmb3JtIGNsYXNzPVwidGFzay1mb3JtXCIgaWQ9XCJ0YXNrLTBcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLW1haW5cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXRleHRcIj5cbiAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tdGV4dFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRhc2stdGV4dFwiIGlkPVwidGFzay0xXCIgdmFsdWU9XCJQb21tZXNcIiBhdXRvZm9jdXMgcGxhY2Vob2xkZXI9IFwiVMOiY2hlXCI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWRlc2NyXCI+XG4gICAgICA8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWRlc2NyXCIgbmFtZT1cImRlc2NyLTFcIiBpZD1cImRlc2NyLTFcIiBjb2xzPVwiMzBcIiByb3dzPVwiNFwiIHBsYWNlaG9sZGVyPSBcIkRlc2NyaXB0aW9uXCI+w6AgbCfDqXBpY2VyaWUgcGF5c2FubmU8L3RleHRhcmVhPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1wYXJhbXNcIj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZm9ybS1kYXRlXCI+XG4gICAgICA8c3ZnIGNsYXNzPVwiZm9ybS1kYXRlXCIgc3R5bGU9XCJ3aWR0aDoxNXB4O2hlaWdodDoxNXB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTkgM0MyMC4xMSAzIDIxIDMuODkgMjEgNVYxOUMyMSAyMC4xMSAyMC4xMSAyMSAxOSAyMUg1QzMuODkgMjEgMyAyMC4xIDMgMTlWNUMzIDMuODkgMy45IDMgNSAzSDZWMUg4VjNIMTZWMUgxOFYzSDE5TTE5IDE5VjlINVYxOUgxOU0xOSA3VjVINVY3SDE5TTcgMTFIOVYxN0g3VjExXCIgLz5cbiAgICAgIDwvc3ZnPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmb3JtLWRhdGVcIj4xOSBvY3Q8L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXByb2plY3QtY29udGFpbmVyXCI+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImZvcm0tcHJvamVjdFwiPlxuICAgICAgPHN2ZyBjbGFzcz1cImxpc3QtZG90XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwiY29ybmZsb3dlcmJsdWVcIiBzdHJva2U9XCJub25lXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItY2lyY2xlXCI+XG4gICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjVcIi8+XG4gICAgICA8L3N2Zz5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZm9ybS1wcm9qZWN0XCI+Q291cnNlczwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtaW5wdXRcIj5cbiAgICAgIDx1bCBjbGFzcz1cInByb2plY3QtaW5wdXQgbGlzdFwiPlxuICAgICAgPGxpIGNsYXNzPVwicHJvamVjdC1pbnB1dCBvcHRpb24gaW5ib3hcIj5cbiAgICAgIDxzdmcgY2xhc3M9XCJsaXN0LWRvdFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cImNvcm5mbG93ZXJibHVlXCIgc3Ryb2tlPVwibm9uZVwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWNpcmNsZVwiPlxuICAgICAgPGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCI1XCIvPlxuICAgICAgPC9zdmc+XG4gICAgICA8c3BhbiBjbGFzcz1cImZvcm0tcHJvamVjdFwiPkNvdXJzZXM8L3NwYW4+XG4gICAgICA8L2xpPlxuICAgICAgPGxpIGNsYXNzPVwicHJvamVjdC1pbnB1dCBvcHRpb24gaW5ib3hcIj5cbiAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImRvZGdlcmJsdWVcIiBzdHJva2Utd2lkdGg9XCIxXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItaW5ib3hcIj48cG9seWxpbmUgcG9pbnRzPVwiMjIgMTIgMTYgMTIgMTQgMTUgMTAgMTUgOCAxMiAyIDEyXCIvPlxuICAgICAgPHBhdGggZD1cIk01LjQ1IDUuMTFMMiAxMnY2YTIgMiAwIDAgMCAyIDJoMTZhMiAyIDAgMCAwIDItMnYtNmwtMy40NS02Ljg5QTIgMiAwIDAgMCAxNi43NiA0SDcuMjRhMiAyIDAgMCAwLTEuNzkgMS4xMXpcIi8+XG4gICAgICA8L3N2Zz5cbiAgICAgIDxzcGFuIGNsYXNzPVwiaW5ib3gtdGl0bGVcIj5JbmJveDwvc3Bhbj5cbiAgPC9saT5cbiAgPGxpIGNsYXNzPVwicHJvamVjdC1pbnB1dCBvcHRpb25cIiBpZD1cImxpc3QtdGl0bGUtMVwiPlxuICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cImNvcm5mbG93ZXJibHVlXCIgc3Ryb2tlPVwibm9uZVwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWNpcmNsZVwiPjxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiNVwiLz48L3N2Zz5cbiAgPHNwYW4gY2xhc3M9XCJwcm9qZWN0LWlucHV0IG9wdGlvblwiPkNvdXJzZXM8L3NwYW4+XG4gIDwvbGk+XG4gIDxsaSBjbGFzcz1cInByb2plY3QtaW5wdXQgb3B0aW9uXCIgaWQ9XCJsaXN0LXRpdGxlLTJcIj5cbiAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJjcmltc29uXCIgc3Ryb2tlPVwibm9uZVwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWNpcmNsZVwiPjxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiNVwiLz48L3N2Zz5cbiAgPHNwYW4gY2xhc3M9XCJwcm9qZWN0LWlucHV0IG9wdGlvblwiPkVuZmFudHM8L3NwYW4+XG4gIDwvbGk+XG4gIDxsaSBjbGFzcz1cInByb2plY3QtaW5wdXQgb3B0aW9uXCIgaWQ9XCJsaXN0LXRpdGxlLTNcIj5cbiAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJkYXJrb3JhbmdlXCIgc3Ryb2tlPVwibm9uZVwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWNpcmNsZVwiPjxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiNVwiLz48L3N2Zz5cbiAgPHNwYW4gY2xhc3M9XCJwcm9qZWN0LWlucHV0IG9wdGlvblwiPlRyYXZhdXg8L3NwYW4+XG4gIDwvbGk+XG4gIDwvdWw+XG4gIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJmb3JtLXByaW9yaXR5XCI+XG4gIDxzdmcgY2xhc3M9XCJmb3JtLXByaW9yaXR5IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cInJlZFwiIHN0cm9rZT1cInJlZFwiIHN0cm9rZS13aWR0aD1cIjFcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1mbGFnXCI+XG4gIDxwYXRoIGQ9XCJNNCAxNXMxLTEgNC0xIDUgMiA4IDIgNC0xIDQtMVYzcy0xIDEtNCAxLTUtMi04LTItNCAxLTQgMXpcIi8+PGxpbmUgeDE9XCI0XCIgeTE9XCIyMlwiIHgyPVwiNFwiIHkyPVwiMTVcIi8+XG4gIDwvc3ZnPlxuICA8L2J1dHRvbj5cbiAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZm9ybS1zYXZlXCI+XG4gIDxidXR0b24gdHlwZT1cImJ1dHRvblwiPkFubm51bGVyPC9idXR0b24+XG4gIDxidXR0b24+RW5yZWdpc3RyZXI8L2J1dHRvbj5cbiAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5gXG4gICAgICAgIFxuICAgICAgY29uc3QgZGlzcGxheUZvcm1Nb2RpZnkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgYnRuRWRpdCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5lZGl0LXRhc2snKTtcbiAgICAgICAgaWYgKGJ0bkVkaXQpIHtcbiAgICAgICAgICBjb25zdCB0YXNrID0gYnRuRWRpdC5jbG9zZXN0KCcudGFzaycpO1xuICAgICAgICAgIHRhc2suY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgICAgdGFzay5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgaHRtbEZvcm1Nb2RpZnkpO1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICAgIFxuICAgICAgZGlzcGxheUZvcm1Nb2RpZnkoKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgZGlzcGxheU5ld1Rhc2sgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGJhY2tEcm9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tkcm9wJyk7XG4gICAgICBjb25zdCBodG1sTmV3Rm9ybU1vZGFsID0gYFxuICAgICAgPGZvcm0gY2xhc3M9XCJ0YXNrLWZvcm0gbW9kYWwgbmV3LXRhc2tcIiBpZD1cInRhc2stMFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tbWFpblwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tdGV4dFwiPlxuICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS10ZXh0XCIgdHlwZT1cInRleHRcIiBuYW1lPVwidGFzay10ZXh0XCIgaWQ9XCJ0YXNrLTFcIiBhdXRvZm9jdXMgcGxhY2Vob2xkZXI9XCJUw6JjaGVcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZGVzY3JcIj5cbiAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tZGVzY3JcIiBuYW1lPVwiZGVzY3ItMVwiIGlkPVwiZGVzY3ItMVwiIGNvbHM9XCIzMFwiIHJvd3M9XCI0XCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiPjwvdGV4dGFyZWE+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXBhcmFtc1wiPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJmb3JtLWRhdGVcIj5cbiAgICAgIDxzdmcgY2xhc3M9XCJmb3JtLWRhdGVcIiBzdHlsZT1cIndpZHRoOjE1cHg7aGVpZ2h0OjE1cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xOSAzQzIwLjExIDMgMjEgMy44OSAyMSA1VjE5QzIxIDIwLjExIDIwLjExIDIxIDE5IDIxSDVDMy44OSAyMSAzIDIwLjEgMyAxOVY1QzMgMy44OSAzLjkgMyA1IDNINlYxSDhWM0gxNlYxSDE4VjNIMTlNMTkgMTlWOUg1VjE5SDE5TTE5IDdWNUg1VjdIMTlNNyAxMUg5VjE3SDdWMTFcIiAvPlxuICAgICAgPC9zdmc+XG4gICAgICA8c3BhbiBjbGFzcz1cImZvcm0tZGF0ZVwiPsOJY2jDqWFuY2U8L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXByb2plY3QtY29udGFpbmVyXCI+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImZvcm0tcHJvamVjdFwiPlxuICAgICAgPHN2ZyBjbGFzcz1cImxpc3QtZG90XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwiY29ybmZsb3dlcmJsdWVcIiBzdHJva2U9XCJub25lXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItY2lyY2xlXCI+XG4gICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjVcIi8+XG4gICAgICA8L3N2Zz5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZm9ybS1wcm9qZWN0XCI+Q291cnNlczwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtaW5wdXQgaGlkZGVuXCI+XG4gICAgICA8dWwgY2xhc3M9XCJwcm9qZWN0LWlucHV0IGxpc3RcIj5cbiAgICAgIDxsaSBjbGFzcz1cInByb2plY3QtaW5wdXQgb3B0aW9uIHNlbGVjdGVkXCIgZGF0YS1uYW1lPSBcInNlbGVjdGVkXCI+XG4gICAgICA8c3ZnIGNsYXNzPVwibGlzdC1kb3RcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJjb3JuZmxvd2VyYmx1ZVwiIHN0cm9rZT1cIm5vbmVcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1jaXJjbGVcIj5cbiAgICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiNVwiLz5cbiAgICAgIDwvc3ZnPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmb3JtLXByb2plY3RcIj5Db3Vyc2VzPC9zcGFuPlxuICAgICAgPC9saT5cbiAgICAgIDxsaSBjbGFzcz1cInByb2plY3QtaW5wdXQgb3B0aW9uIGluYm94XCIgZGF0YS1uYW1lPSBcImluYm94XCI+XG4gICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJkb2RnZXJibHVlXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWluYm94XCI+PHBvbHlsaW5lIHBvaW50cz1cIjIyIDEyIDE2IDEyIDE0IDE1IDEwIDE1IDggMTIgMiAxMlwiLz5cbiAgICAgIDxwYXRoIGQ9XCJNNS40NSA1LjExTDIgMTJ2NmEyIDIgMCAwIDAgMiAyaDE2YTIgMiAwIDAgMCAyLTJ2LTZsLTMuNDUtNi44OUEyIDIgMCAwIDAgMTYuNzYgNEg3LjI0YTIgMiAwIDAgMC0xLjc5IDEuMTF6XCIvPlxuICAgICAgPC9zdmc+XG4gICAgICA8c3BhbiBjbGFzcz1cImluYm94LXRpdGxlXCI+SW5ib3g8L3NwYW4+XG4gICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImZvcm0tcHJpb3JpdHlcIj5cbiAgICAgIDxzdmcgY2xhc3M9XCJmb3JtLXByaW9yaXR5IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cInJlZFwiIHN0cm9rZT1cInJlZFwiIHN0cm9rZS13aWR0aD1cIjFcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1mbGFnXCI+XG4gICAgICA8cGF0aCBkPVwiTTQgMTVzMS0xIDQtMSA1IDIgOCAyIDQtMSA0LTFWM3MtMSAxLTQgMS01LTItOC0yLTQgMS00IDF6XCIvPjxsaW5lIHgxPVwiNFwiIHkxPVwiMjJcIiB4Mj1cIjRcIiB5Mj1cIjE1XCIvPlxuICAgICAgPC9zdmc+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1zYXZlXCI+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5Bbm5udWxlcjwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInNhdmUtbmV3LXRhc2sgc2F2ZVwiPkVucmVnaXN0cmVyPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5gO1xuICBcbiAgICAgIGNvbnN0IGRpc3BsYXlOZXdUYXNrTW9kYWwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgYWRkVGFzayA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbi5hZGQtdGFzaycpO1xuICAgICAgICBpZiAoIWFkZFRhc2spIHJldHVybjtcbiAgICAgICAgYmFja0Ryb3AuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgIGJhY2tEcm9wLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBodG1sTmV3Rm9ybU1vZGFsKTtcbiAgICAgIH07XG4gIFxuICAgICAgZGlzcGxheU5ld1Rhc2tNb2RhbC5jYWxsKHRoaXMpO1xuICBcbiAgICAgIGNvbnN0IHNhdmVUYXNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHNhdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2F2ZS1uZXctdGFzaycpO1xuICAgICAgICBjb25zdCBjbGlja1NhdmVCdG4gPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGNvbnN0IHRhc2tGb3JtID0gZS50YXJnZXQuY2xvc2VzdChgZm9ybS50YXNrLWZvcm1gKTtcbiAgICAgICAgICBjb25zdCB0YXNrVGV4dElucHV0ID0gdGFza0Zvcm0ucXVlcnlTZWxlY3RvcignaW5wdXQuZm9ybS10ZXh0JykudmFsdWU7XG4gICAgICAgICAgY29uc3QgdGFza0Rlc2NySW5wdXQgPSB0YXNrRm9ybS5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYS5mb3JtLWRlc2NyJykudmFsdWU7ICBcbiAgICAgICAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGFza1RleHRJbnB1dCwgdGFza0Rlc2NySW5wdXQpO1xuICAgICAgICAgIHRoaXMucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHByb2plY3QuX3Byb2plY3ROYW1lID09PSAnaW5ib3gnICYmIHByb2plY3QudGFza3MucHVzaCh0YXNrKSk7XG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9qZWN0cywgdGFza0Zvcm0pO1xuICAgICAgICB9XG4gICAgICAgIHNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja1NhdmVCdG4uYmluZCh0aGlzKSlcbiAgICAgIH07XG4gICAgICAgICBcbiAgICAgIHNhdmVUYXNrLmNhbGwodGhpcyk7XG4gICAgICAgIFxuICAgICAgLy8gY29uc3QgZGlzcGxheVByb2plY3RzID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyAgIGNvbnN0IHByb2pDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1wcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgICAgLy8gICBjb25zdCBjbGlja1Byb2pCdG4gPSBmdW5jdGlvbihlKSB7XG4gICAgICAvLyAgICAgY29uc3QgYnRuUHJvamVjdHMgPSBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24uZm9ybS1wcm9qZWN0Jyk7XG4gICAgICAvLyAgICAgaWYgKCFidG5Qcm9qZWN0cykgcmV0dXJuO1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGJ0blByb2plY3RzKTtcbiAgICAgIC8vICAgICBjb25zdCBwcm9qZWN0SW5wdXQgPSBidG5Qcm9qZWN0cy5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgXG4gICAgICAvLyAgICAgaWYgKCFidG5Qcm9qZWN0cy5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpICYmICFidG5Qcm9qZWN0cy5jbGFzc0xpc3QuY29udGFpbnMoJ2dlbmVyYXRlZCcpKSB7XG4gICAgICAvLyAgICAgICBjb25zdCB1bFByb2plY3RzID0gYnRuUHJvamVjdHMuY2xvc2VzdCgnLmZvcm0tcHJvamVjdC1jb250YWluZXInKS5xdWVyeVNlbGVjdG9yKCd1bC5wcm9qZWN0LWlucHV0Jyk7XG4gICAgICAvLyAgICAgICB0aGlzLnByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgICAvLyAgICAgICAgIGNvbnN0IHByb2plY3RIdG1sID0gYFxuICAgICAgLy8gICAgICAgICA8bGkgY2xhc3M9XCJwcm9qZWN0LWlucHV0IG9wdGlvbiBwZXJzb25hbFwiIGlkPVwicHJvamVjdC1uYW1lLSR7aW5kZXh9XCIgZGF0YS1uYW1lPSBcIiR7cHJvamVjdC5fcHJvamVjdE5hbWV9XCI+XG4gICAgICAvLyAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPSR7cHJvamVjdC5fY29sb3J9IHN0cm9rZT1cIm5vbmVcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1jaXJjbGVcIj48Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjVcIi8+PC9zdmc+XG4gICAgICAvLyAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvamVjdC1pbnB1dCBvcHRpb25cIj4ke3Byb2plY3QuX3Byb2plY3ROYW1lWzBdLnRvVXBwZXJDYXNlKCl9JHtwcm9qZWN0Ll9wcm9qZWN0TmFtZS5zbGljZSgxKS50b0xvd2VyQ2FzZSgpfTwvc3Bhbj5cbiAgICAgIC8vICAgICAgICAgPC9saT5gXG4gICAgICAvLyAgICAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgIC8vICAgICAgICAgICB1bFByb2plY3RzLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgcHJvamVjdEh0bWwpO1xuICAgICAgLy8gICAgICAgICB9O1xuICAgICAgLy8gICAgICAgfSlcbiAgICAgIC8vICAgICAgIHByb2plY3RJbnB1dC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgIC8vICAgICAgIGJ0blByb2plY3RzLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgLy8gICAgICAgdWxQcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIC8vICAgICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gZS50YXJnZXQuY2xvc2VzdCgnbGkuc2VsZWN0ZWQnKTtcbiAgICAgIC8vICAgICAgICAgaWYgKCFzZWxlY3RlZFByb2plY3QpIHJldHVybjtcbiAgICAgIC8vICAgICAgICAgcHJvamVjdElucHV0LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgLy8gICAgICAgICBidG5Qcm9qZWN0cy5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgIC8vICAgICAgICAgYnRuUHJvamVjdHMuY2xhc3NMaXN0LmFkZCgnZ2VuZXJhdGVkJyk7XG4gICAgICAvLyAgICAgICB9KTtcbiAgICAgIC8vICAgICAgIHNlbGVjdFByb2plY3RzRm9ybSh1bFByb2plY3RzKTtcbiAgICAgIC8vICAgICB9O1xuICAgICAgICAgIFxuICAgICAgLy8gICAgIGlmICghYnRuUHJvamVjdHMuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgLy8gICAgICAgcHJvamVjdElucHV0LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgLy8gICAgICAgYnRuUHJvamVjdHMuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAvLyAgICAgfTtcbiAgICAgIC8vICAgfTtcbiAgICAgIC8vICAgcHJvakNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrUHJvakJ0bi5iaW5kKHRoaXMpKVxuICAgICAgLy8gfVxuICBcbiAgICAgIC8vICAgZGlzcGxheVByb2plY3RzLmNhbGwodGhpcyk7XG4gICAgICAgIFxuICAgICAgLy8gICBmdW5jdGlvbiBzZWxlY3RQcm9qZWN0c0Zvcm0oZWxlbWVudCkge1xuICAgICAgLy8gICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAvLyAgICAgICBjb25zdCBzZWxlY3RlZEVsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpLnNlbGVjdGVkJyk7XG4gICAgICAvLyAgICAgICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2xpLm9wdGlvbicpO1xuICAgICAgLy8gICAgICAgY29uc3QgY2xvbmVTZWxPcHRpb24gPSBzZWxlY3RlZE9wdGlvbi5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAvLyAgICAgICBpZiAoIXNlbGVjdGVkT3B0aW9uKSByZXR1cm47XG4gICAgICAvLyAgICAgICBjbG9uZVNlbE9wdGlvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgLy8gICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChzZWxlY3RlZEVsZW1lbnQpO1xuICAgICAgLy8gICAgICAgZWxlbWVudC5wcmVwZW5kKGNsb25lU2VsT3B0aW9uKTtcbiAgICAgIC8vICAgICB9KVxuICAgICAgLy8gICB9O1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBjb25zdCBkaXNwbGF5Rm9ybURhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBjb25zdCBidG5EYXRlID0gZS50YXJnZXQuY2xvc2VzdCgnYnV0dG9uLmZvcm0tZGF0ZScpO1xuICAgICAgICAgIGlmICghYnRuRGF0ZSkgcmV0dXJuO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGJ0bkRhdGUpO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZGlzcGxheUZvcm1Qcmlvcml0eSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNvbnN0IGJ0blByaW9yaXR5ID0gZS50YXJnZXQuY2xvc2VzdCgnYnV0dG9uLmZvcm0tcHJpb3JpdHknKTtcbiAgICAgICAgICBpZiAoIWJ0blByaW9yaXR5KSByZXR1cm47XG4gICAgICAgICAgY29uc29sZS5sb2coYnRuUHJpb3JpdHkpO1xuICAgICAgICB9O1xuICAgICAgXG4gICAgICBcbiAgXG4gICAgfTtcblxuICB9XG5cbiAgXG59O1xuXG5cblxuXG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgQXBwOyIsImNvbnN0IFByb2plY3QgPSBjbGFzcyB7XG4gIHRhc2tzID0gW107XG4gIGNvbnN0cnVjdG9yKHByb2plY3ROYW1lLCBjb2xvcikge1xuICAgIHRoaXMuX3Byb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XG4gICAgdGhpcy5fY29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLm1lc3NhZ2UoKTtcbiAgfVxuXG4gIG1lc3NhZ2UoKSB7XG4gICAgY29uc29sZS5sb2coJ05ldyBQcm9qZWN0IGNyZWF0ZWQnKVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0OyIsImNvbnN0IFRhc2sgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHRhc2tOYW1lLCBkZXNjciwgZGVhZGxpbmUsIHByb2plY3QsIHByaW9yaXR5KSB7XG4gICAgdGhpcy5fdGFza05hbWUgPSB0YXNrTmFtZTtcbiAgICB0aGlzLl9kZXNjciA9IGRlc2NyO1xuICAgIHRoaXMuX2RlYWRsaW5lID0gZGVhZGxpbmU7XG4gICAgdGhpcy5fcHJvamVjdCA9IHByb2plY3Q7XG4gICAgdGhpcy5fcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLm1lc3NhZ2UoKVxuICB9XG4gIFxuICBtZXNzYWdlKCkge1xuICAgIGNvbnNvbGUubG9nKCdOZXcgVGFzayBjcmVhdGVkJylcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFzazsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAnXHJcblxyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tY29udGFpbmVyJyk7XHJcblxyXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XHJcblxyXG4vLyBjb25zdCBQcm9qZWN0ID0gY2xhc3Mge1xyXG4vLyAgIHRhc2tzID0gW107XHJcbi8vICAgY29uc3RydWN0b3IocHJvamVjdE5hbWUsIGNvbG9yKSB7XHJcbi8vICAgICB0aGlzLl9wcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xyXG4vLyAgICAgdGhpcy5fY29sb3IgPSBjb2xvcjtcclxuLy8gICAgIHRoaXMubWVzc2FnZSgpO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgbWVzc2FnZSgpIHtcclxuLy8gICAgIGNvbnNvbGUubG9nKCdOZXcgUHJvamVjdCBjcmVhdGVkJylcclxuLy8gICB9XHJcbi8vIH07XHJcblxyXG4vLyBjb25zdCBUYXNrID0gY2xhc3Mge1xyXG4vLyAgIGNvbnN0cnVjdG9yKHRhc2tOYW1lLCBkZXNjciwgZGVhZGxpbmUsIHByb2plY3QsIHByaW9yaXR5KSB7XHJcbi8vICAgICB0aGlzLl90YXNrTmFtZSA9IHRhc2tOYW1lO1xyXG4vLyAgICAgdGhpcy5fZGVzY3IgPSBkZXNjcjtcclxuLy8gICAgIHRoaXMuX2RlYWRsaW5lID0gZGVhZGxpbmU7XHJcbi8vICAgICB0aGlzLl9wcm9qZWN0ID0gcHJvamVjdDtcclxuLy8gICAgIHRoaXMuX3ByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbi8vICAgICB0aGlzLm1lc3NhZ2UoKVxyXG4vLyAgIH1cclxuICBcclxuLy8gICBtZXNzYWdlKCkge1xyXG4vLyAgICAgY29uc29sZS5sb2coJ05ldyBUYXNrIGNyZWF0ZWQnKVxyXG4vLyAgIH1cclxuLy8gfTtcclxuXHJcbi8vIGNvbnN0IEFwcCA9IGNsYXNzIHtcclxuLy8gICAjcHJvamVjdHMgPSBbXTtcclxuLy8gICBjb25zdHJ1Y3RvcigpIHtcclxuLy8gICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kaXNwbGF5Rm9ybS5iaW5kKHRoaXMpKTtcclxuLy8gICAgIHRoaXMuaW5pdCgpXHJcbi8vICAgfVxyXG5cclxuLy8gICBpbml0KCkge1xyXG4vLyAgICAgY29uc3QgaW5ib3ggPSBuZXcgUHJvamVjdCgnaW5ib3gnKTtcclxuLy8gICAgIHRoaXMuI3Byb2plY3RzLnB1c2goaW5ib3gpO1xyXG4vLyAgICAgY29uc3QgY291cnNlcyA9IG5ldyBQcm9qZWN0KCdjb3Vyc2VzJywgJ2Nvcm5mbG93ZXJibHVlJyk7XHJcbi8vICAgICB0aGlzLiNwcm9qZWN0cy5wdXNoKGNvdXJzZXMpO1xyXG4vLyAgICAgY29uc3QgZW5mYW50cyA9IG5ldyBQcm9qZWN0KCdlbmZhbnRzJywgJ2NyaW1zb24nKTtcclxuLy8gICAgIHRoaXMuI3Byb2plY3RzLnB1c2goZW5mYW50cyk7XHJcbi8vICAgICBjb25zdCB0cmF2YXV4ID0gbmV3IFByb2plY3QoJ3RyYXZhdXgnLCAnZGFya29yYW5nZScpO1xyXG4vLyAgICAgdGhpcy4jcHJvamVjdHMucHVzaCh0cmF2YXV4KTtcclxuLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuI3Byb2plY3RzKVxyXG4vLyAgIH1cclxuXHJcbi8vICAgZGlzcGxheUZvcm0oZSkge1xyXG4vLyAgICAgY29uc3QgYmFja0Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2Ryb3AnKTtcclxuLy8gICAgIGNvbnN0IGh0bWxOZXdGb3JtTW9kYWwgPSBgXHJcbi8vICAgICA8Zm9ybSBjbGFzcz1cInRhc2stZm9ybSBtb2RhbCBuZXctdGFza1wiIGlkPVwidGFzay0wXCI+XHJcbi8vICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLW1haW5cIj5cclxuLy8gICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS10ZXh0XCI+XHJcbi8vICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLXRleHRcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0YXNrLXRleHRcIiBpZD1cInRhc2stMVwiIGF1dG9mb2N1cyBwbGFjZWhvbGRlcj1cIlTDomNoZVwiPlxyXG4vLyAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWRlc2NyXCI+XHJcbi8vICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWRlc2NyXCIgbmFtZT1cImRlc2NyLTFcIiBpZD1cImRlc2NyLTFcIiBjb2xzPVwiMzBcIiByb3dzPVwiNFwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIj48L3RleHRhcmVhPlxyXG4vLyAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXBhcmFtc1wiPlxyXG4vLyAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJmb3JtLWRhdGVcIj5cclxuLy8gICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImZvcm0tZGF0ZVwiIHN0eWxlPVwid2lkdGg6MTVweDtoZWlnaHQ6MTVweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuLy8gICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xOSAzQzIwLjExIDMgMjEgMy44OSAyMSA1VjE5QzIxIDIwLjExIDIwLjExIDIxIDE5IDIxSDVDMy44OSAyMSAzIDIwLjEgMyAxOVY1QzMgMy44OSAzLjkgMyA1IDNINlYxSDhWM0gxNlYxSDE4VjNIMTlNMTkgMTlWOUg1VjE5SDE5TTE5IDdWNUg1VjdIMTlNNyAxMUg5VjE3SDdWMTFcIiAvPlxyXG4vLyAgICAgICAgICAgICA8L3N2Zz5cclxuLy8gICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmb3JtLWRhdGVcIj7DiWNow6lhbmNlPC9zcGFuPlxyXG4vLyAgICAgICAgICAgPC9idXR0b24+XHJcbi8vICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1wcm9qZWN0LWNvbnRhaW5lclwiPlxyXG4vLyAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImZvcm0tcHJvamVjdFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImxpc3QtZG90XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwiY29ybmZsb3dlcmJsdWVcIiBzdHJva2U9XCJub25lXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItY2lyY2xlXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiNVwiLz5cclxuLy8gICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4vLyAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmb3JtLXByb2plY3RcIj5Db3Vyc2VzPC9zcGFuPlxyXG4vLyAgICAgICAgICAgICA8L2J1dHRvbj5cclxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtaW5wdXQgaGlkZGVuXCI+XHJcbi8vICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwicHJvamVjdC1pbnB1dCBsaXN0XCI+XHJcbi8vICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwcm9qZWN0LWlucHV0IG9wdGlvbiBzZWxlY3RlZFwiIGRhdGEtbmFtZT0gXCJzZWxlY3RlZFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwibGlzdC1kb3RcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJjb3JuZmxvd2VyYmx1ZVwiIHN0cm9rZT1cIm5vbmVcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1jaXJjbGVcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjVcIi8+XHJcbi8vICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4vLyAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvcm0tcHJvamVjdFwiPkNvdXJzZXM8L3NwYW4+XHJcbi8vICAgICAgICAgICAgICAgICA8L2xpPlxyXG4vLyAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicHJvamVjdC1pbnB1dCBvcHRpb24gaW5ib3hcIiBkYXRhLW5hbWU9IFwiaW5ib3hcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiZG9kZ2VyYmx1ZVwiIHN0cm9rZS13aWR0aD1cIjFcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1pbmJveFwiPjxwb2x5bGluZSBwb2ludHM9XCIyMiAxMiAxNiAxMiAxNCAxNSAxMCAxNSA4IDEyIDIgMTJcIi8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk01LjQ1IDUuMTFMMiAxMnY2YTIgMiAwIDAgMCAyIDJoMTZhMiAyIDAgMCAwIDItMnYtNmwtMy40NS02Ljg5QTIgMiAwIDAgMCAxNi43NiA0SDcuMjRhMiAyIDAgMCAwLTEuNzkgMS4xMXpcIi8+XHJcbi8vICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4vLyAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImluYm94LXRpdGxlXCI+SW5ib3g8L3NwYW4+XHJcbi8vICAgICAgICAgICAgICAgICA8L2xpPlxyXG4vLyAgICAgICAgICAgICAgIDwvdWw+XHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImZvcm0tcHJpb3JpdHlcIj5cclxuLy8gICAgICAgICAgIDxzdmcgY2xhc3M9XCJmb3JtLXByaW9yaXR5IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cInJlZFwiIHN0cm9rZT1cInJlZFwiIHN0cm9rZS13aWR0aD1cIjFcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1mbGFnXCI+XHJcbi8vICAgICAgICAgICA8cGF0aCBkPVwiTTQgMTVzMS0xIDQtMSA1IDIgOCAyIDQtMSA0LTFWM3MtMSAxLTQgMS01LTItOC0yLTQgMS00IDF6XCIvPjxsaW5lIHgxPVwiNFwiIHkxPVwiMjJcIiB4Mj1cIjRcIiB5Mj1cIjE1XCIvPlxyXG4vLyAgICAgICAgICAgPC9zdmc+XHJcbi8vICAgICAgICAgICA8L2J1dHRvbj5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgPC9kaXY+XHJcbi8vICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXNhdmVcIj5cclxuLy8gICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiPkFubm51bGVyPC9idXR0b24+XHJcbi8vICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic2F2ZS1uZXctdGFzayBzYXZlXCI+RW5yZWdpc3RyZXI8L2J1dHRvbj5cclxuLy8gICAgICAgPC9kaXY+XHJcbi8vICAgICA8L2Zvcm0+YDtcclxuLy8gICAgIGNvbnN0IGh0bWxGb3JtTW9kaWZ5ID0gYDxmb3JtIGNsYXNzPVwidGFzay1mb3JtXCIgaWQ9XCJ0YXNrLTBcIj5cclxuLy8gICAgIDxkaXYgY2xhc3M9XCJmb3JtLW1haW5cIj5cclxuLy8gICAgIDxkaXYgY2xhc3M9XCJmb3JtLXRleHRcIj5cclxuLy8gICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tdGV4dFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRhc2stdGV4dFwiIGlkPVwidGFzay0xXCIgdmFsdWU9XCJQb21tZXNcIiBhdXRvZm9jdXMgcGxhY2Vob2xkZXI9IFwiVMOiY2hlXCI+XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gICAgIDxkaXYgY2xhc3M9XCJmb3JtLWRlc2NyXCI+XHJcbi8vICAgICA8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWRlc2NyXCIgbmFtZT1cImRlc2NyLTFcIiBpZD1cImRlc2NyLTFcIiBjb2xzPVwiMzBcIiByb3dzPVwiNFwiIHBsYWNlaG9sZGVyPSBcIkRlc2NyaXB0aW9uXCI+w6AgbCfDqXBpY2VyaWUgcGF5c2FubmU8L3RleHRhcmVhPlxyXG4vLyAgICAgPC9kaXY+XHJcbi8vICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1wYXJhbXNcIj5cclxuLy8gICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZm9ybS1kYXRlXCI+XHJcbi8vICAgICA8c3ZnIGNsYXNzPVwiZm9ybS1kYXRlXCIgc3R5bGU9XCJ3aWR0aDoxNXB4O2hlaWdodDoxNXB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4vLyAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTkgM0MyMC4xMSAzIDIxIDMuODkgMjEgNVYxOUMyMSAyMC4xMSAyMC4xMSAyMSAxOSAyMUg1QzMuODkgMjEgMyAyMC4xIDMgMTlWNUMzIDMuODkgMy45IDMgNSAzSDZWMUg4VjNIMTZWMUgxOFYzSDE5TTE5IDE5VjlINVYxOUgxOU0xOSA3VjVINVY3SDE5TTcgMTFIOVYxN0g3VjExXCIgLz5cclxuLy8gICAgIDwvc3ZnPlxyXG4vLyAgICAgPHNwYW4gY2xhc3M9XCJmb3JtLWRhdGVcIj4xOSBvY3Q8L3NwYW4+XHJcbi8vICAgICA8L2J1dHRvbj5cclxuLy8gICAgIDxkaXYgY2xhc3M9XCJmb3JtLXByb2plY3QtY29udGFpbmVyXCI+XHJcbi8vICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImZvcm0tcHJvamVjdFwiPlxyXG4vLyAgICAgPHN2ZyBjbGFzcz1cImxpc3QtZG90XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwiY29ybmZsb3dlcmJsdWVcIiBzdHJva2U9XCJub25lXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItY2lyY2xlXCI+XHJcbi8vICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjVcIi8+XHJcbi8vICAgICA8L3N2Zz5cclxuLy8gICAgIDxzcGFuIGNsYXNzPVwiZm9ybS1wcm9qZWN0XCI+Q291cnNlczwvc3Bhbj5cclxuLy8gICAgIDwvYnV0dG9uPlxyXG4vLyAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtaW5wdXRcIj5cclxuLy8gICAgIDx1bCBjbGFzcz1cInByb2plY3QtaW5wdXQgbGlzdFwiPlxyXG4vLyAgICAgPGxpIGNsYXNzPVwicHJvamVjdC1pbnB1dCBvcHRpb24gaW5ib3hcIj5cclxuLy8gICAgIDxzdmcgY2xhc3M9XCJsaXN0LWRvdFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cImNvcm5mbG93ZXJibHVlXCIgc3Ryb2tlPVwibm9uZVwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWNpcmNsZVwiPlxyXG4vLyAgICAgPGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCI1XCIvPlxyXG4vLyAgICAgPC9zdmc+XHJcbi8vICAgICA8c3BhbiBjbGFzcz1cImZvcm0tcHJvamVjdFwiPkNvdXJzZXM8L3NwYW4+XHJcbi8vICAgICA8L2xpPlxyXG4vLyAgICAgPGxpIGNsYXNzPVwicHJvamVjdC1pbnB1dCBvcHRpb24gaW5ib3hcIj5cclxuLy8gICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImRvZGdlcmJsdWVcIiBzdHJva2Utd2lkdGg9XCIxXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItaW5ib3hcIj48cG9seWxpbmUgcG9pbnRzPVwiMjIgMTIgMTYgMTIgMTQgMTUgMTAgMTUgOCAxMiAyIDEyXCIvPlxyXG4vLyAgICAgPHBhdGggZD1cIk01LjQ1IDUuMTFMMiAxMnY2YTIgMiAwIDAgMCAyIDJoMTZhMiAyIDAgMCAwIDItMnYtNmwtMy40NS02Ljg5QTIgMiAwIDAgMCAxNi43NiA0SDcuMjRhMiAyIDAgMCAwLTEuNzkgMS4xMXpcIi8+XHJcbi8vICAgICA8L3N2Zz5cclxuLy8gICAgIDxzcGFuIGNsYXNzPVwiaW5ib3gtdGl0bGVcIj5JbmJveDwvc3Bhbj5cclxuLy8gPC9saT5cclxuLy8gPGxpIGNsYXNzPVwicHJvamVjdC1pbnB1dCBvcHRpb25cIiBpZD1cImxpc3QtdGl0bGUtMVwiPlxyXG4vLyA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cImNvcm5mbG93ZXJibHVlXCIgc3Ryb2tlPVwibm9uZVwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWNpcmNsZVwiPjxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiNVwiLz48L3N2Zz5cclxuLy8gPHNwYW4gY2xhc3M9XCJwcm9qZWN0LWlucHV0IG9wdGlvblwiPkNvdXJzZXM8L3NwYW4+XHJcbi8vIDwvbGk+XHJcbi8vIDxsaSBjbGFzcz1cInByb2plY3QtaW5wdXQgb3B0aW9uXCIgaWQ9XCJsaXN0LXRpdGxlLTJcIj5cclxuLy8gPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJjcmltc29uXCIgc3Ryb2tlPVwibm9uZVwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWNpcmNsZVwiPjxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiNVwiLz48L3N2Zz5cclxuLy8gPHNwYW4gY2xhc3M9XCJwcm9qZWN0LWlucHV0IG9wdGlvblwiPkVuZmFudHM8L3NwYW4+XHJcbi8vIDwvbGk+XHJcbi8vIDxsaSBjbGFzcz1cInByb2plY3QtaW5wdXQgb3B0aW9uXCIgaWQ9XCJsaXN0LXRpdGxlLTNcIj5cclxuLy8gPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJkYXJrb3JhbmdlXCIgc3Ryb2tlPVwibm9uZVwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWNpcmNsZVwiPjxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiNVwiLz48L3N2Zz5cclxuLy8gPHNwYW4gY2xhc3M9XCJwcm9qZWN0LWlucHV0IG9wdGlvblwiPlRyYXZhdXg8L3NwYW4+XHJcbi8vIDwvbGk+XHJcbi8vIDwvdWw+XHJcbi8vIDwvZGl2PlxyXG4vLyA8L2Rpdj5cclxuLy8gPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJmb3JtLXByaW9yaXR5XCI+XHJcbi8vIDxzdmcgY2xhc3M9XCJmb3JtLXByaW9yaXR5IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cInJlZFwiIHN0cm9rZT1cInJlZFwiIHN0cm9rZS13aWR0aD1cIjFcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1mbGFnXCI+XHJcbi8vIDxwYXRoIGQ9XCJNNCAxNXMxLTEgNC0xIDUgMiA4IDIgNC0xIDQtMVYzcy0xIDEtNCAxLTUtMi04LTItNCAxLTQgMXpcIi8+PGxpbmUgeDE9XCI0XCIgeTE9XCIyMlwiIHgyPVwiNFwiIHkyPVwiMTVcIi8+XHJcbi8vIDwvc3ZnPlxyXG4vLyA8L2J1dHRvbj5cclxuLy8gPC9kaXY+XHJcbi8vIDwvZGl2PlxyXG4vLyA8ZGl2IGNsYXNzPVwiZm9ybS1zYXZlXCI+XHJcbi8vIDxidXR0b24gdHlwZT1cImJ1dHRvblwiPkFubm51bGVyPC9idXR0b24+XHJcbi8vIDxidXR0b24+RW5yZWdpc3RyZXI8L2J1dHRvbj5cclxuLy8gPC9kaXY+XHJcbi8vICAgICAgIDwvZm9ybT5gXHJcbiAgICAgIFxyXG4vLyAgICAgY29uc3QgZGlzcGxheUZvcm1Nb2RpZnkgPSBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgY29uc3QgYnRuRWRpdCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5lZGl0LXRhc2snKTtcclxuLy8gICAgICAgaWYgKGJ0bkVkaXQpIHtcclxuLy8gICAgICAgICBjb25zdCB0YXNrID0gYnRuRWRpdC5jbG9zZXN0KCcudGFzaycpO1xyXG4vLyAgICAgICAgIHRhc2suY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XHJcbi8vICAgICAgICAgdGFzay5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgaHRtbEZvcm1Nb2RpZnkpO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9O1xyXG4gICAgXHJcbi8vICAgICBjb25zdCBkaXNwbGF5Rm9ybURhdGUgPSBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgY29uc3QgYnRuRGF0ZSA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbi5mb3JtLWRhdGUnKTtcclxuLy8gICAgICAgaWYgKCFidG5EYXRlKSByZXR1cm47XHJcbi8vICAgICAgIGNvbnNvbGUubG9nKGJ0bkRhdGUpO1xyXG4vLyAgICAgfTtcclxuICAgIFxyXG4vLyAgICAgY29uc3QgZGlzcGxheUZvcm1Qcm9qZWN0cyA9IGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICBjb25zdCBidG5Qcm9qZWN0cyA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbi5mb3JtLXByb2plY3QnKTtcclxuLy8gICAgICAgaWYgKCFidG5Qcm9qZWN0cykgcmV0dXJuO1xyXG4vLyAgICAgICBjb25zdCBwcm9qZWN0SW5wdXQgPSBidG5Qcm9qZWN0cy5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbi8vICAgICAgIGNvbnNvbGUubG9nKGJ0blByb2plY3RzKTtcclxuLy8gICAgICAgaWYgKCFidG5Qcm9qZWN0cy5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpICYmICFidG5Qcm9qZWN0cy5jbGFzc0xpc3QuY29udGFpbnMoJ2dlbmVyYXRlZCcpKSB7XHJcbi8vICAgICAgICAgY29uc3QgdWxQcm9qZWN0cyA9IGJ0blByb2plY3RzLmNsb3Nlc3QoJy5mb3JtLXByb2plY3QtY29udGFpbmVyJykucXVlcnlTZWxlY3RvcigndWwucHJvamVjdC1pbnB1dCcpO1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGJ0blByb2plY3RzLCB1bFByb2plY3RzKTtcclxuLy8gICAgICAgICBhcHAuI3Byb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XHJcbi8vICAgICAgICAgICBjb25zdCBwcm9qZWN0SHRtbCA9IGBcclxuLy8gICAgICAgICAgICAgPGxpIGNsYXNzPVwicHJvamVjdC1pbnB1dCBvcHRpb24gcGVyc29uYWxcIiBpZD1cInByb2plY3QtbmFtZS0ke2luZGV4fVwiIGRhdGEtbmFtZT0gXCIke3Byb2plY3QuX3Byb2plY3ROYW1lfVwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD0ke3Byb2plY3QuX2NvbG9yfSBzdHJva2U9XCJub25lXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItY2lyY2xlXCI+PGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCI1XCIvPjwvc3ZnPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb2plY3QtaW5wdXQgb3B0aW9uXCI+JHtwcm9qZWN0Ll9wcm9qZWN0TmFtZVswXS50b1VwcGVyQ2FzZSgpfSR7cHJvamVjdC5fcHJvamVjdE5hbWUuc2xpY2UoMSkudG9Mb3dlckNhc2UoKX08L3NwYW4+XHJcbi8vICAgICAgICAgICAgIDwvbGk+YFxyXG4vLyAgICAgICAgICAgaWYgKGluZGV4ID4gMCkge1xyXG4vLyAgICAgICAgICAgICB1bFByb2plY3RzLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgcHJvamVjdEh0bWwpO1xyXG4vLyAgICAgICAgICAgfTtcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgICAgIHByb2plY3RJbnB1dC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcclxuLy8gICAgICAgICBidG5Qcm9qZWN0cy5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuLy8gICAgICAgICB1bFByb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4vLyAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gZS50YXJnZXQuY2xvc2VzdCgnbGkuc2VsZWN0ZWQnKTtcclxuLy8gICAgICAgICAgIGlmICghc2VsZWN0ZWRQcm9qZWN0KSByZXR1cm47XHJcbi8vICAgICAgICAgICBwcm9qZWN0SW5wdXQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XHJcbi8vICAgICAgICAgICBidG5Qcm9qZWN0cy5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuLy8gICAgICAgICAgIGJ0blByb2plY3RzLmNsYXNzTGlzdC5hZGQoJ2dlbmVyYXRlZCcpO1xyXG4vLyAgICAgICAgIH0pO1xyXG4vLyAgICAgICB9O1xyXG4vLyAgICAgICBpZiAoIWJ0blByb2plY3RzLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuLy8gICAgICAgICBwcm9qZWN0SW5wdXQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XHJcbi8vICAgICAgICAgYnRuUHJvamVjdHMuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH07XHJcbiAgICBcclxuLy8gICAgIGNvbnN0IHNlbGVjdFByb2plY3RzRm9ybSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBcclxuLy8gICAgIH07XHJcbiAgICBcclxuLy8gICAgIGNvbnN0IGRpc3BsYXlGb3JtUHJpb3JpdHkgPSBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgY29uc3QgYnRuUHJpb3JpdHkgPSBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24uZm9ybS1wcmlvcml0eScpO1xyXG4vLyAgICAgICBpZiAoIWJ0blByaW9yaXR5KSByZXR1cm47XHJcbi8vICAgICAgIGNvbnNvbGUubG9nKGJ0blByaW9yaXR5KTtcclxuLy8gICAgIH07XHJcbiAgICBcclxuLy8gICAgIGNvbnN0IGNyZWF0ZU5ld1Rhc2sgPSBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2snKTtcclxuLy8gICAgICAgbmV3VGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbi8vICAgICAgICAgY29uc3QgYnRuU2F2ZSA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbi5zYXZlLW5ldy10YXNrJyk7XHJcbi8vICAgICAgICAgY29uc3QgdGFza0Zvcm0gPSBlLnRhcmdldC5jbG9zZXN0KGBmb3JtLnRhc2stZm9ybWApO1xyXG4vLyAgICAgICAgIGNvbnN0IHRhc2tUZXh0SW5wdXQgPSB0YXNrRm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dC5mb3JtLXRleHQnKS52YWx1ZTtcclxuLy8gICAgICAgICBjb25zdCB0YXNrRGVzY3JJbnB1dCA9IHRhc2tGb3JtLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhLmZvcm0tZGVzY3InKS52YWx1ZTtcclxuLy8gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgICAgICAgaWYgKCFidG5TYXZlKSByZXR1cm47XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coYnRuU2F2ZSk7XHJcblxyXG4vLyAgICAgICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayh0YXNrVGV4dElucHV0LCB0YXNrRGVzY3JJbnB1dCk7XHJcbi8vICAgICAgICAgYXBwLiNwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4gcHJvamVjdC5fcHJvamVjdE5hbWUgPT09ICdpbmJveCcgJiYgcHJvamVjdC50YXNrcy5wdXNoKHRhc2spKTtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhhcHAuI3Byb2plY3RzLCB0YXNrRm9ybSk7XHJcbi8vICAgICAgICAgfSk7XHJcbi8vICAgICB9O1xyXG4gIFxyXG4vLyAgICAgY29uc3QgZGlzcGxheU5ld1Rhc2tNb2RhbCA9IGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICBjb25zdCBhZGRUYXNrID0gZS50YXJnZXQuY2xvc2VzdCgnYnV0dG9uLmFkZC10YXNrJyk7XHJcbi8vICAgICAgIGlmICghYWRkVGFzaykgcmV0dXJuO1xyXG4vLyAgICAgICBiYWNrRHJvcC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcclxuLy8gICAgICAgYmFja0Ryb3AuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIGh0bWxOZXdGb3JtTW9kYWwpO1xyXG4vLyAgICAgICBjcmVhdGVOZXdUYXNrKCk7XHJcbi8vICAgICB9O1xyXG5cclxuLy8gICAgIGRpc3BsYXlGb3JtTW9kaWZ5KCk7XHJcbi8vICAgICBkaXNwbGF5Rm9ybURhdGUoKTtcclxuLy8gICAgIGRpc3BsYXlGb3JtUHJvamVjdHMoKTtcclxuLy8gICAgIGRpc3BsYXlGb3JtUHJpb3JpdHkoKTtcclxuLy8gICAgIGRpc3BsYXlOZXdUYXNrTW9kYWwoKTtcclxuXHJcbi8vICAgfTtcclxuICBcclxuLy8gfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=