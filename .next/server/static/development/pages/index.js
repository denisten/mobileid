module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/about/index.tsx":
/*!************************************!*\
  !*** ./components/about/index.tsx ***!
  \************************************/
/*! exports provided: About */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "About", function() { return About; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buttons */ "./components/buttons/index.tsx");
var _jsxFileName = "/Users/denisten/workspace/mid-landing/components/about/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Star = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: inline-block;
  position: absolute;
  font-size: 32.5px;
  top: 6px;
`;
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  position: relative;
  width: 844px;
  font-size: 64px;
  line-height: 76px;
  color: #202d3d;
  margin: 95px auto 0;
  @media (max-width: 1279px) {
    padding: 0 30px;
    margin-top: 50px;
    font-size: 45px;
    line-height: 57px;
  }
  h1 {
    line-height: 1.07;
  }
`;
const H1Description = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  font-size: 14px;
  line-height: normal;
  letter-spacing: 0;
  color: #202d3d;
  margin-top: 15px;
  font-weight: 400;
`;
const Description = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  width: 560px;
  p {
    margin: 18px 0 0 0;
  }
`;
const ButtonsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 844px;
  display: flex;
  margin: 110px auto;
  @media (max-width: 1279px) {
    padding-left: 30px;
  }
  @media (max-width: 767px) {
    width: auto;
    padding-left: 0;
    margin: 100px auto;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;
const About = ({
  handler
}) => {
  return __jsx(Wrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439", ' ', __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, "ID", __jsx(Star, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, "*"))), __jsx(H1Description, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, "* \u0423\u0441\u043B\u0443\u0433\u0430 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043B\u0438\u0446."), __jsx(Description, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, "\u0411\u044B\u0441\u0442\u0440\u0430\u044F \u0438 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u0430\u044F \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F \u043D\u0430 \u0441\u0430\u0439\u0442\u0430\u0445 \u0438 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F\u0445 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u043E\u0432 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, "\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u0437\u0430\u0431\u044B\u0442\u044B\u0445 \u043F\u0430\u0440\u043E\u043B\u0435\u0439 \u0438 \u043B\u043E\u0433\u0438\u043D\u043E\u0432, \u0438 \u0430\u0432\u0442\u043E\u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044E \u0434\u0430\u043D\u043D\u044B\u0445.")), __jsx(ButtonsWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, __jsx(_buttons__WEBPACK_IMPORTED_MODULE_2__["ButtonConsult"], {
    margin: "0 85px 0 0",
    handler: handler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }), __jsx(_buttons__WEBPACK_IMPORTED_MODULE_2__["ButtonDemo"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  })));
};

/***/ }),

/***/ "./components/accordion/index.tsx":
/*!****************************************!*\
  !*** ./components/accordion/index.tsx ***!
  \****************************************/
/*! exports provided: Accordion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return Accordion; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/denisten/workspace/mid-landing/components/accordion/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  cursor: pointer;
  display: flex;
  position: relative;
  padding: 30px 30px 30px 31px;
  align-items: center;
  :before {
    position: absolute;
    top: 0;
    right: 0;
    width: 10px;
    height: 100%;
    content: '';
    transition: all 0.4s ease;
    transition-delay: 0s;
    background-image: url('/static/img/accordion/down.svg');
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 10px;
  }
`;
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  position: relative;
  border-top: 1px solid #f2f2f2;
  span {
    font-family: MuseoSansMedium, sans-serif;
    font-size: 18px;
    font-weight: 700;
  }
`;
const Icon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.i`
  margin-right: 20px;
  background-image: url('/static/img/accordion/accordion-icon.svg');
  position: absolute;
  top: 50%;
  left: 0;
  width: 15px;
  height: 20px;
  transform: translateY(-50%);
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: contain;
`;
const Description = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul`
  display: block;
  list-style: none;
  padding: 0 0 0 31px;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.56;
  color: #5a6d73;
  margin: 0;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.4s ease-in-out;
  &.open {
    max-height: 300px;
  }
  li {
    display: block;
    padding: 16px 0;
  }
  div {
    margin-bottom: 20px;
  }
`;
const Accordion = props => {
  const {
    isOpened,
    setIsOpened,
    id,
    title,
    description
  } = props;
  const descRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    var _descRef$current, _descRef$current2;

    isOpened ? (_descRef$current = descRef.current) === null || _descRef$current === void 0 ? void 0 : _descRef$current.classList.add('open') : (_descRef$current2 = descRef.current) === null || _descRef$current2 === void 0 ? void 0 : _descRef$current2.classList.remove('open');
  }, [isOpened]);
  return __jsx(Wrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }
  }, __jsx(Title, {
    onClick: () => setIsOpened(id),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, __jsx(Icon, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }), " ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 18
    }
  }, title)), __jsx(Description, {
    ref: descRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, description.map(el => __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, el)))));
};

/***/ }),

/***/ "./components/auth-info/index.tsx":
/*!****************************************!*\
  !*** ./components/auth-info/index.tsx ***!
  \****************************************/
/*! exports provided: SliderWrapper, Info, Title, SubTitle, AuthInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderWrapper", function() { return SliderWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Info", function() { return Info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubTitle", function() { return SubTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInfo", function() { return AuthInfo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../slider */ "./components/slider/index.tsx");
var _jsxFileName = "/Users/denisten/workspace/mid-landing/components/auth-info/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const SliderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  background-color: ${props => props.backgroundColor};
  position: relative;
  display: flex;
  width: 968px;
  height: auto;
  margin: auto;
  font-family: MuseoSansCyrl, sans-serif;
  line-height: 1.56;
  z-index: 0;
  color: #fff;
  ul {
    padding: 0;
    line-height: 28.08px;
    li {
      line-height: 28px;
      list-style: none;
      padding: 5px 0 5px 24px;
      font-size: 18px;
      position: relative;
    }
    li::before {
      position: absolute;
      left: 0;
      width: 8px;
      height: 8px;
      margin-top: -4px;
      content: '';
      border-radius: 100%;
      background-color: #fff;
      top: 50%;
    }
  }
  ol {
    display: flex;
    flex-direction: column;
    font-size: 18px;
    padding-left: 24px;
    margin-top: 25px;
    margin-bottom: 35px;
    font-weight: 300;
    justify-content: space-evenly;
    list-style: none;
    counter-reset: numeric-counter;

    li {
      counter-increment: numeric-counter;
      position: relative;
      list-style-type: none;
      display: list-item;
    }
    li:before {
      content: counter(numeric-counter) '.';
      font-weight: 700;
      position: absolute;
      left: -24px;
    }
  }
