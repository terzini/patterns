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

/***/ "./src/Chain/index.js":
/*!****************************!*\
  !*** ./src/Chain/index.js ***!
  \****************************/
/*! exports provided: middlewareChain, promiseChain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _middlewareChain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./middlewareChain */ \"./src/Chain/middlewareChain.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"middlewareChain\", function() { return _middlewareChain__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _promiseChain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promiseChain */ \"./src/Chain/promiseChain.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"promiseChain\", function() { return _promiseChain__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/Chain/index.js?");

/***/ }),

/***/ "./src/Chain/middlewareChain.js":
/*!**************************************!*\
  !*** ./src/Chain/middlewareChain.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar error = function error(message) {\n  return console.log('ERROR:', message);\n};\n\nvar buildMiddleware = function buildMiddleware() {\n  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {\n    middlewares[_key] = arguments[_key];\n  }\n\n  return function (env) {\n    return function (context) {\n      var final = function final(context) {\n        return context;\n      };\n\n      var chain = middlewares.reduceRight(function (next, middleware) {\n        return middleware(error, env, next);\n      }, final);\n      return chain(context);\n    };\n  };\n}; // Middleware for authentication\n\n\nvar authenticate = function authenticate(err, env, next) {\n  return function (context) {\n    console.log('--- authenticate ---');\n\n    if (env.NODE_ENV === \"production\") {\n      return err(\"Not authenticated\");\n    }\n\n    return next(context);\n  };\n}; // Middleware for checking if the request is JSON \n\n\nvar bodyParser = function bodyParser(err, env, next) {\n  return function (context) {\n    console.log('--- body parser ---');\n\n    if (!context.headers || !context.headers['Content-Type'] || context.headers['Content-Type'] !== 'application/json') {\n      return err(\"The request content type is not a JSON\");\n    }\n\n    context.body = context.body.length && JSON.parse(context.body) || {};\n    return next(context);\n  };\n}; // Middleware for setting the query params in the request body\n\n\nvar setParams = function setParams(err, env, next) {\n  return function (context) {\n    console.log('--- setParams ---');\n    var start = context.url && context.url.indexOf('?') > -1 ? context.url.indexOf('?') + 1 : -1;\n\n    if (start > -1) {\n      var params = context.url.substring(start).split('&');\n      params.forEach(function (p) {\n        var values = p.split('=');\n        context.body[values[0]] = values.length > 0 ? values[1] : undefined;\n      });\n    }\n\n    return next(context);\n  };\n};\n\nvar middlewareChain = buildMiddleware(authenticate, bodyParser, setParams);\n/* harmony default export */ __webpack_exports__[\"default\"] = (middlewareChain);\n\n//# sourceURL=webpack:///./src/Chain/middlewareChain.js?");

/***/ }),

/***/ "./src/Chain/promiseChain.js":
/*!***********************************!*\
  !*** ./src/Chain/promiseChain.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Promise for authentication\nvar authenticate = function authenticate(env) {\n  return function (context) {\n    return new Promise(function (resolve, reject) {\n      if (env.NODE_ENV === \"production\") {\n        return reject(\"Not authenticated\");\n      } else {\n        return resolve(context);\n      }\n    });\n  };\n}; // Promise for checking if the request is JSON \n\n\nvar bodyParser = function bodyParser(env) {\n  return function (context) {\n    return new Promise(function (resolve, reject) {\n      if (!context.headers || !context.headers['Content-Type'] || context.headers['Content-Type'] !== 'application/json') {\n        return reject(\"The request content type is not a JSON\");\n      }\n\n      context.body = context.body.length && JSON.parse(context.body) || {};\n      return resolve(context);\n    });\n  };\n}; // Promise for setting the query params in the request body\n\n\nvar setParams = function setParams(env) {\n  return function (context) {\n    return new Promise(function () {\n      var start = context.url && context.url.indexOf('?') > -1 ? context.url.indexOf('?') + 1 : -1;\n\n      if (start > -1) {\n        var params = context.url.substring(start).split('&');\n        params.forEach(function (p) {\n          var values = p.split('=');\n          context.body[values[0]] = values.length > 0 ? values[1] : undefined;\n        });\n      }\n\n      return resolve(context);\n    });\n  };\n};\n\nvar promiseChain = function promiseChain(env) {\n  return function (context) {\n    return Promise.resolve(context).then(authenticate).then(bodyParser).then(setParams).catch(function (err) {\n      return console.log('ERROR: ', err);\n    });\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (promiseChain);\n\n//# sourceURL=webpack:///./src/Chain/promiseChain.js?");

/***/ }),

