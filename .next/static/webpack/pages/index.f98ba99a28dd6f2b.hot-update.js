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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! normalize.css/normalize.css */ \"./node_modules/normalize.css/normalize.css\");\n/* harmony import */ var normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/index.module.css */ \"./styles/index.module.css\");\n/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n// import 'bootstrap/dist/css/bootstrap.css';\n\n\nfunction Home() {\n    _s();\n    const [number, setNumber] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [formUsername, setFormUsername] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const handleLoginBtnClick = (event)=>{\n        if (!formUsername) {\n            return;\n        }\n        localStorage.setItem(\"username\", formUsername);\n        setUsername(formUsername);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const storedUsername = localStorage.getItem(\"username\");\n        if (username) {\n            setUsername(storedUsername);\n        }\n    }, []);\n    if (username === undefined) {\n        return null;\n    }\n    if (username === null) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    value: formUsername,\n                    onChange: (event)=>setFormUsername(event.target.value),\n                    placeholder: \"Username\"\n                }, void 0, false, {\n                    fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    value: \"\",\n                    placeholder: \"*******\"\n                }, void 0, false, {\n                    fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleLoginBtnClick,\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n            lineNumber: 33,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/a\",\n                            as: \"/a\",\n                            children: \"a\"\n                        }, void 0, false, {\n                            fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/b\",\n                            as: \"/b\",\n                            children: \"b\"\n                        }, void 0, false, {\n                            fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        max: 100,\n                        onChange: (event)=>setNumber(+event.target.value),\n                        value: number\n                    }, void 0, false, {\n                        fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().progressBar),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().progressBarInner),\n                                style: {\n                                    width: \"\".concat(number, \"%\")\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat((_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().firstItem), \" \").concat(number >= 32 ? (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().active) : \"\"),\n                                style: {\n                                    left: \"30%\"\n                                },\n                                children: \"First\"\n                            }, void 0, false, {\n                                fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat((_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().secondItem), \" \").concat(number >= 62 ? (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().active) : \"\"),\n                                style: {\n                                    left: \"60%\"\n                                },\n                                children: \"Second\"\n                            }, void 0, false, {\n                                fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat((_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().lastItem), \" \").concat(number >= 92 ? (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().active) : \"\"),\n                                style: {\n                                    left: \"90%\"\n                                },\n                                children: \"Last\"\n                            }, void 0, false, {\n                                fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"qrzLqa+m7wmLm8VmMBm9NVNPyts=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNRO0FBQ3JDLDZDQUE2QztBQUNHO0FBQ0o7QUFFN0IsU0FBU0k7O0lBQ3RCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNJLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDTSxjQUFjQyxnQkFBZ0IsR0FBR1AsK0NBQVFBLENBQUM7SUFFakQsTUFBTVEsc0JBQXNCLENBQUNDO1FBQzNCLElBQUksQ0FBQ0gsY0FBYztZQUNqQjtRQUNGO1FBRUFJLGFBQWFDLE9BQU8sQ0FBQyxZQUFZTDtRQUNqQ0QsWUFBWUM7SUFDZDtJQUVBUCxnREFBU0EsQ0FBQztRQUNSLE1BQU1hLGlCQUFpQkYsYUFBYUcsT0FBTyxDQUFDO1FBQzVDLElBQUlULFVBQVU7WUFDWkMsWUFBWU87UUFDZDtJQUNGLEdBQUcsRUFBRTtJQUVMLElBQUlSLGFBQWFVLFdBQVc7UUFDMUIsT0FBTztJQUNUO0lBRUEsSUFBSVYsYUFBYSxNQUFNO1FBQ3JCLHFCQUFPLDhEQUFDVzs7OEJBQ04sOERBQUNDO29CQUFNQyxNQUFLO29CQUFPQyxPQUFPWjtvQkFBY2EsVUFBVSxDQUFDVixRQUFVRixnQkFBZ0JFLE1BQU1XLE1BQU0sQ0FBQ0YsS0FBSztvQkFBR0csYUFBWTs7Ozs7OzhCQUM5Ryw4REFBQ0w7b0JBQU1DLE1BQUs7b0JBQU9DLE9BQU07b0JBQUdHLGFBQVk7Ozs7Ozs4QkFDeEMsOERBQUNDO29CQUFPQyxTQUFTZjs4QkFBcUI7Ozs7Ozs7Ozs7OztJQUUxQztJQUVBLHFCQUNFLDhEQUFDTzs7MEJBQ0MsOERBQUNTOztrQ0FDQyw4REFBQ0M7a0NBQ0MsNEVBQUM1QixrREFBSUE7NEJBQUM2QixNQUFLOzRCQUFLQyxJQUFHO3NDQUFLOzs7Ozs7Ozs7OztrQ0FJMUIsOERBQUNGO2tDQUNDLDRFQUFDNUIsa0RBQUlBOzRCQUFDNkIsTUFBSzs0QkFBS0MsSUFBRztzQ0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSzVCLDhEQUFDQzs7a0NBQ0MsOERBQUNaO3dCQUFNQyxNQUFLO3dCQUFTWSxLQUFLO3dCQUFLVixVQUFVLENBQUNWLFFBQVVOLFVBQVUsQ0FBQ00sTUFBTVcsTUFBTSxDQUFDRixLQUFLO3dCQUFHQSxPQUFPaEI7Ozs7OztrQ0FDM0YsOERBQUM0Qjt3QkFBSUMsV0FBV2pDLDZFQUFrQjs7MENBQ2hDLDhEQUFDZ0M7Z0NBQUlDLFdBQVdqQyxrRkFBdUI7Z0NBQUVvQyxPQUFPO29DQUFFQyxPQUFPLEdBQVUsT0FBUGpDLFFBQU87Z0NBQUc7Ozs7OzswQ0FDdEUsOERBQUM0QjtnQ0FBSUMsV0FBVyxHQUF1QjdCLE9BQXBCSiwyRUFBZ0IsRUFBQyxLQUFxQyxPQUFsQ0ksVUFBVSxLQUFLSix3RUFBYSxHQUFHO2dDQUFNb0MsT0FBTztvQ0FBRUksTUFBTTtnQ0FBTTswQ0FBRzs7Ozs7OzBDQUdwRyw4REFBQ1I7Z0NBQUlDLFdBQVcsR0FBd0I3QixPQUFyQkosNEVBQWlCLEVBQUMsS0FBcUMsT0FBbENJLFVBQVUsS0FBS0osd0VBQWEsR0FBRztnQ0FBTW9DLE9BQU87b0NBQUVJLE1BQU07Z0NBQU07MENBQUc7Ozs7OzswQ0FHckcsOERBQUNSO2dDQUFJQyxXQUFXLEdBQXNCN0IsT0FBbkJKLDBFQUFlLEVBQUMsS0FBcUMsT0FBbENJLFVBQVUsS0FBS0osd0VBQWEsR0FBRztnQ0FBTW9DLE9BQU87b0NBQUVJLE1BQU07Z0NBQU07MENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU83RztHQWhFd0JyQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgJ25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcyc7XG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2luZGV4Lm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbbnVtYmVyLCBzZXROdW1iZXJdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtmb3JtVXNlcm5hbWUsIHNldEZvcm1Vc2VybmFtZV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBoYW5kbGVMb2dpbkJ0bkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKCFmb3JtVXNlcm5hbWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcm5hbWUnLCBmb3JtVXNlcm5hbWUpO1xuICAgIHNldFVzZXJuYW1lKGZvcm1Vc2VybmFtZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzdG9yZWRVc2VybmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VybmFtZScpO1xuICAgIGlmICh1c2VybmFtZSkge1xuICAgICAgc2V0VXNlcm5hbWUoc3RvcmVkVXNlcm5hbWUpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGlmICh1c2VybmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAodXNlcm5hbWUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gPG1haW4+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17Zm9ybVVzZXJuYW1lfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRGb3JtVXNlcm5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPVwiXCIgcGxhY2Vob2xkZXI9XCIqKioqKioqXCIvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2dpbkJ0bkNsaWNrfT5Mb2dpbjwvYnV0dG9uPlxuICAgIDwvbWFpbj5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2FcIiBhcz1cIi9hXCI+XG4gICAgICAgICAgICBhXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9iXCIgYXM9XCIvYlwiPlxuICAgICAgICAgICAgYlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBtYXg9ezEwMH0gb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0TnVtYmVyKCtldmVudC50YXJnZXQudmFsdWUpfSB2YWx1ZT17bnVtYmVyfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzQmFyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzQmFySW5uZXJ9IHN0eWxlPXt7IHdpZHRoOiBgJHtudW1iZXJ9JWAgfX0+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5maXJzdEl0ZW19ICR7bnVtYmVyID49IDMyID8gc3R5bGVzLmFjdGl2ZSA6ICcnfWB9IHN0eWxlPXt7IGxlZnQ6ICczMCUnIH19PlxuICAgICAgICAgIEZpcnN0XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5zZWNvbmRJdGVtfSAke251bWJlciA+PSA2MiA/IHN0eWxlcy5hY3RpdmUgOiAnJ31gfSBzdHlsZT17eyBsZWZ0OiAnNjAlJyB9fT5cbiAgICAgICAgICBTZWNvbmRcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmxhc3RJdGVtfSAke251bWJlciA+PSA5MiA/IHN0eWxlcy5hY3RpdmUgOiAnJ31gfSBzdHlsZT17eyBsZWZ0OiAnOTAlJyB9fT5cbiAgICAgICAgICBMYXN0XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJMaW5rIiwic3R5bGVzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIb21lIiwibnVtYmVyIiwic2V0TnVtYmVyIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsImZvcm1Vc2VybmFtZSIsInNldEZvcm1Vc2VybmFtZSIsImhhbmRsZUxvZ2luQnRuQ2xpY2siLCJldmVudCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzdG9yZWRVc2VybmFtZSIsImdldEl0ZW0iLCJ1bmRlZmluZWQiLCJtYWluIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayIsInVsIiwibGkiLCJocmVmIiwiYXMiLCJzZWN0aW9uIiwibWF4IiwiZGl2IiwiY2xhc3NOYW1lIiwicHJvZ3Jlc3NCYXIiLCJwcm9ncmVzc0JhcklubmVyIiwic3R5bGUiLCJ3aWR0aCIsImZpcnN0SXRlbSIsImFjdGl2ZSIsImxlZnQiLCJzZWNvbmRJdGVtIiwibGFzdEl0ZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});