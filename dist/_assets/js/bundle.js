/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "polyfill": function() { return /* binding */ polyfill; }
/* harmony export */ });
var polyfill = function polyfill() {
  //Reference:
  //reeversedev.com/polyfill-for-foreach-map-filter-reduce
  // Polyfills
  // Foreach function
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  } // Map function


  Array.prototype.map = function (callback) {
    var arr = [];

    for (var i = 0; i < this.length; i++) {
      arr.push(callback(this[i], i, this));
    }

    return arr;
  }; // Filter function


  Array.prototype.filter = function (callback, context) {
    var arr = [];

    for (var i = 0; i < this.length; i++) {
      if (callback.call(context, this[i], i, this)) {
        arr.push(this[i]);
      }
    }

    return arr;
  }; // Reduce function


  Array.prototype.reduce = function (callback, initialValue) {
    var accumulator = initialValue === undefined ? undefined : initialValue;

    for (var i = 0; i < this.length; i++) {
      if (accumulator !== undefined) {
        accumulator = callback.call(undefined, accumulator, this[i], i, this);
      } else {
        accumulator = this[i];
      }
    }

    return accumulator;
  };
};

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "smoothScroll": function() { return /* binding */ smoothScroll; }
/* harmony export */ });
var smoothScroll = function smoothScroll() {
  $('a[href^="#"]').on("click", function (e) {
    var speed = 600;
    var href = $(e.currentTarget).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("body, html").delay(200).animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
};

/***/ })
/******/ 	]);
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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import { viewport } from './modules/_viewport';
// import { btnClickFunc } from './modules/_btnClickFunc';
// import { getSearchParams } from './modules/_getSearchParams';
// import { accordion } from './modules/_accordion';
// import { backToTop } from './modules/_backToTop';
// import { checkView } from './modules/_checkView';
// import { customSelect } from './modules/_customSelect';
// import { modal } from './modules/_modal';

 // import { stickyHeader } from './modules/_stickyHeader';
// import { swiperSlider } from './modules/_swiperSlider';
// import { wowEffects } from './modules/_wowEffects';
// import { smoothScrollVs } from './modules/_smoothScrollVs';
// import { sampleArray } from './modules/_sampleArray';

$(function () {
  (0,_modules_polyfill__WEBPACK_IMPORTED_MODULE_0__.polyfill)();
  (0,_modules_smoothScroll__WEBPACK_IMPORTED_MODULE_1__.smoothScroll)(); // smoothScrollVs()
  // sampleArray();
  // viewport();
  // btnClickFunc();
  // wowEffects();
  // accordion();
  // swiperSlider();
  // customSelect();
  // backToTop();
  // modal();
}); // $(window).on('load resize scroll', function () {
//   checkView();
//   stickyHeader();
// });

var app = Vue.createApp({
  data: function data() {
    return _defineProperty({
      items: null,
      keyword: '',
      message: '',
      isLarge: true,
      hasError: true,
      largeClass: 'large',
      dangerClass: 'text-danger',
      classObject: {
        large: true,
        'text-danger': true
      },
      largeClass2: {
        'large': true,
        'bg-gray': true
      }
    }, "dangerClass", {
      'text-danger': true
    });
  },
  watch: {
    keyword: function keyword(newKeyword, oldKeyword) {
      // console.log(newKeyword, oldKeyword)
      this.message = 'Waiting for you to stop typing...';
      this.debouncedGetAnswer();
    }
  },
  mounted: function mounted() {
    // this.keyword = 'Javascript'
    // this.getAnswer()
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000);
  },
  methods: {
    getAnswer: function getAnswer() {
      if (this.keyword === '') {
        console.log('karmaoji');
        this.items = null;
        return;
      }

      this.message = 'Loading...';
      var vm = this;
      var params = {
        page: 1,
        per_page: 20,
        query: this.key
      };
      axios.get('https://qiita.com/api/v2/items', {
        params: params
      }).then(function (response) {
        vm.items = response.data;
      }).catch(function (error) {
        vm.message = 'Error!' + error;
      }).finally(function () {
        vm.message = '';
      });
    }
  }
});
app.mount('#app');
var arry1 = ['apple', 'orange', 'strawberry', 'orange', 'banana'];
var arry2 = ['melon', 'peach'];
console.log(arry1);
console.log(arry2);
console.log(arry1.concat(arry2));
console.log(arry1.length);
console.log(arry2.length);
console.log(arry1.slice(1));
console.log(Array.isArray(arry1));
console.log(arry1.toString());
console.log(arry1.indexOf('orange'));
console.log(arry1.lastIndexOf('orange'));
console.log(arry1.slice(0, 3));
console.log(arry1);
console.log(arry2.push('grape'));
console.log(arry2);
console.log(arry2.shift()); // 配列のforEachメソッド

var data = [2, 3, 4, 5];
data.forEach(function (value, index, array) {
  console.log(value * value);
  console.log(array);
  console.log(index);
}); // 配列のmapメソッドは結果を戻り値で返す

var data2 = [2, 3, 5, 7];
var result = data2.map(function (value, index, array) {
  return value * value; // console.log(value);
});
console.log(result); // 配列のsomeメソッドは真偽値を返す

var data3 = [4, 9, 16, 25];
data3.some(function (value, index, array) {
  return value % 3 === 0;
});

if (result) {
  console.log('さんの倍数が見つかりました。');
} else {
  console.log('見つかりませんでした。');
} //配列のfliterメソッドは結果を配列に書き戻す


var data4 = [4, 9, 16, 25];
var dataResult = data4.filter(function (value, index, array) {
  return value % 2 === 1;
});
console.log(dataResult); //連想配列を操作するmapメソッド

var m = new Map();
m.set('dog', 'わんわん');
m.set('cat', 'にゃー');
m.set('mouse', 'チュー');
console.log(m.size);
console.log(m.get('dog'));
console.log(m.has('cat'));

var _iterator = _createForOfIteratorHelper(m.keys()),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var key = _step.value;
    console.log(key);
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

var _iterator2 = _createForOfIteratorHelper(m.values()),
    _step2;

try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    var value = _step2.value;
    console.log(value);
  }
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}

var _iterator3 = _createForOfIteratorHelper(m),
    _step3;

try {
  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
    var _step3$value = _slicedToArray(_step3.value, 2),
        _key = _step3$value[0],
        _value = _step3$value[1];

    console.log(_value);
  }
} catch (err) {
  _iterator3.e(err);
} finally {
  _iterator3.f();
}

m.delete('dog');
console.log(m.size);
m.clear();
console.log(m.size);
var obj = new Object();
var dat = new Date();
var ary = ['prototype.js', 'jQuery', 'Yahoo! UI'];
var num = 10;
console.log(obj.toString());
console.log(obj.valueOf());
console.log(dat.toString());
console.log(dat.valueOf());
console.log(ary.toString());
console.log(ary.valueOf());
console.log(num.toString());
console.log(num.valueOf());
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map