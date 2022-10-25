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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'Roboto';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2'),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\n  font-weight: 400;\n  font-style: normal;\n}\n\n:root {\n  --main-hd-color: rgb(255, 99, 71);\n  --main-hd-color-hover: rgb(200, 99, 71);\n  --main-bg-color: rgb(245,245,245, 0.5);\n  --main-hv-color: rgb(230,230,230);\n  --btn-bg-color: rgb(255,218,185);\n  --btn-bg-color-hover: rgb(239, 204, 174);\n  --main-bd-color: rgb(128, 128, 128, 0.5);\n  --main-bd-radius: 5px;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: 'Roboto', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\nli {\n  list-style: none;\n}\n\nbody {\n  display: grid;\n  align-content: start;\n  grid-template-columns: 325px 1fr;\n  grid-template-rows: 50px calc(100vh - 50px);\n  height: 100vh;\n}\n\nbody > * {\n  padding: 15px 3px 15px 35px;\n}\n\n.content-container {\n  padding-top: 30px;\n}\n\n.header-container {\n  background-color: var(--main-hd-color);\n\n}\n\n/* body>div:nth-child(odd) {\n  padding-right: 20px;\n} */\n\n.header-container-left {\n  display: flex;\n  justify-content: space-between;\n  padding-left: 43px;\n  padding-right: 25px;\n}\n\nspan.text-italic {\n  font-style: italic;\n  color: white;\n}\n\n.todo-container {\n  padding-left: 12%;\n  padding-right: 12%;\n}\n\n.projects-container {\n  background-color: var(--main-bg-color);\n}\n\n.project {\n  display: grid;\n  grid-template-columns: 24px 1fr 30px;\n  align-items: center;\n  padding-top: 7px;\n  padding-bottom: 7px;\n  padding-left: 8px;\n  border-radius: 5px;\n}\n\nli.project:hover, svg.cross:hover {\n  background-color: var(--main-hv-color);\n  cursor: pointer;\n}\n\ndiv.project button.add {\n  padding-right: 17px;\n\n}\n\n.count, .project button:last-child {\n  justify-self: end;\n  padding-right: 10px;\n  padding-right: 25px;\n  color: grey;\n  font-size: 0.8rem;\n}\n\n.title {\n  padding-left: 10px;\n}\n\n.title-projects-container {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.todo-container .btn-svg {\n  color: rgb(150, 150, 150);\n  border-radius: 3px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n}\n\n.todo-container .btn-svg:hover {\n  color: black;\n  background-color: rgb(220,220,220, 1);\n  cursor: pointer;\n}\n\n.task:hover .btn-svg, .todo-header:hover .btn-svg {\n  opacity: 0.6;\n}\n\n.title-projects-title {\n  font-weight: 600;\n}\n\ninput, .btn-svg, textarea {\n  border: none;\n  appearance: none;\n  outline: none;\n  background: none;\n}\n\ninput[type=\"checkbox\"], input[type=\"radio\"] {\n  position: absolute;\n  left: -100vw;\n}\n\ninput.list-title {\n  font-size: 1.2rem;\n}\n\n.list-title-container {\n  display: grid;\n  grid-template-columns: 25px 1fr repeat(3, 25px);\n  grid-template-rows: 30px;\n  align-items: start;\n  padding-top: 7px;\n  margin-bottom: 15px;\n}\n\n.task {\n  position: relative;\n  display: grid;\n  grid-template-columns: 1fr repeat(4, 25px);\n  grid-template-rows: 25px 17px 20px;\n  align-items: center;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid lightgrey;\n}\n\n.todo-header:hover, .todo-body:hover {\n  cursor: pointer;\n}\n\n\n.task .task-check {\n  position: absolute;\n  left: -100vw;\n}\n\n.custom-checkbox {\n  --check: 18px;\n  display: inline-block;\n  height: var(--check);\n  width: var(--check);\n  margin-right: 12px;\n  padding-left: 1px;\n  border: 2px solid rgb(30, 144, 255);\n  background-color: rgb(30, 144, 255, 0.2);\n  border-radius: 50%;\n}\n\n.task label:hover .custom-checkbox {\n  transform: scale(1.1);\n}\n\n.task .task-check + label span.task-text {\n  position: relative;\n}\n\n.task .task-check:checked + label span.task-text:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  height: 2px;\n  background: rgb(70, 70, 70, 0.6);\n}\n\n.custom-checkbox svg {\n  opacity: 0;\n}\n\n.task .task-check:checked + label svg {\n  opacity: 1;\n}\n\n.task label {\n  display: flex;\n  align-items: center;\n  font-size: 0.9rem;\n}\n\n.task label:hover {\n  cursor: pointer;\n}\n\n.task-check {\n  appearance: auto;\n}\n\n.task-text {\n  font-size: 0.9rem;\n}\n\np.task-descr {\n  justify-self: start;\n  font-size: 0.8rem;\n  color: grey;\n  margin-left: 30px;\n}\n\np.task-descr:hover {\n  color: black;\n}\n\n\n.calendar-container {\n  grid-row: 3 / 4;\n  display: flex;\n  align-items: center;\n  margin-left: 28px;\n}\n\n.task-calendar {\n  font-size: 0.8rem;\n  color: grey;\n}\n\n.form-main {\n  padding: 8px 8px;\n  border: 1px solid rgb(200, 200, 200, 0.5);\n  border-radius: 8px;\n}\n\n.form-text {\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n\n.form-descr {\n  font-size: 0.8rem;\n  color: black;\n  resize: none;\n  margin-top: 5px;\n}\n\n.task-form button, .form-container {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  margin-right: 8px;\n  border: 1px solid var(--main-bd-color);\n  border-radius: var(--main-bd-radius);\n  background: none;\n  font-size: 0.8rem;\n  cursor: pointer;\n}\n\n.form-params {\n  display: flex;\n  justify-content: flex-start;\n}\n\n.form-project-container, .form-priority-container {\n  position: relative;\n}\n\nli.project-input {\n  /* display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 0; */\n}\n\ndiv.project-input, div.priority-input {\n  display: none;\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 200%;\n  border: 1px solid var(--main-bd-color);\n  border-radius: var(--main-bd-radius);\n  padding: 0;\n  background-color: white;\n}\n\ndiv.form-priority-container div.priority-input {\n  width: 400%;\n}\n\n.project-input .option, .priority-input .option {\n  font-size: 0.8rem;\n}\n\n.project-input .option:hover, .priority-input .option:hover {\n  background-color: rgb(245,245,245, 0.8);\n}\n\n.project-input label, .priority-input label {\n  padding: 5px 7px;\n}\n\n.form-save {\n  display: flex;\n  margin-top: 8px;\n  justify-content: flex-end;\n}\n\n.form-save button {\n  padding: 7px 12px;\n  border: none;\n  letter-spacing: 0.05rem;\n}\n\n.form-save button:last-child {\n  margin-right: 0;\n  background-color: var(--main-hd-color);\n  color: white;\n}\n\n.form-save button:last-child:hover {\n  background-color: var(--main-hd-color-hover);\n}\n\n.form-save button:first-child {\n  background-color: var(--btn-bg-color);\n}\n\n.form-save button:first-child:hover {\n  background-color: var(--btn-bg-color-hover);\n}\n\n.backdrop {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 3;\n  background-color: var(--main-bd-color);\n}\n\n.modal {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 5;\n  width: 60%;\n  padding: 15px;\n  border-radius: var(--main-bd-radius);\n  background: white;\n}\n\n.modal .form-main {\n  border: none;\n}\n\n.hidden {\n  display: none;\n}\n\n.btn-wrapper label {\n  display: block;\n  padding: 5px 7px;\n}\n\nlabel.btn-projects > *:not(.hidden), .project-input label, .priority-input label {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n\ninput[type=\"checkbox\"]:checked + .btn-wrapper label {\n  background-color: lightgrey;\n}\n\ninput[type=\"checkbox\"]:checked ~ div.project-input, input[type=\"checkbox\"]:checked ~ div.priority-input {\n  display: block;\n}\n\ninput[type=\"radio\"]:checked + .btn-wrapper label {\n  \n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'Roboto';\n  src: url('./roboto-v30-latin-regular.woff2') format('woff2'),\n    url('./roboto-v30-latin-regular.woff') format('woff');\n  font-weight: 400;\n  font-style: normal;\n}\n\n:root {\n  --main-hd-color: rgb(255, 99, 71);\n  --main-hd-color-hover: rgb(200, 99, 71);\n  --main-bg-color: rgb(245,245,245, 0.5);\n  --main-hv-color: rgb(230,230,230);\n  --btn-bg-color: rgb(255,218,185);\n  --btn-bg-color-hover: rgb(239, 204, 174);\n  --main-bd-color: rgb(128, 128, 128, 0.5);\n  --main-bd-radius: 5px;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: 'Roboto', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\nli {\n  list-style: none;\n}\n\nbody {\n  display: grid;\n  align-content: start;\n  grid-template-columns: 325px 1fr;\n  grid-template-rows: 50px calc(100vh - 50px);\n  height: 100vh;\n}\n\nbody > * {\n  padding: 15px 3px 15px 35px;\n}\n\n.content-container {\n  padding-top: 30px;\n}\n\n.header-container {\n  background-color: var(--main-hd-color);\n\n}\n\n/* body>div:nth-child(odd) {\n  padding-right: 20px;\n} */\n\n.header-container-left {\n  display: flex;\n  justify-content: space-between;\n  padding-left: 43px;\n  padding-right: 25px;\n}\n\nspan.text-italic {\n  font-style: italic;\n  color: white;\n}\n\n.todo-container {\n  padding-left: 12%;\n  padding-right: 12%;\n}\n\n.projects-container {\n  background-color: var(--main-bg-color);\n}\n\n.project {\n  display: grid;\n  grid-template-columns: 24px 1fr 30px;\n  align-items: center;\n  padding-top: 7px;\n  padding-bottom: 7px;\n  padding-left: 8px;\n  border-radius: 5px;\n}\n\nli.project:hover, svg.cross:hover {\n  background-color: var(--main-hv-color);\n  cursor: pointer;\n}\n\ndiv.project button.add {\n  padding-right: 17px;\n\n}\n\n.count, .project button:last-child {\n  justify-self: end;\n  padding-right: 10px;\n  padding-right: 25px;\n  color: grey;\n  font-size: 0.8rem;\n}\n\n.title {\n  padding-left: 10px;\n}\n\n.title-projects-container {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.todo-container .btn-svg {\n  color: rgb(150, 150, 150);\n  border-radius: 3px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n}\n\n.todo-container .btn-svg:hover {\n  color: black;\n  background-color: rgb(220,220,220, 1);\n  cursor: pointer;\n}\n\n.task:hover .btn-svg, .todo-header:hover .btn-svg {\n  opacity: 0.6;\n}\n\n.title-projects-title {\n  font-weight: 600;\n}\n\ninput, .btn-svg, textarea {\n  border: none;\n  appearance: none;\n  outline: none;\n  background: none;\n}\n\ninput[type=\"checkbox\"], input[type=\"radio\"] {\n  position: absolute;\n  left: -100vw;\n}\n\ninput.list-title {\n  font-size: 1.2rem;\n}\n\n.list-title-container {\n  display: grid;\n  grid-template-columns: 25px 1fr repeat(3, 25px);\n  grid-template-rows: 30px;\n  align-items: start;\n  padding-top: 7px;\n  margin-bottom: 15px;\n}\n\n.task {\n  position: relative;\n  display: grid;\n  grid-template-columns: 1fr repeat(4, 25px);\n  grid-template-rows: 25px 17px 20px;\n  align-items: center;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid lightgrey;\n}\n\n.todo-header:hover, .todo-body:hover {\n  cursor: pointer;\n}\n\n\n.task .task-check {\n  position: absolute;\n  left: -100vw;\n}\n\n.custom-checkbox {\n  --check: 18px;\n  display: inline-block;\n  height: var(--check);\n  width: var(--check);\n  margin-right: 12px;\n  padding-left: 1px;\n  border: 2px solid rgb(30, 144, 255);\n  background-color: rgb(30, 144, 255, 0.2);\n  border-radius: 50%;\n}\n\n.task label:hover .custom-checkbox {\n  transform: scale(1.1);\n}\n\n.task .task-check + label span.task-text {\n  position: relative;\n}\n\n.task .task-check:checked + label span.task-text:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  height: 2px;\n  background: rgb(70, 70, 70, 0.6);\n}\n\n.custom-checkbox svg {\n  opacity: 0;\n}\n\n.task .task-check:checked + label svg {\n  opacity: 1;\n}\n\n.task label {\n  display: flex;\n  align-items: center;\n  font-size: 0.9rem;\n}\n\n.task label:hover {\n  cursor: pointer;\n}\n\n.task-check {\n  appearance: auto;\n}\n\n.task-text {\n  font-size: 0.9rem;\n}\n\np.task-descr {\n  justify-self: start;\n  font-size: 0.8rem;\n  color: grey;\n  margin-left: 30px;\n}\n\np.task-descr:hover {\n  color: black;\n}\n\n\n.calendar-container {\n  grid-row: 3 / 4;\n  display: flex;\n  align-items: center;\n  margin-left: 28px;\n}\n\n.task-calendar {\n  font-size: 0.8rem;\n  color: grey;\n}\n\n.form-main {\n  padding: 8px 8px;\n  border: 1px solid rgb(200, 200, 200, 0.5);\n  border-radius: 8px;\n}\n\n.form-text {\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n\n.form-descr {\n  font-size: 0.8rem;\n  color: black;\n  resize: none;\n  margin-top: 5px;\n}\n\n.task-form button, .form-container {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  margin-right: 8px;\n  border: 1px solid var(--main-bd-color);\n  border-radius: var(--main-bd-radius);\n  background: none;\n  font-size: 0.8rem;\n  cursor: pointer;\n}\n\n.form-params {\n  display: flex;\n  justify-content: flex-start;\n}\n\n.form-project-container, .form-priority-container {\n  position: relative;\n}\n\nli.project-input {\n  /* display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 0; */\n}\n\ndiv.project-input, div.priority-input {\n  display: none;\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 200%;\n  border: 1px solid var(--main-bd-color);\n  border-radius: var(--main-bd-radius);\n  padding: 0;\n  background-color: white;\n}\n\ndiv.form-priority-container div.priority-input {\n  width: 400%;\n}\n\n.project-input .option, .priority-input .option {\n  font-size: 0.8rem;\n}\n\n.project-input .option:hover, .priority-input .option:hover {\n  background-color: rgb(245,245,245, 0.8);\n}\n\n.project-input label, .priority-input label {\n  padding: 5px 7px;\n}\n\n.form-save {\n  display: flex;\n  margin-top: 8px;\n  justify-content: flex-end;\n}\n\n.form-save button {\n  padding: 7px 12px;\n  border: none;\n  letter-spacing: 0.05rem;\n}\n\n.form-save button:last-child {\n  margin-right: 0;\n  background-color: var(--main-hd-color);\n  color: white;\n}\n\n.form-save button:last-child:hover {\n  background-color: var(--main-hd-color-hover);\n}\n\n.form-save button:first-child {\n  background-color: var(--btn-bg-color);\n}\n\n.form-save button:first-child:hover {\n  background-color: var(--btn-bg-color-hover);\n}\n\n.backdrop {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 3;\n  background-color: var(--main-bd-color);\n}\n\n.modal {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 5;\n  width: 60%;\n  padding: 15px;\n  border-radius: var(--main-bd-radius);\n  background: white;\n}\n\n.modal .form-main {\n  border: none;\n}\n\n.hidden {\n  display: none;\n}\n\n.btn-wrapper label {\n  display: block;\n  padding: 5px 7px;\n}\n\nlabel.btn-projects > *:not(.hidden), .project-input label, .priority-input label {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n\ninput[type=\"checkbox\"]:checked + .btn-wrapper label {\n  background-color: lightgrey;\n}\n\ninput[type=\"checkbox\"]:checked ~ div.project-input, input[type=\"checkbox\"]:checked ~ div.priority-input {\n  display: block;\n}\n\ninput[type=\"radio\"]:checked + .btn-wrapper label {\n  \n}"],"sourceRoot":""}]);
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
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");





const App = class {
  projects = [];
  constructor() {
    this.init();
  }

  init() {
    const inbox = new _project__WEBPACK_IMPORTED_MODULE_0__["default"]('inbox', '', '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="dodgerblue" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-inbox list-dot"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>');
    this.projects.push(inbox);
    const courses = new _project__WEBPACK_IMPORTED_MODULE_0__.PersonalProject('courses', 'cornflowerblue');
    this.projects.push(courses);
    const enfants = new _project__WEBPACK_IMPORTED_MODULE_0__.PersonalProject('enfants', 'crimson');
    this.projects.push(enfants);
    const travaux = new _project__WEBPACK_IMPORTED_MODULE_0__.PersonalProject('travaux', 'darkorange');
    this.projects.push(travaux);
    const task1 = new _task__WEBPACK_IMPORTED_MODULE_1__["default"]('Réparer robinet', 'salle de bains', 0, 'travaux');
    travaux.tasks.push(task1);
    const task2 = new _task__WEBPACK_IMPORTED_MODULE_1__["default"]('Déboucher l\'évier', 'acheter du produit', 0, 'travaux');
    travaux.tasks.push(task2);
  }
};


const app = new App();
document.addEventListener('click', _display__WEBPACK_IMPORTED_MODULE_2__["default"].bind(app));
_sidebar__WEBPACK_IMPORTED_MODULE_3__["default"].call(app);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");
/* harmony import */ var _main_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-content */ "./src/main-content.js");
/* harmony import */ var _generate_projects_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generate-projects-list */ "./src/generate-projects-list.js");
/* harmony import */ var _generate_priority_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./generate-priority-list */ "./src/generate-priority-list");







