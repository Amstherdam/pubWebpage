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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Allura&family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,500&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,500;1,400;1,500&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `\r\n/* ! Reset css  */\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\n\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n/* ! Reset css end  */\r\n\r\nbody { \r\n    background-color: rgb(9, 9, 9);\r\n\tfont-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n#content {\r\n    height: 100vh;\r\n    width: 100% ; \r\n}\r\n\r\n.navbar { \r\n\tdisplay: flex;\r\n\tbackground-color: rgba(14, 13, 13, 0.85);\r\n\tcolor: whitesmoke;\r\n\tpadding: 1vh 1vh 2vh 4vh ;\r\n\tfont-size: 2.6vh ;\r\n\tcursor: pointer;\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100vw;\r\n\tz-index: 10;\r\n}\r\n\r\n.navbar > a { \r\n\tpadding: 2vh 2vh 1vh 1.5vh ;\r\n\tborder-bottom: 1px solid rgba(14, 13, 13, 0.85) ;\r\n\ttransition: 0.42s ease-in-out;\r\n}\r\n\r\n.navbar > a:hover {\r\n\tborder-bottom: 1px solid black;\r\n\tborder-radius: 10px;\r\n\tborder-color: whitesmoke;\r\n }\r\n\r\n#cocktailVideo { \r\n\theight: 100vh;\r\n\twidth: 100%;\r\n\tposition: relative;\r\n\tobject-fit: cover;\r\n\tz-index: 1;\r\n}\r\n\r\n#cocktailTextDiv { \r\n\tz-index: 5;\r\n\tcolor: rgb(193, 193, 193);\r\n\tposition: absolute;\r\n\ttop: 14vh;\r\n\twidth: 30vw;\r\n}\r\n\r\n#cocktailTextHeader{ \r\n\ttext-align: center;\r\n\tfont-size: 8.2vh;\r\n\twidth: 42vw;\r\n\tcolor: rgb(193, 193, 193);\r\n\tmargin-bottom: 3vh;\r\n\tfont-family: 'Allura', cursive;\r\n}\r\n\r\n#cocktailTextP { \r\n\tmargin-top: 2vh;\r\n\tmargin-left: 2vw;\r\n\tfont-size: 2.2vh;\r\n\twidth: 35vw;\r\n\ttext-align: center;\r\n\tline-height: 2.9vh;\r\n}\r\n\r\n#promotionDiv { \r\n\t/* border-top: 0.3vw solid rgb(102, 102, 102);\r\n\tborder-right: 0.2vw solid  rgb(102, 102, 102);\r\n\tborder-left: 0.2vw solid  rgb(102, 102, 102);\r\n\tborder-radius: 3vw 3vw 0 0; */\r\n\tmargin: auto;\r\n\tmargin-top: 12vh;\r\n\twidth: 88vw;\r\n}\r\n\r\n.promotionCocktailSections { \r\n\tcolor: rgb(193, 193, 193);\r\n\tmargin: 4vh auto;\r\n\twidth: 80vw;\r\n\theight: 50vh;\r\n\tborder-radius: 3vw 3vw;\r\n\tdisplay: flex;\r\n\tfont-size: 1.5vw;\r\n\tline-height: 3.8vh;\r\n}\r\n\r\n.cocktailSectionText { \r\n\tmargin: 4vh 3vw;\r\n\twidth: 40vw;\r\n}\r\n\r\n.cocktailSectionText >h2  { \r\n\ttext-align: center;\r\n\tfont-size: 8vh;\r\n\tmargin-bottom: 4vh;\r\n\tfont-weight: 500;\r\n\tfont-family: 'Allura', cursive;\r\n\tletter-spacing: 0.4vw;\r\n}\r\n\r\n.cocktailImg { \r\n\theight: 45vh;\r\n\tmargin: 3vh 8vw 3vh 8vw;\r\n\tborder: 0.2vw solid rgb(129, 129, 129);\r\n\tborder-radius: 35px;\r\n\t-webkit-box-shadow: 0px 6px 20px 2px rgba(167, 167, 167, 0.68);\r\n\t-moz-box-shadow: 0px 6px 20px 2px rgba(167, 167, 167, 0.68);\r\n\tbox-shadow: 0px 6px 20px 2px rgba(167, 167, 167, 0.68);\r\n}\r\n\r\n.cocktailSectionP { \r\n\tmargin-top: 20px;\r\n\twidth: 43vw;\r\n}\r\n\r\n#footer { \r\n\tbackground-color: rgb(9, 9, 9);\r\n\twidth: 100vw;\r\n\theight: 50vh;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n#footerContent { \r\n\tbackground-color: rgb(9, 9, 9);\r\n\twidth: 88vw;\r\n\theight: 30vh;\r\n\tborder-radius: 30px;\r\n\t-webkit-box-shadow: 0px 6px 30px 0px #fad1fa78;\r\n\t-moz-box-shadow: 0px 6px 30px 0px #fad1fa78;\r\n\tbox-shadow: 0px 6px 30px 0px #fad1fa78;\r\n\tdisplay: flex;\r\n\tjustify-content: space-around;\r\n}\r\n\r\n#footerImg {\r\n\tfilter: invert(94%) sepia(26%) saturate(619%) hue-rotate(315deg) brightness(97%) contrast(98%);\r\n\twidth: 13vw;\r\n\tmargin: 5vh 0vw 5vh 0vw;\r\n}\r\n\r\n#footerSocialDiv { \r\n\tmargin-top: 10vh;\r\n\tdisplay: flex;\r\n\twidth: 28vw;\r\n\tjustify-content: space-evenly;\r\n}\r\n\r\n.socialIcon { \r\n\tcolor: wheat;\r\n\tfont-size: 8vh;\r\n\tcursor: pointer;\r\n}\r\n\r\n#footerAdressContainer { \r\n\tmargin-top: 5vh;\r\n}\r\n\r\n#numberAdressHeader { \r\n\tfont-size: 4vh;\r\n\tcolor: wheat;\r\n\ttext-align: center;\r\n\tfont-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n#numberP { \r\n\tcolor: wheat;\r\n\ttext-align: center;\r\n\tmargin-top: 5vh;\r\n\tfont-size: 2.5vh;\r\n}\r\n\r\n#address { \r\n\tcolor: wheat;\r\n\tmargin-top: 3vh;\r\n}\r\n\r\n#aboutContainer  { \r\n\tposition: relative;\r\n}\r\n\r\n#aboutBackgroundImg { \r\n\twidth: 100vw;\r\n\theight: auto;\r\n\tz-index: 1;\r\n}\r\n\r\n#aboutTextDiv { \r\n\tposition: absolute;\r\n\tz-index: 5;\r\n\tcolor: whitesmoke;\r\n\ttop: 20vh;\r\n\tleft: 55vw;\r\n\twidth: 35vw;\r\n\ttext-align: center;\r\n\tbackground-color: rgba(0, 0, 0, 0.366);\r\n\tpadding: 6vh 3vw 5vh 3vw;\r\n\tborder-radius: 26px;\r\n\tfont-size: 2.6vh;\r\n\tfont-family: 'Open Sans', sans-serif;\r\n\tfont-style: italic;\r\n\tline-height: 3.2vh;\r\n\t\r\n}\r\n\r\n#aboutTextH  {\r\n\tfont-size: 6vh;\r\n\tfont-family: 'Allura', cursive;\r\n\tpadding-bottom: 3vh;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurantpage/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurantpage/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/aboutPage.js":
/*!*************************************!*\
  !*** ./src/components/aboutPage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst createAboutPage = () => { \r\n    const content = document.querySelector('#content')\r\n    const pageContent = document.createElement('div');\r\n    pageContent.classList.add('page-content')\r\n\r\n    const aboutContainer = document.createElement('div')\r\n    aboutContainer.setAttribute('id', 'aboutContainer')\r\n\r\n    const aboutBackgroundImgDiv = document.createElement('div')\r\n    const aboutBackgroundImg = document.createElement('img')\r\n    aboutBackgroundImg.src = './image/aboutPic.jpg';\r\n    aboutBackgroundImg.setAttribute('id', 'aboutBackgroundImg')\r\n\r\n    const aboutTextDiv = document.createElement('div');\r\n    const aboutTextH = document.createElement('h2');\r\n    const aboutTextP = document.createElement('p');\r\n    \r\n    aboutTextDiv.setAttribute('id', 'aboutTextDiv')\r\n    aboutTextH.setAttribute('id', 'aboutTextH')\r\n    aboutTextP.setAttribute('id', 'aboutTextP')\r\n\r\n    aboutTextH.textContent = 'ABOUT'\r\n    aboutTextP.textContent = 'One of craftsmanship and authenticity. Of dimly lit encounters, great conversation & hand drawn ales. Well informed Barkeeps will guide the most discerning of taste buds. Creating carefully crafted cocktails and pouring a wide range of Bourbon and Rye Whiskey.'\r\n\r\n    aboutTextDiv.appendChild(aboutTextH)\r\n    aboutTextDiv.appendChild(aboutTextP)\r\n    \r\n    aboutBackgroundImgDiv.appendChild(aboutBackgroundImg)\r\n\r\n    aboutContainer.appendChild(aboutBackgroundImgDiv);\r\n    aboutContainer.appendChild(aboutTextDiv)\r\n    pageContent.appendChild(aboutContainer)\r\n    content.appendChild(pageContent)\r\n\r\n    \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAboutPage);\n\n//# sourceURL=webpack://restaurantpage/./src/components/aboutPage.js?");

/***/ }),

/***/ "./src/components/contact.js":
/*!***********************************!*\
  !*** ./src/components/contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst createContactPage= () => { \r\n    const content = document.querySelector('#content')\r\n    const pageContent = document.createElement('div');\r\n    pageContent.classList.add('page-content')\r\n\r\n    const contactContainer = document.createElement('div')\r\n\r\n    contactContainer.textContent = 'deneme'\r\n\r\n    pageContent.appendChild(contactContainer)\r\n    content.appendChild(pageContent)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactPage);\n\n//# sourceURL=webpack://restaurantpage/./src/components/contact.js?");

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n const createFooter = () => { \r\n    const content = document.querySelector('#content');\r\n    const footer = document.createElement('div');\r\n    footer.setAttribute('id', 'footer')\r\n\r\n    // footer container \r\n    const footerContent = document.createElement('div')\r\n    footerContent.setAttribute('id', 'footerContent')\r\n\r\n   // img div inside footer\r\n    const footerImgDiv = document.createElement('div')\r\n    footerImgDiv.setAttribute('id', 'footerImgDiv')\r\n    const footerImg = document.createElement('img')\r\n    footerImg.setAttribute('id', 'footerImg')\r\n    footerImg.src = \"./image/cocktailLogo.png\";\r\n\r\n   //second div inside footer\r\n   const footerSocialDiv = document.createElement('div')\r\n   footerSocialDiv.setAttribute('id', 'footerSocialDiv');\r\n   \r\n   const socialArr = ['instagram', 'facebook', 'x', 'github']\r\n\r\n   socialArr.forEach(item => {\r\n      let socialIcon = item\r\n      socialIcon = document.createElement('a')\r\n      socialIcon.classList.add('socialIcon')\r\n      socialIcon.setAttribute('id', item + 'A')\r\n\r\n      const iconI = document.createElement('i')\r\n      iconI.setAttribute('id', item)\r\n      iconI.classList.add('footerIcon')\r\n\r\n      socialIcon.appendChild(iconI)\r\n      footerSocialDiv.appendChild(socialIcon)\r\n   })\r\n\r\n   const footerAdressAndNumberDiv = document.createElement('div')\r\n   const footerAdressAndNumberDivH = document.createElement('h3')\r\n   const footerAdressAndNumberDivP = document.createElement('p')\r\n   const footerAdressAndNumberDivP2 = document.createElement('p')\r\n\r\n   footerAdressAndNumberDiv.setAttribute('id', 'footerAdressContainer')\r\n   footerAdressAndNumberDivH.setAttribute('id', 'numberAdressHeader')\r\n   footerAdressAndNumberDivP.setAttribute('id', 'numberP')\r\n   footerAdressAndNumberDivP2.setAttribute('id', 'address')\r\n\r\n   footerAdressAndNumberDivH.textContent = 'Address & Number'\r\n   footerAdressAndNumberDivP.textContent = '+99 999 99 999'\r\n   footerAdressAndNumberDivP2.textContent = '678 Green St #3, San Francisco, CA 94133, USA'\r\n\r\n   footerAdressAndNumberDiv.appendChild(footerAdressAndNumberDivH)\r\n   footerAdressAndNumberDiv.appendChild(footerAdressAndNumberDivP)\r\n   footerAdressAndNumberDiv.appendChild(footerAdressAndNumberDivP2)\r\n\r\n   \r\n   footerImgDiv.appendChild(footerImg)\r\n   footerContent.appendChild(footerImgDiv)\r\n   footerContent.appendChild(footerSocialDiv)\r\n   footerContent.appendChild(footerAdressAndNumberDiv)\r\n   footer.appendChild(footerContent)\r\n   content.appendChild(footer);\r\n\r\n   \r\n\r\n   document.querySelector('#instagram').classList.add('fa-brands')\r\n   document.querySelector('#instagram').classList.add('fa-instagram')\r\n  \r\n   document.querySelector('#facebook').classList.add('fa-brands')\r\n   document.querySelector('#facebook').classList.add('fa-square-facebook')\r\n\r\n   document.querySelector('#x').classList.add('fa-brands')\r\n   document.querySelector('#x').classList.add('fa-square-x-twitter')\r\n\r\n   document.querySelector('#githubA').setAttribute('href', 'https://github.com/Amstherdam')\r\n   document.querySelector('#githubA').setAttribute('target', '_blank')\r\n   document.querySelector('#github').classList.add('fa-brands')\r\n   document.querySelector('#github').classList.add('fa-square-github')\r\n }\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFooter);\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurantpage/./src/components/footer.js?");

/***/ }),

/***/ "./src/components/homePage.js":
/*!************************************!*\
  !*** ./src/components/homePage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst createHomePage = () =>  {\r\n    const content = document.querySelector('#content')\r\n    const pageContent = document.createElement('div');\r\n    pageContent.classList.add('page-content')\r\n\r\n    const cocktailVideo = document.createElement('video'); \r\n    cocktailVideo.setAttribute('id', 'cocktailVideo')\r\n    cocktailVideo.autoplay = true;\r\n    cocktailVideo.loop = true;\r\n    cocktailVideo.style.maxWidth = 'auto';\r\n    cocktailVideo.style.height = 'auto';\r\n\r\n    const cocktailVideoSource = document.createElement('source');\r\n    cocktailVideoSource.src = './video/cocktailVideo.mp4'\r\n    cocktailVideoSource.type = 'video/mp4'\r\n\r\n    // Append created items\r\n    cocktailVideo.appendChild(cocktailVideoSource);\r\n    pageContent.appendChild(cocktailVideo);\r\n\r\n    // Create home page text\r\n    const cocktailTextDiv = document.createElement('div');\r\n    cocktailTextDiv.setAttribute('id', 'cocktailTextDiv');\r\n\r\n    const cocktailTextHeader = document.createElement('h2');\r\n    cocktailTextHeader.setAttribute('id', 'cocktailTextHeader')\r\n    cocktailTextHeader.textContent = 'Welcome the onlyCocktail'\r\n\r\n    const cocktailTextP = document.createElement('p');\r\n    cocktailTextP.setAttribute('id', 'cocktailTextP');\r\n    cocktailTextP.textContent = 'onlyCocktail drinks have always been vehicles for stories– be it about the cultures that inspire them, the ingredients that bring them to fruition, or the spirits themselves, carefully crafted by masters around the region. Come by the onlyCocktail bar for a drink and trace its history with us.';\r\n\r\n    \r\n\r\n    pageContent.appendChild(cocktailTextDiv);\r\n    cocktailTextDiv.appendChild(cocktailTextHeader);\r\n    cocktailTextDiv.appendChild(cocktailTextP)\r\n    content.appendChild(pageContent)\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomePage);\r\n\r\n\n\n//# sourceURL=webpack://restaurantpage/./src/components/homePage.js?");

/***/ }),

/***/ "./src/components/menuPage.js":
/*!************************************!*\
  !*** ./src/components/menuPage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst createMenuPage = () => {\r\n    const content = document.querySelector('#content')\r\n    const pageContent = document.createElement('div');\r\n    pageContent.classList.add('page-content')\r\n\r\n    const promotionDiv = document.createElement('div');\r\n    promotionDiv.setAttribute('id', 'promotionDiv')\r\n\r\n    let cocktailArr = [ 'Manhattan', 'Negroni', 'Martini', 'Daiquiri', 'WhiskeySour', 'Sazerac', 'Paloma', 'Sidecar', 'Mojito', 'BloodyMary', 'Gimlet', 'Margarita',  ]\r\n\r\n    cocktailArr.forEach(item => { \r\n        let cocktailSection = item\r\n        cocktailSection = document.createElement('div')\r\n        cocktailSection.setAttribute('id', item)\r\n        cocktailSection.classList.add('promotionCocktailSections')\r\n\r\n        const cocktailSectionText = document.createElement('div')\r\n        cocktailSectionText.classList.add('cocktailSectionText')\r\n        const cocktailSectionP = document.createElement('p')\r\n        cocktailSectionP.classList.add('cocktailSectionP')\r\n        cocktailSectionP.setAttribute('id', item+'P')\r\n\r\n        const promotionHeader = document.createElement('h2')\r\n        promotionHeader.classList.add('cocktailHeader')\r\n        const itemUpper = item.toUpperCase()\r\n        promotionHeader.innerHTML = itemUpper ;\r\n\r\n        const cocktailImageDiv = document.createElement('div')\r\n        cocktailImageDiv.classList.add('cocktailImageDiv')\r\n        const cocktailImage = document.createElement('img')\r\n        cocktailImage.classList.add('cocktailImg')\r\n        cocktailImage.setAttribute('id', item+'Img')\r\n        \r\n        cocktailImageDiv.appendChild(cocktailImage)\r\n        cocktailSectionText.appendChild(promotionHeader)\r\n        cocktailSectionText.appendChild(cocktailSectionP)\r\n        cocktailSection.appendChild(cocktailSectionText)\r\n        cocktailSection.appendChild(cocktailImageDiv)\r\n        promotionDiv.appendChild(cocktailSection)\r\n \r\n    })\r\n\r\n    pageContent.appendChild(promotionDiv)\r\n    content.appendChild(pageContent)\r\n\r\n\r\n    document.getElementById('ManhattanP').innerHTML = \"Amazingly, the drink that socialites tipped to their lips in the 19th century looks and tastes pretty much the same as the one served today at any decent cocktail bar. The Manhattan's mix of American whiskey and Italian vermouth, enlivened with a few dashes of aromatic bitters, is timeless and tasty—the very definition of what a cocktail should be.\"\r\n    document.getElementById('ManhattanImg').src = './image/Manhattan.jpg'\r\n\r\n    document.getElementById('NegroniP').innerHTML = 'Refreshingly bitter, the Negroni is said to have been invented in Florence by the dauntless Italian Count Camillo Negroni in the early 20th century. While at Bar Casoni in Florence, he demanded that the bartender strengthen his favorite cocktail, the Americano, by replacing the usual soda water with gin. To further differentiate the drink, the bartender also employed an orange peel rather than the typical lemon peel.'\r\n    document.getElementById('NegroniImg').src = './image/Negroni.jpg'\r\n\r\n    document.getElementById('MartiniP').innerHTML = \"The Martini is known for its allure and sophistication, but its origins are muddled at best. The formula appeared in print under several different names around the turn of the 20th century. Made traditionally with gin (although vodka is a frequent substitute), dry vermouth, and orange bitters, it's a cocktail that ignites the imagination.\"\r\n    document.getElementById('MartiniImg').src = './image/Martini.jpg'\r\n\r\n    document.getElementById('DaiquiriP').innerHTML = 'Perhaps one of the most well-known rum cocktails ever created, the Daiquiri has gone through ups and downs over its 100+ year history. Here’s everything you need to know about this iconic drink, and how to mix it right.The blender has certainly put its stamp on the Daiquiri, but this profoundly simple drink is at its best when it stays clear of a steel blade. Simply shake up rum, simple syrup and a blast of fresh lime juice, and you have the most perfect of citrusy cocktails.'\r\n    document.getElementById('DaiquiriImg').src = './image/daiquiri.jpg'\r\n\r\n    document.getElementById('WhiskeySourP').innerHTML = '“Egg white or no?” is the most important decision you’ll need to make with this cocktail. When the recipe for this cocktail first appeared in 1862 in the famed Jerry Thomas Bartender’s Guide, it called for an egg white to be shaken along with whiskey, lemon juice, and simple syrup, taming the tartness and giving the drink a richer texture. In modern times, however, it’s common for the egg to be left out. Our suggestion: Try it both ways and find out which you prefer.'\r\n    document.getElementById('WhiskeySourImg').src = './image/WhiskeySour.jpg'\r\n\r\n    document.getElementById('SazeracP').innerHTML = 'Ever been to New Orleans? If so, then you’ve probably had this cocktail. Created in the mid-1800s at the Sazerac Coffee House in the storied Crescent City, the Sazerac is a complex concoction that starts with an absinthe rinse. Rye whiskey (originally cognac, but that swap happened pretty early), bitters (most often Peychaud’s), and a sugar cube create a boozy yet fragrant sipper.'\r\n    document.getElementById('SazeracImg').src = './image/Sazerac.jpg'\r\n\r\n    document.getElementById('PalomaP').innerHTML = 'It may get overshadowed by the Margarita stateside, but this is Mexico’s favorite cocktail. Drink snobs will tell you the tequila should be joined in the glass by freshly squeezed grapefruit juice and club soda, with a squeeze of lime, but we’ve tried it both ways and can assure you that the standard way of making the drink, with grapefruit soda (and, yes, that same squeeze of lime) is every bit as delicious. '\r\n    document.getElementById('PalomaImg').src = './image/Paloma.jpg'\r\n\r\n    document.getElementById('SidecarP').innerHTML = 'It’s now common practice to sip cognac neat. It sure does shine that way. But you’ll gain a new appreciation for the remarkably versatile French spirit after you try it in this citrusy cocktail, a mixture of cognac, fresh lemon juice, and the orange liqueur Cointreau. Don’t balk at the sugar-coated rim: It’s there to mask the Sidecar’s wicked tongue.'\r\n    document.getElementById('SidecarImg').src = './image/Sidecar.jpg'\r\n\r\n    document.getElementById('MojitoP').innerHTML = 'This Cuban classic calls for combining unaged white rum, lime juice, muddled mint leaves, and sugar before topping it all with club soda. It’s a refreshing drink that provides a blast of flavor to take you straight into the Caribbean tropics, as perfect at a party as it is poolside.'\r\n    document.getElementById('MojitoImg').src = './image/Mojito.jpg'\r\n\r\n    document.getElementById('BloodyMaryP').innerHTML = 'It’s a hangover cure, a nutritious breakfast, an airport bar staple. This tomato- and vodka-based classic, created in Paris in the 1920s, is one of those drinks every city, every bar, and every bartender makes their own way. If you’ve only ever had it with bottled mix and a fridgeful of garnishes, try a more traditional version with Worcestershire sauce, horseradish, and celery salt, plus good vodka and tomato juice. The drink’s balance may surprise you.'\r\n    document.getElementById('BloodyMaryImg').src = './image/BloodyMary.jpg'\r\n\r\n    document.getElementById('GimletP').innerHTML = 'Believed to have been created by British sailors (as many of the oldest cocktails were) as a way to prevent scurvy, this drink mixes a clear spirit, lime juice, and simple syrup to create a refreshing (and vitamin C-filled) cocktail. The original used gin as its base, while the vodka-based variation has since greatly surpassed it in popularity. Either one is worth a spot in your summertime heavy cocktail rotation.'\r\n    document.getElementById('GimletImg').src = './image/Gimlet.jpg'\r\n\r\n    document.getElementById('MargaritaP').innerHTML = 'You’ve probably had a bad Margarita. Or more than one. But when this zesty classic is made correctly—with quality tequila, orange liqueur, and lime juice—the drink carries itself upright. The history of the Margarita is deep: Its progenitor, the Tequila Daisy, has been around since the 1930s, when there were no bottled mixes. Or blenders. The drink has come a long way, but finding your way back to its earliest incarnations is key to appreciating it.'\r\n    document.getElementById('MargaritaImg').src = './image/Margarita.jpg'\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuPage);\r\n\n\n//# sourceURL=webpack://restaurantpage/./src/components/menuPage.js?");

/***/ }),

/***/ "./src/components/navBar.js":
/*!**********************************!*\
  !*** ./src/components/navBar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage */ \"./src/components/homePage.js\");\n/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage */ \"./src/components/menuPage.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ \"./src/components/footer.js\");\n/* harmony import */ var _aboutPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutPage */ \"./src/components/aboutPage.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ \"./src/components/contact.js\");\n/* Create navbar anad navbar's inside items */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst createNavbar = () => { \r\n\r\nconst content = document.querySelector('#content')\r\n\r\n    let navbarItems = ['Home', 'Menu', 'About', 'Contact'];\r\n\r\n    const navbarDiv = document.createElement('div');\r\n    navbarDiv.classList.add('navbar')\r\n\r\n    navbarItems.forEach(item => { \r\n\r\n        let navbarA = document.createElement('a')\r\n        navbarA.innerHTML = item\r\n\r\n        navbarA.setAttribute('id', item)\r\n\r\n        navbarDiv.appendChild(navbarA)\r\n        content.appendChild(navbarDiv)\r\n\r\n       navbarA.addEventListener('click', () => { \r\n        if(navbarA.id === 'Home') { \r\n            clearContent()\r\n            ;(0,_homePage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n            \r\n        }\r\n        else if (navbarA.id === 'Menu') { \r\n            clearContent()\r\n            ;(0,_menuPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n            ;(0,_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n        }\r\n        else if (navbarA.id === 'About') { \r\n            clearContent()\r\n            ;(0,_aboutPage__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n            ;(0,_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n        }\r\n        else if (navbarA.id === 'Contact') { \r\n            clearContent()\r\n            ;(0,_contact__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n            ;(0,_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n        }\r\n       })\r\n    })\r\n\r\n\r\n}\r\n\r\nfunction clearContent() { \r\n    const content = document.querySelector('#content')\r\n    const pageContent = document.querySelector('.page-content');\r\n    const footer = document.querySelector('#footer')\r\n    if(pageContent) {\r\n        content.removeChild(pageContent);\r\n       if(footer) { \r\n        content.removeChild(footer)\r\n       }\r\n    }\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNavbar);\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurantpage/./src/components/navBar.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n\r\n(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/homePage */ \"./src/components/homePage.js\");\n/* harmony import */ var _components_navBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navBar */ \"./src/components/navBar.js\");\n\r\n\r\n\r\n\r\n\r\nfunction initionalLoad() { \r\n    (0,_components_navBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n    ;(0,_components_homePage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n    \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initionalLoad);\r\n\n\n//# sourceURL=webpack://restaurantpage/./src/pageLoad.js?");

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