/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_AppTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/AppTitle */ \"./src/components/AppTitle.js\");\n/* harmony import */ var _components_InfoCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/InfoCard */ \"./src/components/InfoCard.js\");\n// Creating React element with nested elements\n\n\nReactDOM.render( /*#__PURE__*/React.createElement(_components_AppTitle__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null), document.getElementById('root'));\nReactDOM.render( /*#__PURE__*/React.createElement(_components_InfoCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), document.getElementById('card'));\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/components/AppTitle.js":
/*!************************************!*\
  !*** ./src/components/AppTitle.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// React Class Component\nclass AppTitle extends React.Component {\n  render() {\n    return /*#__PURE__*/React.createElement(\"h1\", {\n      className: \"text-2xl\"\n    }, \"Step 5: Webpack\");\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppTitle);\n\n//# sourceURL=webpack:///./src/components/AppTitle.js?");

/***/ }),

/***/ "./src/components/InfoCard.js":
/*!************************************!*\
  !*** ./src/components/InfoCard.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// React Function Component\nfunction InfoCard() {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"max-w-sm mx-auto mt-8 rounded overflow-hidden shadow-lg\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"px-6 py-4\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"font-bold text-xl mb-2\"\n  }, \"The Module Bundler Webpack\"), /*#__PURE__*/React.createElement(\"p\", {\n    className: \"text-gray-700 text-base\"\n  }, /*#__PURE__*/React.createElement(\"a\", {\n    href: \"https://webpack.js.org/\"\n  }, \"Webpack\"), \" ist ein Module-Bundler. Das hei\\xDFt: die hier benutzten ECMAScript-Module werden schon zur Entwicklungs-Zeit zusammengefasst zu einem Bundle - also genau einer Datei. Damit entf\\xE4llt nat\\xFCrlich die Einschr\\xE4nkung, dass der IE diese App nicht mehr laden kann. Au\\xDFerdem bringt es zumindest bei HTTP 1.1 eine gewisse Performance-Verbesserung mit, anstatt hunderten einzelnen Dateien nur eine geb\\xFCndelte zu laden. Damit die IE Kompatibilit\\xE4t erreicht wird, sollte nat\\xFCrlich auch Babel angewiesen werde, moderne Syntax-Features aus unserem Quellcode heraus zu \\\"transpilieren\\\".\")));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (InfoCard);\n\n//# sourceURL=webpack:///./src/components/InfoCard.js?");

/***/ })

/******/ });