/***/ "./src/Command/Receiver.js":
/*!*********************************!*\
  !*** ./src/Command/Receiver.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Receiver = function () {\n  var _items = [];\n  return {\n    add: function add(item) {\n      _items.push(item);\n    },\n    removeAt: function removeAt(index) {\n      _items = _items.slice(0, index).concat(_items.slice(index + 1));\n    },\n    getAll: function getAll() {\n      console.log(\"Execute getAll: \", _items);\n      return _items;\n    }\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Receiver);\n\n//# sourceURL=webpack:///./src/Command/Receiver.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\nvar _dec, _class, _class2;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }\n\nfunction readonly(target, key, descriptor) {\n  // console.log( \"target: \", target ); // the class or function \n  // console.log( \"key: \", key ); // the name of the decorated method\n  // // An Object that gives you access to the the decorated method itself through its value property. \n  // // This value is the method that gets decorated and executed when we call our decorated method. \n  // console.log( \"descriptor: \", descriptor );\n  descriptor.writable = false;\n  return descriptor;\n} // HOW TO DO IT WITH ARROW FUNCTION ?\n// descriptor.value = () => {\n//     const result = fn.call(target); \n//     return result && result.toUpperCase();\n//   };\n\n\nfunction uppercase(target, key, descriptor) {\n  var fn = descriptor.value;\n\n  descriptor.value = function () {\n    var result = fn.call(this);\n    return result && result.toUpperCase();\n  };\n}\n\nvar withStyles = function withStyles(value) {\n  return function (target) {\n    // in the case of decorating a Class, target is the constructor of the Class you’re decorating\n    // console.log( \"target: \", target ); \n    target.prototype.styles = value;\n  };\n};\n\nvar User = (_dec = withStyles({\n  styles: \"style_1\"\n}), _dec(_class = (_class2 =\n/*#__PURE__*/\nfunction () {\n  function User() {\n    _classCallCheck(this, User);\n\n    this.username = \"\";\n  }\n\n  _createClass(User, [{\n    key: \"setUsername\",\n    value: function setUsername(value) {\n      this.username = value;\n    }\n  }, {\n    key: \"getUsername\",\n    value: function getUsername() {\n      return this.username;\n    }\n  }]);\n\n  return User;\n}(), (_applyDecoratedDescriptor(_class2.prototype, \"getUsername\", [readonly, uppercase], Object.getOwnPropertyDescriptor(_class2.prototype, \"getUsername\"), _class2.prototype)), _class2)) || _class);\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\n\n//# sourceURL=webpack:///./src/Decorator/index.js?");

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

/***/ "./src/Observer/Observable.js":
/*!************************************!*\
  !*** ./src/Observer/Observable.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Observable = function () {\n  var topics = {};\n  var subUid = -1;\n\n  var publish = function publish(topic, args) {\n    if (!topics[topic]) {\n      return false;\n    }\n\n    var subscribers = topics[topic];\n    subscribers.forEach(function (s) {\n      return s.callback.call(null, args);\n    });\n  };\n\n  var subscribe = function subscribe(topic, callback) {\n    if (!topics[topic]) {\n      topics[topic] = [];\n    }\n\n    var id = (++subUid).toString();\n    topics[topic].push({\n      id: id,\n      callback: callback\n    });\n    return id;\n  };\n\n  var unsubscribe = function unsubscribe(id) {\n    Object.keys(topics).forEach(function (k) {\n      return topics[k] = topics[k].filter(function (subscriber) {\n        return subscriber.id !== id;\n      });\n    });\n  };\n\n  return {\n    publish: publish,\n    subscribe: subscribe,\n    unsubscribe: unsubscribe\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Observable);\n\n//# sourceURL=webpack:///./src/Observer/Observable.js?");

/***/ }),

/***/ "./src/Observer/Pubsub.js":
/*!********************************!*\
  !*** ./src/Observer/Pubsub.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar PubSub = {};\n\n(function (p) {\n  var topics = {};\n  var subUid = -1;\n\n  p.publish = function (topic, args) {\n    if (!topics[topic]) {\n      return false;\n    }\n\n    var subscribers = topics[topic];\n    subscribers.forEach(function (s) {\n      return s.callback.call(null, args);\n    });\n    return this;\n  };\n\n  p.subscribe = function (topic, callback) {\n    if (!topics[topic]) {\n      topics[topic] = [];\n    }\n\n    var id = (++subUid).toString();\n    topics[topic].push({\n      id: id,\n      callback: callback\n    });\n    return id;\n  };\n\n  p.unsubscribe = function (id) {\n    Object.keys(topics).forEach(function (k) {\n      return topics[k] = topics[k].filter(function (subscriber) {\n        return subscriber.id !== id;\n      });\n    });\n    return this;\n  };\n})(PubSub);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PubSub);\n\n//# sourceURL=webpack:///./src/Observer/Pubsub.js?");

/***/ }),

/***/ "./src/Observer/index.js":
/*!*******************************!*\
  !*** ./src/Observer/index.js ***!
  \*******************************/
