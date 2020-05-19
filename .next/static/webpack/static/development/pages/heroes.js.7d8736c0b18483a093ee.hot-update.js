webpackHotUpdate("static/development/pages/heroes.js",{

/***/ "./components/HeroesDetail.tsx":
/*!*************************************!*\
  !*** ./components/HeroesDetail.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/jormpoon/Desktop/Personal Projects/epic_seven_guide/components/HeroesDetail.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__[\"makeStyles\"])(function (theme) {\n  return {\n    cardWidth: {\n      minWidth: 225,\n      margin: 10,\n      alignContent: \"center\",\n      alignItems: \"center\",\n      justifyItems: \"center\",\n      justifyContent: \"center\"\n    },\n    media: {\n      width: 275,\n      height: 130\n    },\n    content: {\n      alignItems: \"center\",\n      justifyContent: \"center\"\n    }\n  };\n});\n\nvar HeroesDetail = function HeroesDetail(_ref) {\n  _s();\n\n  var name = _ref.name,\n      attribute = _ref.attribute,\n      role = _ref.role,\n      assets = _ref.assets,\n      rarity = _ref.rarity;\n  var classes = useStyles();\n  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/hero/[id]\",\n    as: \"/hero/\".concat(name.toLowerCase()),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n    className: classes.cardWidth,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"CardMedia\"], {\n    className: classes.media,\n    image: assets,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 17\n    }\n  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"CardContent\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 17\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 21\n    }\n  }, name), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 21\n    }\n  }, \" Type: \", attribute), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 21\n    }\n  }, \" Class: \", role === \"manauser\" ? \"soul weaver\" : role), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 21\n    }\n  }, \" Rarity: \", rarity, \" stars\"))));\n};\n\n_s(HeroesDetail, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = HeroesDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeroesDetail);\n\nvar _c;\n\n$RefreshReg$(_c, \"HeroesDetail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlcm9lc0RldGFpbC50c3g/NjkwMiJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjYXJkV2lkdGgiLCJtaW5XaWR0aCIsIm1hcmdpbiIsImFsaWduQ29udGVudCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5SXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm1lZGlhIiwid2lkdGgiLCJoZWlnaHQiLCJjb250ZW50IiwiSGVyb2VzRGV0YWlsIiwibmFtZSIsImF0dHJpYnV0ZSIsInJvbGUiLCJhc3NldHMiLCJyYXJpdHkiLCJjbGFzc2VzIiwidG9Mb3dlckNhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBVUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3JDQyxhQUFTLEVBQUU7QUFDUEMsY0FBUSxFQUFFLEdBREg7QUFFUEMsWUFBTSxFQUFFLEVBRkQ7QUFHUEMsa0JBQVksRUFBRSxRQUhQO0FBSVBDLGdCQUFVLEVBQUUsUUFKTDtBQUtQQyxrQkFBWSxFQUFFLFFBTFA7QUFNUEMsb0JBQWMsRUFBRTtBQU5ULEtBRDBCO0FBVXJDQyxTQUFLLEVBQUU7QUFDSEMsV0FBSyxFQUFFLEdBREo7QUFFSEMsWUFBTSxFQUFFO0FBRkwsS0FWOEI7QUFjckNDLFdBQU8sRUFBRTtBQUNMTixnQkFBVSxFQUFFLFFBRFA7QUFFTEUsb0JBQWMsRUFBRTtBQUZYO0FBZDRCLEdBQVo7QUFBQSxDQUFELENBQTVCOztBQXFCQSxJQUFNSyxZQUFnQyxHQUFHLFNBQW5DQSxZQUFtQyxPQUE2QztBQUFBOztBQUFBLE1BQTNDQyxJQUEyQyxRQUEzQ0EsSUFBMkM7QUFBQSxNQUFyQ0MsU0FBcUMsUUFBckNBLFNBQXFDO0FBQUEsTUFBMUJDLElBQTBCLFFBQTFCQSxJQUEwQjtBQUFBLE1BQXBCQyxNQUFvQixRQUFwQkEsTUFBb0I7QUFBQSxNQUFaQyxNQUFZLFFBQVpBLE1BQVk7QUFDbkYsTUFBTUMsT0FBTyxHQUFHcEIsU0FBUyxFQUF6QjtBQUNDLFNBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxZQUFYO0FBQXdCLE1BQUUsa0JBQVdlLElBQUksQ0FBQ00sV0FBTCxFQUFYLENBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHNEQUFEO0FBQU0sYUFBUyxFQUFFRCxPQUFPLENBQUNqQixTQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywyREFBRDtBQUNJLGFBQVMsRUFBRWlCLE9BQU8sQ0FBQ1YsS0FEdkI7QUFFSSxTQUFLLEVBQUVRLE1BRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBS0ksTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLSCxJQUFMLENBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFXQyxTQUFYLENBRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFZQyxJQUFJLEtBQUssVUFBVCxHQUFzQixhQUF0QixHQUFzQ0EsSUFBbEQsQ0FISixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQWFFLE1BQWIsV0FKSixDQUxKLENBREosQ0FESjtBQWdCSCxDQWxCRDs7R0FBTUwsWTtVQUNhZCxTOzs7S0FEYmMsWTtBQXFCU0EsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlcm9lc0RldGFpbC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtGdW5jdGlvbkNvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZE1lZGlhLCBDYXJkQ29udGVudCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmludGVyZmFjZSBEZXRhaWxzIHtcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgYXR0cmlidXRlOiBzdHJpbmdcbiAgICByb2xlOiBzdHJpbmcsXG4gICAgYXNzZXRzPzogc3RyaW5nLFxuICAgIHJhcml0eTogbnVtYmVyXG59XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICAgIGNhcmRXaWR0aDoge1xuICAgICAgICBtaW5XaWR0aDogMjI1LFxuICAgICAgICBtYXJnaW46IDEwLFxuICAgICAgICBhbGlnbkNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIGp1c3RpZnlJdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCJcblxuICAgIH0sXG4gICAgbWVkaWE6IHtcbiAgICAgICAgd2lkdGg6IDI3NSxcbiAgICAgICAgaGVpZ2h0OiAxMzBcbiAgICB9LFxuICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCJcbiAgICB9XG59KSlcblxuXG5jb25zdCBIZXJvZXNEZXRhaWw6IFJlYWN0LkZDIDxEZXRhaWxzPiA9ICh7bmFtZSwgYXR0cmlidXRlLCByb2xlLCBhc3NldHMsIHJhcml0eX0pID0+IHtcbiAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvaGVyby9baWRdXCIgYXM9e2AvaGVyby8ke25hbWUudG9Mb3dlckNhc2UoKX1gfT5cbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkV2lkdGh9PlxuICAgICAgICAgICAgICAgIDxDYXJkTWVkaWFcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lZGlhfVxuICAgICAgICAgICAgICAgICAgICBpbWFnZT17YXNzZXRzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50ID5cbiAgICAgICAgICAgICAgICAgICAgPGgzPntuYW1lfTwvaDM+ICBcbiAgICAgICAgICAgICAgICAgICAgPHA+IFR5cGU6IHthdHRyaWJ1dGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD4gQ2xhc3M6IHtyb2xlID09PSBcIm1hbmF1c2VyXCIgPyBcInNvdWwgd2VhdmVyXCIgOiByb2xlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+IFJhcml0eToge3Jhcml0eX0gc3RhcnM8L3A+XG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9MaW5rPlxuICAgIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBIZXJvZXNEZXRhaWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/HeroesDetail.tsx\n");

/***/ })

})