/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/routes/chirps.ts":
/*!*************************************!*\
  !*** ./src/server/routes/chirps.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar chirpsstore_1 = __webpack_require__(/*! ../utils/chirpsstore */ \"./src/server/utils/chirpsstore.ts\");\nvar router = express_1.Router();\n//GET\nrouter.get(\"/\", function (req, res) {\n    var chirps = chirpsstore_1.default.GetChirps();\n    var manipulated = Object.keys(chirps).map(function (key) {\n        return __assign({ id: key }, chirps[key]);\n    });\n    manipulated.pop();\n    res.json(manipulated);\n});\n//GET\nrouter.get(\"/:id\", function (req, res) {\n    var id = Number(req.params.id);\n    var chirp = chirpsstore_1.default.GetChirp(id);\n    res.json(__assign({ id: id }, chirp));\n});\n//POST body\nrouter.post(\"/\", function (req, res) {\n    var newChirp = req.body;\n    chirpsstore_1.default.CreateChirp(newChirp);\n    res.json({ msg: \"chirpCreated\" });\n});\n//PUT body\nrouter.put(\"/:id\", function (req, res) {\n    var id = Number(req.params.id);\n    var editedChirp = req.body;\n    chirpsstore_1.default.UpdateChirp(id, editedChirp);\n    res.json({ id: id, msg: \"chirpEdited\" });\n});\n//DELETE\nrouter.delete(\"/:id\", function (req, res) {\n    var id = Number(req.params.id);\n    chirpsstore_1.default.DeleteChirp(id);\n    res.json({ id: id, msg: \"chirpBeGone\" });\n});\nexports.default = router;\n\n\n//# sourceURL=webpack:///./src/server/routes/chirps.ts?");

/***/ }),

/***/ "./src/server/routes/index.ts":
/*!************************************!*\
  !*** ./src/server/routes/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar chirps_1 = __webpack_require__(/*! ./chirps */ \"./src/server/routes/chirps.ts\");\nvar router = express_1.Router();\nrouter.use(\"/chirps\", chirps_1.default);\nexports.default = router;\n\n\n//# sourceURL=webpack:///./src/server/routes/index.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express = __webpack_require__(/*! express */ \"express\");\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./src/server/routes/index.ts\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar app = express();\napp.use(express.static('public'));\napp.use(express.json());\napp.use(\"/api\", routes_1.default);\napp.get(\"*\", function (req, res) { res.sendFile(path.join(__dirname, \"../public/index.html\")); });\nvar port = process.env.PORT || 3000;\napp.listen(port, function () { return console.log(\"Server listening on port: \" + port); });\n\n\n//# sourceURL=webpack:///./src/server/server.ts?");

/***/ }),

/***/ "./src/server/utils/chirpsstore.ts":
/*!*****************************************!*\
  !*** ./src/server/utils/chirpsstore.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar fs = __webpack_require__(/*! fs */ \"fs\");\nvar chirps = { nextid: 0 };\nif (fs.existsSync('chirps.json')) {\n    chirps = JSON.parse(fs.readFileSync('chirps.json').toString());\n}\nvar getChirps = function () {\n    return Object.assign({}, chirps); //create a copy and return it\n};\n//the route param, prolly req.params.id is a string ...\n//so students need to parse the string param into a number\n//Number(req.params.id) for example\nvar getChirp = function (id) {\n    return Object.assign({}, chirps[id]); //create a copy and return it\n};\nvar createChirp = function (chirp) {\n    var next = chirps.nextid++;\n    chirps[next] = chirp;\n    writeChirps();\n};\nvar updateChirp = function (id, chirp) {\n    chirps[id] = chirp;\n    writeChirps();\n};\nvar deleteChirp = function (id) {\n    delete chirps[id];\n    writeChirps();\n};\nvar writeChirps = function () {\n    fs.writeFileSync('chirps.json', JSON.stringify(chirps));\n};\nexports.default = {\n    CreateChirp: createChirp,\n    DeleteChirp: deleteChirp,\n    GetChirps: getChirps,\n    GetChirp: getChirp,\n    UpdateChirp: updateChirp\n};\n\n\n//# sourceURL=webpack:///./src/server/utils/chirpsstore.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });