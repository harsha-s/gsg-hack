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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! normalize.css/normalize.css */ \"./node_modules/normalize.css/normalize.css\");\n/* harmony import */ var normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/index.module.css */ \"./styles/index.module.css\");\n/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n// import 'bootstrap/dist/css/bootstrap.css';\n\n\nfunction Home() {\n    _s();\n    const [number, setNumber] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [formUsername, setFormUsername] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const handleLoginBtnClick = ()=>{\n        if (!formUsername) {\n            return;\n        }\n        localStorage.setItem(\"username\", formUsername);\n        setUsername(formUsername);\n    };\n    const handleLogoutBtnClick = ()=>{\n        localStorage.removeItem(\"username\");\n        setUsername(null);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const storedUsername = localStorage.getItem(\"username\");\n        if (username) {\n            setUsername(storedUsername);\n        }\n    }, []);\n    if (username === undefined) {\n        return null;\n    }\n    if (username === null) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    value: formUsername,\n                    onChange: (event)=>setFormUsername(event.target.value),\n                    placeholder: \"Username\"\n                }, void 0, false, {\n                    fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    value: \"\",\n                    placeholder: \"*******\"\n                }, void 0, false, {\n                    fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleLoginBtnClick,\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n            lineNumber: 38,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: [\n                    \"Hello \",\n                    username,\n                    \",\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/a\",\n                                    as: \"/a\",\n                                    children: \"a\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/b\",\n                                    as: \"/b\",\n                                    children: \"b\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleLogoutBtnClick,\n                        children: \"Logout\"\n                    }, void 0, false, {\n                        fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        max: 100,\n                        onChange: (event)=>setNumber(+event.target.value),\n                        value: number\n                    }, void 0, false, {\n                        fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().progressBar),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().progressBarInner),\n                                style: {\n                                    width: \"\".concat(number, \"%\")\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat((_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().firstItem), \" \").concat(number >= 32 ? (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().active) : \"\"),\n                                style: {\n                                    left: \"30%\"\n                                },\n                                children: \"First\"\n                            }, void 0, false, {\n                                fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat((_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().secondItem), \" \").concat(number >= 62 ? (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().active) : \"\"),\n                                style: {\n                                    left: \"60%\"\n                                },\n                                children: \"Second\"\n                            }, void 0, false, {\n                                fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat((_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().lastItem), \" \").concat(number >= 92 ? (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().active) : \"\"),\n                                style: {\n                                    left: \"90%\"\n                                },\n                                children: \"Last\"\n                            }, void 0, false, {\n                                fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"qrzLqa+m7wmLm8VmMBm9NVNPyts=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCAnbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzJztcbi8vIGltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3MnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvaW5kZXgubW9kdWxlLmNzcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtudW1iZXIsIHNldE51bWJlcl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2Zvcm1Vc2VybmFtZSwgc2V0Rm9ybVVzZXJuYW1lXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZUxvZ2luQnRuQ2xpY2sgPSAoKSA9PiB7XG4gICAgaWYgKCFmb3JtVXNlcm5hbWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcm5hbWUnLCBmb3JtVXNlcm5hbWUpO1xuICAgIHNldFVzZXJuYW1lKGZvcm1Vc2VybmFtZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTG9nb3V0QnRuQ2xpY2sgPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXJuYW1lJyk7XG4gICAgc2V0VXNlcm5hbWUobnVsbCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzdG9yZWRVc2VybmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VybmFtZScpO1xuICAgIGlmICh1c2VybmFtZSkge1xuICAgICAgc2V0VXNlcm5hbWUoc3RvcmVkVXNlcm5hbWUpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGlmICh1c2VybmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAodXNlcm5hbWUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gPG1haW4+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17Zm9ybVVzZXJuYW1lfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRGb3JtVXNlcm5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPVwiXCIgcGxhY2Vob2xkZXI9XCIqKioqKioqXCIvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2dpbkJ0bkNsaWNrfT5Mb2dpbjwvYnV0dG9uPlxuICAgIDwvbWFpbj5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8bmF2PlxuICAgICAgICBIZWxsbyB7dXNlcm5hbWV9LFxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hXCIgYXM9XCIvYVwiPlxuICAgICAgICAgICAgICBhXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2JcIiBhcz1cIi9iXCI+XG4gICAgICAgICAgICAgIGJcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ291dEJ0bkNsaWNrfT5Mb2dvdXQ8L2J1dHRvbj5cbiAgICAgIDwvbmF2PlxuICAgICAgXG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBtYXg9ezEwMH0gb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0TnVtYmVyKCtldmVudC50YXJnZXQudmFsdWUpfSB2YWx1ZT17bnVtYmVyfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzQmFyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzQmFySW5uZXJ9IHN0eWxlPXt7IHdpZHRoOiBgJHtudW1iZXJ9JWAgfX0+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5maXJzdEl0ZW19ICR7bnVtYmVyID49IDMyID8gc3R5bGVzLmFjdGl2ZSA6ICcnfWB9IHN0eWxlPXt7IGxlZnQ6ICczMCUnIH19PlxuICAgICAgICAgIEZpcnN0XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5zZWNvbmRJdGVtfSAke251bWJlciA+PSA2MiA/IHN0eWxlcy5hY3RpdmUgOiAnJ31gfSBzdHlsZT17eyBsZWZ0OiAnNjAlJyB9fT5cbiAgICAgICAgICBTZWNvbmRcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmxhc3RJdGVtfSAke251bWJlciA+PSA5MiA/IHN0eWxlcy5hY3RpdmUgOiAnJ31gfSBzdHlsZT17eyBsZWZ0OiAnOTAlJyB9fT5cbiAgICAgICAgICBMYXN0XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJMaW5rIiwic3R5bGVzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIb21lIiwibnVtYmVyIiwic2V0TnVtYmVyIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsImZvcm1Vc2VybmFtZSIsInNldEZvcm1Vc2VybmFtZSIsImhhbmRsZUxvZ2luQnRuQ2xpY2siLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiaGFuZGxlTG9nb3V0QnRuQ2xpY2siLCJyZW1vdmVJdGVtIiwic3RvcmVkVXNlcm5hbWUiLCJnZXRJdGVtIiwidW5kZWZpbmVkIiwibWFpbiIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayIsIm5hdiIsInVsIiwibGkiLCJocmVmIiwiYXMiLCJzZWN0aW9uIiwibWF4IiwiZGl2IiwiY2xhc3NOYW1lIiwicHJvZ3Jlc3NCYXIiLCJwcm9ncmVzc0JhcklubmVyIiwic3R5bGUiLCJ3aWR0aCIsImZpcnN0SXRlbSIsImFjdGl2ZSIsImxlZnQiLCJzZWNvbmRJdGVtIiwibGFzdEl0ZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});