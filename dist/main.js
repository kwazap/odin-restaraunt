/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/cheese-and-wine.jpg */ \"./src/images/cheese-and-wine.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\nbody, html {\\n    margin: 0;\\n    padding: 0;\\n    height: 100%;\\n    width: auto;\\n}\\n\\n.content {\\n    display: grid;\\n    grid-template-rows: 120px 1fr;\\n    min-width: 100%;\\n    min-height: 100%;\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    background-repeat: no-repeat;\\n    background-size: cover;\\n    background-position: bottom;\\n    background-attachment: fixed;\\n}\\n\\n.header {\\n    background-color: rgba(0, 0, 0, 0.25);\\n    color: rgb(255, 247, 200);\\n    display: grid;\\n    letter-spacing: 1px;\\n    font-size: 1.6rem;\\n    grid-template-columns: 2fr 1fr;\\n    justify-items: center;\\n    align-items: center;\\n}\\n\\n.header button {\\n    border: none;\\n    background-color: rgba(0, 0, 0, 0);\\n    color: rgb(255, 247, 200);\\n    font-size: 1.5rem;\\n}\\n\\n.nav-wrapper {\\n    display: flex;\\n    width: min(100%, 300px);\\n    justify-content: space-around;\\n    margin-top: 48px;\\n}\\n\\n.header button:hover {\\n    text-decoration: underline;\\n}\\n\\n.credits {\\n    width: 100%;\\n    height: 20px;\\n    background-color: rgba(0, 0, 0, 0.25);\\n    color: rgb(255, 247, 200);\\n    text-align: center;\\n    position: fixed;\\n    bottom: 0;\\n}\\n\\n.credits a {\\n    text-decoration: none;\\n}\\n\\n.credits a:visited {\\n    color: rgb(255, 247, 200);\\n}\\n\\n.main {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n}\\n\\n.home-container, .contact-container, .menu-container {\\n    margin: 8vh;\\n    min-height: 80%;\\n    min-width: 80%;\\n    background-color: rgba(0, 0, 0, 0.5);\\n    border-radius: 32px;\\n    font-size: 1.4rem;\\n}\\n\\n.home-wrapper, .contact-wrapper, .menu-wrapper {\\n    margin: 32px;\\n    color: rgb(255, 247, 200);\\n}\\n\\n.home-wrapper h2 {\\n    color: rgb(255, 247, 200);\\n}\\n\\n.contact-wrapper {\\n    display: grid;\\n    grid-template-columns: 1fr 1fr;\\n    grid-template-rows: 1fr auto;\\n}\\n\\nh3, h4 {\\n    margin-bottom: 0;\\n}\\n\\nh4 {\\n    margin-top: 10px;\\n}\\n\\nimg {\\n    width: 128px;\\n    height: 128px;\\n    border:rgb(0, 0, 0) solid;\\n    border-radius: 8px;\\n}\\n\\n.menu-item {\\n    display: flex;\\n    gap: 24px;\\n    padding-bottom: 24px;\\n    margin-top: 24px;\\n    border-bottom: rgb(41, 41, 41) 3px dotted;\\n}\\n\\n.menu-item-text-wrapper {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-between;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaraunt/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-restaraunt/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://odin-restaraunt/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-restaraunt/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-restaraunt/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-restaraunt/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-restaraunt/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-restaraunt/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-restaraunt/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-restaraunt/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-restaraunt/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeContact\": () => (/* binding */ makeContact)\n/* harmony export */ });\n\n\nconst makeContact = function () {\n    \n    const contact = document.createElement('div')\n    contact.className = 'contact-container'\n\n    const contactWrapper = document.createElement('div')\n    contactWrapper.className = 'contact-wrapper'\n    contact.appendChild(contactWrapper)\n\n    const contactHeading = document.createElement('h2')\n    contactHeading.textContent = 'Contact'\n    contactWrapper.appendChild(contactHeading)\n\n    const workingHoursHeading = document.createElement('h2')\n    workingHoursHeading.textContent = 'Working Hours'\n    contactWrapper.appendChild(workingHoursHeading)\n\n    const contactInfo = document.createElement('div')\n    contactInfo.className = '.contact-info'\n    contactWrapper.appendChild(contactInfo)\n\n    const emailHeading = document.createElement('h3')\n    emailHeading.textContent = 'Email:'\n    contactInfo.appendChild(emailHeading)\n\n    const email = document.createElement('div')\n    email.textContent = 'bestrestaurant@host.com'\n    contactInfo.appendChild(email)\n\n    const addressHeading = document.createElement('h3')\n    addressHeading.textContent = 'Address:'\n    contactInfo.appendChild(addressHeading)\n\n    const address = document.createElement('div')\n    address.textContent = 'Ipsum Street 283g, 12700 Loremburg'\n    contactInfo.appendChild(address)\n\n    const telephoneHeading = document.createElement('h3')\n    telephoneHeading.textContent = 'Telephone:'\n    contactInfo.appendChild(telephoneHeading)\n\n    const telNumber = document.createElement('div')\n    telNumber.textContent = '+381 11 LOREM IPSUM'\n    contactInfo.appendChild(telNumber)\n\n    const schedule = {\n        Monday: '11:00 - 23:00',\n        Tuesday: '11:00 - 23:00',\n        Wednesday: '11:00 - 23:00',\n        Thursday: '11:00 - 23:00',\n        Friday: '11:00 - 23:00',\n        Saturday: '11:00 - 23:00',\n        Sunday: '11:00 - 23:00'\n    }\n\n    const workingHoursWrapper = document.createElement('div')\n    workingHoursWrapper.className = 'working-hours-wrapper'\n    contactWrapper.appendChild(workingHoursWrapper)\n\n    for (const day in schedule) {\n        const weekday = document.createElement('h4')\n        weekday.textContent = day\n        workingHoursWrapper.appendChild(weekday)\n\n        const workingHours = document.createElement('div')\n        workingHours.textContent = schedule[day]\n        workingHoursWrapper.appendChild(workingHours)\n    }\n\n    return contact\n}\n\n\n\n//# sourceURL=webpack://odin-restaraunt/./src/contact.js?");