/*! exports provided: PubSub, Observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pubsub */ \"./src/Observer/Pubsub.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PubSub\", function() { return _Pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Observable */ \"./src/Observer/Observable.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Observable\", function() { return _Observable__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/Observer/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Module */ \"./src/Module/index.js\");\n/* harmony import */ var _Command__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Command */ \"./src/Command/index.js\");\n/* harmony import */ var _Command_Receiver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Command/Receiver */ \"./src/Command/Receiver.js\");\n/* harmony import */ var _Decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Decorator */ \"./src/Decorator/index.js\");\n/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Observer */ \"./src/Observer/index.js\");\n/* harmony import */ var _Chain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Chain */ \"./src/Chain/index.js\");\n\n\n\n\n\n\nconsole.log('---Base Module: Age: ', _Module__WEBPACK_IMPORTED_MODULE_0__[\"BaseModule\"].addAge(20));\n\n_Module__WEBPACK_IMPORTED_MODULE_0__[\"BaseModule\"].initAge = function () {\n  console.log('---Base: custom initAge()');\n};\n\nconsole.log('---Base Module: Age: ', _Module__WEBPACK_IMPORTED_MODULE_0__[\"BaseModule\"].addAge(20));\n_Module__WEBPACK_IMPORTED_MODULE_0__[\"BaseModule\"].initAge();\nconsole.log(\"  \");\nconsole.log(\"---Revealing Module: Age: \", _Module__WEBPACK_IMPORTED_MODULE_0__[\"RevealingModule\"].addAge(20));\n\n_Module__WEBPACK_IMPORTED_MODULE_0__[\"RevealingModule\"].initAge = function () {\n  console.log('---Revealing: custom initAge()');\n};\n\nconsole.log(\"---Revealing Module: Age: \", _Module__WEBPACK_IMPORTED_MODULE_0__[\"RevealingModule\"].addAge(20));\n_Module__WEBPACK_IMPORTED_MODULE_0__[\"RevealingModule\"].initAge();\nconsole.log(\"  \");\nvar item1 = {\n  name: 'item1'\n};\n_Command__WEBPACK_IMPORTED_MODULE_1__[\"default\"].execute(_Command_Receiver__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  action: \"add\",\n  payload: item1\n});\n_Command__WEBPACK_IMPORTED_MODULE_1__[\"default\"].execute(_Command_Receiver__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  action: \"getAll\"\n});\n_Command__WEBPACK_IMPORTED_MODULE_1__[\"default\"].execute(_Command_Receiver__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  action: \"removeAt\",\n  payload: 0\n});\n_Command__WEBPACK_IMPORTED_MODULE_1__[\"default\"].execute(_Command_Receiver__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  action: \"getAll\"\n});\nconsole.log(\"  \");\nvar user = new _Decorator__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nuser.setUsername(\"nikoleta\");\nconsole.log('Decorator: decorated name: ', user.getUsername());\nconsole.log(\"Decorator: property injected to class with decorator: \", user.styles); // user.getUsername = () => { console.log('Try to override getUsername')};\n\nconsole.log(\"  \");\nvar topics = {\n  CLICK: \"CLICK\",\n  SCROLL: \"SCROLL\" // const idClick_1 = Observable.subscribe( topics.CLICK, () => { console.log(\"On CLICK: cb 1\")});\n  // const idClick_2 = Observable.subscribe( topics.CLICK, () => { console.log(\"On CLICK: cb 2\")});\n  // const idScroll_1 = Observable.subscribe( topics.SCROLL, () => { console.log(\"On SCROLL: cb 1\")});\n  // Observable.publish(topics.CLICK);\n  // Observable.publish(topics.SCROLL);\n  // Observable.unsubscribe(idClick_1);\n\n};\nvar idClick_1 = _Observer__WEBPACK_IMPORTED_MODULE_4__[\"PubSub\"].subscribe(topics.CLICK, function () {\n  console.log(\"On CLICK: cb 1\");\n});\nvar idClick_2 = _Observer__WEBPACK_IMPORTED_MODULE_4__[\"PubSub\"].subscribe(topics.CLICK, function () {\n  console.log(\"On CLICK: cb 2\");\n});\nvar idScroll_1 = _Observer__WEBPACK_IMPORTED_MODULE_4__[\"PubSub\"].subscribe(topics.SCROLL, function () {\n  console.log(\"On SCROLL: cb 1\");\n});\n_Observer__WEBPACK_IMPORTED_MODULE_4__[\"PubSub\"].publish(topics.CLICK).publish(topics.SCROLL);\n_Observer__WEBPACK_IMPORTED_MODULE_4__[\"PubSub\"].unsubscribe(idClick_1);\nconsole.log(\"  \");\nvar request = {\n  method: \"GET\",\n  url: 'htp://test.com?param1=value1&param2&param3=value3',\n  headers: {\n    'Content-Type': 'application/json'\n  },\n  body: {}\n};\nvar env = {\n  NODE_ENV: \"dev\"\n};\nvar middlewareChainProduction = Object(_Chain__WEBPACK_IMPORTED_MODULE_5__[\"middlewareChain\"])(env);\nmiddlewareChainProduction(request);\nconsole.log(\"CHAIN: request: \", request);\nvar promiseChainProduction = Object(_Chain__WEBPACK_IMPORTED_MODULE_5__[\"promiseChain\"])(env);\npromiseChainProduction(request).then(function (res) {\n  return console.log('CHAIN: result: ', res);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });