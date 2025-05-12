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
exports.id = "pages/api/upload";
exports.ids = ["pages/api/upload"];
exports.modules = {

/***/ "@aws-sdk/client-s3":
/*!*************************************!*\
  !*** external "@aws-sdk/client-s3" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@aws-sdk/client-s3");

/***/ }),

/***/ "mime-types":
/*!*****************************!*\
  !*** external "mime-types" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("mime-types");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "multiparty":
/*!*****************************!*\
  !*** external "multiparty" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("multiparty");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./lib/mongoose.js":
/*!*************************!*\
  !*** ./lib/mongoose.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mongooseConnect\": () => (/* binding */ mongooseConnect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n// mongoose connect\n\nfunction mongooseConnect() {\n    const uri = process.env.MONGODB_URI;\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.readyState) === 1) {\n        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.asPromise();\n    } else {\n        const uri = process.env.MONGODB_URI;\n        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29vc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsbUJBQW1CO0FBQ2E7QUFFekIsU0FBU0Msa0JBQWtCO0lBQ2hDLE1BQU1DLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztJQUNuQyxJQUFJTCx1RUFBOEIsS0FBSyxHQUFHO1FBQ3hDLE9BQU9BLG9FQUE2QjtJQUN0QyxPQUFPO1FBQ0wsTUFBTUUsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxXQUFXO1FBQ25DLE9BQU9MLHVEQUFnQixDQUFDRTtJQUMxQixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9tb25nb29zZS5qcz8xNjNkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIG1vbmdvb3NlIGNvbm5lY3RcclxuaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1vbmdvb3NlQ29ubmVjdCgpIHtcclxuICBjb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcclxuICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbi5yZWFkeVN0YXRlID09PSAxKSB7XHJcbiAgICByZXR1cm4gbW9uZ29vc2UuY29ubmVjdGlvbi5hc1Byb21pc2UoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XHJcbiAgICByZXR1cm4gbW9uZ29vc2UuY29ubmVjdCh1cmkpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJtb25nb29zZUNvbm5lY3QiLCJ1cmkiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJjb25uZWN0aW9uIiwicmVhZHlTdGF0ZSIsImFzUHJvbWlzZSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/mongoose.js\n");

/***/ }),