`;
const Info = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  margin-top: 58px;
  margin-bottom: 58px;
  margin-left: 99px;
  width: 444px;
  @media (max-width: 1279px) {
    width: auto;
    margin: 490px 58px 58px;
  }
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  font-size: 26px;
  font-weight: 600;
`;
const SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  font-size: 23px;
  font-weight: 600;
`;
const imgArray = ['/static/img/slider-1/1.1.png', '/static/img/slider-1/1.2.png', '/static/img/slider-1/1.3.png', '/static/img/slider-1/1.4.png', '/static/img/slider-1/1.5.png'];
const AuthInfo = props => {
  return __jsx(SliderWrapper, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }
  }), __jsx(Info, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, __jsx(Title, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F \u0441 \u0432\u0432\u043E\u0434\u043E\u043C \u043D\u043E\u043C\u0435\u0440\u0430"), __jsx("ol", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, "\u041A\u043B\u0438\u0435\u043D\u0442 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u0442 \u043A\u0430\u043A \u0441\u043F\u043E\u0441\u043E\u0431 \u0432\u0445\u043E\u0434\u0430 \u0438\u043B\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \xAB\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 ID\xBB"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, "\u0412\u0432\u043E\u0434\u0438\u0442 \u0441\u0432\u043E\u0439 \u043D\u043E\u043C\u0435\u0440 \u0438 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 \u043D\u0430 \u0442\u0435\u043B\u0435\u0444\u043E\u043D Push - \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, "\u041D\u0430 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440 \u043F\u0440\u0438\u0434\u0435\u0442 Push-\u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0441 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435\u043C \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u0432\u0445\u043E\u0434 \u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0443 \u0434\u0430\u043D\u043D\u044B\u0445, \u043D\u0430\u0436\u0430\u0442\u0438\u0435\u043C \u043A\u043D\u043E\u043F\u043A\u0438 \xAB\u041E\u043A\xBB")), __jsx(SubTitle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, "\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438"), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0448\u0430\u0433\u043E\u0432"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }, "\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0434\u0430\u043D\u043D\u044B\u0445"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }, "\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043D\u0430 \u043B\u044E\u0431\u044B\u0445 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430\u0445: \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440, \u043F\u043B\u0430\u043D\u0448\u0435\u0442, \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D, \u043A\u043D\u043E\u043F\u043E\u0447\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D"))), __jsx(_slider__WEBPACK_IMPORTED_MODULE_2__["Slider"], {
    imgArray: imgArray,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }));
};

/***/ }),

/***/ "./components/auth-note/index.tsx":
/*!****************************************!*\
  !*** ./components/auth-note/index.tsx ***!
  \****************************************/
/*! exports provided: Note */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Note", function() { return Note; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/denisten/workspace/mid-landing/components/auth-note/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 868px;
  font-size: 14px;
  letter-spacing: 0;
  color: #202d3d;
  margin: ${props => props.margin || '30px auto 0'};
`;
const Note = props => {
  return __jsx(Wrapper, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }), "* \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F");
};

/***/ }),

/***/ "./components/auth-pin/index.tsx":
/*!***************************************!*\
  !*** ./components/auth-pin/index.tsx ***!
  \***************************************/
/*! exports provided: AuthPin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPin", function() { return AuthPin; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../slider */ "./components/slider/index.tsx");
/* harmony import */ var _auth_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth-info */ "./components/auth-info/index.tsx");
/* harmony import */ var _quick_auth_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../quick-auth-info */ "./components/quick-auth-info/index.tsx");
var _jsxFileName = "/Users/denisten/workspace/mid-landing/components/auth-pin/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_auth_info__WEBPACK_IMPORTED_MODULE_3__["SliderWrapper"])`
  margin: 200px auto 0 auto;
  color: #001424;
  ul {
    li::before {
      background-color: #001424;
    }
  }
  ${_auth_info__WEBPACK_IMPORTED_MODULE_3__["SubTitle"]} {
    font-family: MuseoSans, sans-serif;
    font-weight: 600;
  }
`;
const AuthPinTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_auth_info__WEBPACK_IMPORTED_MODULE_3__["Title"])`
  font-family: MuseoSans, sans-serif;
`;
const imgArray = ['/static/img/slider-3/3.1.png', '/static/img/slider-3/3.2.png', '/static/img/slider-3/3.3.png', '/static/img/slider-3/3.4.png', '/static/img/slider-3/3.5.png'];
const AuthPin = props => {
  return __jsx(Wrapper, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }), __jsx(_auth_info__WEBPACK_IMPORTED_MODULE_3__["Info"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx(AuthPinTitle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F \u0441 \u0432\u0432\u043E\u0434\u043E\u043C PIN-\u043A\u043E\u0434\u0430 *"), __jsx(_quick_auth_info__WEBPACK_IMPORTED_MODULE_4__["Description"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, "\u041D\u0430 \u0441\u0430\u0439\u0442\u0430\u0445 \u0441 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u043D\u044B\u043C\u0438 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F\u043C\u0438 \u043A \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0433\u0434\u0435 \u0432 \u043E\u043D\u043B\u0430\u0439\u043D \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u0437\u043D\u0430\u0447\u0438\u043C\u044B\u0445 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439, \u0437\u0430\u043A\u0430\u0437\u0430, \u043F\u043B\u0430\u0442\u0435\u0436\u043D\u043E\u0439 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438, \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043E \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0432\u0432\u043E\u0434\u0430 \u041F\u0418\u041D-\u043A\u043E\u0434\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0441\u043E\u0437\u0434\u0430\u0435\u0442\u0441\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u043C \u0438 \u0445\u0440\u0430\u043D\u0438\u0442\u044C\u0441\u044F \u043D\u0430 SIM-\u043A\u0430\u0440\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430, \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u044F \u0432\u044B\u0441\u043E\u043A\u0443\u044E \u043D\u0430\u0434\u0435\u0436\u043D\u043E\u0441\u0442\u044C \u0438 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0445"), __jsx(_auth_info__WEBPACK_IMPORTED_MODULE_3__["SubTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, "\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438"), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, "\u0415\u0434\u0438\u043D\u044B\u0439 PIN-\u043A\u043E\u0434 \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, "\u041F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0441 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u044F\u0432\u043D\u043E\u0433\u043E \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0441 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u0432 \u043E\u043D\u043B\u0430\u0439\u043D \u0441\u0435\u0440\u0432\u0438\u0441\u0435"))), __jsx(_slider__WEBPACK_IMPORTED_MODULE_2__["Slider"], {
    imgArray: imgArray,
    controllerColor: "#6e7782",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }));
};

/***/ }),

/***/ "./components/background-img/index.ts":
/*!********************************************!*\
  !*** ./components/background-img/index.ts ***!
  \********************************************/
/*! exports provided: BackgroundImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundImg", function() { return BackgroundImg; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const BackgroundImg = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.attrs({
  src: '/static/img/backgrounds/mock.png'
})`
  position: absolute;
  top: 4869px;
  right: 0;
  width: 35em;