function display(e) {
  const backDrop = document.querySelector('.backdrop');
  const [activeProject] = [...document.querySelectorAll('input.sidebar-project')].filter(input => input.checked);
  const getActiveProject = (selector) => {
    const [activeProject] = [...document.querySelectorAll(selector)].filter(input => input.checked);
    const [project] = this.projects.filter(project => project.id === activeProject.dataset.id);
    return project;
  };
  const activeTask = activeProject.tasks;
  
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
  <div class="form-project-container form-container">
<input type="checkbox" name="btn-projects" id="btn-projects">
<div class="btn-wrapper form-project">
    <label class="btn-projects" for="btn-projects">
      <div class="btn-pers-proj">
        <svg class="list-dot" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="cornflowerblue" stroke="none" class="feather feather-circle">
          <circle cx="12" cy="12" r="5"/>
        </svg>
        <span class="form-project">Courses</span>
      </div>
    </label>
</div>
<div class="project-input">
  <ul class="project-input list">
    <li class="project-input option inbox">
      <input class="project-option" type="radio" name="project-option" data-id= "${this.projects[0].id}" id="inbox" value="inbox" checked>
      <label for="inbox">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="dodgerblue" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-inbox"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/>
          <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
        </svg>
        <span class="inbox-title">Inbox</span>
      </label>
    </li>
  </ul>
</div>
</div>
<div class="form-priority-container form-container">
<input type="checkbox" name="btn-priority" id="btn-priority">
<div class="btn-wrapper form-priority">
    <label class="btn-priority" for="btn-priority">
      <div class="btn-priority">
        <svg class="form-priority xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="red" stroke="red" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-flag">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>
        </svg>
        <span class="form-priority"></span>
      </div>
    </label>
</div>
<div class="priority-input">
  <ul class="priority-input list">
  </ul>
</div>
</div>
  </div>
  </div>
  <div class="form-save">
  <button class="cancel-new-task cancel" type="button">Annnuler</button>
  <button class="save-new-task save">Enregistrer</button>
  </div>
  </form>`;

  const findTask = function(taskElem) {
    const projectIndex = this.projects.findIndex(proj => proj.id === activeProject.dataset.id);
    const taskIndex = this.projects[projectIndex].tasks.findIndex(task => task.id === taskElem.dataset.id);
    return [projectIndex, taskIndex];
  };

  const saveTaskTemplate = function(btn) {
    e.preventDefault();
    const taskForm = btn.closest(`form.task-form`);
    const taskTextInput = taskForm.querySelector('input.form-text');
    const taskDescrInput = taskForm.querySelector('textarea.form-descr');
    const [taskProject] = [...taskForm.querySelectorAll('li.project-input input')].filter(input => input.checked);
    const task = new _task__WEBPACK_IMPORTED_MODULE_1__["default"](taskTextInput.value, taskDescrInput.value, 0, taskProject.value);
    return { task, taskProject };
  };

  const displayModifyTask = function() {
    const htmlFormModify = `<form class="task-form modify" id="task-modify">
    <div class="form-main">
    <div class="form-text">
    <input class="form-text" type="text" name="task-text" id="task-modify" value="Pommes" autofocus placeholder= "Tâche">
    </div>
    <div class="form-descr">
    <textarea class="form-descr" name="descr-1" id="descr-modify" cols="30" rows="4" placeholder= "Description">à l'épicerie paysanne</textarea>
    </div>
    <div class="form-params">
    <button type="button" class="form-date">
    <svg class="form-date" style="width:15px;height:15px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M19 3C20.11 3 21 3.89 21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.9 3 5 3H6V1H8V3H16V1H18V3H19M19 19V9H5V19H19M19 7V5H5V7H19M7 11H9V17H7V11" />
    </svg>
    <span class="form-date">19 oct</span>
    </button>
    <div class="form-project-container form-container">
    <input type="checkbox" name="btn-projects" id="btn-projects">
    <div class="btn-wrapper form-project">
        <label class="btn-projects" for="btn-projects">
          <div class="btn-pers-proj">
            <svg class="list-dot" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="cornflowerblue" stroke="none" class="feather feather-circle">
              <circle cx="12" cy="12" r="5"/>
            </svg>
            <span class="form-project">Courses</span>
          </div>
        </label>
    </div>
    <div class="project-input">
    <ul class="project-input list">
      <li class="project-input option inbox">
        <input class="project-option" type="radio" name="project-option" data-id= "${this.projects[0].id}" id="inbox" value="inbox" checked>
        <label for="inbox">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="dodgerblue" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-inbox"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/>
            <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
          </svg>
          <span class="inbox-title">Inbox</span>
        </label>
      </li>
    </ul>
</div>
</div>
</div>
</div>
<div class="form-save">
<button class="cancel-new-task" type="button">Annnuler</button>
<button class="save-new-task">Enregistrer</button>
</div>
      </form>`
    
    const closeModifyForm = function() {
      const form = document.querySelector('.modify');
      const taskEl = form.previousElementSibling;
      document.querySelector('.tasks-container').removeChild(form);
      taskEl.classList.toggle('hidden');
    }

    const cancelModifyForm = function() {
      const cancelBtn = e.target.closest('.modify button.cancel-new-task');
      if (!cancelBtn) return;
      cancelBtn && closeModifyForm();
    };

    const clickOutsideModifyForm = function() {
      const form = document.querySelector('.modify');
      const modifyBtn = e.target.closest('.modify button.cancel-new-task');
      const input = e.target.closest('input');
      const btn = e.target.closest('button');
      if (!form || btn?.classList.contains('edit-task') || input?.closest('.modify') || btn?.closest('.modify')) return;
      if (input || btn) closeModifyForm();

    }
  
    const saveModifiedTask = function() {
      const saveBtn = e.target.closest('.modify button.save-new-task');
      if (!saveBtn) return;
      const { task, taskProject} = saveTaskTemplate(saveBtn);
      const taskEl = saveBtn.closest('.modify').previousElementSibling;
      const [projectIndex, taskIndex] = findTask.call(this, taskEl);
      this.projects[projectIndex].tasks.splice(taskIndex, 1);
      this.projects.forEach(project => project._projectName === taskProject.value && project.tasks.splice(taskIndex, 0, task));
      _sidebar__WEBPACK_IMPORTED_MODULE_2__["default"].call(this);
      closeModifyForm();
      _main_content__WEBPACK_IMPORTED_MODULE_3__["default"].call(this);
    };
    
    const generateModifyTaskContent = function(elem) {
      const [projectIndex, taskIndex] = findTask.call(this, elem);
      const activeTask = this.projects[projectIndex].tasks[taskIndex];
      const form = document.querySelector('.modify');
      const taskName = form.querySelector('input.form-text');
      const taskDescr = form.querySelector('textarea.form-descr');
      taskName.value = activeTask._taskName;
      taskDescr.value = activeTask._descr;
    };
  
    const displayFormModify = function() {
      const btnEdit = e.target.closest('.edit-task');
      if (btnEdit) {
        const task = btnEdit.closest('.task');
        task.classList.toggle('hidden');
        task.insertAdjacentHTML('afterend', htmlFormModify);
        generateModifyTaskContent.call(this, task);
        _generate_projects_list__WEBPACK_IMPORTED_MODULE_4__["default"].call(this, document.querySelector('.modify ul.project-input'));
        selectedOption.call(this);
      };
    };
    
    displayFormModify.call(this);
    saveModifiedTask.call(this);
    cancelModifyForm();
    clickOutsideModifyForm();
    
  };
  
  const displayNewTask = function() {
    const displayNewTaskModal = function() {
      const addTask = e.target.closest('button.add-task');
      if (!addTask) return;
      backDrop.classList.toggle('hidden');
      backDrop.insertAdjacentHTML('beforeend', htmlNewFormModal);
      _generate_projects_list__WEBPACK_IMPORTED_MODULE_4__["default"].call(this, document.querySelector('.modal ul.project-input'));
      selectedOption.call(this);
      _generate_priority_list__WEBPACK_IMPORTED_MODULE_5__["default"].call(this, document.querySelector('ul.priority-input'));
    };
  
    const closeModal = function() {
      backDrop.classList.toggle('hidden');
      backDrop.removeChild(document.querySelector('.modal'));
    };
  
    const cancelModal = function() {
      const btnProjects = document.querySelector('input#btn-projects');
      const outsideModal = e.target.closest('.backdrop');
      const cancelBtn = e.target.closest('.modal button.cancel-new-task');
      cancelBtn && closeModal();
      if (!outsideModal || e.target.closest('.modal') || btnProjects.checked) return;
      closeModal();
    };

    function clickOutside() {
      const backdrop = e.target.closest('.backdrop');
      const projectsContainer = e.target.closest('.form-project-container');
      if (projectsContainer || !backdrop) return;
      const btnProjects = document.querySelector('input#btn-projects');
      if (btnProjects && btnProjects.checked && !projectsContainer) {
        btnProjects.checked = false;
      };
    };

    const saveTask = function() {
      const saveBtn = e.target.closest('.modal button.save-new-task');
      if (!saveBtn) return;
      const { task, taskProject} = saveTaskTemplate(saveBtn);
      this.projects.forEach(project => project._projectName === taskProject.value && project.tasks.push(task));
      _sidebar__WEBPACK_IMPORTED_MODULE_2__["default"].call(this);
      closeModal();
      _main_content__WEBPACK_IMPORTED_MODULE_3__["default"].call(this);
    };

    displayNewTaskModal.call(this);
    cancelModal();
    saveTask.call(this);
    clickOutside.call(this);
      
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

  const generateSvgProjectOptionsButton = function(container, svgEl, project) {
    const projectSvg = project._svg;
    container.removeChild(svgEl);
    container.insertAdjacentHTML('afterbegin', projectSvg);
    container.querySelector('svg').setAttribute('width', 20);
    container.querySelector('svg').setAttribute('height', 20);
  };

  const setProjectOptionsButton = function(project) {
    const btnPersProj = document.querySelector('.btn-pers-proj');
    const projectName = project.capitalizedProjectName;
    btnPersProj.querySelector('span').textContent = projectName;
    generateSvgProjectOptionsButton(btnPersProj, btnPersProj.querySelector('svg'), project)
  };

  const selectedOption = function() {
    setProjectOptionsButton(getActiveProject('input.sidebar-project'));
    const [activeOption] = [...document.querySelectorAll('input[type="radio"].project-option')].filter(input => input.value === activeProject.value);
    activeOption.checked = true;
  };

  const selectMenuOption = function(option, btn, fn, fnArg) {
    const checkedOption = option;
    if (!checkedOption) return;
    const btnMenu = btn;
    if (checkedOption && checkedOption.checked) {
      fn(fnArg);
      btnMenu.checked = false;          
    };
  }

  const selectOption = function() {
    // selectMenuOption(e.target.closest('input[type="radio"].project-option'), document.querySelector('input#btn-projects'), setProjectOptionsButton, getActiveProject('.project-option'));
    const checkedProject = e.target.closest('input[type="radio"].project-option');
    if (!checkedProject) return;
    const btnProjects = document.querySelector('input#btn-projects');
    if (checkedProject && checkedProject.checked) {
      setProjectOptionsButton(getActiveProject('.project-option'));
      btnProjects.checked = false;          
    };
  };

  const setPriorityOptionsButton = function(svgOption) {
    const svg = document.querySelector('svg.form-priority');
    svg.setAttribute('fill', svgOption.getAttribute('fill'));
    svg.setAttribute('stroke', svgOption.getAttribute('stroke'));
  }

  const selectPriority = function() {
    selectMenuOption(e.target.closest('input[type="radio"].priority-option'), document.querySelector('input#btn-priority'), setPriorityOptionsButton, checkedPriority.closest('li').querySelector('svg'));
  //   const checkedPriority = e.target.closest('input[type="radio"].priority-option');
  //   if (!checkedPriority) return;
  //   const btnSetPriority = document.querySelector('input#btn-priority');
  //   if (checkedPriority && checkedPriority.checked) {
  //     setPriorityOptionsButton(checkedPriority.closest('li').querySelector('svg'));
  //     btnSetPriority.checked = false;          
  //   };
  };

  const selectProject = function() {
    document.querySelectorAll('label.sidebar-project').forEach(label => label.style.backgroundColor = 'var(--main-bg-color)');
    const projectInput = e.target.closest('input.sidebar-project');
    if (!projectInput) return;
    const projectLabel = projectInput.nextElementSibling;
    const svg = projectLabel.querySelector('svg');
    const displaySelectedProject = function() {
      const container = document.querySelector('.list-title-container');
      let textInput = document.querySelector('input.list-title');
      let colorInput = document.querySelector('.list-dot');
      textInput.value = projectInput.value[0].toUpperCase() + projectInput.value.slice(1);
      if (svg.classList.contains('feather-circle')) {
        container.removeChild(colorInput);
        container.insertAdjacentHTML('afterbegin', '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill=${project._color} stroke="none" class="feather feather-circle list-dot"><circle cx="12" cy="12" r="5"/></svg>') 
        document.querySelector('.list-dot').setAttribute('fill', svg.getAttribute('fill'));
      } else {
        container.removeChild(colorInput);
        svg.classList.contains('feather-inbox') && container.insertAdjacentHTML('afterbegin', '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="dodgerblue" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-inbox list-dot"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>');
        // svg.classList.contains('feather-clock') &&
        // svg.classList.contains('feather-calendar') &&
      }
    };

    if (projectInput.checked) {
      projectLabel.style.backgroundColor = 'var(--main-hv-color)';
      displaySelectedProject();
      _main_content__WEBPACK_IMPORTED_MODULE_3__["default"].call(this);
    };
  };

  const taskBtns = function() {
    const moveTask = function() {
      const btn = e.target.closest('button.move');
      if (!btn) return;
      const taskEl = btn.closest('.task');
      const [projectIndex, taskIndex] = findTask.call(this, taskEl);
      const [clickedTask] = this.projects[projectIndex].tasks.splice(taskIndex, 1);
      btn.classList.contains('move-up') ? this.projects[projectIndex].tasks.splice(taskIndex -1, 0, clickedTask) : this.projects[projectIndex].tasks.splice(taskIndex + 1, 0, clickedTask);
      _main_content__WEBPACK_IMPORTED_MODULE_3__["default"].call(this);
    };

    const deleteTask = function() {
      const btn = e.target.closest('button.del-task');
      if (!btn) return;
      const taskEl = btn.closest('.task');
      const [projectIndex, taskIndex] = findTask.call(this, taskEl);
      this.projects[projectIndex].tasks.splice(taskIndex, 1);
      _main_content__WEBPACK_IMPORTED_MODULE_3__["default"].call(this);
      _sidebar__WEBPACK_IMPORTED_MODULE_2__["default"].call(this);
    };

    moveTask.call(this);
    deleteTask.call(this);
  }

  
  displayModifyTask.call(this);
  displayNewTask.call(this);
  selectOption.call(this);
  selectPriority.call(this);
  selectProject.call(this);
  taskBtns.call(this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);

/***/ }),

/***/ "./src/generate-priority-list":
/*!************************************!*\
  !*** ./src/generate-priority-list ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function generatePriorityList(element) {
  const projectList = element;
  if (projectList.contains(document.querySelector('li.priority-item'))) return;
  for (let i = 1; i < 5; i++) {
    let html = `
      <li class="priority-input option priority-item" data-id="">
        <input class="priority-option" type="radio" name="priority-option" data-id = "" id="priority-${i}" value="${i}">
        <label for="priority-${i}">
          <svg class="priority-option xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="red" stroke="red" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-flag">
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>
          </svg>
          <span class="priority-input option">Priority ${i}</span>
        </label>
      </li>
      `;
    if (i === 2) html = html.replaceAll("red", "orange");
    if (i === 3) html = html.replaceAll("red", "blue");
    if (i === 4) {
      html = html
        .replace('fill="red"', 'fill="none"')
        .replace('stroke="red"', 'stroke="black"');
    };

    projectList.insertAdjacentHTML('beforeend', html);
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generatePriorityList);

/***/ }),

/***/ "./src/generate-projects-list.js":
/*!***************************************!*\
  !*** ./src/generate-projects-list.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function generateProjectsList(element) {
  const projectList = element;
  if (projectList.contains(document.querySelector('li.personal'))) return;
  this.projects.forEach((project, index) => {
    if (index > 0) {
      console.log(project)
      const projectHtml = `
      <li class="project-input option personal" data-id=${project.id}>
        <input class="project-option"type="radio" name="project-option" data-id = "${project.id}" id="project-${index}" value=${project._projectName}>
        <label for="project-${index}">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill=${project._color} stroke="none" class="feather feather-circle">
            <circle cx="12" cy="12" r="5"/>
          </svg>
          <span class="project-input option">${project._projectName[0].toUpperCase()}${project._projectName.slice(1).toLowerCase()}</span>
        </label>
      </li>
      `;
      projectList.insertAdjacentHTML('beforeend', projectHtml);
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateProjectsList);


/***/ }),

/***/ "./src/main-content.js":
/*!*****************************!*\
  !*** ./src/main-content.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const generateTasks = function() {
  const [selectedProject] = [...document.querySelectorAll('input.sidebar-project')].filter(input => input.checked);
  document.querySelectorAll('.task').forEach(task => document.querySelector('.tasks-container').removeChild(task));
  const [project] = this.projects.filter(project => project.id === selectedProject.dataset.id);
  console.log(this.projects);
  project.tasks.forEach((task, index) => {
    const html = `
    <div class="task" id="task-${index}" data-id=${task.id}>
      <input class="task-check" type="checkbox" id="check-${index}">
      <label class="task-label" for="check-${index}">
        <span class="custom-checkbox">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="dodgerblue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"/></svg>
        </span>
        <span class="task-text">${task._taskName}</span>
      </label>
      <button class="btn-svg list-actions move move-up">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>
      </button>
      <button class="btn-svg list-actions move move-down">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
      </button>
      <button class="btn-svg list-actions edit-task">
        <svg class="todo-header-edit pen" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
      </button>
      <button class="btn-svg list-actions del-task">
        <svg class="todo-header-del trash" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
      </button>
      <p class="task-descr" id="task-0">${task._descr}</p>
      <div class="calendar-container">
        <svg class="task-calendar" style="width:15px;height:15px" viewBox="0 0 24 24">
          <path fill="currentColor" d="M19 3C20.11 3 21 3.89 21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.9 3 5 3H6V1H8V3H16V1H18V3H19M19 19V9H5V19H19M19 7V5H5V7H19M7 11H9V17H7V11" />
        </svg>
        <p class="task-calendar">19 oct</p>
      </div>
    </div>
    `;
    document.querySelector('.tasks-container').insertAdjacentHTML('beforeend', html);
  });
  
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateTasks);

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalProject": () => (/* binding */ PersonalProject),
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
const Project = class {
  date = new Date();
  tasks = [];
  constructor(projectName, color, svg) {
    this.id = projectName + '-' + (Date.now() + '').slice(-10);
    this._projectName = projectName;
    this._color = color;
    this._svg = svg;
    this.message();
  }

  message() {
    console.log('New Project created')
  }

  // set svgColor(newColor) {
  //   this._svg.fill = newColor;
  // }

  // get svgColor() {
  //   return this._svg.fill;
  // }

  // set svgSize(newSize) {
  //   this._svg.width = this._svg.height = newSize;
  // }

  // get svgSize() {
  //   return this._svg.width;
  // }

  set projectName(newName) {
    this._projectName = newName;
  }

  get projectName() {
    return this._projectName;
  }

  get capitalizedProjectName() {
    return this._projectName[0].toUpperCase() + this._projectName.slice(1);
  }

};

const PersonalProject = class extends Project {
  constructor(projectName, color) {
    super(projectName, color);
    this._svg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill=${color} stroke="none" class="feather feather-circle list-dot">
      <circle cx="12" cy="12" r="5"/>
    </svg>`;
  }
}



