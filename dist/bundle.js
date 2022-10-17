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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'Roboto';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2'),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\n  font-weight: 400;\n  font-style: normal;\n}\n\n:root {\n  --main-hd-color: rgb(255, 99, 71);\n  --main-hd-color-hover: rgb(200, 99, 71);\n  --main-bg-color: rgb(245,245,245, 0.5);\n  --main-hv-color: rgb(230,230,230);\n  --btn-bg-color: rgb(255,218,185);\n  --btn-bg-color-hover: rgb(239, 204, 174);\n  --main-bd-color: rgb(128, 128, 128, 0.5);\n  --main-bd-radius: 5px;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: 'Roboto', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\nli {\n  list-style: none;\n}\n\nbody {\n  display: grid;\n  align-content: start;\n  grid-template-columns: 325px 1fr;\n  grid-template-rows: 50px calc(100vh - 50px);\n  height: 100vh;\n}\n\nbody > * {\n  padding: 15px 3px 15px 35px;\n}\n\n.content-container {\n  padding-top: 30px;\n}\n\n.header-container {\n  background-color: var(--main-hd-color);\n\n}\n\n/* body>div:nth-child(odd) {\n  padding-right: 20px;\n} */\n\n.header-container-left {\n  display: flex;\n  justify-content: space-between;\n  padding-left: 43px;\n  padding-right: 25px;\n}\n\nspan.text-italic {\n  font-style: italic;\n  color: white;\n}\n\n.todo-container {\n  padding-left: 12%;\n  padding-right: 12%;\n}\n\n.projects-container {\n  background-color: var(--main-bg-color);\n}\n\n.project {\n  display: grid;\n  grid-template-columns: 24px 1fr 30px;\n  align-items: center;\n  padding-top: 7px;\n  padding-bottom: 7px;\n  padding-left: 8px;\n  border-radius: 5px;\n}\n\nli.project:hover, svg.cross:hover {\n  background-color: var(--main-hv-color);\n  cursor: pointer;\n}\n\ndiv.project button.add {\n  padding-right: 17px;\n\n}\n\n.count, .project button:last-child {\n  justify-self: end;\n  padding-right: 10px;\n  padding-right: 25px;\n  color: grey;\n  font-size: 0.8rem;\n}\n\n.title {\n  padding-left: 10px;\n}\n\n.title-projects-container {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.todo-container .btn-svg {\n  color: rgb(150, 150, 150);\n  border-radius: 3px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n}\n\n.todo-container .btn-svg:hover {\n  color: black;\n  background-color: rgb(220,220,220, 1);\n  cursor: pointer;\n}\n\n.task:hover .btn-svg, .todo-header:hover .btn-svg {\n  opacity: 0.6;\n}\n\n.title-projects-title {\n  font-weight: 600;\n}\n\ninput, .btn-svg, textarea {\n  border: none;\n  appearance: none;\n  outline: none;\n  background: none;\n}\n\ninput[type=\"checkbox\"], input[type=\"radio\"] {\n  position: absolute;\n  left: -100vw;\n}\n\ninput.list-title {\n  font-size: 1.2rem;\n}\n\n.list-title-container {\n  display: grid;\n  grid-template-columns: 25px 1fr repeat(3, 25px);\n  grid-template-rows: 30px;\n  align-items: start;\n  padding-top: 7px;\n  margin-bottom: 15px;\n}\n\n.task {\n  position: relative;\n  display: grid;\n  grid-template-columns: 1fr repeat(4, 25px);\n  grid-template-rows: 25px 17px 20px;\n  align-items: center;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid lightgrey;\n}\n\n.todo-header:hover, .todo-body:hover {\n  cursor: pointer;\n}\n\n\n.task:first-child .task-check {\n  position: absolute;\n  left: -100vw;\n}\n\n.custom-checkbox {\n  --check: 18px;\n  display: inline-block;\n  height: var(--check);\n  width: var(--check);\n  margin-right: 12px;\n  padding-left: 1px;\n  border: 2px solid rgb(30, 144, 255);\n  background-color: rgb(30, 144, 255, 0.2);\n  border-radius: 50%;\n}\n\n.task label:hover .custom-checkbox {\n  transform: scale(1.1);\n}\n\n.task:first-child .task-check + label span.task-text {\n  position: relative;\n}\n\n.task:first-child .task-check:checked + label span.task-text:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  height: 2px;\n  background: rgb(70, 70, 70, 0.6);\n}\n\n.custom-checkbox svg {\n  opacity: 0;\n}\n\n.task:first-child .task-check:checked + label svg {\n  opacity: 1;\n}\n\n.task label {\n  display: flex;\n  align-items: center;\n  font-size: 0.9rem;\n}\n\n.task label:hover {\n  cursor: pointer;\n}\n\n.task-check {\n  appearance: auto;\n}\n\n.task-text {\n  font-size: 0.9rem;\n}\n\np.task-descr {\n  justify-self: start;\n  font-size: 0.8rem;\n  color: grey;\n  margin-left: 30px;\n}\n\np.task-descr:hover {\n  color: black;\n}\n\n\n.calendar-container {\n  grid-row: 3 / 4;\n  display: flex;\n  align-items: center;\n  margin-left: 28px;\n}\n\n.task-calendar {\n  font-size: 0.8rem;\n  color: grey;\n}\n\n.form-main {\n  padding: 8px 8px;\n  border: 1px solid rgb(200, 200, 200, 0.5);\n  border-radius: 8px;\n}\n\n.form-text {\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n\n.form-descr {\n  font-size: 0.8rem;\n  color: black;\n  resize: none;\n  margin-top: 5px;\n}\n\n.task-form button, .form-project-container {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  margin-right: 8px;\n  border: 1px solid var(--main-bd-color);\n  border-radius: var(--main-bd-radius);\n  background: none;\n  font-size: 0.8rem;\n  cursor: pointer;\n}\n\n.form-params {\n  display: flex;\n  justify-content: flex-start;\n}\n\n.form-project-container {\n  position: relative;\n}\n\nli.project-input {\n  /* display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 0; */\n}\n\ndiv.project-input {\n  display: none;\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 200%;\n  border: 1px solid var(--main-bd-color);\n  border-radius: var(--main-bd-radius);\n  padding: 0;\n  background-color: white;\n}\n\n.project-input .option {\n  font-size: 0.8rem;\n}\n\n.project-input .option:hover {\n  background-color: rgb(245,245,245, 0.8);\n}\n\n.project-input label {\n  padding: 5px 7px;\n}\n\n.form-save {\n  display: flex;\n  margin-top: 8px;\n  justify-content: flex-end;\n}\n\n.form-save button {\n  padding: 7px 12px;\n  border: none;\n  letter-spacing: 0.05rem;\n}\n\n.form-save button:last-child {\n  margin-right: 0;\n  background-color: var(--main-hd-color);\n  color: white;\n}\n\n.form-save button:last-child:hover {\n  background-color: var(--main-hd-color-hover);\n}\n\n.form-save button:first-child {\n  background-color: var(--btn-bg-color);\n}\n\n.form-save button:first-child:hover {\n  background-color: var(--btn-bg-color-hover);\n}\n\n.backdrop {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 3;\n  background-color: var(--main-bd-color);\n}\n\n.modal {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 5;\n  width: 60%;\n  padding: 15px;\n  border-radius: var(--main-bd-radius);\n  background: white;\n}\n\n.modal .form-main {\n  border: none;\n}\n\n.hidden {\n  display: none;\n}\n\n.btn-wrapper label {\n  display: block;\n  padding: 5px 7px;\n}\n\nlabel.btn-projects > *:not(.hidden), .project-input label {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n\ninput[type=\"checkbox\"]:checked + .btn-wrapper label {\n  background-color: lightgrey;\n}\n\ninput[type=\"checkbox\"]:checked ~ div.project-input {\n  display: block;\n}\n\ninput[type=\"radio\"]:checked + .btn-wrapper label {\n  \n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'Roboto';\n  src: url('./roboto-v30-latin-regular.woff2') format('woff2'),\n    url('./roboto-v30-latin-regular.woff') format('woff');\n  font-weight: 400;\n  font-style: normal;\n}\n\n:root {\n  --main-hd-color: rgb(255, 99, 71);\n  --main-hd-color-hover: rgb(200, 99, 71);\n  --main-bg-color: rgb(245,245,245, 0.5);\n  --main-hv-color: rgb(230,230,230);\n  --btn-bg-color: rgb(255,218,185);\n  --btn-bg-color-hover: rgb(239, 204, 174);\n  --main-bd-color: rgb(128, 128, 128, 0.5);\n  --main-bd-radius: 5px;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: 'Roboto', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\nli {\n  list-style: none;\n}\n\nbody {\n  display: grid;\n  align-content: start;\n  grid-template-columns: 325px 1fr;\n  grid-template-rows: 50px calc(100vh - 50px);\n  height: 100vh;\n}\n\nbody > * {\n  padding: 15px 3px 15px 35px;\n}\n\n.content-container {\n  padding-top: 30px;\n}\n\n.header-container {\n  background-color: var(--main-hd-color);\n\n}\n\n/* body>div:nth-child(odd) {\n  padding-right: 20px;\n} */\n\n.header-container-left {\n  display: flex;\n  justify-content: space-between;\n  padding-left: 43px;\n  padding-right: 25px;\n}\n\nspan.text-italic {\n  font-style: italic;\n  color: white;\n}\n\n.todo-container {\n  padding-left: 12%;\n  padding-right: 12%;\n}\n\n.projects-container {\n  background-color: var(--main-bg-color);\n}\n\n.project {\n  display: grid;\n  grid-template-columns: 24px 1fr 30px;\n  align-items: center;\n  padding-top: 7px;\n  padding-bottom: 7px;\n  padding-left: 8px;\n  border-radius: 5px;\n}\n\nli.project:hover, svg.cross:hover {\n  background-color: var(--main-hv-color);\n  cursor: pointer;\n}\n\ndiv.project button.add {\n  padding-right: 17px;\n\n}\n\n.count, .project button:last-child {\n  justify-self: end;\n  padding-right: 10px;\n  padding-right: 25px;\n  color: grey;\n  font-size: 0.8rem;\n}\n\n.title {\n  padding-left: 10px;\n}\n\n.title-projects-container {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.todo-container .btn-svg {\n  color: rgb(150, 150, 150);\n  border-radius: 3px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n}\n\n.todo-container .btn-svg:hover {\n  color: black;\n  background-color: rgb(220,220,220, 1);\n  cursor: pointer;\n}\n\n.task:hover .btn-svg, .todo-header:hover .btn-svg {\n  opacity: 0.6;\n}\n\n.title-projects-title {\n  font-weight: 600;\n}\n\ninput, .btn-svg, textarea {\n  border: none;\n  appearance: none;\n  outline: none;\n  background: none;\n}\n\ninput[type=\"checkbox\"], input[type=\"radio\"] {\n  position: absolute;\n  left: -100vw;\n}\n\ninput.list-title {\n  font-size: 1.2rem;\n}\n\n.list-title-container {\n  display: grid;\n  grid-template-columns: 25px 1fr repeat(3, 25px);\n  grid-template-rows: 30px;\n  align-items: start;\n  padding-top: 7px;\n  margin-bottom: 15px;\n}\n\n.task {\n  position: relative;\n  display: grid;\n  grid-template-columns: 1fr repeat(4, 25px);\n  grid-template-rows: 25px 17px 20px;\n  align-items: center;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid lightgrey;\n}\n\n.todo-header:hover, .todo-body:hover {\n  cursor: pointer;\n}\n\n\n.task:first-child .task-check {\n  position: absolute;\n  left: -100vw;\n}\n\n.custom-checkbox {\n  --check: 18px;\n  display: inline-block;\n  height: var(--check);\n  width: var(--check);\n  margin-right: 12px;\n  padding-left: 1px;\n  border: 2px solid rgb(30, 144, 255);\n  background-color: rgb(30, 144, 255, 0.2);\n  border-radius: 50%;\n}\n\n.task label:hover .custom-checkbox {\n  transform: scale(1.1);\n}\n\n.task:first-child .task-check + label span.task-text {\n  position: relative;\n}\n\n.task:first-child .task-check:checked + label span.task-text:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  height: 2px;\n  background: rgb(70, 70, 70, 0.6);\n}\n\n.custom-checkbox svg {\n  opacity: 0;\n}\n\n.task:first-child .task-check:checked + label svg {\n  opacity: 1;\n}\n\n.task label {\n  display: flex;\n  align-items: center;\n  font-size: 0.9rem;\n}\n\n.task label:hover {\n  cursor: pointer;\n}\n\n.task-check {\n  appearance: auto;\n}\n\n.task-text {\n  font-size: 0.9rem;\n}\n\np.task-descr {\n  justify-self: start;\n  font-size: 0.8rem;\n  color: grey;\n  margin-left: 30px;\n}\n\np.task-descr:hover {\n  color: black;\n}\n\n\n.calendar-container {\n  grid-row: 3 / 4;\n  display: flex;\n  align-items: center;\n  margin-left: 28px;\n}\n\n.task-calendar {\n  font-size: 0.8rem;\n  color: grey;\n}\n\n.form-main {\n  padding: 8px 8px;\n  border: 1px solid rgb(200, 200, 200, 0.5);\n  border-radius: 8px;\n}\n\n.form-text {\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n\n.form-descr {\n  font-size: 0.8rem;\n  color: black;\n  resize: none;\n  margin-top: 5px;\n}\n\n.task-form button, .form-project-container {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  margin-right: 8px;\n  border: 1px solid var(--main-bd-color);\n  border-radius: var(--main-bd-radius);\n  background: none;\n  font-size: 0.8rem;\n  cursor: pointer;\n}\n\n.form-params {\n  display: flex;\n  justify-content: flex-start;\n}\n\n.form-project-container {\n  position: relative;\n}\n\nli.project-input {\n  /* display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 0; */\n}\n\ndiv.project-input {\n  display: none;\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 200%;\n  border: 1px solid var(--main-bd-color);\n  border-radius: var(--main-bd-radius);\n  padding: 0;\n  background-color: white;\n}\n\n.project-input .option {\n  font-size: 0.8rem;\n}\n\n.project-input .option:hover {\n  background-color: rgb(245,245,245, 0.8);\n}\n\n.project-input label {\n  padding: 5px 7px;\n}\n\n.form-save {\n  display: flex;\n  margin-top: 8px;\n  justify-content: flex-end;\n}\n\n.form-save button {\n  padding: 7px 12px;\n  border: none;\n  letter-spacing: 0.05rem;\n}\n\n.form-save button:last-child {\n  margin-right: 0;\n  background-color: var(--main-hd-color);\n  color: white;\n}\n\n.form-save button:last-child:hover {\n  background-color: var(--main-hd-color-hover);\n}\n\n.form-save button:first-child {\n  background-color: var(--btn-bg-color);\n}\n\n.form-save button:first-child:hover {\n  background-color: var(--btn-bg-color-hover);\n}\n\n.backdrop {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 3;\n  background-color: var(--main-bd-color);\n}\n\n.modal {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 5;\n  width: 60%;\n  padding: 15px;\n  border-radius: var(--main-bd-radius);\n  background: white;\n}\n\n.modal .form-main {\n  border: none;\n}\n\n.hidden {\n  display: none;\n}\n\n.btn-wrapper label {\n  display: block;\n  padding: 5px 7px;\n}\n\nlabel.btn-projects > *:not(.hidden), .project-input label {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n\ninput[type=\"checkbox\"]:checked + .btn-wrapper label {\n  background-color: lightgrey;\n}\n\ninput[type=\"checkbox\"]:checked ~ div.project-input {\n  display: block;\n}\n\ninput[type=\"radio\"]:checked + .btn-wrapper label {\n  \n}"],"sourceRoot":""}]);
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

  // display(e) {
  //   const displayModifyTask = function() {
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
  //         console.log('yeppie')
  //         const task = btnEdit.closest('.task');
  //         task.classList.toggle('hidden');
  //         task.insertAdjacentHTML('afterend', htmlFormModify);
  //       };
  //     };
      
  //     displayFormModify();
  //   }
    
  //   const displayNewTask = function() {
  //     const backDrop = document.querySelector('.backdrop');
  //     const htmlNewFormModal = `
  //     <form class="task-form modal new-task" id="task-0">
  //     <div class="form-main">
  //     <div class="form-text">
  //     <input class="form-text" type="text" name="task-text" id="task-1" autofocus placeholder="Tâche">
  //     </div>
  //     <div class="form-descr">
  //     <textarea class="form-descr" name="descr-1" id="descr-1" cols="30" rows="4" placeholder="Description"></textarea>
  //     </div>
  //     <div class="form-params">
  //     <button type="button" class="form-date">
  //     <svg class="form-date" style="width:15px;height:15px" viewBox="0 0 24 24">
  //     <path fill="currentColor" d="M19 3C20.11 3 21 3.89 21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.9 3 5 3H6V1H8V3H16V1H18V3H19M19 19V9H5V19H19M19 7V5H5V7H19M7 11H9V17H7V11" />
  //     </svg>
  //     <span class="form-date">Échéance</span>
  //     </button>
  //     <div class="form-project-container">
  //   <input type="checkbox" name="btn-projects" id="btn-projects">
  //   <div class="btn-wrapper form-project">
  //       <label class="btn-projects" for="btn-projects">
  //         <div class="btn-pers-proj hidden">
  //           <svg class="list-dot" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="cornflowerblue" stroke="none" class="feather feather-circle">
  //             <circle cx="12" cy="12" r="5"/>
  //           </svg>
  //           <span class="form-project">Courses</span>
  //         </div>
  //         <div class="btn-inbox-proj">
  //           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="dodgerblue" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-inbox"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/>
  //             <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
  //           </svg>
  //           <span class="inbox-title">Inbox</span>
  //         </div>
  //       </label>
  //   </div>
  //   <div class="project-input">
  //     <ul class="project-input list">
  //       <li class="project-input option inbox">
  //         <input type="radio" name="project-option" id="inbox" value="inbox">
  //         <label for="inbox">
  //           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="dodgerblue" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-inbox"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/>
  //             <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
  //           </svg>
  //           <span class="inbox-title">Inbox</span>
  //         </label>
  //       </li>
  //     </ul>
  //   </div>
  // </div>
  //     <button type="button" class="form-priority">
  //     <svg class="form-priority xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="red" stroke="red" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-flag">
  //     <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>
  //     </svg>
  //     </button>
  //     </div>
  //     </div>
  //     <div class="form-save">
  //     <button type="button">Annnuler</button>
  //     <button class="save-new-task save">Enregistrer</button>
  //     </div>
  //     </form>`;
  
  //     const displayNewTaskModal = function() {
  //       const addTask = e.target.closest('button.add-task');
  //       if (!addTask) return;
  //       backDrop.classList.toggle('hidden');
  //       backDrop.insertAdjacentHTML('beforeend', htmlNewFormModal);
  //       generateProjectsList.call(this);
  //     };
  
  //     const saveTask = function() {
  //       const saveBtn = e.target.closest('button.save-new-task');
  //       if (!saveBtn) return;
  //       e.preventDefault();
  //       const taskForm = e.target.closest(`form.task-form`);
  //       const taskTextInput = taskForm.querySelector('input.form-text').value;
  //       const taskDescrInput = taskForm.querySelector('textarea.form-descr').value;  
  //       const task = new Task(taskTextInput, taskDescrInput);
  //       this.projects.forEach(project => project._projectName === 'inbox' && project.tasks.push(task));
  //       console.log(this.projects, taskForm);
  //     };

  //     function generateProjectsList() {
  //       const projectList = document.querySelector('ul.project-input');
  //       if (projectList.contains(document.querySelector('li.personal'))) return;
  //       this.projects.forEach((project, index) => {
  //         if (index > 0) {
  //           console.log(project)
  //           const projectHtml = `
  //           <li class="project-input option personal" data-id=${project._id}>
  //             <input type="radio" name="project-option" id="project-${index}" value="project-${index}">
  //             <label for="project-${index}">
  //               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill=${project._color} stroke="none" class="feather feather-circle">
  //                 <circle cx="12" cy="12" r="5"/>
  //               </svg>
  //               <span class="project-input option">${project._projectName[0].toUpperCase()}${project._projectName.slice(1).toLowerCase()}</span>
  //             </label>
  //           </li>
  //           `;
  //           projectList.insertAdjacentHTML('beforeend', projectHtml);
  //         }
  //       });
  //     };

  //     const selectOption = function() {
  //       const checkedProject = e.target.closest('input[type="radio"]');
  //       if (!checkedProject) return;
  //       const btnProjects = document.querySelector('input#btn-projects');
  //       const btnInbox = document.querySelector('.btn-inbox-proj');
  //       const btnPersProj = document.querySelector('.btn-pers-proj');
  //       const changeButton = function() {
  //         if (checkedProject.id !== 'inbox') {
  //           btnInbox.classList.add('hidden');
  //           btnPersProj.classList.remove('hidden');
  //         } else {
  //           btnInbox.classList.remove('hidden');
  //           btnPersProj.classList.add('hidden');
  //         };
  //       };
  //       if (checkedProject && checkedProject.checked === true) {
  //         const projectName = checkedProject.nextElementSibling.querySelector('span').textContent;
  //         const projectSvgColor = checkedProject.nextElementSibling.querySelector('svg').getAttribute('fill');
  //         btnPersProj.querySelector('span').textContent = projectName;
  //         btnPersProj.querySelector('svg').setAttribute('fill', projectSvgColor);
  //         changeButton();
  //         btnProjects.checked = false;          
  //       };
  //     };

  //     function clickOutside() {
  //       const backdrop = e.target.closest('.backdrop');
  //       const projectsContainer = e.target.closest('.form-project-container');
  //       if (projectsContainer || !backdrop) return;
  //       const btnProjects = document.querySelector('input#btn-projects');
  //       if (btnProjects.checked === true && !projectsContainer) {
  //         btnProjects.checked = false;
  //       };
  //     }
 
  //     // const displayProjects = function() {
  //     //   const btnProjects = e.target.closest('button.form-project');
  //     //   if (!btnProjects) return;
  //     //   const projectInput = btnProjects.nextElementSibling;
        
  //     //   if (!btnProjects.classList.contains('active') && !btnProjects.classList.contains('generated')) {
  //     //     const ulProjects = btnProjects.closest('.form-project-container').querySelector('ul.project-input');
  //     //     this.projects.forEach((project, index) => {
  //     //       const projectHtml = `
  //     //       <li class="project-input option personal" id="project-name-${index}" data-name= "${project._projectName}">
  //     //       <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill=${project._color} stroke="none" class="feather feather-circle"><circle cx="12" cy="12" r="5"/></svg>
  //     //       <span class="project-input option">${project._projectName[0].toUpperCase()}${project._projectName.slice(1).toLowerCase()}</span>
  //     //       </li>`
  //     //       if (index > 0) {
  //     //         ulProjects.insertAdjacentHTML('beforeend', projectHtml);
  //     //       };
  //     //     })
  //     //     projectInput.classList.toggle('hidden');
  //     //     btnProjects.classList.toggle('active');
  //     //     ulProjects.addEventListener('click', function(e) {
  //     //       const selectedProject = e.target.closest('li.selected');
  //     //       if (!selectedProject) return;
  //     //       projectInput.classList.toggle('hidden');
  //     //       btnProjects.classList.toggle('active');
  //     //       btnProjects.classList.add('generated');
  //     //     });
  //     //     selectProjectsForm(ulProjects);
  //     //   };
        
  //     //   if (!btnProjects.classList.contains('active')) {
  //     //     projectInput.classList.toggle('hidden');
  //     //     btnProjects.classList.toggle('active');
  //     //   };
  //     // }

  //     // function selectProjectsForm(element) {
  //     //   element.addEventListener('click', function(e) {
  //     //     const selectedElement = element.querySelector('li.selected');
  //     //     const selectedOption = e.target.closest('li.option');
  //     //     const cloneSelOption = selectedOption.cloneNode(true);
  //     //     if (!selectedOption) return;
  //     //     cloneSelOption.classList.add('selected');
  //     //     element.removeChild(selectedElement);
  //     //     element.prepend(cloneSelOption);
  //     //   })
  //     // };

  //     displayNewTaskModal.call(this);   
  //     saveTask.call(this);
  //     selectOption.call(this);
  //     clickOutside.call(this);
 
        
        
        
  //       const displayFormDate = function() {
  //         const btnDate = e.target.closest('button.form-date');
  //         if (!btnDate) return;
  //         console.log(btnDate);
  //       };
        
  //       const displayFormPriority = function() {
  //         const btnPriority = e.target.closest('button.form-priority');
  //         if (!btnPriority) return;
  //         console.log(btnPriority);
  //       };
      
      
  
  //   };

  //   displayModifyTask.call(this);
  //   displayNewTask.call(this);
  // }

  
};









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

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
function display(e) {
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
        console.log('yeppie')
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
  <input type="checkbox" name="btn-projects" id="btn-projects">
  <div class="btn-wrapper form-project">
      <label class="btn-projects" for="btn-projects">
        <div class="btn-pers-proj hidden">
          <svg class="list-dot" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="cornflowerblue" stroke="none" class="feather feather-circle">
            <circle cx="12" cy="12" r="5"/>
          </svg>
          <span class="form-project">Courses</span>
        </div>
        <div class="btn-inbox-proj">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="dodgerblue" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-inbox"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/>
            <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
          </svg>
          <span class="inbox-title">Inbox</span>
        </div>
      </label>
  </div>
  <div class="project-input">
    <ul class="project-input list">
      <li class="project-input option inbox">
        <input type="radio" name="project-option" id="inbox" value="inbox">
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
      backDrop.insertAdjacentHTML('beforeend', htmlNewFormModal);
      generateProjectsList.call(this);
    };

    const saveTask = function() {
      const saveBtn = e.target.closest('button.save-new-task');
      if (!saveBtn) return;
      e.preventDefault();
      const taskForm = e.target.closest(`form.task-form`);
      const taskTextInput = taskForm.querySelector('input.form-text').value;
      const taskDescrInput = taskForm.querySelector('textarea.form-descr').value;  
      const task = new Task(taskTextInput, taskDescrInput);
      this.projects.forEach(project => project._projectName === 'inbox' && project.tasks.push(task));
      console.log(this.projects, taskForm);
    };

    function generateProjectsList() {
      const projectList = document.querySelector('ul.project-input');
      if (projectList.contains(document.querySelector('li.personal'))) return;
      this.projects.forEach((project, index) => {
        if (index > 0) {
          console.log(project)
          const projectHtml = `
          <li class="project-input option personal" data-id=${project._id}>
            <input type="radio" name="project-option" id="project-${index}" value="project-${index}">
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

    const selectOption = function() {
      const checkedProject = e.target.closest('input[type="radio"]');
      if (!checkedProject) return;
      const btnProjects = document.querySelector('input#btn-projects');
      const btnInbox = document.querySelector('.btn-inbox-proj');
      const btnPersProj = document.querySelector('.btn-pers-proj');
      const changeButton = function() {
        if (checkedProject.id !== 'inbox') {
          btnInbox.classList.add('hidden');
          btnPersProj.classList.remove('hidden');
        } else {
          btnInbox.classList.remove('hidden');
          btnPersProj.classList.add('hidden');
        };
      };
      if (checkedProject && checkedProject.checked === true) {
        const projectName = checkedProject.nextElementSibling.querySelector('span').textContent;
        const projectSvgColor = checkedProject.nextElementSibling.querySelector('svg').getAttribute('fill');
        btnPersProj.querySelector('span').textContent = projectName;
        btnPersProj.querySelector('svg').setAttribute('fill', projectSvgColor);
        changeButton();
        btnProjects.checked = false;          
      };
    };

    function clickOutside() {
      const backdrop = e.target.closest('.backdrop');
      const projectsContainer = e.target.closest('.form-project-container');
      if (projectsContainer || !backdrop) return;
      const btnProjects = document.querySelector('input#btn-projects');
      if (btnProjects.checked === true && !projectsContainer) {
        btnProjects.checked = false;
      };
    }

    // const displayProjects = function() {
    //   const btnProjects = e.target.closest('button.form-project');
    //   if (!btnProjects) return;
    //   const projectInput = btnProjects.nextElementSibling;
      
    //   if (!btnProjects.classList.contains('active') && !btnProjects.classList.contains('generated')) {
    //     const ulProjects = btnProjects.closest('.form-project-container').querySelector('ul.project-input');
    //     this.projects.forEach((project, index) => {
    //       const projectHtml = `
    //       <li class="project-input option personal" id="project-name-${index}" data-name= "${project._projectName}">
    //       <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill=${project._color} stroke="none" class="feather feather-circle"><circle cx="12" cy="12" r="5"/></svg>
    //       <span class="project-input option">${project._projectName[0].toUpperCase()}${project._projectName.slice(1).toLowerCase()}</span>
    //       </li>`
    //       if (index > 0) {
    //         ulProjects.insertAdjacentHTML('beforeend', projectHtml);
    //       };
    //     })
    //     projectInput.classList.toggle('hidden');
    //     btnProjects.classList.toggle('active');
    //     ulProjects.addEventListener('click', function(e) {
    //       const selectedProject = e.target.closest('li.selected');
    //       if (!selectedProject) return;
    //       projectInput.classList.toggle('hidden');
    //       btnProjects.classList.toggle('active');
    //       btnProjects.classList.add('generated');
    //     });
    //     selectProjectsForm(ulProjects);
    //   };
      
    //   if (!btnProjects.classList.contains('active')) {
    //     projectInput.classList.toggle('hidden');
    //     btnProjects.classList.toggle('active');
    //   };
    // }

    // function selectProjectsForm(element) {
    //   element.addEventListener('click', function(e) {
    //     const selectedElement = element.querySelector('li.selected');
    //     const selectedOption = e.target.closest('li.option');
    //     const cloneSelOption = selectedOption.cloneNode(true);
    //     if (!selectedOption) return;
    //     cloneSelOption.classList.add('selected');
    //     element.removeChild(selectedElement);
    //     element.prepend(cloneSelOption);
    //   })
    // };

    displayNewTaskModal.call(this);   
    saveTask.call(this);
    selectOption.call(this);
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

  displayModifyTask.call(this);
  displayNewTask.call(this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);

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
  date = new Date();
  id = (Date.now() + '').slice(-10);
  tasks = [];
  constructor(projectName, color) {
    this._projectName = projectName;
    this._color = color;
    this._id = new Date()
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
  date = new Date();
  id = (new Date() + '').slice(-10);
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
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display */ "./src/display.js");




const content = document.querySelector('.todo-container');

const app = new _app__WEBPACK_IMPORTED_MODULE_1__["default"]();
app.display.call(undefined);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFFBQVEsS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxh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QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxZQUFZO0FBQy9FLHlFQUF5RSxNQUFNLG1CQUFtQixNQUFNO0FBQ3hHLHVDQUF1QyxNQUFNO0FBQzdDLDZHQUE2RyxnQkFBZ0I7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RSxNQUFNLGdCQUFnQixxQkFBcUI7QUFDdkgscUhBQXFILGdCQUFnQjtBQUNySSxnRUFBZ0Usc0NBQXNDLEVBQUUsNENBQTRDO0FBQ3BKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vcm9ib3RvLXYzMC1sYXRpbi1yZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9yb2JvdG8tdjMwLWxhdGluLXJlZ3VsYXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLW1haW4taGQtY29sb3I6IHJnYigyNTUsIDk5LCA3MSk7XFxuICAtLW1haW4taGQtY29sb3ItaG92ZXI6IHJnYigyMDAsIDk5LCA3MSk7XFxuICAtLW1haW4tYmctY29sb3I6IHJnYigyNDUsMjQ1LDI0NSwgMC41KTtcXG4gIC0tbWFpbi1odi1jb2xvcjogcmdiKDIzMCwyMzAsMjMwKTtcXG4gIC0tYnRuLWJnLWNvbG9yOiByZ2IoMjU1LDIxOCwxODUpO1xcbiAgLS1idG4tYmctY29sb3ItaG92ZXI6IHJnYigyMzksIDIwNCwgMTc0KTtcXG4gIC0tbWFpbi1iZC1jb2xvcjogcmdiKDEyOCwgMTI4LCAxMjgsIDAuNSk7XFxuICAtLW1haW4tYmQtcmFkaXVzOiA1cHg7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5saSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1jb250ZW50OiBzdGFydDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzI1cHggMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IGNhbGMoMTAwdmggLSA1MHB4KTtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbmJvZHkgPiAqIHtcXG4gIHBhZGRpbmc6IDE1cHggM3B4IDE1cHggMzVweDtcXG59XFxuXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWhkLWNvbG9yKTtcXG5cXG59XFxuXFxuLyogYm9keT5kaXY6bnRoLWNoaWxkKG9kZCkge1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG59ICovXFxuXFxuLmhlYWRlci1jb250YWluZXItbGVmdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZy1sZWZ0OiA0M3B4O1xcbiAgcGFkZGluZy1yaWdodDogMjVweDtcXG59XFxuXFxuc3Bhbi50ZXh0LWl0YWxpYyB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nLWxlZnQ6IDEyJTtcXG4gIHBhZGRpbmctcmlnaHQ6IDEyJTtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjRweCAxZnIgMzBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogN3B4O1xcbiAgcGFkZGluZy1ib3R0b206IDdweDtcXG4gIHBhZGRpbmctbGVmdDogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5saS5wcm9qZWN0OmhvdmVyLCBzdmcuY3Jvc3M6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1odi1jb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmRpdi5wcm9qZWN0IGJ1dHRvbi5hZGQge1xcbiAgcGFkZGluZy1yaWdodDogMTdweDtcXG5cXG59XFxuXFxuLmNvdW50LCAucHJvamVjdCBidXR0b246bGFzdC1jaGlsZCB7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xcbiAgY29sb3I6IGdyZXk7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuLnRpdGxlLXByb2plY3RzLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4udG9kby1jb250YWluZXIgLmJ0bi1zdmcge1xcbiAgY29sb3I6IHJnYigxNTAsIDE1MCwgMTUwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4udG9kby1jb250YWluZXIgLmJ0bi1zdmc6aG92ZXIge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMCwyMjAsMjIwLCAxKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2s6aG92ZXIgLmJ0bi1zdmcsIC50b2RvLWhlYWRlcjpob3ZlciAuYnRuLXN2ZyB7XFxuICBvcGFjaXR5OiAwLjY7XFxufVxcblxcbi50aXRsZS1wcm9qZWN0cy10aXRsZSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG5pbnB1dCwgLmJ0bi1zdmcsIHRleHRhcmVhIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSwgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAtMTAwdnc7XFxufVxcblxcbmlucHV0Lmxpc3QtdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5saXN0LXRpdGxlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNXB4IDFmciByZXBlYXQoMywgMjVweCk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwcHg7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBwYWRkaW5nLXRvcDogN3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLnRhc2sge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIHJlcGVhdCg0LCAyNXB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjVweCAxN3B4IDIwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDhweDtcXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xcbn1cXG5cXG4udG9kby1oZWFkZXI6aG92ZXIsIC50b2RvLWJvZHk6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4udGFzazpmaXJzdC1jaGlsZCAudGFzay1jaGVjayB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAtMTAwdnc7XFxufVxcblxcbi5jdXN0b20tY2hlY2tib3gge1xcbiAgLS1jaGVjazogMThweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogdmFyKC0tY2hlY2spO1xcbiAgd2lkdGg6IHZhcigtLWNoZWNrKTtcXG4gIG1hcmdpbi1yaWdodDogMTJweDtcXG4gIHBhZGRpbmctbGVmdDogMXB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDMwLCAxNDQsIDI1NSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzAsIDE0NCwgMjU1LCAwLjIpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4udGFzayBsYWJlbDpob3ZlciAuY3VzdG9tLWNoZWNrYm94IHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLnRhc2s6Zmlyc3QtY2hpbGQgLnRhc2stY2hlY2sgKyBsYWJlbCBzcGFuLnRhc2stdGV4dCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50YXNrOmZpcnN0LWNoaWxkIC50YXNrLWNoZWNrOmNoZWNrZWQgKyBsYWJlbCBzcGFuLnRhc2stdGV4dDphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogNTAlO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBiYWNrZ3JvdW5kOiByZ2IoNzAsIDcwLCA3MCwgMC42KTtcXG59XFxuXFxuLmN1c3RvbS1jaGVja2JveCBzdmcge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnRhc2s6Zmlyc3QtY2hpbGQgLnRhc2stY2hlY2s6Y2hlY2tlZCArIGxhYmVsIHN2ZyB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udGFzayBsYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4udGFzayBsYWJlbDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWNoZWNrIHtcXG4gIGFwcGVhcmFuY2U6IGF1dG87XFxufVxcblxcbi50YXNrLXRleHQge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbnAudGFzay1kZXNjciB7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBjb2xvcjogZ3JleTtcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbn1cXG5cXG5wLnRhc2stZGVzY3I6aG92ZXIge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5cXG4uY2FsZW5kYXItY29udGFpbmVyIHtcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDI4cHg7XFxufVxcblxcbi50YXNrLWNhbGVuZGFyIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgY29sb3I6IGdyZXk7XFxufVxcblxcbi5mb3JtLW1haW4ge1xcbiAgcGFkZGluZzogOHB4IDhweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMDAsIDIwMCwgMjAwLCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4uZm9ybS10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmZvcm0tZGVzY3Ige1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBjb2xvcjogYmxhY2s7XFxuICByZXNpemU6IG5vbmU7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbi50YXNrLWZvcm0gYnV0dG9uLCAuZm9ybS1wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogM3B4O1xcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tYWluLWJkLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1haW4tYmQtcmFkaXVzKTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZvcm0tcGFyYW1zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5mb3JtLXByb2plY3QtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxubGkucHJvamVjdC1pbnB1dCB7XFxuICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbiAgcGFkZGluZzogMDsgKi9cXG59XFxuXFxuZGl2LnByb2plY3QtaW5wdXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTAwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIHdpZHRoOiAyMDAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWFpbi1iZC1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tYWluLWJkLXJhZGl1cyk7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5wcm9qZWN0LWlucHV0IC5vcHRpb24ge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi5wcm9qZWN0LWlucHV0IC5vcHRpb246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwyNDUsMjQ1LCAwLjgpO1xcbn1cXG5cXG4ucHJvamVjdC1pbnB1dCBsYWJlbCB7XFxuICBwYWRkaW5nOiA1cHggN3B4O1xcbn1cXG5cXG4uZm9ybS1zYXZlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4uZm9ybS1zYXZlIGJ1dHRvbiB7XFxuICBwYWRkaW5nOiA3cHggMTJweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xcbn1cXG5cXG4uZm9ybS1zYXZlIGJ1dHRvbjpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4taGQtY29sb3IpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZm9ybS1zYXZlIGJ1dHRvbjpsYXN0LWNoaWxkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4taGQtY29sb3ItaG92ZXIpO1xcbn1cXG5cXG4uZm9ybS1zYXZlIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4tYmctY29sb3IpO1xcbn1cXG5cXG4uZm9ybS1zYXZlIGJ1dHRvbjpmaXJzdC1jaGlsZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4tYmctY29sb3ItaG92ZXIpO1xcbn1cXG5cXG4uYmFja2Ryb3Age1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgei1pbmRleDogMztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmQtY29sb3IpO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHotaW5kZXg6IDU7XFxuICB3aWR0aDogNjAlO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1haW4tYmQtcmFkaXVzKTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG4ubW9kYWwgLmZvcm0tbWFpbiB7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmJ0bi13cmFwcGVyIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogNXB4IDdweDtcXG59XFxuXFxubGFiZWwuYnRuLXByb2plY3RzID4gKjpub3QoLmhpZGRlbiksIC5wcm9qZWN0LWlucHV0IGxhYmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzcHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIC5idG4td3JhcHBlciBsYWJlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB+IGRpdi5wcm9qZWN0LWlucHV0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmNoZWNrZWQgKyAuYnRuLXdyYXBwZXIgbGFiZWwge1xcbiAgXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckI7MERBQ3VEO0VBQ3ZELGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsdUNBQXVDO0VBQ3ZDLHNDQUFzQztFQUN0QyxpQ0FBaUM7RUFDakMsZ0NBQWdDO0VBQ2hDLHdDQUF3QztFQUN4Qyx3Q0FBd0M7RUFDeEMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0VBQXNFO0FBQ3hFOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixnQ0FBZ0M7RUFDaEMsMkNBQTJDO0VBQzNDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7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QW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0FBRUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICBzcmM6IHVybCgnLi9yb2JvdG8tdjMwLWxhdGluLXJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgIHVybCgnLi9yb2JvdG8tdjMwLWxhdGluLXJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1tYWluLWhkLWNvbG9yOiByZ2IoMjU1LCA5OSwgNzEpO1xcbiAgLS1tYWluLWhkLWNvbG9yLWhvdmVyOiByZ2IoMjAwLCA5OSwgNzEpO1xcbiAgLS1tYWluLWJnLWNvbG9yOiByZ2IoMjQ1LDI0NSwyNDUsIDAuNSk7XFxuICAtLW1haW4taHYtY29sb3I6IHJnYigyMzAsMjMwLDIzMCk7XFxuICAtLWJ0bi1iZy1jb2xvcjogcmdiKDI1NSwyMTgsMTg1KTtcXG4gIC0tYnRuLWJnLWNvbG9yLWhvdmVyOiByZ2IoMjM5LCAyMDQsIDE3NCk7XFxuICAtLW1haW4tYmQtY29sb3I6IHJnYigxMjgsIDEyOCwgMTI4LCAwLjUpO1xcbiAgLS1tYWluLWJkLXJhZGl1czogNXB4O1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxubGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24tY29udGVudDogc3RhcnQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMyNXB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCBjYWxjKDEwMHZoIC0gNTBweCk7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5ib2R5ID4gKiB7XFxuICBwYWRkaW5nOiAxNXB4IDNweCAxNXB4IDM1cHg7XFxufVxcblxcbi5jb250ZW50LWNvbnRhaW5lciB7XFxuICBwYWRkaW5nLXRvcDogMzBweDtcXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1oZC1jb2xvcik7XFxuXFxufVxcblxcbi8qIGJvZHk+ZGl2Om50aC1jaGlsZChvZGQpIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufSAqL1xcblxcbi5oZWFkZXItY29udGFpbmVyLWxlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmctbGVmdDogNDNweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XFxufVxcblxcbnNwYW4udGV4dC1pdGFsaWMge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udG9kby1jb250YWluZXIge1xcbiAgcGFkZGluZy1sZWZ0OiAxMiU7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMiU7XFxufVxcblxcbi5wcm9qZWN0cy1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI0cHggMWZyIDMwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDdweDtcXG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxubGkucHJvamVjdDpob3Zlciwgc3ZnLmNyb3NzOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4taHYtY29sb3IpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5kaXYucHJvamVjdCBidXR0b24uYWRkIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDE3cHg7XFxuXFxufVxcblxcbi5jb3VudCwgLnByb2plY3QgYnV0dG9uOmxhc3QtY2hpbGQge1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMjVweDtcXG4gIGNvbG9yOiBncmV5O1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi50aXRsZSB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcblxcbi50aXRsZS1wcm9qZWN0cy1jb250YWluZXIge1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIC5idG4tc3ZnIHtcXG4gIGNvbG9yOiByZ2IoMTUwLCAxNTAsIDE1MCk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIC5idG4tc3ZnOmhvdmVyIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjAsMjIwLDIyMCwgMSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrOmhvdmVyIC5idG4tc3ZnLCAudG9kby1oZWFkZXI6aG92ZXIgLmJ0bi1zdmcge1xcbiAgb3BhY2l0eTogMC42O1xcbn1cXG5cXG4udGl0bGUtcHJvamVjdHMtdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuaW5wdXQsIC5idG4tc3ZnLCB0ZXh0YXJlYSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0sIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogLTEwMHZ3O1xcbn1cXG5cXG5pbnB1dC5saXN0LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ubGlzdC10aXRsZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjVweCAxZnIgcmVwZWF0KDMsIDI1cHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMHB4O1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgcGFkZGluZy10b3A6IDdweDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcblxcbi50YXNrIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciByZXBlYXQoNCwgMjVweCk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDI1cHggMTdweCAyMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiA4cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXG59XFxuXFxuLnRvZG8taGVhZGVyOmhvdmVyLCAudG9kby1ib2R5OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLnRhc2s6Zmlyc3QtY2hpbGQgLnRhc2stY2hlY2sge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogLTEwMHZ3O1xcbn1cXG5cXG4uY3VzdG9tLWNoZWNrYm94IHtcXG4gIC0tY2hlY2s6IDE4cHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IHZhcigtLWNoZWNrKTtcXG4gIHdpZHRoOiB2YXIoLS1jaGVjayk7XFxuICBtYXJnaW4tcmlnaHQ6IDEycHg7XFxuICBwYWRkaW5nLWxlZnQ6IDFweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigzMCwgMTQ0LCAyNTUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMwLCAxNDQsIDI1NSwgMC4yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnRhc2sgbGFiZWw6aG92ZXIgLmN1c3RvbS1jaGVja2JveCB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi50YXNrOmZpcnN0LWNoaWxkIC50YXNrLWNoZWNrICsgbGFiZWwgc3Bhbi50YXNrLXRleHQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udGFzazpmaXJzdC1jaGlsZCAudGFzay1jaGVjazpjaGVja2VkICsgbGFiZWwgc3Bhbi50YXNrLXRleHQ6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDUwJTtcXG4gIGhlaWdodDogMnB4O1xcbiAgYmFja2dyb3VuZDogcmdiKDcwLCA3MCwgNzAsIDAuNik7XFxufVxcblxcbi5jdXN0b20tY2hlY2tib3ggc3ZnIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi50YXNrOmZpcnN0LWNoaWxkIC50YXNrLWNoZWNrOmNoZWNrZWQgKyBsYWJlbCBzdmcge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnRhc2sgbGFiZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLnRhc2sgbGFiZWw6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1jaGVjayB7XFxuICBhcHBlYXJhbmNlOiBhdXRvO1xcbn1cXG5cXG4udGFzay10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG5wLnRhc2stZGVzY3Ige1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgY29sb3I6IGdyZXk7XFxuICBtYXJnaW4tbGVmdDogMzBweDtcXG59XFxuXFxucC50YXNrLWRlc2NyOmhvdmVyIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuXFxuLmNhbGVuZGFyLWNvbnRhaW5lciB7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAyOHB4O1xcbn1cXG5cXG4udGFzay1jYWxlbmRhciB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGNvbG9yOiBncmV5O1xcbn1cXG5cXG4uZm9ybS1tYWluIHtcXG4gIHBhZGRpbmc6IDhweCA4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjAwLCAyMDAsIDIwMCwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLmZvcm0tdGV4dCB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5mb3JtLWRlc2NyIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcmVzaXplOiBub25lO1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG4udGFzay1mb3JtIGJ1dHRvbiwgLmZvcm0tcHJvamVjdC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDNweDtcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWFpbi1iZC1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tYWluLWJkLXJhZGl1cyk7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mb3JtLXBhcmFtcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uZm9ybS1wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmxpLnByb2plY3QtaW5wdXQge1xcbiAgLyogZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG4gIHBhZGRpbmc6IDA7ICovXFxufVxcblxcbmRpdi5wcm9qZWN0LWlucHV0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwMCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICB3aWR0aDogMjAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tYmQtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbWFpbi1iZC1yYWRpdXMpO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucHJvamVjdC1pbnB1dCAub3B0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4ucHJvamVjdC1pbnB1dCAub3B0aW9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsMjQ1LDI0NSwgMC44KTtcXG59XFxuXFxuLnByb2plY3QtaW5wdXQgbGFiZWwge1xcbiAgcGFkZGluZzogNXB4IDdweDtcXG59XFxuXFxuLmZvcm0tc2F2ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLXRvcDogOHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLmZvcm0tc2F2ZSBidXR0b24ge1xcbiAgcGFkZGluZzogN3B4IDEycHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNXJlbTtcXG59XFxuXFxuLmZvcm0tc2F2ZSBidXR0b246bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWhkLWNvbG9yKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmZvcm0tc2F2ZSBidXR0b246bGFzdC1jaGlsZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWhkLWNvbG9yLWhvdmVyKTtcXG59XFxuXFxuLmZvcm0tc2F2ZSBidXR0b246Zmlyc3QtY2hpbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLWJnLWNvbG9yKTtcXG59XFxuXFxuLmZvcm0tc2F2ZSBidXR0b246Zmlyc3QtY2hpbGQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLWJnLWNvbG9yLWhvdmVyKTtcXG59XFxuXFxuLmJhY2tkcm9wIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHotaW5kZXg6IDM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJkLWNvbG9yKTtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB6LWluZGV4OiA1O1xcbiAgd2lkdGg6IDYwJTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tYWluLWJkLXJhZGl1cyk7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuXFxuLm1vZGFsIC5mb3JtLW1haW4ge1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5idG4td3JhcHBlciBsYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDVweCA3cHg7XFxufVxcblxcbmxhYmVsLmJ0bi1wcm9qZWN0cyA+ICo6bm90KC5oaWRkZW4pLCAucHJvamVjdC1pbnB1dCBsYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogM3B4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyAuYnRuLXdyYXBwZXIgbGFiZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgfiBkaXYucHJvamVjdC1pbnB1dCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTpjaGVja2VkICsgLmJ0bi13cmFwcGVyIGxhYmVsIHtcXG4gIFxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7XG5pbXBvcnQgZGlzcGxheSBmcm9tICcuL2Rpc3BsYXknO1xuXG5jb25zdCBBcHAgPSBjbGFzcyB7XG4gIHByb2plY3RzID0gW107XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kaXNwbGF5LmJpbmQodGhpcykpO1xuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIGNvbnN0IGluYm94ID0gbmV3IFByb2plY3QoJ2luYm94Jyk7XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKGluYm94KTtcbiAgICBjb25zdCBjb3Vyc2VzID0gbmV3IFByb2plY3QoJ2NvdXJzZXMnLCAnY29ybmZsb3dlcmJsdWUnKTtcbiAgICB0aGlzLnByb2plY3RzLnB1c2goY291cnNlcyk7XG4gICAgY29uc3QgZW5mYW50cyA9IG5ldyBQcm9qZWN0KCdlbmZhbnRzJywgJ2NyaW1zb24nKTtcbiAgICB0aGlzLnByb2plY3RzLnB1c2goZW5mYW50cyk7XG4gICAgY29uc3QgdHJhdmF1eCA9IG5ldyBQcm9qZWN0KCd0cmF2YXV4JywgJ2RhcmtvcmFuZ2UnKTtcbiAgICB0aGlzLnByb2plY3RzLnB1c2godHJhdmF1eCk7XG4gIH1cblxuICAvLyBkaXNwbGF5KGUpIHtcbiAgLy8gICBjb25zdCBkaXNwbGF5TW9kaWZ5VGFzayA9IGZ1bmN0aW9uKCkge1xuICAvLyAgICAgY29uc3QgaHRtbEZvcm1Nb2RpZnkgPSBgPGZvcm0gY2xhc3M9XCJ0YXNrLWZvcm1cIiBpZD1cInRhc2stMFwiPlxuICAvLyAgICAgPGRpdiBjbGFzcz1cImZvcm0tbWFpblwiPlxuICAvLyAgICAgPGRpdiBjbGFzcz1cImZvcm0tdGV4dFwiPlxuICAvLyAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS10ZXh0XCIgdHlwZT1cInRleHRcIiBuYW1lPVwidGFzay10ZXh0XCIgaWQ9XCJ0YXNrLTFcIiB2YWx1ZT1cIlBvbW1lc1wiIGF1dG9mb2N1cyBwbGFjZWhvbGRlcj0gXCJUw6JjaGVcIj5cbiAgLy8gICAgIDwvZGl2PlxuICAvLyAgICAgPGRpdiBjbGFzcz1cImZvcm0tZGVzY3JcIj5cbiAgLy8gICAgIDx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tZGVzY3JcIiBuYW1lPVwiZGVzY3ItMVwiIGlkPVwiZGVzY3ItMVwiIGNvbHM9XCIzMFwiIHJvd3M9XCI0XCIgcGxhY2Vob2xkZXI9IFwiRGVzY3JpcHRpb25cIj7DoCBsJ8OpcGljZXJpZSBwYXlzYW5uZTwvdGV4dGFyZWE+XG4gIC8vICAgICA8L2Rpdj5cbiAgLy8gICAgIDxkaXYgY2xhc3M9XCJmb3JtLXBhcmFtc1wiPlxuICAvLyAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJmb3JtLWRhdGVcIj5cbiAgLy8gICAgIDxzdmcgY2xhc3M9XCJmb3JtLWRhdGVcIiBzdHlsZT1cIndpZHRoOjE1cHg7aGVpZ2h0OjE1cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gIC8vICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xOSAzQzIwLjExIDMgMjEgMy44OSAyMSA1VjE5QzIxIDIwLjExIDIwLjExIDIxIDE5IDIxSDVDMy44OSAyMSAzIDIwLjEgMyAxOVY1QzMgMy44OSAzLjkgMyA1IDNINlYxSDhWM0gxNlYxSDE4VjNIMTlNMTkgMTlWOUg1VjE5SDE5TTE5IDdWNUg1VjdIMTlNNyAxMUg5VjE3SDdWMTFcIiAvPlxuICAvLyAgICAgPC9zdmc+XG4gIC8vICAgICA8c3BhbiBjbGFzcz1cImZvcm0tZGF0ZVwiPjE5IG9jdDwvc3Bhbj5cbiAgLy8gICAgIDwvYnV0dG9uPlxuICAvLyAgICAgPGRpdiBjbGFzcz1cImZvcm0tcHJvamVjdC1jb250YWluZXJcIj5cbiAgLy8gICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZm9ybS1wcm9qZWN0XCI+XG4gIC8vICAgICA8c3ZnIGNsYXNzPVwibGlzdC1kb3RcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJjb3JuZmxvd2VyYmx1ZVwiIHN0cm9rZT1cIm5vbmVcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1jaXJjbGVcIj5cbiAgLy8gICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiNVwiLz5cbiAgLy8gICAgIDwvc3ZnPlxuICAvLyAgICAgPHNwYW4gY2xhc3M9XCJmb3JtLXByb2plY3RcIj5Db3Vyc2VzPC9zcGFuPlxuICAvLyAgICAgPC9idXR0b24+XG4gIC8vICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1pbnB1dFwiPlxuICAvLyAgICAgPHVsIGNsYXNzPVwicHJvamVjdC1pbnB1dCBsaXN0XCI+XG4gIC8vICAgICA8bGkgY2xhc3M9XCJwcm9qZWN0LWlucHV0IG9wdGlvbiBpbmJveFwiPlxuICAvLyAgICAgPHN2ZyBjbGFzcz1cImxpc3QtZG90XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwiY29ybmZsb3dlcmJsdWVcIiBzdHJva2U9XCJub25lXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItY2lyY2xlXCI+XG4gIC8vICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjVcIi8+XG4gIC8vICAgICA8L3N2Zz5cbiAgLy8gICAgIDxzcGFuIGNsYXNzPVwiZm9ybS1wcm9qZWN0XCI+Q291cnNlczwvc3Bhbj5cbiAgLy8gICAgIDwvbGk+XG4gIC8vICAgICA8bGkgY2xhc3M9XCJwcm9qZWN0LWlucHV0IG9wdGlvbiBpbmJveFwiPlxuICAvLyAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiZG9kZ2VyYmx1ZVwiIHN0cm9rZS13aWR0aD1cIjFcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1pbmJveFwiPjxwb2x5bGluZSBwb2ludHM9XCIyMiAxMiAxNiAxMiAxNCAxNSAxMCAxNSA4IDEyIDIgMTJcIi8+XG4gIC8vICAgICA8cGF0aCBkPVwiTTUuNDUgNS4xMUwyIDEydjZhMiAyIDAgMCAwIDIgMmgxNmEyIDIgMCAwIDAgMi0ydi02bC0zLjQ1LTYuODlBMiAyIDAgMCAwIDE2Ljc2IDRINy4yNGEyIDIgMCAwIDAtMS43OSAxLjExelwiLz5cbiAgLy8gICAgIDwvc3ZnPlxuICAvLyAgICAgPHNwYW4gY2xhc3M9XCJpbmJveC10aXRsZVwiPkluYm94PC9zcGFuPlxuICAvLyA8L2xpPlxuICAvLyA8bGkgY2xhc3M9XCJwcm9qZWN0LWlucHV0IG9wdGlvblwiIGlkPVwibGlzdC10aXRsZS0xXCI+XG4gIC8vIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwiY29ybmZsb3dlcmJsdWVcIiBzdHJva2U9XCJub25lXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItY2lyY2xlXCI+PGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCI1XCIvPjwvc3ZnPlxuICAvLyA8c3BhbiBjbGFzcz1cInByb2plY3QtaW5wdXQgb3B0aW9uXCI+Q291cnNlczwvc3Bhbj5cbiAgLy8gPC9saT5cbiAgLy8gPGxpIGNsYXNzPVwicHJvamVjdC1pbnB1dCBvcHRpb25cIiBpZD1cImxpc3QtdGl0bGUtMlwiPlxuICAvLyA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cImNyaW1zb25cIiBzdHJva2U9XCJub25lXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItY2lyY2xlXCI+PGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCI1XCIvPjwvc3ZnPlxuICAvLyA8c3BhbiBjbGFzcz1cInByb2plY3QtaW5wdXQgb3B0aW9uXCI+RW5mYW50czwvc3Bhbj5cbiAgLy8gPC9saT5cbiAgLy8gPGxpIGNsYXNzPVwicHJvamVjdC1pbnB1dCBvcHRpb25cIiBpZD1cImxpc3QtdGl0bGUtM1wiPlxuICAvLyA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cImRhcmtvcmFuZ2VcIiBzdHJva2U9XCJub25lXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItY2lyY2xlXCI+PGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCI1XCIvPjwvc3ZnPlxuICAvLyA8c3BhbiBjbGFzcz1cInByb2plY3QtaW5wdXQgb3B0aW9uXCI+VHJhdmF1eDwvc3Bhbj5cbiAgLy8gPC9saT5cbiAgLy8gPC91bD5cbiAgLy8gPC9kaXY+XG4gIC8vIDwvZGl2PlxuICAvLyA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImZvcm0tcHJpb3JpdHlcIj5cbiAgLy8gPHN2ZyBjbGFzcz1cImZvcm0tcHJpb3JpdHkgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwicmVkXCIgc3Ryb2tlPVwicmVkXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWZsYWdcIj5cbiAgLy8gPHBhdGggZD1cIk00IDE1czEtMSA0LTEgNSAyIDggMiA0LTEgNC0xVjNzLTEgMS00IDEtNS0yLTgtMi00IDEtNCAxelwiLz48bGluZSB4MT1cIjRcIiB5MT1cIjIyXCIgeDI9XCI0XCIgeTI9XCIxNVwiLz5cbiAgLy8gPC9zdmc+XG4gIC8vIDwvYnV0dG9uPlxuICAvLyA8L2Rpdj5cbiAgLy8gPC9kaXY+XG4gIC8vIDxkaXYgY2xhc3M9XCJmb3JtLXNhdmVcIj5cbiAgLy8gPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+QW5ubnVsZXI8L2J1dHRvbj5cbiAgLy8gPGJ1dHRvbj5FbnJlZ2lzdHJlcjwvYnV0dG9uPlxuICAvLyA8L2Rpdj5cbiAgLy8gICAgICAgPC9mb3JtPmBcbiAgICAgICAgXG4gIC8vICAgICBjb25zdCBkaXNwbGF5Rm9ybU1vZGlmeSA9IGZ1bmN0aW9uKCkge1xuICAvLyAgICAgICBjb25zdCBidG5FZGl0ID0gZS50YXJnZXQuY2xvc2VzdCgnLmVkaXQtdGFzaycpO1xuICAvLyAgICAgICBpZiAoYnRuRWRpdCkge1xuICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCd5ZXBwaWUnKVxuICAvLyAgICAgICAgIGNvbnN0IHRhc2sgPSBidG5FZGl0LmNsb3Nlc3QoJy50YXNrJyk7XG4gIC8vICAgICAgICAgdGFzay5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgLy8gICAgICAgICB0YXNrLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBodG1sRm9ybU1vZGlmeSk7XG4gIC8vICAgICAgIH07XG4gIC8vICAgICB9O1xuICAgICAgXG4gIC8vICAgICBkaXNwbGF5Rm9ybU1vZGlmeSgpO1xuICAvLyAgIH1cbiAgICBcbiAgLy8gICBjb25zdCBkaXNwbGF5TmV3VGFzayA9IGZ1bmN0aW9uKCkge1xuICAvLyAgICAgY29uc3QgYmFja0Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2Ryb3AnKTtcbiAgLy8gICAgIGNvbnN0IGh0bWxOZXdGb3JtTW9kYWwgPSBgXG4gIC8vICAgICA8Zm9ybSBjbGFzcz1cInRhc2stZm9ybSBtb2RhbCBuZXctdGFza1wiIGlkPVwidGFzay0wXCI+XG4gIC8vICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1tYWluXCI+XG4gIC8vICAgICA8ZGl2IGNsYXNzPVwiZm9ybS10ZXh0XCI+XG4gIC8vICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLXRleHRcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0YXNrLXRleHRcIiBpZD1cInRhc2stMVwiIGF1dG9mb2N1cyBwbGFjZWhvbGRlcj1cIlTDomNoZVwiPlxuICAvLyAgICAgPC9kaXY+XG4gIC8vICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1kZXNjclwiPlxuICAvLyAgICAgPHRleHRhcmVhIGNsYXNzPVwiZm9ybS1kZXNjclwiIG5hbWU9XCJkZXNjci0xXCIgaWQ9XCJkZXNjci0xXCIgY29scz1cIjMwXCIgcm93cz1cIjRcIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCI+PC90ZXh0YXJlYT5cbiAgLy8gICAgIDwvZGl2PlxuICAvLyAgICAgPGRpdiBjbGFzcz1cImZvcm0tcGFyYW1zXCI+XG4gIC8vICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImZvcm0tZGF0ZVwiPlxuICAvLyAgICAgPHN2ZyBjbGFzcz1cImZvcm0tZGF0ZVwiIHN0eWxlPVwid2lkdGg6MTVweDtoZWlnaHQ6MTVweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgLy8gICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTE5IDNDMjAuMTEgMyAyMSAzLjg5IDIxIDVWMTlDMjEgMjAuMTEgMjAuMTEgMjEgMTkgMjFINUMzLjg5IDIxIDMgMjAuMSAzIDE5VjVDMyAzLjg5IDMuOSAzIDUgM0g2VjFIOFYzSDE2VjFIMThWM0gxOU0xOSAxOVY5SDVWMTlIMTlNMTkgN1Y1SDVWN0gxOU03IDExSDlWMTdIN1YxMVwiIC8+XG4gIC8vICAgICA8L3N2Zz5cbiAgLy8gICAgIDxzcGFuIGNsYXNzPVwiZm9ybS1kYXRlXCI+w4ljaMOpYW5jZTwvc3Bhbj5cbiAgLy8gICAgIDwvYnV0dG9uPlxuICAvLyAgICAgPGRpdiBjbGFzcz1cImZvcm0tcHJvamVjdC1jb250YWluZXJcIj5cbiAgLy8gICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImJ0bi1wcm9qZWN0c1wiIGlkPVwiYnRuLXByb2plY3RzXCI+XG4gIC8vICAgPGRpdiBjbGFzcz1cImJ0bi13cmFwcGVyIGZvcm0tcHJvamVjdFwiPlxuICAvLyAgICAgICA8bGFiZWwgY2xhc3M9XCJidG4tcHJvamVjdHNcIiBmb3I9XCJidG4tcHJvamVjdHNcIj5cbiAgLy8gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLXBlcnMtcHJvaiBoaWRkZW5cIj5cbiAgLy8gICAgICAgICAgIDxzdmcgY2xhc3M9XCJsaXN0LWRvdFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cImNvcm5mbG93ZXJibHVlXCIgc3Ryb2tlPVwibm9uZVwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWNpcmNsZVwiPlxuICAvLyAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjVcIi8+XG4gIC8vICAgICAgICAgICA8L3N2Zz5cbiAgLy8gICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZm9ybS1wcm9qZWN0XCI+Q291cnNlczwvc3Bhbj5cbiAgLy8gICAgICAgICA8L2Rpdj5cbiAgLy8gICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWluYm94LXByb2pcIj5cbiAgLy8gICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImRvZGdlcmJsdWVcIiBzdHJva2Utd2lkdGg9XCIxXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItaW5ib3hcIj48cG9seWxpbmUgcG9pbnRzPVwiMjIgMTIgMTYgMTIgMTQgMTUgMTAgMTUgOCAxMiAyIDEyXCIvPlxuICAvLyAgICAgICAgICAgICA8cGF0aCBkPVwiTTUuNDUgNS4xMUwyIDEydjZhMiAyIDAgMCAwIDIgMmgxNmEyIDIgMCAwIDAgMi0ydi02bC0zLjQ1LTYuODlBMiAyIDAgMCAwIDE2Ljc2IDRINy4yNGEyIDIgMCAwIDAtMS43OSAxLjExelwiLz5cbiAgLy8gICAgICAgICAgIDwvc3ZnPlxuICAvLyAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmJveC10aXRsZVwiPkluYm94PC9zcGFuPlxuICAvLyAgICAgICAgIDwvZGl2PlxuICAvLyAgICAgICA8L2xhYmVsPlxuICAvLyAgIDwvZGl2PlxuICAvLyAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWlucHV0XCI+XG4gIC8vICAgICA8dWwgY2xhc3M9XCJwcm9qZWN0LWlucHV0IGxpc3RcIj5cbiAgLy8gICAgICAgPGxpIGNsYXNzPVwicHJvamVjdC1pbnB1dCBvcHRpb24gaW5ib3hcIj5cbiAgLy8gICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInByb2plY3Qtb3B0aW9uXCIgaWQ9XCJpbmJveFwiIHZhbHVlPVwiaW5ib3hcIj5cbiAgLy8gICAgICAgICA8bGFiZWwgZm9yPVwiaW5ib3hcIj5cbiAgLy8gICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImRvZGdlcmJsdWVcIiBzdHJva2Utd2lkdGg9XCIxXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItaW5ib3hcIj48cG9seWxpbmUgcG9pbnRzPVwiMjIgMTIgMTYgMTIgMTQgMTUgMTAgMTUgOCAxMiAyIDEyXCIvPlxuICAvLyAgICAgICAgICAgICA8cGF0aCBkPVwiTTUuNDUgNS4xMUwyIDEydjZhMiAyIDAgMCAwIDIgMmgxNmEyIDIgMCAwIDAgMi0ydi02bC0zLjQ1LTYuODlBMiAyIDAgMCAwIDE2Ljc2IDRINy4yNGEyIDIgMCAwIDAtMS43OSAxLjExelwiLz5cbiAgLy8gICAgICAgICAgIDwvc3ZnPlxuICAvLyAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmJveC10aXRsZVwiPkluYm94PC9zcGFuPlxuICAvLyAgICAgICAgIDwvbGFiZWw+XG4gIC8vICAgICAgIDwvbGk+XG4gIC8vICAgICA8L3VsPlxuICAvLyAgIDwvZGl2PlxuICAvLyA8L2Rpdj5cbiAgLy8gICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZm9ybS1wcmlvcml0eVwiPlxuICAvLyAgICAgPHN2ZyBjbGFzcz1cImZvcm0tcHJpb3JpdHkgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwicmVkXCIgc3Ryb2tlPVwicmVkXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWZsYWdcIj5cbiAgLy8gICAgIDxwYXRoIGQ9XCJNNCAxNXMxLTEgNC0xIDUgMiA4IDIgNC0xIDQtMVYzcy0xIDEtNCAxLTUtMi04LTItNCAxLTQgMXpcIi8+PGxpbmUgeDE9XCI0XCIgeTE9XCIyMlwiIHgyPVwiNFwiIHkyPVwiMTVcIi8+XG4gIC8vICAgICA8L3N2Zz5cbiAgLy8gICAgIDwvYnV0dG9uPlxuICAvLyAgICAgPC9kaXY+XG4gIC8vICAgICA8L2Rpdj5cbiAgLy8gICAgIDxkaXYgY2xhc3M9XCJmb3JtLXNhdmVcIj5cbiAgLy8gICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiPkFubm51bGVyPC9idXR0b24+XG4gIC8vICAgICA8YnV0dG9uIGNsYXNzPVwic2F2ZS1uZXctdGFzayBzYXZlXCI+RW5yZWdpc3RyZXI8L2J1dHRvbj5cbiAgLy8gICAgIDwvZGl2PlxuICAvLyAgICAgPC9mb3JtPmA7XG4gIFxuICAvLyAgICAgY29uc3QgZGlzcGxheU5ld1Rhc2tNb2RhbCA9IGZ1bmN0aW9uKCkge1xuICAvLyAgICAgICBjb25zdCBhZGRUYXNrID0gZS50YXJnZXQuY2xvc2VzdCgnYnV0dG9uLmFkZC10YXNrJyk7XG4gIC8vICAgICAgIGlmICghYWRkVGFzaykgcmV0dXJuO1xuICAvLyAgICAgICBiYWNrRHJvcC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgLy8gICAgICAgYmFja0Ryb3AuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBodG1sTmV3Rm9ybU1vZGFsKTtcbiAgLy8gICAgICAgZ2VuZXJhdGVQcm9qZWN0c0xpc3QuY2FsbCh0aGlzKTtcbiAgLy8gICAgIH07XG4gIFxuICAvLyAgICAgY29uc3Qgc2F2ZVRhc2sgPSBmdW5jdGlvbigpIHtcbiAgLy8gICAgICAgY29uc3Qgc2F2ZUJ0biA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbi5zYXZlLW5ldy10YXNrJyk7XG4gIC8vICAgICAgIGlmICghc2F2ZUJ0bikgcmV0dXJuO1xuICAvLyAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIC8vICAgICAgIGNvbnN0IHRhc2tGb3JtID0gZS50YXJnZXQuY2xvc2VzdChgZm9ybS50YXNrLWZvcm1gKTtcbiAgLy8gICAgICAgY29uc3QgdGFza1RleHRJbnB1dCA9IHRhc2tGb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0LmZvcm0tdGV4dCcpLnZhbHVlO1xuICAvLyAgICAgICBjb25zdCB0YXNrRGVzY3JJbnB1dCA9IHRhc2tGb3JtLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhLmZvcm0tZGVzY3InKS52YWx1ZTsgIFxuICAvLyAgICAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGFza1RleHRJbnB1dCwgdGFza0Rlc2NySW5wdXQpO1xuICAvLyAgICAgICB0aGlzLnByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiBwcm9qZWN0Ll9wcm9qZWN0TmFtZSA9PT0gJ2luYm94JyAmJiBwcm9qZWN0LnRhc2tzLnB1c2godGFzaykpO1xuICAvLyAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb2plY3RzLCB0YXNrRm9ybSk7XG4gIC8vICAgICB9O1xuXG4gIC8vICAgICBmdW5jdGlvbiBnZW5lcmF0ZVByb2plY3RzTGlzdCgpIHtcbiAgLy8gICAgICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bC5wcm9qZWN0LWlucHV0Jyk7XG4gIC8vICAgICAgIGlmIChwcm9qZWN0TGlzdC5jb250YWlucyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaS5wZXJzb25hbCcpKSkgcmV0dXJuO1xuICAvLyAgICAgICB0aGlzLnByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gIC8vICAgICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAvLyAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdClcbiAgLy8gICAgICAgICAgIGNvbnN0IHByb2plY3RIdG1sID0gYFxuICAvLyAgICAgICAgICAgPGxpIGNsYXNzPVwicHJvamVjdC1pbnB1dCBvcHRpb24gcGVyc29uYWxcIiBkYXRhLWlkPSR7cHJvamVjdC5faWR9PlxuICAvLyAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInByb2plY3Qtb3B0aW9uXCIgaWQ9XCJwcm9qZWN0LSR7aW5kZXh9XCIgdmFsdWU9XCJwcm9qZWN0LSR7aW5kZXh9XCI+XG4gIC8vICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcm9qZWN0LSR7aW5kZXh9XCI+XG4gIC8vICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9JHtwcm9qZWN0Ll9jb2xvcn0gc3Ryb2tlPVwibm9uZVwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWNpcmNsZVwiPlxuICAvLyAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCI1XCIvPlxuICAvLyAgICAgICAgICAgICAgIDwvc3ZnPlxuICAvLyAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvamVjdC1pbnB1dCBvcHRpb25cIj4ke3Byb2plY3QuX3Byb2plY3ROYW1lWzBdLnRvVXBwZXJDYXNlKCl9JHtwcm9qZWN0Ll9wcm9qZWN0TmFtZS5zbGljZSgxKS50b0xvd2VyQ2FzZSgpfTwvc3Bhbj5cbiAgLy8gICAgICAgICAgICAgPC9sYWJlbD5cbiAgLy8gICAgICAgICAgIDwvbGk+XG4gIC8vICAgICAgICAgICBgO1xuICAvLyAgICAgICAgICAgcHJvamVjdExpc3QuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBwcm9qZWN0SHRtbCk7XG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICB9KTtcbiAgLy8gICAgIH07XG5cbiAgLy8gICAgIGNvbnN0IHNlbGVjdE9wdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAvLyAgICAgICBjb25zdCBjaGVja2VkUHJvamVjdCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpO1xuICAvLyAgICAgICBpZiAoIWNoZWNrZWRQcm9qZWN0KSByZXR1cm47XG4gIC8vICAgICAgIGNvbnN0IGJ0blByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQjYnRuLXByb2plY3RzJyk7XG4gIC8vICAgICAgIGNvbnN0IGJ0bkluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1pbmJveC1wcm9qJyk7XG4gIC8vICAgICAgIGNvbnN0IGJ0blBlcnNQcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1wZXJzLXByb2onKTtcbiAgLy8gICAgICAgY29uc3QgY2hhbmdlQnV0dG9uID0gZnVuY3Rpb24oKSB7XG4gIC8vICAgICAgICAgaWYgKGNoZWNrZWRQcm9qZWN0LmlkICE9PSAnaW5ib3gnKSB7XG4gIC8vICAgICAgICAgICBidG5JbmJveC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgLy8gICAgICAgICAgIGJ0blBlcnNQcm9qLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAvLyAgICAgICAgIH0gZWxzZSB7XG4gIC8vICAgICAgICAgICBidG5JbmJveC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgLy8gICAgICAgICAgIGJ0blBlcnNQcm9qLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAvLyAgICAgICAgIH07XG4gIC8vICAgICAgIH07XG4gIC8vICAgICAgIGlmIChjaGVja2VkUHJvamVjdCAmJiBjaGVja2VkUHJvamVjdC5jaGVja2VkID09PSB0cnVlKSB7XG4gIC8vICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBjaGVja2VkUHJvamVjdC5uZXh0RWxlbWVudFNpYmxpbmcucXVlcnlTZWxlY3Rvcignc3BhbicpLnRleHRDb250ZW50O1xuICAvLyAgICAgICAgIGNvbnN0IHByb2plY3RTdmdDb2xvciA9IGNoZWNrZWRQcm9qZWN0Lm5leHRFbGVtZW50U2libGluZy5xdWVyeVNlbGVjdG9yKCdzdmcnKS5nZXRBdHRyaWJ1dGUoJ2ZpbGwnKTtcbiAgLy8gICAgICAgICBidG5QZXJzUHJvai5xdWVyeVNlbGVjdG9yKCdzcGFuJykudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgLy8gICAgICAgICBidG5QZXJzUHJvai5xdWVyeVNlbGVjdG9yKCdzdmcnKS5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCBwcm9qZWN0U3ZnQ29sb3IpO1xuICAvLyAgICAgICAgIGNoYW5nZUJ1dHRvbigpO1xuICAvLyAgICAgICAgIGJ0blByb2plY3RzLmNoZWNrZWQgPSBmYWxzZTsgICAgICAgICAgXG4gIC8vICAgICAgIH07XG4gIC8vICAgICB9O1xuXG4gIC8vICAgICBmdW5jdGlvbiBjbGlja091dHNpZGUoKSB7XG4gIC8vICAgICAgIGNvbnN0IGJhY2tkcm9wID0gZS50YXJnZXQuY2xvc2VzdCgnLmJhY2tkcm9wJyk7XG4gIC8vICAgICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZS50YXJnZXQuY2xvc2VzdCgnLmZvcm0tcHJvamVjdC1jb250YWluZXInKTtcbiAgLy8gICAgICAgaWYgKHByb2plY3RzQ29udGFpbmVyIHx8ICFiYWNrZHJvcCkgcmV0dXJuO1xuICAvLyAgICAgICBjb25zdCBidG5Qcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I2J0bi1wcm9qZWN0cycpO1xuICAvLyAgICAgICBpZiAoYnRuUHJvamVjdHMuY2hlY2tlZCA9PT0gdHJ1ZSAmJiAhcHJvamVjdHNDb250YWluZXIpIHtcbiAgLy8gICAgICAgICBidG5Qcm9qZWN0cy5jaGVja2VkID0gZmFsc2U7XG4gIC8vICAgICAgIH07XG4gIC8vICAgICB9XG4gXG4gIC8vICAgICAvLyBjb25zdCBkaXNwbGF5UHJvamVjdHMgPSBmdW5jdGlvbigpIHtcbiAgLy8gICAgIC8vICAgY29uc3QgYnRuUHJvamVjdHMgPSBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24uZm9ybS1wcm9qZWN0Jyk7XG4gIC8vICAgICAvLyAgIGlmICghYnRuUHJvamVjdHMpIHJldHVybjtcbiAgLy8gICAgIC8vICAgY29uc3QgcHJvamVjdElucHV0ID0gYnRuUHJvamVjdHMubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICBcbiAgLy8gICAgIC8vICAgaWYgKCFidG5Qcm9qZWN0cy5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpICYmICFidG5Qcm9qZWN0cy5jbGFzc0xpc3QuY29udGFpbnMoJ2dlbmVyYXRlZCcpKSB7XG4gIC8vICAgICAvLyAgICAgY29uc3QgdWxQcm9qZWN0cyA9IGJ0blByb2plY3RzLmNsb3Nlc3QoJy5mb3JtLXByb2plY3QtY29udGFpbmVyJykucXVlcnlTZWxlY3RvcigndWwucHJvamVjdC1pbnB1dCcpO1xuICAvLyAgICAgLy8gICAgIHRoaXMucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgLy8gICAgIC8vICAgICAgIGNvbnN0IHByb2plY3RIdG1sID0gYFxuICAvLyAgICAgLy8gICAgICAgPGxpIGNsYXNzPVwicHJvamVjdC1pbnB1dCBvcHRpb24gcGVyc29uYWxcIiBpZD1cInByb2plY3QtbmFtZS0ke2luZGV4fVwiIGRhdGEtbmFtZT0gXCIke3Byb2plY3QuX3Byb2plY3ROYW1lfVwiPlxuICAvLyAgICAgLy8gICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9JHtwcm9qZWN0Ll9jb2xvcn0gc3Ryb2tlPVwibm9uZVwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWNpcmNsZVwiPjxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiNVwiLz48L3N2Zz5cbiAgLy8gICAgIC8vICAgICAgIDxzcGFuIGNsYXNzPVwicHJvamVjdC1pbnB1dCBvcHRpb25cIj4ke3Byb2plY3QuX3Byb2plY3ROYW1lWzBdLnRvVXBwZXJDYXNlKCl9JHtwcm9qZWN0Ll9wcm9qZWN0TmFtZS5zbGljZSgxKS50b0xvd2VyQ2FzZSgpfTwvc3Bhbj5cbiAgLy8gICAgIC8vICAgICAgIDwvbGk+YFxuICAvLyAgICAgLy8gICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAvLyAgICAgLy8gICAgICAgICB1bFByb2plY3RzLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgcHJvamVjdEh0bWwpO1xuICAvLyAgICAgLy8gICAgICAgfTtcbiAgLy8gICAgIC8vICAgICB9KVxuICAvLyAgICAgLy8gICAgIHByb2plY3RJbnB1dC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgLy8gICAgIC8vICAgICBidG5Qcm9qZWN0cy5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgLy8gICAgIC8vICAgICB1bFByb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAvLyAgICAgLy8gICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gZS50YXJnZXQuY2xvc2VzdCgnbGkuc2VsZWN0ZWQnKTtcbiAgLy8gICAgIC8vICAgICAgIGlmICghc2VsZWN0ZWRQcm9qZWN0KSByZXR1cm47XG4gIC8vICAgICAvLyAgICAgICBwcm9qZWN0SW5wdXQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gIC8vICAgICAvLyAgICAgICBidG5Qcm9qZWN0cy5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgLy8gICAgIC8vICAgICAgIGJ0blByb2plY3RzLmNsYXNzTGlzdC5hZGQoJ2dlbmVyYXRlZCcpO1xuICAvLyAgICAgLy8gICAgIH0pO1xuICAvLyAgICAgLy8gICAgIHNlbGVjdFByb2plY3RzRm9ybSh1bFByb2plY3RzKTtcbiAgLy8gICAgIC8vICAgfTtcbiAgICAgICAgXG4gIC8vICAgICAvLyAgIGlmICghYnRuUHJvamVjdHMuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAvLyAgICAgLy8gICAgIHByb2plY3RJbnB1dC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgLy8gICAgIC8vICAgICBidG5Qcm9qZWN0cy5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgLy8gICAgIC8vICAgfTtcbiAgLy8gICAgIC8vIH1cblxuICAvLyAgICAgLy8gZnVuY3Rpb24gc2VsZWN0UHJvamVjdHNGb3JtKGVsZW1lbnQpIHtcbiAgLy8gICAgIC8vICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgLy8gICAgIC8vICAgICBjb25zdCBzZWxlY3RlZEVsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpLnNlbGVjdGVkJyk7XG4gIC8vICAgICAvLyAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSBlLnRhcmdldC5jbG9zZXN0KCdsaS5vcHRpb24nKTtcbiAgLy8gICAgIC8vICAgICBjb25zdCBjbG9uZVNlbE9wdGlvbiA9IHNlbGVjdGVkT3B0aW9uLmNsb25lTm9kZSh0cnVlKTtcbiAgLy8gICAgIC8vICAgICBpZiAoIXNlbGVjdGVkT3B0aW9uKSByZXR1cm47XG4gIC8vICAgICAvLyAgICAgY2xvbmVTZWxPcHRpb24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgLy8gICAgIC8vICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKHNlbGVjdGVkRWxlbWVudCk7XG4gIC8vICAgICAvLyAgICAgZWxlbWVudC5wcmVwZW5kKGNsb25lU2VsT3B0aW9uKTtcbiAgLy8gICAgIC8vICAgfSlcbiAgLy8gICAgIC8vIH07XG5cbiAgLy8gICAgIGRpc3BsYXlOZXdUYXNrTW9kYWwuY2FsbCh0aGlzKTsgICBcbiAgLy8gICAgIHNhdmVUYXNrLmNhbGwodGhpcyk7XG4gIC8vICAgICBzZWxlY3RPcHRpb24uY2FsbCh0aGlzKTtcbiAgLy8gICAgIGNsaWNrT3V0c2lkZS5jYWxsKHRoaXMpO1xuIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAvLyAgICAgICBjb25zdCBkaXNwbGF5Rm9ybURhdGUgPSBmdW5jdGlvbigpIHtcbiAgLy8gICAgICAgICBjb25zdCBidG5EYXRlID0gZS50YXJnZXQuY2xvc2VzdCgnYnV0dG9uLmZvcm0tZGF0ZScpO1xuICAvLyAgICAgICAgIGlmICghYnRuRGF0ZSkgcmV0dXJuO1xuICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGJ0bkRhdGUpO1xuICAvLyAgICAgICB9O1xuICAgICAgICBcbiAgLy8gICAgICAgY29uc3QgZGlzcGxheUZvcm1Qcmlvcml0eSA9IGZ1bmN0aW9uKCkge1xuICAvLyAgICAgICAgIGNvbnN0IGJ0blByaW9yaXR5ID0gZS50YXJnZXQuY2xvc2VzdCgnYnV0dG9uLmZvcm0tcHJpb3JpdHknKTtcbiAgLy8gICAgICAgICBpZiAoIWJ0blByaW9yaXR5KSByZXR1cm47XG4gIC8vICAgICAgICAgY29uc29sZS5sb2coYnRuUHJpb3JpdHkpO1xuICAvLyAgICAgICB9O1xuICAgICAgXG4gICAgICBcbiAgXG4gIC8vICAgfTtcblxuICAvLyAgIGRpc3BsYXlNb2RpZnlUYXNrLmNhbGwodGhpcyk7XG4gIC8vICAgZGlzcGxheU5ld1Rhc2suY2FsbCh0aGlzKTtcbiAgLy8gfVxuXG4gIFxufTtcblxuXG5cblxuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCJmdW5jdGlvbiBkaXNwbGF5KGUpIHtcbiAgY29uc3QgZGlzcGxheU1vZGlmeVRhc2sgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBodG1sRm9ybU1vZGlmeSA9IGA8Zm9ybSBjbGFzcz1cInRhc2stZm9ybVwiIGlkPVwidGFzay0wXCI+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tbWFpblwiPlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLXRleHRcIj5cbiAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLXRleHRcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0YXNrLXRleHRcIiBpZD1cInRhc2stMVwiIHZhbHVlPVwiUG9tbWVzXCIgYXV0b2ZvY3VzIHBsYWNlaG9sZGVyPSBcIlTDomNoZVwiPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWRlc2NyXCI+XG4gICAgPHRleHRhcmVhIGNsYXNzPVwiZm9ybS1kZXNjclwiIG5hbWU9XCJkZXNjci0xXCIgaWQ9XCJkZXNjci0xXCIgY29scz1cIjMwXCIgcm93cz1cIjRcIiBwbGFjZWhvbGRlcj0gXCJEZXNjcmlwdGlvblwiPsOgIGwnw6lwaWNlcmllIHBheXNhbm5lPC90ZXh0YXJlYT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1wYXJhbXNcIj5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImZvcm0tZGF0ZVwiPlxuICAgIDxzdmcgY2xhc3M9XCJmb3JtLWRhdGVcIiBzdHlsZT1cIndpZHRoOjE1cHg7aGVpZ2h0OjE1cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTkgM0MyMC4xMSAzIDIxIDMuODkgMjEgNVYxOUMyMSAyMC4xMSAyMC4xMSAyMSAxOSAyMUg1QzMuODkgMjEgMyAyMC4xIDMgMTlWNUMzIDMuODkgMy45IDMgNSAzSDZWMUg4VjNIMTZWMUgxOFYzSDE5TTE5IDE5VjlINVYxOUgxOU0xOSA3VjVINVY3SDE5TTcgMTFIOVYxN0g3VjExXCIgLz5cbiAgICA8L3N2Zz5cbiAgICA8c3BhbiBjbGFzcz1cImZvcm0tZGF0ZVwiPjE5IG9jdDwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1wcm9qZWN0LWNvbnRhaW5lclwiPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZm9ybS1wcm9qZWN0XCI+XG4gICAgPHN2ZyBjbGFzcz1cImxpc3QtZG90XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwiY29ybmZsb3dlcmJsdWVcIiBzdHJva2U9XCJub25lXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItY2lyY2xlXCI+XG4gICAgPGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCI1XCIvPlxuICAgIDwvc3ZnPlxuICAgIDxzcGFuIGNsYXNzPVwiZm9ybS1wcm9qZWN0XCI+Q291cnNlczwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1pbnB1dFwiPlxuICAgIDx1bCBjbGFzcz1cInByb2plY3QtaW5wdXQgbGlzdFwiPlxuICAgIDxsaSBjbGFzcz1cInByb2plY3QtaW5wdXQgb3B0aW9uIGluYm94XCI+XG4gICAgPHN2ZyBjbGFzcz1cImxpc3QtZG90XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwiY29ybmZsb3dlcmJsdWVcIiBzdHJva2U9XCJub25lXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItY2lyY2xlXCI+XG4gICAgPGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCI1XCIvPlxuICAgIDwvc3ZnPlxuICAgIDxzcGFuIGNsYXNzPVwiZm9ybS1wcm9qZWN0XCI+Q291cnNlczwvc3Bhbj5cbiAgICA8L2xpPlxuICAgIDxsaSBjbGFzcz1cInByb2plY3QtaW5wdXQgb3B0aW9uIGluYm94XCI+XG4gICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiZG9kZ2VyYmx1ZVwiIHN0cm9rZS13aWR0aD1cIjFcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1pbmJveFwiPjxwb2x5bGluZSBwb2ludHM9XCIyMiAxMiAxNiAxMiAxNCAxNSAxMCAxNSA4IDEyIDIgMTJcIi8+XG4gICAgPHBhdGggZD1cIk01LjQ1IDUuMTFMMiAxMnY2YTIgMiAwIDAgMCAyIDJoMTZhMiAyIDAgMCAwIDItMnYtNmwtMy40NS02Ljg5QTIgMiAwIDAgMCAxNi43NiA0SDcuMjRhMiAyIDAgMCAwLTEuNzkgMS4xMXpcIi8+XG4gICAgPC9zdmc+XG4gICAgPHNwYW4gY2xhc3M9XCJpbmJveC10aXRsZVwiPkluYm94PC9zcGFuPlxuPC9saT5cbjxsaSBjbGFzcz1cInByb2plY3QtaW5wdXQgb3B0aW9uXCIgaWQ9XCJsaXN0LXRpdGxlLTFcIj5cbjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwiY29ybmZsb3dlcmJsdWVcIiBzdHJva2U9XCJub25lXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItY2lyY2xlXCI+PGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCI1XCIvPjwvc3ZnPlxuPHNwYW4gY2xhc3M9XCJwcm9qZWN0LWlucHV0IG9wdGlvblwiPkNvdXJzZXM8L3NwYW4+XG48L2xpPlxuPGxpIGNsYXNzPVwicHJvamVjdC1pbnB1dCBvcHRpb25cIiBpZD1cImxpc3QtdGl0bGUtMlwiPlxuPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJjcmltc29uXCIgc3Ryb2tlPVwibm9uZVwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWNpcmNsZVwiPjxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiNVwiLz48L3N2Zz5cbjxzcGFuIGNsYXNzPVwicHJvamVjdC1pbnB1dCBvcHRpb25cIj5FbmZhbnRzPC9zcGFuPlxuPC9saT5cbjxsaSBjbGFzcz1cInByb2plY3QtaW5wdXQgb3B0aW9uXCIgaWQ9XCJsaXN0LXRpdGxlLTNcIj5cbjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwiZGFya29yYW5nZVwiIHN0cm9rZT1cIm5vbmVcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1jaXJjbGVcIj48Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjVcIi8+PC9zdmc+XG48c3BhbiBjbGFzcz1cInByb2plY3QtaW5wdXQgb3B0aW9uXCI+VHJhdmF1eDwvc3Bhbj5cbjwvbGk+XG48L3VsPlxuPC9kaXY+XG48L2Rpdj5cbjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZm9ybS1wcmlvcml0eVwiPlxuPHN2ZyBjbGFzcz1cImZvcm0tcHJpb3JpdHkgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwicmVkXCIgc3Ryb2tlPVwicmVkXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWZsYWdcIj5cbjxwYXRoIGQ9XCJNNCAxNXMxLTEgNC0xIDUgMiA4IDIgNC0xIDQtMVYzcy0xIDEtNCAxLTUtMi04LTItNCAxLTQgMXpcIi8+PGxpbmUgeDE9XCI0XCIgeTE9XCIyMlwiIHgyPVwiNFwiIHkyPVwiMTVcIi8+XG48L3N2Zz5cbjwvYnV0dG9uPlxuPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJmb3JtLXNhdmVcIj5cbjxidXR0b24gdHlwZT1cImJ1dHRvblwiPkFubm51bGVyPC9idXR0b24+XG48YnV0dG9uPkVucmVnaXN0cmVyPC9idXR0b24+XG48L2Rpdj5cbiAgICAgIDwvZm9ybT5gXG4gICAgICBcbiAgICBjb25zdCBkaXNwbGF5Rm9ybU1vZGlmeSA9IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgYnRuRWRpdCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5lZGl0LXRhc2snKTtcbiAgICAgIGlmIChidG5FZGl0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd5ZXBwaWUnKVxuICAgICAgICBjb25zdCB0YXNrID0gYnRuRWRpdC5jbG9zZXN0KCcudGFzaycpO1xuICAgICAgICB0YXNrLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICB0YXNrLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBodG1sRm9ybU1vZGlmeSk7XG4gICAgICB9O1xuICAgIH07XG4gICAgXG4gICAgZGlzcGxheUZvcm1Nb2RpZnkoKTtcbiAgfVxuICBcbiAgY29uc3QgZGlzcGxheU5ld1Rhc2sgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBiYWNrRHJvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrZHJvcCcpO1xuICAgIGNvbnN0IGh0bWxOZXdGb3JtTW9kYWwgPSBgXG4gICAgPGZvcm0gY2xhc3M9XCJ0YXNrLWZvcm0gbW9kYWwgbmV3LXRhc2tcIiBpZD1cInRhc2stMFwiPlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLW1haW5cIj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS10ZXh0XCI+XG4gICAgPGlucHV0IGNsYXNzPVwiZm9ybS10ZXh0XCIgdHlwZT1cInRleHRcIiBuYW1lPVwidGFzay10ZXh0XCIgaWQ9XCJ0YXNrLTFcIiBhdXRvZm9jdXMgcGxhY2Vob2xkZXI9XCJUw6JjaGVcIj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1kZXNjclwiPlxuICAgIDx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tZGVzY3JcIiBuYW1lPVwiZGVzY3ItMVwiIGlkPVwiZGVzY3ItMVwiIGNvbHM9XCIzMFwiIHJvd3M9XCI0XCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiPjwvdGV4dGFyZWE+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tcGFyYW1zXCI+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJmb3JtLWRhdGVcIj5cbiAgICA8c3ZnIGNsYXNzPVwiZm9ybS1kYXRlXCIgc3R5bGU9XCJ3aWR0aDoxNXB4O2hlaWdodDoxNXB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTE5IDNDMjAuMTEgMyAyMSAzLjg5IDIxIDVWMTlDMjEgMjAuMTEgMjAuMTEgMjEgMTkgMjFINUMzLjg5IDIxIDMgMjAuMSAzIDE5VjVDMyAzLjg5IDMuOSAzIDUgM0g2VjFIOFYzSDE2VjFIMThWM0gxOU0xOSAxOVY5SDVWMTlIMTlNMTkgN1Y1SDVWN0gxOU03IDExSDlWMTdIN1YxMVwiIC8+XG4gICAgPC9zdmc+XG4gICAgPHNwYW4gY2xhc3M9XCJmb3JtLWRhdGVcIj7DiWNow6lhbmNlPC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLXByb2plY3QtY29udGFpbmVyXCI+XG4gIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiYnRuLXByb2plY3RzXCIgaWQ9XCJidG4tcHJvamVjdHNcIj5cbiAgPGRpdiBjbGFzcz1cImJ0bi13cmFwcGVyIGZvcm0tcHJvamVjdFwiPlxuICAgICAgPGxhYmVsIGNsYXNzPVwiYnRuLXByb2plY3RzXCIgZm9yPVwiYnRuLXByb2plY3RzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidG4tcGVycy1wcm9qIGhpZGRlblwiPlxuICAgICAgICAgIDxzdmcgY2xhc3M9XCJsaXN0LWRvdFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cImNvcm5mbG93ZXJibHVlXCIgc3Ryb2tlPVwibm9uZVwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWNpcmNsZVwiPlxuICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCI1XCIvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZm9ybS1wcm9qZWN0XCI+Q291cnNlczwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidG4taW5ib3gtcHJvalwiPlxuICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImRvZGdlcmJsdWVcIiBzdHJva2Utd2lkdGg9XCIxXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItaW5ib3hcIj48cG9seWxpbmUgcG9pbnRzPVwiMjIgMTIgMTYgMTIgMTQgMTUgMTAgMTUgOCAxMiAyIDEyXCIvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk01LjQ1IDUuMTFMMiAxMnY2YTIgMiAwIDAgMCAyIDJoMTZhMiAyIDAgMCAwIDItMnYtNmwtMy40NS02Ljg5QTIgMiAwIDAgMCAxNi43NiA0SDcuMjRhMiAyIDAgMCAwLTEuNzkgMS4xMXpcIi8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmJveC10aXRsZVwiPkluYm94PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbGFiZWw+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicHJvamVjdC1pbnB1dFwiPlxuICAgIDx1bCBjbGFzcz1cInByb2plY3QtaW5wdXQgbGlzdFwiPlxuICAgICAgPGxpIGNsYXNzPVwicHJvamVjdC1pbnB1dCBvcHRpb24gaW5ib3hcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwcm9qZWN0LW9wdGlvblwiIGlkPVwiaW5ib3hcIiB2YWx1ZT1cImluYm94XCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJpbmJveFwiPlxuICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImRvZGdlcmJsdWVcIiBzdHJva2Utd2lkdGg9XCIxXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItaW5ib3hcIj48cG9seWxpbmUgcG9pbnRzPVwiMjIgMTIgMTYgMTIgMTQgMTUgMTAgMTUgOCAxMiAyIDEyXCIvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk01LjQ1IDUuMTFMMiAxMnY2YTIgMiAwIDAgMCAyIDJoMTZhMiAyIDAgMCAwIDItMnYtNmwtMy40NS02Ljg5QTIgMiAwIDAgMCAxNi43NiA0SDcuMjRhMiAyIDAgMCAwLTEuNzkgMS4xMXpcIi8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmJveC10aXRsZVwiPkluYm94PC9zcGFuPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICA8L2Rpdj5cbjwvZGl2PlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZm9ybS1wcmlvcml0eVwiPlxuICAgIDxzdmcgY2xhc3M9XCJmb3JtLXByaW9yaXR5IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cInJlZFwiIHN0cm9rZT1cInJlZFwiIHN0cm9rZS13aWR0aD1cIjFcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1mbGFnXCI+XG4gICAgPHBhdGggZD1cIk00IDE1czEtMSA0LTEgNSAyIDggMiA0LTEgNC0xVjNzLTEgMS00IDEtNS0yLTgtMi00IDEtNCAxelwiLz48bGluZSB4MT1cIjRcIiB5MT1cIjIyXCIgeDI9XCI0XCIgeTI9XCIxNVwiLz5cbiAgICA8L3N2Zz5cbiAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1zYXZlXCI+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+QW5ubnVsZXI8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwic2F2ZS1uZXctdGFzayBzYXZlXCI+RW5yZWdpc3RyZXI8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+YDtcblxuICAgIGNvbnN0IGRpc3BsYXlOZXdUYXNrTW9kYWwgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGFkZFRhc2sgPSBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24uYWRkLXRhc2snKTtcbiAgICAgIGlmICghYWRkVGFzaykgcmV0dXJuO1xuICAgICAgYmFja0Ryb3AuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICBiYWNrRHJvcC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGh0bWxOZXdGb3JtTW9kYWwpO1xuICAgICAgZ2VuZXJhdGVQcm9qZWN0c0xpc3QuY2FsbCh0aGlzKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2F2ZVRhc2sgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IHNhdmVCdG4gPSBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24uc2F2ZS1uZXctdGFzaycpO1xuICAgICAgaWYgKCFzYXZlQnRuKSByZXR1cm47XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB0YXNrRm9ybSA9IGUudGFyZ2V0LmNsb3Nlc3QoYGZvcm0udGFzay1mb3JtYCk7XG4gICAgICBjb25zdCB0YXNrVGV4dElucHV0ID0gdGFza0Zvcm0ucXVlcnlTZWxlY3RvcignaW5wdXQuZm9ybS10ZXh0JykudmFsdWU7XG4gICAgICBjb25zdCB0YXNrRGVzY3JJbnB1dCA9IHRhc2tGb3JtLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhLmZvcm0tZGVzY3InKS52YWx1ZTsgIFxuICAgICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKHRhc2tUZXh0SW5wdXQsIHRhc2tEZXNjcklucHV0KTtcbiAgICAgIHRoaXMucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHByb2plY3QuX3Byb2plY3ROYW1lID09PSAnaW5ib3gnICYmIHByb2plY3QudGFza3MucHVzaCh0YXNrKSk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnByb2plY3RzLCB0YXNrRm9ybSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlUHJvamVjdHNMaXN0KCkge1xuICAgICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bC5wcm9qZWN0LWlucHV0Jyk7XG4gICAgICBpZiAocHJvamVjdExpc3QuY29udGFpbnMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGkucGVyc29uYWwnKSkpIHJldHVybjtcbiAgICAgIHRoaXMucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QpXG4gICAgICAgICAgY29uc3QgcHJvamVjdEh0bWwgPSBgXG4gICAgICAgICAgPGxpIGNsYXNzPVwicHJvamVjdC1pbnB1dCBvcHRpb24gcGVyc29uYWxcIiBkYXRhLWlkPSR7cHJvamVjdC5faWR9PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwcm9qZWN0LW9wdGlvblwiIGlkPVwicHJvamVjdC0ke2luZGV4fVwiIHZhbHVlPVwicHJvamVjdC0ke2luZGV4fVwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByb2plY3QtJHtpbmRleH1cIj5cbiAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9JHtwcm9qZWN0Ll9jb2xvcn0gc3Ryb2tlPVwibm9uZVwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWNpcmNsZVwiPlxuICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiNVwiLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvamVjdC1pbnB1dCBvcHRpb25cIj4ke3Byb2plY3QuX3Byb2plY3ROYW1lWzBdLnRvVXBwZXJDYXNlKCl9JHtwcm9qZWN0Ll9wcm9qZWN0TmFtZS5zbGljZSgxKS50b0xvd2VyQ2FzZSgpfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICBgO1xuICAgICAgICAgIHByb2plY3RMaXN0Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgcHJvamVjdEh0bWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2VsZWN0T3B0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBjaGVja2VkUHJvamVjdCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpO1xuICAgICAgaWYgKCFjaGVja2VkUHJvamVjdCkgcmV0dXJuO1xuICAgICAgY29uc3QgYnRuUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCNidG4tcHJvamVjdHMnKTtcbiAgICAgIGNvbnN0IGJ0bkluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1pbmJveC1wcm9qJyk7XG4gICAgICBjb25zdCBidG5QZXJzUHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcGVycy1wcm9qJyk7XG4gICAgICBjb25zdCBjaGFuZ2VCdXR0b24gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGNoZWNrZWRQcm9qZWN0LmlkICE9PSAnaW5ib3gnKSB7XG4gICAgICAgICAgYnRuSW5ib3guY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgYnRuUGVyc1Byb2ouY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnRuSW5ib3guY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgYnRuUGVyc1Byb2ouY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgICAgaWYgKGNoZWNrZWRQcm9qZWN0ICYmIGNoZWNrZWRQcm9qZWN0LmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBjaGVja2VkUHJvamVjdC5uZXh0RWxlbWVudFNpYmxpbmcucXVlcnlTZWxlY3Rvcignc3BhbicpLnRleHRDb250ZW50O1xuICAgICAgICBjb25zdCBwcm9qZWN0U3ZnQ29sb3IgPSBjaGVja2VkUHJvamVjdC5uZXh0RWxlbWVudFNpYmxpbmcucXVlcnlTZWxlY3Rvcignc3ZnJykuZ2V0QXR0cmlidXRlKCdmaWxsJyk7XG4gICAgICAgIGJ0blBlcnNQcm9qLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICAgICAgICBidG5QZXJzUHJvai5xdWVyeVNlbGVjdG9yKCdzdmcnKS5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCBwcm9qZWN0U3ZnQ29sb3IpO1xuICAgICAgICBjaGFuZ2VCdXR0b24oKTtcbiAgICAgICAgYnRuUHJvamVjdHMuY2hlY2tlZCA9IGZhbHNlOyAgICAgICAgICBcbiAgICAgIH07XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNsaWNrT3V0c2lkZSgpIHtcbiAgICAgIGNvbnN0IGJhY2tkcm9wID0gZS50YXJnZXQuY2xvc2VzdCgnLmJhY2tkcm9wJyk7XG4gICAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5mb3JtLXByb2plY3QtY29udGFpbmVyJyk7XG4gICAgICBpZiAocHJvamVjdHNDb250YWluZXIgfHwgIWJhY2tkcm9wKSByZXR1cm47XG4gICAgICBjb25zdCBidG5Qcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I2J0bi1wcm9qZWN0cycpO1xuICAgICAgaWYgKGJ0blByb2plY3RzLmNoZWNrZWQgPT09IHRydWUgJiYgIXByb2plY3RzQ29udGFpbmVyKSB7XG4gICAgICAgIGJ0blByb2plY3RzLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gY29uc3QgZGlzcGxheVByb2plY3RzID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gICBjb25zdCBidG5Qcm9qZWN0cyA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbi5mb3JtLXByb2plY3QnKTtcbiAgICAvLyAgIGlmICghYnRuUHJvamVjdHMpIHJldHVybjtcbiAgICAvLyAgIGNvbnN0IHByb2plY3RJbnB1dCA9IGJ0blByb2plY3RzLm5leHRFbGVtZW50U2libGluZztcbiAgICAgIFxuICAgIC8vICAgaWYgKCFidG5Qcm9qZWN0cy5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpICYmICFidG5Qcm9qZWN0cy5jbGFzc0xpc3QuY29udGFpbnMoJ2dlbmVyYXRlZCcpKSB7XG4gICAgLy8gICAgIGNvbnN0IHVsUHJvamVjdHMgPSBidG5Qcm9qZWN0cy5jbG9zZXN0KCcuZm9ybS1wcm9qZWN0LWNvbnRhaW5lcicpLnF1ZXJ5U2VsZWN0b3IoJ3VsLnByb2plY3QtaW5wdXQnKTtcbiAgICAvLyAgICAgdGhpcy5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgIC8vICAgICAgIGNvbnN0IHByb2plY3RIdG1sID0gYFxuICAgIC8vICAgICAgIDxsaSBjbGFzcz1cInByb2plY3QtaW5wdXQgb3B0aW9uIHBlcnNvbmFsXCIgaWQ9XCJwcm9qZWN0LW5hbWUtJHtpbmRleH1cIiBkYXRhLW5hbWU9IFwiJHtwcm9qZWN0Ll9wcm9qZWN0TmFtZX1cIj5cbiAgICAvLyAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD0ke3Byb2plY3QuX2NvbG9yfSBzdHJva2U9XCJub25lXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItY2lyY2xlXCI+PGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCI1XCIvPjwvc3ZnPlxuICAgIC8vICAgICAgIDxzcGFuIGNsYXNzPVwicHJvamVjdC1pbnB1dCBvcHRpb25cIj4ke3Byb2plY3QuX3Byb2plY3ROYW1lWzBdLnRvVXBwZXJDYXNlKCl9JHtwcm9qZWN0Ll9wcm9qZWN0TmFtZS5zbGljZSgxKS50b0xvd2VyQ2FzZSgpfTwvc3Bhbj5cbiAgICAvLyAgICAgICA8L2xpPmBcbiAgICAvLyAgICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgLy8gICAgICAgICB1bFByb2plY3RzLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgcHJvamVjdEh0bWwpO1xuICAgIC8vICAgICAgIH07XG4gICAgLy8gICAgIH0pXG4gICAgLy8gICAgIHByb2plY3RJbnB1dC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAvLyAgICAgYnRuUHJvamVjdHMuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgLy8gICAgIHVsUHJvamVjdHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgLy8gICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gZS50YXJnZXQuY2xvc2VzdCgnbGkuc2VsZWN0ZWQnKTtcbiAgICAvLyAgICAgICBpZiAoIXNlbGVjdGVkUHJvamVjdCkgcmV0dXJuO1xuICAgIC8vICAgICAgIHByb2plY3RJbnB1dC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAvLyAgICAgICBidG5Qcm9qZWN0cy5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAvLyAgICAgICBidG5Qcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdnZW5lcmF0ZWQnKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICAgIHNlbGVjdFByb2plY3RzRm9ybSh1bFByb2plY3RzKTtcbiAgICAvLyAgIH07XG4gICAgICBcbiAgICAvLyAgIGlmICghYnRuUHJvamVjdHMuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgIC8vICAgICBwcm9qZWN0SW5wdXQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgLy8gICAgIGJ0blByb2plY3RzLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgIC8vICAgfTtcbiAgICAvLyB9XG5cbiAgICAvLyBmdW5jdGlvbiBzZWxlY3RQcm9qZWN0c0Zvcm0oZWxlbWVudCkge1xuICAgIC8vICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAvLyAgICAgY29uc3Qgc2VsZWN0ZWRFbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdsaS5zZWxlY3RlZCcpO1xuICAgIC8vICAgICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2xpLm9wdGlvbicpO1xuICAgIC8vICAgICBjb25zdCBjbG9uZVNlbE9wdGlvbiA9IHNlbGVjdGVkT3B0aW9uLmNsb25lTm9kZSh0cnVlKTtcbiAgICAvLyAgICAgaWYgKCFzZWxlY3RlZE9wdGlvbikgcmV0dXJuO1xuICAgIC8vICAgICBjbG9uZVNlbE9wdGlvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIC8vICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKHNlbGVjdGVkRWxlbWVudCk7XG4gICAgLy8gICAgIGVsZW1lbnQucHJlcGVuZChjbG9uZVNlbE9wdGlvbik7XG4gICAgLy8gICB9KVxuICAgIC8vIH07XG5cbiAgICBkaXNwbGF5TmV3VGFza01vZGFsLmNhbGwodGhpcyk7ICAgXG4gICAgc2F2ZVRhc2suY2FsbCh0aGlzKTtcbiAgICBzZWxlY3RPcHRpb24uY2FsbCh0aGlzKTtcbiAgICBjbGlja091dHNpZGUuY2FsbCh0aGlzKTtcblxuICAgICAgXG4gICAgICBcbiAgICAgIFxuICAgICAgY29uc3QgZGlzcGxheUZvcm1EYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGJ0bkRhdGUgPSBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24uZm9ybS1kYXRlJyk7XG4gICAgICAgIGlmICghYnRuRGF0ZSkgcmV0dXJuO1xuICAgICAgICBjb25zb2xlLmxvZyhidG5EYXRlKTtcbiAgICAgIH07XG4gICAgICBcbiAgICAgIGNvbnN0IGRpc3BsYXlGb3JtUHJpb3JpdHkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgYnRuUHJpb3JpdHkgPSBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24uZm9ybS1wcmlvcml0eScpO1xuICAgICAgICBpZiAoIWJ0blByaW9yaXR5KSByZXR1cm47XG4gICAgICAgIGNvbnNvbGUubG9nKGJ0blByaW9yaXR5KTtcbiAgICAgIH07XG4gICAgXG4gICAgXG5cbiAgfTtcblxuICBkaXNwbGF5TW9kaWZ5VGFzay5jYWxsKHRoaXMpO1xuICBkaXNwbGF5TmV3VGFzay5jYWxsKHRoaXMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5OyIsImNvbnN0IFByb2plY3QgPSBjbGFzcyB7XG4gIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICBpZCA9IChEYXRlLm5vdygpICsgJycpLnNsaWNlKC0xMCk7XG4gIHRhc2tzID0gW107XG4gIGNvbnN0cnVjdG9yKHByb2plY3ROYW1lLCBjb2xvcikge1xuICAgIHRoaXMuX3Byb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XG4gICAgdGhpcy5fY29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLl9pZCA9IG5ldyBEYXRlKClcbiAgICB0aGlzLm1lc3NhZ2UoKTtcbiAgfVxuXG4gIG1lc3NhZ2UoKSB7XG4gICAgY29uc29sZS5sb2coJ05ldyBQcm9qZWN0IGNyZWF0ZWQnKVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0OyIsImNvbnN0IFRhc2sgPSBjbGFzcyB7XG4gIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICBpZCA9IChuZXcgRGF0ZSgpICsgJycpLnNsaWNlKC0xMCk7XG4gIGNvbnN0cnVjdG9yKHRhc2tOYW1lLCBkZXNjciwgZGVhZGxpbmUsIHByb2plY3QsIHByaW9yaXR5KSB7XG4gICAgdGhpcy5fdGFza05hbWUgPSB0YXNrTmFtZTtcbiAgICB0aGlzLl9kZXNjciA9IGRlc2NyO1xuICAgIHRoaXMuX2RlYWRsaW5lID0gZGVhZGxpbmU7XG4gICAgdGhpcy5fcHJvamVjdCA9IHByb2plY3Q7XG4gICAgdGhpcy5fcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLm1lc3NhZ2UoKVxuICB9XG4gIFxuICBtZXNzYWdlKCkge1xuICAgIGNvbnNvbGUubG9nKCdOZXcgVGFzayBjcmVhdGVkJylcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFzazsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xyXG5pbXBvcnQgZGlzcGxheSBmcm9tICcuL2Rpc3BsYXknO1xyXG5cclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWNvbnRhaW5lcicpO1xyXG5cclxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xyXG5hcHAuZGlzcGxheS5jYWxsKHRoaXMpO1xyXG5cclxuLy8gY29uc3QgUHJvamVjdCA9IGNsYXNzIHtcclxuLy8gICB0YXNrcyA9IFtdO1xyXG4vLyAgIGNvbnN0cnVjdG9yKHByb2plY3ROYW1lLCBjb2xvcikge1xyXG4vLyAgICAgdGhpcy5fcHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZTtcclxuLy8gICAgIHRoaXMuX2NvbG9yID0gY29sb3I7XHJcbi8vICAgICB0aGlzLm1lc3NhZ2UoKTtcclxuLy8gICB9XHJcblxyXG4vLyAgIG1lc3NhZ2UoKSB7XHJcbi8vICAgICBjb25zb2xlLmxvZygnTmV3IFByb2plY3QgY3JlYXRlZCcpXHJcbi8vICAgfVxyXG4vLyB9O1xyXG5cclxuLy8gY29uc3QgVGFzayA9IGNsYXNzIHtcclxuLy8gICBjb25zdHJ1Y3Rvcih0YXNrTmFtZSwgZGVzY3IsIGRlYWRsaW5lLCBwcm9qZWN0LCBwcmlvcml0eSkge1xyXG4vLyAgICAgdGhpcy5fdGFza05hbWUgPSB0YXNrTmFtZTtcclxuLy8gICAgIHRoaXMuX2Rlc2NyID0gZGVzY3I7XHJcbi8vICAgICB0aGlzLl9kZWFkbGluZSA9IGRlYWRsaW5lO1xyXG4vLyAgICAgdGhpcy5fcHJvamVjdCA9IHByb2plY3Q7XHJcbi8vICAgICB0aGlzLl9wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4vLyAgICAgdGhpcy5tZXNzYWdlKClcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgbWVzc2FnZSgpIHtcclxuLy8gICAgIGNvbnNvbGUubG9nKCdOZXcgVGFzayBjcmVhdGVkJylcclxuLy8gICB9XHJcbi8vIH07XHJcblxyXG4vLyBjb25zdCBBcHAgPSBjbGFzcyB7XHJcbi8vICAgI3Byb2plY3RzID0gW107XHJcbi8vICAgY29uc3RydWN0b3IoKSB7XHJcbi8vICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZGlzcGxheUZvcm0uYmluZCh0aGlzKSk7XHJcbi8vICAgICB0aGlzLmluaXQoKVxyXG4vLyAgIH1cclxuXHJcbi8vICAgaW5pdCgpIHtcclxuLy8gICAgIGNvbnN0IGluYm94ID0gbmV3IFByb2plY3QoJ2luYm94Jyk7XHJcbi8vICAgICB0aGlzLiNwcm9qZWN0cy5wdXNoKGluYm94KTtcclxuLy8gICAgIGNvbnN0IGNvdXJzZXMgPSBuZXcgUHJvamVjdCgnY291cnNlcycsICdjb3JuZmxvd2VyYmx1ZScpO1xyXG4vLyAgICAgdGhpcy4jcHJvamVjdHMucHVzaChjb3Vyc2VzKTtcclxuLy8gICAgIGNvbnN0IGVuZmFudHMgPSBuZXcgUHJvamVjdCgnZW5mYW50cycsICdjcmltc29uJyk7XHJcbi8vICAgICB0aGlzLiNwcm9qZWN0cy5wdXNoKGVuZmFudHMpO1xyXG4vLyAgICAgY29uc3QgdHJhdmF1eCA9IG5ldyBQcm9qZWN0KCd0cmF2YXV4JywgJ2RhcmtvcmFuZ2UnKTtcclxuLy8gICAgIHRoaXMuI3Byb2plY3RzLnB1c2godHJhdmF1eCk7XHJcbi8vICAgICBjb25zb2xlLmxvZyh0aGlzLiNwcm9qZWN0cylcclxuLy8gICB9XHJcblxyXG4vLyAgIGRpc3BsYXlGb3JtKGUpIHtcclxuLy8gICAgIGNvbnN0IGJhY2tEcm9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tkcm9wJyk7XHJcbi8vICAgICBjb25zdCBodG1sTmV3Rm9ybU1vZGFsID0gYFxyXG4vLyAgICAgPGZvcm0gY2xhc3M9XCJ0YXNrLWZvcm0gbW9kYWwgbmV3LXRhc2tcIiBpZD1cInRhc2stMFwiPlxyXG4vLyAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1tYWluXCI+XHJcbi8vICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tdGV4dFwiPlxyXG4vLyAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS10ZXh0XCIgdHlwZT1cInRleHRcIiBuYW1lPVwidGFzay10ZXh0XCIgaWQ9XCJ0YXNrLTFcIiBhdXRvZm9jdXMgcGxhY2Vob2xkZXI9XCJUw6JjaGVcIj5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1kZXNjclwiPlxyXG4vLyAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwiZm9ybS1kZXNjclwiIG5hbWU9XCJkZXNjci0xXCIgaWQ9XCJkZXNjci0xXCIgY29scz1cIjMwXCIgcm93cz1cIjRcIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCI+PC90ZXh0YXJlYT5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1wYXJhbXNcIj5cclxuLy8gICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZm9ybS1kYXRlXCI+XHJcbi8vICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJmb3JtLWRhdGVcIiBzdHlsZT1cIndpZHRoOjE1cHg7aGVpZ2h0OjE1cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbi8vICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTkgM0MyMC4xMSAzIDIxIDMuODkgMjEgNVYxOUMyMSAyMC4xMSAyMC4xMSAyMSAxOSAyMUg1QzMuODkgMjEgMyAyMC4xIDMgMTlWNUMzIDMuODkgMy45IDMgNSAzSDZWMUg4VjNIMTZWMUgxOFYzSDE5TTE5IDE5VjlINVYxOUgxOU0xOSA3VjVINVY3SDE5TTcgMTFIOVYxN0g3VjExXCIgLz5cclxuLy8gICAgICAgICAgICAgPC9zdmc+XHJcbi8vICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZm9ybS1kYXRlXCI+w4ljaMOpYW5jZTwvc3Bhbj5cclxuLy8gICAgICAgICAgIDwvYnV0dG9uPlxyXG4vLyAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tcHJvamVjdC1jb250YWluZXJcIj5cclxuLy8gICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJmb3JtLXByb2plY3RcIj5cclxuLy8gICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJsaXN0LWRvdFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cImNvcm5mbG93ZXJibHVlXCIgc3Ryb2tlPVwibm9uZVwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWNpcmNsZVwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjVcIi8+XHJcbi8vICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuLy8gICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZm9ybS1wcm9qZWN0XCI+Q291cnNlczwvc3Bhbj5cclxuLy8gICAgICAgICAgICAgPC9idXR0b24+XHJcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWlucHV0IGhpZGRlblwiPlxyXG4vLyAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInByb2plY3QtaW5wdXQgbGlzdFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicHJvamVjdC1pbnB1dCBvcHRpb24gc2VsZWN0ZWRcIiBkYXRhLW5hbWU9IFwic2VsZWN0ZWRcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImxpc3QtZG90XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwiY29ybmZsb3dlcmJsdWVcIiBzdHJva2U9XCJub25lXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItY2lyY2xlXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCI1XCIvPlxyXG4vLyAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuLy8gICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmb3JtLXByb2plY3RcIj5Db3Vyc2VzPC9zcGFuPlxyXG4vLyAgICAgICAgICAgICAgICAgPC9saT5cclxuLy8gICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInByb2plY3QtaW5wdXQgb3B0aW9uIGluYm94XCIgZGF0YS1uYW1lPSBcImluYm94XCI+XHJcbi8vICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImRvZGdlcmJsdWVcIiBzdHJva2Utd2lkdGg9XCIxXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItaW5ib3hcIj48cG9seWxpbmUgcG9pbnRzPVwiMjIgMTIgMTYgMTIgMTQgMTUgMTAgMTUgOCAxMiAyIDEyXCIvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNS40NSA1LjExTDIgMTJ2NmEyIDIgMCAwIDAgMiAyaDE2YTIgMiAwIDAgMCAyLTJ2LTZsLTMuNDUtNi44OUEyIDIgMCAwIDAgMTYuNzYgNEg3LjI0YTIgMiAwIDAgMC0xLjc5IDEuMTF6XCIvPlxyXG4vLyAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuLy8gICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmJveC10aXRsZVwiPkluYm94PC9zcGFuPlxyXG4vLyAgICAgICAgICAgICAgICAgPC9saT5cclxuLy8gICAgICAgICAgICAgICA8L3VsPlxyXG4vLyAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJmb3JtLXByaW9yaXR5XCI+XHJcbi8vICAgICAgICAgICA8c3ZnIGNsYXNzPVwiZm9ybS1wcmlvcml0eSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJyZWRcIiBzdHJva2U9XCJyZWRcIiBzdHJva2Utd2lkdGg9XCIxXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItZmxhZ1wiPlxyXG4vLyAgICAgICAgICAgPHBhdGggZD1cIk00IDE1czEtMSA0LTEgNSAyIDggMiA0LTEgNC0xVjNzLTEgMS00IDEtNS0yLTgtMi00IDEtNCAxelwiLz48bGluZSB4MT1cIjRcIiB5MT1cIjIyXCIgeDI9XCI0XCIgeTI9XCIxNVwiLz5cclxuLy8gICAgICAgICAgIDwvc3ZnPlxyXG4vLyAgICAgICAgICAgPC9idXR0b24+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1zYXZlXCI+XHJcbi8vICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5Bbm5udWxlcjwvYnV0dG9uPlxyXG4vLyAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNhdmUtbmV3LXRhc2sgc2F2ZVwiPkVucmVnaXN0cmVyPC9idXR0b24+XHJcbi8vICAgICAgIDwvZGl2PlxyXG4vLyAgICAgPC9mb3JtPmA7XHJcbi8vICAgICBjb25zdCBodG1sRm9ybU1vZGlmeSA9IGA8Zm9ybSBjbGFzcz1cInRhc2stZm9ybVwiIGlkPVwidGFzay0wXCI+XHJcbi8vICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1tYWluXCI+XHJcbi8vICAgICA8ZGl2IGNsYXNzPVwiZm9ybS10ZXh0XCI+XHJcbi8vICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLXRleHRcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0YXNrLXRleHRcIiBpZD1cInRhc2stMVwiIHZhbHVlPVwiUG9tbWVzXCIgYXV0b2ZvY3VzIHBsYWNlaG9sZGVyPSBcIlTDomNoZVwiPlxyXG4vLyAgICAgPC9kaXY+XHJcbi8vICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1kZXNjclwiPlxyXG4vLyAgICAgPHRleHRhcmVhIGNsYXNzPVwiZm9ybS1kZXNjclwiIG5hbWU9XCJkZXNjci0xXCIgaWQ9XCJkZXNjci0xXCIgY29scz1cIjMwXCIgcm93cz1cIjRcIiBwbGFjZWhvbGRlcj0gXCJEZXNjcmlwdGlvblwiPsOgIGwnw6lwaWNlcmllIHBheXNhbm5lPC90ZXh0YXJlYT5cclxuLy8gICAgIDwvZGl2PlxyXG4vLyAgICAgPGRpdiBjbGFzcz1cImZvcm0tcGFyYW1zXCI+XHJcbi8vICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImZvcm0tZGF0ZVwiPlxyXG4vLyAgICAgPHN2ZyBjbGFzcz1cImZvcm0tZGF0ZVwiIHN0eWxlPVwid2lkdGg6MTVweDtoZWlnaHQ6MTVweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuLy8gICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTE5IDNDMjAuMTEgMyAyMSAzLjg5IDIxIDVWMTlDMjEgMjAuMTEgMjAuMTEgMjEgMTkgMjFINUMzLjg5IDIxIDMgMjAuMSAzIDE5VjVDMyAzLjg5IDMuOSAzIDUgM0g2VjFIOFYzSDE2VjFIMThWM0gxOU0xOSAxOVY5SDVWMTlIMTlNMTkgN1Y1SDVWN0gxOU03IDExSDlWMTdIN1YxMVwiIC8+XHJcbi8vICAgICA8L3N2Zz5cclxuLy8gICAgIDxzcGFuIGNsYXNzPVwiZm9ybS1kYXRlXCI+MTkgb2N0PC9zcGFuPlxyXG4vLyAgICAgPC9idXR0b24+XHJcbi8vICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1wcm9qZWN0LWNvbnRhaW5lclwiPlxyXG4vLyAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJmb3JtLXByb2plY3RcIj5cclxuLy8gICAgIDxzdmcgY2xhc3M9XCJsaXN0LWRvdFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cImNvcm5mbG93ZXJibHVlXCIgc3Ryb2tlPVwibm9uZVwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWNpcmNsZVwiPlxyXG4vLyAgICAgPGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCI1XCIvPlxyXG4vLyAgICAgPC9zdmc+XHJcbi8vICAgICA8c3BhbiBjbGFzcz1cImZvcm0tcHJvamVjdFwiPkNvdXJzZXM8L3NwYW4+XHJcbi8vICAgICA8L2J1dHRvbj5cclxuLy8gICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWlucHV0XCI+XHJcbi8vICAgICA8dWwgY2xhc3M9XCJwcm9qZWN0LWlucHV0IGxpc3RcIj5cclxuLy8gICAgIDxsaSBjbGFzcz1cInByb2plY3QtaW5wdXQgb3B0aW9uIGluYm94XCI+XHJcbi8vICAgICA8c3ZnIGNsYXNzPVwibGlzdC1kb3RcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJjb3JuZmxvd2VyYmx1ZVwiIHN0cm9rZT1cIm5vbmVcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1jaXJjbGVcIj5cclxuLy8gICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiNVwiLz5cclxuLy8gICAgIDwvc3ZnPlxyXG4vLyAgICAgPHNwYW4gY2xhc3M9XCJmb3JtLXByb2plY3RcIj5Db3Vyc2VzPC9zcGFuPlxyXG4vLyAgICAgPC9saT5cclxuLy8gICAgIDxsaSBjbGFzcz1cInByb2plY3QtaW5wdXQgb3B0aW9uIGluYm94XCI+XHJcbi8vICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJkb2RnZXJibHVlXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWluYm94XCI+PHBvbHlsaW5lIHBvaW50cz1cIjIyIDEyIDE2IDEyIDE0IDE1IDEwIDE1IDggMTIgMiAxMlwiLz5cclxuLy8gICAgIDxwYXRoIGQ9XCJNNS40NSA1LjExTDIgMTJ2NmEyIDIgMCAwIDAgMiAyaDE2YTIgMiAwIDAgMCAyLTJ2LTZsLTMuNDUtNi44OUEyIDIgMCAwIDAgMTYuNzYgNEg3LjI0YTIgMiAwIDAgMC0xLjc5IDEuMTF6XCIvPlxyXG4vLyAgICAgPC9zdmc+XHJcbi8vICAgICA8c3BhbiBjbGFzcz1cImluYm94LXRpdGxlXCI+SW5ib3g8L3NwYW4+XHJcbi8vIDwvbGk+XHJcbi8vIDxsaSBjbGFzcz1cInByb2plY3QtaW5wdXQgb3B0aW9uXCIgaWQ9XCJsaXN0LXRpdGxlLTFcIj5cclxuLy8gPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJjb3JuZmxvd2VyYmx1ZVwiIHN0cm9rZT1cIm5vbmVcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1jaXJjbGVcIj48Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjVcIi8+PC9zdmc+XHJcbi8vIDxzcGFuIGNsYXNzPVwicHJvamVjdC1pbnB1dCBvcHRpb25cIj5Db3Vyc2VzPC9zcGFuPlxyXG4vLyA8L2xpPlxyXG4vLyA8bGkgY2xhc3M9XCJwcm9qZWN0LWlucHV0IG9wdGlvblwiIGlkPVwibGlzdC10aXRsZS0yXCI+XHJcbi8vIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwiY3JpbXNvblwiIHN0cm9rZT1cIm5vbmVcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1jaXJjbGVcIj48Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjVcIi8+PC9zdmc+XHJcbi8vIDxzcGFuIGNsYXNzPVwicHJvamVjdC1pbnB1dCBvcHRpb25cIj5FbmZhbnRzPC9zcGFuPlxyXG4vLyA8L2xpPlxyXG4vLyA8bGkgY2xhc3M9XCJwcm9qZWN0LWlucHV0IG9wdGlvblwiIGlkPVwibGlzdC10aXRsZS0zXCI+XHJcbi8vIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwiZGFya29yYW5nZVwiIHN0cm9rZT1cIm5vbmVcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1jaXJjbGVcIj48Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjVcIi8+PC9zdmc+XHJcbi8vIDxzcGFuIGNsYXNzPVwicHJvamVjdC1pbnB1dCBvcHRpb25cIj5UcmF2YXV4PC9zcGFuPlxyXG4vLyA8L2xpPlxyXG4vLyA8L3VsPlxyXG4vLyA8L2Rpdj5cclxuLy8gPC9kaXY+XHJcbi8vIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZm9ybS1wcmlvcml0eVwiPlxyXG4vLyA8c3ZnIGNsYXNzPVwiZm9ybS1wcmlvcml0eSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJyZWRcIiBzdHJva2U9XCJyZWRcIiBzdHJva2Utd2lkdGg9XCIxXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItZmxhZ1wiPlxyXG4vLyA8cGF0aCBkPVwiTTQgMTVzMS0xIDQtMSA1IDIgOCAyIDQtMSA0LTFWM3MtMSAxLTQgMS01LTItOC0yLTQgMS00IDF6XCIvPjxsaW5lIHgxPVwiNFwiIHkxPVwiMjJcIiB4Mj1cIjRcIiB5Mj1cIjE1XCIvPlxyXG4vLyA8L3N2Zz5cclxuLy8gPC9idXR0b24+XHJcbi8vIDwvZGl2PlxyXG4vLyA8L2Rpdj5cclxuLy8gPGRpdiBjbGFzcz1cImZvcm0tc2F2ZVwiPlxyXG4vLyA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5Bbm5udWxlcjwvYnV0dG9uPlxyXG4vLyA8YnV0dG9uPkVucmVnaXN0cmVyPC9idXR0b24+XHJcbi8vIDwvZGl2PlxyXG4vLyAgICAgICA8L2Zvcm0+YFxyXG4gICAgICBcclxuLy8gICAgIGNvbnN0IGRpc3BsYXlGb3JtTW9kaWZ5ID0gZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgIGNvbnN0IGJ0bkVkaXQgPSBlLnRhcmdldC5jbG9zZXN0KCcuZWRpdC10YXNrJyk7XHJcbi8vICAgICAgIGlmIChidG5FZGl0KSB7XHJcbi8vICAgICAgICAgY29uc3QgdGFzayA9IGJ0bkVkaXQuY2xvc2VzdCgnLnRhc2snKTtcclxuLy8gICAgICAgICB0YXNrLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xyXG4vLyAgICAgICAgIHRhc2suaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIGh0bWxGb3JtTW9kaWZ5KTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfTtcclxuICAgIFxyXG4vLyAgICAgY29uc3QgZGlzcGxheUZvcm1EYXRlID0gZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgIGNvbnN0IGJ0bkRhdGUgPSBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24uZm9ybS1kYXRlJyk7XHJcbi8vICAgICAgIGlmICghYnRuRGF0ZSkgcmV0dXJuO1xyXG4vLyAgICAgICBjb25zb2xlLmxvZyhidG5EYXRlKTtcclxuLy8gICAgIH07XHJcbiAgICBcclxuLy8gICAgIGNvbnN0IGRpc3BsYXlGb3JtUHJvamVjdHMgPSBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgY29uc3QgYnRuUHJvamVjdHMgPSBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24uZm9ybS1wcm9qZWN0Jyk7XHJcbi8vICAgICAgIGlmICghYnRuUHJvamVjdHMpIHJldHVybjtcclxuLy8gICAgICAgY29uc3QgcHJvamVjdElucHV0ID0gYnRuUHJvamVjdHMubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4vLyAgICAgICBjb25zb2xlLmxvZyhidG5Qcm9qZWN0cyk7XHJcbi8vICAgICAgIGlmICghYnRuUHJvamVjdHMuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSAmJiAhYnRuUHJvamVjdHMuY2xhc3NMaXN0LmNvbnRhaW5zKCdnZW5lcmF0ZWQnKSkge1xyXG4vLyAgICAgICAgIGNvbnN0IHVsUHJvamVjdHMgPSBidG5Qcm9qZWN0cy5jbG9zZXN0KCcuZm9ybS1wcm9qZWN0LWNvbnRhaW5lcicpLnF1ZXJ5U2VsZWN0b3IoJ3VsLnByb2plY3QtaW5wdXQnKTtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhidG5Qcm9qZWN0cywgdWxQcm9qZWN0cyk7XHJcbi8vICAgICAgICAgYXBwLiNwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xyXG4vLyAgICAgICAgICAgY29uc3QgcHJvamVjdEh0bWwgPSBgXHJcbi8vICAgICAgICAgICAgIDxsaSBjbGFzcz1cInByb2plY3QtaW5wdXQgb3B0aW9uIHBlcnNvbmFsXCIgaWQ9XCJwcm9qZWN0LW5hbWUtJHtpbmRleH1cIiBkYXRhLW5hbWU9IFwiJHtwcm9qZWN0Ll9wcm9qZWN0TmFtZX1cIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9JHtwcm9qZWN0Ll9jb2xvcn0gc3Ryb2tlPVwibm9uZVwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWNpcmNsZVwiPjxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiNVwiLz48L3N2Zz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9qZWN0LWlucHV0IG9wdGlvblwiPiR7cHJvamVjdC5fcHJvamVjdE5hbWVbMF0udG9VcHBlckNhc2UoKX0ke3Byb2plY3QuX3Byb2plY3ROYW1lLnNsaWNlKDEpLnRvTG93ZXJDYXNlKCl9PC9zcGFuPlxyXG4vLyAgICAgICAgICAgICA8L2xpPmBcclxuLy8gICAgICAgICAgIGlmIChpbmRleCA+IDApIHtcclxuLy8gICAgICAgICAgICAgdWxQcm9qZWN0cy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHByb2plY3RIdG1sKTtcclxuLy8gICAgICAgICAgIH07XHJcbi8vICAgICAgICAgfSlcclxuLy8gICAgICAgICBwcm9qZWN0SW5wdXQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XHJcbi8vICAgICAgICAgYnRuUHJvamVjdHMuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbi8vICAgICAgICAgdWxQcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuLy8gICAgICAgICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2xpLnNlbGVjdGVkJyk7XHJcbi8vICAgICAgICAgICBpZiAoIXNlbGVjdGVkUHJvamVjdCkgcmV0dXJuO1xyXG4vLyAgICAgICAgICAgcHJvamVjdElucHV0LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xyXG4vLyAgICAgICAgICAgYnRuUHJvamVjdHMuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbi8vICAgICAgICAgICBidG5Qcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdnZW5lcmF0ZWQnKTtcclxuLy8gICAgICAgICB9KTtcclxuLy8gICAgICAgfTtcclxuLy8gICAgICAgaWYgKCFidG5Qcm9qZWN0cy5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbi8vICAgICAgICAgcHJvamVjdElucHV0LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xyXG4vLyAgICAgICAgIGJ0blByb2plY3RzLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9O1xyXG4gICAgXHJcbi8vICAgICBjb25zdCBzZWxlY3RQcm9qZWN0c0Zvcm0gPSBmdW5jdGlvbigpIHtcclxuICAgICAgXHJcbi8vICAgICB9O1xyXG4gICAgXHJcbi8vICAgICBjb25zdCBkaXNwbGF5Rm9ybVByaW9yaXR5ID0gZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgIGNvbnN0IGJ0blByaW9yaXR5ID0gZS50YXJnZXQuY2xvc2VzdCgnYnV0dG9uLmZvcm0tcHJpb3JpdHknKTtcclxuLy8gICAgICAgaWYgKCFidG5Qcmlvcml0eSkgcmV0dXJuO1xyXG4vLyAgICAgICBjb25zb2xlLmxvZyhidG5Qcmlvcml0eSk7XHJcbi8vICAgICB9O1xyXG4gICAgXHJcbi8vICAgICBjb25zdCBjcmVhdGVOZXdUYXNrID0gZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgIGNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrJyk7XHJcbi8vICAgICAgIG5ld1Rhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4vLyAgICAgICAgIGNvbnN0IGJ0blNhdmUgPSBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24uc2F2ZS1uZXctdGFzaycpO1xyXG4vLyAgICAgICAgIGNvbnN0IHRhc2tGb3JtID0gZS50YXJnZXQuY2xvc2VzdChgZm9ybS50YXNrLWZvcm1gKTtcclxuLy8gICAgICAgICBjb25zdCB0YXNrVGV4dElucHV0ID0gdGFza0Zvcm0ucXVlcnlTZWxlY3RvcignaW5wdXQuZm9ybS10ZXh0JykudmFsdWU7XHJcbi8vICAgICAgICAgY29uc3QgdGFza0Rlc2NySW5wdXQgPSB0YXNrRm9ybS5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYS5mb3JtLWRlc2NyJykudmFsdWU7XHJcbi8vICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgICAgICAgIGlmICghYnRuU2F2ZSkgcmV0dXJuO1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGJ0blNhdmUpO1xyXG5cclxuLy8gICAgICAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGFza1RleHRJbnB1dCwgdGFza0Rlc2NySW5wdXQpO1xyXG4vLyAgICAgICAgIGFwcC4jcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHByb2plY3QuX3Byb2plY3ROYW1lID09PSAnaW5ib3gnICYmIHByb2plY3QudGFza3MucHVzaCh0YXNrKSk7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coYXBwLiNwcm9qZWN0cywgdGFza0Zvcm0pO1xyXG4vLyAgICAgICAgIH0pO1xyXG4vLyAgICAgfTtcclxuICBcclxuLy8gICAgIGNvbnN0IGRpc3BsYXlOZXdUYXNrTW9kYWwgPSBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgY29uc3QgYWRkVGFzayA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbi5hZGQtdGFzaycpO1xyXG4vLyAgICAgICBpZiAoIWFkZFRhc2spIHJldHVybjtcclxuLy8gICAgICAgYmFja0Ryb3AuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XHJcbi8vICAgICAgIGJhY2tEcm9wLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBodG1sTmV3Rm9ybU1vZGFsKTtcclxuLy8gICAgICAgY3JlYXRlTmV3VGFzaygpO1xyXG4vLyAgICAgfTtcclxuXHJcbi8vICAgICBkaXNwbGF5Rm9ybU1vZGlmeSgpO1xyXG4vLyAgICAgZGlzcGxheUZvcm1EYXRlKCk7XHJcbi8vICAgICBkaXNwbGF5Rm9ybVByb2plY3RzKCk7XHJcbi8vICAgICBkaXNwbGF5Rm9ybVByaW9yaXR5KCk7XHJcbi8vICAgICBkaXNwbGF5TmV3VGFza01vZGFsKCk7XHJcblxyXG4vLyAgIH07XHJcbiAgXHJcbi8vIH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9