`;

/***/ }),

/***/ "./components/buttons/index.tsx":
/*!**************************************!*\
  !*** ./components/buttons/index.tsx ***!
  \**************************************/
/*! exports provided: ButtonConsult, ButtonCallMeBack, ButtonDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonConsult", function() { return ButtonConsult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonCallMeBack", function() { return ButtonCallMeBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonDemo", function() { return ButtonDemo; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/denisten/workspace/mid-landing/components/buttons/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const ButtonConsultWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  font-family: MuseoSansMedium, sans-serif;
  font-size: 18px;
  line-height: 60px;
  display: inline-block;
  width: 287px;
  min-width: 220px;
  height: 60px;
  padding: 0 38px;
  cursor: pointer;
  -webkit-transition: background-color 0.3s ease;
  transition: background-color 0.3s ease;
  text-align: center;
  text-decoration: none;
  color: #fff;
  border: none;
  border-radius: 5px;
  background-color: #c000d9;
  box-shadow: none;
  margin: ${props => props.margin};
  :hover {
    background-color: #de04fa;
    color: #fff;
  }
`;
const ButtonDemoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(ButtonConsultWrapper)`
  color: #202d3d;
  background-color: transparent;
  border: 2px solid #bbc1c7;
  font-weight: 700;
`;
const ButtonsCallMeBackWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button`
    font-size: 18px;
    line-height: 60px;
    display: inline-block;
    min-width: 220px;
    height: 60px;
    padding: 0 38px;
    cursor: pointer;
    transition: background-color .3s ease;
    text-align: center;
    text-decoration: none;
    color: #fff;
    border: none;
    border-radius: 5px;
    background-color: #c000d9;
    box-shadow: none;
}`;
const ButtonConsult = (_ref) => {
  let {
    handler
  } = _ref,
      props = _objectWithoutProperties(_ref, ["handler"]);

  return __jsx(ButtonConsultWrapper, _extends({}, props, {
    onClick: () => handler(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }), "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E");
};
const ButtonCallMeBack = ({
  handler
}) => {
  return __jsx(ButtonsCallMeBackWrapper, {
    onClick: () => handler(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u043F\u0440\u043E\u0441 \u043D\u0430 \u0437\u0432\u043E\u043D\u043E\u043A");
};
const ButtonDemo = props => {
  return __jsx(ButtonDemoWrapper, _extends({}, props, {
    onClick: () => window.open('https://store.mobcon.prostream.ru/'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }
  }), "\u0414\u0435\u043C\u043E \u0434\u043E\u0441\u0442\u0443\u043F");
};

/***/ }),

/***/ "./components/call-me-back-modal/index.tsx":
/*!*************************************************!*\
  !*** ./components/call-me-back-modal/index.tsx ***!
  \*************************************************/
/*! exports provided: CallMeBack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallMeBack", function() { return CallMeBack; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buttons */ "./components/buttons/index.tsx");
var _jsxFileName = "/Users/denisten/workspace/mid-landing/components/call-me-back-modal/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  max-width: 800px;
  position: relative;
  padding: 1.2rem;
  background: #ffffff;
  background-clip: padding-box;
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.25);
  margin: auto;
`;
const Content = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.form`
  position: relative;
  max-width: 690px;
  div {
    display: block;
    width: 100%;
  }
  input {
    font-family: MuseoSans, sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: normal;
    margin-bottom: 24px;
    padding: 21px 25px 19px;
    transition: box-shadow 0.3s;
    color: #2e3c40;
    border: 1px solid #e9e9e9;
    border-radius: 4px;
    width: 100%;
  }
  .description {
    font-size: 14px;
    line-height: 1.43;
    display: inline-block;
    padding-left: 10px;
    font-weight: 300;
    text-align: center;
    margin-top: 1em;
  }
  .button-wrapper {
    display: flex;
    justify-content: space-around;
  }
`;
const CallMeBack = ({
  handler
}) => {
  const submitHandler = e => {
    e.preventDefault();
    handler();
  };

  return __jsx(ContentWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx(Content, {
    onSubmit: submitHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u0439 \u0437\u0432\u043E\u043D\u043E\u043A"), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, __jsx("input", {
    type: "text",
    name: "name",
    placeholder: "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F",
    "aria-label": "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, __jsx("input", {
    type: "text",
    name: "name",
    placeholder: "\u0412\u0430\u0448 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430",
    "aria-label": "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "button-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, __jsx(_buttons__WEBPACK_IMPORTED_MODULE_2__["ButtonCallMeBack"], {
    handler: handler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, "\u041D\u0430\u0436\u0430\u0432 \u043A\u043D\u043E\u043F\u043A\u0443 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u043F\u0440\u043E\u0441 \u0432\u044B \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0435\u0442\u0435 \u0441\u0432\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0432\u0430\u0448\u0438\u0445 \u0434\u0430\u043D\u043D\u044B\u0445"))));
};

/***/ }),

/***/ "./components/desktop-slider/index.tsx":
/*!*********************************************!*\
  !*** ./components/desktop-slider/index.tsx ***!
  \*********************************************/
/*! exports provided: DesktopSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesktopSlider", function() { return DesktopSlider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../slider */ "./components/slider/index.tsx");
var _jsxFileName = "/Users/denisten/workspace/mid-landing/components/desktop-slider/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 868px;
  margin: 142px auto 50px;
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  font-family: MuseoSansBoldest, sans-serif;
  font-weight: 900;
  width: 868px;
  height: 297px;
  font-size: 48px;
  line-height: 58px;
  color: #001424;
`;
const SliderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  position: relative;
  width: 761px;
  height: 428px;
