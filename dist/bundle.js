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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'Roboto';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2'),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\n  font-weight: 400;\n  font-style: normal;\n}\n\n:root {\n  --main-hd-color: rgb(255, 99, 71);\n  --main-hd-color-hover: rgb(220, 20, 60);\n  --main-bg-color: rgb(250,250,250);\n  --main-hv-color: rgb(222, 184, 135, 0.1);\n  --btn-bg-color: rgb(255,218,185);\n  --btn-bg-color-hover: rgb(239, 204, 174);\n  --main-bd-color: rgb(128, 128, 128, 0.5);\n  --main-bd-radius: 5px;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: 'Roboto', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\nli {\n  list-style: none;\n}\n\nbody {\n  display: grid;\n  align-content: start;\n  grid-template-columns: 325px 1fr;\n  grid-template-rows: 55px calc(100vh - 50px);\n  height: 100vh;\n}\n\nbody > * {\n  padding: 15px 3px 15px 35px;\n}\n\n.content-container {\n  padding-top: 30px;\n}\n\n.header-container {\n  background-color: var(--main-hd-color);\n\n}\n\n.header-container-left {\n  display: flex;\n  justify-content: space-between;\n  padding-left: 43px;\n  padding-right: 25px;\n}\n\nspan.text-italic {\n  font-style: italic;\n  color: var(--btn-bg-color-hover);\n}\n\n.todo-container, .header-container-right {\n  padding-left: 12%;\n  padding-right: 12%;\n}\n\n.header-container-right {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\nbutton.del-checked-task {\n  opacity: 0;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 4px 8px;\n  border-radius: var(--main-bd-radius);\n  border: 2px solid white;\n  background: rgb(255, 134, 112);\n  color: white;\n}\n\nbutton.del-checked-task:hover {\n  background-color: var(--main-hd-color-hover);\n  cursor: pointer;\n}\n\nspan.del-checked-task {\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n\n.header-btn-container {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.header-btn-container button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 40px;\n  width: 40px;\n  background: none;\n  border: none;\n  color: white;\n  border-radius: 5px;\n}\n\n.header-btn-container button:hover {\n  background: rgb(255, 255, 255, 0.3);\n  cursor: pointer;\n}\n\n.header-btn-container button div {\n  height: 30px;\n  width: 30px;\n}\n\n.projects-container {\n  background-color: var(--main-bg-color);\n}\n\n.projects-container label:hover {\n  background-color: var(--main-hv-color);\n  cursor: pointer;\n}\n\n.projects-container li:has(input:checked) {\n  background-color: rgb(222, 184, 135, 0.4);\n  border-radius: 5px;\n}\n\n.project, .title-projects-container {\n  display: grid;\n  grid-template-columns: 24px 1fr 30px;\n  align-items: center;\n  padding-top: 7px;\n  padding-bottom: 7px;\n  padding-left: 8px;\n  border-radius: 5px;\n}\n\nsvg.cross:hover {\n  background-color: var(--main-hv-color);\n  cursor: pointer;\n}\n\n.title-projects-container button.add {\n  padding-right: 17px;\n\n}\n\n.count, .title-projects-container button:last-child {\n  justify-self: end;\n  padding-right: 10px;\n  padding-right: 25px;\n  color: grey;\n  font-size: 0.8rem;\n}\n\n.title {\n  padding-left: 10px;\n}\n\n.title-projects-container {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.todo-container .btn-svg {\n  color: rgb(150, 150, 150);\n  border-radius: 3px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n}\n\n.todo-container .btn-svg:hover {\n  color: black;\n  background-color: rgb(220,220,220, 1);\n  cursor: pointer;\n}\n\n.task:hover .btn-svg, .todo-header:hover .btn-svg {\n  opacity: 0.6;\n}\n\n.title-projects-title {\n  font-weight: 600;\n}\n\ninput, .btn-svg, textarea {\n  border: none;\n  appearance: none;\n  outline: none;\n  background: none;\n}\n\ninput[type=\"checkbox\"], input[type=\"radio\"] {\n  position: absolute;\n  left: -100vw;\n}\n\ninput.list-title {\n  font-size: 1.2rem;\n}\n\n.list-title-container {\n  display: grid;\n  grid-template-columns: 25px 1fr repeat(3, 25px);\n  grid-template-rows: 30px;\n  align-items: start;\n  padding-top: 7px;\n  margin-bottom: 15px;\n}\n\n.task {\n  position: relative;\n  display: grid;\n  grid-template-columns: 1fr repeat(4, 25px);\n  grid-template-rows: 25px 17px 20px;\n  align-items: center;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid rgb(211, 211, 211, 0.4);\n}\n\n.todo-header:hover, .todo-body:hover {\n  cursor: pointer;\n}\n\n\n.task .task-check {\n  position: absolute;\n  left: -100vw;\n}\n\n.custom-checkbox {\n  --check: 20px;\n  display: inline-block;\n  height: var(--check);\n  width: var(--check);\n  margin-right: 12px;\n  border: 2px solid rgb(30, 144, 255);\n  background-color: rgb(30, 144, 255, 0.2);\n  border-radius: 50%;\n}\n\n.task label:hover .custom-checkbox {\n  transform: scale(1.1);\n}\n\n.task .task-check + label span.task-text {\n  position: relative;\n}\n\n.task .task-check:checked + label span.task-text:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  height: 2px;\n  background: rgb(70, 70, 70, 0.6);\n}\n\n.custom-checkbox svg {\n  opacity: 0;\n}\n\n.task .task-check:checked + label svg {\n  opacity: 1;\n}\n\n.task label {\n  display: flex;\n  align-items: center;\n  font-size: 0.9rem;\n}\n\n.task label:hover {\n  cursor: pointer;\n}\n\n.task-check {\n  appearance: auto;\n}\n\n.task-text {\n  font-size: 0.9rem;\n}\n\np.task-descr {\n  justify-self: start;\n  font-size: 0.8rem;\n  color: grey;\n  margin-left: 30px;\n}\n\np.task-descr:hover {\n  color: black;\n}\n\n\n.calendar-container {\n  grid-row: 3 / 4;\n  display: flex;\n  align-items: center;\n  margin-left: 28px;\n}\n\n.task-calendar {\n  font-size: 0.8rem;\n  color: grey;\n}\n\n.form-main {\n  padding: 8px 8px;\n  border: 1px solid rgb(200, 200, 200, 0.5);\n  border-radius: 8px;\n}\n\n.form-text {\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n\n.form-descr {\n  font-size: 0.8rem;\n  color: black;\n  resize: none;\n  margin-top: 5px;\n}\n\n.task-form button, .form-container {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  margin-right: 8px;\n  border: 1px solid var(--main-bd-color);\n  border-radius: var(--main-bd-radius);\n  background: none;\n  font-size: 0.8rem;\n  cursor: pointer;\n}\n\n.form-params {\n  display: flex;\n  justify-content: flex-start;\n}\n\n.form-project-container, .form-priority-container {\n  position: relative;\n}\n\nli.project-input {\n  /* display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 0; */\n}\n\ndiv.project-input, div.priority-input {\n  display: none;\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 200%;\n  border: 1px solid var(--main-bd-color);\n  border-radius: var(--main-bd-radius);\n  padding: 0;\n  background-color: white;\n  z-index: 5; \n}\n\ndiv.form-priority-container div.priority-input {\n  width: 400%;\n}\n\n.project-input .option, .priority-input .option {\n  font-size: 0.8rem;\n}\n\n.project-input .option:hover, .priority-input .option:hover {\n  background-color: rgb(245,245,245, 0.8);\n}\n\n.project-input label, .priority-input label {\n  padding: 5px 7px;\n}\n\n.form-save {\n  display: flex;\n  margin-top: 8px;\n  justify-content: flex-end;\n}\n\n.form-save button {\n  padding: 7px 12px;\n  border: none;\n  letter-spacing: 0.05rem;\n}\n\n.form-save button:last-child {\n  margin-right: 0;\n  background-color: var(--main-hd-color);\n  color: white;\n}\n\n.form-save button:last-child:hover {\n  background-color: var(--main-hd-color-hover);\n}\n\n.form-save button:first-child {\n  background-color: var(--btn-bg-color);\n}\n\n.form-save button:first-child:hover {\n  background-color: var(--btn-bg-color-hover);\n}\n\n.backdrop {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 3;\n  background-color: var(--main-bd-color);\n}\n\n.modal {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 5;\n  width: 60%;\n  padding: 15px;\n  border-radius: var(--main-bd-radius);\n  background: white;\n}\n\n.modal .form-main {\n  border: none;\n}\n\n.hidden {\n  display: none;\n}\n\n.btn-wrapper label {\n  display: block;\n  padding: 5px 7px;\n}\n\nlabel.btn-projects > *:not(.hidden), .project-input label, .priority-input label {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n\ninput[type=\"checkbox\"]:checked + .btn-wrapper label {\n  background-color: lightgrey;\n}\n\ninput[type=\"checkbox\"]:checked ~ div.project-input, input[type=\"checkbox\"]:checked ~ div.priority-input {\n  display: block;\n}\n\n.todo-bottom {\n  margin-top: 5px;\n}\n\n.btn-svg-bottom.add-task-bottom {\n  display: flex;\n  opacity: 1;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  background: none;\n  border: none;\n  font-size: 0.9rem;\n  color: grey;\n}\n\n.btn-svg-bottom.add-task-bottom span {\n  display: inline-block;\n  padding-top: 3px;\n}\n\n.btn-svg-bottom.add-task-bottom:hover span {\n  color: var(--main-hd-color);\n  cursor: pointer;\n}\n\n.svg-wrapper.add-task-bottom {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 12px;\n\n  color: var(--main-hd-color);\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n}\n\n.btn-svg-bottom.add-task-bottom:hover .svg-wrapper{\n  color: white;\n  background-color: var(--main-hd-color);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'Roboto';\n  src: url('./roboto-v30-latin-regular.woff2') format('woff2'),\n    url('./roboto-v30-latin-regular.woff') format('woff');\n  font-weight: 400;\n  font-style: normal;\n}\n\n:root {\n  --main-hd-color: rgb(255, 99, 71);\n  --main-hd-color-hover: rgb(220, 20, 60);\n  --main-bg-color: rgb(250,250,250);\n  --main-hv-color: rgb(222, 184, 135, 0.1);\n  --btn-bg-color: rgb(255,218,185);\n  --btn-bg-color-hover: rgb(239, 204, 174);\n  --main-bd-color: rgb(128, 128, 128, 0.5);\n  --main-bd-radius: 5px;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: 'Roboto', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\nli {\n  list-style: none;\n}\n\nbody {\n  display: grid;\n  align-content: start;\n  grid-template-columns: 325px 1fr;\n  grid-template-rows: 55px calc(100vh - 50px);\n  height: 100vh;\n}\n\nbody > * {\n  padding: 15px 3px 15px 35px;\n}\n\n.content-container {\n  padding-top: 30px;\n}\n\n.header-container {\n  background-color: var(--main-hd-color);\n\n}\n\n.header-container-left {\n  display: flex;\n  justify-content: space-between;\n  padding-left: 43px;\n  padding-right: 25px;\n}\n\nspan.text-italic {\n  font-style: italic;\n  color: var(--btn-bg-color-hover);\n}\n\n.todo-container, .header-container-right {\n  padding-left: 12%;\n  padding-right: 12%;\n}\n\n.header-container-right {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\nbutton.del-checked-task {\n  opacity: 0;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 4px 8px;\n  border-radius: var(--main-bd-radius);\n  border: 2px solid white;\n  background: rgb(255, 134, 112);\n  color: white;\n}\n\nbutton.del-checked-task:hover {\n  background-color: var(--main-hd-color-hover);\n  cursor: pointer;\n}\n\nspan.del-checked-task {\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n\n.header-btn-container {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.header-btn-container button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 40px;\n  width: 40px;\n  background: none;\n  border: none;\n  color: white;\n  border-radius: 5px;\n}\n\n.header-btn-container button:hover {\n  background: rgb(255, 255, 255, 0.3);\n  cursor: pointer;\n}\n\n.header-btn-container button div {\n  height: 30px;\n  width: 30px;\n}\n\n.projects-container {\n  background-color: var(--main-bg-color);\n}\n\n.projects-container label:hover {\n  background-color: var(--main-hv-color);\n  cursor: pointer;\n}\n\n.projects-container li:has(input:checked) {\n  background-color: rgb(222, 184, 135, 0.4);\n  border-radius: 5px;\n}\n\n.project, .title-projects-container {\n  display: grid;\n  grid-template-columns: 24px 1fr 30px;\n  align-items: center;\n  padding-top: 7px;\n  padding-bottom: 7px;\n  padding-left: 8px;\n  border-radius: 5px;\n}\n\nsvg.cross:hover {\n  background-color: var(--main-hv-color);\n  cursor: pointer;\n}\n\n.title-projects-container button.add {\n  padding-right: 17px;\n\n}\n\n.count, .title-projects-container button:last-child {\n  justify-self: end;\n  padding-right: 10px;\n  padding-right: 25px;\n  color: grey;\n  font-size: 0.8rem;\n}\n\n.title {\n  padding-left: 10px;\n}\n\n.title-projects-container {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.todo-container .btn-svg {\n  color: rgb(150, 150, 150);\n  border-radius: 3px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n}\n\n.todo-container .btn-svg:hover {\n  color: black;\n  background-color: rgb(220,220,220, 1);\n  cursor: pointer;\n}\n\n.task:hover .btn-svg, .todo-header:hover .btn-svg {\n  opacity: 0.6;\n}\n\n.title-projects-title {\n  font-weight: 600;\n}\n\ninput, .btn-svg, textarea {\n  border: none;\n  appearance: none;\n  outline: none;\n  background: none;\n}\n\ninput[type=\"checkbox\"], input[type=\"radio\"] {\n  position: absolute;\n  left: -100vw;\n}\n\ninput.list-title {\n  font-size: 1.2rem;\n}\n\n.list-title-container {\n  display: grid;\n  grid-template-columns: 25px 1fr repeat(3, 25px);\n  grid-template-rows: 30px;\n  align-items: start;\n  padding-top: 7px;\n  margin-bottom: 15px;\n}\n\n.task {\n  position: relative;\n  display: grid;\n  grid-template-columns: 1fr repeat(4, 25px);\n  grid-template-rows: 25px 17px 20px;\n  align-items: center;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid rgb(211, 211, 211, 0.4);\n}\n\n.todo-header:hover, .todo-body:hover {\n  cursor: pointer;\n}\n\n\n.task .task-check {\n  position: absolute;\n  left: -100vw;\n}\n\n.custom-checkbox {\n  --check: 20px;\n  display: inline-block;\n  height: var(--check);\n  width: var(--check);\n  margin-right: 12px;\n  border: 2px solid rgb(30, 144, 255);\n  background-color: rgb(30, 144, 255, 0.2);\n  border-radius: 50%;\n}\n\n.task label:hover .custom-checkbox {\n  transform: scale(1.1);\n}\n\n.task .task-check + label span.task-text {\n  position: relative;\n}\n\n.task .task-check:checked + label span.task-text:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  height: 2px;\n  background: rgb(70, 70, 70, 0.6);\n}\n\n.custom-checkbox svg {\n  opacity: 0;\n}\n\n.task .task-check:checked + label svg {\n  opacity: 1;\n}\n\n.task label {\n  display: flex;\n  align-items: center;\n  font-size: 0.9rem;\n}\n\n.task label:hover {\n  cursor: pointer;\n}\n\n.task-check {\n  appearance: auto;\n}\n\n.task-text {\n  font-size: 0.9rem;\n}\n\np.task-descr {\n  justify-self: start;\n  font-size: 0.8rem;\n  color: grey;\n  margin-left: 30px;\n}\n\np.task-descr:hover {\n  color: black;\n}\n\n\n.calendar-container {\n  grid-row: 3 / 4;\n  display: flex;\n  align-items: center;\n  margin-left: 28px;\n}\n\n.task-calendar {\n  font-size: 0.8rem;\n  color: grey;\n}\n\n.form-main {\n  padding: 8px 8px;\n  border: 1px solid rgb(200, 200, 200, 0.5);\n  border-radius: 8px;\n}\n\n.form-text {\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n\n.form-descr {\n  font-size: 0.8rem;\n  color: black;\n  resize: none;\n  margin-top: 5px;\n}\n\n.task-form button, .form-container {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  margin-right: 8px;\n  border: 1px solid var(--main-bd-color);\n  border-radius: var(--main-bd-radius);\n  background: none;\n  font-size: 0.8rem;\n  cursor: pointer;\n}\n\n.form-params {\n  display: flex;\n  justify-content: flex-start;\n}\n\n.form-project-container, .form-priority-container {\n  position: relative;\n}\n\nli.project-input {\n  /* display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 0; */\n}\n\ndiv.project-input, div.priority-input {\n  display: none;\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 200%;\n  border: 1px solid var(--main-bd-color);\n  border-radius: var(--main-bd-radius);\n  padding: 0;\n  background-color: white;\n  z-index: 5; \n}\n\ndiv.form-priority-container div.priority-input {\n  width: 400%;\n}\n\n.project-input .option, .priority-input .option {\n  font-size: 0.8rem;\n}\n\n.project-input .option:hover, .priority-input .option:hover {\n  background-color: rgb(245,245,245, 0.8);\n}\n\n.project-input label, .priority-input label {\n  padding: 5px 7px;\n}\n\n.form-save {\n  display: flex;\n  margin-top: 8px;\n  justify-content: flex-end;\n}\n\n.form-save button {\n  padding: 7px 12px;\n  border: none;\n  letter-spacing: 0.05rem;\n}\n\n.form-save button:last-child {\n  margin-right: 0;\n  background-color: var(--main-hd-color);\n  color: white;\n}\n\n.form-save button:last-child:hover {\n  background-color: var(--main-hd-color-hover);\n}\n\n.form-save button:first-child {\n  background-color: var(--btn-bg-color);\n}\n\n.form-save button:first-child:hover {\n  background-color: var(--btn-bg-color-hover);\n}\n\n.backdrop {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 3;\n  background-color: var(--main-bd-color);\n}\n\n.modal {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 5;\n  width: 60%;\n  padding: 15px;\n  border-radius: var(--main-bd-radius);\n  background: white;\n}\n\n.modal .form-main {\n  border: none;\n}\n\n.hidden {\n  display: none;\n}\n\n.btn-wrapper label {\n  display: block;\n  padding: 5px 7px;\n}\n\nlabel.btn-projects > *:not(.hidden), .project-input label, .priority-input label {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n\ninput[type=\"checkbox\"]:checked + .btn-wrapper label {\n  background-color: lightgrey;\n}\n\ninput[type=\"checkbox\"]:checked ~ div.project-input, input[type=\"checkbox\"]:checked ~ div.priority-input {\n  display: block;\n}\n\n.todo-bottom {\n  margin-top: 5px;\n}\n\n.btn-svg-bottom.add-task-bottom {\n  display: flex;\n  opacity: 1;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  background: none;\n  border: none;\n  font-size: 0.9rem;\n  color: grey;\n}\n\n.btn-svg-bottom.add-task-bottom span {\n  display: inline-block;\n  padding-top: 3px;\n}\n\n.btn-svg-bottom.add-task-bottom:hover span {\n  color: var(--main-hd-color);\n  cursor: pointer;\n}\n\n.svg-wrapper.add-task-bottom {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 12px;\n\n  color: var(--main-hd-color);\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n}\n\n.btn-svg-bottom.add-task-bottom:hover .svg-wrapper{\n  color: white;\n  background-color: var(--main-hd-color);\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _generate_html_lists__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generate-html-lists */ "./src/generate-html-lists.js");
/* harmony import */ var _selected_inbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selected-inbox */ "./src/selected-inbox.js");






const App = class {
  projects = [];
  constructor() {
    this.init();
  }

  init() {
    const inbox = new _project__WEBPACK_IMPORTED_MODULE_0__["default"]('inbox', '', '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="dodgerblue" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-inbox list-dot"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>');
    this.projects.push(inbox);
    const courses = new _project__WEBPACK_IMPORTED_MODULE_0__.PersonalProject('courses', 'seagreen');
    this.projects.push(courses);
    const enfants = new _project__WEBPACK_IMPORTED_MODULE_0__.PersonalProject('enfants', 'lightsalmon');
    this.projects.push(enfants);
    const travaux = new _project__WEBPACK_IMPORTED_MODULE_0__.PersonalProject('travaux', 'indigo');
    this.projects.push(travaux);
    const task1 = new _task__WEBPACK_IMPORTED_MODULE_1__["default"]('Réparer robinet', 'salle de bains', 0, 'travaux', 2);
    travaux.tasks.push(task1);
    const task2 = new _task__WEBPACK_IMPORTED_MODULE_1__["default"]('Déboucher l\'évier', 'acheter du produit', 0, 'travaux', 3);
    travaux.tasks.push(task2);
    const task3 = new _task__WEBPACK_IMPORTED_MODULE_1__["default"]('Arroser les plantes', 'Ne pas oublier l\'aloë vera', 0, 'travaux', 2);
    inbox.tasks.push(task3);
    const task4 = new _task__WEBPACK_IMPORTED_MODULE_1__["default"]('Prendre rdv chez le garagiste', 'Garage Vroum à Meudon, tél 06 55 55 55', 0, 'travaux', 1);
    inbox.tasks.push(task4);
  }
};


const app = new App();
document.addEventListener('click', _display__WEBPACK_IMPORTED_MODULE_2__["default"].bind(app));
_generate_html_lists__WEBPACK_IMPORTED_MODULE_3__.generateProjects.call(app);
_selected_inbox__WEBPACK_IMPORTED_MODULE_4__["default"].call(app);

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
/* harmony import */ var _generate_html_lists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generate-html-lists */ "./src/generate-html-lists.js");