/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeMain\": () => (/* binding */ makeMain)\n/* harmony export */ });\n\nconst makeMain = function () {\n    const content = document.createElement('div')\n    content.className = 'main'\n\n    const credits = document.createElement('div') \n    credits.className = 'credits'\n    document.querySelector('body').appendChild(credits)\n    \n    const creditsLink = document.createElement('a')\n    creditsLink.href = 'https://unsplash.com/@desertroseco'\n    creditsLink.textContent = 'Background by Aleisha Kalina on unsplash'\n    credits.appendChild(creditsLink)    \n\n    return content\n}\n\n\n\n//# sourceURL=webpack://odin-restaraunt/./src/content.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeHeader\": () => (/* binding */ makeHeader)\n/* harmony export */ });\n\nconst makeHeader = function () {\n\n    const header = document.createElement('div')\n    header.className = 'header'\n\n    const title = header.appendChild(document.createElement('h1'))\n    title.textContent = 'Cheese Restaurant'\n\n    const navWrapper = header.appendChild(document.createElement('div'))\n    navWrapper.className = 'nav-wrapper'\n\n    const homeButton = navWrapper.appendChild(document.createElement('button'))\n    homeButton.className = 'home-button'\n    homeButton.textContent = 'Home'\n    \n    const menuButton = navWrapper.appendChild(document.createElement('button'))\n    menuButton.className = 'menu-button'\n    menuButton.textContent = 'Menu'\n\n    const contactButton = navWrapper.appendChild(document.createElement('button'))\n    contactButton.className = 'contact-button'\n    contactButton.textContent = 'Contact'\n\n    return header\n\n}\n\n\n\n\n//# sourceURL=webpack://odin-restaraunt/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeHome\": () => (/* binding */ makeHome)\n/* harmony export */ });\n\n\nconst makeHome = function () {\n    \n    const home = document.createElement('div')\n    home.className = 'home-container'\n\n    const homeWrapper = document.createElement('div')\n    homeWrapper.className = 'home-wrapper'\n    home.appendChild(homeWrapper)\n\n    const homeH2 = document.createElement('h2')\n    homeH2.textContent = 'Best wine and cheese restauraunt ever'\n    homeWrapper.appendChild(homeH2)\n\n    const homeDescript = document.createElement('p')\n    homeDescript.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in gravida lorem. Cras ac volutpat neque. Ut consequat interdum turpis, ut aliquet dui faucibus ac. Etiam dapibus faucibus lectus faucibus suscipit. Aenean congue, elit et faucibus pretium, velit lorem pharetra augue, vel imperdiet turpis sapien porttitor ligula. Mauris at mauris sed urna sodales blandit.'\n    homeWrapper.appendChild(homeDescript)\n\n    home.appendChild(homeWrapper)\n\n\n    return home\n}\n\n\n\n//# sourceURL=webpack://odin-restaraunt/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _load_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load.js */ \"./src/load.js\");\n\n\n\n(0,_load_js__WEBPACK_IMPORTED_MODULE_1__.loadPage)()\n\n//# sourceURL=webpack://odin-restaraunt/./src/index.js?");

