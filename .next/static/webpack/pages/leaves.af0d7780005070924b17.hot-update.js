webpackHotUpdate_N_E("pages/leaves",{

/***/ "./components/nav.jsx":
/*!****************************!*\
  !*** ./components/nav.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\nvar _jsxFileName = \"/Users/aaghran/aaghran/hevo/jarvis-ui/components/nav.jsx\",\n    _this = undefined;\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Menu = function Menu(props) {\n  // const [isOpen, setIsOpen] = useState(false);\n  // const toggle = () => setIsOpen(!isOpen);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Nav\"], {\n    className: \"col-md-12 d-none d-md-block bg-light sidebar\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"sidebar-sticky\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Nav\"].Item, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Nav\"].Link, {\n    href: \"/home\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 11\n    }\n  }, \"Active\")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Nav\"].Item, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Nav\"].Link, {\n    eventKey: \"link-1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 11\n    }\n  }, \"Link\")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Nav\"].Item, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Nav\"].Link, {\n    eventKey: \"link-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 11\n    }\n  }, \"Link\")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Nav\"].Item, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Nav\"].Link, {\n    eventKey: \"disabled\",\n    disabled: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 11\n    }\n  }, \"Disabled\"))));\n};\n\n_c = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\nvar _c;\n\n$RefreshReg$(_c, \"Menu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuanN4PzYxYWIiXSwibmFtZXMiOlsiTWVudSIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7O0FBS0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQ3RCO0FBRUE7QUFFQSxTQUNFLG1FQUNFLE1BQUMsbURBQUQ7QUFBSyxhQUFTLEVBQUMsOENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsbURBQUQsQ0FBSyxJQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFELENBQUssSUFBTDtBQUFVLFFBQUksRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixDQUZGLEVBS0UsTUFBQyxtREFBRCxDQUFLLElBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQsQ0FBSyxJQUFMO0FBQVUsWUFBUSxFQUFDLFFBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQUxGLEVBUUUsTUFBQyxtREFBRCxDQUFLLElBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQsQ0FBSyxJQUFMO0FBQVUsWUFBUSxFQUFDLFFBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQVJGLEVBV0UsTUFBQyxtREFBRCxDQUFLLElBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQsQ0FBSyxJQUFMO0FBQVUsWUFBUSxFQUFDLFVBQW5CO0FBQThCLFlBQVEsTUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQVhGLENBREYsQ0FERjtBQXFCRCxDQTFCRDs7S0FBTUQsSTtBQTRCU0EsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdi5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIE5hdixcbiAgXG59IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcblxuY29uc3QgTWVudSA9IChwcm9wcykgPT4ge1xuICAvLyBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHNldElzT3BlbighaXNPcGVuKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TmF2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiBkLW5vbmUgZC1tZC1ibG9jayBiZy1saWdodCBzaWRlYmFyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1zdGlja3lcIj48L2Rpdj5cbiAgICAgICAgPE5hdi5JdGVtPlxuICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL2hvbWVcIj5BY3RpdmU8L05hdi5MaW5rPlxuICAgICAgICA8L05hdi5JdGVtPlxuICAgICAgICA8TmF2Lkl0ZW0+XG4gICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwibGluay0xXCI+TGluazwvTmF2Lkxpbms+XG4gICAgICAgIDwvTmF2Lkl0ZW0+XG4gICAgICAgIDxOYXYuSXRlbT5cbiAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJsaW5rLTJcIj5MaW5rPC9OYXYuTGluaz5cbiAgICAgICAgPC9OYXYuSXRlbT5cbiAgICAgICAgPE5hdi5JdGVtPlxuICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cImRpc2FibGVkXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICBEaXNhYmxlZFxuICAgICAgICAgIDwvTmF2Lkxpbms+XG4gICAgICAgIDwvTmF2Lkl0ZW0+XG4gICAgICA8L05hdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/nav.jsx\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
false,

/***/ "./node_modules/@hypnosphi/create-react-context/lib/implementation.js":
false,

/***/ "./node_modules/@hypnosphi/create-react-context/lib/index.js":
false,

/***/ "./node_modules/call-bind/callBound.js":
false,

/***/ "./node_modules/call-bind/index.js":
false,

/***/ "./node_modules/deep-equal/index.js":
false,

/***/ "./node_modules/define-properties/index.js":
false,

/***/ "./node_modules/function-bind/implementation.js":
false,

/***/ "./node_modules/function-bind/index.js":
false,

/***/ "./node_modules/get-intrinsic/index.js":
false,

/***/ "./node_modules/gud/index.js":
false,

/***/ "./node_modules/has-symbols/index.js":
false,

/***/ "./node_modules/has-symbols/shams.js":
false,

/***/ "./node_modules/has/src/index.js":
false,

/***/ "./node_modules/is-arguments/index.js":
false,

/***/ "./node_modules/is-date-object/index.js":
false,

/***/ "./node_modules/is-regex/index.js":
false,

/***/ "./node_modules/next/dist/compiled/webpack/global.js":
false,

/***/ "./node_modules/object-is/implementation.js":
false,

/***/ "./node_modules/object-is/index.js":
false,

/***/ "./node_modules/object-is/polyfill.js":
false,

/***/ "./node_modules/object-is/shim.js":
false,

/***/ "./node_modules/object-keys/implementation.js":
false,

/***/ "./node_modules/object-keys/index.js":
false,

/***/ "./node_modules/object-keys/isArguments.js":
false,

/***/ "./node_modules/popper.js/dist/esm/popper.js":
false,

/***/ "./node_modules/react-popper/lib/esm/Manager.js":
false,

/***/ "./node_modules/react-popper/lib/esm/Popper.js":
false,

/***/ "./node_modules/react-popper/lib/esm/Reference.js":
false,

/***/ "./node_modules/react-popper/lib/esm/index.js":
false,

/***/ "./node_modules/react-popper/lib/esm/utils.js":
false,

/***/ "./node_modules/reactstrap/es/Alert.js":
false,

/***/ "./node_modules/reactstrap/es/Badge.js":
false,

/***/ "./node_modules/reactstrap/es/Breadcrumb.js":
false,

/***/ "./node_modules/reactstrap/es/BreadcrumbItem.js":
false,

/***/ "./node_modules/reactstrap/es/Button.js":
false,

/***/ "./node_modules/reactstrap/es/ButtonDropdown.js":
false,

/***/ "./node_modules/reactstrap/es/ButtonGroup.js":
false,

/***/ "./node_modules/reactstrap/es/ButtonToggle.js":
false,

/***/ "./node_modules/reactstrap/es/ButtonToolbar.js":
false,

/***/ "./node_modules/reactstrap/es/Card.js":
false,

/***/ "./node_modules/reactstrap/es/CardBody.js":
false,

/***/ "./node_modules/reactstrap/es/CardColumns.js":
false,

/***/ "./node_modules/reactstrap/es/CardDeck.js":
false,

/***/ "./node_modules/reactstrap/es/CardFooter.js":
false,

/***/ "./node_modules/reactstrap/es/CardGroup.js":
false,

/***/ "./node_modules/reactstrap/es/CardHeader.js":
false,

/***/ "./node_modules/reactstrap/es/CardImg.js":
false,

/***/ "./node_modules/reactstrap/es/CardImgOverlay.js":
false,

/***/ "./node_modules/reactstrap/es/CardLink.js":
false,

/***/ "./node_modules/reactstrap/es/CardSubtitle.js":
false,

/***/ "./node_modules/reactstrap/es/CardText.js":
false,

/***/ "./node_modules/reactstrap/es/CardTitle.js":
false,

/***/ "./node_modules/reactstrap/es/Carousel.js":
false,

/***/ "./node_modules/reactstrap/es/CarouselCaption.js":
false,

/***/ "./node_modules/reactstrap/es/CarouselControl.js":
false,

/***/ "./node_modules/reactstrap/es/CarouselIndicators.js":
false,

/***/ "./node_modules/reactstrap/es/CarouselItem.js":
false,

/***/ "./node_modules/reactstrap/es/Col.js":
false,

/***/ "./node_modules/reactstrap/es/Collapse.js":
false,

/***/ "./node_modules/reactstrap/es/Container.js":
false,

/***/ "./node_modules/reactstrap/es/CustomFileInput.js":
false,

/***/ "./node_modules/reactstrap/es/CustomInput.js":
false,

/***/ "./node_modules/reactstrap/es/Dropdown.js":
false,

/***/ "./node_modules/reactstrap/es/DropdownContext.js":
false,

/***/ "./node_modules/reactstrap/es/DropdownItem.js":
false,

/***/ "./node_modules/reactstrap/es/DropdownMenu.js":
false,

/***/ "./node_modules/reactstrap/es/DropdownToggle.js":
false,

/***/ "./node_modules/reactstrap/es/Fade.js":
false,

/***/ "./node_modules/reactstrap/es/Form.js":
false,

/***/ "./node_modules/reactstrap/es/FormFeedback.js":
false,

/***/ "./node_modules/reactstrap/es/FormGroup.js":
false,

/***/ "./node_modules/reactstrap/es/FormText.js":
false,

/***/ "./node_modules/reactstrap/es/Input.js":
false,

/***/ "./node_modules/reactstrap/es/InputGroup.js":
false,

/***/ "./node_modules/reactstrap/es/InputGroupAddon.js":
false,

/***/ "./node_modules/reactstrap/es/InputGroupButtonDropdown.js":
false,

/***/ "./node_modules/reactstrap/es/InputGroupText.js":
false,

/***/ "./node_modules/reactstrap/es/Jumbotron.js":
false,

/***/ "./node_modules/reactstrap/es/Label.js":
false,

/***/ "./node_modules/reactstrap/es/List.js":
false,

/***/ "./node_modules/reactstrap/es/ListGroup.js":
false,

/***/ "./node_modules/reactstrap/es/ListGroupItem.js":
false,

/***/ "./node_modules/reactstrap/es/ListGroupItemHeading.js":
false,

/***/ "./node_modules/reactstrap/es/ListGroupItemText.js":
false,

/***/ "./node_modules/reactstrap/es/ListInlineItem.js":
false,

/***/ "./node_modules/reactstrap/es/Media.js":
false,

/***/ "./node_modules/reactstrap/es/Modal.js":
false,

/***/ "./node_modules/reactstrap/es/ModalBody.js":
false,

/***/ "./node_modules/reactstrap/es/ModalFooter.js":
false,

/***/ "./node_modules/reactstrap/es/ModalHeader.js":
false,

/***/ "./node_modules/reactstrap/es/Nav.js":
false,

/***/ "./node_modules/reactstrap/es/NavItem.js":
false,

/***/ "./node_modules/reactstrap/es/NavLink.js":
false,

/***/ "./node_modules/reactstrap/es/Navbar.js":
false,

/***/ "./node_modules/reactstrap/es/NavbarBrand.js":
false,

/***/ "./node_modules/reactstrap/es/NavbarText.js":
false,

/***/ "./node_modules/reactstrap/es/NavbarToggler.js":
false,

/***/ "./node_modules/reactstrap/es/Pagination.js":
false,

/***/ "./node_modules/reactstrap/es/PaginationItem.js":
false,

/***/ "./node_modules/reactstrap/es/PaginationLink.js":
false,

/***/ "./node_modules/reactstrap/es/Popover.js":
false,

/***/ "./node_modules/reactstrap/es/PopoverBody.js":
false,

/***/ "./node_modules/reactstrap/es/PopoverHeader.js":
false,

/***/ "./node_modules/reactstrap/es/PopperContent.js":
false,

/***/ "./node_modules/reactstrap/es/PopperTargetHelper.js":
false,

/***/ "./node_modules/reactstrap/es/Portal.js":
false,

/***/ "./node_modules/reactstrap/es/Progress.js":
false,

/***/ "./node_modules/reactstrap/es/Row.js":
false,

/***/ "./node_modules/reactstrap/es/Spinner.js":
false,

/***/ "./node_modules/reactstrap/es/TabContent.js":
false,

/***/ "./node_modules/reactstrap/es/TabContext.js":
false,

/***/ "./node_modules/reactstrap/es/TabPane.js":
false,

/***/ "./node_modules/reactstrap/es/Table.js":
false,

/***/ "./node_modules/reactstrap/es/Toast.js":
false,

/***/ "./node_modules/reactstrap/es/ToastBody.js":
false,

/***/ "./node_modules/reactstrap/es/ToastHeader.js":
false,

/***/ "./node_modules/reactstrap/es/Tooltip.js":
false,

/***/ "./node_modules/reactstrap/es/TooltipPopoverWrapper.js":
false,

/***/ "./node_modules/reactstrap/es/UncontrolledAlert.js":
false,

/***/ "./node_modules/reactstrap/es/UncontrolledButtonDropdown.js":
false,

/***/ "./node_modules/reactstrap/es/UncontrolledCarousel.js":
false,

/***/ "./node_modules/reactstrap/es/UncontrolledCollapse.js":
false,

/***/ "./node_modules/reactstrap/es/UncontrolledDropdown.js":
false,

/***/ "./node_modules/reactstrap/es/UncontrolledPopover.js":
false,

/***/ "./node_modules/reactstrap/es/UncontrolledTooltip.js":
false,

/***/ "./node_modules/reactstrap/es/index.js":
false,

/***/ "./node_modules/reactstrap/es/polyfill.js":
false,

/***/ "./node_modules/reactstrap/es/utils.js":
false,

/***/ "./node_modules/reactstrap/node_modules/dom-helpers/class/addClass.js":
false,

/***/ "./node_modules/reactstrap/node_modules/dom-helpers/class/hasClass.js":
false,

/***/ "./node_modules/reactstrap/node_modules/dom-helpers/class/removeClass.js":
false,

/***/ "./node_modules/reactstrap/node_modules/react-transition-group/CSSTransition.js":
false,

/***/ "./node_modules/reactstrap/node_modules/react-transition-group/ReplaceTransition.js":
false,

/***/ "./node_modules/reactstrap/node_modules/react-transition-group/Transition.js":
false,

/***/ "./node_modules/reactstrap/node_modules/react-transition-group/TransitionGroup.js":
false,

/***/ "./node_modules/reactstrap/node_modules/react-transition-group/index.js":
false,

/***/ "./node_modules/reactstrap/node_modules/react-transition-group/utils/ChildMapping.js":
false,

/***/ "./node_modules/reactstrap/node_modules/react-transition-group/utils/PropTypes.js":
false,

/***/ "./node_modules/regexp.prototype.flags/implementation.js":
false,

/***/ "./node_modules/regexp.prototype.flags/index.js":
false,

/***/ "./node_modules/regexp.prototype.flags/polyfill.js":
false,

/***/ "./node_modules/regexp.prototype.flags/shim.js":
false

})