/***/ "(api)/./pages/api/upload.js":
/*!*****************************!*\
  !*** ./pages/api/upload.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var multiparty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiparty */ \"multiparty\");\n/* harmony import */ var multiparty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(multiparty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/client-s3 */ \"@aws-sdk/client-s3\");\n/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mime_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mime-types */ \"mime-types\");\n/* harmony import */ var mime_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mime_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/mongoose */ \"(api)/./lib/mongoose.js\");\n\n\n\n// to read file\n\n\nconst bucketName = \"cartel-next-ecommerce\";\nasync function handler(req, res) {\n    await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_4__.mongooseConnect)();\n    const form = new (multiparty__WEBPACK_IMPORTED_MODULE_0___default().Form)();\n    const { fields , files  } = await new Promise((resolve, reject)=>{\n        form.parse(req, (err, fields, files)=>{\n            if (err) reject(err);\n            resolve({\n                fields,\n                files\n            });\n        });\n    });\n    const client = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__.S3Client({\n        region: \"eu-north-1\",\n        credentials: {\n            accessKeyId: process.env.S3_ACCESS_KEY,\n            secretAccessKey: process.env.S3_SECRET_ACCESS_KEY\n        }\n    });\n    const links = [];\n    // creating random name for files\n    for (const file of files.file){\n        const ext = file.originalFilename.split(\".\").pop();\n        const newFilename = Date.now() + \".\" + ext;\n        await client.send(new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_1__.PutObjectCommand({\n            Bucket: bucketName,\n            Key: newFilename,\n            Body: fs__WEBPACK_IMPORTED_MODULE_3___default().readFileSync(file.path),\n            ACL: \"public-read\",\n            ContentType: mime_types__WEBPACK_IMPORTED_MODULE_2___default().lookup(file.path)\n        }));\n        const link = `https://${bucketName}.s3.amazonaws.com/${newFilename}`;\n        links.push(link);\n    }\n    return res.json({\n        links\n    });\n}\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBsb2FkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW9DO0FBQzRCO0FBQ2xDO0FBQzlCLGVBQWU7QUFDSztBQUNpQztBQUVyRCxNQUFNTSxhQUFhO0FBRUosZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsTUFBTUosOERBQWVBO0lBRXJCLE1BQU1LLE9BQU8sSUFBSVYsd0RBQWU7SUFFaEMsTUFBTSxFQUFFWSxPQUFNLEVBQUVDLE1BQUssRUFBRSxHQUFHLE1BQU0sSUFBSUMsUUFBUSxDQUFDQyxTQUFTQyxTQUFXO1FBQy9ETixLQUFLTyxLQUFLLENBQUNULEtBQUssQ0FBQ1UsS0FBS04sUUFBUUMsUUFBVTtZQUN0QyxJQUFJSyxLQUFLRixPQUFPRTtZQUNoQkgsUUFBUTtnQkFBRUg7Z0JBQVFDO1lBQU07UUFDMUI7SUFDRjtJQUVBLE1BQU1NLFNBQVMsSUFBSWpCLHdEQUFRQSxDQUFDO1FBQzFCa0IsUUFBUTtRQUNSQyxhQUFhO1lBQ1hDLGFBQWFDLFFBQVFDLEdBQUcsQ0FBQ0MsYUFBYTtZQUN0Q0MsaUJBQWlCSCxRQUFRQyxHQUFHLENBQUNHLG9CQUFvQjtRQUNuRDtJQUNGO0lBRUEsTUFBTUMsUUFBUSxFQUFFO0lBRWhCLGlDQUFpQztJQUNqQyxLQUFLLE1BQU1DLFFBQVFoQixNQUFNZ0IsSUFBSSxDQUFFO1FBQzdCLE1BQU1DLE1BQU1ELEtBQUtFLGdCQUFnQixDQUFDQyxLQUFLLENBQUMsS0FBS0MsR0FBRztRQUNoRCxNQUFNQyxjQUFjQyxLQUFLQyxHQUFHLEtBQUssTUFBTU47UUFFdkMsTUFBTVgsT0FBT2tCLElBQUksQ0FDZixJQUFJcEMsZ0VBQWdCQSxDQUFDO1lBQ25CcUMsUUFBUWhDO1lBQ1JpQyxLQUFLTDtZQUNMTSxNQUFNcEMsc0RBQWUsQ0FBQ3lCLEtBQUthLElBQUk7WUFDL0JDLEtBQUs7WUFDTEMsYUFBYXpDLHdEQUFXLENBQUMwQixLQUFLYSxJQUFJO1FBQ3BDO1FBRUYsTUFBTUksT0FBTyxDQUFDLFFBQVEsRUFBRXhDLFdBQVcsa0JBQWtCLEVBQUU0QixZQUFZLENBQUM7UUFDcEVOLE1BQU1tQixJQUFJLENBQUNEO0lBQ2I7SUFFQSxPQUFPckMsSUFBSXVDLElBQUksQ0FBQztRQUFFcEI7SUFBTTtBQUMxQixDQUFDO0FBRU0sTUFBTXFCLFNBQVM7SUFDcEJDLEtBQUs7UUFBRUMsWUFBWSxLQUFLO0lBQUM7QUFDM0IsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS91cGxvYWQuanM/NTU3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXVsdGlwYXJ0eSBmcm9tIFwibXVsdGlwYXJ0eVwiO1xyXG5pbXBvcnQgeyBQdXRPYmplY3RDb21tYW5kLCBTM0NsaWVudCB9IGZyb20gXCJAYXdzLXNkay9jbGllbnQtczNcIjtcclxuaW1wb3J0IG1pbWUgZnJvbSBcIm1pbWUtdHlwZXNcIjtcclxuLy8gdG8gcmVhZCBmaWxlXHJcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcclxuaW1wb3J0IHsgbW9uZ29vc2VDb25uZWN0IH0gZnJvbSBcIi4uLy4uL2xpYi9tb25nb29zZVwiO1xyXG5cclxuY29uc3QgYnVja2V0TmFtZSA9IFwiY2FydGVsLW5leHQtZWNvbW1lcmNlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgYXdhaXQgbW9uZ29vc2VDb25uZWN0KCk7XHJcblxyXG4gIGNvbnN0IGZvcm0gPSBuZXcgbXVsdGlwYXJ0eS5Gb3JtKCk7XHJcblxyXG4gIGNvbnN0IHsgZmllbGRzLCBmaWxlcyB9ID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgZm9ybS5wYXJzZShyZXEsIChlcnIsIGZpZWxkcywgZmlsZXMpID0+IHtcclxuICAgICAgaWYgKGVycikgcmVqZWN0KGVycik7XHJcbiAgICAgIHJlc29sdmUoeyBmaWVsZHMsIGZpbGVzIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGNsaWVudCA9IG5ldyBTM0NsaWVudCh7XHJcbiAgICByZWdpb246IFwiZXUtbm9ydGgtMVwiLFxyXG4gICAgY3JlZGVudGlhbHM6IHtcclxuICAgICAgYWNjZXNzS2V5SWQ6IHByb2Nlc3MuZW52LlMzX0FDQ0VTU19LRVksXHJcbiAgICAgIHNlY3JldEFjY2Vzc0tleTogcHJvY2Vzcy5lbnYuUzNfU0VDUkVUX0FDQ0VTU19LRVksXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBsaW5rcyA9IFtdO1xyXG5cclxuICAvLyBjcmVhdGluZyByYW5kb20gbmFtZSBmb3IgZmlsZXNcclxuICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMuZmlsZSkge1xyXG4gICAgY29uc3QgZXh0ID0gZmlsZS5vcmlnaW5hbEZpbGVuYW1lLnNwbGl0KFwiLlwiKS5wb3AoKTtcclxuICAgIGNvbnN0IG5ld0ZpbGVuYW1lID0gRGF0ZS5ub3coKSArIFwiLlwiICsgZXh0O1xyXG5cclxuICAgIGF3YWl0IGNsaWVudC5zZW5kKFxyXG4gICAgICBuZXcgUHV0T2JqZWN0Q29tbWFuZCh7XHJcbiAgICAgICAgQnVja2V0OiBidWNrZXROYW1lLFxyXG4gICAgICAgIEtleTogbmV3RmlsZW5hbWUsXHJcbiAgICAgICAgQm9keTogZnMucmVhZEZpbGVTeW5jKGZpbGUucGF0aCksXHJcbiAgICAgICAgQUNMOiBcInB1YmxpYy1yZWFkXCIsXHJcbiAgICAgICAgQ29udGVudFR5cGU6IG1pbWUubG9va3VwKGZpbGUucGF0aCksXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gICAgY29uc3QgbGluayA9IGBodHRwczovLyR7YnVja2V0TmFtZX0uczMuYW1hem9uYXdzLmNvbS8ke25ld0ZpbGVuYW1lfWA7XHJcbiAgICBsaW5rcy5wdXNoKGxpbmspO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlcy5qc29uKHsgbGlua3MgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgYXBpOiB7IGJvZHlQYXJzZXI6IGZhbHNlIH0sXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJtdWx0aXBhcnR5IiwiUHV0T2JqZWN0Q29tbWFuZCIsIlMzQ2xpZW50IiwibWltZSIsImZzIiwibW9uZ29vc2VDb25uZWN0IiwiYnVja2V0TmFtZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJmb3JtIiwiRm9ybSIsImZpZWxkcyIsImZpbGVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwYXJzZSIsImVyciIsImNsaWVudCIsInJlZ2lvbiIsImNyZWRlbnRpYWxzIiwiYWNjZXNzS2V5SWQiLCJwcm9jZXNzIiwiZW52IiwiUzNfQUNDRVNTX0tFWSIsInNlY3JldEFjY2Vzc0tleSIsIlMzX1NFQ1JFVF9BQ0NFU1NfS0VZIiwibGlua3MiLCJmaWxlIiwiZXh0Iiwib3JpZ2luYWxGaWxlbmFtZSIsInNwbGl0IiwicG9wIiwibmV3RmlsZW5hbWUiLCJEYXRlIiwibm93Iiwic2VuZCIsIkJ1Y2tldCIsIktleSIsIkJvZHkiLCJyZWFkRmlsZVN5bmMiLCJwYXRoIiwiQUNMIiwiQ29udGVudFR5cGUiLCJsb29rdXAiLCJsaW5rIiwicHVzaCIsImpzb24iLCJjb25maWciLCJhcGkiLCJib2R5UGFyc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/upload.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/upload.js"));
module.exports = __webpack_exports__;

})();