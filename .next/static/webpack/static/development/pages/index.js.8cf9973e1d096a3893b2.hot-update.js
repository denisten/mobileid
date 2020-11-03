webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);




var _this = undefined,
    _jsxFileName = "/Users/denisten/workspace/mid-landing/components/buttons/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    font-size: 18px;\n    line-height: 60px;\n    display: inline-block;\n    min-width: 220px;\n    height: 60px;\n    padding: 0 38px;\n    cursor: pointer;\n    transition: background-color .3s ease;\n    text-align: center;\n    text-decoration: none;\n    color: #fff;\n    border: none;\n    border-radius: 5px;\n    background-color: #c000d9;\n    box-shadow: none;\n}"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  color: #202d3d;\n  background-color: transparent;\n  border: 2px solid #bbc1c7;\n  font-weight: 700;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  font-family: MuseoSansMedium, sans-serif;\n  font-size: 18px;\n  line-height: 60px;\n  display: inline-block;\n  width: 287px;\n  min-width: 220px;\n  height: 60px;\n  padding: 0 38px;\n  cursor: pointer;\n  -webkit-transition: background-color 0.3s ease;\n  transition: background-color 0.3s ease;\n  text-align: center;\n  text-decoration: none;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  background-color: #c000d9;\n  box-shadow: none;\n  margin: ", ";\n  :hover {\n    background-color: #de04fa;\n    color: #fff;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var ButtonConsultWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject(), function (props) {
  return props.margin;
});
var ButtonDemoWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(ButtonConsultWrapper)(_templateObject2());
var ButtonsCallMeBackWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject3());
var ButtonConsult = function ButtonConsult(_ref) {
  var handler = _ref.handler,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["handler"]);

  return __jsx(ButtonConsultWrapper, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    onClick: function onClick() {
      return handler();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }), "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E");
};
var ButtonCallMeBack = function ButtonCallMeBack(_ref2) {
  var handler = _ref2.handler;
  return __jsx(ButtonsCallMeBackWrapper, {
    onClick: function onClick() {
      return handler();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u043F\u0440\u043E\u0441 \u043D\u0430 \u0437\u0432\u043E\u043D\u043E\u043A");
};
var ButtonDemo = function ButtonDemo(props) {
  return __jsx(ButtonDemoWrapper, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    onClick: function onClick() {
      return window.open('https://store.mobcon.prostream.ru/');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }
  }), "\u0414\u0435\u043C\u043E \u0434\u043E\u0441\u0442\u0443\u043F");
};

/***/ })

})
//# sourceMappingURL=index.js.8cf9973e1d096a3893b2.hot-update.js.map