`;
const imgArray = ['/static/img/slider-desktop/1.png', '/static/img/slider-desktop/2.png', '/static/img/slider-desktop/3.png', '/static/img/slider-desktop/4.png'];
const DesktopSlider = () => {
  return __jsx(Wrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx(Title, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 ID \u2013 \u043C\u0435\u0436\u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0441\u043A\u0438\u0439 \u0441\u0435\u0440\u0432\u0438\u0441 \u043F\u043E \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u0441 \u043E\u0434\u043D\u0438\u043C \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435\u043C \u0438 \u043E\u0434\u043D\u0438\u043C \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u043E\u043C"), __jsx(SliderWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx(_slider__WEBPACK_IMPORTED_MODULE_2__["Slider"], {
    boxShadow: "0 22px 34px 0 rgba(0,0,0,.16)",
    controllerColor: "#6e7782",
    imgPosition: "initial",
    imgArray: imgArray,
    imgHeight: "428px",
    imgWidth: "761px",
    width: "761px",
    height: "428px",
    removeBackground: true,
    position: "initial",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  })));
};

/***/ }),

/***/ "./components/faq/data.ts":
/*!********************************!*\
  !*** ./components/faq/data.ts ***!
  \********************************/
/*! exports provided: data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
const data = [{
  title: 'Мобильный ID – что это?',
  description: ['Это кнопка для размещения партнером на своих сайтах и/или в приложениях, использование которой запускает функционал быстрой и безопасной авторизации (создание учетной записи) и аутентификации (подтверждение актуальности) по номеру мобильного телефона клиента.', 'В случаях, когда предъявляются повышенные требования к безопасности для подтверждения действия запрашивается PIN-код.']
}, {
  title: 'Почему это удобно и в чем преимущества использования. Какой полезный опыт и какие данные получает партнер (владелец сайта/приложения)?',
  description: ['Для клиента это – простой и легкий вход на сайт и/или в приложение без необходимости помнить логин и/или пароль, для партнера (владельца сайта или приложения) – это проверенные Оператором номера телефонов клиентов, подтверждение действия и/или операции, возможность получения дополнительной информации о клиенте (номер телефона, email, ФИО, адрес доставки и т.п.).']
}, {
  title: 'Как это работает?',
  description: ['Клиент на сайте выбирает как способ входа или регистрации «Мобильный ID», затем вводит свой номера и получает на телефон PUSH-сообщение, затем на указанный номер придет PUSH-сообщение с предложением подтвердить вход и передачу данных нажатием кнопки «Ок».', 'Мобильный ID работает по технологии Mobile Connect, являющейся мировым стандартом, поддерживаемым Ассоциацией GSM (GSMA). Функционал уже запустили 70 операторов мобильной связи в 38 странах мира.']
}, {
  title: 'На каких устройствах и для каких Операторов связи это работает?',
  description: ['Мобильный ID поддерживается Операторами связи – МТС, МегаФон, Теле2, БиЛайн с возможностью использования на любых устройствах – ПК, планшет, смартфон, кнопочный телефон.']
}, {
  title: 'Сколько это стоит и кто платит за использование?',
  description: ['Бесплатно для клиента. Использование функциональности платно для партнера (владельца сайта и/или приложения) с возможностью гибкого ценообразования (например, бесплатный пробный период 30 дней, промо-пакет из минимального бесплатного количества операций и т.п.).']
}, {
  title: 'Как подключиться?',
  description: ['Отправить заполненную форму обратной связи, после чего с Вам свяжется менеджер с прояснением деталей, обмена контактам для быстрой связи и отправки необходимой документации.']
}, {
  title: 'Почему это безопасно?',
  description: ['Использование функционала возможно только для зарегистрированного на платформе сайта/приложения с необходимым выделением для этого персональных ключей.', 'Отправка PUSH-сообщения производится по специальному шифрованному каналу с персональным ключом для каждого клиента.', 'Во многих странах технология используется для работы с электронными государственными и финансовыми услугами, возможности использования электронной цифровой подписи.']
}, {
  title: 'PUSH-сообщение – что это?',
  description: ['Это краткое всплывающее текстовое уведомление, содержащее призыв для клиента к подтверждению целевого действия по Авторизации и/или Аутентификации.']
}, {
  title: 'PIN-код – что это?',
  description: ['Это персональный четырехзначный цифровой пароль, задаваемый клиентом на первичном этапе Авторизации и/или Аутентификации и в дальнейшем используемый для защиты своего согласия, например, при подтверждении операции, покупки и т.п.', 'Данный пароль хранится в защищенной области памяти на SIM-карте, доступной только для клиента (без доступа такой к информации Оператора).']
}];

/***/ }),

/***/ "./components/faq/index.tsx":
/*!**********************************!*\
  !*** ./components/faq/index.tsx ***!
  \**********************************/
/*! exports provided: FAQ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAQ", function() { return FAQ; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../accordion */ "./components/accordion/index.tsx");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./components/faq/data.ts");
var _jsxFileName = "/Users/denisten/workspace/mid-landing/components/faq/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 690px;
  margin: 100px auto;
  font-family: MuseoSans, sans-serif;
  list-style: none;
  h3 {
    text-align: center;
    margin-bottom: 30px;
  }
`;
const AccordionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  div:first-child {
    border-top: none;
  }
`;
const FAQNote = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  font-size: 14px;
  letter-spacing: 0;
  color: #202d3d;
  margin-top: 50px;
  font-family: MuseoSans, sans-serif;
`;
const initState = new Array(9).fill(false);
const FAQ = () => {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initState);

  const handler = id => {
    const newState = new Array(9).fill(false);
    newState[id] = !state[id];
    setState(newState);
  };

  return __jsx(Wrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, "\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u0438 \u043E\u0442\u0432\u0435\u0442\u044B *"), __jsx(AccordionWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, state.map((el, id) => __jsx(_accordion__WEBPACK_IMPORTED_MODULE_2__["Accordion"], {
    isOpened: state[id],
    setIsOpened: handler,
    id: id,
    description: _data__WEBPACK_IMPORTED_MODULE_3__["data"][id].description,
    title: _data__WEBPACK_IMPORTED_MODULE_3__["data"][id].title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }))), __jsx(FAQNote, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, "* \u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0435 \u043F\u0440\u0438 \u043D\u0430\u043B\u0438\u0447\u0438\u0438 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0433\u043E \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u044F. \u0424\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435."));
};

/***/ }),

/***/ "./components/feedback-question/index.tsx":
/*!************************************************!*\
  !*** ./components/feedback-question/index.tsx ***!
  \************************************************/
/*! exports provided: FeedbackQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackQuestion", function() { return FeedbackQuestion; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/denisten/workspace/mid-landing/components/feedback-question/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  margin-bottom: 144px;
`;
const TitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  font-size: 27px;
  line-height: 20px;
  color: #001424;
  font-family: MuseoSans, sans-serif;
  font-weight: 600;
  text-align: center;
  padding: 0 30px;
`;
const Options = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  justify-content: center;
  font-size: 27px;
  color: #001424;
  margin-top: 45px;
  margin-bottom: 20px;
  font-family: MuseoSansMedium, sans-serif;
  .option {
    cursor: pointer;
    width: 4em;
    text-align: center;
  }
  .yes {
    margin-right: 30px;
  }
`;
const Amount = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  justify-content: center;
  font-size: 27px;
  font-family: MuseoSansMedium, sans-serif;
  color: #001424;
  .option2 {
    cursor: pointer;
    width: 4em;
    text-align: center;
  }
  div:first-child {
    margin-right: 30px;
  }
`;
const FeedbackQuestion = () => {
  const {
    0: likes,
    1: setLikes
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(24);
  const {
    0: dislikes,
    1: setDislikes
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(4);

  const handleYesClick = () => setLikes(likes + 1);

  const handleNoClick = () => setDislikes(dislikes + 1);

  return __jsx(Wrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, __jsx(TitleWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, "\u042D\u0442\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0431\u044B\u043B\u0430 \u043F\u043E\u043B\u0435\u0437\u043D\u0430?"), __jsx(Options, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "option yes",
    onClick: handleYesClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, "\uD83E\uDD29 \u0414\u0430"), __jsx("div", {
    className: "option",
    onClick: handleNoClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, "\uD83E\uDD28 \u041D\u0435\u0442")), __jsx(Amount, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "option2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, likes), __jsx("div", {
    className: "option2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, dislikes)));
};

/***/ }),

/***/ "./components/header/index.tsx":
/*!*************************************!*\
  !*** ./components/header/index.tsx ***!
  \*************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/denisten/workspace/mid-landing/components/header/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c000d9;
  color: #fff;
  font-size: 25px;
  font-weight: 300;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    height: auto;
    text-align: center;
    font-size: 14px;
  }
  @media (max-width: 1279px) {
    padding: 15px;
    font-size: 20px;
  }
  a {
    color: #fff;
    text-decoration: underline;
    cursor: pointer;
    font-weight: 300;
    margin-left: 35px;
  }
`;
const Header = ({
  handler
}) => {
  return __jsx(Wrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, "\u0421\u043E\u043C\u043D\u0435\u0432\u0430\u0435\u0442\u0435\u0441\u044C? \u041F\u0440\u043E\u0442\u0435\u0441\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u0434\u043E 30 \u0434\u043D\u0435\u0439 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E!", __jsx("a", {
    onClick: () => handler(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, "\u041F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C "));
};

/***/ }),

/***/ "./components/info-in-numbers/index.tsx":
/*!**********************************************!*\
  !*** ./components/info-in-numbers/index.tsx ***!
  \**********************************************/
/*! exports provided: InfoInNumbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoInNumbers", function() { return InfoInNumbers; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/denisten/workspace/mid-landing/components/info-in-numbers/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  width: 844px;
  margin: auto;
  font-family: MuseoSansBold, sans-serif;
`;
const InfoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  flex-direction: column;
  margin-right: 175px;
  font-family: MuseoSansMedium, sans-serif;
  .number {
    display: flex;
    justify-content: space-between;
    font-size: 66px;
    line-height: normal;
    margin-bottom: 6px;
    font-weight: 900;
  }
  .text {
    font-size: 18px;
    font-weight: 300;
    line-height: 1.56;
    color: #5a6d73;
  }
`;
const InfoInNumbers = () => {
  return __jsx(Wrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(InfoWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "number",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, "70"), __jsx("span", {
    className: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, "\u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u0432")), __jsx(InfoWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "number",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, "38"), __jsx("span", {
    className: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, "\u0441\u0442\u0440\u0430\u043D \u043C\u0438\u0440\u0430")));
};

/***/ }),

/***/ "./components/info/index.tsx":
/*!***********************************!*\
  !*** ./components/info/index.tsx ***!
  \***********************************/
/*! exports provided: Info */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Info", function() { return Info; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth-info */ "./components/auth-info/index.tsx");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buttons */ "./components/buttons/index.tsx");
/* harmony import */ var _auth_note__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth-note */ "./components/auth-note/index.tsx");
var _jsxFileName = "/Users/denisten/workspace/mid-landing/components/info/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 844px;
  margin: 130px auto 50px;
  font-family: MuseoSansMedium, sans-serif;
`;
const InfoTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_auth_info__WEBPACK_IMPORTED_MODULE_2__["Title"])`
  width: 568px;
  height: 64px;
  font-size: 26px;
  color: #001424;
  font-weight: 700;
`;
const Advantages = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  justify-content: space-between;
  width: 844px;
  margin-top: 50px;
  margin-bottom: 50px;
  ul {
    width: 380px;
    height: auto;
    color: #001424;
    margin-top: 15px;
    padding: 0;
    list-style: none;
  }
  li {
    font-size: 18px;
    line-height: inherit;
    padding-bottom: 5px;
    padding-top: 5px;
    position: relative;
    padding-left: 24px;
    color: #2e3c40;
    font-family: MuseoSans, sans-serif;
    font-weight: 300;
  }
  li:before {
    top: 0.8em;
    position: absolute;
    left: 0;
    width: 8px;
    height: 8px;
    margin-top: -4px;
    content: '';
    border-radius: 100%;
    background-color: #000;
  }
`;
const ButtonsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 800px;
  display: flex;
`;
const Info = ({
  handler
}) => {
  return __jsx(Wrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, __jsx(InfoTitle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0444\u0438\u043B\u044F \u0438 \u043E\u0431\u043E\u0433\u0430\u0449\u0435\u043D\u0438\u0435 \u0435\u0433\u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u043C\u0438 \u0434\u0430\u043D\u043D\u044B\u043C\u0438 \u0441 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0430 *"), __jsx(Advantages, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx(_auth_info__WEBPACK_IMPORTED_MODULE_2__["SubTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, "\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u0434\u043B\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0430:"), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, "\u041D\u0435 \u0437\u0430\u043F\u043E\u043B\u043D\u044F\u0439\u0442\u0435 \u0434\u043B\u0438\u043D\u043D\u044B\u0435 \u0430\u043D\u043A\u0435\u0442\u044B, \u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 ID \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442 \u0437\u0430 \u0432\u0430\u0441"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, "\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u043E\u043C \u043A \u0441\u0432\u043E\u0438\u043C \u0434\u0430\u043D\u043D\u044B\u043C"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, "\u042D\u043A\u043E\u043D\u043E\u043C\u0438\u044F \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u043F\u0440\u0438 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0438"))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, __jsx(_auth_info__WEBPACK_IMPORTED_MODULE_2__["SubTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, "\u0414\u043B\u044F \u0441\u0435\u0440\u0432\u0438\u0441\u0430:"), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, "\u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0441 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0430 (\u0442\u0435\u043B\u0435\u0444\u043E\u043D, \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435, \u0430\u0434\u0440\u0435\u0441\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u0442\u043E\u0432\u0430\u0440\u0430 \u0438 \u0442.\u043F.)"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, "\u041F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u0435 \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u0438")))), __jsx(ButtonsWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, __jsx(_buttons__WEBPACK_IMPORTED_MODULE_3__["ButtonConsult"], {
    margin: "0 35px 0 0",
    handler: handler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }), __jsx(_buttons__WEBPACK_IMPORTED_MODULE_3__["ButtonDemo"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  })), __jsx(_auth_note__WEBPACK_IMPORTED_MODULE_4__["Note"], {
    margin: "50px 0 0 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }));
};

/***/ }),

/***/ "./components/modal-window/index.tsx":
/*!*******************************************!*\
  !*** ./components/modal-window/index.tsx ***!
  \*******************************************/
/*! exports provided: ModalWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalWindow", function() { return ModalWindow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages */ "./pages/index.tsx");
/* harmony import */ var _call_me_back_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../call-me-back-modal */ "./components/call-me-back-modal/index.tsx");
var _jsxFileName = "/Users/denisten/workspace/mid-landing/components/modal-window/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: flex-start;
  position: fixed;
  opacity: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 1000;
  padding: 1.2rem;
  transition: all 0.3s ease-in-out;
  visibility: hidden;
  &.open {
    opacity: 1;
    visibility: visible;
  }
  h4 {
    margin-bottom: 1em;
    text-align: center;
    margin-top: 0.5em;
  }
`;
const CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  position: absolute;
  top: 14px;
  right: 14px;
  border: none;
  padding: 0;
  background-color: transparent;
  display: flex;
  color: #fff;
  cursor: pointer;
`;
const wrapperId = 'modal-window-close-area';
const ModalWindow = props => {
  const {
    modalIsOpen,
    handler,
    content,
    handleCallMeBackClick
  } = props;

  const closeButtonClickHandler = e => {
    e.stopPropagation();
    handler();
  };

  const wrapperClickHandler = e => {
    // @ts-ignore
    if (e.target.getAttribute('id') === wrapperId) handler();
  };

  return __jsx(Wrapper, {
    id: wrapperId,
    className: modalIsOpen ? 'open' : '',
    onClick: wrapperClickHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, __jsx(CloseButton, {
    onClick: closeButtonClickHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, "X"), content === _pages__WEBPACK_IMPORTED_MODULE_2__["ModalWindowContent"].CALL_ME_BACK ? __jsx(_call_me_back_modal__WEBPACK_IMPORTED_MODULE_3__["CallMeBack"], {
    handler: handleCallMeBackClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 54
    }
  }) : '');
};

/***/ }),

/***/ "./components/quick-auth-info/index.tsx":
/*!**********************************************!*\
  !*** ./components/quick-auth-info/index.tsx ***!
  \**********************************************/
/*! exports provided: Description, QuickAuthInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Description", function() { return Description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickAuthInfo", function() { return QuickAuthInfo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../slider */ "./components/slider/index.tsx");
/* harmony import */ var _auth_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth-info */ "./components/auth-info/index.tsx");
var _jsxFileName = "/Users/denisten/workspace/mid-landing/components/quick-auth-info/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_auth_info__WEBPACK_IMPORTED_MODULE_3__["SliderWrapper"])`
  margin: 200px auto;
`;
const Description = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 468px;
  padding: 0;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  margin-top: 25px;
  margin-bottom: 35px;
  font-weight: 300;
`;
const QuickAuthInfo = props => {
  return __jsx(Wrapper, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }), __jsx(_auth_info__WEBPACK_IMPORTED_MODULE_3__["Info"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx(_auth_info__WEBPACK_IMPORTED_MODULE_3__["Title"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "\u0411\u044B\u0441\u0442\u0440\u0430\u044F \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F"), __jsx(Description, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, "\u041F\u0440\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0438 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0430, \u043A\u043B\u0438\u0435\u043D\u0442\u0443 \u0434\u0430\u0436\u0435 \u043D\u0435 \u043F\u0440\u0438\u0434\u0435\u0442\u0441\u044F \u0432\u0432\u043E\u0434\u0438\u0442\u044C \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430. \u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442 \u0435\u0433\u043E \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438, \u0432\u0445\u043E\u0434 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u0432\u044B\u0431\u043E\u0440\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u043C \u043A\u043D\u043E\u043F\u043A\u0438 \xAB\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 ID\xBB \u0438 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435\u043C \u0432\u0445\u043E\u0434\u0430 \u0432 Push-\u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0438 \u043D\u0430\u0436\u0430\u0442\u0438\u0435\u043C \u043A\u043D\u043E\u043F\u043A\u0438 \xAB\u041E\u041A\xBB"), __jsx(_auth_info__WEBPACK_IMPORTED_MODULE_3__["SubTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, "\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438"), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, "\u041B\u0435\u0433\u043A\u0438\u0439 \u0432\u0445\u043E\u0434 \u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u043D\u0430 \u0441\u0430\u0439\u0442\u0430\u0445 \u043F\u043E \u043D\u043E\u043C\u0435\u0440\u0443 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043D\u043E\u043C\u0435\u0440\u0430 \u0432\u0430\u0448\u0435\u0433\u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u043D\u0430 \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F, \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439, \u0437\u0430\u043A\u0430\u0437\u0430, \u043F\u043B\u0430\u0442\u0435\u0436\u043D\u043E\u0439 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438 \u0447\u0435\u0440\u0435\u0437 \u043A\u043B\u0438\u043A \u0438\u043B\u0438 \u0432\u0432\u043E\u0434 \u041F\u0418\u041D-\u043A\u043E\u0434\u0430 \u0432 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0435"))), __jsx(_slider__WEBPACK_IMPORTED_MODULE_2__["Slider"], {
    imgArray: ['/static/img/slider-2/2.1.png', '/static/img/slider-2/2.2.png', '/static/img/slider-2/2.3.png', '/static/img/slider-2/2.4.png'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }));
};

/***/ }),

/***/ "./components/slider/index.tsx":
/*!*************************************!*\
  !*** ./components/slider/index.tsx ***!
  \*************************************/
/*! exports provided: Slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return Slider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/denisten/workspace/mid-landing/components/slider/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: ${props => props.width || '250px'};
  height: ${props => props.height || '501px'};
  position: ${props => props.position || 'absolute'};
  right: ${props => props.right || '80px'};
  top: ${props => props.top || '-105px'};
  background-image: ${props => props.removeBackground ? 'none' : 'url("https://mobilestream.ru//landing/images/mobileid/iphone-transparent.png")'};
  background-size: contain;
  box-shadow: ${props => props.boxShadow || 'inherit'};
  .wrapper {
    overflow: hidden;
    display: flex;
    height: ${props => props.imgHeight || '382px'};
    width: ${props => props.imgWidth || '218px'};
    top: 62px;
    left: 16px;
    position: ${props => props.imgPosition || 'absolute'};
  }
  img {
    opacity: 0;
    position: absolute;
  }
  .active {
    opacity: 1;
    transition-duration: 0.5s;
    transition-property: opacity;
    transition-timing-function: ease-in-out;
  }
`;
const Controllers = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 86px;
  bottom: -40px;
  margin-left: 50%;
  transform: translateX(-50%);
  .active {
    background-color: #c000d9;
  }
`;
const Controller = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${props => props.controllerColor || '#fff'};
  cursor: pointer;
  transition: background-color 0.3s;
`;
const Slider = (_ref) => {
  let {
    controllerColor,
    imgArray
  } = _ref,
      props = _objectWithoutProperties(_ref, ["controllerColor", "imgArray"]);

  const {
    0: selectedImg,
    1: setSelectedImg
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);

  const handleControllerClick = id => {
    setSelectedImg(id);
  };

  return __jsx(Wrapper, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: "wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, imgArray.map((img, id) => __jsx("img", {
    src: img,
    alt: "slide",
    key: img,
    className: id === selectedImg ? 'active' : '',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }))), __jsx(Controllers, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, imgArray.map((img, id) => __jsx(Controller, {
    controllerColor: controllerColor,
    key: img,
    className: id === selectedImg ? 'active' : '',
    onClick: () => handleControllerClick(id),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }))));
};

/***/ }),

/***/ "./components/small-text/index.tsx":
/*!*****************************************!*\
  !*** ./components/small-text/index.tsx ***!
  \*****************************************/
/*! exports provided: SmallText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmallText", function() { return SmallText; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/denisten/workspace/mid-landing/components/small-text/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const SmallTextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 844px;
  padding-right: 276px;
  height: auto;
  font-size: 18px;
  line-height: 24px;
  color: #202d3d;
  margin: 90px auto 160px;
  font-family: MuseoSansMedium, sans-serif;
  @media (max-width: 1279px) {
    padding-left: 30px;
    font-size: 14px;
    line-height: 21px;
  }
  a {
    color: #c000d9;
    text-decoration: none;
  }
`;
const SmallText = () => {
  return __jsx(SmallTextWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, "\u0420\u0435\u0448\u0435\u043D\u0438\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043F\u043E \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438", __jsx("a", {
    href: "https://mobileconnect.io/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, "Mobile Connect"), ", \u044F\u0432\u043B\u044F\u044E\u0449\u0435\u0439\u0441\u044F \u043C\u0438\u0440\u043E\u0432\u044B\u043C \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043E\u043C, \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u044B\u043C \u0410\u0441\u0441\u043E\u0446\u0438\u0430\u0446\u0438\u0435\u0439 GSM (GSMA). \u0424\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B \u0443\u0436\u0435 \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u043B\u0438 70 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u0432 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0439 \u0441\u0432\u044F\u0437\u0438 \u0432 38 \u0441\u0442\u0440\u0430\u043D\u0430\u0445 \u043C\u0438\u0440\u0430. \u0412 \u0420\u043E\u0441\u0441\u0438\u0438 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430\u043C\u0438 \u041C\u0422\u0421, \u041C\u0435\u0433\u0430\u0424\u043E\u043D, \u0411\u0438\u043B\u0430\u0439\u043D, \u0422\u0435\u043B\u04352");
};

/***/ }),

/***/ "./components/stream-info/index.tsx":
/*!******************************************!*\
  !*** ./components/stream-info/index.tsx ***!
  \******************************************/
/*! exports provided: StreamInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreamInfo", function() { return StreamInfo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth-info */ "./components/auth-info/index.tsx");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buttons */ "./components/buttons/index.tsx");
var _jsxFileName = "/Users/denisten/workspace/mid-landing/components/stream-info/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 844px;
  margin: 280px auto 50px;
  ${_auth_info__WEBPACK_IMPORTED_MODULE_2__["Title"]} {
    font-family: MuseoSansBold, sans-serif;
    font-weight: 900;
    font-size: 64px;
    line-height: 76px;
    color: #202d3d;
    span {
      color: #c000d9;
    }
  }
  p {
    width: 368px;
    font-size: 18px;
    line-height: 24px;
    color: #5a6d73;
    font-family: MuseoSans, sans-serif;
    margin-bottom: 30px;
  }
