"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/google.api";
exports.ids = ["pages/api/google.api"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./models/google.js":
/*!**************************!*\
  !*** ./models/google.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GoogleUser\": () => (/* binding */ GoogleUser)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GoogleSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    email: {\n        type: String,\n        unique: true,\n        required: true\n    },\n    name: {\n        type: String,\n        required: true\n    },\n    picture: {\n        type: String\n    },\n    email_verified: {\n        type: Boolean,\n        default: false\n    }\n}, {\n    timestamps: true\n} // Adds createdAt and updatedAt fields\n);\nconst GoogleUser = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.GoogleUser || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"GoogleUser\", GoogleSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvZ29vZ2xlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyRDtBQUUzRCxNQUFNSSxlQUFlLElBQUlILDRDQUFNQSxDQUM3QjtJQUNFSSxPQUFPO1FBQUVDLE1BQU1DO1FBQVFDLFFBQVEsSUFBSTtRQUFFQyxVQUFVLElBQUk7SUFBQztJQUNwREMsTUFBTTtRQUFFSixNQUFNQztRQUFRRSxVQUFVLElBQUk7SUFBQztJQUNyQ0UsU0FBUztRQUFFTCxNQUFNQztJQUFPO0lBQ3hCSyxnQkFBZ0I7UUFBRU4sTUFBTU87UUFBU0MsU0FBUyxLQUFLO0lBQUM7QUFDbEQsR0FDQTtJQUFFQyxZQUFZLElBQUk7QUFBQyxFQUFFLHNDQUFzQzs7QUFHdEQsTUFBTUMsYUFDWGIsNENBQU1BLEVBQUVhLGNBQWNkLCtDQUFLQSxDQUFDLGNBQWNFLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvZ29vZ2xlLmpzP2Q5M2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSwgbW9kZWwsIG1vZGVscyB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgR29vZ2xlU2NoZW1hID0gbmV3IFNjaGVtYShcclxuICB7XHJcbiAgICBlbWFpbDogeyB0eXBlOiBTdHJpbmcsIHVuaXF1ZTogdHJ1ZSwgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgcGljdHVyZTogeyB0eXBlOiBTdHJpbmcgfSxcclxuICAgIGVtYWlsX3ZlcmlmaWVkOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlIH0sXHJcbiAgfSxcclxuICB7IHRpbWVzdGFtcHM6IHRydWUgfSAvLyBBZGRzIGNyZWF0ZWRBdCBhbmQgdXBkYXRlZEF0IGZpZWxkc1xyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdvb2dsZVVzZXIgPVxyXG4gIG1vZGVscz8uR29vZ2xlVXNlciB8fCBtb2RlbChcIkdvb2dsZVVzZXJcIiwgR29vZ2xlU2NoZW1hKTtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwibW9kZWwiLCJtb2RlbHMiLCJHb29nbGVTY2hlbWEiLCJlbWFpbCIsInR5cGUiLCJTdHJpbmciLCJ1bmlxdWUiLCJyZXF1aXJlZCIsIm5hbWUiLCJwaWN0dXJlIiwiZW1haWxfdmVyaWZpZWQiLCJCb29sZWFuIiwiZGVmYXVsdCIsInRpbWVzdGFtcHMiLCJHb29nbGVVc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/google.js\n");

/***/ }),

/***/ "(api)/./pages/api/google.api.js":
/*!*********************************!*\
  !*** ./pages/api/google.api.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/google */ \"(api)/./models/google.js\");\n\n // Adjust the path as needed\n// Allowed admin email\nconst ADMIN_EMAIL = \"cartellord77@gmail.com\";\nasync function handler(req, res) {\n    if (req.method !== \"POST\") {\n        return res.status(405).json({\n            success: false,\n            message: \"Method Not Allowed\"\n        });\n    }\n    const { email , name , picture , email_verified  } = req.body;\n    if (email !== ADMIN_EMAIL) {\n        return res.status(403).json({\n            success: false,\n            message: \"Unauthorized\"\n        });\n    }\n    // Connect to MongoDB (if not already connected)\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.readyState) === 0) {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        });\n    }\n    // Check if admin exists\n    let user = await _models_google__WEBPACK_IMPORTED_MODULE_1__.GoogleUser.findOne({\n        email\n    });\n    if (!user) {\n        user = await _models_google__WEBPACK_IMPORTED_MODULE_1__.GoogleUser.create({\n            email,\n            name,\n            picture,\n            email_verified\n        });\n    }\n    res.status(200).json({\n        success: true,\n        user\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ29vZ2xlLmFwaS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWdDO0FBQ2lCLENBQUMsNEJBQTRCO0FBRTlFLHNCQUFzQjtBQUN0QixNQUFNRSxjQUFjO0FBRUwsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsT0FBT0QsSUFDSkUsTUFBTSxDQUFDLEtBQ1BDLElBQUksQ0FBQztZQUFFQyxTQUFTLEtBQUs7WUFBRUMsU0FBUztRQUFxQjtJQUMxRCxDQUFDO0lBRUQsTUFBTSxFQUFFQyxNQUFLLEVBQUVDLEtBQUksRUFBRUMsUUFBTyxFQUFFQyxlQUFjLEVBQUUsR0FBR1YsSUFBSVcsSUFBSTtJQUV6RCxJQUFJSixVQUFVVCxhQUFhO1FBQ3pCLE9BQU9HLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUyxLQUFLO1lBQUVDLFNBQVM7UUFBZTtJQUN4RSxDQUFDO0lBRUQsZ0RBQWdEO0lBQ2hELElBQUlWLHVFQUE4QixLQUFLLEdBQUc7UUFDeEMsTUFBTUEsdURBQWdCLENBQUNtQixRQUFRQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtZQUM5Q0MsaUJBQWlCLElBQUk7WUFDckJDLG9CQUFvQixJQUFJO1FBQzFCO0lBQ0YsQ0FBQztJQUVELHdCQUF3QjtJQUN4QixJQUFJQyxPQUFPLE1BQU12Qiw4REFBa0IsQ0FBQztRQUFFVTtJQUFNO0lBRTVDLElBQUksQ0FBQ2EsTUFBTTtRQUNUQSxPQUFPLE1BQU12Qiw2REFBaUIsQ0FBQztZQUFFVTtZQUFPQztZQUFNQztZQUFTQztRQUFlO0lBQ3hFLENBQUM7SUFFRFQsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFFQyxTQUFTLElBQUk7UUFBRWU7SUFBSztBQUM3QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2dvb2dsZS5hcGkuanM/MGYwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCB7IEdvb2dsZVVzZXIgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2dvb2dsZVwiOyAvLyBBZGp1c3QgdGhlIHBhdGggYXMgbmVlZGVkXHJcblxyXG4vLyBBbGxvd2VkIGFkbWluIGVtYWlsXHJcbmNvbnN0IEFETUlOX0VNQUlMID0gXCJjYXJ0ZWxsb3JkNzdAZ21haWwuY29tXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgIT09IFwiUE9TVFwiKSB7XHJcbiAgICByZXR1cm4gcmVzXHJcbiAgICAgIC5zdGF0dXMoNDA1KVxyXG4gICAgICAuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIk1ldGhvZCBOb3QgQWxsb3dlZFwiIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBlbWFpbCwgbmFtZSwgcGljdHVyZSwgZW1haWxfdmVyaWZpZWQgfSA9IHJlcS5ib2R5O1xyXG5cclxuICBpZiAoZW1haWwgIT09IEFETUlOX0VNQUlMKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9KTtcclxuICB9XHJcblxyXG4gIC8vIENvbm5lY3QgdG8gTW9uZ29EQiAoaWYgbm90IGFscmVhZHkgY29ubmVjdGVkKVxyXG4gIGlmIChtb25nb29zZS5jb25uZWN0aW9uLnJlYWR5U3RhdGUgPT09IDApIHtcclxuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkksIHtcclxuICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIENoZWNrIGlmIGFkbWluIGV4aXN0c1xyXG4gIGxldCB1c2VyID0gYXdhaXQgR29vZ2xlVXNlci5maW5kT25lKHsgZW1haWwgfSk7XHJcblxyXG4gIGlmICghdXNlcikge1xyXG4gICAgdXNlciA9IGF3YWl0IEdvb2dsZVVzZXIuY3JlYXRlKHsgZW1haWwsIG5hbWUsIHBpY3R1cmUsIGVtYWlsX3ZlcmlmaWVkIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCB1c2VyIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIkdvb2dsZVVzZXIiLCJBRE1JTl9FTUFJTCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJlbWFpbCIsIm5hbWUiLCJwaWN0dXJlIiwiZW1haWxfdmVyaWZpZWQiLCJib2R5IiwiY29ubmVjdGlvbiIsInJlYWR5U3RhdGUiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwidXNlciIsImZpbmRPbmUiLCJjcmVhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/google.api.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/google.api.js"));
module.exports = __webpack_exports__;

})();