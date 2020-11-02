module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/denisten/workspace/mid-landing/pages/_app.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"];\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"createGlobalStyle\"]`\n  * {\n    box-sizing: border-box;\n  }\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: MuseoSans,sans-serif;\n    line-height: 1;\n  }\n  @font-face {\n    font-family: MuseoSansCyrl;\n    src: url('/static/fonts/Museo-Sans-0.woff');\n  }\n  @font-face {\n    font-family: MuseoSansMedium;\n    src: url('/static/fonts/Museo-Sans-1.woff');  \n  }\n  @font-face {\n    font-family: MuseoSansBold;\n    src: url('/static/fonts/Museo-Sans-2.woff');\n  }\n  p {\n    font-family: MuseoSansCyrl,sans-serif;\n    font-size: 18px;\n    font-weight: 300;\n    line-height: 1.56;\n    color: #5a6d73;\n  }\n  h1 {\n    line-height: 1.17;\n    font-family: MuseoSansBold,sans-serif;\n    color: #202D3D;\n    font-size: 75px;\n    font-weight: 900;\n    margin: 0;\n    @media (max-width: 1279px) {\n      font-size: 65px;\n    }\n    @media (max-width: 767px) {\n      font-size: 47px;\n    }\n  }\n  img, picture {\n    display: block;\n    max-width: 100%;\n    height: auto;\n  }\n  h4, h5 {\n    margin: 0 0 16px 0;\n    color: #2e3c40;\n    font-size: 27px;\n    line-height: 1.19;    \n    font-family: MuseoSansBold,sans-serif;\n    font-weight: 900\n  }\n  h3 {\n    color: #2e3c40;\n    font-family: MuseoSansBold,sans-serif;\n    font-size: 45px;\n    line-height: 1.16;\n  }\n`;\n\nconst MyApp = ({\n  Component,\n  pageProps\n}) => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], null, __jsx(GlobalStyle, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }\n  }), __jsx(Component, _extends({}, pageProps, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbIkdsb2JhbFN0eWxlIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNQSxXQUFXLEdBQUdDLG1FQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBOURBOztBQWdFQSxNQUFNQyxLQUFLLEdBQUcsQ0FBQztBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBRCxLQUE4QjtBQUMxQyxTQUNFLDREQUNFLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLFNBQUQsZUFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRkYsQ0FERjtBQU1ELENBUEQ7O0FBU2VGLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXG4gICoge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbiAgYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1mYW1pbHk6IE11c2VvU2FucyxzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBNdXNlb1NhbnNDeXJsO1xuICAgIHNyYzogdXJsKCcvc3RhdGljL2ZvbnRzL011c2VvLVNhbnMtMC53b2ZmJyk7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IE11c2VvU2Fuc01lZGl1bTtcbiAgICBzcmM6IHVybCgnL3N0YXRpYy9mb250cy9NdXNlby1TYW5zLTEud29mZicpOyAgXG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IE11c2VvU2Fuc0JvbGQ7XG4gICAgc3JjOiB1cmwoJy9zdGF0aWMvZm9udHMvTXVzZW8tU2Fucy0yLndvZmYnKTtcbiAgfVxuICBwIHtcbiAgICBmb250LWZhbWlseTogTXVzZW9TYW5zQ3lybCxzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU2O1xuICAgIGNvbG9yOiAjNWE2ZDczO1xuICB9XG4gIGgxIHtcbiAgICBsaW5lLWhlaWdodDogMS4xNztcbiAgICBmb250LWZhbWlseTogTXVzZW9TYW5zQm9sZCxzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAjMjAyRDNEO1xuICAgIGZvbnQtc2l6ZTogNzVweDtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTI3OXB4KSB7XG4gICAgICBmb250LXNpemU6IDY1cHg7XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgZm9udC1zaXplOiA0N3B4O1xuICAgIH1cbiAgfVxuICBpbWcsIHBpY3R1cmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgaDQsIGg1IHtcbiAgICBtYXJnaW46IDAgMCAxNnB4IDA7XG4gICAgY29sb3I6ICMyZTNjNDA7XG4gICAgZm9udC1zaXplOiAyN3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjE5OyAgICBcbiAgICBmb250LWZhbWlseTogTXVzZW9TYW5zQm9sZCxzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDBcbiAgfVxuICBoMyB7XG4gICAgY29sb3I6ICMyZTNjNDA7XG4gICAgZm9udC1mYW1pbHk6IE11c2VvU2Fuc0JvbGQsc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMTY7XG4gIH1cbmA7XG5cbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });