/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/2.js":
/*!******************!*\
  !*** ./src/2.js ***!
  \******************/
/***/ (() => {

eval("const parentLeft = document.querySelector('#parent-left');\r\nconst parentRight = document.querySelector('#parent-right');\r\nconst child = document.querySelector('#child');\r\n\r\nconst ondragover = (event) => {\r\n   event.preventDefault();\r\n};\r\n\r\nconst ondrop = (event) => {\r\n   event.target.appendChild(child);\r\n};\r\n\r\nparentRight.ondragover = ondragover;\r\n\r\nparentLeft.ondragover = ondragover;\r\n\r\nparentRight.ondrop = ondrop;\r\n\r\nparentLeft.ondrop = ondrop;\n\n//# sourceURL=webpack://curbat_anatolie/./src/2.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/2.js"]();
/******/ 	
/******/ })()
;