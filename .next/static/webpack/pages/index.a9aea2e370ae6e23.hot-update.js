"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_home_Feed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/home/Feed */ \"./components/home/Feed.js\");\n/* harmony import */ var _components_sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sidebar/Sidebar */ \"./components/sidebar/Sidebar.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Login */ \"./components/Login.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _state_atom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../state/atom */ \"./state/atom.js\");\n/* harmony import */ var _components_modal_Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/modal/Modal */ \"./components/modal/Modal.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _s1 = $RefreshSig$();\nvar __N_SSP = true;\nfunction Home(param) {\n    var trendingResults = param.trendingResults, followResults = param.followResults, providers = param.providers;\n    _s1();\n    var ref = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)(), sesstion = ref.data;\n    var ref1 = _slicedToArray((0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(_state_atom__WEBPACK_IMPORTED_MODULE_7__.modalState), 2), open = ref1[0], setOpen = ref1[1];\n    if (!sesstion) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Login__WEBPACK_IMPORTED_MODULE_5__.Login, {\n        providers: providers,\n        __source: {\n            fileName: \"D:\\\\NextProjects\\\\twitter\\\\pages\\\\index.js\",\n            lineNumber: 14,\n            columnNumber: 25\n        },\n        __self: this\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"\",\n        __source: {\n            fileName: \"D:\\\\NextProjects\\\\twitter\\\\pages\\\\index.js\",\n            lineNumber: 16,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                __source: {\n                    fileName: \"D:\\\\NextProjects\\\\twitter\\\\pages\\\\index.js\",\n                    lineNumber: 17,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"D:\\\\NextProjects\\\\twitter\\\\pages\\\\index.js\",\n                            lineNumber: 18,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: \"Twitter | Home \"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/twitter.png\",\n                        __source: {\n                            fileName: \"D:\\\\NextProjects\\\\twitter\\\\pages\\\\index.js\",\n                            lineNumber: 19,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"main\", {\n                className: \"bg-[#111] min-h-screen max-w-[1500px] mx-auto\",\n                __source: {\n                    fileName: \"D:\\\\NextProjects\\\\twitter\\\\pages\\\\index.js\",\n                    lineNumber: 21,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_3__.Sidebar, {\n                        __source: {\n                            fileName: \"D:\\\\NextProjects\\\\twitter\\\\pages\\\\index.js\",\n                            lineNumber: 22,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_home_Feed__WEBPACK_IMPORTED_MODULE_2__.Feed, {\n                        __source: {\n                            fileName: \"D:\\\\NextProjects\\\\twitter\\\\pages\\\\index.js\",\n                            lineNumber: 23,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    open && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_modal_Modal__WEBPACK_IMPORTED_MODULE_8__.Modal, {\n                        __source: {\n                            fileName: \"D:\\\\NextProjects\\\\twitter\\\\pages\\\\index.js\",\n                            lineNumber: 24,\n                            columnNumber: 18\n                        },\n                        __self: this\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s1(Home, \"RrQCOFoXOO9MDjTRxYHGgIVrdUg=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession,\n        recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ2tCO0FBQ1M7QUFDZTtBQUMzQjtBQUNKO0FBQ0c7QUFDTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQyxRQUFRLENBQUNRLElBQUksQ0FBQyxLQUE2QyxFQUFFLENBQUM7UUFBOUNDLGVBQWUsR0FBakIsS0FBNkMsQ0FBM0NBLGVBQWUsRUFBRUMsYUFBYSxHQUFoQyxLQUE2QyxDQUExQkEsYUFBYSxFQUFFQyxTQUFTLEdBQTNDLEtBQTZDLENBQVhBLFNBQVM7O0lBQ3RFLEdBQUssQ0FBc0JSLEdBQVksR0FBWkEsMkRBQVUsSUFBdkJTLFFBQVEsR0FBS1QsR0FBWSxDQUEvQlUsSUFBSTtJQUNaLEdBQUssQ0FBbUJSLElBQTBCLGtCQUExQkEsc0RBQWMsQ0FBQ0MsbURBQVUsT0FBMUNRLElBQUksR0FBYVQsSUFBMEIsS0FBckNVLE9BQU8sR0FBSVYsSUFBMEI7SUFFbEQsRUFBRSxHQUFHTyxRQUFRLEVBQUUsTUFBTSxzRUFBRVIsb0RBQUs7UUFBQ08sU0FBUyxFQUFFQSxTQUFTOzs7Ozs7OztJQUNqRCxNQUFNLHVFQUNISyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFFOzs7Ozs7OztrRkFDZGpCLGtEQUFJOzs7Ozs7Ozt5RkFDRmtCLENBQUs7Ozs7Ozs7a0NBQUMsQ0FBZTs7eUZBQ3JCQyxDQUFJO3dCQUFDQyxHQUFHLEVBQUMsQ0FBTTt3QkFBQ0MsSUFBSSxFQUFDLENBQWM7Ozs7Ozs7Ozs7a0ZBRXJDQyxDQUFJO2dCQUFDTCxTQUFTLEVBQUMsQ0FBK0M7Ozs7Ozs7O3lGQUM1RGYsZ0VBQU87Ozs7Ozs7O3lGQUNQRCx1REFBSTs7Ozs7Ozs7b0JBQ0phLElBQUkseUVBQUtQLDBEQUFLOzs7Ozs7Ozs7Ozs7QUFJdkIsQ0FBQztJQWxCdUJDLElBQUk7O1FBQ0NMLHVEQUFVO1FBQ2JFLGtEQUFjOzs7S0FGaEJHLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBGZWVkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9tZS9GZWVkXCI7XG5pbXBvcnQgeyBTaWRlYmFyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvc2lkZWJhci9TaWRlYmFyXCI7XG5pbXBvcnQgeyBnZXRQcm92aWRlcnMsIGdldFNlc3Npb24sIHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgeyBMb2dpbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL0xvZ2luXCI7XG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gXCJyZWNvaWxcIjtcbmltcG9ydCB7IG1vZGFsU3RhdGUgfSBmcm9tIFwiLi4vc3RhdGUvYXRvbVwiO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9tb2RhbC9Nb2RhbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgdHJlbmRpbmdSZXN1bHRzLCBmb2xsb3dSZXN1bHRzLCBwcm92aWRlcnMgfSkge1xuICBjb25zdCB7IGRhdGE6IHNlc3N0aW9uIH0gPSB1c2VTZXNzaW9uKCk7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVJlY29pbFN0YXRlKG1vZGFsU3RhdGUpO1xuXG4gIGlmICghc2Vzc3Rpb24pIHJldHVybiA8TG9naW4gcHJvdmlkZXJzPXtwcm92aWRlcnN9IC8+O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlR3aXR0ZXIgfCBIb21lIDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL3R3aXR0ZXIucG5nXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImJnLVsjMTExXSBtaW4taC1zY3JlZW4gbWF4LXctWzE1MDBweF0gbXgtYXV0b1wiPlxuICAgICAgICA8U2lkZWJhciAvPlxuICAgICAgICA8RmVlZCAvPlxuICAgICAgICB7b3BlbiAmJiA8TW9kYWwgLz59XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgXG4gIGNvbnN0IHByb3ZpZGVycyA9IGF3YWl0IGdldFByb3ZpZGVycygpO1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihjb250ZXh0KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm92aWRlcnMsXG4gICAgICBzZXNzaW9uLFxuICAgIH0sXG4gIH07XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkZlZWQiLCJTaWRlYmFyIiwidXNlU2Vzc2lvbiIsIkxvZ2luIiwidXNlUmVjb2lsU3RhdGUiLCJtb2RhbFN0YXRlIiwiTW9kYWwiLCJIb21lIiwidHJlbmRpbmdSZXN1bHRzIiwiZm9sbG93UmVzdWx0cyIsInByb3ZpZGVycyIsInNlc3N0aW9uIiwiZGF0YSIsIm9wZW4iLCJzZXRPcGVuIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});