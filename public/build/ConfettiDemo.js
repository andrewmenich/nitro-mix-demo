(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ConfettiDemo"],{

/***/ "./src/js/components/ConfettiDemo.js":
/*!*******************************************!*\
  !*** ./src/js/components/ConfettiDemo.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var vm = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  el: "#confetti",
  components: {
    'confetti': function confetti() {
      return Promise.all(/*! import() | confetti */[__webpack_require__.e("vendors~confetti"), __webpack_require__.e("confetti")]).then(__webpack_require__.bind(null, /*! ../vue/Confetti.vue */ "./src/js/vue/Confetti.vue"));
    }
  },
  data: {},
  methods: {},
  mounted: function mounted() {}
});
/* harmony default export */ __webpack_exports__["default"] = (vm);

/***/ })

}]);
//# sourceMappingURL=ConfettiDemo.js.map