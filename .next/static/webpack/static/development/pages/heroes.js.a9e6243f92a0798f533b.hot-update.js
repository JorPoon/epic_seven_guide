webpackHotUpdate("static/development/pages/heroes.js",{

/***/ "./components/HeroesDetail.tsx":
/*!*************************************!*\
  !*** ./components/HeroesDetail.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/jormpoon/Desktop/Personal Projects/epic_seven_guide/components/HeroesDetail.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__[\"makeStyles\"])(function (theme) {\n  return {\n    cardWidth: {\n      minWidth: 225,\n      margin: 10,\n      alignContent: \"center\",\n      alignItems: \"center\",\n      justifyItems: \"center\",\n      justifyContent: \"center\"\n    },\n    media: {\n      // marginTop: 10,\n      width: \"100%\",\n      height: 250 // height: 0,\n      // paddingTop: '56.25%', // 16:9,\n      // marginTop:'30'\n\n    },\n    content: {\n      background: \"orange\"\n    }\n  };\n});\n\nvar HeroesDetail = function HeroesDetail(_ref) {\n  _s();\n\n  var name = _ref.name,\n      attribute = _ref.attribute,\n      role = _ref.role,\n      assets = _ref.assets,\n      rarity = _ref.rarity;\n  var classes = useStyles();\n  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/hero/[id]\",\n    as: \"/hero/\".concat(name.toLowerCase()),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n    className: classes.cardWidth,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"CardMedia\"], {\n    className: classes.media,\n    image: assets,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 17\n    }\n  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"CardContent\"], {\n    className: classes.content,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 17\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 21\n    }\n  }, name), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 21\n    }\n  }, \" Type: \", attribute), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 21\n    }\n  }, \" Class: \", role === \"manauser\" ? \"soul weaver\" : role), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 21\n    }\n  }, \" Rarity: \", rarity, \" stars\"))));\n};\n\n_s(HeroesDetail, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = HeroesDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeroesDetail);\n\nvar _c;\n\n$RefreshReg$(_c, \"HeroesDetail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlcm9lc0RldGFpbC50c3g/NjkwMiJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjYXJkV2lkdGgiLCJtaW5XaWR0aCIsIm1hcmdpbiIsImFsaWduQ29udGVudCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5SXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm1lZGlhIiwid2lkdGgiLCJoZWlnaHQiLCJjb250ZW50IiwiYmFja2dyb3VuZCIsIkhlcm9lc0RldGFpbCIsIm5hbWUiLCJhdHRyaWJ1dGUiLCJyb2xlIiwiYXNzZXRzIiwicmFyaXR5IiwiY2xhc3NlcyIsInRvTG93ZXJDYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNyQ0MsYUFBUyxFQUFFO0FBQ1BDLGNBQVEsRUFBRSxHQURIO0FBRVBDLFlBQU0sRUFBRSxFQUZEO0FBR1BDLGtCQUFZLEVBQUUsUUFIUDtBQUlQQyxnQkFBVSxFQUFFLFFBSkw7QUFLUEMsa0JBQVksRUFBRSxRQUxQO0FBTVBDLG9CQUFjLEVBQUU7QUFOVCxLQUQwQjtBQVVyQ0MsU0FBSyxFQUFFO0FBQ0g7QUFDQUMsV0FBSyxFQUFFLE1BRko7QUFHSEMsWUFBTSxFQUFFLEdBSEwsQ0FJSDtBQUNBO0FBQ0E7O0FBTkcsS0FWOEI7QUFrQnJDQyxXQUFPLEVBQUU7QUFDTEMsZ0JBQVUsRUFBRTtBQURQO0FBbEI0QixHQUFaO0FBQUEsQ0FBRCxDQUE1Qjs7QUF3QkEsSUFBTUMsWUFBZ0MsR0FBRyxTQUFuQ0EsWUFBbUMsT0FBNkM7QUFBQTs7QUFBQSxNQUEzQ0MsSUFBMkMsUUFBM0NBLElBQTJDO0FBQUEsTUFBckNDLFNBQXFDLFFBQXJDQSxTQUFxQztBQUFBLE1BQTFCQyxJQUEwQixRQUExQkEsSUFBMEI7QUFBQSxNQUFwQkMsTUFBb0IsUUFBcEJBLE1BQW9CO0FBQUEsTUFBWkMsTUFBWSxRQUFaQSxNQUFZO0FBQ25GLE1BQU1DLE9BQU8sR0FBR3JCLFNBQVMsRUFBekI7QUFDQyxTQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsWUFBWDtBQUF3QixNQUFFLGtCQUFXZ0IsSUFBSSxDQUFDTSxXQUFMLEVBQVgsQ0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsc0RBQUQ7QUFBTSxhQUFTLEVBQUVELE9BQU8sQ0FBQ2xCLFNBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDJEQUFEO0FBQ0ksYUFBUyxFQUFFa0IsT0FBTyxDQUFDWCxLQUR2QjtBQUVJLFNBQUssRUFBRVMsTUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFLSSxNQUFDLDZEQUFEO0FBQWEsYUFBUyxFQUFFRSxPQUFPLENBQUNSLE9BQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtHLElBQUwsQ0FESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVdDLFNBQVgsQ0FGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVlDLElBQUksS0FBSyxVQUFULEdBQXNCLGFBQXRCLEdBQXNDQSxJQUFsRCxDQUhKLEVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBYUUsTUFBYixXQUpKLENBTEosQ0FESixDQURKO0FBZ0JILENBbEJEOztHQUFNTCxZO1VBQ2FmLFM7OztLQURiZSxZO0FBcUJTQSwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvSGVyb2VzRGV0YWlsLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0Z1bmN0aW9uQ29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBDYXJkLCBDYXJkTWVkaWEsIENhcmRDb250ZW50IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuaW50ZXJmYWNlIERldGFpbHMge1xuICAgIG5hbWU6IHN0cmluZyxcbiAgICBhdHRyaWJ1dGU6IHN0cmluZ1xuICAgIHJvbGU6IHN0cmluZyxcbiAgICBhc3NldHM/OiBzdHJpbmcsXG4gICAgcmFyaXR5OiBudW1iZXJcbn1cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gICAgY2FyZFdpZHRoOiB7XG4gICAgICAgIG1pbldpZHRoOiAyMjUsXG4gICAgICAgIG1hcmdpbjogMTAsXG4gICAgICAgIGFsaWduQ29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAganVzdGlmeUl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIlxuXG4gICAgfSxcbiAgICBtZWRpYToge1xuICAgICAgICAvLyBtYXJnaW5Ub3A6IDEwLFxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIGhlaWdodDogMjUwXG4gICAgICAgIC8vIGhlaWdodDogMCxcbiAgICAgICAgLy8gcGFkZGluZ1RvcDogJzU2LjI1JScsIC8vIDE2OjksXG4gICAgICAgIC8vIG1hcmdpblRvcDonMzAnXG4gICAgfSxcbiAgICBjb250ZW50OiB7XG4gICAgICAgIGJhY2tncm91bmQ6IFwib3JhbmdlXCJcbiAgICB9XG59KSlcblxuXG5jb25zdCBIZXJvZXNEZXRhaWw6IFJlYWN0LkZDIDxEZXRhaWxzPiA9ICh7bmFtZSwgYXR0cmlidXRlLCByb2xlLCBhc3NldHMsIHJhcml0eX0pID0+IHtcbiAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvaGVyby9baWRdXCIgYXM9e2AvaGVyby8ke25hbWUudG9Mb3dlckNhc2UoKX1gfT5cbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkV2lkdGh9PlxuICAgICAgICAgICAgICAgIDxDYXJkTWVkaWFcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lZGlhfVxuICAgICAgICAgICAgICAgICAgICBpbWFnZT17YXNzZXRzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fSA+XG4gICAgICAgICAgICAgICAgICAgIDxoMz57bmFtZX08L2gzPiAgXG4gICAgICAgICAgICAgICAgICAgIDxwPiBUeXBlOiB7YXR0cmlidXRlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+IENsYXNzOiB7cm9sZSA9PT0gXCJtYW5hdXNlclwiID8gXCJzb3VsIHdlYXZlclwiIDogcm9sZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPiBSYXJpdHk6IHtyYXJpdHl9IHN0YXJzPC9wPlxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvTGluaz5cbiAgICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgSGVyb2VzRGV0YWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/HeroesDetail.tsx\n");

/***/ })

})