/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var bd;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forms/contact.ts":
/*!******************************!*\
  !*** ./src/forms/contact.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactForm\": () => (/* binding */ contactForm)\n/* harmony export */ });\n/* harmony import */ var _helpers_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/server */ \"./src/helpers/server.ts\");\n/* harmony import */ var _models_DataverseClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/DataverseClient */ \"./src/models/DataverseClient.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\n\r\nvar contactForm = /** @class */ (function () {\r\n    function contactForm() {\r\n    }\r\n    var _a;\r\n    _a = contactForm;\r\n    contactForm.onload = function (context) { return __awaiter(void 0, void 0, void 0, function () {\r\n        var formContext, service, formType, contacts;\r\n        return __generator(_a, function (_b) {\r\n            switch (_b.label) {\r\n                case 0:\r\n                    formContext = context.getFormContext();\r\n                    debugger;\r\n                    service = new _models_DataverseClient__WEBPACK_IMPORTED_MODULE_1__.DataverseClient(formContext);\r\n                    service.hideMultiple([\"jobtitle\", \"sdasdsadsadasdsa\"]);\r\n                    formType = formContext.ui.getFormType();\r\n                    if (!(formType === 2 /* Update */)) return [3 /*break*/, 2];\r\n                    return [4 /*yield*/, _helpers_server__WEBPACK_IMPORTED_MODULE_0__.ApiHelper.retrieveMultiple(\"contact\", \"firstname eq 'Ahmad'\", \"lastname\")];\r\n                case 1:\r\n                    contacts = _b.sent();\r\n                    contacts.forEach(function (contact) {\r\n                        alert(contact.lastname);\r\n                    });\r\n                    _b.label = 2;\r\n                case 2: return [2 /*return*/];\r\n            }\r\n        });\r\n    }); };\r\n    return contactForm;\r\n}());\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZm9ybXMvY29udGFjdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDOEM7QUFDYztBQUU1RDtJQUFBO0lBa0JBLENBQUM7OztJQWpCUSxrQkFBTSxHQUFHLFVBQU8sT0FBZ0M7Ozs7O29CQUNqRCxXQUFXLEdBQUcsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUMzQyxRQUFRLENBQUM7b0JBQ0wsT0FBTyxHQUFvQixJQUFJLG9FQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ2hFLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxVQUFVLEVBQUUsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO29CQUNuRCxRQUFRLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQzt5QkFDeEMsU0FBUSxtQkFBNEIsR0FBcEMsd0JBQW9DO29CQUN2QixxQkFBTSx1RUFBMEIsQ0FDN0MsU0FBUyxFQUNULHNCQUFzQixFQUN0QixVQUFVLENBQ1g7O29CQUpHLFFBQVEsR0FBRyxTQUlkO29CQUNELFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFPO3dCQUN2QixLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUMxQixDQUFDLENBQUMsQ0FBQzs7Ozs7U0FFTDtJQUNKLGtCQUFDO0NBQUE7QUFsQnVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmQudGVjLy4vc3JjL2Zvcm1zL2NvbnRhY3QudHM/ZTIyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdHRyaWJ1dGVzSGVscGVyIH0gZnJvbSBcIi4uL2hlbHBlcnMvYXR0cmlidXRlc1wiO1xyXG5pbXBvcnQgeyBBcGlIZWxwZXIgfSBmcm9tIFwiLi4vaGVscGVycy9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgRGF0YXZlcnNlQ2xpZW50IH0gZnJvbSBcIi4uL21vZGVscy9EYXRhdmVyc2VDbGllbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBjb250YWN0Rm9ybSB7XHJcbiAgc3RhdGljIG9ubG9hZCA9IGFzeW5jIChjb250ZXh0OiBYcm0uRXZlbnRzLkV2ZW50Q29udGV4dCkgPT4ge1xyXG4gICAgbGV0IGZvcm1Db250ZXh0ID0gY29udGV4dC5nZXRGb3JtQ29udGV4dCgpO1xyXG4gICAgZGVidWdnZXI7XHJcbiAgICBsZXQgc2VydmljZTogRGF0YXZlcnNlQ2xpZW50ID0gbmV3IERhdGF2ZXJzZUNsaWVudChmb3JtQ29udGV4dCk7XHJcbiAgICBzZXJ2aWNlLmhpZGVNdWx0aXBsZShbXCJqb2J0aXRsZVwiLCBcInNkYXNkc2Fkc2FkYXNkc2FcIl0pO1xyXG4gICAgbGV0IGZvcm1UeXBlID0gZm9ybUNvbnRleHQudWkuZ2V0Rm9ybVR5cGUoKTtcclxuICAgIGlmIChmb3JtVHlwZSA9PT0gWHJtRW51bS5Gb3JtVHlwZS5VcGRhdGUpIHtcclxuICAgICAgbGV0IGNvbnRhY3RzID0gYXdhaXQgQXBpSGVscGVyLnJldHJpZXZlTXVsdGlwbGUoXHJcbiAgICAgICAgXCJjb250YWN0XCIsXHJcbiAgICAgICAgXCJmaXJzdG5hbWUgZXEgJ0FobWFkJ1wiLFxyXG4gICAgICAgIFwibGFzdG5hbWVcIlxyXG4gICAgICApO1xyXG4gICAgICBjb250YWN0cy5mb3JFYWNoKChjb250YWN0KSA9PiB7XHJcbiAgICAgICAgYWxlcnQoY29udGFjdC5sYXN0bmFtZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/forms/contact.ts\n");

