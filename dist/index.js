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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Command/Receiver.js":
/*!*********************************!*\
  !*** ./src/Command/Receiver.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Receiver = function () {\n  var _items = [];\n  return {\n    add: function add(item) {\n      _items.push(item);\n    },\n    removeAt: function removeAt(index) {\n      _items = _items.slice(0, index).concat(_items.slice(index + 1));\n    },\n    getAll: function getAll() {\n      console.log(\"All items: \", _items); // return _items;\n    }\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Receiver);\n\n//# sourceURL=webpack:///./src/Command/Receiver.js?");

/***/ }),

/***/ "./src/Command/index.js":
/*!******************************!*\
  !*** ./src/Command/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar CommandManager = function () {\n  return {\n    execute: function execute(receiver, _ref) {\n      var action = _ref.action,\n          payload = _ref.payload;\n      var params = [];\n\n      if (!Array.isArray(payload)) {\n        params = params.concat(payload);\n      }\n\n      return receiver[action] && receiver[action].apply(null, params);\n    }\n  };\n}(); // var action = {action: ACTION_NAME, payload: ACTION_PARAMS };\n// CommandManager.execute( State, action );\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommandManager);\n\n//# sourceURL=webpack:///./src/Command/index.js?");

/***/ }),

/***/ "./src/Decorator/index.js":
/*!********************************!*\
  !*** ./src/Decorator/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar _dec, _class;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction readonly(target, key, descriptor) {\n  // console.log( \"target: \", target ); // the class or function \n  // console.log( \"key: \", key ); // the name of the decorated method\n  // // An Object that gives you access to the the decorated method itself through its value property. \n  // // This value is the method that gets decorated and executed when we call our decorated method. \n  // console.log( \"descriptor: \", descriptor );\n  descriptor.writable = false;\n  return descriptor;\n}\n\nfunction uppercase(target, key, descriptor) {\n  var fn = descriptor.value;\n\n  descriptor.get = function () {\n    var result = fn.call(target);\n    return result && result.toUpperCase();\n  };\n}\n\nvar withStyles = function withStyles(value) {\n  return function (target) {\n    console.log(\"target: \", target); // in the case of decorating a Class, target is the constructor of the Class you’re decorating\n\n    target.prototype.styles = value;\n  };\n};\n\nvar User = (_dec = withStyles({\n  style1: \"style1\"\n}), _dec(_class =\n/*#__PURE__*/\nfunction () {\n  function User() {\n    _classCallCheck(this, User);\n\n    this.username = \"\";\n  }\n\n  _createClass(User, [{\n    key: \"setUsername\",\n    value: function setUsername(value) {\n      this.username = value;\n    } //@readonly\n    // @uppercase\n\n  }, {\n    key: \"getUsername\",\n    value: function getUsername() {\n      // console.log( ' User: username: ', this.username );\n      return this.username;\n    }\n  }]);\n\n  return User;\n}()) || _class);\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\n\n//# sourceURL=webpack:///./src/Decorator/index.js?");

/***/ }),

/***/ "./src/Module/BaseModule.js":
/*!**********************************!*\
  !*** ./src/Module/BaseModule.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar BaseModule = function () {\n  var _privateAge = undefined;\n  return {\n    initAge: function initAge(value) {\n      console.log('---Base: original initAge()');\n      _privateAge = value;\n    },\n    addAge: function addAge(value) {\n      this.initAge(0);\n      _privateAge += value;\n      return _privateAge;\n    },\n    getAge: function getAge() {\n      return _privateAge;\n    }\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BaseModule);\n\n//# sourceURL=webpack:///./src/Module/BaseModule.js?");

/***/ }),

/***/ "./src/Module/RevealingModule.js":
/*!***************************************!*\
  !*** ./src/Module/RevealingModule.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar RevealingModule = function () {\n  var _privateAge = undefined;\n\n  var initAge = function initAge(value) {\n    console.log('---Revealing: original initAge()');\n    _privateAge = value;\n  };\n\n  var _setName = function _setName(value) {\n    _privateName = value;\n  };\n\n  var _getName = function _getName() {\n    return _privateName;\n  };\n\n  var _addAge = function _addAge(value) {\n    // The private function __addAge refers to the public exposed function initAge\n    // _addAge will always call the private (initial) implementation of initAge even if we override it outside \n    // This may lead to unexpected results\n    initAge(0);\n    _privateAge += value;\n    return _privateAge;\n  };\n\n  return {\n    initAge: initAge,\n    addAge: _addAge\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RevealingModule);\n\n//# sourceURL=webpack:///./src/Module/RevealingModule.js?");

/***/ }),

/***/ "./src/Module/index.js":
/*!*****************************!*\
  !*** ./src/Module/index.js ***!
  \*****************************/
/*! exports provided: BaseModule, RevealingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BaseModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModule */ \"./src/Module/BaseModule.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"BaseModule\", function() { return _BaseModule__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _RevealingModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RevealingModule */ \"./src/Module/RevealingModule.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"RevealingModule\", function() { return _RevealingModule__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/Module/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Module */ \"./src/Module/index.js\");\n/* harmony import */ var _Command__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Command */ \"./src/Command/index.js\");\n/* harmony import */ var _Command_Receiver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Command/Receiver */ \"./src/Command/Receiver.js\");\n/* harmony import */ var _Decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Decorator */ \"./src/Decorator/index.js\");\n\n\n\n\nconsole.log('---Base: Age: ', _Module__WEBPACK_IMPORTED_MODULE_0__[\"BaseModule\"].addAge(20));\n\n_Module__WEBPACK_IMPORTED_MODULE_0__[\"BaseModule\"].initAge = function () {\n  console.log('---Base: custom initAge()');\n};\n\nconsole.log('---Base: Age: ', _Module__WEBPACK_IMPORTED_MODULE_0__[\"BaseModule\"].addAge(20));\n_Module__WEBPACK_IMPORTED_MODULE_0__[\"BaseModule\"].initAge();\nconsole.log(\"  \");\nconsole.log(\"---Revealing: Age: \", _Module__WEBPACK_IMPORTED_MODULE_0__[\"RevealingModule\"].addAge(20));\n\n_Module__WEBPACK_IMPORTED_MODULE_0__[\"RevealingModule\"].initAge = function () {\n  console.log('---Revealing: custom initAge()');\n};\n\nconsole.log(\"---Revealing: Age: \", _Module__WEBPACK_IMPORTED_MODULE_0__[\"RevealingModule\"].addAge(20));\n_Module__WEBPACK_IMPORTED_MODULE_0__[\"RevealingModule\"].initAge();\nconsole.log(\"  \");\nvar item1 = {\n  name: 'item1'\n};\n_Command__WEBPACK_IMPORTED_MODULE_1__[\"default\"].execute(_Command_Receiver__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  action: \"add\",\n  payload: item1\n});\n_Command__WEBPACK_IMPORTED_MODULE_1__[\"default\"].execute(_Command_Receiver__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  action: \"getAll\"\n});\n_Command__WEBPACK_IMPORTED_MODULE_1__[\"default\"].execute(_Command_Receiver__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  action: \"removeAt\",\n  payload: 0\n});\n_Command__WEBPACK_IMPORTED_MODULE_1__[\"default\"].execute(_Command_Receiver__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  action: \"getAll\"\n});\nvar user = new _Decorator__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nuser.setUsername(\"nikoleta\");\nuser.getUsername(); //user.getUsername = () => { console.log('Try to override getUsername')};\n//user.getUsername();\n\nconsole.log(\"User: styles added with decorator: \", user.styles);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });