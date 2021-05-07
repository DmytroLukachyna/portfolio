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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "./node_modules/core-js/internals/engine-user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/core-js/internals/engine-v8-version.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack-stream/node_modules/webpack/buildin/global.js */ "./node_modules/webpack-stream/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var shared = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  return !String(Symbol()) ||
    // Chrome 38 Symbol has incorrect toString conversion
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = global;


/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.12.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "./node_modules/webpack-stream/node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/js/modules/main.js":
/*!********************************!*\
  !*** ./src/js/modules/main.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__);



function main() {
  var siteWrapper = document.querySelector("#site-wrapper"),
      warningPage = document.querySelector(".warning"),
      hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      // languages = document.querySelector('.languages'),
  body = document.querySelector('body'),
      loaderWrapper = document.querySelector('#loader-wrapper'),
      themeToggler = document.querySelector('#theme__toggle'),
      warningResolution = window.matchMedia("(max-width: 319px)"),
      portfolioItem = document.querySelectorAll('.item'),
      portfolioSwitchButtons = document.querySelectorAll('.portfolio__switch');

  document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
      body.style.visibility = "hidden";
      loaderWrapper.style.visibility = "visible";
    } else {
      loaderWrapper.style.display = "none";
      loaderWrapper.style.visibility = "hidden";
      body.style.visibility = "visible";
      siteWrapper.style.opacity = "1";
      setThemeStart();
    }
  };

  if (window.screen.width > siteWrapper.offsetWidth) {
    document.documentElement.classList.add('scrollbar_active');
  }

  function setTheme(themeName) {
    if (document.documentElement.classList.contains('theme-dark')) {
      document.documentElement.classList.remove('theme-dark');
    } else if (document.documentElement.classList.contains('theme-light')) {
      document.documentElement.classList.remove('theme-light');
    }

    document.documentElement.classList.add(themeName);
    localStorage.setItem('theme', themeName);
  }

  function setThemeStart() {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-dark');
      themeToggler.checked = true;
    } else {
      setTheme('theme-light');
      themeToggler.checked = false;
    }
  }

  themeToggler.addEventListener('change', function () {
    if (localStorage.getItem('theme') === 'theme-light') {
      setTheme('theme-dark');
      themeToggler.checked = true;
    } else {
      setTheme('theme-light');
      themeToggler.checked = false;
    }
  });

  if (warningResolution.matches) {
    siteWrapper.style.display = "none";
    warningPage.style.display = "flex";
  }

  hamburger.addEventListener('click', function () {
    menu.classList.toggle('menu_active');
    hamburger.classList.toggle('hamburger_active'); // languages.classList.toggle('languages_active');

    document.documentElement.classList.toggle('lock-scroll');
  });
  document.querySelectorAll('.menu__link, .menu__overlay').forEach(function (e) {
    e.addEventListener('click', function () {
      menu.classList.remove('menu_active');
      hamburger.classList.remove('hamburger_active'); // languages.classList.remove('languages_active');

      document.documentElement.classList.remove('lock-scroll');
    });
  });
  var currentYear = new Date().getFullYear();
  document.querySelector('#currentYear').textContent = currentYear;
  portfolioSwitchButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var portfolioSwitchActiveButton = document.querySelector(".portfolio__switch_active"),
          portfolioTransferringElements = document.querySelectorAll('.item_visible-to-hidden, .item_hidden-to-visible');

      if (button.dataset.type === portfolioSwitchActiveButton.dataset.type || portfolioTransferringElements.length !== 0) {
        if (button.dataset.type === portfolioSwitchActiveButton.dataset.type) {
          console.log("Wow, keep calm! You are clicking on an element that is already active!");
        } else if (portfolioTransferringElements.length !== 0) {
          console.log("Wow, slow down! Loading of items is in progress!");
        }

        return false;
      } else {
        console.log("Last active: ".concat(portfolioSwitchActiveButton.dataset.type, ", pressed ").concat(button.dataset.type));
        portfolioSwitchButtons.forEach(function (e) {
          e.classList.remove('portfolio__switch_active');
        });
        button.classList.add('portfolio__switch_active');
        var activeButtonType = button.dataset.type;

        if (activeButtonType === "all") {
          document.querySelectorAll('.item:not(.item_hidden)').forEach(function (shownItem) {
            shownItem.classList.add('item_visible-to-hidden');
            setTimeout(function () {
              shownItem.classList.remove('item_visible-to-hidden');
              shownItem.classList.add('item_hidden');
              portfolioItem.forEach(function (eachItem) {
                eachItem.classList.remove('item_hidden');
                eachItem.classList.add('item_hidden-to-visible');
                setTimeout(function () {
                  eachItem.classList.remove('item_hidden-to-visible');
                }, 500);
              });
            }, 500);
          });
        } else {
          document.querySelectorAll('.item:not(.item_hidden)').forEach(function (shownItem) {
            shownItem.classList.add('item_visible-to-hidden');
            setTimeout(function () {
              shownItem.classList.remove('item_visible-to-hidden');
              shownItem.classList.add('item_hidden');
              portfolioItem.forEach(function (item) {
                if (item.dataset.type == activeButtonType) {
                  item.classList.remove('item_hidden');
                  item.classList.add('item_hidden-to-visible');
                  setTimeout(function () {
                    item.classList.remove('item_hidden-to-visible');
                  }, 500);
                }
              });
            }, 500);
          });
        }
      }
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (main);

/***/ }),

/***/ "./src/js/modules/translation.js":
/*!***************************************!*\
  !*** ./src/js/modules/translation.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function translation() {//
  // const langWrapper = document.querySelector('.languages'),
  //     flag = document.querySelectorAll('.languages__item');
  // let currentLanguage = localStorage.getItem('language');
  // initialLanguageSetup();
  // function initialLanguageSetup() {
  //     if (!currentLanguage) {
  //         languageSwitch();
  //         document.documentElement.lang = currentLanguage;
  //     }
  // }
  // function languageSwitch() {
  //     let activeLanguage = document.querySelector('.languages__item_active').getAttribute('data-language');
  //     localStorage.setItem('language', activeLanguage);
  //     currentLanguage = activeLanguage;
  // }
  // flag.forEach(flag => {
  //     if (flag.getAttribute('data-language') !== currentLanguage) {
  //         flag.classList.remove('languages__item_active');
  //     } else {
  //         flag.classList.add('languages__item_active');
  //     }
  //     flag.addEventListener('click', () => {
  //         langWrapper.querySelector('.languages__item_active').classList.remove('languages__item_active');
  //         flag.classList.add('languages__item_active');
  //         languageSwitch();
  //         siteTranslate(currentLanguage);
  //     });
  // });
  // function siteTranslate(nyelv) {
  // document.documentElement.lang = currentLanguage;
  // document.getElementsByTagName('title')[0].textContent = data[nyelv].pagetitle;
  // document.querySelector('.social__text').textContent = data[nyelv].socialtext;
  // document.querySelector('.mainscreen__name').textContent = data[nyelv].mainscreenname;
  // document.querySelector('.mainscreen__info').textContent = data[nyelv].mainscreeninfo;
  // document.querySelectorAll('.mainscreen__link')[0].textContent = data[nyelv].mainscreenportfolio;
  // document.querySelectorAll('.mainscreen__link')[1].textContent = data[nyelv].mainscreencv;
  // document.querySelectorAll('.menu__link')[0].textContent = data[nyelv].menulink1;
  // document.querySelectorAll('.menu__link')[1].textContent = data[nyelv].menulink2;
  // document.querySelectorAll('.menu__link')[2].textContent = data[nyelv].menulink3;
  // document.querySelectorAll('.menu__link')[3].textContent = data[nyelv].menulink4;
  // document.querySelectorAll('.menu__link')[4].textContent = data[nyelv].menulink5;
  // document.querySelector('.title.profile__title').textContent = data[nyelv].profiletitle;
  // document.querySelectorAll('.profile__subtitle')[0].textContent = data[nyelv].profilesubtitle1;
  // document.querySelectorAll('.profile__main p')[0].textContent = data[nyelv].profile1;
  // document.querySelectorAll('.profile__main p')[1].textContent = data[nyelv].profile2;
  // document.querySelectorAll('.profile__main p')[2].textContent = data[nyelv].profile3;
  // document.querySelectorAll('.profile__main p')[3].textContent = data[nyelv].profile4;
  // document.querySelectorAll('.profile__subtitle')[1].textContent = data[nyelv].profilesubtitle2;
  // document.querySelector('.profile__name').textContent = data[nyelv].profilename;
  // document.querySelectorAll('.profile__tagline')[0].innerHTML = data[nyelv].profilenumber;
  // document.querySelectorAll('.profile__tagline')[2].textContent = data[nyelv].profilesocials;
  // document.querySelectorAll('.profile__tagline')[3].textContent = data[nyelv].profilelangskills;
  // document.querySelectorAll('.profile__lang')[0].textContent = data[nyelv].profilelangua;
  // document.querySelectorAll('.profile__lang')[1].textContent = data[nyelv].profilelangen;
  // document.querySelectorAll('.profile__lang')[2].textContent = data[nyelv].profilelangru;
  // document.querySelectorAll('.profile__lang')[3].textContent = data[nyelv].profilelanghu;
  // document.querySelectorAll('.profile__lang')[4].textContent = data[nyelv].profilelangde;
  // document.querySelectorAll('.profile__tagline')[4].textContent = data[nyelv].profilecv;
  // document.querySelectorAll('.profile__cv-item a')[0].innerHTML = data[nyelv].profilecvua;
  // document.querySelectorAll('.profile__cv-item a')[1].innerHTML = data[nyelv].profilecven;
  // document.querySelectorAll('.profile__cv-item a')[2].innerHTML = data[nyelv].profilecvhu;
  // document.querySelectorAll('.profile__cv-item a')[2].innerHTML = data[nyelv].profilecvru;
  // document.querySelector('.portfolio__title').textContent = data[nyelv].portfoliotitle;
  // document.querySelectorAll('.item__descr')[0].textContent = data[nyelv].portfolioitemencore;
  // document.querySelectorAll('.item__descr')[0].textContent = data[nyelv].portfolioitemorange;
  // document.querySelectorAll('.item__descr')[1].textContent = data[nyelv].portfolioitemsparcle;
  // document.querySelectorAll('.item__descr')[2].textContent = data[nyelv].portfolioitemflags;
  // document.querySelectorAll('.item__descr')[3].textContent = data[nyelv].portfolioitemski;
  // document.querySelectorAll('.item__descr')[4].textContent = data[nyelv].portfolioitemtest;
  // document.querySelectorAll('.item__descr')[5].textContent = data[nyelv].portfolioitemtest;
  // document.querySelectorAll('.item__descr')[6].textContent = data[nyelv].portfolioitemrandom;
  // document.querySelector('.certificates__title').textContent = data[nyelv].certificatestitle;
  // document.querySelector('.certificates__descr').textContent = data[nyelv].certificatesdescr1;
  // document.querySelector('.certificates__descr-secondary').textContent = data[nyelv].certificatesdescr2;
  // document.querySelector('.workstudy__title').textContent = data[nyelv].workstudytitle;
  // document.querySelectorAll('.workstudy__header')[0].textContent = data[nyelv].workstudywork;
  // document.querySelectorAll('.workstudy__header')[1].textContent = data[nyelv].workstudystudy;
  // document.querySelectorAll('.card__date')[2].textContent = data[nyelv].workdate1;
  // document.querySelectorAll('.card__title')[2].textContent = data[nyelv].worktitle1;
  // document.querySelectorAll('.card__descr p')[6].textContent = data[nyelv].workdescr1;
  // document.querySelectorAll('.card__descr p')[7].textContent = data[nyelv].workdescr2;
  // document.querySelectorAll('.card__descr p')[8].textContent = data[nyelv].workdescr3;
  // document.querySelectorAll('.card__subtitle')[2].textContent = data[nyelv].almamatername;
  // document.querySelectorAll('.card__title')[2].textContent = data[nyelv].almamaterfield;
  // document.querySelectorAll('.card__descr p')[4].textContent = data[nyelv].almamaterdescr;
  // document.querySelectorAll('.overlay__text').forEach(el => {
  //     el.textContent = data[nyelv].visitwebsite;
  // });
  // document.querySelectorAll('.item__adaptivity').forEach(el => {
  //     el.textContent = data[nyelv].itemadaptivity;
  // });
  // document.querySelectorAll('.item__stack-list-text').forEach(el => {
  //     el.textContent = data[nyelv].itemstacklist;
  // });
  // document.querySelectorAll('.item__github').forEach(el => {
  //     el.innerHTML = data[nyelv].itemgithub;
  // });
  // document.querySelectorAll('.item__blank p').forEach(el => {
  //     el.textContent = data[nyelv].itemblank;
  // });
}

var data = {
  "en": {
    "pagetitle": "Portfolio | Dmytro Lukachyna",
    "socialtext": "Social networks",
    "menulink1": "To the top",
    "menulink2": "About me",
    "menulink3": "Portfolio",
    "menulink4": "Certificates",
    "menulink5": "Work & Education",
    "mainscreenname": "Dmytro Lukachyna",
    "mainscreeninfo": "HTML-coder, Junior Front-end developer",
    "mainscreenportfolio": "Portfolio",
    "mainscreencv": "CV / About me",
    "profiletitle": "About me",
    "profilesubtitle1": "Briefly about myself",
    "profile1": "Hello! My name is Dmytro, I am a Front-end developer and a HTML-coder.",
    "profile2": "I like to look for interesting solutions for accomplishing tasks I am facing and, together with my ideas, implement them in the form of websites. In addition, I am constantly developing in this sphere, since perfection knows no limits :)",
    "profile3": "Validity of the code, complete adaptability of the content, the accuracy and readability of the layout as well as the use of the most relevant cutting-edge technologies are crucial cornerstones of my work.",
    "profile4": "Professional skills and technologies / frameworks used:",
    "profilesubtitle2": "Personal information",
    "profilename": "Dmytro Lukachyna",
    "profilenumber": "Phone number (also via Telegram and Viber):",
    "profilesocials": "Links to Djinni, Github and social networks:",
    "profilelangskills": "Language skills",
    "profilelangua": "Ukrainian \u2013 native (fluent)",
    "profilelangen": "English \u2013 \u04122+ (Upper-Intermediate)",
    "profilelangru": "Russian \u2013 \u04212 (fluent)",
    "profilelanghu": "Hungarian \u2013 \u04121 (Intermediate)",
    "profilelangde": "German \u2013 \u04101 (Beginner)",
    "profilecv": "Curriculum vitae (CV) (as a PDF, in a new tab):",
    "profilecvua": "<img src=\"icons/flags/ua.svg\" alt=\"Ukrainian\">In Ukrainian",
    "profilecven": "<img src=\"icons/flags/gb.svg\" alt=\"English\">In English",
    "profilecvru": "<img src=\"icons/flags/ru.svg\" alt=\"Russian\">In Russian",
    "portfoliotitle": "Portfolio",
    "visitwebsite": "Visit the website",
    "itemadaptivity": "Adaptiveness: 320-1920",
    "itemstacklist": "Technologies and frameworks used",
    "itemgithub": "Source code on <i class=\"fab fa-github\"></i>",
    "itemblank": "Development of the project is in progress!",
    "portfolioitemencore": "Commercial site of active Ukrainian tour agency",
    "portfolioitemorange": "Feature-rich site of web studio from United States",
    "portfolioitemsparcle": "Full-featured Croatian cleaning company site",
    "portfolioitemflags": "Page with language selection and particles",
    "portfolioitemski": "Full-fledged Ski & Snowboard School site",
    "portfolioitemtest": "Test task for Ukrainian IT company",
    "portfolioitemrandom": "Simple randomizer on pure JS",
    "certificatestitle": "Certificates",
    "certificatesdescr1": "Completed courses and tests on various educational IT-platforms",
    "certificatesdescr2": "(click on the certificate to visit its original version)",
    "workstudytitle": "Career Path",
    "workstudywork": "Work Experience",
    "workdate1": "08/2015 - present",
    "worktitle1": "Translator",
    "workdescr1": "Translated more than 30 ECtHR judgements, 10+ Venice Commission's opinions as well as hundreds of Council of Europe experts' conclusions, recommendations and declarations;",
    "workdescr2": "Contributed to translation and proofreading of translation of 40+ laws of Ukraine incl. those amending the Constitution of Ukraine;",
    "workdescr3": "Consulted and gave recommendations to translators on usage of different CAT-tools (incl. technical questions and troubleshooting of issues).",
    "workstudystudy": "Education",
    "almamatername": "Igor Sikorsky Kyiv Polytechnic Institute",
    "almamaterfield": "Translation / Philology",
    "almamaterdescr": "Complete higher education (master degree)"
  },
  "uk": {
    "pagetitle": "\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E | \u0414\u043C\u0438\u0442\u0440\u043E \u041B\u0443\u043A\u0430\u0447\u0438\u043D\u0430",
    "socialtext": "\u0421\u043E\u0446\u0456\u0430\u043B\u044C\u043D\u0456 \u043C\u0435\u0440\u0435\u0436\u0456",
    "menulink1": "\u041D\u0430 \u0433\u043E\u043B\u043E\u0432\u043D\u0443",
    "menulink2": "\u041F\u0440\u043E \u043C\u0435\u043D\u0435",
    "menulink3": "\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E",
    "menulink4": "\u0421\u0435\u0440\u0442\u0438\u0444\u0456\u043A\u0430\u0442\u0438",
    "menulink5": "\u0420\u043E\u0431\u043E\u0442\u0430 \u0456 \u043E\u0441\u0432\u0456\u0442\u0430",
    "mainscreenname": "\u0414\u043C\u0438\u0442\u0440\u043E \u041B\u0443\u043A\u0430\u0447\u0438\u043D\u0430",
    "mainscreeninfo": "HTML-coder, Junior Front-end developer",
    "mainscreenportfolio": "\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E",
    "mainscreencv": "CV / \u041F\u0440\u043E \u043C\u0435\u043D\u0435",
    "profiletitle": "\u041F\u0440\u043E \u043C\u0435\u043D\u0435",
    "profilesubtitle1": "\u0422\u0440\u043E\u0445\u0438 \u043F\u0440\u043E \u0441\u0435\u0431\u0435",
    "profile1": "\u041F\u0440\u0438\u0432\u0456\u0442! \u041C\u0435\u043D\u0435 \u0437\u0432\u0430\u0442\u0438 \u0414\u043C\u0438\u0442\u0440\u043E, \u044F \u2013 Front-end \u0440\u043E\u0437\u0440\u043E\u0431\u043D\u0438\u043A \u0438 HTML-coder.",
    "profile2": "\u041C\u0435\u043D\u0456 \u043F\u043E\u0434\u043E\u0431\u0430\u0454\u0442\u044C\u0441\u044F \u0448\u0443\u043A\u0430\u0442\u0438 \u0446\u0456\u043A\u0430\u0432\u0456 \u0440\u0456\u0448\u0435\u043D\u043D\u044F \u0434\u043B\u044F \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u043D\u044F \u0437\u0430\u0432\u0434\u0430\u043D\u044C, \u043F\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0445 \u043F\u0435\u0440\u0435\u0434\u0456 \u043C\u043D\u043E\u044E, \u0456 \u0440\u0430\u0437\u043E\u043C \u0456\u0437 \u043C\u043E\u0457\u043C\u0438 \u0456\u0434\u0435\u044F\u043C\u0438 \u0440\u0435\u0430\u043B\u0456\u0437\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u0457\u0445 \u044F\u043A \u0441\u0430\u0439\u0442\u0438. \u041E\u043A\u0440\u0456\u043C \u0442\u043E\u0433\u043E, \u044F \u043F\u043E\u0441\u0442\u0456\u0439\u043D\u043E \u0440\u043E\u0437\u0432\u0438\u0432\u0430\u044E\u0441\u044F \u0443 \u0446\u0456\u0439 \u0441\u0444\u0435\u0440\u0456, \u0430\u0434\u0436\u0435 \u0434\u043E\u0441\u043A\u043E\u043D\u0430\u043B\u043E\u0441\u0442\u0456 \u043D\u0435\u043C\u0430\u0454 \u043C\u0435\u0436 :)",
    "profile3": "\u0423 \u043F\u0440\u043E\u0446\u0435\u0441\u0456 \u0432\u0435\u0431-\u0440\u043E\u0437\u0440\u043E\u0431\u043A\u0438 \u0433\u043E\u043B\u043E\u0432\u043D\u0435 \u0434\u043B\u044F \u043C\u0435\u043D\u0435 \u2013 \u0432\u0430\u043B\u0456\u0434\u043D\u0456\u0441\u0442\u044C \u043A\u043E\u0434\u0443, \u043F\u043E\u0432\u043D\u0430 \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u0456\u0441\u0442\u044C \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0443, \u0430\u043A\u0443\u0440\u0430\u0442\u043D\u0456\u0441\u0442\u044C \u0442\u0430 \u0447\u0438\u0442\u0430\u0431\u0435\u043B\u044C\u043D\u0456\u0441\u0442\u044C \u0432\u0435\u0440\u0441\u0442\u043A\u0438, \u0430 \u0442\u0430\u043A\u043E\u0436 \u0437\u0430\u0441\u0442\u043E\u0441\u0443\u0432\u0430\u043D\u043D\u044F \u043D\u0430\u0439\u043D\u043E\u0432\u0456\u0448\u0438\u0445 \u0442\u0430 \u043D\u0430\u0439\u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u0456\u0448\u0438\u0445 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0456\u0439.",
    "profile4": "\u041F\u0440\u043E\u0444\u0435\u0441\u0456\u0439\u043D\u0456 \u043D\u0430\u0432\u0438\u0447\u043A\u0438 \u0442\u0430 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0456\u0457 / \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A\u0438 \u0443 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u0456:",
    "profilesubtitle2": "\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F",
    "profilename": "\u0414\u043C\u0438\u0442\u0440\u043E \u041B\u0443\u043A\u0430\u0447\u0438\u043D\u0430",
    "profilenumber": "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443 (\u0442\u0430\u043A\u043E\u0436 \u0443 Telegram \u0456 Viber):",
    "profilesocials": "\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0430 Djinni, Github \u0456 \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436\u0456:",
    "profilelangskills": "\u0412\u043E\u043B\u043E\u0434\u0456\u043D\u043D\u044F \u043C\u043E\u0432\u0430\u043C\u0438",
    "profilelangua": "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430 \u2013 \u0440\u0456\u0434\u043D\u0430, \u0432\u0456\u043B\u044C\u043D\u0435 \u0432\u043E\u043B\u043E\u0434\u0456\u043D\u043D\u044F",
    "profilelangen": "\u0410\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u0430 \u2013 \u04122+ (Upper-Intermediate)",
    "profilelangru": "\u0420\u043E\u0441\u0456\u0439\u0441\u044C\u043A\u0430 \u2013 \u04212 (\u0432\u0456\u043B\u044C\u043D\u0435 \u0432\u043E\u043B\u043E\u0434\u0456\u043D\u043D\u044F)",
    "profilelanghu": "\u0423\u0433\u043E\u0440\u0441\u044C\u043A\u0430 \u2013 \u04121 (Intermediate)",
    "profilelangde": "\u041D\u0456\u043C\u0435\u0446\u044C\u043A\u0430 \u2013 \u04101 (Beginner)",
    "profilecv": "\u0420\u0435\u0437\u044E\u043C\u0435 (\u0443 \u0444\u043E\u0440\u043C\u0430\u0442\u0456 PDF, \u0443 \u043D\u043E\u0432\u0456\u0439 \u0432\u043A\u043B\u0430\u0434\u0446\u0456):",
    "profilecvua": "<img src=\"icons/flags/ua.svg\" alt=\"Ukrainian\">\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u043E\u044E",
    "profilecven": "<img src=\"icons/flags/gb.svg\" alt=\"English\">\u0410\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u043E\u044E",
    "profilecvru": "<img src=\"icons/flags/ru.svg\" alt=\"Russian\">\u0420\u043E\u0441\u0456\u0439\u0441\u044C\u043A\u043E\u044E",
    "portfoliotitle": "\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E",
    "visitwebsite": "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0441\u0430\u0439\u0442",
    "itemadaptivity": "\u0410\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u0456\u0441\u0442\u044C: 320-1920",
    "itemstacklist": "\u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u0456 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0456\u0457 \u0442\u0430 \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A\u0438",
    "itemgithub": "\u0412\u0438\u0445\u0456\u0434\u043D\u0438\u0439 \u043A\u043E\u0434 \u043D\u0430 <i class=\"fab fa-github\"></i>",
    "itemblank": "\u0420\u043E\u0431\u043E\u0442\u0430 \u043D\u0430\u0434 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u043C \u0442\u0440\u0438\u0432\u0430\u0454!",
    "portfolioitemencore": "\u0421\u0430\u0439\u0442 \u0434\u0456\u044E\u0447\u043E\u0457 \u0442\u0443\u0440\u0438\u0441\u0442\u0438\u0447\u043D\u043E\u0457 \u0430\u0433\u0435\u043D\u0446\u0456\u0457 \u0432 \u0423\u043A\u0440\u0430\u0457\u043D\u0456",
    "portfolioitemorange": "\u041F\u043E\u0432\u043D\u043E\u0444\u0443\u043D\u043A\u0446\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0439 \u0441\u0430\u0439\u0442 \u0432\u0435\u0431-\u0441\u0442\u0443\u0434\u0456\u0457 \u0456\u0437 \u0421\u0428\u0410",
    "portfolioitemsparcle": "\u041F\u043E\u0432\u043D\u043E\u0444\u0443\u043D\u043A\u0446\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0439 \u0441\u0430\u0439\u0442 \u043A\u043B\u0456\u043D\u0456\u043D\u0433\u043E\u0432\u043E\u0457 \u0444\u0456\u0440\u043C\u0438",
    "portfolioitemflags": "\u0421\u0442\u043E\u0440\u0456\u043D\u043A\u0430 \u0437 \u0432\u0438\u0431\u043E\u0440\u043E\u043C \u043C\u043E\u0432\u0438 \u0442\u0430 particle-\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u043C\u0438",
    "portfolioitemski": "\u041F\u043E\u0432\u043D\u043E\u0444\u0443\u043D\u043A\u0446\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0439 \u0441\u0430\u0439\u0442 \u043B\u0438\u0436\u043D\u043E\u0457 \u0448\u043A\u043E\u043B\u0438",
    "portfolioitemtest": "\u0422\u0435\u0441\u0442\u043E\u0432\u0435 \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F \u0434\u043B\u044F \u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u043E\u0457 IT-\u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457",
    "portfolioitemrandom": "\u041F\u0440\u043E\u0441\u0442\u0438\u0439 \u0440\u0430\u043D\u0434\u043E\u043C\u0430\u0439\u0437\u0435\u0440 \u043D\u0430 \u0447\u0438\u0441\u0442\u043E\u043C\u0443 JS",
    "certificatestitle": "\u0421\u0435\u0440\u0442\u0438\u0444\u0456\u043A\u0430\u0442\u0438",
    "certificatesdescr1": "\u041F\u0440\u043E\u0439\u0434\u0435\u043D\u0456 \u043A\u0443\u0440\u0441\u0438 \u0442\u0430 \u0442\u0435\u0441\u0442\u0438 \u043D\u0430 \u0440\u0456\u0437\u043D\u043E\u043C\u0430\u043D\u0456\u0442\u043D\u0438\u0445 \u043E\u0441\u0432\u0456\u0442\u043D\u0456\u0445 IT-\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430\u0445",
    "certificatesdescr2": "(\u043D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u043D\u0430 \u0441\u0435\u0440\u0442\u0438\u0444\u0456\u043A\u0430\u0442 \u0434\u043B\u044F \u0442\u043E\u0433\u043E, \u0449\u043E\u0431 \u043F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0439\u043E\u0433\u043E \u043E\u0440\u0438\u0433\u0456\u043D\u0430\u043B\u044C\u043D\u0443 \u0432\u0435\u0440\u0441\u0456\u044E)",
    "workstudytitle": "\u041A\u0430\u0440\u2019\u0454\u0440\u043D\u0438\u0439 \u0448\u043B\u044F\u0445",
    "workstudywork": "\u0414\u043E\u0441\u0432\u0456\u0434 \u0440\u043E\u0431\u043E\u0442\u0438",
    "workdate1": "08/2015 - \u0434\u043E\u043D\u0438\u043D\u0456",
    "worktitle1": "\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u0430\u0447",
    "workdescr1": "\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0432 \u043F\u043E\u043D\u0430\u0434 30 \u0440\u0456\u0448\u0435\u043D\u044C \u0404\u0421\u041F\u041B, 10+ \u0432\u0438\u0441\u043D\u043E\u0432\u043A\u0456\u0432 \u0412\u0435\u043D\u0435\u0446\u0456\u0430\u043D\u0441\u044C\u043A\u043E\u0457 \u043A\u043E\u043C\u0456\u0441\u0456\u0457, \u0430 \u0442\u0430\u043A\u043E\u0436 \u0441\u043E\u0442\u043D\u0456 \u0432\u0438\u0441\u043D\u043E\u0432\u043A\u0456\u0432, \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0456\u0439 \u0442\u0430 \u0437\u0430\u044F\u0432 \u0435\u043A\u0441\u043F\u0435\u0440\u0442\u0456\u0432 \u0420\u0430\u0434\u0438 \u0404\u0432\u0440\u043E\u043F\u0438;",
    "workdescr2": "\u0417\u0430\u043B\u0443\u0447\u0430\u0432\u0441\u044F \u0434\u043E \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u0443 \u0442\u0430 \u0440\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u0443 \u043F\u043E\u043D\u0430\u0434 40 \u0437\u0430\u043A\u043E\u043D\u0456\u0432 \u0423\u043A\u0440\u0430\u0457\u043D\u0438, \u0443 \u0442.\u0447. \u0442\u0438\u0445, \u0449\u043E \u043F\u0435\u0440\u0435\u0434\u0431\u0430\u0447\u0430\u043B\u0438 \u0432\u043D\u0435\u0441\u0435\u043D\u043D\u044F \u0437\u043C\u0456\u043D \u0434\u043E \u041A\u043E\u043D\u0441\u0442\u0438\u0442\u0443\u0446\u0456\u0457 \u0423\u043A\u0440\u0430\u0457\u043D\u0438;",
    "workdescr3": "\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0443\u0432\u0430\u0432 \u0442\u0430 \u043D\u0430\u0434\u0430\u0432\u0430\u0432 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0456\u0457 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u0430\u0447\u0430\u043C \u0449\u043E\u0434\u043E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0440\u0456\u0437\u043D\u0438\u0445 CAT-\u0456\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0456\u0432 (\u0437\u043E\u043A\u0440\u0435\u043C\u0430 \u0441\u0442\u043E\u0441\u043E\u0432\u043D\u043E \u0442\u0435\u0445\u043D\u0456\u0447\u043D\u0438\u0445 \u043F\u0438\u0442\u0430\u043D\u044C \u0442\u0430 \u0440\u043E\u0437\u0432'\u044F\u0437\u0430\u043D\u043D\u044F \u043F\u0440\u043E\u0431\u043B\u0435\u043C).",
    "workstudystudy": "\u041D\u0430\u0432\u0447\u0430\u043D\u043D\u044F \u0456 \u043E\u0441\u0432\u0456\u0442\u0430",
    "almamatername": "\u041A\u0438\u0457\u0432\u0441\u044C\u043A\u0438\u0439 \u043F\u043E\u043B\u0456\u0442\u0435\u0445\u043D\u0456\u0447\u043D\u0438\u0439 \u0456\u043D\u0441\u0442\u0438\u0442\u0443\u0442 \u0456\u043C\u0435\u043D\u0456 \u0406\u0433\u043E\u0440\u044F \u0421\u0456\u043A\u043E\u0440\u0441\u044C\u043A\u043E\u0433\u043E",
    "almamaterfield": "\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434/\u0444\u0456\u043B\u043E\u043B\u043E\u0433\u0456\u044F",
    "almamaterdescr": "\u041F\u043E\u0432\u043D\u0430 \u0432\u0438\u0449\u0430 \u043E\u0441\u0432\u0456\u0442\u0430 (\u0441\u043F\u0435\u0446\u0456\u0430\u043B\u0456\u0441\u0442/\u043C\u0430\u0433\u0456\u0441\u0442\u0440)"
  },
  "hu": {
    "pagetitle": "Portf\xF3li\xF3 | Demeter Luk\xE1csina",
    "socialtext": "K\xF6z\xF6ss\xE9gi h\xE1l\xF3zatok",
    "mainscreenname": "Demeter Luk\xE1csina",
    "mainscreeninfo": "HTML-coder, Junior Front-end fejleszt\u0151",
    "mainscreenportfolio": "Portf\xF3li\xF3",
    "mainscreencv": "CV / R\xF3lam"
  },
  "ru": {
    "pagetitle": "\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E | \u0414\u043C\u0438\u0442\u0440\u0438\u0439 \u041B\u0443\u043A\u0430\u0447\u0438\u043D\u0430",
    "socialtext": "\u0421\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u0435\u0442\u0438",
    "menulink1": "\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E",
    "menulink2": "\u041E\u0431\u043E \u043C\u043D\u0435",
    "menulink3": "\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E",
    "menulink4": "\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u044B",
    "menulink5": "\u0420\u0430\u0431\u043E\u0442\u0430 \u0438 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435",
    "mainscreenname": "\u0414\u043C\u0438\u0442\u0440\u0438\u0439 \u041B\u0443\u043A\u0430\u0447\u0438\u043D\u0430",
    "mainscreeninfo": "HTML-coder, Junior Front-end developer",
    "mainscreenportfolio": "\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E",
    "mainscreencv": "CV / \u041E\u0431\u043E \u043C\u043D\u0435",
    "profiletitle": "\u041E\u0431\u043E \u043C\u043D\u0435",
    "profilesubtitle1": "\u041D\u0435\u043C\u043D\u043E\u0433\u043E \u043E \u0441\u0435\u0431\u0435",
    "profile1": "\u041F\u0440\u0438\u0432\u0435\u0442! \u041C\u0435\u043D\u044F \u0437\u043E\u0432\u0443\u0442 \u0414\u043C\u0438\u0442\u0440\u0438\u0439, \u044F \u2013 Front-end \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A \u0438 HTML-coder.",
    "profile2": "\u041C\u043D\u0435 \u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F \u0438\u0441\u043A\u0430\u0442\u044C \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0441\u0442\u043E\u044F\u0449\u0438\u0445 \u043F\u0435\u0440\u0435\u0434\u043E \u043C\u043D\u043E\u0439 \u0437\u0430\u0434\u0430\u0447 \u0438 \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 \u043C\u043E\u0438\u043C\u0438 \u0438\u0434\u0435\u044F\u043C\u0438 \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u044B\u0432\u0430\u0442\u044C \u0438\u0445 \u0432 \u0432\u0438\u0434\u0435 \u0441\u0430\u0439\u0442\u043E\u0432. \u041A\u0440\u043E\u043C\u0435 \u0442\u043E\u0433\u043E, \u044F \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u044E\u0441\u044C \u0432 \u044D\u0442\u043E\u0439 \u0441\u0444\u0435\u0440\u0435, \u0442\u0430\u043A \u043A\u0430\u043A \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u0441\u0442\u0432\u0443 \u043D\u0435\u0442 \u043F\u0440\u0435\u0434\u0435\u043B\u0430 :)",
    "profile3": "\u0412 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435 \u0432\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0433\u043B\u0430\u0432\u043D\u043E\u0435 \u0434\u043B\u044F \u043C\u0435\u043D\u044F \u2013 \u0432\u0430\u043B\u0438\u0434\u043D\u043E\u0441\u0442\u044C \u043A\u043E\u0434\u0430, \u043F\u043E\u043B\u043D\u0430\u044F \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0430, \u0430\u043A\u043A\u0443\u0440\u0430\u0442\u043D\u043E\u0441\u0442\u044C \u0438 \u0447\u0438\u0442\u0430\u0435\u043C\u043E\u0441\u0442\u044C \u0432\u0435\u0440\u0441\u0442\u043A\u0438, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0441\u0430\u043C\u044B\u0445 \u043D\u043E\u0432\u044B\u0445 \u0438 \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0445 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439.",
    "profile4": "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u043D\u0430\u0432\u044B\u043A\u0438 \u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 / \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A\u0438:",
    "profilesubtitle2": "\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",
    "profilename": "\u0414\u043C\u0438\u0442\u0440\u0438\u0439 \u041B\u0443\u043A\u0430\u0447\u0438\u043D\u0430",
    "profilenumber": "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 (\u0442\u0430\u043A\u0436\u0435 \u0432 Telegram \u0438 Viber):",
    "profilesocials": "\u0421\u0441\u044B\u043B\u043A\u0438 \u043D\u0430 Djinni, Github \u0438 \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u0435\u0442\u0438:",
    "profilelangskills": "\u0412\u043B\u0430\u0434\u0435\u043D\u0438\u0435 \u044F\u0437\u044B\u043A\u0430\u043C\u0438",
    "profilelangua": "\u0423\u043A\u0440\u0430\u0438\u043D\u0441\u043A\u0438\u0439 \u2013 \u0440\u043E\u0434\u043D\u043E\u0439, \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0435 \u0432\u043B\u0430\u0434\u0435\u043D\u0438\u0435",
    "profilelangen": "\u0410\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439 \u2013 \u04122+ (Upper-Intermediate)",
    "profilelangru": "\u0420\u0443\u0441\u0441\u043A\u0438\u0439 \u2013 \u04212 (\u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0435 \u0432\u043B\u0430\u0434\u0435\u043D\u0438\u0435)",
    "profilelanghu": "\u0412\u0435\u043D\u0433\u0435\u0440\u0441\u043A\u0438\u0439 \u2013 \u04121 (Intermediate)",
    "profilelangde": "\u041D\u0435\u043C\u0435\u0446\u043A\u0438\u0439 \u2013 \u04101 (Beginner)",
    "profilecv": "\u0420\u0435\u0437\u044E\u043C\u0435 (\u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 PDF, \u0432 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435):",
    "profilecvua": "<img src=\"icons/flags/ua.svg\" alt=\"Ukrainian\">\u041D\u0430 \u0443\u043A\u0440\u0430\u0438\u043D\u0441\u043A\u043E\u043C",
    "profilecven": "<img src=\"icons/flags/gb.svg\" alt=\"English\">\u041D\u0430 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u043E\u043C",
    "profilecvru": "<img src=\"icons/flags/ru.svg\" alt=\"Russian\">\u041D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C",
    "portfoliotitle": "\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E",
    "visitwebsite": "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0441\u0430\u0439\u0442",
    "itemadaptivity": "\u0410\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C: 320-1920",
    "itemstacklist": "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0438 \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A\u0438",
    "itemgithub": "\u0418\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u043A\u043E\u0434 \u043D\u0430 <i class=\"fab fa-github\"></i>",
    "itemblank": "\u0420\u0430\u0431\u043E\u0442\u0430 \u043D\u0430\u0434 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u043C \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u0435\u0442\u0441\u044F!",
    "portfolioitemencore": "\u0421\u0430\u0439\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0433\u043E \u0442\u0443\u0440\u0430\u0433\u0435\u043D\u0442\u0441\u0442\u0432\u0430 \u0432 \u0423\u043A\u0440\u0430\u0438\u043D\u0435",
    "portfolioitemorange": "\u041F\u043E\u043B\u043D\u043E\u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u0430\u0439\u0442 \u0432\u0435\u0431-\u0441\u0442\u0443\u0434\u0438\u0438 \u0438\u0437 \u0421\u0428\u0410",
    "portfolioitemsparcle": "\u041F\u043E\u043B\u043D\u043E\u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u0430\u0439\u0442 \u043A\u043B\u0438\u043D\u0438\u043D\u0433-\u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438",
    "portfolioitemflags": "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0441 \u0432\u044B\u0431\u043E\u0440\u043E\u043C \u044F\u0437\u044B\u043A\u0430 \u0438 particle.js",
    "portfolioitemski": "\u041F\u043E\u043B\u043D\u043E\u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u0430\u0439\u0442 \u043B\u044B\u0436\u043D\u043E\u0439 \u0448\u043A\u043E\u043B\u044B",
    "portfolioitemtest": "\u0422\u0435\u0441\u0442\u043E\u0432\u043E\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u0435 \u0434\u043B\u044F \u0443\u043A\u0440\u0430\u0438\u043D\u0441\u043A\u043E\u0439 IT-\u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438",
    "portfolioitemrandom": "\u041F\u0440\u043E\u0441\u0442\u043E\u0439 \u0440\u0430\u043D\u0434\u043E\u043C\u0430\u0439\u0437\u0435\u0440 \u043D\u0430 \u0447\u0438\u0441\u0442\u043E\u043C JS",
    "certificatestitle": "\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u044B",
    "certificatesdescr1": "\u041F\u0440\u043E\u0439\u0434\u0435\u043D\u043D\u044B\u0435 \u043A\u0443\u0440\u0441\u044B \u0438 \u0442\u0435\u0441\u0442\u044B \u043D\u0430 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0445 IT-\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430\u0445",
    "certificatesdescr2": "(\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442 \u0434\u043B\u044F \u0442\u043E\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u043F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0435\u0433\u043E \u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B\u044C\u043D\u0443\u044E \u0432\u0435\u0440\u0441\u0438\u044E)",
    "workstudytitle": "\u041A\u0430\u0440\u044C\u0435\u0440\u043D\u044B\u0439 \u043F\u0443\u0442\u044C",
    "workstudywork": "\u041E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B",
    "workdate1": "08/2015 - \u043F\u043E \u0441\u0435\u0439 \u0434\u0435\u043D\u044C",
    "worktitle1": "\u041F\u0435\u0440\u0435\u0432\u043E\u0434\u0447\u0438\u043A",
    "workdescr1": "\u041F\u0435\u0440\u0435\u0432\u0435\u043B \u0431\u043E\u043B\u0435\u0435 30 \u0440\u0435\u0448\u0435\u043D\u0438\u0439 \u0415\u0421\u041F\u0427, 10+ \u0432\u044B\u0432\u043E\u0434\u043E\u0432 \u0412\u0435\u043D\u0435\u0446\u0438\u0430\u043D\u0441\u043A\u043E\u0439 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0438, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0441\u043E\u0442\u043D\u0438 \u0432\u044B\u0432\u043E\u0434\u043E\u0432, \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0439 \u0438 \u0437\u0430\u044F\u0432\u043B\u0435\u043D\u0438\u0439 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u043E\u0432 \u0421\u043E\u0432\u0435\u0442\u0430 \u0415\u0432\u0440\u043E\u043F\u044B;",
    "workdescr2": "\u0423\u0447\u0430\u0441\u0442\u0432\u043E\u0432\u0430\u043B \u0432 \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0435 \u0438 \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438 \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0430 \u0431\u043E\u043B\u0435\u0435 40 \u0437\u0430\u043A\u043E\u043D\u043E\u0432 \u0423\u043A\u0440\u0430\u0438\u043D\u044B, \u0432 \u0442.\u0447. \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u0430\u0442\u0440\u0438\u0432\u0430\u044E\u0449\u0438\u0445 \u0432\u043D\u0435\u0441\u0435\u043D\u0438\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439 \u0432 \u041A\u043E\u043D\u0441\u0442\u0438\u0442\u0443\u0446\u0438\u044E \u0423\u043A\u0440\u0430\u0438\u043D\u044B;",
    "workdescr3": "\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0438\u0440\u043E\u0432\u0430\u043B \u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u043B \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438 \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0447\u0438\u043A\u0430\u043C \u0432 \u0447\u0430\u0441\u0442\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 CAT-\u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u0432 (\u0432 \u0447\u0430\u0441\u0442\u043D\u043E\u0441\u0442\u0438 \u043A\u0430\u0441\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u0438 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0431\u043B\u0435\u043C).",
    "workstudystudy": "\u041E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u0438 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435",
    "almamatername": "\u041A\u0438\u0435\u0432\u0441\u043A\u0438\u0439 \u043F\u043E\u043B\u0438\u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0438\u043D\u0441\u0442\u0438\u0442\u0443\u0442 \u0438\u043C\u0435\u043D\u0438 \u0418\u0433\u043E\u0440\u044F \u0421\u0438\u043A\u043E\u0440\u0441\u043A\u043E\u0433\u043E",
    "almamaterfield": "\u041F\u0435\u0440\u0435\u0432\u043E\u0434/\u0444\u0438\u043B\u043E\u043B\u043E\u0433\u0438\u044F",
    "almamaterdescr": "\u041F\u043E\u043B\u043D\u043E\u0435 \u0432\u044B\u0441\u0448\u0435\u0435 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 (\u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442/\u043C\u0430\u0433\u0438\u0441\u0442\u0440)"
  }
}; // siteTranslate(currentLanguage);
// }

/* harmony default export */ __webpack_exports__["default"] = (translation);

/***/ }),

/***/ "./src/js/modules/translationDB.js":
/*!*****************************************!*\
  !*** ./src/js/modules/translationDB.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function translationDB() {}

/* harmony default export */ __webpack_exports__["default"] = (translationDB);

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/main */ "./src/js/modules/main.js");
/* harmony import */ var _modules_translation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/translation */ "./src/js/modules/translation.js");
/* harmony import */ var _modules_translationDB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/translationDB */ "./src/js/modules/translationDB.js");



window.addEventListener('DOMContentLoaded', function () {
  Object(_modules_main__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_translation__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_modules_translationDB__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map