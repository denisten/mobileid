webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/call-me-back-modal/index.tsx":
/*!*************************************************!*\
  !*** ./components/call-me-back-modal/index.tsx ***!
  \*************************************************/
/*! exports provided: CallMeBack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallMeBack", function() { return CallMeBack; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buttons */ "./components/buttons/index.tsx");


var _this = undefined,
    _jsxFileName = "/Users/denisten/workspace/mid-landing/components/call-me-back-modal/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  max-width: 690px;\n  div {\n    display: block;\n    width: 100%;\n  }\n  input {\n    font-family: MuseoSans, sans-serif;\n    font-size: 16px;\n    font-weight: 300;\n    line-height: normal;\n    margin-bottom: 24px;\n    padding: 21px 25px 19px;\n    transition: box-shadow 0.3s;\n    color: #2e3c40;\n    border: 1px solid #e9e9e9;\n    border-radius: 4px;\n    width: 100%;\n  }\n  .description {\n    font-size: 14px;\n    line-height: 1.43;\n    display: inline-block;\n    padding-left: 10px;\n    font-weight: 300;\n    text-align: center;\n    margin-top: 1em;\n  }\n  .button-wrapper {\n    display: flex;\n    justify-content: space-around;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  max-width: 800px;\n  position: relative;\n  padding: 1.2rem;\n  background: #ffffff;\n  background-clip: padding-box;\n  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.25);\n  margin: auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var Content = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].form(_templateObject2());
var CallMeBack = function CallMeBack(_ref) {
  var handler = _ref.handler;
  return __jsx(ContentWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx(Content, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u0439 \u0437\u0432\u043E\u043D\u043E\u043A"), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx("input", {
    type: "text",
    name: "name",
    placeholder: "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F",
    "aria-label": "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, __jsx("input", {
    type: "text",
    name: "name",
    placeholder: "\u0412\u0430\u0448 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430",
    "aria-label": "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "button-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, __jsx(_buttons__WEBPACK_IMPORTED_MODULE_3__["ButtonCallMeBack"], {
    handler: handler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "description",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, "\u041D\u0430\u0436\u0430\u0432 \u043A\u043D\u043E\u043F\u043A\u0443 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u043F\u0440\u043E\u0441 \u0432\u044B \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0435\u0442\u0435 \u0441\u0432\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0432\u0430\u0448\u0438\u0445 \u0434\u0430\u043D\u043D\u044B\u0445"))));
};

/***/ })

})
//# sourceMappingURL=index.js.0f2ebabd7ec8e4cb557a.hot-update.js.map