`;
const Description = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;
const ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  margin-top: 50px;
`;
const StreamInfo = ({
  handler
}) => {
  return __jsx(Wrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx(_auth_info__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 ID \u0438 ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 24
    }
  }, "Stream")), __jsx(Description, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, "\u0423\u0434\u043E\u0431\u043D\u043E"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, "\u041F\u043E\u0437\u0432\u043E\u043B\u0438\u0442 \u0431\u044B\u0441\u0442\u0440\u043E \u0432\u043E\u0439\u0442\u0438 \u0432 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0438 \u043D\u0430 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u044B \u043F\u043E \u043D\u043E\u043C\u0435\u0440\u0443 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u0431\u0435\u0437 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438 \u0437\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u0442\u044C \u0441\u043B\u043E\u0436\u043D\u044B\u0435 \u043F\u0430\u0440\u043E\u043B\u0438 \u0438 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u043B\u043E\u0433\u0438\u043D\u044B \u0434\u043B\u044F \u0440\u0430\u0437\u043D\u044B\u0445 \u0441\u0435\u0440\u0432\u0438\u0441\u043E\u0432"), __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, "\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u043E"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 ID \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u0432\u0441\u0435\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C \u0432\u043D\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u043C\u043E\u0434\u0435\u043B\u0438 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u0438 \u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430 \u0441\u0432\u044F\u0437\u0438"), __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, "\u041D\u0430\u0434\u0435\u0436\u043D\u043E"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, "\u0412\u044B\u0441\u043E\u043A\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0437\u0430\u0449\u0438\u0442\u044B \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0435\u0442\u0441\u044F \u0431\u0435\u0437 \u044F\u0432\u043D\u043E\u0433\u043E \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u044F \u041A\u043B\u0438\u0435\u043D\u0442\u0430 \u0432 \u0442.\u0447. \u043F\u043E\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043E\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u043C\u043D\u043E\u0433\u043E\u0444\u0430\u043A\u0442\u043E\u0440\u043D\u043E\u0439 \u0430\u0443\u0442\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, "\u0413\u0438\u0431\u043A\u043E"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, "\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0439 API Mobile Connect - \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u044B\u0439 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0439 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438 GSMA \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0432\u0435\u0434\u0443\u0449\u0438\u043C\u0438 \u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430\u043C\u0438 \u0441\u0432\u044F\u0437\u0438 \u0432\u043E \u0432\u0441\u0435\u043C \u043C\u0438\u0440\u0435 (\u0443\u0436\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 \u0431\u043E\u043B\u0435\u0435 100 \u043C\u043B\u043D \u0447\u0435\u043B\u043E\u0432\u0435\u043A)"), __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, "\u0421\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C\u043E"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, "\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u044C \u0434\u043B\u044F \u041A\u043B\u0438\u0435\u043D\u0442\u0430 \u0431\u0435\u0437 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u043D\u0430 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u0430\u0445, \u043F\u043B\u0430\u043D\u0448\u0435\u0442\u0430\u0445 \u0438 \u043E\u0431\u044B\u0447\u043D\u044B\u0445 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430\u0445, \u043D\u0435 \u0442\u0440\u0435\u0431\u0443\u044E\u0449\u0438\u0445 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"), __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, "\u042D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, "\u041F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u0435 \u0434\u043E\u0432\u0435\u0440\u0438\u044F \u043A \u0441\u0435\u0440\u0432\u0438\u0441\u0443 \u0441\u043E \u0441\u0442\u043E\u0440\u043E\u043D\u044B \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0437\u0430 \u0441\u0447\u0435\u0442 \u043F\u0440\u043E\u0441\u0442\u043E\u0442\u044B \u0438 \u0443\u0434\u043E\u0431\u0441\u0442\u0432\u0430"))), __jsx(ButtonWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, __jsx(_buttons__WEBPACK_IMPORTED_MODULE_3__["ButtonConsult"], {
    handler: handler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  })));
};

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: ModalWindowContent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalWindowContent", function() { return ModalWindowContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header */ "./components/header/index.tsx");
/* harmony import */ var _components_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/about */ "./components/about/index.tsx");
/* harmony import */ var _components_info_in_numbers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/info-in-numbers */ "./components/info-in-numbers/index.tsx");
/* harmony import */ var _components_small_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/small-text */ "./components/small-text/index.tsx");
/* harmony import */ var _components_auth_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/auth-info */ "./components/auth-info/index.tsx");
/* harmony import */ var _components_quick_auth_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/quick-auth-info */ "./components/quick-auth-info/index.tsx");
/* harmony import */ var _components_auth_pin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/auth-pin */ "./components/auth-pin/index.tsx");
/* harmony import */ var _components_auth_note__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/auth-note */ "./components/auth-note/index.tsx");
/* harmony import */ var _components_desktop_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/desktop-slider */ "./components/desktop-slider/index.tsx");
/* harmony import */ var _components_info__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/info */ "./components/info/index.tsx");
/* harmony import */ var _components_stream_info__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/stream-info */ "./components/stream-info/index.tsx");
/* harmony import */ var _components_faq__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/faq */ "./components/faq/index.tsx");
/* harmony import */ var _components_feedback_question__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/feedback-question */ "./components/feedback-question/index.tsx");
/* harmony import */ var _components_modal_window__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/modal-window */ "./components/modal-window/index.tsx");
/* harmony import */ var _components_background_img__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/background-img */ "./components/background-img/index.ts");
var _jsxFileName = "/Users/denisten/workspace/mid-landing/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















let ModalWindowContent;

(function (ModalWindowContent) {
  ModalWindowContent["CALL_ME_BACK"] = "callMeBack";
  ModalWindowContent["CONSULT_ME"] = "consultMe";
})(ModalWindowContent || (ModalWindowContent = {}));

const HomePage = () => {
  const {
    0: modalIsOpen,
    1: setModalIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: modalWindowContent,
    1: setModalWindowContent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);

  const openModalWindow = () => {
    setModalIsOpen(true);
    setModalWindowContent(ModalWindowContent.CONSULT_ME);
  };

  const closeModalWindow = () => {
    setModalIsOpen(false);
    setModalWindowContent(null);
  };

  const openModalCallMeBack = () => {
    setModalIsOpen(true);
    setModalWindowContent(ModalWindowContent.CALL_ME_BACK);
  };

  const handleCallMeBackClick = () => {
    setModalWindowContent(null);
    setModalIsOpen(false);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_modal_window__WEBPACK_IMPORTED_MODULE_14__["ModalWindow"], {
    modalIsOpen: modalIsOpen,
    handler: closeModalWindow,
    content: modalWindowContent,
    handleCallMeBackClick: handleCallMeBackClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }), __jsx(_components_header__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    handler: openModalCallMeBack,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }), __jsx(_components_about__WEBPACK_IMPORTED_MODULE_2__["About"], {
    handler: openModalWindow,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }), __jsx(_components_info_in_numbers__WEBPACK_IMPORTED_MODULE_3__["InfoInNumbers"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), __jsx(_components_small_text__WEBPACK_IMPORTED_MODULE_4__["SmallText"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }), __jsx(_components_auth_info__WEBPACK_IMPORTED_MODULE_5__["AuthInfo"], {
    backgroundColor: "#6e7782",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }), __jsx(_components_quick_auth_info__WEBPACK_IMPORTED_MODULE_6__["QuickAuthInfo"], {
    backgroundColor: "#202d3d",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }), __jsx(_components_auth_pin__WEBPACK_IMPORTED_MODULE_7__["AuthPin"], {
    backgroundColor: "#e2e5eb",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }), __jsx(_components_auth_note__WEBPACK_IMPORTED_MODULE_8__["Note"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }), __jsx(_components_desktop_slider__WEBPACK_IMPORTED_MODULE_9__["DesktopSlider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }), __jsx(_components_info__WEBPACK_IMPORTED_MODULE_10__["Info"], {
    handler: openModalWindow,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }), __jsx(_components_background_img__WEBPACK_IMPORTED_MODULE_15__["BackgroundImg"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }), __jsx(_components_stream_info__WEBPACK_IMPORTED_MODULE_11__["StreamInfo"], {
    handler: openModalWindow,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }), __jsx(_components_faq__WEBPACK_IMPORTED_MODULE_12__["FAQ"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }), __jsx(_components_feedback_question__WEBPACK_IMPORTED_MODULE_13__["FeedbackQuestion"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/denisten/workspace/mid-landing/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map