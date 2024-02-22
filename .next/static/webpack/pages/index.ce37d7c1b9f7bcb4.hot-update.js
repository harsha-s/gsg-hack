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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! normalize.css/normalize.css */ \"./node_modules/normalize.css/normalize.css\");\n/* harmony import */ var normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/index.module.css */ \"./styles/index.module.css\");\n/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n// import 'bootstrap/dist/css/bootstrap.css';\n\n\nfunction Home() {\n    _s();\n    const [number, setNumber] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(30);\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [formUsername, setFormUsername] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [merchant, setMerchant] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [merchants, setMerchants] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [newsletter, setNewsletter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const onMerchantAdd = (name)=>{\n        if (merchants.includes(name)) {\n            return;\n        }\n        setMerchants([\n            ...merchants,\n            name\n        ]);\n        setMerchant(\"\");\n    };\n    const onMerchantRemove = (name)=>{\n        setMerchants(merchants.filter((mer)=>mer !== name));\n    };\n    const handleLoginBtnClick = ()=>{\n        if (!formUsername) {\n            return;\n        }\n        localStorage.setItem(\"username\", formUsername);\n        setUsername(formUsername);\n    };\n    const handleLogoutBtnClick = ()=>{\n        localStorage.removeItem(\"username\");\n        setUsername(null);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const storedUsername = localStorage.getItem(\"username\");\n        if (storedUsername) {\n            setUsername(storedUsername);\n        }\n    }, []);\n    if (!username) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    value: formUsername,\n                    onChange: (event)=>setFormUsername(event.target.value),\n                    placeholder: \"Username\"\n                }, void 0, false, {\n                    fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    value: \"\",\n                    placeholder: \"*******\"\n                }, void 0, false, {\n                    fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleLoginBtnClick,\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n            lineNumber: 50,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: [\n                    \"Hello \",\n                    username,\n                    \",\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleLogoutBtnClick,\n                        children: \"Logout\"\n                    }, void 0, false, {\n                        fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Earn $5 bonus from us\"\n                    }, void 0, false, {\n                        fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: [\n                            \"Subscribe to our Newsletter \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"\".concat((_styles_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().status), \" \").concat(newsletter ? (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().done) : (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().notyet)),\n                                children: newsletter ? \"Done\" : \"Not yet\"\n                            }, void 0, false, {\n                                fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 41\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"newsletter\",\n                        type: \"checkbox\",\n                        value: newsletter ? \"checked\" : \"\",\n                        onChange: (event)=>setNewsletter(event.target.checked)\n                    }, void 0, false, {\n                        fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"newsletter\",\n                        children: \"Daily newsletter\"\n                    }, void 0, false, {\n                        fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: [\n                            \"Add your favorite merchants \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"\".concat((_styles_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().status), \" \").concat(merchants.length > 0 ? (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().done) : (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().notyet)),\n                                children: merchants.length > 0 ? \"Done\" : \"Not yet\"\n                            }, void 0, false, {\n                                fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 41\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: merchant,\n                        onKeyDown: (e)=>{\n                            if (e.key === \"Enter\") {\n                                onMerchantAdd(merchant);\n                            }\n                        },\n                        onChange: (event)=>setMerchant(event.target.value),\n                        placeholder: \"Your favorite merchant\"\n                    }, void 0, false, {\n                        fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: merchants.map((name)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().favoriateMerchant),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 15\n                                    }, this),\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>onMerchantRemove(name),\n                                        children: \"x\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    newsletter && merchants.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Claim your $5 bonus\"\n                    }, void 0, false, {\n                        fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 48\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Get your cashback\"\n                    }, void 0, false, {\n                        fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Your purchase value\"\n                    }, void 0, false, {\n                        fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        max: 100,\n                        onChange: (event)=>setNumber(+event.target.value),\n                        value: number\n                    }, void 0, false, {\n                        fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                        fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().progressBar),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().progressBarInner),\n                                style: {\n                                    width: \"\".concat(number, \"%\")\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat((_styles_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().firstItem), \" \").concat(number >= 32 ? (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().active) : \"\"),\n                                style: {\n                                    left: \"30%\"\n                                },\n                                children: \"First\"\n                            }, void 0, false, {\n                                fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat((_styles_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().secondItem), \" \").concat(number >= 62 ? (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().active) : \"\"),\n                                style: {\n                                    left: \"60%\"\n                                },\n                                children: \"Second\"\n                            }, void 0, false, {\n                                fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat((_styles_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().lastItem), \" \").concat(number >= 92 ? (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().active) : \"\"),\n                                style: {\n                                    left: \"90%\"\n                                },\n                                children: \"Last\"\n                            }, void 0, false, {\n                                fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/walle/GSG/hackathon/gsg-hack/pages/index.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"RArU2HBx09Am8jmMStOwu59KNKA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF3Qm5DLE9BQXJCSiw0RUFBaUIsRUFBQyxLQUFxQyxPQUFsQ0ksVUFBVSxLQUFLSix3RUFBYSxHQUFHO2dDQUFNa0UsT0FBTztvQ0FBRUksTUFBTTtnQ0FBTTswQ0FBRzs7Ozs7OzBDQUdyRyw4REFBQ1o7Z0NBQUluQixXQUFXLEdBQXNCbkMsT0FBbkJKLDBFQUFlLEVBQUMsS0FBcUMsT0FBbENJLFVBQVUsS0FBS0osd0VBQWEsR0FBRztnQ0FBTWtFLE9BQU87b0NBQUVJLE1BQU07Z0NBQU07MENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU83RztHQXBHd0JuRTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgJ25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcyc7XG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2luZGV4Lm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbbnVtYmVyLCBzZXROdW1iZXJdID0gdXNlU3RhdGUoMzApO1xuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZm9ybVVzZXJuYW1lLCBzZXRGb3JtVXNlcm5hbWVdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFttZXJjaGFudCwgc2V0TWVyY2hhbnRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbbWVyY2hhbnRzLCBzZXRNZXJjaGFudHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbmV3c2xldHRlciwgc2V0TmV3c2xldHRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25NZXJjaGFudEFkZCA9IChuYW1lKSA9PiB7XG4gICAgaWYgKG1lcmNoYW50cy5pbmNsdWRlcyhuYW1lKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldE1lcmNoYW50cyhbLi4ubWVyY2hhbnRzLCBuYW1lXSk7XG4gICAgc2V0TWVyY2hhbnQoJycpO1xuICB9O1xuXG4gIGNvbnN0IG9uTWVyY2hhbnRSZW1vdmUgPSAobmFtZSkgPT4ge1xuICAgIHNldE1lcmNoYW50cyhtZXJjaGFudHMuZmlsdGVyKG1lciA9PiBtZXIgIT09IG5hbWUpKVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUxvZ2luQnRuQ2xpY2sgPSAoKSA9PiB7XG4gICAgaWYgKCFmb3JtVXNlcm5hbWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcm5hbWUnLCBmb3JtVXNlcm5hbWUpO1xuICAgIHNldFVzZXJuYW1lKGZvcm1Vc2VybmFtZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTG9nb3V0QnRuQ2xpY2sgPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXJuYW1lJyk7XG4gICAgc2V0VXNlcm5hbWUobnVsbCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzdG9yZWRVc2VybmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VybmFtZScpO1xuICAgIGlmIChzdG9yZWRVc2VybmFtZSkge1xuICAgICAgc2V0VXNlcm5hbWUoc3RvcmVkVXNlcm5hbWUpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGlmICghdXNlcm5hbWUpIHtcbiAgICByZXR1cm4gPG1haW4+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17Zm9ybVVzZXJuYW1lfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRGb3JtVXNlcm5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPVwiXCIgcGxhY2Vob2xkZXI9XCIqKioqKioqXCIvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2dpbkJ0bkNsaWNrfT5Mb2dpbjwvYnV0dG9uPlxuICAgIDwvbWFpbj5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICA8bmF2PlxuICAgICAgICBIZWxsbyB7dXNlcm5hbWV9LFxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ291dEJ0bkNsaWNrfT5Mb2dvdXQ8L2J1dHRvbj5cbiAgICAgIDwvbmF2PlxuXG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGgxPkVhcm4gJDUgYm9udXMgZnJvbSB1czwvaDE+XG4gICAgICAgIDxoMz5TdWJzY3JpYmUgdG8gb3VyIE5ld3NsZXR0ZXIgPHNwYW4gY2xhc3NOYW1lPXtgJHtzdHlsZXMuc3RhdHVzfSAke25ld3NsZXR0ZXIgPyBzdHlsZXMuZG9uZSA6IHN0eWxlcy5ub3R5ZXR9YH0+e25ld3NsZXR0ZXIgPyAnRG9uZScgOiAnTm90IHlldCd9PC9zcGFuPjwvaDM+XG4gICAgICAgIDxpbnB1dCBpZD1cIm5ld3NsZXR0ZXJcIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT17bmV3c2xldHRlciA/ICdjaGVja2VkJyA6ICcnfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXROZXdzbGV0dGVyKGV2ZW50LnRhcmdldC5jaGVja2VkKX0gLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuZXdzbGV0dGVyXCI+RGFpbHkgbmV3c2xldHRlcjwvbGFiZWw+XG4gICAgICAgIDxoMz5BZGQgeW91ciBmYXZvcml0ZSBtZXJjaGFudHMgPHNwYW4gY2xhc3NOYW1lPXtgJHtzdHlsZXMuc3RhdHVzfSAke21lcmNoYW50cy5sZW5ndGggPiAwID8gc3R5bGVzLmRvbmUgOiBzdHlsZXMubm90eWV0fWB9PnttZXJjaGFudHMubGVuZ3RoID4gMCA/ICdEb25lJyA6ICdOb3QgeWV0J308L3NwYW4+PC9oMz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e21lcmNoYW50fSBvbktleURvd249eyhlKSA9PiB7IGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7IG9uTWVyY2hhbnRBZGQobWVyY2hhbnQpIH1cbiAgICAgICAgfX0gb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0TWVyY2hhbnQoZXZlbnQudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9XCJZb3VyIGZhdm9yaXRlIG1lcmNoYW50XCIgLz5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHttZXJjaGFudHMubWFwKG5hbWUgPT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmF2b3JpYXRlTWVyY2hhbnR9PlxuICAgICAgICAgICAgICA8c3Bhbj57bmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gb25NZXJjaGFudFJlbW92ZShuYW1lKX0+eDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC91bD5cbiAgICAgICAge25ld3NsZXR0ZXIgJiYgbWVyY2hhbnRzLmxlbmd0aCA+IDAgJiYgPGJ1dHRvbj5DbGFpbSB5b3VyICQ1IGJvbnVzPC9idXR0b24+fVxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgXG4gICAgICA8aHIgLz5cblxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxoMT5HZXQgeW91ciBjYXNoYmFjazwvaDE+XG4gICAgICAgIDxoMz5Zb3VyIHB1cmNoYXNlIHZhbHVlPC9oMz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBtYXg9ezEwMH0gb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0TnVtYmVyKCtldmVudC50YXJnZXQudmFsdWUpfSB2YWx1ZT17bnVtYmVyfSAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPHA+PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzQmFyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzQmFySW5uZXJ9IHN0eWxlPXt7IHdpZHRoOiBgJHtudW1iZXJ9JWAgfX0+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5maXJzdEl0ZW19ICR7bnVtYmVyID49IDMyID8gc3R5bGVzLmFjdGl2ZSA6ICcnfWB9IHN0eWxlPXt7IGxlZnQ6ICczMCUnIH19PlxuICAgICAgICAgIEZpcnN0XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5zZWNvbmRJdGVtfSAke251bWJlciA+PSA2MiA/IHN0eWxlcy5hY3RpdmUgOiAnJ31gfSBzdHlsZT17eyBsZWZ0OiAnNjAlJyB9fT5cbiAgICAgICAgICBTZWNvbmRcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmxhc3RJdGVtfSAke251bWJlciA+PSA5MiA/IHN0eWxlcy5hY3RpdmUgOiAnJ31gfSBzdHlsZT17eyBsZWZ0OiAnOTAlJyB9fT5cbiAgICAgICAgICBMYXN0XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJudW1iZXIiLCJzZXROdW1iZXIiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiZm9ybVVzZXJuYW1lIiwic2V0Rm9ybVVzZXJuYW1lIiwibWVyY2hhbnQiLCJzZXRNZXJjaGFudCIsIm1lcmNoYW50cyIsInNldE1lcmNoYW50cyIsIm5ld3NsZXR0ZXIiLCJzZXROZXdzbGV0dGVyIiwib25NZXJjaGFudEFkZCIsIm5hbWUiLCJpbmNsdWRlcyIsIm9uTWVyY2hhbnRSZW1vdmUiLCJmaWx0ZXIiLCJtZXIiLCJoYW5kbGVMb2dpbkJ0bkNsaWNrIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImhhbmRsZUxvZ291dEJ0bkNsaWNrIiwicmVtb3ZlSXRlbSIsInN0b3JlZFVzZXJuYW1lIiwiZ2V0SXRlbSIsIm1haW4iLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJuYXYiLCJzZWN0aW9uIiwiaDEiLCJoMyIsInNwYW4iLCJzdGF0dXMiLCJkb25lIiwibm90eWV0IiwiaWQiLCJjaGVja2VkIiwibGFiZWwiLCJodG1sRm9yIiwibGVuZ3RoIiwib25LZXlEb3duIiwiZSIsImtleSIsInVsIiwibWFwIiwiZGl2IiwiZmF2b3JpYXRlTWVyY2hhbnQiLCJociIsIm1heCIsImJyIiwicCIsInByb2dyZXNzQmFyIiwicHJvZ3Jlc3NCYXJJbm5lciIsInN0eWxlIiwid2lkdGgiLCJmaXJzdEl0ZW0iLCJhY3RpdmUiLCJsZWZ0Iiwic2Vjb25kSXRlbSIsImxhc3RJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});