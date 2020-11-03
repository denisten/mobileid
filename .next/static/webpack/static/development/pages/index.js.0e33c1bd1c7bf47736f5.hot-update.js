webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: ModalWindowContent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalWindowContent", function() { return ModalWindowContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
var _this = undefined,
    _jsxFileName = "/Users/denisten/workspace/mid-landing/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















var ModalWindowContent;

(function (ModalWindowContent) {
  ModalWindowContent["CALL_ME_BACK"] = "callMeBack";
  ModalWindowContent["CONSULT_ME"] = "consultMe";
})(ModalWindowContent || (ModalWindowContent = {}));

var HomePage = function HomePage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      modalIsOpen = _useState[0],
      setModalIsOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      modalWindowContent = _useState2[0],
      setModalWindowContent = _useState2[1];

  var openModalWindow = function openModalWindow() {
    setModalIsOpen(true);
    setModalWindowContent(ModalWindowContent.CONSULT_ME);
  };

  var closeModalWindow = function closeModalWindow() {
    setModalIsOpen(false);
    setModalWindowContent(null);
  };

  var openModalCallMeBack = function openModalCallMeBack() {
    setModalIsOpen(true);
    setModalWindowContent(ModalWindowContent.CALL_ME_BACK);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_modal_window__WEBPACK_IMPORTED_MODULE_14__["ModalWindow"], {
    modalIsOpen: modalIsOpen,
    handler: closeModalWindow,
    content: modalWindowContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }), __jsx(_components_header__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    handler: openModalCallMeBack,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }), __jsx(_components_about__WEBPACK_IMPORTED_MODULE_2__["About"], {
    handler: openModalWindow,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }), __jsx(_components_info_in_numbers__WEBPACK_IMPORTED_MODULE_3__["InfoInNumbers"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }), __jsx(_components_small_text__WEBPACK_IMPORTED_MODULE_4__["SmallText"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }), __jsx(_components_auth_info__WEBPACK_IMPORTED_MODULE_5__["AuthInfo"], {
    backgroundColor: "#6e7782",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }), __jsx(_components_quick_auth_info__WEBPACK_IMPORTED_MODULE_6__["QuickAuthInfo"], {
    backgroundColor: "#202d3d",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }), __jsx(_components_auth_pin__WEBPACK_IMPORTED_MODULE_7__["AuthPin"], {
    backgroundColor: "#e2e5eb",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), __jsx(_components_auth_note__WEBPACK_IMPORTED_MODULE_8__["Note"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }), __jsx(_components_desktop_slider__WEBPACK_IMPORTED_MODULE_9__["DesktopSlider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }), __jsx(_components_info__WEBPACK_IMPORTED_MODULE_10__["Info"], {
    handler: openModalWindow,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }), __jsx(_components_background_img__WEBPACK_IMPORTED_MODULE_15__["BackgroundImg"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }), __jsx(_components_stream_info__WEBPACK_IMPORTED_MODULE_11__["StreamInfo"], {
    handler: openModalWindow,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }), __jsx(_components_faq__WEBPACK_IMPORTED_MODULE_12__["FAQ"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }), __jsx(_components_feedback_question__WEBPACK_IMPORTED_MODULE_13__["FeedbackQuestion"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=index.js.0e33c1bd1c7bf47736f5.hot-update.js.map