webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/modal-window/index.tsx":
/*!*******************************************!*\
  !*** ./components/modal-window/index.tsx ***!
  \*******************************************/
/*! exports provided: ModalWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalWindow", function() { return ModalWindow; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages */ "./pages/index.tsx");
/* harmony import */ var _call_me_back_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../call-me-back-modal */ "./components/call-me-back-modal/index.tsx");


var _this = undefined,
    _jsxFileName = "/Users/denisten/workspace/mid-landing/components/modal-window/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  border: none;\n  padding: 0;\n  background-color: transparent;\n  display: flex;\n  color: #fff;\n  cursor: pointer;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background: rgba(0, 0, 0, 0.75);\n  display: flex;\n  align-items: flex-start;\n  position: fixed;\n  opacity: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n  z-index: 1000;\n  padding: 1.2rem;\n  transition: all 0.3s ease-in-out;\n  visibility: hidden;\n  &.open {\n    opacity: 1;\n    visibility: visible;\n  }\n  h4 {\n    margin-bottom: 1em;\n    text-align: center;\n    margin-top: 0.5em;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
var wrapperId = 'modal-window-close-area';
var ModalWindow = function ModalWindow(props) {
  var modalIsOpen = props.modalIsOpen,
      handler = props.handler,
      content = props.content;

  var closeButtonClickHandler = function closeButtonClickHandler(e) {
    e.stopPropagation();
    handler();
  };

  var wrapperClickHandler = function wrapperClickHandler(e) {
    // @ts-ignore
    if (e.target.getAttribute('id') === wrapperId) handler();
  };

  var handleCallMeBackClick = function handleCallMeBackClick() {};

  return __jsx(Wrapper, {
    id: wrapperId,
    className: modalIsOpen ? 'open' : '',
    onClick: wrapperClickHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, __jsx(CloseButton, {
    onClick: closeButtonClickHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, "X"), content === _pages__WEBPACK_IMPORTED_MODULE_3__["ModalWindowContent"].CALL_ME_BACK ? __jsx(_call_me_back_modal__WEBPACK_IMPORTED_MODULE_4__["CallMeBack"], {
    handler: handleCallMeBackClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 54
    }
  }) : '');
};

/***/ })

})
//# sourceMappingURL=index.js.eb4345f7437d9192da74.hot-update.js.map