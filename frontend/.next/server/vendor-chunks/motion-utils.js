"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/motion-utils";
exports.ids = ["vendor-chunks/motion-utils"];
exports.modules = {

/***/ "(ssr)/./node_modules/motion-utils/dist/es/errors.mjs":
/*!******************************************************!*\
  !*** ./node_modules/motion-utils/dist/es/errors.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   invariant: () => (/* binding */ invariant),\n/* harmony export */   warning: () => (/* binding */ warning)\n/* harmony export */ });\n/* harmony import */ var _format_error_message_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format-error-message.mjs */ \"(ssr)/./node_modules/motion-utils/dist/es/format-error-message.mjs\");\n\n\nlet warning = () => { };\nlet invariant = () => { };\nif (true) {\n    warning = (check, message, errorCode) => {\n        if (!check && typeof console !== \"undefined\") {\n            console.warn((0,_format_error_message_mjs__WEBPACK_IMPORTED_MODULE_0__.formatErrorMessage)(message, errorCode));\n        }\n    };\n    invariant = (check, message, errorCode) => {\n        if (!check) {\n            throw new Error((0,_format_error_message_mjs__WEBPACK_IMPORTED_MODULE_0__.formatErrorMessage)(message, errorCode));\n        }\n    };\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbW90aW9uLXV0aWxzL2Rpc3QvZXMvZXJyb3JzLm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0U7O0FBRWhFO0FBQ0E7QUFDQSxJQUFJLElBQXFDO0FBQ3pDO0FBQ0E7QUFDQSx5QkFBeUIsNkVBQWtCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDZFQUFrQjtBQUM5QztBQUNBO0FBQ0E7O0FBRThCIiwic291cmNlcyI6WyJEOlxcV3MgQ3ViZSBUZWNoIFByb2plY3RcXEZ1bGwgU3RhY2sgUHJvamVjdFxcSVNob3BcXGZyb250ZW5kXFxub2RlX21vZHVsZXNcXG1vdGlvbi11dGlsc1xcZGlzdFxcZXNcXGVycm9ycy5tanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybWF0RXJyb3JNZXNzYWdlIH0gZnJvbSAnLi9mb3JtYXQtZXJyb3ItbWVzc2FnZS5tanMnO1xuXG5sZXQgd2FybmluZyA9ICgpID0+IHsgfTtcbmxldCBpbnZhcmlhbnQgPSAoKSA9PiB7IH07XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgd2FybmluZyA9IChjaGVjaywgbWVzc2FnZSwgZXJyb3JDb2RlKSA9PiB7XG4gICAgICAgIGlmICghY2hlY2sgJiYgdHlwZW9mIGNvbnNvbGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybihmb3JtYXRFcnJvck1lc3NhZ2UobWVzc2FnZSwgZXJyb3JDb2RlKSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGludmFyaWFudCA9IChjaGVjaywgbWVzc2FnZSwgZXJyb3JDb2RlKSA9PiB7XG4gICAgICAgIGlmICghY2hlY2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihmb3JtYXRFcnJvck1lc3NhZ2UobWVzc2FnZSwgZXJyb3JDb2RlKSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgeyBpbnZhcmlhbnQsIHdhcm5pbmcgfTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/motion-utils/dist/es/errors.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/motion-utils/dist/es/format-error-message.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/motion-utils/dist/es/format-error-message.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formatErrorMessage: () => (/* binding */ formatErrorMessage)\n/* harmony export */ });\nfunction formatErrorMessage(message, errorCode) {\n    return errorCode\n        ? `${message}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${errorCode}`\n        : message;\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbW90aW9uLXV0aWxzL2Rpc3QvZXMvZm9ybWF0LWVycm9yLW1lc3NhZ2UubWpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0EsYUFBYSxRQUFRLHlGQUF5RixVQUFVO0FBQ3hIO0FBQ0E7O0FBRThCIiwic291cmNlcyI6WyJEOlxcV3MgQ3ViZSBUZWNoIFByb2plY3RcXEZ1bGwgU3RhY2sgUHJvamVjdFxcSVNob3BcXGZyb250ZW5kXFxub2RlX21vZHVsZXNcXG1vdGlvbi11dGlsc1xcZGlzdFxcZXNcXGZvcm1hdC1lcnJvci1tZXNzYWdlLm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBmb3JtYXRFcnJvck1lc3NhZ2UobWVzc2FnZSwgZXJyb3JDb2RlKSB7XG4gICAgcmV0dXJuIGVycm9yQ29kZVxuICAgICAgICA/IGAke21lc3NhZ2V9LiBGb3IgbW9yZSBpbmZvcm1hdGlvbiBhbmQgc3RlcHMgZm9yIHNvbHZpbmcsIHZpc2l0IGh0dHBzOi8vbW90aW9uLmRldi90cm91Ymxlc2hvb3RpbmcvJHtlcnJvckNvZGV9YFxuICAgICAgICA6IG1lc3NhZ2U7XG59XG5cbmV4cG9ydCB7IGZvcm1hdEVycm9yTWVzc2FnZSB9O1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/motion-utils/dist/es/format-error-message.mjs\n");

/***/ })

};
;