/***/ }),

/***/ "./src/load.js":
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadPage\": () => (/* binding */ loadPage)\n/* harmony export */ });\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content */ \"./src/content.js\");\n/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./switch */ \"./src/switch.js\");\n\n\n\n\nconst loadPage = function (params) {\n    const container = document.querySelector('.content')\n\n    const header = (0,_header__WEBPACK_IMPORTED_MODULE_0__.makeHeader)()\n    container.appendChild(header)\n\n    const main = (0,_content__WEBPACK_IMPORTED_MODULE_1__.makeMain)()\n    container.appendChild(main)\n\n    document.querySelectorAll('button').forEach(button => {\n        button.addEventListener('click', _switch__WEBPACK_IMPORTED_MODULE_2__.switchContent)\n    })\n\n    ;(0,_switch__WEBPACK_IMPORTED_MODULE_2__.switchContent)('Home')\n}\n\n\n\n\n//# sourceURL=webpack://odin-restaraunt/./src/load.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeMenu\": () => (/* binding */ makeMenu)\n/* harmony export */ });\n/* harmony import */ var _images_camembert_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/camembert.jpg */ \"./src/images/camembert.jpg\");\n/* harmony import */ var _images_roquefort_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/roquefort.jpg */ \"./src/images/roquefort.jpg\");\n/* harmony import */ var _images_blu_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/blu.jpg */ \"./src/images/blu.jpg\");\n/* harmony import */ var _images_fondu_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/fondu.jpg */ \"./src/images/fondu.jpg\");\n/* harmony import */ var _images_grana_padano_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/grana-padano.jpg */ \"./src/images/grana-padano.jpg\");\n\n\n\n\n\n\nconst makeMenu = function () {\n    const menu = document.createElement('div')\n    menu.className = 'menu-container'\n\n    const menuWrapper = document.createElement('div')\n    menuWrapper.className = 'menu-wrapper'\n    menu.appendChild(menuWrapper)\n\n\n    const menuItems = {\n        Camembert: {\n            image: _images_camembert_jpg__WEBPACK_IMPORTED_MODULE_0__,\n            name: 'Camembert',\n            description: \"Ut suscipit elit vel tempor congue. Aliquam rhoncus, lorem a fringilla tempor, turpis nisl interdum augue, et sagittis urna tellus nec neque. In pulvinar sem at lectus tincidunt dapibus.\"\n        },\n        Roquefort: {\n            image: _images_roquefort_jpg__WEBPACK_IMPORTED_MODULE_1__,\n            name: 'Roquefort',\n            description: \"Vivamus ornare nisi a nisi varius, sed rutrum lectus viverra. Maecenas bibendum orci quis nunc gravida semper. Mauris interdum risus et maximus sodales. Vestibulum ultricies ex in tempor vestibulum. Ut sit amet turpis posuere, molestie dolor vel, rutrum lorem.\"\n        },\n        Blu: {\n            image: _images_blu_jpg__WEBPACK_IMPORTED_MODULE_2__,\n            name: 'Blu',\n            description: \"Nullam eget hendrerit eros. Morbi luctus bibendum enim, in dignissim magna tempus non. Fusce nibh lectus, sollicitudin sed lacinia in, sodales a neque. In vestibulum fermentum felis vitae finibus.\"\n        },\n        Fondu: {\n            image: _images_fondu_jpg__WEBPACK_IMPORTED_MODULE_3__,\n            name: 'Fondu',\n            description: \"Quisque vel commodo metus. Proin venenatis elementum sem vel feugiat. Fusce facilisis nisi a leo iaculis, id ultrices eros posuere.\"\n        },\n        GranaPadano: {\n            image: _images_grana_padano_jpg__WEBPACK_IMPORTED_MODULE_4__,\n            name: 'Grana Padano',\n            description: \"Nunc aliquam vehicula quam, a iaculis mauris suscipit fermentum. Pellentesque accumsan, urna ac commodo hendrerit, justo ipsum viverra justo, vel convallis quam sapien eu arcu.\"\n        },\n    }\n\n    for (const item in menuItems) {\n        const menuItemWrapper = document.createElement('div')\n        menuItemWrapper.className = 'menu-item'\n        menuWrapper.appendChild(menuItemWrapper)\n\n        const itemImage = new Image()\n        itemImage.src = menuItems[item].image\n        menuItemWrapper.appendChild(itemImage)\n\n        const textWrapper = document.createElement('div')\n        textWrapper.className = 'menu-item-text-wrapper'\n        menuItemWrapper.appendChild(textWrapper)\n\n        const itemName = document.createElement('h4')\n        itemName.textContent = menuItems[item].name\n        textWrapper.appendChild(itemName)\n\n        const itemDescription = document.createElement('div')\n        itemDescription.textContent = menuItems[item].description\n        textWrapper.appendChild(itemDescription)\n    }\n\n    return menu\n}\n\n\n\n//# sourceURL=webpack://odin-restaraunt/./src/menu.js?");

