webpackHotUpdate("static/development/pages/heroes.js",{

/***/ "./components/HeroesDetail.tsx":
/*!*************************************!*\
  !*** ./components/HeroesDetail.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/jormpoon/Desktop/Personal Projects/epic_seven_guide/components/HeroesDetail.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__[\"makeStyles\"])(function (theme) {\n  return {\n    cardWidth: {\n      minWidth: 225,\n      margin: 10,\n      alignContent: \"center\",\n      justifyItems: \"center\"\n    },\n    media: {\n      width: 275,\n      height: 130\n    }\n  };\n});\n\nvar HeroesDetail = function HeroesDetail(_ref) {\n  _s();\n\n  var name = _ref.name,\n      attribute = _ref.attribute,\n      role = _ref.role,\n      assets = _ref.assets;\n  var classes = useStyles();\n  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/hero/[id]\",\n    as: \"/hero/\".concat(name.toLowerCase()),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n    className: classes.cardWidth,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"CardMedia\"], {\n    className: classes.media,\n    image: assets,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 17\n    }\n  }), __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 17\n    }\n  }, name), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 17\n    }\n  }, attribute), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 17\n    }\n  }, role)));\n};\n\n_s(HeroesDetail, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = HeroesDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeroesDetail);\n\nvar _c;\n\n$RefreshReg$(_c, \"HeroesDetail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlcm9lc0RldGFpbC50c3g/NjkwMiJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjYXJkV2lkdGgiLCJtaW5XaWR0aCIsIm1hcmdpbiIsImFsaWduQ29udGVudCIsImp1c3RpZnlJdGVtcyIsIm1lZGlhIiwid2lkdGgiLCJoZWlnaHQiLCJIZXJvZXNEZXRhaWwiLCJuYW1lIiwiYXR0cmlidXRlIiwicm9sZSIsImFzc2V0cyIsImNsYXNzZXMiLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFTQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDckNDLGFBQVMsRUFBRTtBQUNQQyxjQUFRLEVBQUUsR0FESDtBQUVQQyxZQUFNLEVBQUUsRUFGRDtBQUdQQyxrQkFBWSxFQUFFLFFBSFA7QUFJUEMsa0JBQVksRUFBRTtBQUpQLEtBRDBCO0FBUXJDQyxTQUFLLEVBQUU7QUFDSEMsV0FBSyxFQUFFLEdBREo7QUFFSEMsWUFBTSxFQUFFO0FBRkw7QUFSOEIsR0FBWjtBQUFBLENBQUQsQ0FBNUI7O0FBZUEsSUFBTUMsWUFBZ0MsR0FBRyxTQUFuQ0EsWUFBbUMsT0FBcUM7QUFBQTs7QUFBQSxNQUFuQ0MsSUFBbUMsUUFBbkNBLElBQW1DO0FBQUEsTUFBN0JDLFNBQTZCLFFBQTdCQSxTQUE2QjtBQUFBLE1BQWxCQyxJQUFrQixRQUFsQkEsSUFBa0I7QUFBQSxNQUFaQyxNQUFZLFFBQVpBLE1BQVk7QUFDM0UsTUFBTUMsT0FBTyxHQUFHaEIsU0FBUyxFQUF6QjtBQUNDLFNBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxZQUFYO0FBQXdCLE1BQUUsa0JBQVdZLElBQUksQ0FBQ0ssV0FBTCxFQUFYLENBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHNEQUFEO0FBQU0sYUFBUyxFQUFFRCxPQUFPLENBQUNiLFNBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDJEQUFEO0FBQ0ksYUFBUyxFQUFFYSxPQUFPLENBQUNSLEtBRHZCO0FBRUksU0FBSyxFQUFFTyxNQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0gsSUFBTCxDQUxKLEVBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJQyxTQUFKLENBTkosRUFPSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlDLElBQUosQ0FQSixDQURKLENBREo7QUFhSCxDQWZEOztHQUFNSCxZO1VBQ2FYLFM7OztLQURiVyxZO0FBa0JTQSwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvSGVyb2VzRGV0YWlsLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0Z1bmN0aW9uQ29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBDYXJkLCBDYXJkTWVkaWEgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5pbnRlcmZhY2UgRGV0YWlscyB7XG4gICAgbmFtZTogc3RyaW5nLFxuICAgIGF0dHJpYnV0ZTogc3RyaW5nXG4gICAgcm9sZTogc3RyaW5nLFxuICAgIGFzc2V0cz86IHN0cmluZ1xufVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgICBjYXJkV2lkdGg6IHtcbiAgICAgICAgbWluV2lkdGg6IDIyNSxcbiAgICAgICAgbWFyZ2luOiAxMCxcbiAgICAgICAgYWxpZ25Db250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICBqdXN0aWZ5SXRlbXM6IFwiY2VudGVyXCJcblxuICAgIH0sXG4gICAgbWVkaWE6IHtcbiAgICAgICAgd2lkdGg6IDI3NSxcbiAgICAgICAgaGVpZ2h0OiAxMzBcbiAgICB9XG59KSlcblxuXG5jb25zdCBIZXJvZXNEZXRhaWw6IFJlYWN0LkZDIDxEZXRhaWxzPiA9ICh7bmFtZSwgYXR0cmlidXRlLCByb2xlLCBhc3NldHN9KSA9PiB7XG4gICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGluayBocmVmPVwiL2hlcm8vW2lkXVwiIGFzPXtgL2hlcm8vJHtuYW1lLnRvTG93ZXJDYXNlKCl9YH0+XG4gICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZFdpZHRofT5cbiAgICAgICAgICAgICAgICA8Q2FyZE1lZGlhXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZWRpYX1cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2Fzc2V0c31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxoMz57bmFtZX08L2gzPiAgXG4gICAgICAgICAgICAgICAgPHA+e2F0dHJpYnV0ZX08L3A+XG4gICAgICAgICAgICAgICAgPHA+e3JvbGV9PC9wPlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L0xpbms+XG4gICAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEhlcm9lc0RldGFpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/HeroesDetail.tsx\n");

/***/ })

})