/***/ }),

/***/ "./src/helpers/server.ts":
/*!*******************************!*\
  !*** ./src/helpers/server.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ApiHelper\": () => (/* binding */ ApiHelper)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar ApiHelper = /** @class */ (function () {\r\n    function ApiHelper() {\r\n    }\r\n    var _a;\r\n    _a = ApiHelper;\r\n    ApiHelper.retrieve = function (entity, id, columns) { return __awaiter(void 0, void 0, void 0, function () {\r\n        return __generator(_a, function (_b) {\r\n            switch (_b.label) {\r\n                case 0: return [4 /*yield*/, Xrm.WebApi.retrieveRecord(entity, id, \"?$select=\".concat(columns))];\r\n                case 1: return [2 /*return*/, _b.sent()];\r\n            }\r\n        });\r\n    }); };\r\n    ApiHelper.retrieveMultiple = function (entity, filter, columns) { return __awaiter(void 0, void 0, void 0, function () {\r\n        return __generator(_a, function (_b) {\r\n            switch (_b.label) {\r\n                case 0: return [4 /*yield*/, Xrm.WebApi.retrieveMultipleRecords(entity, \"?$select=\".concat(columns, \"&$filter=\").concat(filter))];\r\n                case 1: return [2 /*return*/, _b.sent()];\r\n            }\r\n        });\r\n    }); };\r\n    return ApiHelper;\r\n}());\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGVscGVycy9zZXJ2ZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUFrQkEsQ0FBQzs7O0lBakJRLGtCQUFRLEdBQUcsVUFDaEIsTUFBYyxFQUNkLEVBQVUsRUFDVixPQUFlOzs7d0JBRVIscUJBQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxtQkFBWSxPQUFPLENBQUUsQ0FBQzt3QkFBekUsc0JBQU8sU0FBa0UsRUFBQzs7O1NBQzFFO0lBQ0ssMEJBQWdCLEdBQUcsVUFDeEIsTUFBYyxFQUNkLE1BQWMsRUFDZCxPQUFlOzs7d0JBRVIscUJBQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FDN0MsTUFBTSxFQUNOLG1CQUFZLE9BQU8sc0JBQVksTUFBTSxDQUFFLENBQ3hDO3dCQUhELHNCQUFPLFNBR04sRUFBQzs7O1NBQ0Y7SUFDSixnQkFBQztDQUFBO0FBbEJxQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JkLnRlYy8uL3NyYy9oZWxwZXJzL3NlcnZlci50cz9kNmJmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBcGlIZWxwZXIge1xyXG4gIHN0YXRpYyByZXRyaWV2ZSA9IGFzeW5jIChcclxuICAgIGVudGl0eTogc3RyaW5nLFxyXG4gICAgaWQ6IHN0cmluZyxcclxuICAgIGNvbHVtbnM6IHN0cmluZ1xyXG4gICk6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgICByZXR1cm4gYXdhaXQgWHJtLldlYkFwaS5yZXRyaWV2ZVJlY29yZChlbnRpdHksIGlkLCBgPyRzZWxlY3Q9JHtjb2x1bW5zfWApO1xyXG4gIH07XHJcbiAgc3RhdGljIHJldHJpZXZlTXVsdGlwbGUgPSBhc3luYyAoXHJcbiAgICBlbnRpdHk6IHN0cmluZyxcclxuICAgIGZpbHRlcjogc3RyaW5nLFxyXG4gICAgY29sdW1uczogc3RyaW5nXHJcbiAgKTogUHJvbWlzZTxhbnk+ID0+IHtcclxuICAgIHJldHVybiBhd2FpdCBYcm0uV2ViQXBpLnJldHJpZXZlTXVsdGlwbGVSZWNvcmRzKFxyXG4gICAgICBlbnRpdHksXHJcbiAgICAgIGA/JHNlbGVjdD0ke2NvbHVtbnN9JiRmaWx0ZXI9JHtmaWx0ZXJ9YFxyXG4gICAgKTtcclxuICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/helpers/server.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactForm\": () => (/* reexport safe */ _forms_contact__WEBPACK_IMPORTED_MODULE_0__.contactForm)\n/* harmony export */ });\n/* harmony import */ var _forms_contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms/contact */ \"./src/forms/contact.ts\");\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iZC50ZWMvLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tIFwiLi9mb3Jtcy9jb250YWN0XCI7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "./src/models/DataverseClient.ts":
/*!***************************************!*\
  !*** ./src/models/DataverseClient.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DataverseClient\": () => (/* binding */ DataverseClient)\n/* harmony export */ });\nvar DataverseClient = /** @class */ (function () {\r\n    function DataverseClient(formContext) {\r\n        var _this = this;\r\n        this.hide = function (name) { return _this.setDisplay(name, false); };\r\n        this.show = function (name) { return _this.setDisplay(name, true); };\r\n        this.hideMultiple = function (controls) {\r\n            return _this.setDisplayMultiple(controls, false);\r\n        };\r\n        this.showMultiple = function (controls) {\r\n            return _this.setDisplayMultiple(controls, true);\r\n        };\r\n        this.setDisplayMultiple = function (names, is) {\r\n            return names.forEach(function (name) { return _this.setDisplay(name, is); });\r\n        };\r\n        this.setDisplay = function (name, is) {\r\n            var control = _this.formContext.getControl(name);\r\n            //@ts-ignore\r\n            if (control)\r\n                control.setVisible(is);\r\n        };\r\n        this.formContext = formContext;\r\n    }\r\n    return DataverseClient;\r\n}());\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kZWxzL0RhdGF2ZXJzZUNsaWVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7SUFFRSx5QkFBWSxXQUE0QjtRQUF4QyxpQkFFQztRQUNELFNBQUksR0FBRyxVQUFDLElBQVksSUFBVyxZQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQztRQUM1RCxTQUFJLEdBQUcsVUFBQyxJQUFZLElBQVcsWUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQTNCLENBQTJCLENBQUM7UUFDM0QsaUJBQVksR0FBRyxVQUFDLFFBQWtCO1lBQ2hDLFlBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDO1FBQXhDLENBQXdDLENBQUM7UUFDM0MsaUJBQVksR0FBRyxVQUFDLFFBQWtCO1lBQ2hDLFlBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDO1FBQXZDLENBQXVDLENBQUM7UUFDbEMsdUJBQWtCLEdBQUcsVUFBQyxLQUFlLEVBQUUsRUFBVztZQUN4RCxZQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxJQUFLLFlBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUF6QixDQUF5QixDQUFDO1FBQWxELENBQWtELENBQUM7UUFDN0MsZUFBVSxHQUFHLFVBQUMsSUFBWSxFQUFFLEVBQVc7WUFDN0MsSUFBSSxPQUFPLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEQsWUFBWTtZQUNaLElBQUksT0FBTztnQkFBRSxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQztRQWRBLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ2pDLENBQUM7SUFjSCxzQkFBQztBQUFELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iZC50ZWMvLi9zcmMvbW9kZWxzL0RhdGF2ZXJzZUNsaWVudC50cz85MzJlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBEYXRhdmVyc2VDbGllbnQge1xyXG4gIHByaXZhdGUgZm9ybUNvbnRleHQ6IFhybS5Gb3JtQ29udGV4dDtcclxuICBjb25zdHJ1Y3Rvcihmb3JtQ29udGV4dDogWHJtLkZvcm1Db250ZXh0KSB7XHJcbiAgICB0aGlzLmZvcm1Db250ZXh0ID0gZm9ybUNvbnRleHQ7XHJcbiAgfVxyXG4gIGhpZGUgPSAobmFtZTogc3RyaW5nKTogdm9pZCA9PiB0aGlzLnNldERpc3BsYXkobmFtZSwgZmFsc2UpO1xyXG4gIHNob3cgPSAobmFtZTogc3RyaW5nKTogdm9pZCA9PiB0aGlzLnNldERpc3BsYXkobmFtZSwgdHJ1ZSk7XHJcbiAgaGlkZU11bHRpcGxlID0gKGNvbnRyb2xzOiBzdHJpbmdbXSkgPT5cclxuICAgIHRoaXMuc2V0RGlzcGxheU11bHRpcGxlKGNvbnRyb2xzLCBmYWxzZSk7XHJcbiAgc2hvd011bHRpcGxlID0gKGNvbnRyb2xzOiBzdHJpbmdbXSkgPT5cclxuICAgIHRoaXMuc2V0RGlzcGxheU11bHRpcGxlKGNvbnRyb2xzLCB0cnVlKTtcclxuICBwcml2YXRlIHNldERpc3BsYXlNdWx0aXBsZSA9IChuYW1lczogc3RyaW5nW10sIGlzOiBib29sZWFuKSA9PlxyXG4gICAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4gdGhpcy5zZXREaXNwbGF5KG5hbWUsIGlzKSk7XHJcbiAgcHJpdmF0ZSBzZXREaXNwbGF5ID0gKG5hbWU6IHN0cmluZywgaXM6IGJvb2xlYW4pID0+IHtcclxuICAgIGxldCBjb250cm9sID0gdGhpcy5mb3JtQ29udGV4dC5nZXRDb250cm9sKG5hbWUpO1xyXG4gICAgLy9AdHMtaWdub3JlXHJcbiAgICBpZiAoY29udHJvbCkgY29udHJvbC5zZXRWaXNpYmxlKGlzKTtcclxuICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/models/DataverseClient.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	(bd = typeof bd === "undefined" ? {} : bd).tec = __webpack_exports__;
/******/ 	
/******/ })()
;