/***/ }),

/***/ "./src/switch.js":
/*!***********************!*\
  !*** ./src/switch.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"switchContent\": () => (/* binding */ switchContent)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n \n\n    \nfunction switchContent(initialSetting) {\n    const main = document.querySelector('.main')\n    const mainChild = document.querySelector('.main > *')\n\n    if (mainChild) {\n        mainChild.remove()\n    }\n\n    let setting\n    if (this) {\n        setting = this.textContent\n    } else {\n        setting = initialSetting\n    }\n    \n    switch (setting) {\n        case 'Home':\n            const home = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeHome)()\n            main.appendChild(home)\n            break;\n        case 'Contact':\n            const contact = (0,_contact__WEBPACK_IMPORTED_MODULE_1__.makeContact)()\n            main.appendChild(contact)\n            break;\n        case 'Menu':\n            const menu = (0,_menu__WEBPACK_IMPORTED_MODULE_2__.makeMenu)()\n            main.appendChild(menu)    \n        default:\n            break;\n    }\n}\n\n\n\n//# sourceURL=webpack://odin-restaraunt/./src/switch.js?");

/***/ }),

/***/ "./src/images/blu.jpg":
/*!****************************!*\
  !*** ./src/images/blu.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9f0af299d2d0d8535cec.jpg\";\n\n//# sourceURL=webpack://odin-restaraunt/./src/images/blu.jpg?");

/***/ }),

/***/ "./src/images/camembert.jpg":
/*!**********************************!*\
  !*** ./src/images/camembert.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a4e6590b43561364acb9.jpg\";\n\n//# sourceURL=webpack://odin-restaraunt/./src/images/camembert.jpg?");

/***/ }),

/***/ "./src/images/cheese-and-wine.jpg":
/*!****************************************!*\
  !*** ./src/images/cheese-and-wine.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"86d27426e386f4a66f2b.jpg\";\n\n//# sourceURL=webpack://odin-restaraunt/./src/images/cheese-and-wine.jpg?");

/***/ }),

/***/ "./src/images/fondu.jpg":
/*!******************************!*\
  !*** ./src/images/fondu.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a291e8006f02d2f7e5cc.jpg\";\n\n//# sourceURL=webpack://odin-restaraunt/./src/images/fondu.jpg?");

/***/ }),

/***/ "./src/images/grana-padano.jpg":
/*!*************************************!*\
  !*** ./src/images/grana-padano.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"90a98fc2ac168a7b6ab3.jpg\";\n\n//# sourceURL=webpack://odin-restaraunt/./src/images/grana-padano.jpg?");

/***/ }),

/***/ "./src/images/roquefort.jpg":
/*!**********************************!*\
  !*** ./src/images/roquefort.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"99c21b822ea240417f14.jpg\";\n\n//# sourceURL=webpack://odin-restaraunt/./src/images/roquefort.jpg?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;