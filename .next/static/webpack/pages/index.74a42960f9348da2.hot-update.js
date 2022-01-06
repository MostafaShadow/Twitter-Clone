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

/***/ "./components/Login.js":
/*!*****************************!*\
  !*** ./components/Login.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Login\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_twitter_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/twitter.jpg */ \"./images/twitter.jpg\");\n/* harmony import */ var _images_google_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/google.png */ \"./images/google.png\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar Login = function(param) {\n    var providers = param.providers;\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"h-screen w-screen flex flex-col justify-center text-[#ddd] text-center space-y-8\",\n        __source: {\n            fileName: \"D:\\\\NextProjects\\\\twitter\\\\components\\\\Login.js\",\n            lineNumber: 9,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"space-y-3\",\n                __source: {\n                    fileName: \"D:\\\\NextProjects\\\\twitter\\\\components\\\\Login.js\",\n                    lineNumber: 10,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: _images_twitter_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                        width: 150,\n                        height: 150,\n                        objectFit: \"contain\",\n                        className: \"hover:rotate-3 duration-200 ease-out\",\n                        __source: {\n                            fileName: \"D:\\\\NextProjects\\\\twitter\\\\components\\\\Login.js\",\n                            lineNumber: 11,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                        className: \"text-4xl\",\n                        __source: {\n                            fileName: \"D:\\\\NextProjects\\\\twitter\\\\components\\\\Login.js\",\n                            lineNumber: 18,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"Happening now ?\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                        className: \"text-xl\",\n                        __source: {\n                            fileName: \"D:\\\\NextProjects\\\\twitter\\\\components\\\\Login.js\",\n                            lineNumber: 19,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"Join Twitter Today .\"\n                    })\n                ]\n            }),\n            Object.values(providers).map(function(provider) {\n                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    __source: {\n                        fileName: \"D:\\\\NextProjects\\\\twitter\\\\components\\\\Login.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    },\n                    __self: _this1,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        onClick: function() {\n                            return (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signIn)(provider.id, {\n                                callbackUrl: \"/\"\n                            });\n                        },\n                        className: \" w-fit mx-auto flex py-[10px] items-center justify-center px-[20px] rounded text-[#111] bg-[#fefefe] cursor-pointer hover:text-[#1569a0] transition duration-150 ease-linear \",\n                        __source: {\n                            fileName: \"D:\\\\NextProjects\\\\twitter\\\\components\\\\Login.js\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        },\n                        __self: _this1,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: _images_google_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                alt: \"\",\n                                width: 20,\n                                height: 20,\n                                objectFit: \"contain\",\n                                __source: {\n                                    fileName: \"D:\\\\NextProjects\\\\twitter\\\\components\\\\Login.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 13\n                                },\n                                __self: _this1\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h4\", {\n                                className: \"ml-2 mt-[-3px] text-xl font-[400]\",\n                                __source: {\n                                    fileName: \"D:\\\\NextProjects\\\\twitter\\\\components\\\\Login.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                },\n                                __self: _this1,\n                                children: [\n                                    \"Sign Up With \",\n                                    provider.name\n                                ]\n                            })\n                        ]\n                    })\n                }, provider.name);\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n                className: \"block\",\n                __source: {\n                    fileName: \"D:\\\\NextProjects\\\\twitter\\\\components\\\\Login.js\",\n                    lineNumber: 42,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    \"\\xa9 By\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                        href: \"https://www.mostafamohamed.ml/\",\n                        target: \"_blank\",\n                        className: \"text-[#45adf2]\",\n                        __source: {\n                            fileName: \"D:\\\\NextProjects\\\\twitter\\\\components\\\\Login.js\",\n                            lineNumber: 44,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: [\n                            \"Mostafa Mohamed \",\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                className: \"text-[16px]\",\n                                __source: {\n                                    fileName: \"D:\\\\NextProjects\\\\twitter\\\\components\\\\Login.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 27\n                                },\n                                __self: _this,\n                                children: \"♥\"\n                            })\n                        ]\n                    }),\n                    \" \",\n                    \"2022\"\n                ]\n            })\n        ]\n    }));\n};\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvZ2luLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ1U7QUFDQztBQUNEOztBQUVqQyxHQUFLLENBQUNJLEtBQUssR0FBRyxRQUFRLFFBQVcsQ0FBQztRQUFqQkMsU0FBUyxTQUFUQSxTQUFTOztJQUMvQixNQUFNLHVFQUVIQyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFrRjs7Ozs7Ozs7a0ZBQzlGRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBVzs7Ozs7Ozs7eUZBQ3ZCUCxtREFBSzt3QkFDSlEsR0FBRyxFQUFFUCwyREFBSTt3QkFDVFEsS0FBSyxFQUFFLEdBQUc7d0JBQ1ZDLE1BQU0sRUFBRSxHQUFHO3dCQUNYQyxTQUFTLEVBQUMsQ0FBUzt3QkFDbkJKLFNBQVMsRUFBQyxDQUFzQzs7Ozs7Ozs7eUZBRWpESyxDQUFFO3dCQUFDTCxTQUFTLEVBQUMsQ0FBVTs7Ozs7OztrQ0FBQyxDQUFlOzt5RkFDdkNLLENBQUU7d0JBQUNMLFNBQVMsRUFBQyxDQUFTOzs7Ozs7O2tDQUFDLENBQW9COzs7O1lBRzdDTSxNQUFNLENBQUNDLE1BQU0sQ0FBQ1QsU0FBUyxFQUFFVSxHQUFHLENBQUMsUUFBUSxDQUFQQyxRQUFROzhCQUNyQyxNQUFNLHdEQUFMVixDQUFHOzs7Ozs7O29HQUNEQSxDQUFHO3dCQUNGVyxPQUFPLEVBQUUsUUFBUTs0QkFBRmQsTUFBTSxDQUFOQSx1REFBTSxDQUFDYSxRQUFRLENBQUNFLEVBQUUsRUFBRSxDQUFDO2dDQUFDQyxXQUFXLEVBQUUsQ0FBRzs0QkFBQyxDQUFDOzt3QkFDdkRaLFNBQVMsRUFBQyxDQUFrTDs7Ozs7Ozs7aUdBRTNMUCxtREFBSztnQ0FDSlEsR0FBRyxFQUFFTiwwREFBTTtnQ0FDWGtCLEdBQUcsRUFBQyxDQUFFO2dDQUNOWCxLQUFLLEVBQUUsRUFBRTtnQ0FDVEMsTUFBTSxFQUFFLEVBQUU7Z0NBQ1ZDLFNBQVMsRUFBQyxDQUFTOzs7Ozs7OztrR0FFcEJVLENBQUU7Z0NBQUNkLFNBQVMsRUFBQyxDQUFtQzs7Ozs7Ozs7b0NBQUMsQ0FDbkM7b0NBQUNTLFFBQVEsQ0FBQ00sSUFBSTs7Ozs7bUJBYnZCTixRQUFRLENBQUNNLElBQUk7O2tGQW1CeEJDLENBQUk7Z0JBQUNoQixTQUFTLEVBQUMsQ0FBTzs7Ozs7Ozs7b0JBQUMsQ0FDYjtvQkFBQyxDQUFHOzBGQUNaaUIsQ0FBQzt3QkFBQ0MsSUFBSSxFQUFDLENBQWdDO3dCQUFDQyxNQUFNLEVBQUMsQ0FBUTt3QkFBQ25CLFNBQVMsRUFBQyxDQUFnQjs7Ozs7Ozs7NEJBQUMsQ0FDbEU7aUdBQUNnQixDQUFJO2dDQUFDaEIsU0FBUyxFQUFDLENBQWE7Ozs7Ozs7MENBQUMsQ0FBTzs7OztvQkFDbEQsQ0FBRztvQkFBQyxDQUVYOzs7OztBQUdOLENBQUM7S0E3Q1lILEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbi5qcz82NTBjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgbG9nbyBmcm9tIFwiLi4vaW1hZ2VzL3R3aXR0ZXIuanBnXCI7XHJcbmltcG9ydCBnb29nbGUgZnJvbSBcIi4uL2ltYWdlcy9nb29nbGUucG5nXCI7XHJcbmltcG9ydCB7IHNpZ25JbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2dpbiA9ICh7IHByb3ZpZGVycyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiB3LXNjcmVlbiBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIHRleHQtWyNkZGRdIHRleHQtY2VudGVyIHNwYWNlLXktOFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktM1wiPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3JjPXtsb2dvfVxyXG4gICAgICAgICAgd2lkdGg9ezE1MH1cclxuICAgICAgICAgIGhlaWdodD17MTUwfVxyXG4gICAgICAgICAgb2JqZWN0Rml0PVwiY29udGFpblwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJob3Zlcjpyb3RhdGUtMyBkdXJhdGlvbi0yMDAgZWFzZS1vdXRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsXCI+SGFwcGVuaW5nIG5vdyA/PC9oMj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bFwiPkpvaW4gVHdpdHRlciBUb2RheSAuPC9oMj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7T2JqZWN0LnZhbHVlcyhwcm92aWRlcnMpLm1hcCgocHJvdmlkZXIpID0+IChcclxuICAgICAgICA8ZGl2IGtleT17cHJvdmlkZXIubmFtZX0+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNpZ25Jbihwcm92aWRlci5pZCwgeyBjYWxsYmFja1VybDogXCIvXCIgfSl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LWZpdCBteC1hdXRvIGZsZXggcHktWzEwcHhdIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC1bMjBweF0gcm91bmRlZCAgdGV4dC1bIzExMV0gYmctWyNmZWZlZmVdICBjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LVsjMTU2OWEwXSAgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTAgZWFzZS1saW5lYXIgXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPXtnb29nbGV9XHJcbiAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICB3aWR0aD17MjB9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXsyMH1cclxuICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1sLTIgbXQtWy0zcHhdIHRleHQteGwgZm9udC1bNDAwXVwiPlxyXG4gICAgICAgICAgICAgIFNpZ24gVXAgV2l0aCB7cHJvdmlkZXIubmFtZX1cclxuICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuXHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrXCI+XHJcbiAgICAgICAgJmNvcHk7IEJ5e1wiIFwifVxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5tb3N0YWZhbW9oYW1lZC5tbC9cIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJ0ZXh0LVsjNDVhZGYyXVwiPlxyXG4gICAgICAgICAgTW9zdGFmYSBNb2hhbWVkIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzE2cHhdXCI+JiM5ODI5Ozwvc3Bhbj5cclxuICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgIDIwMjJcclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbIkltYWdlIiwibG9nbyIsImdvb2dsZSIsInNpZ25JbiIsIkxvZ2luIiwicHJvdmlkZXJzIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJoMiIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCIsInByb3ZpZGVyIiwib25DbGljayIsImlkIiwiY2FsbGJhY2tVcmwiLCJhbHQiLCJoNCIsIm5hbWUiLCJzcGFuIiwiYSIsImhyZWYiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Login.js\n");

/***/ })

});