/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const initInbox = function() {
  const input = document.querySelector('input#sidebar-inbox');
  const count = document.querySelector('.inbox-count');
  input.setAttribute('data-id', this.projects[0].id);
  count.textContent = this.projects[0].tasks.length;

};

const generateProjects = function() {
  initInbox.call(this);
  const element = document.querySelector('.personal-projects-list');
  const [activeProject] = [...document.querySelectorAll('input.sidebar-project')].filter(input => input.checked);
  document.querySelectorAll('li.sidebar-personal').forEach(el => document.querySelector('.personal-projects-list').removeChild(el));
  this.projects.forEach((project, index) => {
    if (index > 0) {
      const projectHtml = `
      <li class="sidebar-project sidebar-personal" data-id=${project.id}>
        <input class="sidebar-project" data-id=${project.id} type="radio" name="project-option" id="sidebar-project-${index}" value=${project._projectName}>
        <label class="sidebar-project project" for="sidebar-project-${index}">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill=${project._color} stroke="none" class="feather feather-circle">
            <circle cx="12" cy="12" r="5"/>
          </svg>
          <span class="sidebar-project title">${project._projectName[0].toUpperCase()}${project._projectName.slice(1).toLowerCase()}</span>
          <span class="sidebar-project count">${project.tasks.length}</span>
        </label>
      </li>
      `;
      element.insertAdjacentHTML('beforeend', projectHtml);
    }
  });
  const [newActiveProject] = [...document.querySelectorAll('input.sidebar-project')].filter(input => input.id === activeProject?.id);
  activeProject ? newActiveProject.checked = true : document.querySelector('input.sidebar-project').checked = true;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateProjects);



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
  date = new Date();
  constructor(taskName, descr, deadline, project, priority) {
    this.id = taskName.slice(-5) + (Date.now() + '').slice(-10);
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
const application = _app__WEBPACK_IMPORTED_MODULE_1__["default"];

// const app = new App();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxRQUFRLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEUsTUFBTSxnQkFBZ0IscUJBQXFCO0FBQ3ZILHFIQUFxSCxnQkFBZ0I7QUFDckksZ0VBQWdFLHNDQUFzQyxFQUFFLDRDQUE0QztBQUNwSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9nZW5lcmF0ZS1wcmlvcml0eS1saXN0Iiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9nZW5lcmF0ZS1wcm9qZWN0cy1saXN0LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9tYWluLWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vcm9ib3RvLXYzMC1sYXRpbi1yZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9yb2JvdG8tdjMwLWxhdGluLXJlZ3VsYXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLW1haW4taGQtY29sb3I6IHJnYigyNTUsIDk5LCA3MSk7XFxuICAtLW1haW4taGQtY29sb3ItaG92ZXI6IHJnYigyMDAsIDk5LCA3MSk7XFxuICAtLW1haW4tYmctY29sb3I6IHJnYigyNDUsMjQ1LDI0NSwgMC41KTtcXG4gIC0tbWFpbi1odi1jb2xvcjogcmdiKDIzMCwyMzAsMjMwKTtcXG4gIC0tYnRuLWJnLWNvbG9yOiByZ2IoMjU1LDIxOCwxODUpO1xcbiAgLS1idG4tYmctY29sb3ItaG92ZXI6IHJnYigyMzksIDIwNCwgMTc0KTtcXG4gIC0tbWFpbi1iZC1jb2xvcjogcmdiKDEyOCwgMTI4LCAxMjgsIDAuNSk7XFxuICAtLW1haW4tYmQtcmFkaXVzOiA1cHg7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5saSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1jb250ZW50OiBzdGFydDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzI1cHggMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IGNhbGMoMTAwdmggLSA1MHB4KTtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbmJvZHkgPiAqIHtcXG4gIHBhZGRpbmc6IDE1cHggM3B4IDE1cHggMzVweDtcXG59XFxuXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWhkLWNvbG9yKTtcXG5cXG59XFxuXFxuLyogYm9keT5kaXY6bnRoLWNoaWxkKG9kZCkge1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG59ICovXFxuXFxuLmhlYWRlci1jb250YWluZXItbGVmdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZy1sZWZ0OiA0M3B4O1xcbiAgcGFkZGluZy1yaWdodDogMjVweDtcXG59XFxuXFxuc3Bhbi50ZXh0LWl0YWxpYyB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nLWxlZnQ6IDEyJTtcXG4gIHBhZGRpbmctcmlnaHQ6IDEyJTtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjRweCAxZnIgMzBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogN3B4O1xcbiAgcGFkZGluZy1ib3R0b206IDdweDtcXG4gIHBhZGRpbmctbGVmdDogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5saS5wcm9qZWN0OmhvdmVyLCBzdmcuY3Jvc3M6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1odi1jb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmRpdi5wcm9qZWN0IGJ1dHRvbi5hZGQge1xcbiAgcGFkZGluZy1yaWdodDogMTdweDtcXG5cXG59XFxuXFxuLmNvdW50LCAucHJvamVjdCBidXR0b246bGFzdC1jaGlsZCB7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xcbiAgY29sb3I6IGdyZXk7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuLnRpdGxlLXByb2plY3RzLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4udG9kby1jb250YWluZXIgLmJ0bi1zdmcge1xcbiAgY29sb3I6IHJnYigxNTAsIDE1MCwgMTUwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4udG9kby1jb250YWluZXIgLmJ0bi1zdmc6aG92ZXIge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMCwyMjAsMjIwLCAxKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2s6aG92ZXIgLmJ0bi1zdmcsIC50b2RvLWhlYWRlcjpob3ZlciAuYnRuLXN2ZyB7XFxuICBvcGFjaXR5OiAwLjY7XFxufVxcblxcbi50aXRsZS1wcm9qZWN0cy10aXRsZSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG5pbnB1dCwgLmJ0bi1zdmcsIHRleHRhcmVhIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSwgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAtMTAwdnc7XFxufVxcblxcbmlucHV0Lmxpc3QtdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5saXN0LXRpdGxlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNXB4IDFmciByZXBlYXQoMywgMjVweCk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwcHg7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBwYWRkaW5nLXRvcDogN3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLnRhc2sge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIHJlcGVhdCg0LCAyNXB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjVweCAxN3B4IDIwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDhweDtcXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xcbn1cXG5cXG4udG9kby1oZWFkZXI6aG92ZXIsIC50b2RvLWJvZHk6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4udGFzayAudGFzay1jaGVjayB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAtMTAwdnc7XFxufVxcblxcbi5jdXN0b20tY2hlY2tib3gge1xcbiAgLS1jaGVjazogMThweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogdmFyKC0tY2hlY2spO1xcbiAgd2lkdGg6IHZhcigtLWNoZWNrKTtcXG4gIG1hcmdpbi1yaWdodDogMTJweDtcXG4gIHBhZGRpbmctbGVmdDogMXB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDMwLCAxNDQsIDI1NSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzAsIDE0NCwgMjU1LCAwLjIpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4udGFzayBsYWJlbDpob3ZlciAuY3VzdG9tLWNoZWNrYm94IHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLnRhc2sgLnRhc2stY2hlY2sgKyBsYWJlbCBzcGFuLnRhc2stdGV4dCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50YXNrIC50YXNrLWNoZWNrOmNoZWNrZWQgKyBsYWJlbCBzcGFuLnRhc2stdGV4dDphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogNTAlO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBiYWNrZ3JvdW5kOiByZ2IoNzAsIDcwLCA3MCwgMC42KTtcXG59XFxuXFxuLmN1c3RvbS1jaGVja2JveCBzdmcge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnRhc2sgLnRhc2stY2hlY2s6Y2hlY2tlZCArIGxhYmVsIHN2ZyB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udGFzayBsYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4udGFzayBsYWJlbDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWNoZWNrIHtcXG4gIGFwcGVhcmFuY2U6IGF1dG87XFxufVxcblxcbi50YXNrLXRleHQge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbnAudGFzay1kZXNjciB7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBjb2xvcjogZ3JleTtcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbn1cXG5cXG5wLnRhc2stZGVzY3I6aG92ZXIge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5cXG4uY2FsZW5kYXItY29udGFpbmVyIHtcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDI4cHg7XFxufVxcblxcbi50YXNrLWNhbGVuZGFyIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgY29sb3I6IGdyZXk7XFxufVxcblxcbi5mb3JtLW1haW4ge1xcbiAgcGFkZGluZzogOHB4IDhweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMDAsIDIwMCwgMjAwLCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4uZm9ybS10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmZvcm0tZGVzY3Ige1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBjb2xvcjogYmxhY2s7XFxuICByZXNpemU6IG5vbmU7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbi50YXNrLWZvcm0gYnV0dG9uLCAuZm9ybS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDNweDtcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWFpbi1iZC1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tYWluLWJkLXJhZGl1cyk7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mb3JtLXBhcmFtcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uZm9ybS1wcm9qZWN0LWNvbnRhaW5lciwgLmZvcm0tcHJpb3JpdHktY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxubGkucHJvamVjdC1pbnB1dCB7XFxuICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbiAgcGFkZGluZzogMDsgKi9cXG59XFxuXFxuZGl2LnByb2plY3QtaW5wdXQsIGRpdi5wcmlvcml0eS1pbnB1dCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMDAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgd2lkdGg6IDIwMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tYWluLWJkLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1haW4tYmQtcmFkaXVzKTtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuZGl2LmZvcm0tcHJpb3JpdHktY29udGFpbmVyIGRpdi5wcmlvcml0eS1pbnB1dCB7XFxuICB3aWR0aDogNDAwJTtcXG59XFxuXFxuLnByb2plY3QtaW5wdXQgLm9wdGlvbiwgLnByaW9yaXR5LWlucHV0IC5vcHRpb24ge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi5wcm9qZWN0LWlucHV0IC5vcHRpb246aG92ZXIsIC5wcmlvcml0eS1pbnB1dCAub3B0aW9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsMjQ1LDI0NSwgMC44KTtcXG59XFxuXFxuLnByb2plY3QtaW5wdXQgbGFiZWwsIC5wcmlvcml0eS1pbnB1dCBsYWJlbCB7XFxuICBwYWRkaW5nOiA1cHggN3B4O1xcbn1cXG5cXG4uZm9ybS1zYXZlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4uZm9ybS1zYXZlIGJ1dHRvbiB7XFxuICBwYWRkaW5nOiA3cHggMTJweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xcbn1cXG5cXG4uZm9ybS1zYXZlIGJ1dHRvbjpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4taGQtY29sb3IpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZm9ybS1zYXZlIGJ1dHRvbjpsYXN0LWNoaWxkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4taGQtY29sb3ItaG92ZXIpO1xcbn1cXG5cXG4uZm9ybS1zYXZlIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4tYmctY29sb3IpO1xcbn1cXG5cXG4uZm9ybS1zYXZlIGJ1dHRvbjpmaXJzdC1jaGlsZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4tYmctY29sb3ItaG92ZXIpO1xcbn1cXG5cXG4uYmFja2Ryb3Age1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgei1pbmRleDogMztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmQtY29sb3IpO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHotaW5kZXg6IDU7XFxuICB3aWR0aDogNjAlO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1haW4tYmQtcmFkaXVzKTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG4ubW9kYWwgLmZvcm0tbWFpbiB7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmJ0bi13cmFwcGVyIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogNXB4IDdweDtcXG59XFxuXFxubGFiZWwuYnRuLXByb2plY3RzID4gKjpub3QoLmhpZGRlbiksIC5wcm9qZWN0LWlucHV0IGxhYmVsLCAucHJpb3JpdHktaW5wdXQgbGFiZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDNweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgLmJ0bi13cmFwcGVyIGxhYmVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkIH4gZGl2LnByb2plY3QtaW5wdXQsIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB+IGRpdi5wcmlvcml0eS1pbnB1dCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTpjaGVja2VkICsgLmJ0bi13cmFwcGVyIGxhYmVsIHtcXG4gIFxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCOzBEQUN1RDtFQUN2RCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLHVDQUF1QztFQUN2QyxzQ0FBc0M7RUFDdEMsaUNBQWlDO0VBQ2pDLGdDQUFnQztFQUNoQyx3Q0FBd0M7RUFDeEMsd0NBQXdDO0VBQ3hDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtFQUNWLHNFQUFzRTtBQUN4RTs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsZ0NBQWdDO0VBQ2hDLDJDQUEyQztFQUMzQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQ0FBc0M7O0FBRXhDOztBQUVBOztHQUVHOztBQUVIO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjs7QUFFckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFDQUFxQztFQUNyQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwrQ0FBK0M7RUFDL0Msd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiwwQ0FBMEM7RUFDMUMsa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7OztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1DQUFtQztFQUNuQyx3Q0FBd0M7RUFDeEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLFFBQVE7RUFDUixXQUFXO0VBQ1gsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOzs7QUFHQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIseUNBQXlDO0VBQ3pDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsaUJBQWlCO0VBQ2pCLHNDQUFzQztFQUN0QyxvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFOzs7ZUFHYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztFQUNULDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsc0NBQXNDO0VBQ3RDLG9DQUFvQztFQUNwQyxVQUFVO0VBQ1YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQ0FBc0M7RUFDdEMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsTUFBTTtFQUNOLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLFVBQVU7RUFDVixVQUFVO0VBQ1YsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztBQUVBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgc3JjOiB1cmwoJy4vcm9ib3RvLXYzMC1sYXRpbi1yZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICB1cmwoJy4vcm9ib3RvLXYzMC1sYXRpbi1yZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbjpyb290IHtcXG4gIC0tbWFpbi1oZC1jb2xvcjogcmdiKDI1NSwgOTksIDcxKTtcXG4gIC0tbWFpbi1oZC1jb2xvci1ob3ZlcjogcmdiKDIwMCwgOTksIDcxKTtcXG4gIC0tbWFpbi1iZy1jb2xvcjogcmdiKDI0NSwyNDUsMjQ1LCAwLjUpO1xcbiAgLS1tYWluLWh2LWNvbG9yOiByZ2IoMjMwLDIzMCwyMzApO1xcbiAgLS1idG4tYmctY29sb3I6IHJnYigyNTUsMjE4LDE4NSk7XFxuICAtLWJ0bi1iZy1jb2xvci1ob3ZlcjogcmdiKDIzOSwgMjA0LCAxNzQpO1xcbiAgLS1tYWluLWJkLWNvbG9yOiByZ2IoMTI4LCAxMjgsIDEyOCwgMC41KTtcXG4gIC0tbWFpbi1iZC1yYWRpdXM6IDVweDtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMjVweCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggY2FsYygxMDB2aCAtIDUwcHgpO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYm9keSA+ICoge1xcbiAgcGFkZGluZzogMTVweCAzcHggMTVweCAzNXB4O1xcbn1cXG5cXG4uY29udGVudC1jb250YWluZXIge1xcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4taGQtY29sb3IpO1xcblxcbn1cXG5cXG4vKiBib2R5PmRpdjpudGgtY2hpbGQob2RkKSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn0gKi9cXG5cXG4uaGVhZGVyLWNvbnRhaW5lci1sZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nLWxlZnQ6IDQzcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xcbn1cXG5cXG5zcGFuLnRleHQtaXRhbGljIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIHtcXG4gIHBhZGRpbmctbGVmdDogMTIlO1xcbiAgcGFkZGluZy1yaWdodDogMTIlO1xcbn1cXG5cXG4ucHJvamVjdHMtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNHB4IDFmciAzMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiA3cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogN3B4O1xcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbmxpLnByb2plY3Q6aG92ZXIsIHN2Zy5jcm9zczpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWh2LWNvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuZGl2LnByb2plY3QgYnV0dG9uLmFkZCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxN3B4O1xcblxcbn1cXG5cXG4uY291bnQsIC5wcm9qZWN0IGJ1dHRvbjpsYXN0LWNoaWxkIHtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XFxuICBjb2xvcjogZ3JleTtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4udGl0bGUtcHJvamVjdHMtY29udGFpbmVyIHtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciAuYnRuLXN2ZyB7XFxuICBjb2xvcjogcmdiKDE1MCwgMTUwLCAxNTApO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciAuYnRuLXN2Zzpob3ZlciB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIwLDIyMCwyMjAsIDEpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzazpob3ZlciAuYnRuLXN2ZywgLnRvZG8taGVhZGVyOmhvdmVyIC5idG4tc3ZnIHtcXG4gIG9wYWNpdHk6IDAuNjtcXG59XFxuXFxuLnRpdGxlLXByb2plY3RzLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbmlucHV0LCAuYnRuLXN2ZywgdGV4dGFyZWEge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLCBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IC0xMDB2dztcXG59XFxuXFxuaW5wdXQubGlzdC10aXRsZSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmxpc3QtdGl0bGUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1cHggMWZyIHJlcGVhdCgzLCAyNXB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMzBweDtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIHBhZGRpbmctdG9wOiA3cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4udGFzayB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgcmVwZWF0KDQsIDI1cHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyNXB4IDE3cHggMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogOHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDhweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7XFxufVxcblxcbi50b2RvLWhlYWRlcjpob3ZlciwgLnRvZG8tYm9keTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi50YXNrIC50YXNrLWNoZWNrIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IC0xMDB2dztcXG59XFxuXFxuLmN1c3RvbS1jaGVja2JveCB7XFxuICAtLWNoZWNrOiAxOHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiB2YXIoLS1jaGVjayk7XFxuICB3aWR0aDogdmFyKC0tY2hlY2spO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMzAsIDE0NCwgMjU1KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzMCwgMTQ0LCAyNTUsIDAuMik7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi50YXNrIGxhYmVsOmhvdmVyIC5jdXN0b20tY2hlY2tib3gge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4udGFzayAudGFzay1jaGVjayArIGxhYmVsIHNwYW4udGFzay10ZXh0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRhc2sgLnRhc2stY2hlY2s6Y2hlY2tlZCArIGxhYmVsIHNwYW4udGFzay10ZXh0OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiA1MCU7XFxuICBoZWlnaHQ6IDJweDtcXG4gIGJhY2tncm91bmQ6IHJnYig3MCwgNzAsIDcwLCAwLjYpO1xcbn1cXG5cXG4uY3VzdG9tLWNoZWNrYm94IHN2ZyB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4udGFzayAudGFzay1jaGVjazpjaGVja2VkICsgbGFiZWwgc3ZnIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi50YXNrIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi50YXNrIGxhYmVsOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stY2hlY2sge1xcbiAgYXBwZWFyYW5jZTogYXV0bztcXG59XFxuXFxuLnRhc2stdGV4dCB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxucC50YXNrLWRlc2NyIHtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGNvbG9yOiBncmV5O1xcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxufVxcblxcbnAudGFzay1kZXNjcjpob3ZlciB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcblxcbi5jYWxlbmRhci1jb250YWluZXIge1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMjhweDtcXG59XFxuXFxuLnRhc2stY2FsZW5kYXIge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBjb2xvcjogZ3JleTtcXG59XFxuXFxuLmZvcm0tbWFpbiB7XFxuICBwYWRkaW5nOiA4cHggOHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIwMCwgMjAwLCAyMDAsIDAuNSk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5mb3JtLXRleHQge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uZm9ybS1kZXNjciB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG59XFxuXFxuLnRhc2stZm9ybSBidXR0b24sIC5mb3JtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogM3B4O1xcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tYWluLWJkLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1haW4tYmQtcmFkaXVzKTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZvcm0tcGFyYW1zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5mb3JtLXByb2plY3QtY29udGFpbmVyLCAuZm9ybS1wcmlvcml0eS1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5saS5wcm9qZWN0LWlucHV0IHtcXG4gIC8qIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBwYWRkaW5nOiAwOyAqL1xcbn1cXG5cXG5kaXYucHJvamVjdC1pbnB1dCwgZGl2LnByaW9yaXR5LWlucHV0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwMCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICB3aWR0aDogMjAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tYmQtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbWFpbi1iZC1yYWRpdXMpO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5kaXYuZm9ybS1wcmlvcml0eS1jb250YWluZXIgZGl2LnByaW9yaXR5LWlucHV0IHtcXG4gIHdpZHRoOiA0MDAlO1xcbn1cXG5cXG4ucHJvamVjdC1pbnB1dCAub3B0aW9uLCAucHJpb3JpdHktaW5wdXQgLm9wdGlvbiB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLnByb2plY3QtaW5wdXQgLm9wdGlvbjpob3ZlciwgLnByaW9yaXR5LWlucHV0IC5vcHRpb246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwyNDUsMjQ1LCAwLjgpO1xcbn1cXG5cXG4ucHJvamVjdC1pbnB1dCBsYWJlbCwgLnByaW9yaXR5LWlucHV0IGxhYmVsIHtcXG4gIHBhZGRpbmc6IDVweCA3cHg7XFxufVxcblxcbi5mb3JtLXNhdmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5mb3JtLXNhdmUgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDdweCAxMnB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVyZW07XFxufVxcblxcbi5mb3JtLXNhdmUgYnV0dG9uOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1oZC1jb2xvcik7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5mb3JtLXNhdmUgYnV0dG9uOmxhc3QtY2hpbGQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1oZC1jb2xvci1ob3Zlcik7XFxufVxcblxcbi5mb3JtLXNhdmUgYnV0dG9uOmZpcnN0LWNoaWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0bi1iZy1jb2xvcik7XFxufVxcblxcbi5mb3JtLXNhdmUgYnV0dG9uOmZpcnN0LWNoaWxkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0bi1iZy1jb2xvci1ob3Zlcik7XFxufVxcblxcbi5iYWNrZHJvcCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICB6LWluZGV4OiAzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZC1jb2xvcik7XFxufVxcblxcbi5tb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgei1pbmRleDogNTtcXG4gIHdpZHRoOiA2MCU7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbWFpbi1iZC1yYWRpdXMpO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbi5tb2RhbCAuZm9ybS1tYWluIHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYnRuLXdyYXBwZXIgbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiA1cHggN3B4O1xcbn1cXG5cXG5sYWJlbC5idG4tcHJvamVjdHMgPiAqOm5vdCguaGlkZGVuKSwgLnByb2plY3QtaW5wdXQgbGFiZWwsIC5wcmlvcml0eS1pbnB1dCBsYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogM3B4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyAuYnRuLXdyYXBwZXIgbGFiZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgfiBkaXYucHJvamVjdC1pbnB1dCwgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkIH4gZGl2LnByaW9yaXR5LWlucHV0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmNoZWNrZWQgKyAuYnRuLXdyYXBwZXIgbGFiZWwge1xcbiAgXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgUHJvamVjdCwge1BlcnNvbmFsUHJvamVjdH0gZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7XG5pbXBvcnQgZGlzcGxheSBmcm9tICcuL2Rpc3BsYXknO1xuaW1wb3J0IGdlbmVyYXRlUHJvamVjdHMgZnJvbSAnLi9zaWRlYmFyJztcblxuY29uc3QgQXBwID0gY2xhc3Mge1xuICBwcm9qZWN0cyA9IFtdO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgY29uc3QgaW5ib3ggPSBuZXcgUHJvamVjdCgnaW5ib3gnLCAnJywgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImRvZGdlcmJsdWVcIiBzdHJva2Utd2lkdGg9XCIxXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItaW5ib3ggbGlzdC1kb3RcIj48cG9seWxpbmUgcG9pbnRzPVwiMjIgMTIgMTYgMTIgMTQgMTUgMTAgMTUgOCAxMiAyIDEyXCIvPjxwYXRoIGQ9XCJNNS40NSA1LjExTDIgMTJ2NmEyIDIgMCAwIDAgMiAyaDE2YTIgMiAwIDAgMCAyLTJ2LTZsLTMuNDUtNi44OUEyIDIgMCAwIDAgMTYuNzYgNEg3LjI0YTIgMiAwIDAgMC0xLjc5IDEuMTF6XCIvPjwvc3ZnPicpO1xuICAgIHRoaXMucHJvamVjdHMucHVzaChpbmJveCk7XG4gICAgY29uc3QgY291cnNlcyA9IG5ldyBQZXJzb25hbFByb2plY3QoJ2NvdXJzZXMnLCAnY29ybmZsb3dlcmJsdWUnKTtcbiAgICB0aGlzLnByb2plY3RzLnB1c2goY291cnNlcyk7XG4gICAgY29uc3QgZW5mYW50cyA9IG5ldyBQZXJzb25hbFByb2plY3QoJ2VuZmFudHMnLCAnY3JpbXNvbicpO1xuICAgIHRoaXMucHJvamVjdHMucHVzaChlbmZhbnRzKTtcbiAgICBjb25zdCB0cmF2YXV4ID0gbmV3IFBlcnNvbmFsUHJvamVjdCgndHJhdmF1eCcsICdkYXJrb3JhbmdlJyk7XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKHRyYXZhdXgpO1xuICAgIGNvbnN0IHRhc2sxID0gbmV3IFRhc2soJ1LDqXBhcmVyIHJvYmluZXQnLCAnc2FsbGUgZGUgYmFpbnMnLCAwLCAndHJhdmF1eCcpO1xuICAgIHRyYXZhdXgudGFza3MucHVzaCh0YXNrMSk7XG4gICAgY29uc3QgdGFzazIgPSBuZXcgVGFzaygnRMOpYm91Y2hlciBsXFwnw6l2aWVyJywgJ2FjaGV0ZXIgZHUgcHJvZHVpdCcsIDAsICd0cmF2YXV4Jyk7XG4gICAgdHJhdmF1eC50YXNrcy5wdXNoKHRhc2syKTtcbiAgfVxufTtcblxuXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXkuYmluZChhcHApKTtcbmdlbmVyYXRlUHJvamVjdHMuY2FsbChhcHApO1xuZXhwb3J0IGRlZmF1bHQgYXBwOyIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2snO1xuaW1wb3J0IGdlbmVyYXRlUHJvamVjdHMgZnJvbSAnLi9zaWRlYmFyJztcbmltcG9ydCBnZW5lcmF0ZVRhc2tzIGZyb20gJy4vbWFpbi1jb250ZW50JztcbmltcG9ydCBnZW5lcmF0ZVByb2plY3RzTGlzdCBmcm9tICcuL2dlbmVyYXRlLXByb2plY3RzLWxpc3QnO1xuaW1wb3J0IGdlbmVyYXRlUHJpb3JpdHlMaXN0IGZyb20gJy4vZ2VuZXJhdGUtcHJpb3JpdHktbGlzdCc7XG5cbmZ1bmN0aW9uIGRpc3BsYXkoZSkge1xuICBjb25zdCBiYWNrRHJvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrZHJvcCcpO1xuICBjb25zdCBbYWN0aXZlUHJvamVjdF0gPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQuc2lkZWJhci1wcm9qZWN0JyldLmZpbHRlcihpbnB1dCA9PiBpbnB1dC5jaGVja2VkKTtcbiAgY29uc3QgZ2V0QWN0aXZlUHJvamVjdCA9IChzZWxlY3RvcikgPT4ge1xuICAgIGNvbnN0IFthY3RpdmVQcm9qZWN0XSA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKV0uZmlsdGVyKGlucHV0ID0+IGlucHV0LmNoZWNrZWQpO1xuICAgIGNvbnN0IFtwcm9qZWN0XSA9IHRoaXMucHJvamVjdHMuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC5pZCA9PT0gYWN0aXZlUHJvamVjdC5kYXRhc2V0LmlkKTtcbiAgICByZXR1cm4gcHJvamVjdDtcbiAgfTtcbiAgY29uc3QgYWN0aXZlVGFzayA9IGFjdGl2ZVByb2plY3QudGFza3M7XG4gIFxuICBjb25zdCBodG1sTmV3Rm9ybU1vZGFsID0gYFxuICA8Zm9ybSBjbGFzcz1cInRhc2stZm9ybSBtb2RhbCBuZXctdGFza1wiIGlkPVwidGFzay0wXCI+XG4gIDxkaXYgY2xhc3M9XCJmb3JtLW1haW5cIj5cbiAgPGRpdiBjbGFzcz1cImZvcm0tdGV4dFwiPlxuICA8aW5wdXQgY2xhc3M9XCJmb3JtLXRleHRcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0YXNrLXRleHRcIiBpZD1cInRhc2stMVwiIGF1dG9mb2N1cyBwbGFjZWhvbGRlcj1cIlTDomNoZVwiPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImZvcm0tZGVzY3JcIj5cbiAgPHRleHRhcmVhIGNsYXNzPVwiZm9ybS1kZXNjclwiIG5hbWU9XCJkZXNjci0xXCIgaWQ9XCJkZXNjci0xXCIgY29scz1cIjMwXCIgcm93cz1cIjRcIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCI+PC90ZXh0YXJlYT5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJmb3JtLXBhcmFtc1wiPlxuICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImZvcm0tZGF0ZVwiPlxuICA8c3ZnIGNsYXNzPVwiZm9ybS1kYXRlXCIgc3R5bGU9XCJ3aWR0aDoxNXB4O2hlaWdodDoxNXB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xOSAzQzIwLjExIDMgMjEgMy44OSAyMSA1VjE5QzIxIDIwLjExIDIwLjExIDIxIDE5IDIxSDVDMy44OSAyMSAzIDIwLjEgMyAxOVY1QzMgMy44OSAzLjkgMyA1IDNINlYxSDhWM0gxNlYxSDE4VjNIMTlNMTkgMTlWOUg1VjE5SDE5TTE5IDdWNUg1VjdIMTlNNyAxMUg5VjE3SDdWMTFcIiAvPlxuICA8L3N2Zz5cbiAgPHNwYW4gY2xhc3M9XCJmb3JtLWRhdGVcIj7DiWNow6lhbmNlPC9zcGFuPlxuICA8L2J1dHRvbj5cbiAgPGRpdiBjbGFzcz1cImZvcm0tcHJvamVjdC1jb250YWluZXIgZm9ybS1jb250YWluZXJcIj5cbjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiYnRuLXByb2plY3RzXCIgaWQ9XCJidG4tcHJvamVjdHNcIj5cbjxkaXYgY2xhc3M9XCJidG4td3JhcHBlciBmb3JtLXByb2plY3RcIj5cbiAgICA8bGFiZWwgY2xhc3M9XCJidG4tcHJvamVjdHNcIiBmb3I9XCJidG4tcHJvamVjdHNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJidG4tcGVycy1wcm9qXCI+XG4gICAgICAgIDxzdmcgY2xhc3M9XCJsaXN0LWRvdFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cImNvcm5mbG93ZXJibHVlXCIgc3Ryb2tlPVwibm9uZVwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWNpcmNsZVwiPlxuICAgICAgICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiNVwiLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZm9ybS1wcm9qZWN0XCI+Q291cnNlczwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbGFiZWw+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJwcm9qZWN0LWlucHV0XCI+XG4gIDx1bCBjbGFzcz1cInByb2plY3QtaW5wdXQgbGlzdFwiPlxuICAgIDxsaSBjbGFzcz1cInByb2plY3QtaW5wdXQgb3B0aW9uIGluYm94XCI+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJwcm9qZWN0LW9wdGlvblwiIHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwcm9qZWN0LW9wdGlvblwiIGRhdGEtaWQ9IFwiJHt0aGlzLnByb2plY3RzWzBdLmlkfVwiIGlkPVwiaW5ib3hcIiB2YWx1ZT1cImluYm94XCIgY2hlY2tlZD5cbiAgICAgIDxsYWJlbCBmb3I9XCJpbmJveFwiPlxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJkb2RnZXJibHVlXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWluYm94XCI+PHBvbHlsaW5lIHBvaW50cz1cIjIyIDEyIDE2IDEyIDE0IDE1IDEwIDE1IDggMTIgMiAxMlwiLz5cbiAgICAgICAgICA8cGF0aCBkPVwiTTUuNDUgNS4xMUwyIDEydjZhMiAyIDAgMCAwIDIgMmgxNmEyIDIgMCAwIDAgMi0ydi02bC0zLjQ1LTYuODlBMiAyIDAgMCAwIDE2Ljc2IDRINy4yNGEyIDIgMCAwIDAtMS43OSAxLjExelwiLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaW5ib3gtdGl0bGVcIj5JbmJveDwvc3Bhbj5cbiAgICAgIDwvbGFiZWw+XG4gICAgPC9saT5cbiAgPC91bD5cbjwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiZm9ybS1wcmlvcml0eS1jb250YWluZXIgZm9ybS1jb250YWluZXJcIj5cbjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiYnRuLXByaW9yaXR5XCIgaWQ9XCJidG4tcHJpb3JpdHlcIj5cbjxkaXYgY2xhc3M9XCJidG4td3JhcHBlciBmb3JtLXByaW9yaXR5XCI+XG4gICAgPGxhYmVsIGNsYXNzPVwiYnRuLXByaW9yaXR5XCIgZm9yPVwiYnRuLXByaW9yaXR5XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnRuLXByaW9yaXR5XCI+XG4gICAgICAgIDxzdmcgY2xhc3M9XCJmb3JtLXByaW9yaXR5IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cInJlZFwiIHN0cm9rZT1cInJlZFwiIHN0cm9rZS13aWR0aD1cIjFcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1mbGFnXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNNCAxNXMxLTEgNC0xIDUgMiA4IDIgNC0xIDQtMVYzcy0xIDEtNCAxLTUtMi04LTItNCAxLTQgMXpcIi8+PGxpbmUgeDE9XCI0XCIgeTE9XCIyMlwiIHgyPVwiNFwiIHkyPVwiMTVcIi8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImZvcm0tcHJpb3JpdHlcIj48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2xhYmVsPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwicHJpb3JpdHktaW5wdXRcIj5cbiAgPHVsIGNsYXNzPVwicHJpb3JpdHktaW5wdXQgbGlzdFwiPlxuICA8L3VsPlxuPC9kaXY+XG48L2Rpdj5cbiAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZm9ybS1zYXZlXCI+XG4gIDxidXR0b24gY2xhc3M9XCJjYW5jZWwtbmV3LXRhc2sgY2FuY2VsXCIgdHlwZT1cImJ1dHRvblwiPkFubm51bGVyPC9idXR0b24+XG4gIDxidXR0b24gY2xhc3M9XCJzYXZlLW5ldy10YXNrIHNhdmVcIj5FbnJlZ2lzdHJlcjwvYnV0dG9uPlxuICA8L2Rpdj5cbiAgPC9mb3JtPmA7XG5cbiAgY29uc3QgZmluZFRhc2sgPSBmdW5jdGlvbih0YXNrRWxlbSkge1xuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHRoaXMucHJvamVjdHMuZmluZEluZGV4KHByb2ogPT4gcHJvai5pZCA9PT0gYWN0aXZlUHJvamVjdC5kYXRhc2V0LmlkKTtcbiAgICBjb25zdCB0YXNrSW5kZXggPSB0aGlzLnByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3MuZmluZEluZGV4KHRhc2sgPT4gdGFzay5pZCA9PT0gdGFza0VsZW0uZGF0YXNldC5pZCk7XG4gICAgcmV0dXJuIFtwcm9qZWN0SW5kZXgsIHRhc2tJbmRleF07XG4gIH07XG5cbiAgY29uc3Qgc2F2ZVRhc2tUZW1wbGF0ZSA9IGZ1bmN0aW9uKGJ0bikge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0YXNrRm9ybSA9IGJ0bi5jbG9zZXN0KGBmb3JtLnRhc2stZm9ybWApO1xuICAgIGNvbnN0IHRhc2tUZXh0SW5wdXQgPSB0YXNrRm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dC5mb3JtLXRleHQnKTtcbiAgICBjb25zdCB0YXNrRGVzY3JJbnB1dCA9IHRhc2tGb3JtLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhLmZvcm0tZGVzY3InKTtcbiAgICBjb25zdCBbdGFza1Byb2plY3RdID0gWy4uLnRhc2tGb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpLnByb2plY3QtaW5wdXQgaW5wdXQnKV0uZmlsdGVyKGlucHV0ID0+IGlucHV0LmNoZWNrZWQpO1xuICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayh0YXNrVGV4dElucHV0LnZhbHVlLCB0YXNrRGVzY3JJbnB1dC52YWx1ZSwgMCwgdGFza1Byb2plY3QudmFsdWUpO1xuICAgIHJldHVybiB7IHRhc2ssIHRhc2tQcm9qZWN0IH07XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheU1vZGlmeVRhc2sgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBodG1sRm9ybU1vZGlmeSA9IGA8Zm9ybSBjbGFzcz1cInRhc2stZm9ybSBtb2RpZnlcIiBpZD1cInRhc2stbW9kaWZ5XCI+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tbWFpblwiPlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLXRleHRcIj5cbiAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLXRleHRcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0YXNrLXRleHRcIiBpZD1cInRhc2stbW9kaWZ5XCIgdmFsdWU9XCJQb21tZXNcIiBhdXRvZm9jdXMgcGxhY2Vob2xkZXI9IFwiVMOiY2hlXCI+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZGVzY3JcIj5cbiAgICA8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWRlc2NyXCIgbmFtZT1cImRlc2NyLTFcIiBpZD1cImRlc2NyLW1vZGlmeVwiIGNvbHM9XCIzMFwiIHJvd3M9XCI0XCIgcGxhY2Vob2xkZXI9IFwiRGVzY3JpcHRpb25cIj7DoCBsJ8OpcGljZXJpZSBwYXlzYW5uZTwvdGV4dGFyZWE+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tcGFyYW1zXCI+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJmb3JtLWRhdGVcIj5cbiAgICA8c3ZnIGNsYXNzPVwiZm9ybS1kYXRlXCIgc3R5bGU9XCJ3aWR0aDoxNXB4O2hlaWdodDoxNXB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTE5IDNDMjAuMTEgMyAyMSAzLjg5IDIxIDVWMTlDMjEgMjAuMTEgMjAuMTEgMjEgMTkgMjFINUMzLjg5IDIxIDMgMjAuMSAzIDE5VjVDMyAzLjg5IDMuOSAzIDUgM0g2VjFIOFYzSDE2VjFIMThWM0gxOU0xOSAxOVY5SDVWMTlIMTlNMTkgN1Y1SDVWN0gxOU03IDExSDlWMTdIN1YxMVwiIC8+XG4gICAgPC9zdmc+XG4gICAgPHNwYW4gY2xhc3M9XCJmb3JtLWRhdGVcIj4xOSBvY3Q8L3NwYW4+XG4gICAgPC9idXR0b24+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tcHJvamVjdC1jb250YWluZXIgZm9ybS1jb250YWluZXJcIj5cbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImJ0bi1wcm9qZWN0c1wiIGlkPVwiYnRuLXByb2plY3RzXCI+XG4gICAgPGRpdiBjbGFzcz1cImJ0bi13cmFwcGVyIGZvcm0tcHJvamVjdFwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJidG4tcHJvamVjdHNcIiBmb3I9XCJidG4tcHJvamVjdHNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLXBlcnMtcHJvalwiPlxuICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImxpc3QtZG90XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwiY29ybmZsb3dlcmJsdWVcIiBzdHJva2U9XCJub25lXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItY2lyY2xlXCI+XG4gICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiNVwiLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmb3JtLXByb2plY3RcIj5Db3Vyc2VzPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWlucHV0XCI+XG4gICAgPHVsIGNsYXNzPVwicHJvamVjdC1pbnB1dCBsaXN0XCI+XG4gICAgICA8bGkgY2xhc3M9XCJwcm9qZWN0LWlucHV0IG9wdGlvbiBpbmJveFwiPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJwcm9qZWN0LW9wdGlvblwiIHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwcm9qZWN0LW9wdGlvblwiIGRhdGEtaWQ9IFwiJHt0aGlzLnByb2plY3RzWzBdLmlkfVwiIGlkPVwiaW5ib3hcIiB2YWx1ZT1cImluYm94XCIgY2hlY2tlZD5cbiAgICAgICAgPGxhYmVsIGZvcj1cImluYm94XCI+XG4gICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiZG9kZ2VyYmx1ZVwiIHN0cm9rZS13aWR0aD1cIjFcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1pbmJveFwiPjxwb2x5bGluZSBwb2ludHM9XCIyMiAxMiAxNiAxMiAxNCAxNSAxMCAxNSA4IDEyIDIgMTJcIi8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTUuNDUgNS4xMUwyIDEydjZhMiAyIDAgMCAwIDIgMmgxNmEyIDIgMCAwIDAgMi0ydi02bC0zLjQ1LTYuODlBMiAyIDAgMCAwIDE2Ljc2IDRINy4yNGEyIDIgMCAwIDAtMS43OSAxLjExelwiLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImluYm94LXRpdGxlXCI+SW5ib3g8L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG48L2Rpdj5cbjwvZGl2PlxuPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJmb3JtLXNhdmVcIj5cbjxidXR0b24gY2xhc3M9XCJjYW5jZWwtbmV3LXRhc2tcIiB0eXBlPVwiYnV0dG9uXCI+QW5ubnVsZXI8L2J1dHRvbj5cbjxidXR0b24gY2xhc3M9XCJzYXZlLW5ldy10YXNrXCI+RW5yZWdpc3RyZXI8L2J1dHRvbj5cbjwvZGl2PlxuICAgICAgPC9mb3JtPmBcbiAgICBcbiAgICBjb25zdCBjbG9zZU1vZGlmeUZvcm0gPSBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kaWZ5Jyk7XG4gICAgICBjb25zdCB0YXNrRWwgPSBmb3JtLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MtY29udGFpbmVyJykucmVtb3ZlQ2hpbGQoZm9ybSk7XG4gICAgICB0YXNrRWwuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgY29uc3QgY2FuY2VsTW9kaWZ5Rm9ybSA9IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgY2FuY2VsQnRuID0gZS50YXJnZXQuY2xvc2VzdCgnLm1vZGlmeSBidXR0b24uY2FuY2VsLW5ldy10YXNrJyk7XG4gICAgICBpZiAoIWNhbmNlbEJ0bikgcmV0dXJuO1xuICAgICAgY2FuY2VsQnRuICYmIGNsb3NlTW9kaWZ5Rm9ybSgpO1xuICAgIH07XG5cbiAgICBjb25zdCBjbGlja091dHNpZGVNb2RpZnlGb3JtID0gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGlmeScpO1xuICAgICAgY29uc3QgbW9kaWZ5QnRuID0gZS50YXJnZXQuY2xvc2VzdCgnLm1vZGlmeSBidXR0b24uY2FuY2VsLW5ldy10YXNrJyk7XG4gICAgICBjb25zdCBpbnB1dCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2lucHV0Jyk7XG4gICAgICBjb25zdCBidG4gPSBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24nKTtcbiAgICAgIGlmICghZm9ybSB8fCBidG4/LmNsYXNzTGlzdC5jb250YWlucygnZWRpdC10YXNrJykgfHwgaW5wdXQ/LmNsb3Nlc3QoJy5tb2RpZnknKSB8fCBidG4/LmNsb3Nlc3QoJy5tb2RpZnknKSkgcmV0dXJuO1xuICAgICAgaWYgKGlucHV0IHx8IGJ0bikgY2xvc2VNb2RpZnlGb3JtKCk7XG5cbiAgICB9XG4gIFxuICAgIGNvbnN0IHNhdmVNb2RpZmllZFRhc2sgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IHNhdmVCdG4gPSBlLnRhcmdldC5jbG9zZXN0KCcubW9kaWZ5IGJ1dHRvbi5zYXZlLW5ldy10YXNrJyk7XG4gICAgICBpZiAoIXNhdmVCdG4pIHJldHVybjtcbiAgICAgIGNvbnN0IHsgdGFzaywgdGFza1Byb2plY3R9ID0gc2F2ZVRhc2tUZW1wbGF0ZShzYXZlQnRuKTtcbiAgICAgIGNvbnN0IHRhc2tFbCA9IHNhdmVCdG4uY2xvc2VzdCgnLm1vZGlmeScpLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICBjb25zdCBbcHJvamVjdEluZGV4LCB0YXNrSW5kZXhdID0gZmluZFRhc2suY2FsbCh0aGlzLCB0YXNrRWwpO1xuICAgICAgdGhpcy5wcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICAgICAgdGhpcy5wcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4gcHJvamVjdC5fcHJvamVjdE5hbWUgPT09IHRhc2tQcm9qZWN0LnZhbHVlICYmIHByb2plY3QudGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMCwgdGFzaykpO1xuICAgICAgZ2VuZXJhdGVQcm9qZWN0cy5jYWxsKHRoaXMpO1xuICAgICAgY2xvc2VNb2RpZnlGb3JtKCk7XG4gICAgICBnZW5lcmF0ZVRhc2tzLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBnZW5lcmF0ZU1vZGlmeVRhc2tDb250ZW50ID0gZnVuY3Rpb24oZWxlbSkge1xuICAgICAgY29uc3QgW3Byb2plY3RJbmRleCwgdGFza0luZGV4XSA9IGZpbmRUYXNrLmNhbGwodGhpcywgZWxlbSk7XG4gICAgICBjb25zdCBhY3RpdmVUYXNrID0gdGhpcy5wcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzW3Rhc2tJbmRleF07XG4gICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGlmeScpO1xuICAgICAgY29uc3QgdGFza05hbWUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0LmZvcm0tdGV4dCcpO1xuICAgICAgY29uc3QgdGFza0Rlc2NyID0gZm9ybS5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYS5mb3JtLWRlc2NyJyk7XG4gICAgICB0YXNrTmFtZS52YWx1ZSA9IGFjdGl2ZVRhc2suX3Rhc2tOYW1lO1xuICAgICAgdGFza0Rlc2NyLnZhbHVlID0gYWN0aXZlVGFzay5fZGVzY3I7XG4gICAgfTtcbiAgXG4gICAgY29uc3QgZGlzcGxheUZvcm1Nb2RpZnkgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGJ0bkVkaXQgPSBlLnRhcmdldC5jbG9zZXN0KCcuZWRpdC10YXNrJyk7XG4gICAgICBpZiAoYnRuRWRpdCkge1xuICAgICAgICBjb25zdCB0YXNrID0gYnRuRWRpdC5jbG9zZXN0KCcudGFzaycpO1xuICAgICAgICB0YXNrLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICB0YXNrLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBodG1sRm9ybU1vZGlmeSk7XG4gICAgICAgIGdlbmVyYXRlTW9kaWZ5VGFza0NvbnRlbnQuY2FsbCh0aGlzLCB0YXNrKTtcbiAgICAgICAgZ2VuZXJhdGVQcm9qZWN0c0xpc3QuY2FsbCh0aGlzLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kaWZ5IHVsLnByb2plY3QtaW5wdXQnKSk7XG4gICAgICAgIHNlbGVjdGVkT3B0aW9uLmNhbGwodGhpcyk7XG4gICAgICB9O1xuICAgIH07XG4gICAgXG4gICAgZGlzcGxheUZvcm1Nb2RpZnkuY2FsbCh0aGlzKTtcbiAgICBzYXZlTW9kaWZpZWRUYXNrLmNhbGwodGhpcyk7XG4gICAgY2FuY2VsTW9kaWZ5Rm9ybSgpO1xuICAgIGNsaWNrT3V0c2lkZU1vZGlmeUZvcm0oKTtcbiAgICBcbiAgfTtcbiAgXG4gIGNvbnN0IGRpc3BsYXlOZXdUYXNrID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZGlzcGxheU5ld1Rhc2tNb2RhbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgYWRkVGFzayA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbi5hZGQtdGFzaycpO1xuICAgICAgaWYgKCFhZGRUYXNrKSByZXR1cm47XG4gICAgICBiYWNrRHJvcC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgIGJhY2tEcm9wLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgaHRtbE5ld0Zvcm1Nb2RhbCk7XG4gICAgICBnZW5lcmF0ZVByb2plY3RzTGlzdC5jYWxsKHRoaXMsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCB1bC5wcm9qZWN0LWlucHV0JykpO1xuICAgICAgc2VsZWN0ZWRPcHRpb24uY2FsbCh0aGlzKTtcbiAgICAgIGdlbmVyYXRlUHJpb3JpdHlMaXN0LmNhbGwodGhpcywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwucHJpb3JpdHktaW5wdXQnKSk7XG4gICAgfTtcbiAgXG4gICAgY29uc3QgY2xvc2VNb2RhbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgYmFja0Ryb3AuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICBiYWNrRHJvcC5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKSk7XG4gICAgfTtcbiAgXG4gICAgY29uc3QgY2FuY2VsTW9kYWwgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGJ0blByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQjYnRuLXByb2plY3RzJyk7XG4gICAgICBjb25zdCBvdXRzaWRlTW9kYWwgPSBlLnRhcmdldC5jbG9zZXN0KCcuYmFja2Ryb3AnKTtcbiAgICAgIGNvbnN0IGNhbmNlbEJ0biA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5tb2RhbCBidXR0b24uY2FuY2VsLW5ldy10YXNrJyk7XG4gICAgICBjYW5jZWxCdG4gJiYgY2xvc2VNb2RhbCgpO1xuICAgICAgaWYgKCFvdXRzaWRlTW9kYWwgfHwgZS50YXJnZXQuY2xvc2VzdCgnLm1vZGFsJykgfHwgYnRuUHJvamVjdHMuY2hlY2tlZCkgcmV0dXJuO1xuICAgICAgY2xvc2VNb2RhbCgpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjbGlja091dHNpZGUoKSB7XG4gICAgICBjb25zdCBiYWNrZHJvcCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5iYWNrZHJvcCcpO1xuICAgICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBlLnRhcmdldC5jbG9zZXN0KCcuZm9ybS1wcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgICAgaWYgKHByb2plY3RzQ29udGFpbmVyIHx8ICFiYWNrZHJvcCkgcmV0dXJuO1xuICAgICAgY29uc3QgYnRuUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCNidG4tcHJvamVjdHMnKTtcbiAgICAgIGlmIChidG5Qcm9qZWN0cyAmJiBidG5Qcm9qZWN0cy5jaGVja2VkICYmICFwcm9qZWN0c0NvbnRhaW5lcikge1xuICAgICAgICBidG5Qcm9qZWN0cy5jaGVja2VkID0gZmFsc2U7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCBzYXZlVGFzayA9IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3Qgc2F2ZUJ0biA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5tb2RhbCBidXR0b24uc2F2ZS1uZXctdGFzaycpO1xuICAgICAgaWYgKCFzYXZlQnRuKSByZXR1cm47XG4gICAgICBjb25zdCB7IHRhc2ssIHRhc2tQcm9qZWN0fSA9IHNhdmVUYXNrVGVtcGxhdGUoc2F2ZUJ0bik7XG4gICAgICB0aGlzLnByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiBwcm9qZWN0Ll9wcm9qZWN0TmFtZSA9PT0gdGFza1Byb2plY3QudmFsdWUgJiYgcHJvamVjdC50YXNrcy5wdXNoKHRhc2spKTtcbiAgICAgIGdlbmVyYXRlUHJvamVjdHMuY2FsbCh0aGlzKTtcbiAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICAgIGdlbmVyYXRlVGFza3MuY2FsbCh0aGlzKTtcbiAgICB9O1xuXG4gICAgZGlzcGxheU5ld1Rhc2tNb2RhbC5jYWxsKHRoaXMpO1xuICAgIGNhbmNlbE1vZGFsKCk7XG4gICAgc2F2ZVRhc2suY2FsbCh0aGlzKTtcbiAgICBjbGlja091dHNpZGUuY2FsbCh0aGlzKTtcbiAgICAgIFxuICAgICAgY29uc3QgZGlzcGxheUZvcm1EYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGJ0bkRhdGUgPSBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24uZm9ybS1kYXRlJyk7XG4gICAgICAgIGlmICghYnRuRGF0ZSkgcmV0dXJuO1xuICAgICAgICBjb25zb2xlLmxvZyhidG5EYXRlKTtcbiAgICAgIH07XG4gICAgICBcbiAgICAgIGNvbnN0IGRpc3BsYXlGb3JtUHJpb3JpdHkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgYnRuUHJpb3JpdHkgPSBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24uZm9ybS1wcmlvcml0eScpO1xuICAgICAgICBpZiAoIWJ0blByaW9yaXR5KSByZXR1cm47XG4gICAgICAgIGNvbnNvbGUubG9nKGJ0blByaW9yaXR5KTtcbiAgICAgIH07XG4gIH07XG5cbiAgY29uc3QgZ2VuZXJhdGVTdmdQcm9qZWN0T3B0aW9uc0J1dHRvbiA9IGZ1bmN0aW9uKGNvbnRhaW5lciwgc3ZnRWwsIHByb2plY3QpIHtcbiAgICBjb25zdCBwcm9qZWN0U3ZnID0gcHJvamVjdC5fc3ZnO1xuICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChzdmdFbCk7XG4gICAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIHByb2plY3RTdmcpO1xuICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzdmcnKS5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgMjApO1xuICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzdmcnKS5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIDIwKTtcbiAgfTtcblxuICBjb25zdCBzZXRQcm9qZWN0T3B0aW9uc0J1dHRvbiA9IGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICBjb25zdCBidG5QZXJzUHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcGVycy1wcm9qJyk7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0LmNhcGl0YWxpemVkUHJvamVjdE5hbWU7XG4gICAgYnRuUGVyc1Byb2oucXVlcnlTZWxlY3Rvcignc3BhbicpLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgZ2VuZXJhdGVTdmdQcm9qZWN0T3B0aW9uc0J1dHRvbihidG5QZXJzUHJvaiwgYnRuUGVyc1Byb2oucXVlcnlTZWxlY3Rvcignc3ZnJyksIHByb2plY3QpXG4gIH07XG5cbiAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSBmdW5jdGlvbigpIHtcbiAgICBzZXRQcm9qZWN0T3B0aW9uc0J1dHRvbihnZXRBY3RpdmVQcm9qZWN0KCdpbnB1dC5zaWRlYmFyLXByb2plY3QnKSk7XG4gICAgY29uc3QgW2FjdGl2ZU9wdGlvbl0gPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdLnByb2plY3Qtb3B0aW9uJyldLmZpbHRlcihpbnB1dCA9PiBpbnB1dC52YWx1ZSA9PT0gYWN0aXZlUHJvamVjdC52YWx1ZSk7XG4gICAgYWN0aXZlT3B0aW9uLmNoZWNrZWQgPSB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IHNlbGVjdE1lbnVPcHRpb24gPSBmdW5jdGlvbihvcHRpb24sIGJ0biwgZm4sIGZuQXJnKSB7XG4gICAgY29uc3QgY2hlY2tlZE9wdGlvbiA9IG9wdGlvbjtcbiAgICBpZiAoIWNoZWNrZWRPcHRpb24pIHJldHVybjtcbiAgICBjb25zdCBidG5NZW51ID0gYnRuO1xuICAgIGlmIChjaGVja2VkT3B0aW9uICYmIGNoZWNrZWRPcHRpb24uY2hlY2tlZCkge1xuICAgICAgZm4oZm5BcmcpO1xuICAgICAgYnRuTWVudS5jaGVja2VkID0gZmFsc2U7ICAgICAgICAgIFxuICAgIH07XG4gIH1cblxuICBjb25zdCBzZWxlY3RPcHRpb24gPSBmdW5jdGlvbigpIHtcbiAgICAvLyBzZWxlY3RNZW51T3B0aW9uKGUudGFyZ2V0LmNsb3Nlc3QoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXS5wcm9qZWN0LW9wdGlvbicpLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCNidG4tcHJvamVjdHMnKSwgc2V0UHJvamVjdE9wdGlvbnNCdXR0b24sIGdldEFjdGl2ZVByb2plY3QoJy5wcm9qZWN0LW9wdGlvbicpKTtcbiAgICBjb25zdCBjaGVja2VkUHJvamVjdCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXS5wcm9qZWN0LW9wdGlvbicpO1xuICAgIGlmICghY2hlY2tlZFByb2plY3QpIHJldHVybjtcbiAgICBjb25zdCBidG5Qcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I2J0bi1wcm9qZWN0cycpO1xuICAgIGlmIChjaGVja2VkUHJvamVjdCAmJiBjaGVja2VkUHJvamVjdC5jaGVja2VkKSB7XG4gICAgICBzZXRQcm9qZWN0T3B0aW9uc0J1dHRvbihnZXRBY3RpdmVQcm9qZWN0KCcucHJvamVjdC1vcHRpb24nKSk7XG4gICAgICBidG5Qcm9qZWN0cy5jaGVja2VkID0gZmFsc2U7ICAgICAgICAgIFxuICAgIH07XG4gIH07XG5cbiAgY29uc3Qgc2V0UHJpb3JpdHlPcHRpb25zQnV0dG9uID0gZnVuY3Rpb24oc3ZnT3B0aW9uKSB7XG4gICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3ZnLmZvcm0tcHJpb3JpdHknKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlKCdmaWxsJywgc3ZnT3B0aW9uLmdldEF0dHJpYnV0ZSgnZmlsbCcpKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlKCdzdHJva2UnLCBzdmdPcHRpb24uZ2V0QXR0cmlidXRlKCdzdHJva2UnKSk7XG4gIH1cblxuICBjb25zdCBzZWxlY3RQcmlvcml0eSA9IGZ1bmN0aW9uKCkge1xuICAgIHNlbGVjdE1lbnVPcHRpb24oZS50YXJnZXQuY2xvc2VzdCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdLnByaW9yaXR5LW9wdGlvbicpLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCNidG4tcHJpb3JpdHknKSwgc2V0UHJpb3JpdHlPcHRpb25zQnV0dG9uLCBjaGVja2VkUHJpb3JpdHkuY2xvc2VzdCgnbGknKS5xdWVyeVNlbGVjdG9yKCdzdmcnKSk7XG4gIC8vICAgY29uc3QgY2hlY2tlZFByaW9yaXR5ID0gZS50YXJnZXQuY2xvc2VzdCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdLnByaW9yaXR5LW9wdGlvbicpO1xuICAvLyAgIGlmICghY2hlY2tlZFByaW9yaXR5KSByZXR1cm47XG4gIC8vICAgY29uc3QgYnRuU2V0UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCNidG4tcHJpb3JpdHknKTtcbiAgLy8gICBpZiAoY2hlY2tlZFByaW9yaXR5ICYmIGNoZWNrZWRQcmlvcml0eS5jaGVja2VkKSB7XG4gIC8vICAgICBzZXRQcmlvcml0eU9wdGlvbnNCdXR0b24oY2hlY2tlZFByaW9yaXR5LmNsb3Nlc3QoJ2xpJykucXVlcnlTZWxlY3Rvcignc3ZnJykpO1xuICAvLyAgICAgYnRuU2V0UHJpb3JpdHkuY2hlY2tlZCA9IGZhbHNlOyAgICAgICAgICBcbiAgLy8gICB9O1xuICB9O1xuXG4gIGNvbnN0IHNlbGVjdFByb2plY3QgPSBmdW5jdGlvbigpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsYWJlbC5zaWRlYmFyLXByb2plY3QnKS5mb3JFYWNoKGxhYmVsID0+IGxhYmVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd2YXIoLS1tYWluLWJnLWNvbG9yKScpO1xuICAgIGNvbnN0IHByb2plY3RJbnB1dCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2lucHV0LnNpZGViYXItcHJvamVjdCcpO1xuICAgIGlmICghcHJvamVjdElucHV0KSByZXR1cm47XG4gICAgY29uc3QgcHJvamVjdExhYmVsID0gcHJvamVjdElucHV0Lm5leHRFbGVtZW50U2libGluZztcbiAgICBjb25zdCBzdmcgPSBwcm9qZWN0TGFiZWwucXVlcnlTZWxlY3Rvcignc3ZnJyk7XG4gICAgY29uc3QgZGlzcGxheVNlbGVjdGVkUHJvamVjdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtdGl0bGUtY29udGFpbmVyJyk7XG4gICAgICBsZXQgdGV4dElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQubGlzdC10aXRsZScpO1xuICAgICAgbGV0IGNvbG9ySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1kb3QnKTtcbiAgICAgIHRleHRJbnB1dC52YWx1ZSA9IHByb2plY3RJbnB1dC52YWx1ZVswXS50b1VwcGVyQ2FzZSgpICsgcHJvamVjdElucHV0LnZhbHVlLnNsaWNlKDEpO1xuICAgICAgaWYgKHN2Zy5jbGFzc0xpc3QuY29udGFpbnMoJ2ZlYXRoZXItY2lyY2xlJykpIHtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbG9ySW5wdXQpO1xuICAgICAgICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPSR7cHJvamVjdC5fY29sb3J9IHN0cm9rZT1cIm5vbmVcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1jaXJjbGUgbGlzdC1kb3RcIj48Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjVcIi8+PC9zdmc+JykgXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LWRvdCcpLnNldEF0dHJpYnV0ZSgnZmlsbCcsIHN2Zy5nZXRBdHRyaWJ1dGUoJ2ZpbGwnKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29sb3JJbnB1dCk7XG4gICAgICAgIHN2Zy5jbGFzc0xpc3QuY29udGFpbnMoJ2ZlYXRoZXItaW5ib3gnKSAmJiBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImRvZGdlcmJsdWVcIiBzdHJva2Utd2lkdGg9XCIxXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItaW5ib3ggbGlzdC1kb3RcIj48cG9seWxpbmUgcG9pbnRzPVwiMjIgMTIgMTYgMTIgMTQgMTUgMTAgMTUgOCAxMiAyIDEyXCIvPjxwYXRoIGQ9XCJNNS40NSA1LjExTDIgMTJ2NmEyIDIgMCAwIDAgMiAyaDE2YTIgMiAwIDAgMCAyLTJ2LTZsLTMuNDUtNi44OUEyIDIgMCAwIDAgMTYuNzYgNEg3LjI0YTIgMiAwIDAgMC0xLjc5IDEuMTF6XCIvPjwvc3ZnPicpO1xuICAgICAgICAvLyBzdmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdmZWF0aGVyLWNsb2NrJykgJiZcbiAgICAgICAgLy8gc3ZnLmNsYXNzTGlzdC5jb250YWlucygnZmVhdGhlci1jYWxlbmRhcicpICYmXG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChwcm9qZWN0SW5wdXQuY2hlY2tlZCkge1xuICAgICAgcHJvamVjdExhYmVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd2YXIoLS1tYWluLWh2LWNvbG9yKSc7XG4gICAgICBkaXNwbGF5U2VsZWN0ZWRQcm9qZWN0KCk7XG4gICAgICBnZW5lcmF0ZVRhc2tzLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgfTtcblxuICBjb25zdCB0YXNrQnRucyA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG1vdmVUYXNrID0gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBidG4gPSBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24ubW92ZScpO1xuICAgICAgaWYgKCFidG4pIHJldHVybjtcbiAgICAgIGNvbnN0IHRhc2tFbCA9IGJ0bi5jbG9zZXN0KCcudGFzaycpO1xuICAgICAgY29uc3QgW3Byb2plY3RJbmRleCwgdGFza0luZGV4XSA9IGZpbmRUYXNrLmNhbGwodGhpcywgdGFza0VsKTtcbiAgICAgIGNvbnN0IFtjbGlja2VkVGFza10gPSB0aGlzLnByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gICAgICBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdtb3ZlLXVwJykgPyB0aGlzLnByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3Muc3BsaWNlKHRhc2tJbmRleCAtMSwgMCwgY2xpY2tlZFRhc2spIDogdGhpcy5wcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzLnNwbGljZSh0YXNrSW5kZXggKyAxLCAwLCBjbGlja2VkVGFzayk7XG4gICAgICBnZW5lcmF0ZVRhc2tzLmNhbGwodGhpcyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGJ0biA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbi5kZWwtdGFzaycpO1xuICAgICAgaWYgKCFidG4pIHJldHVybjtcbiAgICAgIGNvbnN0IHRhc2tFbCA9IGJ0bi5jbG9zZXN0KCcudGFzaycpO1xuICAgICAgY29uc3QgW3Byb2plY3RJbmRleCwgdGFza0luZGV4XSA9IGZpbmRUYXNrLmNhbGwodGhpcywgdGFza0VsKTtcbiAgICAgIHRoaXMucHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrcy5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgICAgIGdlbmVyYXRlVGFza3MuY2FsbCh0aGlzKTtcbiAgICAgIGdlbmVyYXRlUHJvamVjdHMuY2FsbCh0aGlzKTtcbiAgICB9O1xuXG4gICAgbW92ZVRhc2suY2FsbCh0aGlzKTtcbiAgICBkZWxldGVUYXNrLmNhbGwodGhpcyk7XG4gIH1cblxuICBcbiAgZGlzcGxheU1vZGlmeVRhc2suY2FsbCh0aGlzKTtcbiAgZGlzcGxheU5ld1Rhc2suY2FsbCh0aGlzKTtcbiAgc2VsZWN0T3B0aW9uLmNhbGwodGhpcyk7XG4gIHNlbGVjdFByaW9yaXR5LmNhbGwodGhpcyk7XG4gIHNlbGVjdFByb2plY3QuY2FsbCh0aGlzKTtcbiAgdGFza0J0bnMuY2FsbCh0aGlzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheTsiLCJmdW5jdGlvbiBnZW5lcmF0ZVByaW9yaXR5TGlzdChlbGVtZW50KSB7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZWxlbWVudDtcbiAgaWYgKHByb2plY3RMaXN0LmNvbnRhaW5zKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpLnByaW9yaXR5LWl0ZW0nKSkpIHJldHVybjtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCA1OyBpKyspIHtcbiAgICBsZXQgaHRtbCA9IGBcbiAgICAgIDxsaSBjbGFzcz1cInByaW9yaXR5LWlucHV0IG9wdGlvbiBwcmlvcml0eS1pdGVtXCIgZGF0YS1pZD1cIlwiPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJwcmlvcml0eS1vcHRpb25cIiB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHktb3B0aW9uXCIgZGF0YS1pZCA9IFwiXCIgaWQ9XCJwcmlvcml0eS0ke2l9XCIgdmFsdWU9XCIke2l9XCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eS0ke2l9XCI+XG4gICAgICAgICAgPHN2ZyBjbGFzcz1cInByaW9yaXR5LW9wdGlvbiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJyZWRcIiBzdHJva2U9XCJyZWRcIiBzdHJva2Utd2lkdGg9XCIxXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItZmxhZ1wiPlxuICAgICAgICAgICAgPHBhdGggZD1cIk00IDE1czEtMSA0LTEgNSAyIDggMiA0LTEgNC0xVjNzLTEgMS00IDEtNS0yLTgtMi00IDEtNCAxelwiLz48bGluZSB4MT1cIjRcIiB5MT1cIjIyXCIgeDI9XCI0XCIgeTI9XCIxNVwiLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaW9yaXR5LWlucHV0IG9wdGlvblwiPlByaW9yaXR5ICR7aX08L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2xpPlxuICAgICAgYDtcbiAgICBpZiAoaSA9PT0gMikgaHRtbCA9IGh0bWwucmVwbGFjZUFsbChcInJlZFwiLCBcIm9yYW5nZVwiKTtcbiAgICBpZiAoaSA9PT0gMykgaHRtbCA9IGh0bWwucmVwbGFjZUFsbChcInJlZFwiLCBcImJsdWVcIik7XG4gICAgaWYgKGkgPT09IDQpIHtcbiAgICAgIGh0bWwgPSBodG1sXG4gICAgICAgIC5yZXBsYWNlKCdmaWxsPVwicmVkXCInLCAnZmlsbD1cIm5vbmVcIicpXG4gICAgICAgIC5yZXBsYWNlKCdzdHJva2U9XCJyZWRcIicsICdzdHJva2U9XCJibGFja1wiJyk7XG4gICAgfTtcblxuICAgIHByb2plY3RMaXN0Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgaHRtbCk7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZVByaW9yaXR5TGlzdDsiLCJmdW5jdGlvbiBnZW5lcmF0ZVByb2plY3RzTGlzdChlbGVtZW50KSB7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZWxlbWVudDtcbiAgaWYgKHByb2plY3RMaXN0LmNvbnRhaW5zKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpLnBlcnNvbmFsJykpKSByZXR1cm47XG4gIHRoaXMucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhwcm9qZWN0KVxuICAgICAgY29uc3QgcHJvamVjdEh0bWwgPSBgXG4gICAgICA8bGkgY2xhc3M9XCJwcm9qZWN0LWlucHV0IG9wdGlvbiBwZXJzb25hbFwiIGRhdGEtaWQ9JHtwcm9qZWN0LmlkfT5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwicHJvamVjdC1vcHRpb25cInR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwcm9qZWN0LW9wdGlvblwiIGRhdGEtaWQgPSBcIiR7cHJvamVjdC5pZH1cIiBpZD1cInByb2plY3QtJHtpbmRleH1cIiB2YWx1ZT0ke3Byb2plY3QuX3Byb2plY3ROYW1lfT5cbiAgICAgICAgPGxhYmVsIGZvcj1cInByb2plY3QtJHtpbmRleH1cIj5cbiAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD0ke3Byb2plY3QuX2NvbG9yfSBzdHJva2U9XCJub25lXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItY2lyY2xlXCI+XG4gICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjVcIi8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9qZWN0LWlucHV0IG9wdGlvblwiPiR7cHJvamVjdC5fcHJvamVjdE5hbWVbMF0udG9VcHBlckNhc2UoKX0ke3Byb2plY3QuX3Byb2plY3ROYW1lLnNsaWNlKDEpLnRvTG93ZXJDYXNlKCl9PC9zcGFuPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9saT5cbiAgICAgIGA7XG4gICAgICBwcm9qZWN0TGlzdC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHByb2plY3RIdG1sKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVQcm9qZWN0c0xpc3Q7XG4iLCJjb25zdCBnZW5lcmF0ZVRhc2tzID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IFtzZWxlY3RlZFByb2plY3RdID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LnNpZGViYXItcHJvamVjdCcpXS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQuY2hlY2tlZCk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJykuZm9yRWFjaCh0YXNrID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcy1jb250YWluZXInKS5yZW1vdmVDaGlsZCh0YXNrKSk7XG4gIGNvbnN0IFtwcm9qZWN0XSA9IHRoaXMucHJvamVjdHMuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC5pZCA9PT0gc2VsZWN0ZWRQcm9qZWN0LmRhdGFzZXQuaWQpO1xuICBjb25zb2xlLmxvZyh0aGlzLnByb2plY3RzKTtcbiAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGh0bWwgPSBgXG4gICAgPGRpdiBjbGFzcz1cInRhc2tcIiBpZD1cInRhc2stJHtpbmRleH1cIiBkYXRhLWlkPSR7dGFzay5pZH0+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJ0YXNrLWNoZWNrXCIgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJjaGVjay0ke2luZGV4fVwiPlxuICAgICAgPGxhYmVsIGNsYXNzPVwidGFzay1sYWJlbFwiIGZvcj1cImNoZWNrLSR7aW5kZXh9XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY3VzdG9tLWNoZWNrYm94XCI+XG4gICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEyXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiZG9kZ2VyYmx1ZVwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1jaGVja1wiPjxwb2x5bGluZSBwb2ludHM9XCIyMCA2IDkgMTcgNCAxMlwiLz48L3N2Zz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInRhc2stdGV4dFwiPiR7dGFzay5fdGFza05hbWV9PC9zcGFuPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tc3ZnIGxpc3QtYWN0aW9ucyBtb3ZlIG1vdmUtdXBcIj5cbiAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMS4zXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItYXJyb3ctdXBcIj48bGluZSB4MT1cIjEyXCIgeTE9XCIxOVwiIHgyPVwiMTJcIiB5Mj1cIjVcIi8+PHBvbHlsaW5lIHBvaW50cz1cIjUgMTIgMTIgNSAxOSAxMlwiLz48L3N2Zz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1zdmcgbGlzdC1hY3Rpb25zIG1vdmUgbW92ZS1kb3duXCI+XG4gICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjEuM1wiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWFycm93LWRvd25cIj48bGluZSB4MT1cIjEyXCIgeTE9XCI1XCIgeDI9XCIxMlwiIHkyPVwiMTlcIi8+PHBvbHlsaW5lIHBvaW50cz1cIjE5IDEyIDEyIDE5IDUgMTJcIi8+PC9zdmc+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tc3ZnIGxpc3QtYWN0aW9ucyBlZGl0LXRhc2tcIj5cbiAgICAgICAgPHN2ZyBjbGFzcz1cInRvZG8taGVhZGVyLWVkaXQgcGVuXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjEuM1wiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWVkaXQtM1wiPjxwYXRoIGQ9XCJNMTIgMjBoOVwiLz48cGF0aCBkPVwiTTE2LjUgMy41YTIuMTIxIDIuMTIxIDAgMCAxIDMgM0w3IDE5bC00IDEgMS00TDE2LjUgMy41elwiLz48L3N2Zz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1zdmcgbGlzdC1hY3Rpb25zIGRlbC10YXNrXCI+XG4gICAgICAgIDxzdmcgY2xhc3M9XCJ0b2RvLWhlYWRlci1kZWwgdHJhc2hcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMS4zXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItdHJhc2gtMlwiPjxwb2x5bGluZSBwb2ludHM9XCIzIDYgNSA2IDIxIDZcIi8+PHBhdGggZD1cIk0xOSA2djE0YTIgMiAwIDAgMS0yIDJIN2EyIDIgMCAwIDEtMi0yVjZtMyAwVjRhMiAyIDAgMCAxIDItMmg0YTIgMiAwIDAgMSAyIDJ2MlwiLz48bGluZSB4MT1cIjEwXCIgeTE9XCIxMVwiIHgyPVwiMTBcIiB5Mj1cIjE3XCIvPjxsaW5lIHgxPVwiMTRcIiB5MT1cIjExXCIgeDI9XCIxNFwiIHkyPVwiMTdcIi8+PC9zdmc+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxwIGNsYXNzPVwidGFzay1kZXNjclwiIGlkPVwidGFzay0wXCI+JHt0YXNrLl9kZXNjcn08L3A+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItY29udGFpbmVyXCI+XG4gICAgICAgIDxzdmcgY2xhc3M9XCJ0YXNrLWNhbGVuZGFyXCIgc3R5bGU9XCJ3aWR0aDoxNXB4O2hlaWdodDoxNXB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTE5IDNDMjAuMTEgMyAyMSAzLjg5IDIxIDVWMTlDMjEgMjAuMTEgMjAuMTEgMjEgMTkgMjFINUMzLjg5IDIxIDMgMjAuMSAzIDE5VjVDMyAzLjg5IDMuOSAzIDUgM0g2VjFIOFYzSDE2VjFIMThWM0gxOU0xOSAxOVY5SDVWMTlIMTlNMTkgN1Y1SDVWN0gxOU03IDExSDlWMTdIN1YxMVwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgICA8cCBjbGFzcz1cInRhc2stY2FsZW5kYXJcIj4xOSBvY3Q8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcy1jb250YWluZXInKS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGh0bWwpO1xuICB9KTtcbiAgXG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZVRhc2tzOyIsImNvbnN0IFByb2plY3QgPSBjbGFzcyB7XG4gIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICB0YXNrcyA9IFtdO1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0TmFtZSwgY29sb3IsIHN2Zykge1xuICAgIHRoaXMuaWQgPSBwcm9qZWN0TmFtZSArICctJyArIChEYXRlLm5vdygpICsgJycpLnNsaWNlKC0xMCk7XG4gICAgdGhpcy5fcHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgICB0aGlzLl9jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMuX3N2ZyA9IHN2ZztcbiAgICB0aGlzLm1lc3NhZ2UoKTtcbiAgfVxuXG4gIG1lc3NhZ2UoKSB7XG4gICAgY29uc29sZS5sb2coJ05ldyBQcm9qZWN0IGNyZWF0ZWQnKVxuICB9XG5cbiAgLy8gc2V0IHN2Z0NvbG9yKG5ld0NvbG9yKSB7XG4gIC8vICAgdGhpcy5fc3ZnLmZpbGwgPSBuZXdDb2xvcjtcbiAgLy8gfVxuXG4gIC8vIGdldCBzdmdDb2xvcigpIHtcbiAgLy8gICByZXR1cm4gdGhpcy5fc3ZnLmZpbGw7XG4gIC8vIH1cblxuICAvLyBzZXQgc3ZnU2l6ZShuZXdTaXplKSB7XG4gIC8vICAgdGhpcy5fc3ZnLndpZHRoID0gdGhpcy5fc3ZnLmhlaWdodCA9IG5ld1NpemU7XG4gIC8vIH1cblxuICAvLyBnZXQgc3ZnU2l6ZSgpIHtcbiAgLy8gICByZXR1cm4gdGhpcy5fc3ZnLndpZHRoO1xuICAvLyB9XG5cbiAgc2V0IHByb2plY3ROYW1lKG5ld05hbWUpIHtcbiAgICB0aGlzLl9wcm9qZWN0TmFtZSA9IG5ld05hbWU7XG4gIH1cblxuICBnZXQgcHJvamVjdE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2plY3ROYW1lO1xuICB9XG5cbiAgZ2V0IGNhcGl0YWxpemVkUHJvamVjdE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2plY3ROYW1lWzBdLnRvVXBwZXJDYXNlKCkgKyB0aGlzLl9wcm9qZWN0TmFtZS5zbGljZSgxKTtcbiAgfVxuXG59O1xuXG5jb25zdCBQZXJzb25hbFByb2plY3QgPSBjbGFzcyBleHRlbmRzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0TmFtZSwgY29sb3IpIHtcbiAgICBzdXBlcihwcm9qZWN0TmFtZSwgY29sb3IpO1xuICAgIHRoaXMuX3N2ZyA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD0ke2NvbG9yfSBzdHJva2U9XCJub25lXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItY2lyY2xlIGxpc3QtZG90XCI+XG4gICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjVcIi8+XG4gICAgPC9zdmc+YDtcbiAgfVxufVxuXG5leHBvcnQgeyBQcm9qZWN0IGFzIGRlZmF1bHQsIFBlcnNvbmFsUHJvamVjdCB9OyIsImNvbnN0IGluaXRJbmJveCA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I3NpZGViYXItaW5ib3gnKTtcbiAgY29uc3QgY291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gtY291bnQnKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgdGhpcy5wcm9qZWN0c1swXS5pZCk7XG4gIGNvdW50LnRleHRDb250ZW50ID0gdGhpcy5wcm9qZWN0c1swXS50YXNrcy5sZW5ndGg7XG5cbn07XG5cbmNvbnN0IGdlbmVyYXRlUHJvamVjdHMgPSBmdW5jdGlvbigpIHtcbiAgaW5pdEluYm94LmNhbGwodGhpcyk7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVyc29uYWwtcHJvamVjdHMtbGlzdCcpO1xuICBjb25zdCBbYWN0aXZlUHJvamVjdF0gPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQuc2lkZWJhci1wcm9qZWN0JyldLmZpbHRlcihpbnB1dCA9PiBpbnB1dC5jaGVja2VkKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGkuc2lkZWJhci1wZXJzb25hbCcpLmZvckVhY2goZWwgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBlcnNvbmFsLXByb2plY3RzLWxpc3QnKS5yZW1vdmVDaGlsZChlbCkpO1xuICB0aGlzLnByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgY29uc3QgcHJvamVjdEh0bWwgPSBgXG4gICAgICA8bGkgY2xhc3M9XCJzaWRlYmFyLXByb2plY3Qgc2lkZWJhci1wZXJzb25hbFwiIGRhdGEtaWQ9JHtwcm9qZWN0LmlkfT5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwic2lkZWJhci1wcm9qZWN0XCIgZGF0YS1pZD0ke3Byb2plY3QuaWR9IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwcm9qZWN0LW9wdGlvblwiIGlkPVwic2lkZWJhci1wcm9qZWN0LSR7aW5kZXh9XCIgdmFsdWU9JHtwcm9qZWN0Ll9wcm9qZWN0TmFtZX0+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cInNpZGViYXItcHJvamVjdCBwcm9qZWN0XCIgZm9yPVwic2lkZWJhci1wcm9qZWN0LSR7aW5kZXh9XCI+XG4gICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9JHtwcm9qZWN0Ll9jb2xvcn0gc3Ryb2tlPVwibm9uZVwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWNpcmNsZVwiPlxuICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCI1XCIvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2lkZWJhci1wcm9qZWN0IHRpdGxlXCI+JHtwcm9qZWN0Ll9wcm9qZWN0TmFtZVswXS50b1VwcGVyQ2FzZSgpfSR7cHJvamVjdC5fcHJvamVjdE5hbWUuc2xpY2UoMSkudG9Mb3dlckNhc2UoKX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJzaWRlYmFyLXByb2plY3QgY291bnRcIj4ke3Byb2plY3QudGFza3MubGVuZ3RofTwvc3Bhbj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvbGk+XG4gICAgICBgO1xuICAgICAgZWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHByb2plY3RIdG1sKTtcbiAgICB9XG4gIH0pO1xuICBjb25zdCBbbmV3QWN0aXZlUHJvamVjdF0gPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQuc2lkZWJhci1wcm9qZWN0JyldLmZpbHRlcihpbnB1dCA9PiBpbnB1dC5pZCA9PT0gYWN0aXZlUHJvamVjdD8uaWQpO1xuICBhY3RpdmVQcm9qZWN0ID8gbmV3QWN0aXZlUHJvamVjdC5jaGVja2VkID0gdHJ1ZSA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0LnNpZGViYXItcHJvamVjdCcpLmNoZWNrZWQgPSB0cnVlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVQcm9qZWN0cztcblxuIiwiY29uc3QgVGFzayA9IGNsYXNzIHtcbiAgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0cnVjdG9yKHRhc2tOYW1lLCBkZXNjciwgZGVhZGxpbmUsIHByb2plY3QsIHByaW9yaXR5KSB7XG4gICAgdGhpcy5pZCA9IHRhc2tOYW1lLnNsaWNlKC01KSArIChEYXRlLm5vdygpICsgJycpLnNsaWNlKC0xMCk7XG4gICAgdGhpcy5fdGFza05hbWUgPSB0YXNrTmFtZTtcbiAgICB0aGlzLl9kZXNjciA9IGRlc2NyO1xuICAgIHRoaXMuX2RlYWRsaW5lID0gZGVhZGxpbmU7XG4gICAgdGhpcy5fcHJvamVjdCA9IHByb2plY3Q7XG4gICAgdGhpcy5fcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLm1lc3NhZ2UoKVxuICB9XG4gIFxuICBtZXNzYWdlKCkge1xuICAgIGNvbnNvbGUubG9nKCdOZXcgVGFzayBjcmVhdGVkJylcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFzazsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBhcHAgZnJvbSAnLi9hcHAnO1xyXG5cclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWNvbnRhaW5lcicpO1xyXG5jb25zdCBhcHBsaWNhdGlvbiA9IGFwcDtcclxuXHJcbi8vIGNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcclxuXHJcbi8vIGNvbnN0IFByb2plY3QgPSBjbGFzcyB7XHJcbi8vICAgdGFza3MgPSBbXTtcclxuLy8gICBjb25zdHJ1Y3Rvcihwcm9qZWN0TmFtZSwgY29sb3IpIHtcclxuLy8gICAgIHRoaXMuX3Byb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XHJcbi8vICAgICB0aGlzLl9jb2xvciA9IGNvbG9yO1xyXG4vLyAgICAgdGhpcy5tZXNzYWdlKCk7XHJcbi8vICAgfVxyXG5cclxuLy8gICBtZXNzYWdlKCkge1xyXG4vLyAgICAgY29uc29sZS5sb2coJ05ldyBQcm9qZWN0IGNyZWF0ZWQnKVxyXG4vLyAgIH1cclxuLy8gfTtcclxuXHJcbi8vIGNvbnN0IFRhc2sgPSBjbGFzcyB7XHJcbi8vICAgY29uc3RydWN0b3IodGFza05hbWUsIGRlc2NyLCBkZWFkbGluZSwgcHJvamVjdCwgcHJpb3JpdHkpIHtcclxuLy8gICAgIHRoaXMuX3Rhc2tOYW1lID0gdGFza05hbWU7XHJcbi8vICAgICB0aGlzLl9kZXNjciA9IGRlc2NyO1xyXG4vLyAgICAgdGhpcy5fZGVhZGxpbmUgPSBkZWFkbGluZTtcclxuLy8gICAgIHRoaXMuX3Byb2plY3QgPSBwcm9qZWN0O1xyXG4vLyAgICAgdGhpcy5fcHJpb3JpdHkgPSBwcmlvcml0eTtcclxuLy8gICAgIHRoaXMubWVzc2FnZSgpXHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgIG1lc3NhZ2UoKSB7XHJcbi8vICAgICBjb25zb2xlLmxvZygnTmV3IFRhc2sgY3JlYXRlZCcpXHJcbi8vICAgfVxyXG4vLyB9O1xyXG5cclxuLy8gY29uc3QgQXBwID0gY2xhc3Mge1xyXG4vLyAgICNwcm9qZWN0cyA9IFtdO1xyXG4vLyAgIGNvbnN0cnVjdG9yKCkge1xyXG4vLyAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRpc3BsYXlGb3JtLmJpbmQodGhpcykpO1xyXG4vLyAgICAgdGhpcy5pbml0KClcclxuLy8gICB9XHJcblxyXG4vLyAgIGluaXQoKSB7XHJcbi8vICAgICBjb25zdCBpbmJveCA9IG5ldyBQcm9qZWN0KCdpbmJveCcpO1xyXG4vLyAgICAgdGhpcy4jcHJvamVjdHMucHVzaChpbmJveCk7XHJcbi8vICAgICBjb25zdCBjb3Vyc2VzID0gbmV3IFByb2plY3QoJ2NvdXJzZXMnLCAnY29ybmZsb3dlcmJsdWUnKTtcclxuLy8gICAgIHRoaXMuI3Byb2plY3RzLnB1c2goY291cnNlcyk7XHJcbi8vICAgICBjb25zdCBlbmZhbnRzID0gbmV3IFByb2plY3QoJ2VuZmFudHMnLCAnY3JpbXNvbicpO1xyXG4vLyAgICAgdGhpcy4jcHJvamVjdHMucHVzaChlbmZhbnRzKTtcclxuLy8gICAgIGNvbnN0IHRyYXZhdXggPSBuZXcgUHJvamVjdCgndHJhdmF1eCcsICdkYXJrb3JhbmdlJyk7XHJcbi8vICAgICB0aGlzLiNwcm9qZWN0cy5wdXNoKHRyYXZhdXgpO1xyXG4vLyAgICAgY29uc29sZS5sb2codGhpcy4jcHJvamVjdHMpXHJcbi8vICAgfVxyXG5cclxuLy8gICBkaXNwbGF5Rm9ybShlKSB7XHJcbi8vICAgICBjb25zdCBiYWNrRHJvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrZHJvcCcpO1xyXG4vLyAgICAgY29uc3QgaHRtbE5ld0Zvcm1Nb2RhbCA9IGBcclxuLy8gICAgIDxmb3JtIGNsYXNzPVwidGFzay1mb3JtIG1vZGFsIG5ldy10YXNrXCIgaWQ9XCJ0YXNrLTBcIj5cclxuLy8gICAgICAgPGRpdiBjbGFzcz1cImZvcm0tbWFpblwiPlxyXG4vLyAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXRleHRcIj5cclxuLy8gICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tdGV4dFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRhc2stdGV4dFwiIGlkPVwidGFzay0xXCIgYXV0b2ZvY3VzIHBsYWNlaG9sZGVyPVwiVMOiY2hlXCI+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZGVzY3JcIj5cclxuLy8gICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tZGVzY3JcIiBuYW1lPVwiZGVzY3ItMVwiIGlkPVwiZGVzY3ItMVwiIGNvbHM9XCIzMFwiIHJvd3M9XCI0XCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiPjwvdGV4dGFyZWE+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tcGFyYW1zXCI+XHJcbi8vICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImZvcm0tZGF0ZVwiPlxyXG4vLyAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwiZm9ybS1kYXRlXCIgc3R5bGU9XCJ3aWR0aDoxNXB4O2hlaWdodDoxNXB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4vLyAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTE5IDNDMjAuMTEgMyAyMSAzLjg5IDIxIDVWMTlDMjEgMjAuMTEgMjAuMTEgMjEgMTkgMjFINUMzLjg5IDIxIDMgMjAuMSAzIDE5VjVDMyAzLjg5IDMuOSAzIDUgM0g2VjFIOFYzSDE2VjFIMThWM0gxOU0xOSAxOVY5SDVWMTlIMTlNMTkgN1Y1SDVWN0gxOU03IDExSDlWMTdIN1YxMVwiIC8+XHJcbi8vICAgICAgICAgICAgIDwvc3ZnPlxyXG4vLyAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvcm0tZGF0ZVwiPsOJY2jDqWFuY2U8L3NwYW4+XHJcbi8vICAgICAgICAgICA8L2J1dHRvbj5cclxuLy8gICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXByb2plY3QtY29udGFpbmVyXCI+XHJcbi8vICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZm9ybS1wcm9qZWN0XCI+XHJcbi8vICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwibGlzdC1kb3RcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJjb3JuZmxvd2VyYmx1ZVwiIHN0cm9rZT1cIm5vbmVcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1jaXJjbGVcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCI1XCIvPlxyXG4vLyAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbi8vICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvcm0tcHJvamVjdFwiPkNvdXJzZXM8L3NwYW4+XHJcbi8vICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1pbnB1dCBoaWRkZW5cIj5cclxuLy8gICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJwcm9qZWN0LWlucHV0IGxpc3RcIj5cclxuLy8gICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInByb2plY3QtaW5wdXQgb3B0aW9uIHNlbGVjdGVkXCIgZGF0YS1uYW1lPSBcInNlbGVjdGVkXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJsaXN0LWRvdFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cImNvcm5mbG93ZXJibHVlXCIgc3Ryb2tlPVwibm9uZVwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWNpcmNsZVwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiNVwiLz5cclxuLy8gICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbi8vICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZm9ybS1wcm9qZWN0XCI+Q291cnNlczwvc3Bhbj5cclxuLy8gICAgICAgICAgICAgICAgIDwvbGk+XHJcbi8vICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwcm9qZWN0LWlucHV0IG9wdGlvbiBpbmJveFwiIGRhdGEtbmFtZT0gXCJpbmJveFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJkb2RnZXJibHVlXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWluYm94XCI+PHBvbHlsaW5lIHBvaW50cz1cIjIyIDEyIDE2IDEyIDE0IDE1IDEwIDE1IDggMTIgMiAxMlwiLz5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTUuNDUgNS4xMUwyIDEydjZhMiAyIDAgMCAwIDIgMmgxNmEyIDIgMCAwIDAgMi0ydi02bC0zLjQ1LTYuODlBMiAyIDAgMCAwIDE2Ljc2IDRINy4yNGEyIDIgMCAwIDAtMS43OSAxLjExelwiLz5cclxuLy8gICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbi8vICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5ib3gtdGl0bGVcIj5JbmJveDwvc3Bhbj5cclxuLy8gICAgICAgICAgICAgICAgIDwvbGk+XHJcbi8vICAgICAgICAgICAgICAgPC91bD5cclxuLy8gICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZm9ybS1wcmlvcml0eVwiPlxyXG4vLyAgICAgICAgICAgPHN2ZyBjbGFzcz1cImZvcm0tcHJpb3JpdHkgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwicmVkXCIgc3Ryb2tlPVwicmVkXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWZsYWdcIj5cclxuLy8gICAgICAgICAgIDxwYXRoIGQ9XCJNNCAxNXMxLTEgNC0xIDUgMiA4IDIgNC0xIDQtMVYzcy0xIDEtNCAxLTUtMi04LTItNCAxLTQgMXpcIi8+PGxpbmUgeDE9XCI0XCIgeTE9XCIyMlwiIHgyPVwiNFwiIHkyPVwiMTVcIi8+XHJcbi8vICAgICAgICAgICA8L3N2Zz5cclxuLy8gICAgICAgICAgIDwvYnV0dG9uPlxyXG4vLyAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgPGRpdiBjbGFzcz1cImZvcm0tc2F2ZVwiPlxyXG4vLyAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+QW5ubnVsZXI8L2J1dHRvbj5cclxuLy8gICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzYXZlLW5ldy10YXNrIHNhdmVcIj5FbnJlZ2lzdHJlcjwvYnV0dG9uPlxyXG4vLyAgICAgICA8L2Rpdj5cclxuLy8gICAgIDwvZm9ybT5gO1xyXG4vLyAgICAgY29uc3QgaHRtbEZvcm1Nb2RpZnkgPSBgPGZvcm0gY2xhc3M9XCJ0YXNrLWZvcm1cIiBpZD1cInRhc2stMFwiPlxyXG4vLyAgICAgPGRpdiBjbGFzcz1cImZvcm0tbWFpblwiPlxyXG4vLyAgICAgPGRpdiBjbGFzcz1cImZvcm0tdGV4dFwiPlxyXG4vLyAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS10ZXh0XCIgdHlwZT1cInRleHRcIiBuYW1lPVwidGFzay10ZXh0XCIgaWQ9XCJ0YXNrLTFcIiB2YWx1ZT1cIlBvbW1lc1wiIGF1dG9mb2N1cyBwbGFjZWhvbGRlcj0gXCJUw6JjaGVcIj5cclxuLy8gICAgIDwvZGl2PlxyXG4vLyAgICAgPGRpdiBjbGFzcz1cImZvcm0tZGVzY3JcIj5cclxuLy8gICAgIDx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tZGVzY3JcIiBuYW1lPVwiZGVzY3ItMVwiIGlkPVwiZGVzY3ItMVwiIGNvbHM9XCIzMFwiIHJvd3M9XCI0XCIgcGxhY2Vob2xkZXI9IFwiRGVzY3JpcHRpb25cIj7DoCBsJ8OpcGljZXJpZSBwYXlzYW5uZTwvdGV4dGFyZWE+XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gICAgIDxkaXYgY2xhc3M9XCJmb3JtLXBhcmFtc1wiPlxyXG4vLyAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJmb3JtLWRhdGVcIj5cclxuLy8gICAgIDxzdmcgY2xhc3M9XCJmb3JtLWRhdGVcIiBzdHlsZT1cIndpZHRoOjE1cHg7aGVpZ2h0OjE1cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbi8vICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xOSAzQzIwLjExIDMgMjEgMy44OSAyMSA1VjE5QzIxIDIwLjExIDIwLjExIDIxIDE5IDIxSDVDMy44OSAyMSAzIDIwLjEgMyAxOVY1QzMgMy44OSAzLjkgMyA1IDNINlYxSDhWM0gxNlYxSDE4VjNIMTlNMTkgMTlWOUg1VjE5SDE5TTE5IDdWNUg1VjdIMTlNNyAxMUg5VjE3SDdWMTFcIiAvPlxyXG4vLyAgICAgPC9zdmc+XHJcbi8vICAgICA8c3BhbiBjbGFzcz1cImZvcm0tZGF0ZVwiPjE5IG9jdDwvc3Bhbj5cclxuLy8gICAgIDwvYnV0dG9uPlxyXG4vLyAgICAgPGRpdiBjbGFzcz1cImZvcm0tcHJvamVjdC1jb250YWluZXJcIj5cclxuLy8gICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZm9ybS1wcm9qZWN0XCI+XHJcbi8vICAgICA8c3ZnIGNsYXNzPVwibGlzdC1kb3RcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJjb3JuZmxvd2VyYmx1ZVwiIHN0cm9rZT1cIm5vbmVcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1jaXJjbGVcIj5cclxuLy8gICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiNVwiLz5cclxuLy8gICAgIDwvc3ZnPlxyXG4vLyAgICAgPHNwYW4gY2xhc3M9XCJmb3JtLXByb2plY3RcIj5Db3Vyc2VzPC9zcGFuPlxyXG4vLyAgICAgPC9idXR0b24+XHJcbi8vICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1pbnB1dFwiPlxyXG4vLyAgICAgPHVsIGNsYXNzPVwicHJvamVjdC1pbnB1dCBsaXN0XCI+XHJcbi8vICAgICA8bGkgY2xhc3M9XCJwcm9qZWN0LWlucHV0IG9wdGlvbiBpbmJveFwiPlxyXG4vLyAgICAgPHN2ZyBjbGFzcz1cImxpc3QtZG90XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwiY29ybmZsb3dlcmJsdWVcIiBzdHJva2U9XCJub25lXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItY2lyY2xlXCI+XHJcbi8vICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjVcIi8+XHJcbi8vICAgICA8L3N2Zz5cclxuLy8gICAgIDxzcGFuIGNsYXNzPVwiZm9ybS1wcm9qZWN0XCI+Q291cnNlczwvc3Bhbj5cclxuLy8gICAgIDwvbGk+XHJcbi8vICAgICA8bGkgY2xhc3M9XCJwcm9qZWN0LWlucHV0IG9wdGlvbiBpbmJveFwiPlxyXG4vLyAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiZG9kZ2VyYmx1ZVwiIHN0cm9rZS13aWR0aD1cIjFcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1pbmJveFwiPjxwb2x5bGluZSBwb2ludHM9XCIyMiAxMiAxNiAxMiAxNCAxNSAxMCAxNSA4IDEyIDIgMTJcIi8+XHJcbi8vICAgICA8cGF0aCBkPVwiTTUuNDUgNS4xMUwyIDEydjZhMiAyIDAgMCAwIDIgMmgxNmEyIDIgMCAwIDAgMi0ydi02bC0zLjQ1LTYuODlBMiAyIDAgMCAwIDE2Ljc2IDRINy4yNGEyIDIgMCAwIDAtMS43OSAxLjExelwiLz5cclxuLy8gICAgIDwvc3ZnPlxyXG4vLyAgICAgPHNwYW4gY2xhc3M9XCJpbmJveC10aXRsZVwiPkluYm94PC9zcGFuPlxyXG4vLyA8L2xpPlxyXG4vLyA8bGkgY2xhc3M9XCJwcm9qZWN0LWlucHV0IG9wdGlvblwiIGlkPVwibGlzdC10aXRsZS0xXCI+XHJcbi8vIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwiY29ybmZsb3dlcmJsdWVcIiBzdHJva2U9XCJub25lXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItY2lyY2xlXCI+PGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCI1XCIvPjwvc3ZnPlxyXG4vLyA8c3BhbiBjbGFzcz1cInByb2plY3QtaW5wdXQgb3B0aW9uXCI+Q291cnNlczwvc3Bhbj5cclxuLy8gPC9saT5cclxuLy8gPGxpIGNsYXNzPVwicHJvamVjdC1pbnB1dCBvcHRpb25cIiBpZD1cImxpc3QtdGl0bGUtMlwiPlxyXG4vLyA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cImNyaW1zb25cIiBzdHJva2U9XCJub25lXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItY2lyY2xlXCI+PGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCI1XCIvPjwvc3ZnPlxyXG4vLyA8c3BhbiBjbGFzcz1cInByb2plY3QtaW5wdXQgb3B0aW9uXCI+RW5mYW50czwvc3Bhbj5cclxuLy8gPC9saT5cclxuLy8gPGxpIGNsYXNzPVwicHJvamVjdC1pbnB1dCBvcHRpb25cIiBpZD1cImxpc3QtdGl0bGUtM1wiPlxyXG4vLyA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cImRhcmtvcmFuZ2VcIiBzdHJva2U9XCJub25lXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItY2lyY2xlXCI+PGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCI1XCIvPjwvc3ZnPlxyXG4vLyA8c3BhbiBjbGFzcz1cInByb2plY3QtaW5wdXQgb3B0aW9uXCI+VHJhdmF1eDwvc3Bhbj5cclxuLy8gPC9saT5cclxuLy8gPC91bD5cclxuLy8gPC9kaXY+XHJcbi8vIDwvZGl2PlxyXG4vLyA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImZvcm0tcHJpb3JpdHlcIj5cclxuLy8gPHN2ZyBjbGFzcz1cImZvcm0tcHJpb3JpdHkgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwicmVkXCIgc3Ryb2tlPVwicmVkXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWZsYWdcIj5cclxuLy8gPHBhdGggZD1cIk00IDE1czEtMSA0LTEgNSAyIDggMiA0LTEgNC0xVjNzLTEgMS00IDEtNS0yLTgtMi00IDEtNCAxelwiLz48bGluZSB4MT1cIjRcIiB5MT1cIjIyXCIgeDI9XCI0XCIgeTI9XCIxNVwiLz5cclxuLy8gPC9zdmc+XHJcbi8vIDwvYnV0dG9uPlxyXG4vLyA8L2Rpdj5cclxuLy8gPC9kaXY+XHJcbi8vIDxkaXYgY2xhc3M9XCJmb3JtLXNhdmVcIj5cclxuLy8gPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+QW5ubnVsZXI8L2J1dHRvbj5cclxuLy8gPGJ1dHRvbj5FbnJlZ2lzdHJlcjwvYnV0dG9uPlxyXG4vLyA8L2Rpdj5cclxuLy8gICAgICAgPC9mb3JtPmBcclxuICAgICAgXHJcbi8vICAgICBjb25zdCBkaXNwbGF5Rm9ybU1vZGlmeSA9IGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICBjb25zdCBidG5FZGl0ID0gZS50YXJnZXQuY2xvc2VzdCgnLmVkaXQtdGFzaycpO1xyXG4vLyAgICAgICBpZiAoYnRuRWRpdCkge1xyXG4vLyAgICAgICAgIGNvbnN0IHRhc2sgPSBidG5FZGl0LmNsb3Nlc3QoJy50YXNrJyk7XHJcbi8vICAgICAgICAgdGFzay5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcclxuLy8gICAgICAgICB0YXNrLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBodG1sRm9ybU1vZGlmeSk7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH07XHJcbiAgICBcclxuLy8gICAgIGNvbnN0IGRpc3BsYXlGb3JtRGF0ZSA9IGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICBjb25zdCBidG5EYXRlID0gZS50YXJnZXQuY2xvc2VzdCgnYnV0dG9uLmZvcm0tZGF0ZScpO1xyXG4vLyAgICAgICBpZiAoIWJ0bkRhdGUpIHJldHVybjtcclxuLy8gICAgICAgY29uc29sZS5sb2coYnRuRGF0ZSk7XHJcbi8vICAgICB9O1xyXG4gICAgXHJcbi8vICAgICBjb25zdCBkaXNwbGF5Rm9ybVByb2plY3RzID0gZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgIGNvbnN0IGJ0blByb2plY3RzID0gZS50YXJnZXQuY2xvc2VzdCgnYnV0dG9uLmZvcm0tcHJvamVjdCcpO1xyXG4vLyAgICAgICBpZiAoIWJ0blByb2plY3RzKSByZXR1cm47XHJcbi8vICAgICAgIGNvbnN0IHByb2plY3RJbnB1dCA9IGJ0blByb2plY3RzLm5leHRFbGVtZW50U2libGluZztcclxuLy8gICAgICAgY29uc29sZS5sb2coYnRuUHJvamVjdHMpO1xyXG4vLyAgICAgICBpZiAoIWJ0blByb2plY3RzLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykgJiYgIWJ0blByb2plY3RzLmNsYXNzTGlzdC5jb250YWlucygnZ2VuZXJhdGVkJykpIHtcclxuLy8gICAgICAgICBjb25zdCB1bFByb2plY3RzID0gYnRuUHJvamVjdHMuY2xvc2VzdCgnLmZvcm0tcHJvamVjdC1jb250YWluZXInKS5xdWVyeVNlbGVjdG9yKCd1bC5wcm9qZWN0LWlucHV0Jyk7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coYnRuUHJvamVjdHMsIHVsUHJvamVjdHMpO1xyXG4vLyAgICAgICAgIGFwcC4jcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcclxuLy8gICAgICAgICAgIGNvbnN0IHByb2plY3RIdG1sID0gYFxyXG4vLyAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwcm9qZWN0LWlucHV0IG9wdGlvbiBwZXJzb25hbFwiIGlkPVwicHJvamVjdC1uYW1lLSR7aW5kZXh9XCIgZGF0YS1uYW1lPSBcIiR7cHJvamVjdC5fcHJvamVjdE5hbWV9XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPSR7cHJvamVjdC5fY29sb3J9IHN0cm9rZT1cIm5vbmVcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1jaXJjbGVcIj48Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjVcIi8+PC9zdmc+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvamVjdC1pbnB1dCBvcHRpb25cIj4ke3Byb2plY3QuX3Byb2plY3ROYW1lWzBdLnRvVXBwZXJDYXNlKCl9JHtwcm9qZWN0Ll9wcm9qZWN0TmFtZS5zbGljZSgxKS50b0xvd2VyQ2FzZSgpfTwvc3Bhbj5cclxuLy8gICAgICAgICAgICAgPC9saT5gXHJcbi8vICAgICAgICAgICBpZiAoaW5kZXggPiAwKSB7XHJcbi8vICAgICAgICAgICAgIHVsUHJvamVjdHMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBwcm9qZWN0SHRtbCk7XHJcbi8vICAgICAgICAgICB9O1xyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICAgICAgcHJvamVjdElucHV0LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xyXG4vLyAgICAgICAgIGJ0blByb2plY3RzLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4vLyAgICAgICAgIHVsUHJvamVjdHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbi8vICAgICAgICAgICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBlLnRhcmdldC5jbG9zZXN0KCdsaS5zZWxlY3RlZCcpO1xyXG4vLyAgICAgICAgICAgaWYgKCFzZWxlY3RlZFByb2plY3QpIHJldHVybjtcclxuLy8gICAgICAgICAgIHByb2plY3RJbnB1dC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcclxuLy8gICAgICAgICAgIGJ0blByb2plY3RzLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4vLyAgICAgICAgICAgYnRuUHJvamVjdHMuY2xhc3NMaXN0LmFkZCgnZ2VuZXJhdGVkJyk7XHJcbi8vICAgICAgICAgfSk7XHJcbi8vICAgICAgIH07XHJcbi8vICAgICAgIGlmICghYnRuUHJvamVjdHMuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4vLyAgICAgICAgIHByb2plY3RJbnB1dC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcclxuLy8gICAgICAgICBidG5Qcm9qZWN0cy5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfTtcclxuICAgIFxyXG4vLyAgICAgY29uc3Qgc2VsZWN0UHJvamVjdHNGb3JtID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIFxyXG4vLyAgICAgfTtcclxuICAgIFxyXG4vLyAgICAgY29uc3QgZGlzcGxheUZvcm1Qcmlvcml0eSA9IGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICBjb25zdCBidG5Qcmlvcml0eSA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbi5mb3JtLXByaW9yaXR5Jyk7XHJcbi8vICAgICAgIGlmICghYnRuUHJpb3JpdHkpIHJldHVybjtcclxuLy8gICAgICAgY29uc29sZS5sb2coYnRuUHJpb3JpdHkpO1xyXG4vLyAgICAgfTtcclxuICAgIFxyXG4vLyAgICAgY29uc3QgY3JlYXRlTmV3VGFzayA9IGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICBjb25zdCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzaycpO1xyXG4vLyAgICAgICBuZXdUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuLy8gICAgICAgICBjb25zdCBidG5TYXZlID0gZS50YXJnZXQuY2xvc2VzdCgnYnV0dG9uLnNhdmUtbmV3LXRhc2snKTtcclxuLy8gICAgICAgICBjb25zdCB0YXNrRm9ybSA9IGUudGFyZ2V0LmNsb3Nlc3QoYGZvcm0udGFzay1mb3JtYCk7XHJcbi8vICAgICAgICAgY29uc3QgdGFza1RleHRJbnB1dCA9IHRhc2tGb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0LmZvcm0tdGV4dCcpLnZhbHVlO1xyXG4vLyAgICAgICAgIGNvbnN0IHRhc2tEZXNjcklucHV0ID0gdGFza0Zvcm0ucXVlcnlTZWxlY3RvcigndGV4dGFyZWEuZm9ybS1kZXNjcicpLnZhbHVlO1xyXG4vLyAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuLy8gICAgICAgICBpZiAoIWJ0blNhdmUpIHJldHVybjtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhidG5TYXZlKTtcclxuXHJcbi8vICAgICAgICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKHRhc2tUZXh0SW5wdXQsIHRhc2tEZXNjcklucHV0KTtcclxuLy8gICAgICAgICBhcHAuI3Byb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiBwcm9qZWN0Ll9wcm9qZWN0TmFtZSA9PT0gJ2luYm94JyAmJiBwcm9qZWN0LnRhc2tzLnB1c2godGFzaykpO1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGFwcC4jcHJvamVjdHMsIHRhc2tGb3JtKTtcclxuLy8gICAgICAgICB9KTtcclxuLy8gICAgIH07XHJcbiAgXHJcbi8vICAgICBjb25zdCBkaXNwbGF5TmV3VGFza01vZGFsID0gZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgIGNvbnN0IGFkZFRhc2sgPSBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24uYWRkLXRhc2snKTtcclxuLy8gICAgICAgaWYgKCFhZGRUYXNrKSByZXR1cm47XHJcbi8vICAgICAgIGJhY2tEcm9wLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xyXG4vLyAgICAgICBiYWNrRHJvcC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgaHRtbE5ld0Zvcm1Nb2RhbCk7XHJcbi8vICAgICAgIGNyZWF0ZU5ld1Rhc2soKTtcclxuLy8gICAgIH07XHJcblxyXG4vLyAgICAgZGlzcGxheUZvcm1Nb2RpZnkoKTtcclxuLy8gICAgIGRpc3BsYXlGb3JtRGF0ZSgpO1xyXG4vLyAgICAgZGlzcGxheUZvcm1Qcm9qZWN0cygpO1xyXG4vLyAgICAgZGlzcGxheUZvcm1Qcmlvcml0eSgpO1xyXG4vLyAgICAgZGlzcGxheU5ld1Rhc2tNb2RhbCgpO1xyXG5cclxuLy8gICB9O1xyXG4gIFxyXG4vLyB9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==