let modifyFormDisplayed = false;

function display(e) {
  const backDrop = document.querySelector('.backdrop');
  const [activeProject] = [...document.querySelectorAll('input.sidebar-project')].filter(input => input.checked);
  const getActiveProject = (projectElSelector) => {
    const [activeProject] = [...document.querySelectorAll(projectElSelector)].filter(input => input.checked);
    const [project] = this.projects.filter(project => project.id === activeProject.dataset.id);
    return project;
  };


  const openDisplay = function(elToToggle, elToInsertTo, insertPosition, html) {
    elToToggle?.classList.toggle('hidden');
    elToInsertTo.insertAdjacentHTML(insertPosition, html);
  };

  const generateBtnLists = function(btnProjects, btnPriority) {
    _generate_html_lists__WEBPACK_IMPORTED_MODULE_2__.generateProjectsList.call(this, btnProjects);
    selectProjectBtn().selectedOption.call(this);
    _generate_html_lists__WEBPACK_IMPORTED_MODULE_2__.generatePriorityList.call(this, btnPriority);
  };

  const closeDisplay = function(elToToggle, elRemoveFrom, elToRemove) {
    elToToggle?.classList.toggle('hidden');
    elRemoveFrom.removeChild(elToRemove);
  };

  const setCircleCheckboxTask = function() {
    const allCircleSpans = document.querySelectorAll('span.custom-checkbox');
    const allTasks = getActiveProject('input.sidebar-project').tasks;
    console.log(allTasks);
    allCircleSpans.forEach((span, i) => {
      span.style.borderColor = allTasks[i]._priorityColor;
      span.style.backgroundColor = allTasks[i]._priorityBackgroundColor;
    });
  };
  
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
<input type="checkbox" class="btn-form" name="btn-projects" id="btn-projects">
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
<div class="project-input options-container">
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
<input type="checkbox" class="btn-form" data-id="" name="btn-priority" id="btn-priority">
<div class="btn-wrapper form-priority">
    <label class="btn-priority" for="btn-priority">
      <div class="btn-priority">
        <svg class="form-priority xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="crimson" stroke="crimson" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-flag">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>
        </svg>
        <span class="form-priority"></span>
      </div>
    </label>
</div>
<div class="priority-input options-container">
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

  const saveTaskInput = function(btn) {
    modifyFormDisplayed = false;
    e.preventDefault();
    const taskForm = btn.closest(`form.task-form`);
    const taskTextInput = taskForm.querySelector('input.form-text');
    const taskDescrInput = taskForm.querySelector('textarea.form-descr');
    const [taskProject] = [...taskForm.querySelectorAll('li.project-input input')].filter(input => input.checked);
    const [taskPriority] = [...taskForm.querySelectorAll('li.priority-input input')].filter(input => input.checked);
    const task = new _task__WEBPACK_IMPORTED_MODULE_1__["default"](taskTextInput.value, taskDescrInput.value, 0, taskProject.value, +taskPriority.value);
    console.log(task);
    return { task, taskProject };
  };

  const displayModifyTask = function() {
    const htmlFormModify = `<form class="task-form modify" id="task-modify">
    <div class="form-main">
    <div class="form-text">
    <input class="form-text" type="text" name="task-text" id="task-modify" value="Task" autofocus placeholder= "Tâche">
    </div>
    <div class="form-descr">
    <textarea class="form-descr" name="descr-1" id="descr-modify" cols="30" rows="4" placeholder= "Description">Descr</textarea>
    </div>
    <div class="form-params">
    <button type="button" class="form-date">
    <svg class="form-date" style="width:15px;height:15px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M19 3C20.11 3 21 3.89 21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.9 3 5 3H6V1H8V3H16V1H18V3H19M19 19V9H5V19H19M19 7V5H5V7H19M7 11H9V17H7V11" />
    </svg>
    <span class="form-date">19 oct</span>
    </button>
    <div class="form-project-container form-container">
    <input type="checkbox" class="btn-form" name="btn-projects" id="btn-projects">
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
    <div class="project-input options-container">
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
  <input type="checkbox" class="btn-form" name="btn-priority" id="btn-priority">
  <div class="btn-wrapper form-priority">
      <label class="btn-priority" for="btn-priority">
        <div class="btn-priority">
          <svg class="form-priority xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="crimson" stroke="crimson" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-flag">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>
          </svg>
          <span class="form-priority"></span>
        </div>
      </label>
  </div>
  <div class="priority-input options-container">
    <ul class="priority-input list">
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
    
    const cancelModifyForm = function() {
      const cancelBtn = e.target.closest('.modify button.cancel-new-task');
      if (!cancelBtn) return;
      cancelBtn && closeDisplay(document.querySelector('.modify').previousElementSibling, cancelBtn.closest('.task-wrapper'), document.querySelector('.modify'));
      modifyFormDisplayed = false;
    };

    const clickOutsideModifyForm = function() {
      const clickedForm = e.target.closest('.modify');
      const modifyBtnOfTask = e.target.closest('.task-wrapper')?.querySelector('.task.hidden');
      const anyModifyBtn = e.target.closest('button.edit-task');
      const saveBtn = e.target.closest('.modify button.save-new-task');
      const cancelBtn = e.target.closest('.modify button.cancel-new-task');
      if (!modifyFormDisplayed || saveBtn || cancelBtn || clickedForm || modifyBtnOfTask) return;
      console.log('wop')
      closeDisplay(document.querySelector('.modify').previousElementSibling, document.querySelector('.modify').closest('.task-wrapper'), document.querySelector('.modify'));
      modifyFormDisplayed = false;
      if (anyModifyBtn) displayFormModify.call(this);
    };
  
    const saveModifiedTask = function() {
      const saveBtn = e.target.closest('.modify button.save-new-task');
      if (!saveBtn) return;
      const { task, taskProject} = saveTaskInput(saveBtn);
      const taskEl = saveBtn.closest('.modify').previousElementSibling;
      const [projectIndex, taskIndex] = findTask.call(this, taskEl);
      this.projects[projectIndex].tasks.splice(taskIndex, 1);
      this.projects.forEach(project => project._projectName === taskProject.value && project.tasks.splice(taskIndex, 0, task));
      _generate_html_lists__WEBPACK_IMPORTED_MODULE_2__.generateProjects.call(this);
      closeDisplay(taskEl, taskEl.closest('.task-wrapper'), document.querySelector('.modify'));
      _generate_html_lists__WEBPACK_IMPORTED_MODULE_2__.generateTasks.call(this);
      setCircleCheckboxTask.call(this);
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

    const displayFormModifyGeneric = function(task) {
        openDisplay(task, task, 'afterend', htmlFormModify);
        generateBtnLists.call(this, document.querySelector('.modify ul.project-input'), document.querySelector('.modify ul.priority-input'));
        selectedPriorityModify.call(this);
        generateModifyTaskContent.call(this, task);
        modifyFormDisplayed = true;
      };
  
    const displayFormModify = function() {
      const btnEdit = e.target.closest('.edit-task');
      if (!btnEdit || modifyFormDisplayed) return;
      const task = btnEdit.closest('.task');
      displayFormModifyGeneric.call(this, task);
    };
    
    displayFormModify.call(this);
    saveModifiedTask.call(this);
    cancelModifyForm();
    clickOutsideModifyForm.call(this);
  };
  
  const displayNewTask = function() {
    const displayNewTaskModal = function() {
      if (!e.target.closest('button.add-task')) return;
      openDisplay(backDrop, backDrop, 'beforeend', htmlNewFormModal);
      generateBtnLists.call(this, document.querySelector('.modal ul.project-input'), document.querySelector('ul.priority-input'));
      selectedPriorityModal();
    };
  
    const cancelModal = function() {
      const [checkedFormBtn] = [...document.querySelectorAll('input.btn-form')].filter(btn => btn.checked);
      const outsideModal = e.target.closest('.backdrop');
      const cancelBtn = e.target.closest('.modal button.cancel-new-task');
      cancelBtn && closeDisplay(backDrop, backDrop, document.querySelector('.modal'));
      if (!outsideModal || e.target.closest('.modal') || checkedFormBtn) return;
      closeDisplay(backDrop, backDrop, document.querySelector('.modal'));
    };

    function clickOutside() {
      const backdrop = e.target.closest('.backdrop');
      const formContainer = e.target.closest('.form-container');
      if (formContainer || !backdrop) return;
      const checkedFormBtn = [...document.querySelectorAll('input.btn-form')].filter(btn => btn.checked);
      if (checkedFormBtn || !formContainer) {
        checkedFormBtn.forEach(btn => btn.checked = false);
      };
    };

    const saveTask = function() {
      const saveBtn = e.target.closest('.modal button.save-new-task');
      if (!e.target.closest('.modal button.save-new-task')) return;
      const { task, taskProject} = saveTaskInput(saveBtn);
      this.projects.forEach(project => project._projectName === taskProject.value && project.tasks.push(task));
      _generate_html_lists__WEBPACK_IMPORTED_MODULE_2__.generateProjects.call(this);
      closeDisplay(backDrop, backDrop, document.querySelector('.modal'));
      _generate_html_lists__WEBPACK_IMPORTED_MODULE_2__.generateTasks.call(this);
      setCircleCheckboxTask.call(this);
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
  
  const selectMenuOption = function(option, btn, fn, fnArg) {
    if (option && option.checked) {
      fn(fnArg);
      btn.checked = false;          
    };
  };

  const selectProjectBtn = function() {
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

    const selectOption = function() {
      const checkedProject = e.target.closest('input[type="radio"].project-option');
      if (!e.target.closest('input[type="radio"].project-option')) return;
      selectMenuOption(checkedProject, document.querySelector('input#btn-projects'), setProjectOptionsButton, getActiveProject('.project-option'));
    };

    return {selectedOption, selectOption};
  };

  const setPriorityOptionsButton = function(svgOption) {
    const svg = document.querySelector('svg.form-priority');
    svg.setAttribute('fill', svgOption.getAttribute('fill'));
    svg.setAttribute('stroke', svgOption.getAttribute('stroke'));
  };

  const selectedPriorityModify = function() {
    const svg = document.querySelector('svg.form-priority');
    const [projectIndex, taskIndex] = findTask.call(this, document.querySelector('.modify').previousElementSibling);
    console.log(projectIndex, taskIndex);
    const priority = this.projects[projectIndex].tasks[taskIndex]._priority;
    switch (priority) {
      case 1:
        svg.setAttribute('fill', 'crimson');
        svg.setAttribute('stroke', 'crimson');
        break;
      case 2:
        svg.setAttribute('fill', 'darkorange');
        svg.setAttribute('stroke', 'darkorange');
        break;
      case 3:
        svg.setAttribute('fill', 'cornflowerblue');
        svg.setAttribute('stroke', 'cornflowerblue');
        break;
      case 4:
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', 'black');
        break;
    }
    const [activeOption] = [...document.querySelectorAll('input[type="radio"].priority-option')].filter(input => +input.value === priority);
    activeOption.checked = true;
  };

  function selectedPriorityModal() {
    document.querySelector('input#priority-1').checked = true;
  }

  const selectPriority = function() {
    const checkedPriority = e.target.closest('input[type="radio"].priority-option');
    if (!checkedPriority) return;
    selectMenuOption(checkedPriority, document.querySelector('input#btn-priority'), setPriorityOptionsButton, checkedPriority.closest('li').querySelector('svg'));
  };

  const selectProject = function() {    
    const projectInput = e.target.closest('input.sidebar-project');
    if (!projectInput) return;
    const projectLabel = projectInput.nextElementSibling;
    const svg = projectLabel.querySelector('svg');
    
    function displaySelectedProject() {
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
      displaySelectedProject();
      _generate_html_lists__WEBPACK_IMPORTED_MODULE_2__.generateTasks.call(this);
      setCircleCheckboxTask.call(this);
    };
  };

  const checkMultipleDropdown = function() {
    const checkedFormBtn = [...document.querySelectorAll('input.btn-form')].filter(btn => btn.checked);
    if (checkedFormBtn.length > 1) {
      checkedFormBtn.forEach(btn => btn.checked = false);
      const formBtn = e.target.closest('input.btn-form');
      if (!formBtn) return;
      formBtn.checked = true;
    }
  };

  const taskActions = function() {
    const moveTask = function() {
      const btn = e.target.closest('button.move');
      if (!btn) return;
      const taskEl = btn.closest('.task');
      const [projectIndex, taskIndex] = findTask.call(this, taskEl);
      const [clickedTask] = this.projects[projectIndex].tasks.splice(taskIndex, 1);
      btn.classList.contains('move-up') ? this.projects[projectIndex].tasks.splice(taskIndex -1, 0, clickedTask) : this.projects[projectIndex].tasks.splice(taskIndex + 1, 0, clickedTask);
      _generate_html_lists__WEBPACK_IMPORTED_MODULE_2__.generateTasks.call(this);
      setCircleCheckboxTask.call(this);
    };

    const deleteTask = function() {
      const btn = e.target.closest('button.del-task');
      if (!btn) return;
      const taskEl = btn.closest('.task');
      const [projectIndex, taskIndex] = findTask.call(this, taskEl);
      this.projects[projectIndex].tasks.splice(taskIndex, 1);
      _generate_html_lists__WEBPACK_IMPORTED_MODULE_2__.generateTasks.call(this);
      setCircleCheckboxTask.call(this);
      _generate_html_lists__WEBPACK_IMPORTED_MODULE_2__.generateProjects.call(this);
    };

    const deleteStrikethrough = function() {
      const task = e.target.closest('.task-check');
      if(!task) return;
      const delCheckedBtn = document.querySelector('button.del-checked-task');
      const checkTasksArray = [...document.querySelectorAll('.task-check')].filter(task => task.checked);
      console.log(delCheckedBtn);
      if (checkTasksArray) delCheckedBtn.style.setAttribute('opacity', 1);
      // if (e.target.closest(delCheckedBtn))
      [...document.querySelectorAll('.task-check')].filter(task => task.checked).map(task => findTask.call(this, task)).forEach(iArray => this.projects[iArray[0]].tasks.splice(iArray[1], 1));
    }

    moveTask.call(this);
    deleteTask.call(this);
    deleteStrikethrough.call(this);
  }

  
  displayModifyTask.call(this);
  displayNewTask.call(this);
  selectProjectBtn().selectOption.call(this);
  selectPriority.call(this);
  checkMultipleDropdown();
  selectProject.call(this);
  taskActions.call(this);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);

/***/ }),

/***/ "./src/generate-html-lists.js":
/*!************************************!*\
  !*** ./src/generate-html-lists.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generatePriorityList": () => (/* binding */ generatePriorityList),
/* harmony export */   "generateProjects": () => (/* binding */ generateProjects),
/* harmony export */   "generateProjectsList": () => (/* binding */ generateProjectsList),
/* harmony export */   "generateTasks": () => (/* binding */ generateTasks)
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

const generateTasks = function() {
  const [selectedProject] = [...document.querySelectorAll('input.sidebar-project')].filter(input => input.checked);
  document.querySelectorAll('.task-wrapper').forEach(task => document.querySelector('.tasks-container').removeChild(task));
  const [project] = this.projects.filter(project => project.id === selectedProject.dataset.id);
  console.log(this.projects);
  project.tasks.forEach((task, index) => {
    const html = `
    <div class="task-wrapper">
      <div class="task" id="task-${index}" data-id=${task.id}>
        <input class="task-check" type="checkbox" id="check-${index}" data-id=${task.id}>
        <label class="task-label" for="check-${index}">
          <span class="custom-checkbox">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill=${task._priorityColorName} stroke=${task._priorityColorName} stroke-width="3" stroke-linecap="square" stroke-linejoin="sqaure" class="feather feather-check"><polyline points="20 6 9 17 4 12"/></svg>
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
    </div>
    `;
    document.querySelector('.tasks-container').insertAdjacentHTML('beforeend', html);
  });  
};


function generateProjectsList(element) {
  const projectList = element;
  if (projectList.contains(document.querySelector('li.personal'))) return;
  this.projects.forEach((project, index) => {
    if (index > 0) {
      const projectHtml = `
      <li class="project-input option personal" data-id=${project.id}>
        <input class="project-option"type="radio" name="project-option" data-id = "${project.id}" id="project-${index}" value=${project._projectName}>
        <label for="project-${index}">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill=${project._color} stroke=${project._color} class="feather feather-circle">
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

function generatePriorityList(element) {
  const projectList = element;
  if (projectList.contains(document.querySelector('li.priority-item'))) return;
  for (let i = 1; i < 5; i++) {
    let html = `
      <li class="priority-input option priority-item" data-id="">
        <input class="priority-option" type="radio" name="priority-option" data-id = "" id="priority-${i}" value="${i}">
        <label for="priority-${i}">
          <svg class="priority-option xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="crimson" stroke="crimson" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-flag">
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>
          </svg>
          <span class="priority-input option">Priority ${i}</span>
        </label>
      </li>
      `;
    if (i === 2) html = html.replaceAll("crimson", "darkorange");
    if (i === 3) html = html.replaceAll("crimson", "cornflowerblue");
    if (i === 4) {
      html = html
        .replace('fill="crimson"', 'fill="none"')
        .replace('stroke="crimson"', 'stroke="black"');
    };

    projectList.insertAdjacentHTML('beforeend', html);
  };
};




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

/***/ "./src/selected-inbox.js":
/*!*******************************!*\
  !*** ./src/selected-inbox.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _generate_html_lists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generate-html-lists */ "./src/generate-html-lists.js");


const setCircleCheckboxTask = function() {
  const allCircleSpans = document.querySelectorAll('span.custom-checkbox');
  const allTasks = this.projects[0].tasks;
  console.log(allTasks);
  allCircleSpans.forEach((span, i) => {
    span.style.borderColor = allTasks[i]._priorityColor;
    span.style.backgroundColor = allTasks[i]._priorityBackgroundColor;
  });
};

const selectedInbox = function() {
  const projectInput = document.querySelector('input#sidebar-inbox');
  const projectLabel = projectInput.nextElementSibling;
  const svg = projectLabel.querySelector('svg');
  
  function displaySelectedProject() {
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
    displaySelectedProject.call(this);
    _generate_html_lists__WEBPACK_IMPORTED_MODULE_0__.generateTasks.call(this);
    setCircleCheckboxTask.call(this);
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selectedInbox);

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
  constructor(taskName="Task", descr="Description", deadline, project, priority=4) {
    this.id = taskName.replace(/\s/g, '' ).slice(-5) + (Date.now() + '').slice(-10);
    this._taskName = taskName;
    this._descr = descr;
    this._deadline = deadline;
    this._project = project;
    this._priority = priority;
    this.message();
    this.setPriorityColor();
    this.setPriorityColorName();
    this.setPriorityBackgroundColor();
  }
  
  message() {
    console.log('New Task created')
  }

  setPriorityColor() {
    if (this._priority === 1) this._priorityColor = 'rgb(220, 20, 60)';
    if (this._priority === 2) this._priorityColor = 'rgb(255, 140, 0)';
    if (this._priority === 3) this._priorityColor = 'rgb(100, 149, 237)';
    if (this._priority === 4) this._priorityColor = 'rgb(175, 175, 175)';
  }

  setPriorityColorName() {
    if (this._priority === 1) this._priorityColorName = 'crimson';
    if (this._priority === 2) this._priorityColorName = 'darkorange';
    if (this._priority === 3) this._priorityColorName = 'cornflowerblue';
    if (this._priority === 4) this._priorityColorName = 'darkgray';
  }

  setPriorityBackgroundColor() {
    if (this._priority === 1) this._priorityBackgroundColor = 'rgb(220, 20, 60, 0.2)';
    if (this._priority === 2) this._priorityBackgroundColor = 'rgb(255, 140, 0, 0.2)';
    if (this._priority === 3) this._priorityBackgroundColor = 'rgb(100, 149, 237, 0.2)';
    if (this._priority === 4) this._priorityBackgroundColor = 'rgb(175, 175, 175, 0.2)';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsUUFBUSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsbUJBQW1CO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx1RUFBcUI7QUFDM0I7QUFDQSxNQUFNLG9FQUFrQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsbUJBQW1CO0FBQ2pDO0FBQ0EsTUFBTSx1RUFBcUI7QUFDM0I7QUFDQSxNQUFNLG9FQUFrQjtBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFLE1BQU0sZ0JBQWdCLHFCQUFxQjtBQUN2SCxxSEFBcUgsZ0JBQWdCO0FBQ3JJLGdFQUFnRSxzQ0FBc0MsRUFBRSw0Q0FBNEM7QUFDcEo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvZ2VuZXJhdGUtaHRtbC1saXN0cy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvc2VsZWN0ZWQtaW5ib3guanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vcm9ib3RvLXYzMC1sYXRpbi1yZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9yb2JvdG8tdjMwLWxhdGluLXJlZ3VsYXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLW1haW4taGQtY29sb3I6IHJnYigyNTUsIDk5LCA3MSk7XFxuICAtLW1haW4taGQtY29sb3ItaG92ZXI6IHJnYigyMjAsIDIwLCA2MCk7XFxuICAtLW1haW4tYmctY29sb3I6IHJnYigyNTAsMjUwLDI1MCk7XFxuICAtLW1haW4taHYtY29sb3I6IHJnYigyMjIsIDE4NCwgMTM1LCAwLjEpO1xcbiAgLS1idG4tYmctY29sb3I6IHJnYigyNTUsMjE4LDE4NSk7XFxuICAtLWJ0bi1iZy1jb2xvci1ob3ZlcjogcmdiKDIzOSwgMjA0LCAxNzQpO1xcbiAgLS1tYWluLWJkLWNvbG9yOiByZ2IoMTI4LCAxMjgsIDEyOCwgMC41KTtcXG4gIC0tbWFpbi1iZC1yYWRpdXM6IDVweDtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMjVweCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDU1cHggY2FsYygxMDB2aCAtIDUwcHgpO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYm9keSA+ICoge1xcbiAgcGFkZGluZzogMTVweCAzcHggMTVweCAzNXB4O1xcbn1cXG5cXG4uY29udGVudC1jb250YWluZXIge1xcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4taGQtY29sb3IpO1xcblxcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lci1sZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nLWxlZnQ6IDQzcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xcbn1cXG5cXG5zcGFuLnRleHQtaXRhbGljIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGNvbG9yOiB2YXIoLS1idG4tYmctY29sb3ItaG92ZXIpO1xcbn1cXG5cXG4udG9kby1jb250YWluZXIsIC5oZWFkZXItY29udGFpbmVyLXJpZ2h0IHtcXG4gIHBhZGRpbmctbGVmdDogMTIlO1xcbiAgcGFkZGluZy1yaWdodDogMTIlO1xcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lci1yaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbi5kZWwtY2hlY2tlZC10YXNrIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTJweDtcXG4gIHBhZGRpbmc6IDRweCA4cHg7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tYWluLWJkLXJhZGl1cyk7XFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDEzNCwgMTEyKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuYnV0dG9uLmRlbC1jaGVja2VkLXRhc2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1oZC1jb2xvci1ob3Zlcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbnNwYW4uZGVsLWNoZWNrZWQtdGFzayB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5oZWFkZXItYnRuLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXItYnRuLWNvbnRhaW5lciBidXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmhlYWRlci1idG4tY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhlYWRlci1idG4tY29udGFpbmVyIGJ1dHRvbiBkaXYge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcblxcbi5wcm9qZWN0cy1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxufVxcblxcbi5wcm9qZWN0cy1jb250YWluZXIgbGFiZWw6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1odi1jb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0cy1jb250YWluZXIgbGk6aGFzKGlucHV0OmNoZWNrZWQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjIsIDE4NCwgMTM1LCAwLjQpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ucHJvamVjdCwgLnRpdGxlLXByb2plY3RzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNHB4IDFmciAzMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiA3cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogN3B4O1xcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbnN2Zy5jcm9zczpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWh2LWNvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRpdGxlLXByb2plY3RzLWNvbnRhaW5lciBidXR0b24uYWRkIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDE3cHg7XFxuXFxufVxcblxcbi5jb3VudCwgLnRpdGxlLXByb2plY3RzLWNvbnRhaW5lciBidXR0b246bGFzdC1jaGlsZCB7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xcbiAgY29sb3I6IGdyZXk7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuLnRpdGxlLXByb2plY3RzLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4udG9kby1jb250YWluZXIgLmJ0bi1zdmcge1xcbiAgY29sb3I6IHJnYigxNTAsIDE1MCwgMTUwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4udG9kby1jb250YWluZXIgLmJ0bi1zdmc6aG92ZXIge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMCwyMjAsMjIwLCAxKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2s6aG92ZXIgLmJ0bi1zdmcsIC50b2RvLWhlYWRlcjpob3ZlciAuYnRuLXN2ZyB7XFxuICBvcGFjaXR5OiAwLjY7XFxufVxcblxcbi50aXRsZS1wcm9qZWN0cy10aXRsZSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG5pbnB1dCwgLmJ0bi1zdmcsIHRleHRhcmVhIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSwgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAtMTAwdnc7XFxufVxcblxcbmlucHV0Lmxpc3QtdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5saXN0LXRpdGxlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNXB4IDFmciByZXBlYXQoMywgMjVweCk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwcHg7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBwYWRkaW5nLXRvcDogN3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLnRhc2sge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIHJlcGVhdCg0LCAyNXB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjVweCAxN3B4IDIwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDhweDtcXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIxMSwgMjExLCAyMTEsIDAuNCk7XFxufVxcblxcbi50b2RvLWhlYWRlcjpob3ZlciwgLnRvZG8tYm9keTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi50YXNrIC50YXNrLWNoZWNrIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IC0xMDB2dztcXG59XFxuXFxuLmN1c3RvbS1jaGVja2JveCB7XFxuICAtLWNoZWNrOiAyMHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiB2YXIoLS1jaGVjayk7XFxuICB3aWR0aDogdmFyKC0tY2hlY2spO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDMwLCAxNDQsIDI1NSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzAsIDE0NCwgMjU1LCAwLjIpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4udGFzayBsYWJlbDpob3ZlciAuY3VzdG9tLWNoZWNrYm94IHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLnRhc2sgLnRhc2stY2hlY2sgKyBsYWJlbCBzcGFuLnRhc2stdGV4dCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50YXNrIC50YXNrLWNoZWNrOmNoZWNrZWQgKyBsYWJlbCBzcGFuLnRhc2stdGV4dDphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogNTAlO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBiYWNrZ3JvdW5kOiByZ2IoNzAsIDcwLCA3MCwgMC42KTtcXG59XFxuXFxuLmN1c3RvbS1jaGVja2JveCBzdmcge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnRhc2sgLnRhc2stY2hlY2s6Y2hlY2tlZCArIGxhYmVsIHN2ZyB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udGFzayBsYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4udGFzayBsYWJlbDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWNoZWNrIHtcXG4gIGFwcGVhcmFuY2U6IGF1dG87XFxufVxcblxcbi50YXNrLXRleHQge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbnAudGFzay1kZXNjciB7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBjb2xvcjogZ3JleTtcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbn1cXG5cXG5wLnRhc2stZGVzY3I6aG92ZXIge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5cXG4uY2FsZW5kYXItY29udGFpbmVyIHtcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDI4cHg7XFxufVxcblxcbi50YXNrLWNhbGVuZGFyIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgY29sb3I6IGdyZXk7XFxufVxcblxcbi5mb3JtLW1haW4ge1xcbiAgcGFkZGluZzogOHB4IDhweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMDAsIDIwMCwgMjAwLCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4uZm9ybS10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmZvcm0tZGVzY3Ige1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBjb2xvcjogYmxhY2s7XFxuICByZXNpemU6IG5vbmU7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbi50YXNrLWZvcm0gYnV0dG9uLCAuZm9ybS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDNweDtcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWFpbi1iZC1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tYWluLWJkLXJhZGl1cyk7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mb3JtLXBhcmFtcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uZm9ybS1wcm9qZWN0LWNvbnRhaW5lciwgLmZvcm0tcHJpb3JpdHktY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxubGkucHJvamVjdC1pbnB1dCB7XFxuICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbiAgcGFkZGluZzogMDsgKi9cXG59XFxuXFxuZGl2LnByb2plY3QtaW5wdXQsIGRpdi5wcmlvcml0eS1pbnB1dCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMDAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgd2lkdGg6IDIwMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tYWluLWJkLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1haW4tYmQtcmFkaXVzKTtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHotaW5kZXg6IDU7IFxcbn1cXG5cXG5kaXYuZm9ybS1wcmlvcml0eS1jb250YWluZXIgZGl2LnByaW9yaXR5LWlucHV0IHtcXG4gIHdpZHRoOiA0MDAlO1xcbn1cXG5cXG4ucHJvamVjdC1pbnB1dCAub3B0aW9uLCAucHJpb3JpdHktaW5wdXQgLm9wdGlvbiB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLnByb2plY3QtaW5wdXQgLm9wdGlvbjpob3ZlciwgLnByaW9yaXR5LWlucHV0IC5vcHRpb246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwyNDUsMjQ1LCAwLjgpO1xcbn1cXG5cXG4ucHJvamVjdC1pbnB1dCBsYWJlbCwgLnByaW9yaXR5LWlucHV0IGxhYmVsIHtcXG4gIHBhZGRpbmc6IDVweCA3cHg7XFxufVxcblxcbi5mb3JtLXNhdmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5mb3JtLXNhdmUgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDdweCAxMnB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVyZW07XFxufVxcblxcbi5mb3JtLXNhdmUgYnV0dG9uOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1oZC1jb2xvcik7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5mb3JtLXNhdmUgYnV0dG9uOmxhc3QtY2hpbGQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1oZC1jb2xvci1ob3Zlcik7XFxufVxcblxcbi5mb3JtLXNhdmUgYnV0dG9uOmZpcnN0LWNoaWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0bi1iZy1jb2xvcik7XFxufVxcblxcbi5mb3JtLXNhdmUgYnV0dG9uOmZpcnN0LWNoaWxkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0bi1iZy1jb2xvci1ob3Zlcik7XFxufVxcblxcbi5iYWNrZHJvcCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICB6LWluZGV4OiAzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZC1jb2xvcik7XFxufVxcblxcbi5tb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgei1pbmRleDogNTtcXG4gIHdpZHRoOiA2MCU7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbWFpbi1iZC1yYWRpdXMpO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbi5tb2RhbCAuZm9ybS1tYWluIHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYnRuLXdyYXBwZXIgbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiA1cHggN3B4O1xcbn1cXG5cXG5sYWJlbC5idG4tcHJvamVjdHMgPiAqOm5vdCguaGlkZGVuKSwgLnByb2plY3QtaW5wdXQgbGFiZWwsIC5wcmlvcml0eS1pbnB1dCBsYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogM3B4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyAuYnRuLXdyYXBwZXIgbGFiZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgfiBkaXYucHJvamVjdC1pbnB1dCwgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkIH4gZGl2LnByaW9yaXR5LWlucHV0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4udG9kby1ib3R0b20ge1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG4uYnRuLXN2Zy1ib3R0b20uYWRkLXRhc2stYm90dG9tIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBvcGFjaXR5OiAxO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBjb2xvcjogZ3JleTtcXG59XFxuXFxuLmJ0bi1zdmctYm90dG9tLmFkZC10YXNrLWJvdHRvbSBzcGFuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmctdG9wOiAzcHg7XFxufVxcblxcbi5idG4tc3ZnLWJvdHRvbS5hZGQtdGFzay1ib3R0b206aG92ZXIgc3BhbiB7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1oZC1jb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zdmctd3JhcHBlci5hZGQtdGFzay1ib3R0b20ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1yaWdodDogMTJweDtcXG5cXG4gIGNvbG9yOiB2YXIoLS1tYWluLWhkLWNvbG9yKTtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uYnRuLXN2Zy1ib3R0b20uYWRkLXRhc2stYm90dG9tOmhvdmVyIC5zdmctd3JhcHBlcntcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4taGQtY29sb3IpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCOzBEQUN1RDtFQUN2RCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLHVDQUF1QztFQUN2QyxpQ0FBaUM7RUFDakMsd0NBQXdDO0VBQ3hDLGdDQUFnQztFQUNoQyx3Q0FBd0M7RUFDeEMsd0NBQXdDO0VBQ3hDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtFQUNWLHNFQUFzRTtBQUN4RTs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsZ0NBQWdDO0VBQ2hDLDJDQUEyQztFQUMzQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQ0FBc0M7O0FBRXhDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLG9DQUFv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QUFRO0VBQ1IsTUFBTTtFQUNOLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLFVBQVU7RUFDVixVQUFVO0VBQ1YsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCOztFQUVsQiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osc0NBQXNDO0FBQ3hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgc3JjOiB1cmwoJy4vcm9ib3RvLXYzMC1sYXRpbi1yZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICB1cmwoJy4vcm9ib3RvLXYzMC1sYXRpbi1yZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbjpyb290IHtcXG4gIC0tbWFpbi1oZC1jb2xvcjogcmdiKDI1NSwgOTksIDcxKTtcXG4gIC0tbWFpbi1oZC1jb2xvci1ob3ZlcjogcmdiKDIyMCwgMjAsIDYwKTtcXG4gIC0tbWFpbi1iZy1jb2xvcjogcmdiKDI1MCwyNTAsMjUwKTtcXG4gIC0tbWFpbi1odi1jb2xvcjogcmdiKDIyMiwgMTg0LCAxMzUsIDAuMSk7XFxuICAtLWJ0bi1iZy1jb2xvcjogcmdiKDI1NSwyMTgsMTg1KTtcXG4gIC0tYnRuLWJnLWNvbG9yLWhvdmVyOiByZ2IoMjM5LCAyMDQsIDE3NCk7XFxuICAtLW1haW4tYmQtY29sb3I6IHJnYigxMjgsIDEyOCwgMTI4LCAwLjUpO1xcbiAgLS1tYWluLWJkLXJhZGl1czogNXB4O1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxubGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24tY29udGVudDogc3RhcnQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMyNXB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTVweCBjYWxjKDEwMHZoIC0gNTBweCk7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5ib2R5ID4gKiB7XFxuICBwYWRkaW5nOiAxNXB4IDNweCAxNXB4IDM1cHg7XFxufVxcblxcbi5jb250ZW50LWNvbnRhaW5lciB7XFxuICBwYWRkaW5nLXRvcDogMzBweDtcXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1oZC1jb2xvcik7XFxuXFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyLWxlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmctbGVmdDogNDNweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XFxufVxcblxcbnNwYW4udGV4dC1pdGFsaWMge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgY29sb3I6IHZhcigtLWJ0bi1iZy1jb2xvci1ob3Zlcik7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciwgLmhlYWRlci1jb250YWluZXItcmlnaHQge1xcbiAgcGFkZGluZy1sZWZ0OiAxMiU7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMiU7XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyLXJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuYnV0dG9uLmRlbC1jaGVja2VkLXRhc2sge1xcbiAgb3BhY2l0eTogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMnB4O1xcbiAgcGFkZGluZzogNHB4IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1haW4tYmQtcmFkaXVzKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMTM0LCAxMTIpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5idXR0b24uZGVsLWNoZWNrZWQtdGFzazpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWhkLWNvbG9yLWhvdmVyKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuc3Bhbi5kZWwtY2hlY2tlZC10YXNrIHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmhlYWRlci1idG4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlci1idG4tY29udGFpbmVyIGJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDQwcHg7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uaGVhZGVyLWJ0bi1jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGVhZGVyLWJ0bi1jb250YWluZXIgYnV0dG9uIGRpdiB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRhaW5lciBsYWJlbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWh2LWNvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRhaW5lciBsaTpoYXMoaW5wdXQ6Y2hlY2tlZCkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMiwgMTg0LCAxMzUsIDAuNCk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0LCAudGl0bGUtcHJvamVjdHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI0cHggMWZyIDMwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDdweDtcXG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuc3ZnLmNyb3NzOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4taHYtY29sb3IpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGl0bGUtcHJvamVjdHMtY29udGFpbmVyIGJ1dHRvbi5hZGQge1xcbiAgcGFkZGluZy1yaWdodDogMTdweDtcXG5cXG59XFxuXFxuLmNvdW50LCAudGl0bGUtcHJvamVjdHMtY29udGFpbmVyIGJ1dHRvbjpsYXN0LWNoaWxkIHtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XFxuICBjb2xvcjogZ3JleTtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4udGl0bGUtcHJvamVjdHMtY29udGFpbmVyIHtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciAuYnRuLXN2ZyB7XFxuICBjb2xvcjogcmdiKDE1MCwgMTUwLCAxNTApO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciAuYnRuLXN2Zzpob3ZlciB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIwLDIyMCwyMjAsIDEpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzazpob3ZlciAuYnRuLXN2ZywgLnRvZG8taGVhZGVyOmhvdmVyIC5idG4tc3ZnIHtcXG4gIG9wYWNpdHk6IDAuNjtcXG59XFxuXFxuLnRpdGxlLXByb2plY3RzLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbmlucHV0LCAuYnRuLXN2ZywgdGV4dGFyZWEge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLCBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IC0xMDB2dztcXG59XFxuXFxuaW5wdXQubGlzdC10aXRsZSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmxpc3QtdGl0bGUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1cHggMWZyIHJlcGVhdCgzLCAyNXB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMzBweDtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIHBhZGRpbmctdG9wOiA3cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4udGFzayB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgcmVwZWF0KDQsIDI1cHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyNXB4IDE3cHggMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogOHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDhweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjExLCAyMTEsIDIxMSwgMC40KTtcXG59XFxuXFxuLnRvZG8taGVhZGVyOmhvdmVyLCAudG9kby1ib2R5OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLnRhc2sgLnRhc2stY2hlY2sge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogLTEwMHZ3O1xcbn1cXG5cXG4uY3VzdG9tLWNoZWNrYm94IHtcXG4gIC0tY2hlY2s6IDIwcHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IHZhcigtLWNoZWNrKTtcXG4gIHdpZHRoOiB2YXIoLS1jaGVjayk7XFxuICBtYXJnaW4tcmlnaHQ6IDEycHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMzAsIDE0NCwgMjU1KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzMCwgMTQ0LCAyNTUsIDAuMik7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi50YXNrIGxhYmVsOmhvdmVyIC5jdXN0b20tY2hlY2tib3gge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4udGFzayAudGFzay1jaGVjayArIGxhYmVsIHNwYW4udGFzay10ZXh0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRhc2sgLnRhc2stY2hlY2s6Y2hlY2tlZCArIGxhYmVsIHNwYW4udGFzay10ZXh0OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiA1MCU7XFxuICBoZWlnaHQ6IDJweDtcXG4gIGJhY2tncm91bmQ6IHJnYig3MCwgNzAsIDcwLCAwLjYpO1xcbn1cXG5cXG4uY3VzdG9tLWNoZWNrYm94IHN2ZyB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4udGFzayAudGFzay1jaGVjazpjaGVja2VkICsgbGFiZWwgc3ZnIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi50YXNrIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi50YXNrIGxhYmVsOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stY2hlY2sge1xcbiAgYXBwZWFyYW5jZTogYXV0bztcXG59XFxuXFxuLnRhc2stdGV4dCB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxucC50YXNrLWRlc2NyIHtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGNvbG9yOiBncmV5O1xcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxufVxcblxcbnAudGFzay1kZXNjcjpob3ZlciB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcblxcbi5jYWxlbmRhci1jb250YWluZXIge1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMjhweDtcXG59XFxuXFxuLnRhc2stY2FsZW5kYXIge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBjb2xvcjogZ3JleTtcXG59XFxuXFxuLmZvcm0tbWFpbiB7XFxuICBwYWRkaW5nOiA4cHggOHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIwMCwgMjAwLCAyMDAsIDAuNSk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5mb3JtLXRleHQge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uZm9ybS1kZXNjciB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG59XFxuXFxuLnRhc2stZm9ybSBidXR0b24sIC5mb3JtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogM3B4O1xcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tYWluLWJkLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1haW4tYmQtcmFkaXVzKTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZvcm0tcGFyYW1zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5mb3JtLXByb2plY3QtY29udGFpbmVyLCAuZm9ybS1wcmlvcml0eS1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5saS5wcm9qZWN0LWlucHV0IHtcXG4gIC8qIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBwYWRkaW5nOiAwOyAqL1xcbn1cXG5cXG5kaXYucHJvamVjdC1pbnB1dCwgZGl2LnByaW9yaXR5LWlucHV0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwMCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICB3aWR0aDogMjAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tYmQtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbWFpbi1iZC1yYWRpdXMpO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgei1pbmRleDogNTsgXFxufVxcblxcbmRpdi5mb3JtLXByaW9yaXR5LWNvbnRhaW5lciBkaXYucHJpb3JpdHktaW5wdXQge1xcbiAgd2lkdGg6IDQwMCU7XFxufVxcblxcbi5wcm9qZWN0LWlucHV0IC5vcHRpb24sIC5wcmlvcml0eS1pbnB1dCAub3B0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4ucHJvamVjdC1pbnB1dCAub3B0aW9uOmhvdmVyLCAucHJpb3JpdHktaW5wdXQgLm9wdGlvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LDI0NSwyNDUsIDAuOCk7XFxufVxcblxcbi5wcm9qZWN0LWlucHV0IGxhYmVsLCAucHJpb3JpdHktaW5wdXQgbGFiZWwge1xcbiAgcGFkZGluZzogNXB4IDdweDtcXG59XFxuXFxuLmZvcm0tc2F2ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLXRvcDogOHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLmZvcm0tc2F2ZSBidXR0b24ge1xcbiAgcGFkZGluZzogN3B4IDEycHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNXJlbTtcXG59XFxuXFxuLmZvcm0tc2F2ZSBidXR0b246bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWhkLWNvbG9yKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmZvcm0tc2F2ZSBidXR0b246bGFzdC1jaGlsZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWhkLWNvbG9yLWhvdmVyKTtcXG59XFxuXFxuLmZvcm0tc2F2ZSBidXR0b246Zmlyc3QtY2hpbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLWJnLWNvbG9yKTtcXG59XFxuXFxuLmZvcm0tc2F2ZSBidXR0b246Zmlyc3QtY2hpbGQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLWJnLWNvbG9yLWhvdmVyKTtcXG59XFxuXFxuLmJhY2tkcm9wIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHotaW5kZXg6IDM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJkLWNvbG9yKTtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB6LWluZGV4OiA1O1xcbiAgd2lkdGg6IDYwJTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tYWluLWJkLXJhZGl1cyk7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuXFxuLm1vZGFsIC5mb3JtLW1haW4ge1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5idG4td3JhcHBlciBsYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDVweCA3cHg7XFxufVxcblxcbmxhYmVsLmJ0bi1wcm9qZWN0cyA+ICo6bm90KC5oaWRkZW4pLCAucHJvamVjdC1pbnB1dCBsYWJlbCwgLnByaW9yaXR5LWlucHV0IGxhYmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzcHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIC5idG4td3JhcHBlciBsYWJlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB+IGRpdi5wcm9qZWN0LWlucHV0LCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgfiBkaXYucHJpb3JpdHktaW5wdXQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi50b2RvLWJvdHRvbSB7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbi5idG4tc3ZnLWJvdHRvbS5hZGQtdGFzay1ib3R0b20ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG9wYWNpdHk6IDE7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGNvbG9yOiBncmV5O1xcbn1cXG5cXG4uYnRuLXN2Zy1ib3R0b20uYWRkLXRhc2stYm90dG9tIHNwYW4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZy10b3A6IDNweDtcXG59XFxuXFxuLmJ0bi1zdmctYm90dG9tLmFkZC10YXNrLWJvdHRvbTpob3ZlciBzcGFuIHtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWhkLWNvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnN2Zy13cmFwcGVyLmFkZC10YXNrLWJvdHRvbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xcblxcbiAgY29sb3I6IHZhcigtLW1haW4taGQtY29sb3IpO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5idG4tc3ZnLWJvdHRvbS5hZGQtdGFzay1ib3R0b206aG92ZXIgLnN2Zy13cmFwcGVye1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1oZC1jb2xvcik7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgUHJvamVjdCwge1BlcnNvbmFsUHJvamVjdH0gZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7XG5pbXBvcnQgZGlzcGxheSBmcm9tICcuL2Rpc3BsYXknO1xuaW1wb3J0IHsgZ2VuZXJhdGVQcm9qZWN0cyB9IGZyb20gJy4vZ2VuZXJhdGUtaHRtbC1saXN0cyc7XG5pbXBvcnQgc2VsZWN0ZWRJbmJveCBmcm9tICcuL3NlbGVjdGVkLWluYm94JztcblxuY29uc3QgQXBwID0gY2xhc3Mge1xuICBwcm9qZWN0cyA9IFtdO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgY29uc3QgaW5ib3ggPSBuZXcgUHJvamVjdCgnaW5ib3gnLCAnJywgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImRvZGdlcmJsdWVcIiBzdHJva2Utd2lkdGg9XCIxXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItaW5ib3ggbGlzdC1kb3RcIj48cG9seWxpbmUgcG9pbnRzPVwiMjIgMTIgMTYgMTIgMTQgMTUgMTAgMTUgOCAxMiAyIDEyXCIvPjxwYXRoIGQ9XCJNNS40NSA1LjExTDIgMTJ2NmEyIDIgMCAwIDAgMiAyaDE2YTIgMiAwIDAgMCAyLTJ2LTZsLTMuNDUtNi44OUEyIDIgMCAwIDAgMTYuNzYgNEg3LjI0YTIgMiAwIDAgMC0xLjc5IDEuMTF6XCIvPjwvc3ZnPicpO1xuICAgIHRoaXMucHJvamVjdHMucHVzaChpbmJveCk7XG4gICAgY29uc3QgY291cnNlcyA9IG5ldyBQZXJzb25hbFByb2plY3QoJ2NvdXJzZXMnLCAnc2VhZ3JlZW4nKTtcbiAgICB0aGlzLnByb2plY3RzLnB1c2goY291cnNlcyk7XG4gICAgY29uc3QgZW5mYW50cyA9IG5ldyBQZXJzb25hbFByb2plY3QoJ2VuZmFudHMnLCAnbGlnaHRzYWxtb24nKTtcbiAgICB0aGlzLnByb2plY3RzLnB1c2goZW5mYW50cyk7XG4gICAgY29uc3QgdHJhdmF1eCA9IG5ldyBQZXJzb25hbFByb2plY3QoJ3RyYXZhdXgnLCAnaW5kaWdvJyk7XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKHRyYXZhdXgpO1xuICAgIGNvbnN0IHRhc2sxID0gbmV3IFRhc2soJ1LDqXBhcmVyIHJvYmluZXQnLCAnc2FsbGUgZGUgYmFpbnMnLCAwLCAndHJhdmF1eCcsIDIpO1xuICAgIHRyYXZhdXgudGFza3MucHVzaCh0YXNrMSk7XG4gICAgY29uc3QgdGFzazIgPSBuZXcgVGFzaygnRMOpYm91Y2hlciBsXFwnw6l2aWVyJywgJ2FjaGV0ZXIgZHUgcHJvZHVpdCcsIDAsICd0cmF2YXV4JywgMyk7XG4gICAgdHJhdmF1eC50YXNrcy5wdXNoKHRhc2syKTtcbiAgICBjb25zdCB0YXNrMyA9IG5ldyBUYXNrKCdBcnJvc2VyIGxlcyBwbGFudGVzJywgJ05lIHBhcyBvdWJsaWVyIGxcXCdhbG/DqyB2ZXJhJywgMCwgJ3RyYXZhdXgnLCAyKTtcbiAgICBpbmJveC50YXNrcy5wdXNoKHRhc2szKTtcbiAgICBjb25zdCB0YXNrNCA9IG5ldyBUYXNrKCdQcmVuZHJlIHJkdiBjaGV6IGxlIGdhcmFnaXN0ZScsICdHYXJhZ2UgVnJvdW0gw6AgTWV1ZG9uLCB0w6lsIDA2IDU1IDU1IDU1JywgMCwgJ3RyYXZhdXgnLCAxKTtcbiAgICBpbmJveC50YXNrcy5wdXNoKHRhc2s0KTtcbiAgfVxufTtcblxuXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXkuYmluZChhcHApKTtcbmdlbmVyYXRlUHJvamVjdHMuY2FsbChhcHApO1xuc2VsZWN0ZWRJbmJveC5jYWxsKGFwcCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwcDsiLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcbmltcG9ydCB7Z2VuZXJhdGVQcm9qZWN0cywgZ2VuZXJhdGVUYXNrcywgZ2VuZXJhdGVQcm9qZWN0c0xpc3QsIGdlbmVyYXRlUHJpb3JpdHlMaXN0IH0gZnJvbSAnLi9nZW5lcmF0ZS1odG1sLWxpc3RzJztcblxubGV0IG1vZGlmeUZvcm1EaXNwbGF5ZWQgPSBmYWxzZTtcblxuZnVuY3Rpb24gZGlzcGxheShlKSB7XG4gIGNvbnN0IGJhY2tEcm9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tkcm9wJyk7XG4gIGNvbnN0IFthY3RpdmVQcm9qZWN0XSA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dC5zaWRlYmFyLXByb2plY3QnKV0uZmlsdGVyKGlucHV0ID0+IGlucHV0LmNoZWNrZWQpO1xuICBjb25zdCBnZXRBY3RpdmVQcm9qZWN0ID0gKHByb2plY3RFbFNlbGVjdG9yKSA9PiB7XG4gICAgY29uc3QgW2FjdGl2ZVByb2plY3RdID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocHJvamVjdEVsU2VsZWN0b3IpXS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQuY2hlY2tlZCk7XG4gICAgY29uc3QgW3Byb2plY3RdID0gdGhpcy5wcm9qZWN0cy5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0LmlkID09PSBhY3RpdmVQcm9qZWN0LmRhdGFzZXQuaWQpO1xuICAgIHJldHVybiBwcm9qZWN0O1xuICB9O1xuXG5cbiAgY29uc3Qgb3BlbkRpc3BsYXkgPSBmdW5jdGlvbihlbFRvVG9nZ2xlLCBlbFRvSW5zZXJ0VG8sIGluc2VydFBvc2l0aW9uLCBodG1sKSB7XG4gICAgZWxUb1RvZ2dsZT8uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgZWxUb0luc2VydFRvLmluc2VydEFkamFjZW50SFRNTChpbnNlcnRQb3NpdGlvbiwgaHRtbCk7XG4gIH07XG5cbiAgY29uc3QgZ2VuZXJhdGVCdG5MaXN0cyA9IGZ1bmN0aW9uKGJ0blByb2plY3RzLCBidG5Qcmlvcml0eSkge1xuICAgIGdlbmVyYXRlUHJvamVjdHNMaXN0LmNhbGwodGhpcywgYnRuUHJvamVjdHMpO1xuICAgIHNlbGVjdFByb2plY3RCdG4oKS5zZWxlY3RlZE9wdGlvbi5jYWxsKHRoaXMpO1xuICAgIGdlbmVyYXRlUHJpb3JpdHlMaXN0LmNhbGwodGhpcywgYnRuUHJpb3JpdHkpO1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlRGlzcGxheSA9IGZ1bmN0aW9uKGVsVG9Ub2dnbGUsIGVsUmVtb3ZlRnJvbSwgZWxUb1JlbW92ZSkge1xuICAgIGVsVG9Ub2dnbGU/LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIGVsUmVtb3ZlRnJvbS5yZW1vdmVDaGlsZChlbFRvUmVtb3ZlKTtcbiAgfTtcblxuICBjb25zdCBzZXRDaXJjbGVDaGVja2JveFRhc2sgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBhbGxDaXJjbGVTcGFucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW4uY3VzdG9tLWNoZWNrYm94Jyk7XG4gICAgY29uc3QgYWxsVGFza3MgPSBnZXRBY3RpdmVQcm9qZWN0KCdpbnB1dC5zaWRlYmFyLXByb2plY3QnKS50YXNrcztcbiAgICBjb25zb2xlLmxvZyhhbGxUYXNrcyk7XG4gICAgYWxsQ2lyY2xlU3BhbnMuZm9yRWFjaCgoc3BhbiwgaSkgPT4ge1xuICAgICAgc3Bhbi5zdHlsZS5ib3JkZXJDb2xvciA9IGFsbFRhc2tzW2ldLl9wcmlvcml0eUNvbG9yO1xuICAgICAgc3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBhbGxUYXNrc1tpXS5fcHJpb3JpdHlCYWNrZ3JvdW5kQ29sb3I7XG4gICAgfSk7XG4gIH07XG4gIFxuICBjb25zdCBodG1sTmV3Rm9ybU1vZGFsID0gYFxuICA8Zm9ybSBjbGFzcz1cInRhc2stZm9ybSBtb2RhbCBuZXctdGFza1wiIGlkPVwidGFzay0wXCI+XG4gIDxkaXYgY2xhc3M9XCJmb3JtLW1haW5cIj5cbiAgPGRpdiBjbGFzcz1cImZvcm0tdGV4dFwiPlxuICA8aW5wdXQgY2xhc3M9XCJmb3JtLXRleHRcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0YXNrLXRleHRcIiBpZD1cInRhc2stMVwiIGF1dG9mb2N1cyBwbGFjZWhvbGRlcj1cIlTDomNoZVwiPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImZvcm0tZGVzY3JcIj5cbiAgPHRleHRhcmVhIGNsYXNzPVwiZm9ybS1kZXNjclwiIG5hbWU9XCJkZXNjci0xXCIgaWQ9XCJkZXNjci0xXCIgY29scz1cIjMwXCIgcm93cz1cIjRcIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCI+PC90ZXh0YXJlYT5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJmb3JtLXBhcmFtc1wiPlxuICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImZvcm0tZGF0ZVwiPlxuICA8c3ZnIGNsYXNzPVwiZm9ybS1kYXRlXCIgc3R5bGU9XCJ3aWR0aDoxNXB4O2hlaWdodDoxNXB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xOSAzQzIwLjExIDMgMjEgMy44OSAyMSA1VjE5QzIxIDIwLjExIDIwLjExIDIxIDE5IDIxSDVDMy44OSAyMSAzIDIwLjEgMyAxOVY1QzMgMy44OSAzLjkgMyA1IDNINlYxSDhWM0gxNlYxSDE4VjNIMTlNMTkgMTlWOUg1VjE5SDE5TTE5IDdWNUg1VjdIMTlNNyAxMUg5VjE3SDdWMTFcIiAvPlxuICA8L3N2Zz5cbiAgPHNwYW4gY2xhc3M9XCJmb3JtLWRhdGVcIj7DiWNow6lhbmNlPC9zcGFuPlxuICA8L2J1dHRvbj5cbiAgPGRpdiBjbGFzcz1cImZvcm0tcHJvamVjdC1jb250YWluZXIgZm9ybS1jb250YWluZXJcIj5cbjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImJ0bi1mb3JtXCIgbmFtZT1cImJ0bi1wcm9qZWN0c1wiIGlkPVwiYnRuLXByb2plY3RzXCI+XG48ZGl2IGNsYXNzPVwiYnRuLXdyYXBwZXIgZm9ybS1wcm9qZWN0XCI+XG4gICAgPGxhYmVsIGNsYXNzPVwiYnRuLXByb2plY3RzXCIgZm9yPVwiYnRuLXByb2plY3RzXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnRuLXBlcnMtcHJvalwiPlxuICAgICAgICA8c3ZnIGNsYXNzPVwibGlzdC1kb3RcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJjb3JuZmxvd2VyYmx1ZVwiIHN0cm9rZT1cIm5vbmVcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1jaXJjbGVcIj5cbiAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjVcIi8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImZvcm0tcHJvamVjdFwiPkNvdXJzZXM8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2xhYmVsPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwicHJvamVjdC1pbnB1dCBvcHRpb25zLWNvbnRhaW5lclwiPlxuICA8dWwgY2xhc3M9XCJwcm9qZWN0LWlucHV0IGxpc3RcIj5cbiAgICA8bGkgY2xhc3M9XCJwcm9qZWN0LWlucHV0IG9wdGlvbiBpbmJveFwiPlxuICAgICAgPGlucHV0IGNsYXNzPVwicHJvamVjdC1vcHRpb25cIiB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJvamVjdC1vcHRpb25cIiBkYXRhLWlkPSBcIiR7dGhpcy5wcm9qZWN0c1swXS5pZH1cIiBpZD1cImluYm94XCIgdmFsdWU9XCJpbmJveFwiIGNoZWNrZWQ+XG4gICAgICA8bGFiZWwgZm9yPVwiaW5ib3hcIj5cbiAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiZG9kZ2VyYmx1ZVwiIHN0cm9rZS13aWR0aD1cIjFcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1pbmJveFwiPjxwb2x5bGluZSBwb2ludHM9XCIyMiAxMiAxNiAxMiAxNCAxNSAxMCAxNSA4IDEyIDIgMTJcIi8+XG4gICAgICAgICAgPHBhdGggZD1cIk01LjQ1IDUuMTFMMiAxMnY2YTIgMiAwIDAgMCAyIDJoMTZhMiAyIDAgMCAwIDItMnYtNmwtMy40NS02Ljg5QTIgMiAwIDAgMCAxNi43NiA0SDcuMjRhMiAyIDAgMCAwLTEuNzkgMS4xMXpcIi8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImluYm94LXRpdGxlXCI+SW5ib3g8L3NwYW4+XG4gICAgICA8L2xhYmVsPlxuICAgIDwvbGk+XG4gIDwvdWw+XG48L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImZvcm0tcHJpb3JpdHktY29udGFpbmVyIGZvcm0tY29udGFpbmVyXCI+XG48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJidG4tZm9ybVwiIGRhdGEtaWQ9XCJcIiBuYW1lPVwiYnRuLXByaW9yaXR5XCIgaWQ9XCJidG4tcHJpb3JpdHlcIj5cbjxkaXYgY2xhc3M9XCJidG4td3JhcHBlciBmb3JtLXByaW9yaXR5XCI+XG4gICAgPGxhYmVsIGNsYXNzPVwiYnRuLXByaW9yaXR5XCIgZm9yPVwiYnRuLXByaW9yaXR5XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnRuLXByaW9yaXR5XCI+XG4gICAgICAgIDxzdmcgY2xhc3M9XCJmb3JtLXByaW9yaXR5IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cImNyaW1zb25cIiBzdHJva2U9XCJjcmltc29uXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWZsYWdcIj5cbiAgICAgICAgPHBhdGggZD1cIk00IDE1czEtMSA0LTEgNSAyIDggMiA0LTEgNC0xVjNzLTEgMS00IDEtNS0yLTgtMi00IDEtNCAxelwiLz48bGluZSB4MT1cIjRcIiB5MT1cIjIyXCIgeDI9XCI0XCIgeTI9XCIxNVwiLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZm9ybS1wcmlvcml0eVwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbGFiZWw+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJwcmlvcml0eS1pbnB1dCBvcHRpb25zLWNvbnRhaW5lclwiPlxuICA8dWwgY2xhc3M9XCJwcmlvcml0eS1pbnB1dCBsaXN0XCI+XG4gIDwvdWw+XG48L2Rpdj5cbjwvZGl2PlxuICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJmb3JtLXNhdmVcIj5cbiAgPGJ1dHRvbiBjbGFzcz1cImNhbmNlbC1uZXctdGFzayBjYW5jZWxcIiB0eXBlPVwiYnV0dG9uXCI+QW5ubnVsZXI8L2J1dHRvbj5cbiAgPGJ1dHRvbiBjbGFzcz1cInNhdmUtbmV3LXRhc2sgc2F2ZVwiPkVucmVnaXN0cmVyPC9idXR0b24+XG4gIDwvZGl2PlxuICA8L2Zvcm0+YDtcblxuICBjb25zdCBmaW5kVGFzayA9IGZ1bmN0aW9uKHRhc2tFbGVtKSB7XG4gICAgY29uc3QgcHJvamVjdEluZGV4ID0gdGhpcy5wcm9qZWN0cy5maW5kSW5kZXgocHJvaiA9PiBwcm9qLmlkID09PSBhY3RpdmVQcm9qZWN0LmRhdGFzZXQuaWQpO1xuICAgIGNvbnN0IHRhc2tJbmRleCA9IHRoaXMucHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrcy5maW5kSW5kZXgodGFzayA9PiB0YXNrLmlkID09PSB0YXNrRWxlbS5kYXRhc2V0LmlkKTtcbiAgICByZXR1cm4gW3Byb2plY3RJbmRleCwgdGFza0luZGV4XTtcbiAgfTtcblxuICBjb25zdCBzYXZlVGFza0lucHV0ID0gZnVuY3Rpb24oYnRuKSB7XG4gICAgbW9kaWZ5Rm9ybURpc3BsYXllZCA9IGZhbHNlO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0YXNrRm9ybSA9IGJ0bi5jbG9zZXN0KGBmb3JtLnRhc2stZm9ybWApO1xuICAgIGNvbnN0IHRhc2tUZXh0SW5wdXQgPSB0YXNrRm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dC5mb3JtLXRleHQnKTtcbiAgICBjb25zdCB0YXNrRGVzY3JJbnB1dCA9IHRhc2tGb3JtLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhLmZvcm0tZGVzY3InKTtcbiAgICBjb25zdCBbdGFza1Byb2plY3RdID0gWy4uLnRhc2tGb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpLnByb2plY3QtaW5wdXQgaW5wdXQnKV0uZmlsdGVyKGlucHV0ID0+IGlucHV0LmNoZWNrZWQpO1xuICAgIGNvbnN0IFt0YXNrUHJpb3JpdHldID0gWy4uLnRhc2tGb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpLnByaW9yaXR5LWlucHV0IGlucHV0JyldLmZpbHRlcihpbnB1dCA9PiBpbnB1dC5jaGVja2VkKTtcbiAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGFza1RleHRJbnB1dC52YWx1ZSwgdGFza0Rlc2NySW5wdXQudmFsdWUsIDAsIHRhc2tQcm9qZWN0LnZhbHVlLCArdGFza1ByaW9yaXR5LnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyh0YXNrKTtcbiAgICByZXR1cm4geyB0YXNrLCB0YXNrUHJvamVjdCB9O1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlNb2RpZnlUYXNrID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgaHRtbEZvcm1Nb2RpZnkgPSBgPGZvcm0gY2xhc3M9XCJ0YXNrLWZvcm0gbW9kaWZ5XCIgaWQ9XCJ0YXNrLW1vZGlmeVwiPlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLW1haW5cIj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS10ZXh0XCI+XG4gICAgPGlucHV0IGNsYXNzPVwiZm9ybS10ZXh0XCIgdHlwZT1cInRleHRcIiBuYW1lPVwidGFzay10ZXh0XCIgaWQ9XCJ0YXNrLW1vZGlmeVwiIHZhbHVlPVwiVGFza1wiIGF1dG9mb2N1cyBwbGFjZWhvbGRlcj0gXCJUw6JjaGVcIj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1kZXNjclwiPlxuICAgIDx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tZGVzY3JcIiBuYW1lPVwiZGVzY3ItMVwiIGlkPVwiZGVzY3ItbW9kaWZ5XCIgY29scz1cIjMwXCIgcm93cz1cIjRcIiBwbGFjZWhvbGRlcj0gXCJEZXNjcmlwdGlvblwiPkRlc2NyPC90ZXh0YXJlYT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1wYXJhbXNcIj5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImZvcm0tZGF0ZVwiPlxuICAgIDxzdmcgY2xhc3M9XCJmb3JtLWRhdGVcIiBzdHlsZT1cIndpZHRoOjE1cHg7aGVpZ2h0OjE1cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTkgM0MyMC4xMSAzIDIxIDMuODkgMjEgNVYxOUMyMSAyMC4xMSAyMC4xMSAyMSAxOSAyMUg1QzMuODkgMjEgMyAyMC4xIDMgMTlWNUMzIDMuODkgMy45IDMgNSAzSDZWMUg4VjNIMTZWMUgxOFYzSDE5TTE5IDE5VjlINVYxOUgxOU0xOSA3VjVINVY3SDE5TTcgMTFIOVYxN0g3VjExXCIgLz5cbiAgICA8L3N2Zz5cbiAgICA8c3BhbiBjbGFzcz1cImZvcm0tZGF0ZVwiPjE5IG9jdDwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1wcm9qZWN0LWNvbnRhaW5lciBmb3JtLWNvbnRhaW5lclwiPlxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImJ0bi1mb3JtXCIgbmFtZT1cImJ0bi1wcm9qZWN0c1wiIGlkPVwiYnRuLXByb2plY3RzXCI+XG4gICAgPGRpdiBjbGFzcz1cImJ0bi13cmFwcGVyIGZvcm0tcHJvamVjdFwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJidG4tcHJvamVjdHNcIiBmb3I9XCJidG4tcHJvamVjdHNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLXBlcnMtcHJvalwiPlxuICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImxpc3QtZG90XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwiY29ybmZsb3dlcmJsdWVcIiBzdHJva2U9XCJub25lXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItY2lyY2xlXCI+XG4gICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiNVwiLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmb3JtLXByb2plY3RcIj5Db3Vyc2VzPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWlucHV0IG9wdGlvbnMtY29udGFpbmVyXCI+XG4gICAgPHVsIGNsYXNzPVwicHJvamVjdC1pbnB1dCBsaXN0XCI+XG4gICAgICA8bGkgY2xhc3M9XCJwcm9qZWN0LWlucHV0IG9wdGlvbiBpbmJveFwiPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJwcm9qZWN0LW9wdGlvblwiIHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwcm9qZWN0LW9wdGlvblwiIGRhdGEtaWQ9IFwiJHt0aGlzLnByb2plY3RzWzBdLmlkfVwiIGlkPVwiaW5ib3hcIiB2YWx1ZT1cImluYm94XCIgY2hlY2tlZD5cbiAgICAgICAgPGxhYmVsIGZvcj1cImluYm94XCI+XG4gICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiZG9kZ2VyYmx1ZVwiIHN0cm9rZS13aWR0aD1cIjFcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1pbmJveFwiPjxwb2x5bGluZSBwb2ludHM9XCIyMiAxMiAxNiAxMiAxNCAxNSAxMCAxNSA4IDEyIDIgMTJcIi8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTUuNDUgNS4xMUwyIDEydjZhMiAyIDAgMCAwIDIgMmgxNmEyIDIgMCAwIDAgMi0ydi02bC0zLjQ1LTYuODlBMiAyIDAgMCAwIDE2Ljc2IDRINy4yNGEyIDIgMCAwIDAtMS43OSAxLjExelwiLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImluYm94LXRpdGxlXCI+SW5ib3g8L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG48L2Rpdj5cbjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZm9ybS1wcmlvcml0eS1jb250YWluZXIgZm9ybS1jb250YWluZXJcIj5cbiAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiYnRuLWZvcm1cIiBuYW1lPVwiYnRuLXByaW9yaXR5XCIgaWQ9XCJidG4tcHJpb3JpdHlcIj5cbiAgPGRpdiBjbGFzcz1cImJ0bi13cmFwcGVyIGZvcm0tcHJpb3JpdHlcIj5cbiAgICAgIDxsYWJlbCBjbGFzcz1cImJ0bi1wcmlvcml0eVwiIGZvcj1cImJ0bi1wcmlvcml0eVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLXByaW9yaXR5XCI+XG4gICAgICAgICAgPHN2ZyBjbGFzcz1cImZvcm0tcHJpb3JpdHkgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwiY3JpbXNvblwiIHN0cm9rZT1cImNyaW1zb25cIiBzdHJva2Utd2lkdGg9XCIxXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItZmxhZ1wiPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNNCAxNXMxLTEgNC0xIDUgMiA4IDIgNC0xIDQtMVYzcy0xIDEtNCAxLTUtMi04LTItNCAxLTQgMXpcIi8+PGxpbmUgeDE9XCI0XCIgeTE9XCIyMlwiIHgyPVwiNFwiIHkyPVwiMTVcIi8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJmb3JtLXByaW9yaXR5XCI+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbGFiZWw+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicHJpb3JpdHktaW5wdXQgb3B0aW9ucy1jb250YWluZXJcIj5cbiAgICA8dWwgY2xhc3M9XCJwcmlvcml0eS1pbnB1dCBsaXN0XCI+XG4gICAgPC91bD5cbiAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJmb3JtLXNhdmVcIj5cbjxidXR0b24gY2xhc3M9XCJjYW5jZWwtbmV3LXRhc2tcIiB0eXBlPVwiYnV0dG9uXCI+QW5ubnVsZXI8L2J1dHRvbj5cbjxidXR0b24gY2xhc3M9XCJzYXZlLW5ldy10YXNrXCI+RW5yZWdpc3RyZXI8L2J1dHRvbj5cbjwvZGl2PlxuICAgICAgPC9mb3JtPmBcbiAgICBcbiAgICBjb25zdCBjYW5jZWxNb2RpZnlGb3JtID0gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBjYW5jZWxCdG4gPSBlLnRhcmdldC5jbG9zZXN0KCcubW9kaWZ5IGJ1dHRvbi5jYW5jZWwtbmV3LXRhc2snKTtcbiAgICAgIGlmICghY2FuY2VsQnRuKSByZXR1cm47XG4gICAgICBjYW5jZWxCdG4gJiYgY2xvc2VEaXNwbGF5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RpZnknKS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLCBjYW5jZWxCdG4uY2xvc2VzdCgnLnRhc2std3JhcHBlcicpLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kaWZ5JykpO1xuICAgICAgbW9kaWZ5Rm9ybURpc3BsYXllZCA9IGZhbHNlO1xuICAgIH07XG5cbiAgICBjb25zdCBjbGlja091dHNpZGVNb2RpZnlGb3JtID0gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBjbGlja2VkRm9ybSA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5tb2RpZnknKTtcbiAgICAgIGNvbnN0IG1vZGlmeUJ0bk9mVGFzayA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrLXdyYXBwZXInKT8ucXVlcnlTZWxlY3RvcignLnRhc2suaGlkZGVuJyk7XG4gICAgICBjb25zdCBhbnlNb2RpZnlCdG4gPSBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24uZWRpdC10YXNrJyk7XG4gICAgICBjb25zdCBzYXZlQnRuID0gZS50YXJnZXQuY2xvc2VzdCgnLm1vZGlmeSBidXR0b24uc2F2ZS1uZXctdGFzaycpO1xuICAgICAgY29uc3QgY2FuY2VsQnRuID0gZS50YXJnZXQuY2xvc2VzdCgnLm1vZGlmeSBidXR0b24uY2FuY2VsLW5ldy10YXNrJyk7XG4gICAgICBpZiAoIW1vZGlmeUZvcm1EaXNwbGF5ZWQgfHwgc2F2ZUJ0biB8fCBjYW5jZWxCdG4gfHwgY2xpY2tlZEZvcm0gfHwgbW9kaWZ5QnRuT2ZUYXNrKSByZXR1cm47XG4gICAgICBjb25zb2xlLmxvZygnd29wJylcbiAgICAgIGNsb3NlRGlzcGxheShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kaWZ5JykucHJldmlvdXNFbGVtZW50U2libGluZywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGlmeScpLmNsb3Nlc3QoJy50YXNrLXdyYXBwZXInKSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGlmeScpKTtcbiAgICAgIG1vZGlmeUZvcm1EaXNwbGF5ZWQgPSBmYWxzZTtcbiAgICAgIGlmIChhbnlNb2RpZnlCdG4pIGRpc3BsYXlGb3JtTW9kaWZ5LmNhbGwodGhpcyk7XG4gICAgfTtcbiAgXG4gICAgY29uc3Qgc2F2ZU1vZGlmaWVkVGFzayA9IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3Qgc2F2ZUJ0biA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5tb2RpZnkgYnV0dG9uLnNhdmUtbmV3LXRhc2snKTtcbiAgICAgIGlmICghc2F2ZUJ0bikgcmV0dXJuO1xuICAgICAgY29uc3QgeyB0YXNrLCB0YXNrUHJvamVjdH0gPSBzYXZlVGFza0lucHV0KHNhdmVCdG4pO1xuICAgICAgY29uc3QgdGFza0VsID0gc2F2ZUJ0bi5jbG9zZXN0KCcubW9kaWZ5JykucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgIGNvbnN0IFtwcm9qZWN0SW5kZXgsIHRhc2tJbmRleF0gPSBmaW5kVGFzay5jYWxsKHRoaXMsIHRhc2tFbCk7XG4gICAgICB0aGlzLnByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gICAgICB0aGlzLnByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiBwcm9qZWN0Ll9wcm9qZWN0TmFtZSA9PT0gdGFza1Byb2plY3QudmFsdWUgJiYgcHJvamVjdC50YXNrcy5zcGxpY2UodGFza0luZGV4LCAwLCB0YXNrKSk7XG4gICAgICBnZW5lcmF0ZVByb2plY3RzLmNhbGwodGhpcyk7XG4gICAgICBjbG9zZURpc3BsYXkodGFza0VsLCB0YXNrRWwuY2xvc2VzdCgnLnRhc2std3JhcHBlcicpLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kaWZ5JykpO1xuICAgICAgZ2VuZXJhdGVUYXNrcy5jYWxsKHRoaXMpO1xuICAgICAgc2V0Q2lyY2xlQ2hlY2tib3hUYXNrLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBnZW5lcmF0ZU1vZGlmeVRhc2tDb250ZW50ID0gZnVuY3Rpb24oZWxlbSkge1xuICAgICAgY29uc3QgW3Byb2plY3RJbmRleCwgdGFza0luZGV4XSA9IGZpbmRUYXNrLmNhbGwodGhpcywgZWxlbSk7XG4gICAgICBjb25zdCBhY3RpdmVUYXNrID0gdGhpcy5wcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzW3Rhc2tJbmRleF07XG4gICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGlmeScpO1xuICAgICAgY29uc3QgdGFza05hbWUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0LmZvcm0tdGV4dCcpO1xuICAgICAgY29uc3QgdGFza0Rlc2NyID0gZm9ybS5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYS5mb3JtLWRlc2NyJyk7XG4gICAgICB0YXNrTmFtZS52YWx1ZSA9IGFjdGl2ZVRhc2suX3Rhc2tOYW1lO1xuICAgICAgdGFza0Rlc2NyLnZhbHVlID0gYWN0aXZlVGFzay5fZGVzY3I7XG4gICAgfTtcblxuICAgIGNvbnN0IGRpc3BsYXlGb3JtTW9kaWZ5R2VuZXJpYyA9IGZ1bmN0aW9uKHRhc2spIHtcbiAgICAgICAgb3BlbkRpc3BsYXkodGFzaywgdGFzaywgJ2FmdGVyZW5kJywgaHRtbEZvcm1Nb2RpZnkpO1xuICAgICAgICBnZW5lcmF0ZUJ0bkxpc3RzLmNhbGwodGhpcywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGlmeSB1bC5wcm9qZWN0LWlucHV0JyksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RpZnkgdWwucHJpb3JpdHktaW5wdXQnKSk7XG4gICAgICAgIHNlbGVjdGVkUHJpb3JpdHlNb2RpZnkuY2FsbCh0aGlzKTtcbiAgICAgICAgZ2VuZXJhdGVNb2RpZnlUYXNrQ29udGVudC5jYWxsKHRoaXMsIHRhc2spO1xuICAgICAgICBtb2RpZnlGb3JtRGlzcGxheWVkID0gdHJ1ZTtcbiAgICAgIH07XG4gIFxuICAgIGNvbnN0IGRpc3BsYXlGb3JtTW9kaWZ5ID0gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBidG5FZGl0ID0gZS50YXJnZXQuY2xvc2VzdCgnLmVkaXQtdGFzaycpO1xuICAgICAgaWYgKCFidG5FZGl0IHx8IG1vZGlmeUZvcm1EaXNwbGF5ZWQpIHJldHVybjtcbiAgICAgIGNvbnN0IHRhc2sgPSBidG5FZGl0LmNsb3Nlc3QoJy50YXNrJyk7XG4gICAgICBkaXNwbGF5Rm9ybU1vZGlmeUdlbmVyaWMuY2FsbCh0aGlzLCB0YXNrKTtcbiAgICB9O1xuICAgIFxuICAgIGRpc3BsYXlGb3JtTW9kaWZ5LmNhbGwodGhpcyk7XG4gICAgc2F2ZU1vZGlmaWVkVGFzay5jYWxsKHRoaXMpO1xuICAgIGNhbmNlbE1vZGlmeUZvcm0oKTtcbiAgICBjbGlja091dHNpZGVNb2RpZnlGb3JtLmNhbGwodGhpcyk7XG4gIH07XG4gIFxuICBjb25zdCBkaXNwbGF5TmV3VGFzayA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGRpc3BsYXlOZXdUYXNrTW9kYWwgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghZS50YXJnZXQuY2xvc2VzdCgnYnV0dG9uLmFkZC10YXNrJykpIHJldHVybjtcbiAgICAgIG9wZW5EaXNwbGF5KGJhY2tEcm9wLCBiYWNrRHJvcCwgJ2JlZm9yZWVuZCcsIGh0bWxOZXdGb3JtTW9kYWwpO1xuICAgICAgZ2VuZXJhdGVCdG5MaXN0cy5jYWxsKHRoaXMsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCB1bC5wcm9qZWN0LWlucHV0JyksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsLnByaW9yaXR5LWlucHV0JykpO1xuICAgICAgc2VsZWN0ZWRQcmlvcml0eU1vZGFsKCk7XG4gICAgfTtcbiAgXG4gICAgY29uc3QgY2FuY2VsTW9kYWwgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IFtjaGVja2VkRm9ybUJ0bl0gPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQuYnRuLWZvcm0nKV0uZmlsdGVyKGJ0biA9PiBidG4uY2hlY2tlZCk7XG4gICAgICBjb25zdCBvdXRzaWRlTW9kYWwgPSBlLnRhcmdldC5jbG9zZXN0KCcuYmFja2Ryb3AnKTtcbiAgICAgIGNvbnN0IGNhbmNlbEJ0biA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5tb2RhbCBidXR0b24uY2FuY2VsLW5ldy10YXNrJyk7XG4gICAgICBjYW5jZWxCdG4gJiYgY2xvc2VEaXNwbGF5KGJhY2tEcm9wLCBiYWNrRHJvcCwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJykpO1xuICAgICAgaWYgKCFvdXRzaWRlTW9kYWwgfHwgZS50YXJnZXQuY2xvc2VzdCgnLm1vZGFsJykgfHwgY2hlY2tlZEZvcm1CdG4pIHJldHVybjtcbiAgICAgIGNsb3NlRGlzcGxheShiYWNrRHJvcCwgYmFja0Ryb3AsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY2xpY2tPdXRzaWRlKCkge1xuICAgICAgY29uc3QgYmFja2Ryb3AgPSBlLnRhcmdldC5jbG9zZXN0KCcuYmFja2Ryb3AnKTtcbiAgICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBlLnRhcmdldC5jbG9zZXN0KCcuZm9ybS1jb250YWluZXInKTtcbiAgICAgIGlmIChmb3JtQ29udGFpbmVyIHx8ICFiYWNrZHJvcCkgcmV0dXJuO1xuICAgICAgY29uc3QgY2hlY2tlZEZvcm1CdG4gPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQuYnRuLWZvcm0nKV0uZmlsdGVyKGJ0biA9PiBidG4uY2hlY2tlZCk7XG4gICAgICBpZiAoY2hlY2tlZEZvcm1CdG4gfHwgIWZvcm1Db250YWluZXIpIHtcbiAgICAgICAgY2hlY2tlZEZvcm1CdG4uZm9yRWFjaChidG4gPT4gYnRuLmNoZWNrZWQgPSBmYWxzZSk7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCBzYXZlVGFzayA9IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3Qgc2F2ZUJ0biA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5tb2RhbCBidXR0b24uc2F2ZS1uZXctdGFzaycpO1xuICAgICAgaWYgKCFlLnRhcmdldC5jbG9zZXN0KCcubW9kYWwgYnV0dG9uLnNhdmUtbmV3LXRhc2snKSkgcmV0dXJuO1xuICAgICAgY29uc3QgeyB0YXNrLCB0YXNrUHJvamVjdH0gPSBzYXZlVGFza0lucHV0KHNhdmVCdG4pO1xuICAgICAgdGhpcy5wcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4gcHJvamVjdC5fcHJvamVjdE5hbWUgPT09IHRhc2tQcm9qZWN0LnZhbHVlICYmIHByb2plY3QudGFza3MucHVzaCh0YXNrKSk7XG4gICAgICBnZW5lcmF0ZVByb2plY3RzLmNhbGwodGhpcyk7XG4gICAgICBjbG9zZURpc3BsYXkoYmFja0Ryb3AsIGJhY2tEcm9wLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKSk7XG4gICAgICBnZW5lcmF0ZVRhc2tzLmNhbGwodGhpcyk7XG4gICAgICBzZXRDaXJjbGVDaGVja2JveFRhc2suY2FsbCh0aGlzKTtcbiAgICB9O1xuXG4gICAgZGlzcGxheU5ld1Rhc2tNb2RhbC5jYWxsKHRoaXMpO1xuICAgIGNhbmNlbE1vZGFsKCk7XG4gICAgc2F2ZVRhc2suY2FsbCh0aGlzKTtcbiAgICBjbGlja091dHNpZGUuY2FsbCh0aGlzKTtcbiAgICAgIFxuICAgICAgY29uc3QgZGlzcGxheUZvcm1EYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGJ0bkRhdGUgPSBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24uZm9ybS1kYXRlJyk7XG4gICAgICAgIGlmICghYnRuRGF0ZSkgcmV0dXJuO1xuICAgICAgICBjb25zb2xlLmxvZyhidG5EYXRlKTtcbiAgICAgIH07XG4gICAgICBcbiAgICAgIGNvbnN0IGRpc3BsYXlGb3JtUHJpb3JpdHkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgYnRuUHJpb3JpdHkgPSBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24uZm9ybS1wcmlvcml0eScpO1xuICAgICAgICBpZiAoIWJ0blByaW9yaXR5KSByZXR1cm47XG4gICAgICAgIGNvbnNvbGUubG9nKGJ0blByaW9yaXR5KTtcbiAgICAgIH07XG4gIH07XG4gIFxuICBjb25zdCBzZWxlY3RNZW51T3B0aW9uID0gZnVuY3Rpb24ob3B0aW9uLCBidG4sIGZuLCBmbkFyZykge1xuICAgIGlmIChvcHRpb24gJiYgb3B0aW9uLmNoZWNrZWQpIHtcbiAgICAgIGZuKGZuQXJnKTtcbiAgICAgIGJ0bi5jaGVja2VkID0gZmFsc2U7ICAgICAgICAgIFxuICAgIH07XG4gIH07XG5cbiAgY29uc3Qgc2VsZWN0UHJvamVjdEJ0biA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGdlbmVyYXRlU3ZnUHJvamVjdE9wdGlvbnNCdXR0b24gPSBmdW5jdGlvbihjb250YWluZXIsIHN2Z0VsLCBwcm9qZWN0KSB7XG4gICAgICBjb25zdCBwcm9qZWN0U3ZnID0gcHJvamVjdC5fc3ZnO1xuICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKHN2Z0VsKTtcbiAgICAgIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBwcm9qZWN0U3ZnKTtcbiAgICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzdmcnKS5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgMjApO1xuICAgICAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgMjApO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXRQcm9qZWN0T3B0aW9uc0J1dHRvbiA9IGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICAgIGNvbnN0IGJ0blBlcnNQcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1wZXJzLXByb2onKTtcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdC5jYXBpdGFsaXplZFByb2plY3ROYW1lO1xuICAgICAgYnRuUGVyc1Byb2oucXVlcnlTZWxlY3Rvcignc3BhbicpLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgICBnZW5lcmF0ZVN2Z1Byb2plY3RPcHRpb25zQnV0dG9uKGJ0blBlcnNQcm9qLCBidG5QZXJzUHJvai5xdWVyeVNlbGVjdG9yKCdzdmcnKSwgcHJvamVjdClcbiAgICB9O1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSBmdW5jdGlvbigpIHtcbiAgICAgIHNldFByb2plY3RPcHRpb25zQnV0dG9uKGdldEFjdGl2ZVByb2plY3QoJ2lucHV0LnNpZGViYXItcHJvamVjdCcpKTtcbiAgICAgIGNvbnN0IFthY3RpdmVPcHRpb25dID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXS5wcm9qZWN0LW9wdGlvbicpXS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQudmFsdWUgPT09IGFjdGl2ZVByb2plY3QudmFsdWUpO1xuICAgICAgYWN0aXZlT3B0aW9uLmNoZWNrZWQgPSB0cnVlO1xuICAgIH07XG5cbiAgICBjb25zdCBzZWxlY3RPcHRpb24gPSBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGNoZWNrZWRQcm9qZWN0ID0gZS50YXJnZXQuY2xvc2VzdCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdLnByb2plY3Qtb3B0aW9uJyk7XG4gICAgICBpZiAoIWUudGFyZ2V0LmNsb3Nlc3QoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXS5wcm9qZWN0LW9wdGlvbicpKSByZXR1cm47XG4gICAgICBzZWxlY3RNZW51T3B0aW9uKGNoZWNrZWRQcm9qZWN0LCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCNidG4tcHJvamVjdHMnKSwgc2V0UHJvamVjdE9wdGlvbnNCdXR0b24sIGdldEFjdGl2ZVByb2plY3QoJy5wcm9qZWN0LW9wdGlvbicpKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtzZWxlY3RlZE9wdGlvbiwgc2VsZWN0T3B0aW9ufTtcbiAgfTtcblxuICBjb25zdCBzZXRQcmlvcml0eU9wdGlvbnNCdXR0b24gPSBmdW5jdGlvbihzdmdPcHRpb24pIHtcbiAgICBjb25zdCBzdmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdmcuZm9ybS1wcmlvcml0eScpO1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCBzdmdPcHRpb24uZ2V0QXR0cmlidXRlKCdmaWxsJykpO1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsIHN2Z09wdGlvbi5nZXRBdHRyaWJ1dGUoJ3N0cm9rZScpKTtcbiAgfTtcblxuICBjb25zdCBzZWxlY3RlZFByaW9yaXR5TW9kaWZ5ID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3ZnLmZvcm0tcHJpb3JpdHknKTtcbiAgICBjb25zdCBbcHJvamVjdEluZGV4LCB0YXNrSW5kZXhdID0gZmluZFRhc2suY2FsbCh0aGlzLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kaWZ5JykucHJldmlvdXNFbGVtZW50U2libGluZyk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdEluZGV4LCB0YXNrSW5kZXgpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gdGhpcy5wcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzW3Rhc2tJbmRleF0uX3ByaW9yaXR5O1xuICAgIHN3aXRjaCAocHJpb3JpdHkpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZSgnZmlsbCcsICdjcmltc29uJyk7XG4gICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsICdjcmltc29uJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBzdmcuc2V0QXR0cmlidXRlKCdmaWxsJywgJ2RhcmtvcmFuZ2UnKTtcbiAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgJ2RhcmtvcmFuZ2UnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnY29ybmZsb3dlcmJsdWUnKTtcbiAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgJ2Nvcm5mbG93ZXJibHVlJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0OlxuICAgICAgICBzdmcuc2V0QXR0cmlidXRlKCdmaWxsJywgJ25vbmUnKTtcbiAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgJ2JsYWNrJyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjb25zdCBbYWN0aXZlT3B0aW9uXSA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0ucHJpb3JpdHktb3B0aW9uJyldLmZpbHRlcihpbnB1dCA9PiAraW5wdXQudmFsdWUgPT09IHByaW9yaXR5KTtcbiAgICBhY3RpdmVPcHRpb24uY2hlY2tlZCA9IHRydWU7XG4gIH07XG5cbiAgZnVuY3Rpb24gc2VsZWN0ZWRQcmlvcml0eU1vZGFsKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I3ByaW9yaXR5LTEnKS5jaGVja2VkID0gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IHNlbGVjdFByaW9yaXR5ID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY2hlY2tlZFByaW9yaXR5ID0gZS50YXJnZXQuY2xvc2VzdCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdLnByaW9yaXR5LW9wdGlvbicpO1xuICAgIGlmICghY2hlY2tlZFByaW9yaXR5KSByZXR1cm47XG4gICAgc2VsZWN0TWVudU9wdGlvbihjaGVja2VkUHJpb3JpdHksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I2J0bi1wcmlvcml0eScpLCBzZXRQcmlvcml0eU9wdGlvbnNCdXR0b24sIGNoZWNrZWRQcmlvcml0eS5jbG9zZXN0KCdsaScpLnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpKTtcbiAgfTtcblxuICBjb25zdCBzZWxlY3RQcm9qZWN0ID0gZnVuY3Rpb24oKSB7ICAgIFxuICAgIGNvbnN0IHByb2plY3RJbnB1dCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2lucHV0LnNpZGViYXItcHJvamVjdCcpO1xuICAgIGlmICghcHJvamVjdElucHV0KSByZXR1cm47XG4gICAgY29uc3QgcHJvamVjdExhYmVsID0gcHJvamVjdElucHV0Lm5leHRFbGVtZW50U2libGluZztcbiAgICBjb25zdCBzdmcgPSBwcm9qZWN0TGFiZWwucXVlcnlTZWxlY3Rvcignc3ZnJyk7XG4gICAgXG4gICAgZnVuY3Rpb24gZGlzcGxheVNlbGVjdGVkUHJvamVjdCgpIHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LXRpdGxlLWNvbnRhaW5lcicpO1xuICAgICAgbGV0IHRleHRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Lmxpc3QtdGl0bGUnKTtcbiAgICAgIGxldCBjb2xvcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtZG90Jyk7XG4gICAgICB0ZXh0SW5wdXQudmFsdWUgPSBwcm9qZWN0SW5wdXQudmFsdWVbMF0udG9VcHBlckNhc2UoKSArIHByb2plY3RJbnB1dC52YWx1ZS5zbGljZSgxKTtcbiAgICAgIGlmIChzdmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdmZWF0aGVyLWNpcmNsZScpKSB7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb2xvcklucHV0KTtcbiAgICAgICAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD0ke3Byb2plY3QuX2NvbG9yfSBzdHJva2U9XCJub25lXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItY2lyY2xlIGxpc3QtZG90XCI+PGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCI1XCIvPjwvc3ZnPicpIFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1kb3QnKS5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCBzdmcuZ2V0QXR0cmlidXRlKCdmaWxsJykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbG9ySW5wdXQpO1xuICAgICAgICBzdmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdmZWF0aGVyLWluYm94JykgJiYgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJkb2RnZXJibHVlXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWluYm94IGxpc3QtZG90XCI+PHBvbHlsaW5lIHBvaW50cz1cIjIyIDEyIDE2IDEyIDE0IDE1IDEwIDE1IDggMTIgMiAxMlwiLz48cGF0aCBkPVwiTTUuNDUgNS4xMUwyIDEydjZhMiAyIDAgMCAwIDIgMmgxNmEyIDIgMCAwIDAgMi0ydi02bC0zLjQ1LTYuODlBMiAyIDAgMCAwIDE2Ljc2IDRINy4yNGEyIDIgMCAwIDAtMS43OSAxLjExelwiLz48L3N2Zz4nKTtcbiAgICAgICAgLy8gc3ZnLmNsYXNzTGlzdC5jb250YWlucygnZmVhdGhlci1jbG9jaycpICYmXG4gICAgICAgIC8vIHN2Zy5jbGFzc0xpc3QuY29udGFpbnMoJ2ZlYXRoZXItY2FsZW5kYXInKSAmJlxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAocHJvamVjdElucHV0LmNoZWNrZWQpIHtcbiAgICAgIGRpc3BsYXlTZWxlY3RlZFByb2plY3QoKTtcbiAgICAgIGdlbmVyYXRlVGFza3MuY2FsbCh0aGlzKTtcbiAgICAgIHNldENpcmNsZUNoZWNrYm94VGFzay5jYWxsKHRoaXMpO1xuICAgIH07XG4gIH07XG5cbiAgY29uc3QgY2hlY2tNdWx0aXBsZURyb3Bkb3duID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY2hlY2tlZEZvcm1CdG4gPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQuYnRuLWZvcm0nKV0uZmlsdGVyKGJ0biA9PiBidG4uY2hlY2tlZCk7XG4gICAgaWYgKGNoZWNrZWRGb3JtQnRuLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNoZWNrZWRGb3JtQnRuLmZvckVhY2goYnRuID0+IGJ0bi5jaGVja2VkID0gZmFsc2UpO1xuICAgICAgY29uc3QgZm9ybUJ0biA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2lucHV0LmJ0bi1mb3JtJyk7XG4gICAgICBpZiAoIWZvcm1CdG4pIHJldHVybjtcbiAgICAgIGZvcm1CdG4uY2hlY2tlZCA9IHRydWU7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHRhc2tBY3Rpb25zID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbW92ZVRhc2sgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGJ0biA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbi5tb3ZlJyk7XG4gICAgICBpZiAoIWJ0bikgcmV0dXJuO1xuICAgICAgY29uc3QgdGFza0VsID0gYnRuLmNsb3Nlc3QoJy50YXNrJyk7XG4gICAgICBjb25zdCBbcHJvamVjdEluZGV4LCB0YXNrSW5kZXhdID0gZmluZFRhc2suY2FsbCh0aGlzLCB0YXNrRWwpO1xuICAgICAgY29uc3QgW2NsaWNrZWRUYXNrXSA9IHRoaXMucHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrcy5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgICAgIGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ21vdmUtdXAnKSA/IHRoaXMucHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrcy5zcGxpY2UodGFza0luZGV4IC0xLCAwLCBjbGlja2VkVGFzaykgOiB0aGlzLnByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3Muc3BsaWNlKHRhc2tJbmRleCArIDEsIDAsIGNsaWNrZWRUYXNrKTtcbiAgICAgIGdlbmVyYXRlVGFza3MuY2FsbCh0aGlzKTtcbiAgICAgIHNldENpcmNsZUNoZWNrYm94VGFzay5jYWxsKHRoaXMpO1xuICAgIH07XG5cbiAgICBjb25zdCBkZWxldGVUYXNrID0gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBidG4gPSBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24uZGVsLXRhc2snKTtcbiAgICAgIGlmICghYnRuKSByZXR1cm47XG4gICAgICBjb25zdCB0YXNrRWwgPSBidG4uY2xvc2VzdCgnLnRhc2snKTtcbiAgICAgIGNvbnN0IFtwcm9qZWN0SW5kZXgsIHRhc2tJbmRleF0gPSBmaW5kVGFzay5jYWxsKHRoaXMsIHRhc2tFbCk7XG4gICAgICB0aGlzLnByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gICAgICBnZW5lcmF0ZVRhc2tzLmNhbGwodGhpcyk7XG4gICAgICBzZXRDaXJjbGVDaGVja2JveFRhc2suY2FsbCh0aGlzKTtcbiAgICAgIGdlbmVyYXRlUHJvamVjdHMuY2FsbCh0aGlzKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGVsZXRlU3RyaWtldGhyb3VnaCA9IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgdGFzayA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrLWNoZWNrJyk7XG4gICAgICBpZighdGFzaykgcmV0dXJuO1xuICAgICAgY29uc3QgZGVsQ2hlY2tlZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5kZWwtY2hlY2tlZC10YXNrJyk7XG4gICAgICBjb25zdCBjaGVja1Rhc2tzQXJyYXkgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stY2hlY2snKV0uZmlsdGVyKHRhc2sgPT4gdGFzay5jaGVja2VkKTtcbiAgICAgIGNvbnNvbGUubG9nKGRlbENoZWNrZWRCdG4pO1xuICAgICAgaWYgKGNoZWNrVGFza3NBcnJheSkgZGVsQ2hlY2tlZEJ0bi5zdHlsZS5zZXRBdHRyaWJ1dGUoJ29wYWNpdHknLCAxKTtcbiAgICAgIC8vIGlmIChlLnRhcmdldC5jbG9zZXN0KGRlbENoZWNrZWRCdG4pKVxuICAgICAgWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWNoZWNrJyldLmZpbHRlcih0YXNrID0+IHRhc2suY2hlY2tlZCkubWFwKHRhc2sgPT4gZmluZFRhc2suY2FsbCh0aGlzLCB0YXNrKSkuZm9yRWFjaChpQXJyYXkgPT4gdGhpcy5wcm9qZWN0c1tpQXJyYXlbMF1dLnRhc2tzLnNwbGljZShpQXJyYXlbMV0sIDEpKTtcbiAgICB9XG5cbiAgICBtb3ZlVGFzay5jYWxsKHRoaXMpO1xuICAgIGRlbGV0ZVRhc2suY2FsbCh0aGlzKTtcbiAgICBkZWxldGVTdHJpa2V0aHJvdWdoLmNhbGwodGhpcyk7XG4gIH1cblxuICBcbiAgZGlzcGxheU1vZGlmeVRhc2suY2FsbCh0aGlzKTtcbiAgZGlzcGxheU5ld1Rhc2suY2FsbCh0aGlzKTtcbiAgc2VsZWN0UHJvamVjdEJ0bigpLnNlbGVjdE9wdGlvbi5jYWxsKHRoaXMpO1xuICBzZWxlY3RQcmlvcml0eS5jYWxsKHRoaXMpO1xuICBjaGVja011bHRpcGxlRHJvcGRvd24oKTtcbiAgc2VsZWN0UHJvamVjdC5jYWxsKHRoaXMpO1xuICB0YXNrQWN0aW9ucy5jYWxsKHRoaXMpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheTsiLCJjb25zdCBpbml0SW5ib3ggPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCNzaWRlYmFyLWluYm94Jyk7XG4gIGNvbnN0IGNvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94LWNvdW50Jyk7XG4gIGlucHV0LnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIHRoaXMucHJvamVjdHNbMF0uaWQpO1xuICBjb3VudC50ZXh0Q29udGVudCA9IHRoaXMucHJvamVjdHNbMF0udGFza3MubGVuZ3RoO1xufTtcblxuY29uc3QgZ2VuZXJhdGVQcm9qZWN0cyA9IGZ1bmN0aW9uKCkge1xuICBpbml0SW5ib3guY2FsbCh0aGlzKTtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wZXJzb25hbC1wcm9qZWN0cy1saXN0Jyk7XG4gIGNvbnN0IFthY3RpdmVQcm9qZWN0XSA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dC5zaWRlYmFyLXByb2plY3QnKV0uZmlsdGVyKGlucHV0ID0+IGlucHV0LmNoZWNrZWQpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaS5zaWRlYmFyLXBlcnNvbmFsJykuZm9yRWFjaChlbCA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVyc29uYWwtcHJvamVjdHMtbGlzdCcpLnJlbW92ZUNoaWxkKGVsKSk7XG4gIHRoaXMucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICBjb25zdCBwcm9qZWN0SHRtbCA9IGBcbiAgICAgIDxsaSBjbGFzcz1cInNpZGViYXItcHJvamVjdCBzaWRlYmFyLXBlcnNvbmFsXCIgZGF0YS1pZD0ke3Byb2plY3QuaWR9PlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJzaWRlYmFyLXByb2plY3RcIiBkYXRhLWlkPSR7cHJvamVjdC5pZH0gdHlwZT1cInJhZGlvXCIgbmFtZT1cInByb2plY3Qtb3B0aW9uXCIgaWQ9XCJzaWRlYmFyLXByb2plY3QtJHtpbmRleH1cIiB2YWx1ZT0ke3Byb2plY3QuX3Byb2plY3ROYW1lfT5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwic2lkZWJhci1wcm9qZWN0IHByb2plY3RcIiBmb3I9XCJzaWRlYmFyLXByb2plY3QtJHtpbmRleH1cIj5cbiAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD0ke3Byb2plY3QuX2NvbG9yfSBzdHJva2U9XCJub25lXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItY2lyY2xlXCI+XG4gICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjVcIi8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJzaWRlYmFyLXByb2plY3QgdGl0bGVcIj4ke3Byb2plY3QuX3Byb2plY3ROYW1lWzBdLnRvVXBwZXJDYXNlKCl9JHtwcm9qZWN0Ll9wcm9qZWN0TmFtZS5zbGljZSgxKS50b0xvd2VyQ2FzZSgpfTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInNpZGViYXItcHJvamVjdCBjb3VudFwiPiR7cHJvamVjdC50YXNrcy5sZW5ndGh9PC9zcGFuPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9saT5cbiAgICAgIGA7XG4gICAgICBlbGVtZW50Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgcHJvamVjdEh0bWwpO1xuICAgIH1cbiAgfSk7XG4gIGNvbnN0IFtuZXdBY3RpdmVQcm9qZWN0XSA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dC5zaWRlYmFyLXByb2plY3QnKV0uZmlsdGVyKGlucHV0ID0+IGlucHV0LmlkID09PSBhY3RpdmVQcm9qZWN0Py5pZCk7XG4gIGFjdGl2ZVByb2plY3QgPyBuZXdBY3RpdmVQcm9qZWN0LmNoZWNrZWQgPSB0cnVlIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQuc2lkZWJhci1wcm9qZWN0JykuY2hlY2tlZCA9IHRydWU7XG59O1xuXG5jb25zdCBnZW5lcmF0ZVRhc2tzID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IFtzZWxlY3RlZFByb2plY3RdID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LnNpZGViYXItcHJvamVjdCcpXS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQuY2hlY2tlZCk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLXdyYXBwZXInKS5mb3JFYWNoKHRhc2sgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzLWNvbnRhaW5lcicpLnJlbW92ZUNoaWxkKHRhc2spKTtcbiAgY29uc3QgW3Byb2plY3RdID0gdGhpcy5wcm9qZWN0cy5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0LmlkID09PSBzZWxlY3RlZFByb2plY3QuZGF0YXNldC5pZCk7XG4gIGNvbnNvbGUubG9nKHRoaXMucHJvamVjdHMpO1xuICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgY29uc3QgaHRtbCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwidGFzay13cmFwcGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFza1wiIGlkPVwidGFzay0ke2luZGV4fVwiIGRhdGEtaWQ9JHt0YXNrLmlkfT5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwidGFzay1jaGVja1wiIHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY2hlY2stJHtpbmRleH1cIiBkYXRhLWlkPSR7dGFzay5pZH0+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cInRhc2stbGFiZWxcIiBmb3I9XCJjaGVjay0ke2luZGV4fVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY3VzdG9tLWNoZWNrYm94XCI+XG4gICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMTJcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD0ke3Rhc2suX3ByaW9yaXR5Q29sb3JOYW1lfSBzdHJva2U9JHt0YXNrLl9wcmlvcml0eUNvbG9yTmFtZX0gc3Ryb2tlLXdpZHRoPVwiM1wiIHN0cm9rZS1saW5lY2FwPVwic3F1YXJlXCIgc3Ryb2tlLWxpbmVqb2luPVwic3FhdXJlXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItY2hlY2tcIj48cG9seWxpbmUgcG9pbnRzPVwiMjAgNiA5IDE3IDQgMTJcIi8+PC9zdmc+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFzay10ZXh0XCI+JHt0YXNrLl90YXNrTmFtZX08L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tc3ZnIGxpc3QtYWN0aW9ucyBtb3ZlIG1vdmUtdXBcIj5cbiAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIxLjNcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1hcnJvdy11cFwiPjxsaW5lIHgxPVwiMTJcIiB5MT1cIjE5XCIgeDI9XCIxMlwiIHkyPVwiNVwiLz48cG9seWxpbmUgcG9pbnRzPVwiNSAxMiAxMiA1IDE5IDEyXCIvPjwvc3ZnPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1zdmcgbGlzdC1hY3Rpb25zIG1vdmUgbW92ZS1kb3duXCI+XG4gICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMS4zXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItYXJyb3ctZG93blwiPjxsaW5lIHgxPVwiMTJcIiB5MT1cIjVcIiB4Mj1cIjEyXCIgeTI9XCIxOVwiLz48cG9seWxpbmUgcG9pbnRzPVwiMTkgMTIgMTIgMTkgNSAxMlwiLz48L3N2Zz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tc3ZnIGxpc3QtYWN0aW9ucyBlZGl0LXRhc2tcIj5cbiAgICAgICAgICA8c3ZnIGNsYXNzPVwidG9kby1oZWFkZXItZWRpdCBwZW5cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMS4zXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItZWRpdC0zXCI+PHBhdGggZD1cIk0xMiAyMGg5XCIvPjxwYXRoIGQ9XCJNMTYuNSAzLjVhMi4xMjEgMi4xMjEgMCAwIDEgMyAzTDcgMTlsLTQgMSAxLTRMMTYuNSAzLjV6XCIvPjwvc3ZnPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1zdmcgbGlzdC1hY3Rpb25zIGRlbC10YXNrXCI+XG4gICAgICAgICAgPHN2ZyBjbGFzcz1cInRvZG8taGVhZGVyLWRlbCB0cmFzaFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIxLjNcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci10cmFzaC0yXCI+PHBvbHlsaW5lIHBvaW50cz1cIjMgNiA1IDYgMjEgNlwiLz48cGF0aCBkPVwiTTE5IDZ2MTRhMiAyIDAgMCAxLTIgMkg3YTIgMiAwIDAgMS0yLTJWNm0zIDBWNGEyIDIgMCAwIDEgMi0yaDRhMiAyIDAgMCAxIDIgMnYyXCIvPjxsaW5lIHgxPVwiMTBcIiB5MT1cIjExXCIgeDI9XCIxMFwiIHkyPVwiMTdcIi8+PGxpbmUgeDE9XCIxNFwiIHkxPVwiMTFcIiB4Mj1cIjE0XCIgeTI9XCIxN1wiLz48L3N2Zz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxwIGNsYXNzPVwidGFzay1kZXNjclwiIGlkPVwidGFzay0wXCI+JHt0YXNrLl9kZXNjcn08L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhci1jb250YWluZXJcIj5cbiAgICAgICAgICA8c3ZnIGNsYXNzPVwidGFzay1jYWxlbmRhclwiIHN0eWxlPVwid2lkdGg6MTVweDtoZWlnaHQ6MTVweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTE5IDNDMjAuMTEgMyAyMSAzLjg5IDIxIDVWMTlDMjEgMjAuMTEgMjAuMTEgMjEgMTkgMjFINUMzLjg5IDIxIDMgMjAuMSAzIDE5VjVDMyAzLjg5IDMuOSAzIDUgM0g2VjFIOFYzSDE2VjFIMThWM0gxOU0xOSAxOVY5SDVWMTlIMTlNMTkgN1Y1SDVWN0gxOU03IDExSDlWMTdIN1YxMVwiIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPHAgY2xhc3M9XCJ0YXNrLWNhbGVuZGFyXCI+MTkgb2N0PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGA7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzLWNvbnRhaW5lcicpLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgaHRtbCk7XG4gIH0pOyAgXG59O1xuXG5cbmZ1bmN0aW9uIGdlbmVyYXRlUHJvamVjdHNMaXN0KGVsZW1lbnQpIHtcbiAgY29uc3QgcHJvamVjdExpc3QgPSBlbGVtZW50O1xuICBpZiAocHJvamVjdExpc3QuY29udGFpbnMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGkucGVyc29uYWwnKSkpIHJldHVybjtcbiAgdGhpcy5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgIGNvbnN0IHByb2plY3RIdG1sID0gYFxuICAgICAgPGxpIGNsYXNzPVwicHJvamVjdC1pbnB1dCBvcHRpb24gcGVyc29uYWxcIiBkYXRhLWlkPSR7cHJvamVjdC5pZH0+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cInByb2plY3Qtb3B0aW9uXCJ0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJvamVjdC1vcHRpb25cIiBkYXRhLWlkID0gXCIke3Byb2plY3QuaWR9XCIgaWQ9XCJwcm9qZWN0LSR7aW5kZXh9XCIgdmFsdWU9JHtwcm9qZWN0Ll9wcm9qZWN0TmFtZX0+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJwcm9qZWN0LSR7aW5kZXh9XCI+XG4gICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9JHtwcm9qZWN0Ll9jb2xvcn0gc3Ryb2tlPSR7cHJvamVjdC5fY29sb3J9IGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWNpcmNsZVwiPlxuICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCI1XCIvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvamVjdC1pbnB1dCBvcHRpb25cIj4ke3Byb2plY3QuX3Byb2plY3ROYW1lWzBdLnRvVXBwZXJDYXNlKCl9JHtwcm9qZWN0Ll9wcm9qZWN0TmFtZS5zbGljZSgxKS50b0xvd2VyQ2FzZSgpfTwvc3Bhbj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvbGk+XG4gICAgICBgO1xuICAgICAgcHJvamVjdExpc3QuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBwcm9qZWN0SHRtbCk7XG4gICAgfVxuICB9KTtcbn07XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUHJpb3JpdHlMaXN0KGVsZW1lbnQpIHtcbiAgY29uc3QgcHJvamVjdExpc3QgPSBlbGVtZW50O1xuICBpZiAocHJvamVjdExpc3QuY29udGFpbnMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGkucHJpb3JpdHktaXRlbScpKSkgcmV0dXJuO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IDU7IGkrKykge1xuICAgIGxldCBodG1sID0gYFxuICAgICAgPGxpIGNsYXNzPVwicHJpb3JpdHktaW5wdXQgb3B0aW9uIHByaW9yaXR5LWl0ZW1cIiBkYXRhLWlkPVwiXCI+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cInByaW9yaXR5LW9wdGlvblwiIHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwcmlvcml0eS1vcHRpb25cIiBkYXRhLWlkID0gXCJcIiBpZD1cInByaW9yaXR5LSR7aX1cIiB2YWx1ZT1cIiR7aX1cIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5LSR7aX1cIj5cbiAgICAgICAgICA8c3ZnIGNsYXNzPVwicHJpb3JpdHktb3B0aW9uIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cImNyaW1zb25cIiBzdHJva2U9XCJjcmltc29uXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWZsYWdcIj5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNCAxNXMxLTEgNC0xIDUgMiA4IDIgNC0xIDQtMVYzcy0xIDEtNCAxLTUtMi04LTItNCAxLTQgMXpcIi8+PGxpbmUgeDE9XCI0XCIgeTE9XCIyMlwiIHgyPVwiNFwiIHkyPVwiMTVcIi8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmlvcml0eS1pbnB1dCBvcHRpb25cIj5Qcmlvcml0eSAke2l9PC9zcGFuPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9saT5cbiAgICAgIGA7XG4gICAgaWYgKGkgPT09IDIpIGh0bWwgPSBodG1sLnJlcGxhY2VBbGwoXCJjcmltc29uXCIsIFwiZGFya29yYW5nZVwiKTtcbiAgICBpZiAoaSA9PT0gMykgaHRtbCA9IGh0bWwucmVwbGFjZUFsbChcImNyaW1zb25cIiwgXCJjb3JuZmxvd2VyYmx1ZVwiKTtcbiAgICBpZiAoaSA9PT0gNCkge1xuICAgICAgaHRtbCA9IGh0bWxcbiAgICAgICAgLnJlcGxhY2UoJ2ZpbGw9XCJjcmltc29uXCInLCAnZmlsbD1cIm5vbmVcIicpXG4gICAgICAgIC5yZXBsYWNlKCdzdHJva2U9XCJjcmltc29uXCInLCAnc3Ryb2tlPVwiYmxhY2tcIicpO1xuICAgIH07XG5cbiAgICBwcm9qZWN0TGlzdC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGh0bWwpO1xuICB9O1xufTtcblxuZXhwb3J0IHsgZ2VuZXJhdGVQcm9qZWN0cywgZ2VuZXJhdGVUYXNrcywgZ2VuZXJhdGVQcm9qZWN0c0xpc3QsIGdlbmVyYXRlUHJpb3JpdHlMaXN0IH07XG4iLCJjb25zdCBQcm9qZWN0ID0gY2xhc3Mge1xuICBkYXRlID0gbmV3IERhdGUoKTtcbiAgdGFza3MgPSBbXTtcbiAgY29uc3RydWN0b3IocHJvamVjdE5hbWUsIGNvbG9yLCBzdmcpIHtcbiAgICB0aGlzLmlkID0gcHJvamVjdE5hbWUgKyAnLScgKyAoRGF0ZS5ub3coKSArICcnKS5zbGljZSgtMTApO1xuICAgIHRoaXMuX3Byb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XG4gICAgdGhpcy5fY29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLl9zdmcgPSBzdmc7XG4gICAgdGhpcy5tZXNzYWdlKCk7XG4gIH1cblxuICBtZXNzYWdlKCkge1xuICAgIGNvbnNvbGUubG9nKCdOZXcgUHJvamVjdCBjcmVhdGVkJylcbiAgfVxuXG4gIC8vIHNldCBzdmdDb2xvcihuZXdDb2xvcikge1xuICAvLyAgIHRoaXMuX3N2Zy5maWxsID0gbmV3Q29sb3I7XG4gIC8vIH1cblxuICAvLyBnZXQgc3ZnQ29sb3IoKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMuX3N2Zy5maWxsO1xuICAvLyB9XG5cbiAgLy8gc2V0IHN2Z1NpemUobmV3U2l6ZSkge1xuICAvLyAgIHRoaXMuX3N2Zy53aWR0aCA9IHRoaXMuX3N2Zy5oZWlnaHQgPSBuZXdTaXplO1xuICAvLyB9XG5cbiAgLy8gZ2V0IHN2Z1NpemUoKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMuX3N2Zy53aWR0aDtcbiAgLy8gfVxuXG4gIHNldCBwcm9qZWN0TmFtZShuZXdOYW1lKSB7XG4gICAgdGhpcy5fcHJvamVjdE5hbWUgPSBuZXdOYW1lO1xuICB9XG5cbiAgZ2V0IHByb2plY3ROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9qZWN0TmFtZTtcbiAgfVxuXG4gIGdldCBjYXBpdGFsaXplZFByb2plY3ROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9qZWN0TmFtZVswXS50b1VwcGVyQ2FzZSgpICsgdGhpcy5fcHJvamVjdE5hbWUuc2xpY2UoMSk7XG4gIH1cblxufTtcblxuY29uc3QgUGVyc29uYWxQcm9qZWN0ID0gY2xhc3MgZXh0ZW5kcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IocHJvamVjdE5hbWUsIGNvbG9yKSB7XG4gICAgc3VwZXIocHJvamVjdE5hbWUsIGNvbG9yKTtcbiAgICB0aGlzLl9zdmcgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9JHtjb2xvcn0gc3Ryb2tlPVwibm9uZVwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWNpcmNsZSBsaXN0LWRvdFwiPlxuICAgICAgPGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCI1XCIvPlxuICAgIDwvc3ZnPmA7XG4gIH1cbn1cblxuZXhwb3J0IHsgUHJvamVjdCBhcyBkZWZhdWx0LCBQZXJzb25hbFByb2plY3QgfTsiLCJpbXBvcnQgeyBnZW5lcmF0ZVRhc2tzIH0gZnJvbSBcIi4vZ2VuZXJhdGUtaHRtbC1saXN0c1wiO1xuXG5jb25zdCBzZXRDaXJjbGVDaGVja2JveFRhc2sgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgYWxsQ2lyY2xlU3BhbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuLmN1c3RvbS1jaGVja2JveCcpO1xuICBjb25zdCBhbGxUYXNrcyA9IHRoaXMucHJvamVjdHNbMF0udGFza3M7XG4gIGNvbnNvbGUubG9nKGFsbFRhc2tzKTtcbiAgYWxsQ2lyY2xlU3BhbnMuZm9yRWFjaCgoc3BhbiwgaSkgPT4ge1xuICAgIHNwYW4uc3R5bGUuYm9yZGVyQ29sb3IgPSBhbGxUYXNrc1tpXS5fcHJpb3JpdHlDb2xvcjtcbiAgICBzcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGFsbFRhc2tzW2ldLl9wcmlvcml0eUJhY2tncm91bmRDb2xvcjtcbiAgfSk7XG59O1xuXG5jb25zdCBzZWxlY3RlZEluYm94ID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I3NpZGViYXItaW5ib3gnKTtcbiAgY29uc3QgcHJvamVjdExhYmVsID0gcHJvamVjdElucHV0Lm5leHRFbGVtZW50U2libGluZztcbiAgY29uc3Qgc3ZnID0gcHJvamVjdExhYmVsLnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpO1xuICBcbiAgZnVuY3Rpb24gZGlzcGxheVNlbGVjdGVkUHJvamVjdCgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC10aXRsZS1jb250YWluZXInKTtcbiAgICBsZXQgdGV4dElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQubGlzdC10aXRsZScpO1xuICAgIGxldCBjb2xvcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtZG90Jyk7XG4gICAgdGV4dElucHV0LnZhbHVlID0gcHJvamVjdElucHV0LnZhbHVlWzBdLnRvVXBwZXJDYXNlKCkgKyBwcm9qZWN0SW5wdXQudmFsdWUuc2xpY2UoMSk7XG4gICAgaWYgKHN2Zy5jbGFzc0xpc3QuY29udGFpbnMoJ2ZlYXRoZXItY2lyY2xlJykpIHtcbiAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb2xvcklucHV0KTtcbiAgICAgIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9JHtwcm9qZWN0Ll9jb2xvcn0gc3Ryb2tlPVwibm9uZVwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWNpcmNsZSBsaXN0LWRvdFwiPjxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiNVwiLz48L3N2Zz4nKSBcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LWRvdCcpLnNldEF0dHJpYnV0ZSgnZmlsbCcsIHN2Zy5nZXRBdHRyaWJ1dGUoJ2ZpbGwnKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb2xvcklucHV0KTtcbiAgICAgIHN2Zy5jbGFzc0xpc3QuY29udGFpbnMoJ2ZlYXRoZXItaW5ib3gnKSAmJiBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImRvZGdlcmJsdWVcIiBzdHJva2Utd2lkdGg9XCIxXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItaW5ib3ggbGlzdC1kb3RcIj48cG9seWxpbmUgcG9pbnRzPVwiMjIgMTIgMTYgMTIgMTQgMTUgMTAgMTUgOCAxMiAyIDEyXCIvPjxwYXRoIGQ9XCJNNS40NSA1LjExTDIgMTJ2NmEyIDIgMCAwIDAgMiAyaDE2YTIgMiAwIDAgMCAyLTJ2LTZsLTMuNDUtNi44OUEyIDIgMCAwIDAgMTYuNzYgNEg3LjI0YTIgMiAwIDAgMC0xLjc5IDEuMTF6XCIvPjwvc3ZnPicpO1xuICAgICAgLy8gc3ZnLmNsYXNzTGlzdC5jb250YWlucygnZmVhdGhlci1jbG9jaycpICYmXG4gICAgICAvLyBzdmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdmZWF0aGVyLWNhbGVuZGFyJykgJiZcbiAgICB9XG4gIH07XG5cbiAgaWYgKHByb2plY3RJbnB1dC5jaGVja2VkKSB7XG4gICAgZGlzcGxheVNlbGVjdGVkUHJvamVjdC5jYWxsKHRoaXMpO1xuICAgIGdlbmVyYXRlVGFza3MuY2FsbCh0aGlzKTtcbiAgICBzZXRDaXJjbGVDaGVja2JveFRhc2suY2FsbCh0aGlzKTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlbGVjdGVkSW5ib3g7IiwiY29uc3QgVGFzayA9IGNsYXNzIHtcbiAgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0cnVjdG9yKHRhc2tOYW1lPVwiVGFza1wiLCBkZXNjcj1cIkRlc2NyaXB0aW9uXCIsIGRlYWRsaW5lLCBwcm9qZWN0LCBwcmlvcml0eT00KSB7XG4gICAgdGhpcy5pZCA9IHRhc2tOYW1lLnJlcGxhY2UoL1xccy9nLCAnJyApLnNsaWNlKC01KSArIChEYXRlLm5vdygpICsgJycpLnNsaWNlKC0xMCk7XG4gICAgdGhpcy5fdGFza05hbWUgPSB0YXNrTmFtZTtcbiAgICB0aGlzLl9kZXNjciA9IGRlc2NyO1xuICAgIHRoaXMuX2RlYWRsaW5lID0gZGVhZGxpbmU7XG4gICAgdGhpcy5fcHJvamVjdCA9IHByb2plY3Q7XG4gICAgdGhpcy5fcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLm1lc3NhZ2UoKTtcbiAgICB0aGlzLnNldFByaW9yaXR5Q29sb3IoKTtcbiAgICB0aGlzLnNldFByaW9yaXR5Q29sb3JOYW1lKCk7XG4gICAgdGhpcy5zZXRQcmlvcml0eUJhY2tncm91bmRDb2xvcigpO1xuICB9XG4gIFxuICBtZXNzYWdlKCkge1xuICAgIGNvbnNvbGUubG9nKCdOZXcgVGFzayBjcmVhdGVkJylcbiAgfVxuXG4gIHNldFByaW9yaXR5Q29sb3IoKSB7XG4gICAgaWYgKHRoaXMuX3ByaW9yaXR5ID09PSAxKSB0aGlzLl9wcmlvcml0eUNvbG9yID0gJ3JnYigyMjAsIDIwLCA2MCknO1xuICAgIGlmICh0aGlzLl9wcmlvcml0eSA9PT0gMikgdGhpcy5fcHJpb3JpdHlDb2xvciA9ICdyZ2IoMjU1LCAxNDAsIDApJztcbiAgICBpZiAodGhpcy5fcHJpb3JpdHkgPT09IDMpIHRoaXMuX3ByaW9yaXR5Q29sb3IgPSAncmdiKDEwMCwgMTQ5LCAyMzcpJztcbiAgICBpZiAodGhpcy5fcHJpb3JpdHkgPT09IDQpIHRoaXMuX3ByaW9yaXR5Q29sb3IgPSAncmdiKDE3NSwgMTc1LCAxNzUpJztcbiAgfVxuXG4gIHNldFByaW9yaXR5Q29sb3JOYW1lKCkge1xuICAgIGlmICh0aGlzLl9wcmlvcml0eSA9PT0gMSkgdGhpcy5fcHJpb3JpdHlDb2xvck5hbWUgPSAnY3JpbXNvbic7XG4gICAgaWYgKHRoaXMuX3ByaW9yaXR5ID09PSAyKSB0aGlzLl9wcmlvcml0eUNvbG9yTmFtZSA9ICdkYXJrb3JhbmdlJztcbiAgICBpZiAodGhpcy5fcHJpb3JpdHkgPT09IDMpIHRoaXMuX3ByaW9yaXR5Q29sb3JOYW1lID0gJ2Nvcm5mbG93ZXJibHVlJztcbiAgICBpZiAodGhpcy5fcHJpb3JpdHkgPT09IDQpIHRoaXMuX3ByaW9yaXR5Q29sb3JOYW1lID0gJ2RhcmtncmF5JztcbiAgfVxuXG4gIHNldFByaW9yaXR5QmFja2dyb3VuZENvbG9yKCkge1xuICAgIGlmICh0aGlzLl9wcmlvcml0eSA9PT0gMSkgdGhpcy5fcHJpb3JpdHlCYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDIyMCwgMjAsIDYwLCAwLjIpJztcbiAgICBpZiAodGhpcy5fcHJpb3JpdHkgPT09IDIpIHRoaXMuX3ByaW9yaXR5QmFja2dyb3VuZENvbG9yID0gJ3JnYigyNTUsIDE0MCwgMCwgMC4yKSc7XG4gICAgaWYgKHRoaXMuX3ByaW9yaXR5ID09PSAzKSB0aGlzLl9wcmlvcml0eUJhY2tncm91bmRDb2xvciA9ICdyZ2IoMTAwLCAxNDksIDIzNywgMC4yKSc7XG4gICAgaWYgKHRoaXMuX3ByaW9yaXR5ID09PSA0KSB0aGlzLl9wcmlvcml0eUJhY2tncm91bmRDb2xvciA9ICdyZ2IoMTc1LCAxNzUsIDE3NSwgMC4yKSc7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2s7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgYXBwIGZyb20gJy4vYXBwJztcclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1jb250YWluZXInKTtcclxuY29uc3QgYXBwbGljYXRpb24gPSBhcHA7XHJcblxyXG4vLyBjb25zdCBhcHAgPSBuZXcgQXBwKCk7XHJcblxyXG4vLyBjb25zdCBQcm9qZWN0ID0gY2xhc3Mge1xyXG4vLyAgIHRhc2tzID0gW107XHJcbi8vICAgY29uc3RydWN0b3IocHJvamVjdE5hbWUsIGNvbG9yKSB7XHJcbi8vICAgICB0aGlzLl9wcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xyXG4vLyAgICAgdGhpcy5fY29sb3IgPSBjb2xvcjtcclxuLy8gICAgIHRoaXMubWVzc2FnZSgpO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgbWVzc2FnZSgpIHtcclxuLy8gICAgIGNvbnNvbGUubG9nKCdOZXcgUHJvamVjdCBjcmVhdGVkJylcclxuLy8gICB9XHJcbi8vIH07XHJcblxyXG4vLyBjb25zdCBUYXNrID0gY2xhc3Mge1xyXG4vLyAgIGNvbnN0cnVjdG9yKHRhc2tOYW1lLCBkZXNjciwgZGVhZGxpbmUsIHByb2plY3QsIHByaW9yaXR5KSB7XHJcbi8vICAgICB0aGlzLl90YXNrTmFtZSA9IHRhc2tOYW1lO1xyXG4vLyAgICAgdGhpcy5fZGVzY3IgPSBkZXNjcjtcclxuLy8gICAgIHRoaXMuX2RlYWRsaW5lID0gZGVhZGxpbmU7XHJcbi8vICAgICB0aGlzLl9wcm9qZWN0ID0gcHJvamVjdDtcclxuLy8gICAgIHRoaXMuX3ByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbi8vICAgICB0aGlzLm1lc3NhZ2UoKVxyXG4vLyAgIH1cclxuICBcclxuLy8gICBtZXNzYWdlKCkge1xyXG4vLyAgICAgY29uc29sZS5sb2coJ05ldyBUYXNrIGNyZWF0ZWQnKVxyXG4vLyAgIH1cclxuLy8gfTtcclxuXHJcbi8vIGNvbnN0IEFwcCA9IGNsYXNzIHtcclxuLy8gICAjcHJvamVjdHMgPSBbXTtcclxuLy8gICBjb25zdHJ1Y3RvcigpIHtcclxuLy8gICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kaXNwbGF5Rm9ybS5iaW5kKHRoaXMpKTtcclxuLy8gICAgIHRoaXMuaW5pdCgpXHJcbi8vICAgfVxyXG5cclxuLy8gICBpbml0KCkge1xyXG4vLyAgICAgY29uc3QgaW5ib3ggPSBuZXcgUHJvamVjdCgnaW5ib3gnKTtcclxuLy8gICAgIHRoaXMuI3Byb2plY3RzLnB1c2goaW5ib3gpO1xyXG4vLyAgICAgY29uc3QgY291cnNlcyA9IG5ldyBQcm9qZWN0KCdjb3Vyc2VzJywgJ2Nvcm5mbG93ZXJibHVlJyk7XHJcbi8vICAgICB0aGlzLiNwcm9qZWN0cy5wdXNoKGNvdXJzZXMpO1xyXG4vLyAgICAgY29uc3QgZW5mYW50cyA9IG5ldyBQcm9qZWN0KCdlbmZhbnRzJywgJ2NyaW1zb24nKTtcclxuLy8gICAgIHRoaXMuI3Byb2plY3RzLnB1c2goZW5mYW50cyk7XHJcbi8vICAgICBjb25zdCB0cmF2YXV4ID0gbmV3IFByb2plY3QoJ3RyYXZhdXgnLCAnZGFya29yYW5nZScpO1xyXG4vLyAgICAgdGhpcy4jcHJvamVjdHMucHVzaCh0cmF2YXV4KTtcclxuLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuI3Byb2plY3RzKVxyXG4vLyAgIH1cclxuXHJcbi8vICAgZGlzcGxheUZvcm0oZSkge1xyXG4vLyAgICAgY29uc3QgYmFja0Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2Ryb3AnKTtcclxuLy8gICAgIGNvbnN0IGh0bWxOZXdGb3JtTW9kYWwgPSBgXHJcbi8vICAgICA8Zm9ybSBjbGFzcz1cInRhc2stZm9ybSBtb2RhbCBuZXctdGFza1wiIGlkPVwidGFzay0wXCI+XHJcbi8vICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLW1haW5cIj5cclxuLy8gICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS10ZXh0XCI+XHJcbi8vICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLXRleHRcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0YXNrLXRleHRcIiBpZD1cInRhc2stMVwiIGF1dG9mb2N1cyBwbGFjZWhvbGRlcj1cIlTDomNoZVwiPlxyXG4vLyAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWRlc2NyXCI+XHJcbi8vICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWRlc2NyXCIgbmFtZT1cImRlc2NyLTFcIiBpZD1cImRlc2NyLTFcIiBjb2xzPVwiMzBcIiByb3dzPVwiNFwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIj48L3RleHRhcmVhPlxyXG4vLyAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXBhcmFtc1wiPlxyXG4vLyAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJmb3JtLWRhdGVcIj5cclxuLy8gICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImZvcm0tZGF0ZVwiIHN0eWxlPVwid2lkdGg6MTVweDtoZWlnaHQ6MTVweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuLy8gICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xOSAzQzIwLjExIDMgMjEgMy44OSAyMSA1VjE5QzIxIDIwLjExIDIwLjExIDIxIDE5IDIxSDVDMy44OSAyMSAzIDIwLjEgMyAxOVY1QzMgMy44OSAzLjkgMyA1IDNINlYxSDhWM0gxNlYxSDE4VjNIMTlNMTkgMTlWOUg1VjE5SDE5TTE5IDdWNUg1VjdIMTlNNyAxMUg5VjE3SDdWMTFcIiAvPlxyXG4vLyAgICAgICAgICAgICA8L3N2Zz5cclxuLy8gICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmb3JtLWRhdGVcIj7DiWNow6lhbmNlPC9zcGFuPlxyXG4vLyAgICAgICAgICAgPC9idXR0b24+XHJcbi8vICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1wcm9qZWN0LWNvbnRhaW5lclwiPlxyXG4vLyAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImZvcm0tcHJvamVjdFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImxpc3QtZG90XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwiY29ybmZsb3dlcmJsdWVcIiBzdHJva2U9XCJub25lXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItY2lyY2xlXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiNVwiLz5cclxuLy8gICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4vLyAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmb3JtLXByb2plY3RcIj5Db3Vyc2VzPC9zcGFuPlxyXG4vLyAgICAgICAgICAgICA8L2J1dHRvbj5cclxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtaW5wdXQgaGlkZGVuXCI+XHJcbi8vICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwicHJvamVjdC1pbnB1dCBsaXN0XCI+XHJcbi8vICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwcm9qZWN0LWlucHV0IG9wdGlvbiBzZWxlY3RlZFwiIGRhdGEtbmFtZT0gXCJzZWxlY3RlZFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwibGlzdC1kb3RcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJjb3JuZmxvd2VyYmx1ZVwiIHN0cm9rZT1cIm5vbmVcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1jaXJjbGVcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjVcIi8+XHJcbi8vICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4vLyAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvcm0tcHJvamVjdFwiPkNvdXJzZXM8L3NwYW4+XHJcbi8vICAgICAgICAgICAgICAgICA8L2xpPlxyXG4vLyAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicHJvamVjdC1pbnB1dCBvcHRpb24gaW5ib3hcIiBkYXRhLW5hbWU9IFwiaW5ib3hcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiZG9kZ2VyYmx1ZVwiIHN0cm9rZS13aWR0aD1cIjFcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1pbmJveFwiPjxwb2x5bGluZSBwb2ludHM9XCIyMiAxMiAxNiAxMiAxNCAxNSAxMCAxNSA4IDEyIDIgMTJcIi8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk01LjQ1IDUuMTFMMiAxMnY2YTIgMiAwIDAgMCAyIDJoMTZhMiAyIDAgMCAwIDItMnYtNmwtMy40NS02Ljg5QTIgMiAwIDAgMCAxNi43NiA0SDcuMjRhMiAyIDAgMCAwLTEuNzkgMS4xMXpcIi8+XHJcbi8vICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4vLyAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImluYm94LXRpdGxlXCI+SW5ib3g8L3NwYW4+XHJcbi8vICAgICAgICAgICAgICAgICA8L2xpPlxyXG4vLyAgICAgICAgICAgICAgIDwvdWw+XHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImZvcm0tcHJpb3JpdHlcIj5cclxuLy8gICAgICAgICAgIDxzdmcgY2xhc3M9XCJmb3JtLXByaW9yaXR5IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cInJlZFwiIHN0cm9rZT1cInJlZFwiIHN0cm9rZS13aWR0aD1cIjFcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1mbGFnXCI+XHJcbi8vICAgICAgICAgICA8cGF0aCBkPVwiTTQgMTVzMS0xIDQtMSA1IDIgOCAyIDQtMSA0LTFWM3MtMSAxLTQgMS01LTItOC0yLTQgMS00IDF6XCIvPjxsaW5lIHgxPVwiNFwiIHkxPVwiMjJcIiB4Mj1cIjRcIiB5Mj1cIjE1XCIvPlxyXG4vLyAgICAgICAgICAgPC9zdmc+XHJcbi8vICAgICAgICAgICA8L2J1dHRvbj5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgPC9kaXY+XHJcbi8vICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXNhdmVcIj5cclxuLy8gICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiPkFubm51bGVyPC9idXR0b24+XHJcbi8vICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic2F2ZS1uZXctdGFzayBzYXZlXCI+RW5yZWdpc3RyZXI8L2J1dHRvbj5cclxuLy8gICAgICAgPC9kaXY+XHJcbi8vICAgICA8L2Zvcm0+YDtcclxuLy8gICAgIGNvbnN0IGh0bWxGb3JtTW9kaWZ5ID0gYDxmb3JtIGNsYXNzPVwidGFzay1mb3JtXCIgaWQ9XCJ0YXNrLTBcIj5cclxuLy8gICAgIDxkaXYgY2xhc3M9XCJmb3JtLW1haW5cIj5cclxuLy8gICAgIDxkaXYgY2xhc3M9XCJmb3JtLXRleHRcIj5cclxuLy8gICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tdGV4dFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRhc2stdGV4dFwiIGlkPVwidGFzay0xXCIgdmFsdWU9XCJQb21tZXNcIiBhdXRvZm9jdXMgcGxhY2Vob2xkZXI9IFwiVMOiY2hlXCI+XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gICAgIDxkaXYgY2xhc3M9XCJmb3JtLWRlc2NyXCI+XHJcbi8vICAgICA8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWRlc2NyXCIgbmFtZT1cImRlc2NyLTFcIiBpZD1cImRlc2NyLTFcIiBjb2xzPVwiMzBcIiByb3dzPVwiNFwiIHBsYWNlaG9sZGVyPSBcIkRlc2NyaXB0aW9uXCI+w6AgbCfDqXBpY2VyaWUgcGF5c2FubmU8L3RleHRhcmVhPlxyXG4vLyAgICAgPC9kaXY+XHJcbi8vICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1wYXJhbXNcIj5cclxuLy8gICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZm9ybS1kYXRlXCI+XHJcbi8vICAgICA8c3ZnIGNsYXNzPVwiZm9ybS1kYXRlXCIgc3R5bGU9XCJ3aWR0aDoxNXB4O2hlaWdodDoxNXB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4vLyAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTkgM0MyMC4xMSAzIDIxIDMuODkgMjEgNVYxOUMyMSAyMC4xMSAyMC4xMSAyMSAxOSAyMUg1QzMuODkgMjEgMyAyMC4xIDMgMTlWNUMzIDMuODkgMy45IDMgNSAzSDZWMUg4VjNIMTZWMUgxOFYzSDE5TTE5IDE5VjlINVYxOUgxOU0xOSA3VjVINVY3SDE5TTcgMTFIOVYxN0g3VjExXCIgLz5cclxuLy8gICAgIDwvc3ZnPlxyXG4vLyAgICAgPHNwYW4gY2xhc3M9XCJmb3JtLWRhdGVcIj4xOSBvY3Q8L3NwYW4+XHJcbi8vICAgICA8L2J1dHRvbj5cclxuLy8gICAgIDxkaXYgY2xhc3M9XCJmb3JtLXByb2plY3QtY29udGFpbmVyXCI+XHJcbi8vICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImZvcm0tcHJvamVjdFwiPlxyXG4vLyAgICAgPHN2ZyBjbGFzcz1cImxpc3QtZG90XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwiY29ybmZsb3dlcmJsdWVcIiBzdHJva2U9XCJub25lXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItY2lyY2xlXCI+XHJcbi8vICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjVcIi8+XHJcbi8vICAgICA8L3N2Zz5cclxuLy8gICAgIDxzcGFuIGNsYXNzPVwiZm9ybS1wcm9qZWN0XCI+Q291cnNlczwvc3Bhbj5cclxuLy8gICAgIDwvYnV0dG9uPlxyXG4vLyAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtaW5wdXRcIj5cclxuLy8gICAgIDx1bCBjbGFzcz1cInByb2plY3QtaW5wdXQgbGlzdFwiPlxyXG4vLyAgICAgPGxpIGNsYXNzPVwicHJvamVjdC1pbnB1dCBvcHRpb24gaW5ib3hcIj5cclxuLy8gICAgIDxzdmcgY2xhc3M9XCJsaXN0LWRvdFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cImNvcm5mbG93ZXJibHVlXCIgc3Ryb2tlPVwibm9uZVwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWNpcmNsZVwiPlxyXG4vLyAgICAgPGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCI1XCIvPlxyXG4vLyAgICAgPC9zdmc+XHJcbi8vICAgICA8c3BhbiBjbGFzcz1cImZvcm0tcHJvamVjdFwiPkNvdXJzZXM8L3NwYW4+XHJcbi8vICAgICA8L2xpPlxyXG4vLyAgICAgPGxpIGNsYXNzPVwicHJvamVjdC1pbnB1dCBvcHRpb24gaW5ib3hcIj5cclxuLy8gICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImRvZGdlcmJsdWVcIiBzdHJva2Utd2lkdGg9XCIxXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItaW5ib3hcIj48cG9seWxpbmUgcG9pbnRzPVwiMjIgMTIgMTYgMTIgMTQgMTUgMTAgMTUgOCAxMiAyIDEyXCIvPlxyXG4vLyAgICAgPHBhdGggZD1cIk01LjQ1IDUuMTFMMiAxMnY2YTIgMiAwIDAgMCAyIDJoMTZhMiAyIDAgMCAwIDItMnYtNmwtMy40NS02Ljg5QTIgMiAwIDAgMCAxNi43NiA0SDcuMjRhMiAyIDAgMCAwLTEuNzkgMS4xMXpcIi8+XHJcbi8vICAgICA8L3N2Zz5cclxuLy8gICAgIDxzcGFuIGNsYXNzPVwiaW5ib3gtdGl0bGVcIj5JbmJveDwvc3Bhbj5cclxuLy8gPC9saT5cclxuLy8gPGxpIGNsYXNzPVwicHJvamVjdC1pbnB1dCBvcHRpb25cIiBpZD1cImxpc3QtdGl0bGUtMVwiPlxyXG4vLyA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cImNvcm5mbG93ZXJibHVlXCIgc3Ryb2tlPVwibm9uZVwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWNpcmNsZVwiPjxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiNVwiLz48L3N2Zz5cclxuLy8gPHNwYW4gY2xhc3M9XCJwcm9qZWN0LWlucHV0IG9wdGlvblwiPkNvdXJzZXM8L3NwYW4+XHJcbi8vIDwvbGk+XHJcbi8vIDxsaSBjbGFzcz1cInByb2plY3QtaW5wdXQgb3B0aW9uXCIgaWQ9XCJsaXN0LXRpdGxlLTJcIj5cclxuLy8gPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJjcmltc29uXCIgc3Ryb2tlPVwibm9uZVwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWNpcmNsZVwiPjxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiNVwiLz48L3N2Zz5cclxuLy8gPHNwYW4gY2xhc3M9XCJwcm9qZWN0LWlucHV0IG9wdGlvblwiPkVuZmFudHM8L3NwYW4+XHJcbi8vIDwvbGk+XHJcbi8vIDxsaSBjbGFzcz1cInByb2plY3QtaW5wdXQgb3B0aW9uXCIgaWQ9XCJsaXN0LXRpdGxlLTNcIj5cclxuLy8gPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJkYXJrb3JhbmdlXCIgc3Ryb2tlPVwibm9uZVwiIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWNpcmNsZVwiPjxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiNVwiLz48L3N2Zz5cclxuLy8gPHNwYW4gY2xhc3M9XCJwcm9qZWN0LWlucHV0IG9wdGlvblwiPlRyYXZhdXg8L3NwYW4+XHJcbi8vIDwvbGk+XHJcbi8vIDwvdWw+XHJcbi8vIDwvZGl2PlxyXG4vLyA8L2Rpdj5cclxuLy8gPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJmb3JtLXByaW9yaXR5XCI+XHJcbi8vIDxzdmcgY2xhc3M9XCJmb3JtLXByaW9yaXR5IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cInJlZFwiIHN0cm9rZT1cInJlZFwiIHN0cm9rZS13aWR0aD1cIjFcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1mbGFnXCI+XHJcbi8vIDxwYXRoIGQ9XCJNNCAxNXMxLTEgNC0xIDUgMiA4IDIgNC0xIDQtMVYzcy0xIDEtNCAxLTUtMi04LTItNCAxLTQgMXpcIi8+PGxpbmUgeDE9XCI0XCIgeTE9XCIyMlwiIHgyPVwiNFwiIHkyPVwiMTVcIi8+XHJcbi8vIDwvc3ZnPlxyXG4vLyA8L2J1dHRvbj5cclxuLy8gPC9kaXY+XHJcbi8vIDwvZGl2PlxyXG4vLyA8ZGl2IGNsYXNzPVwiZm9ybS1zYXZlXCI+XHJcbi8vIDxidXR0b24gdHlwZT1cImJ1dHRvblwiPkFubm51bGVyPC9idXR0b24+XHJcbi8vIDxidXR0b24+RW5yZWdpc3RyZXI8L2J1dHRvbj5cclxuLy8gPC9kaXY+XHJcbi8vICAgICAgIDwvZm9ybT5gXHJcbiAgICAgIFxyXG4vLyAgICAgY29uc3QgZGlzcGxheUZvcm1Nb2RpZnkgPSBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgY29uc3QgYnRuRWRpdCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5lZGl0LXRhc2snKTtcclxuLy8gICAgICAgaWYgKGJ0bkVkaXQpIHtcclxuLy8gICAgICAgICBjb25zdCB0YXNrID0gYnRuRWRpdC5jbG9zZXN0KCcudGFzaycpO1xyXG4vLyAgICAgICAgIHRhc2suY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XHJcbi8vICAgICAgICAgdGFzay5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgaHRtbEZvcm1Nb2RpZnkpO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9O1xyXG4gICAgXHJcbi8vICAgICBjb25zdCBkaXNwbGF5Rm9ybURhdGUgPSBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgY29uc3QgYnRuRGF0ZSA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbi5mb3JtLWRhdGUnKTtcclxuLy8gICAgICAgaWYgKCFidG5EYXRlKSByZXR1cm47XHJcbi8vICAgICAgIGNvbnNvbGUubG9nKGJ0bkRhdGUpO1xyXG4vLyAgICAgfTtcclxuICAgIFxyXG4vLyAgICAgY29uc3QgZGlzcGxheUZvcm1Qcm9qZWN0cyA9IGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICBjb25zdCBidG5Qcm9qZWN0cyA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbi5mb3JtLXByb2plY3QnKTtcclxuLy8gICAgICAgaWYgKCFidG5Qcm9qZWN0cykgcmV0dXJuO1xyXG4vLyAgICAgICBjb25zdCBwcm9qZWN0SW5wdXQgPSBidG5Qcm9qZWN0cy5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbi8vICAgICAgIGNvbnNvbGUubG9nKGJ0blByb2plY3RzKTtcclxuLy8gICAgICAgaWYgKCFidG5Qcm9qZWN0cy5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpICYmICFidG5Qcm9qZWN0cy5jbGFzc0xpc3QuY29udGFpbnMoJ2dlbmVyYXRlZCcpKSB7XHJcbi8vICAgICAgICAgY29uc3QgdWxQcm9qZWN0cyA9IGJ0blByb2plY3RzLmNsb3Nlc3QoJy5mb3JtLXByb2plY3QtY29udGFpbmVyJykucXVlcnlTZWxlY3RvcigndWwucHJvamVjdC1pbnB1dCcpO1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGJ0blByb2plY3RzLCB1bFByb2plY3RzKTtcclxuLy8gICAgICAgICBhcHAuI3Byb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XHJcbi8vICAgICAgICAgICBjb25zdCBwcm9qZWN0SHRtbCA9IGBcclxuLy8gICAgICAgICAgICAgPGxpIGNsYXNzPVwicHJvamVjdC1pbnB1dCBvcHRpb24gcGVyc29uYWxcIiBpZD1cInByb2plY3QtbmFtZS0ke2luZGV4fVwiIGRhdGEtbmFtZT0gXCIke3Byb2plY3QuX3Byb2plY3ROYW1lfVwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD0ke3Byb2plY3QuX2NvbG9yfSBzdHJva2U9XCJub25lXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItY2lyY2xlXCI+PGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCI1XCIvPjwvc3ZnPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb2plY3QtaW5wdXQgb3B0aW9uXCI+JHtwcm9qZWN0Ll9wcm9qZWN0TmFtZVswXS50b1VwcGVyQ2FzZSgpfSR7cHJvamVjdC5fcHJvamVjdE5hbWUuc2xpY2UoMSkudG9Mb3dlckNhc2UoKX08L3NwYW4+XHJcbi8vICAgICAgICAgICAgIDwvbGk+YFxyXG4vLyAgICAgICAgICAgaWYgKGluZGV4ID4gMCkge1xyXG4vLyAgICAgICAgICAgICB1bFByb2plY3RzLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgcHJvamVjdEh0bWwpO1xyXG4vLyAgICAgICAgICAgfTtcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgICAgIHByb2plY3RJbnB1dC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcclxuLy8gICAgICAgICBidG5Qcm9qZWN0cy5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuLy8gICAgICAgICB1bFByb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4vLyAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gZS50YXJnZXQuY2xvc2VzdCgnbGkuc2VsZWN0ZWQnKTtcclxuLy8gICAgICAgICAgIGlmICghc2VsZWN0ZWRQcm9qZWN0KSByZXR1cm47XHJcbi8vICAgICAgICAgICBwcm9qZWN0SW5wdXQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XHJcbi8vICAgICAgICAgICBidG5Qcm9qZWN0cy5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuLy8gICAgICAgICAgIGJ0blByb2plY3RzLmNsYXNzTGlzdC5hZGQoJ2dlbmVyYXRlZCcpO1xyXG4vLyAgICAgICAgIH0pO1xyXG4vLyAgICAgICB9O1xyXG4vLyAgICAgICBpZiAoIWJ0blByb2plY3RzLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuLy8gICAgICAgICBwcm9qZWN0SW5wdXQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XHJcbi8vICAgICAgICAgYnRuUHJvamVjdHMuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH07XHJcbiAgICBcclxuLy8gICAgIGNvbnN0IHNlbGVjdFByb2plY3RzRm9ybSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBcclxuLy8gICAgIH07XHJcbiAgICBcclxuLy8gICAgIGNvbnN0IGRpc3BsYXlGb3JtUHJpb3JpdHkgPSBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgY29uc3QgYnRuUHJpb3JpdHkgPSBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24uZm9ybS1wcmlvcml0eScpO1xyXG4vLyAgICAgICBpZiAoIWJ0blByaW9yaXR5KSByZXR1cm47XHJcbi8vICAgICAgIGNvbnNvbGUubG9nKGJ0blByaW9yaXR5KTtcclxuLy8gICAgIH07XHJcbiAgICBcclxuLy8gICAgIGNvbnN0IGNyZWF0ZU5ld1Rhc2sgPSBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2snKTtcclxuLy8gICAgICAgbmV3VGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbi8vICAgICAgICAgY29uc3QgYnRuU2F2ZSA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbi5zYXZlLW5ldy10YXNrJyk7XHJcbi8vICAgICAgICAgY29uc3QgdGFza0Zvcm0gPSBlLnRhcmdldC5jbG9zZXN0KGBmb3JtLnRhc2stZm9ybWApO1xyXG4vLyAgICAgICAgIGNvbnN0IHRhc2tUZXh0SW5wdXQgPSB0YXNrRm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dC5mb3JtLXRleHQnKS52YWx1ZTtcclxuLy8gICAgICAgICBjb25zdCB0YXNrRGVzY3JJbnB1dCA9IHRhc2tGb3JtLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhLmZvcm0tZGVzY3InKS52YWx1ZTtcclxuLy8gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgICAgICAgaWYgKCFidG5TYXZlKSByZXR1cm47XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coYnRuU2F2ZSk7XHJcblxyXG4vLyAgICAgICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayh0YXNrVGV4dElucHV0LCB0YXNrRGVzY3JJbnB1dCk7XHJcbi8vICAgICAgICAgYXBwLiNwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4gcHJvamVjdC5fcHJvamVjdE5hbWUgPT09ICdpbmJveCcgJiYgcHJvamVjdC50YXNrcy5wdXNoKHRhc2spKTtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhhcHAuI3Byb2plY3RzLCB0YXNrRm9ybSk7XHJcbi8vICAgICAgICAgfSk7XHJcbi8vICAgICB9O1xyXG4gIFxyXG4vLyAgICAgY29uc3QgZGlzcGxheU5ld1Rhc2tNb2RhbCA9IGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICBjb25zdCBhZGRUYXNrID0gZS50YXJnZXQuY2xvc2VzdCgnYnV0dG9uLmFkZC10YXNrJyk7XHJcbi8vICAgICAgIGlmICghYWRkVGFzaykgcmV0dXJuO1xyXG4vLyAgICAgICBiYWNrRHJvcC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcclxuLy8gICAgICAgYmFja0Ryb3AuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIGh0bWxOZXdGb3JtTW9kYWwpO1xyXG4vLyAgICAgICBjcmVhdGVOZXdUYXNrKCk7XHJcbi8vICAgICB9O1xyXG5cclxuLy8gICAgIGRpc3BsYXlGb3JtTW9kaWZ5KCk7XHJcbi8vICAgICBkaXNwbGF5Rm9ybURhdGUoKTtcclxuLy8gICAgIGRpc3BsYXlGb3JtUHJvamVjdHMoKTtcclxuLy8gICAgIGRpc3BsYXlGb3JtUHJpb3JpdHkoKTtcclxuLy8gICAgIGRpc3BsYXlOZXdUYXNrTW9kYWwoKTtcclxuXHJcbi8vICAgfTtcclxuICBcclxuLy8gfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=