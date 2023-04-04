/*!-----------------------------------------------------------------
    Name: Skylith - Viral & Creative Multipurpose HTML Template
    Version: 1.2.1
    Author: nK, unvab
    Website: https://nkdev.info/, http://unvab.com/
    Purchase: https://1.envato.market/MVW53
    Support: https://nk.ticksy.com/
    License: You must have a valid license purchased only from ThemeForest (the above link) in order to legally use the theme for your project.
    Copyright 2023.
-------------------------------------------------------------------*/
    /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "options": function() { return /* binding */ options; }
/* harmony export */ });
/*------------------------------------------------------------------

  Theme Options

-------------------------------------------------------------------*/
var options = {
  enableShortcuts: true,
  scrollToAnchorSpeed: 700,
  parallaxSpeed: 0.8,
  templates: {
    sliderAuthor: 'Author: {{name}}',
    navbarBackItem: 'Back',
    plainVideoIcon: '<span class="nk-video-icon"><span><span class="nk-play-icon"></span></span></span>',
    plainVideoLoadIcon: '<div class="nk-video-icon nk-video-icon-loading"></div>',
    fullscreenVideoClose: '<span class="nk-icon-close"></span>',
    twitter: "<div class=\"nk-twitter\">\n                <span class=\"nk-twitter-icon fa fa-twitter\"></span>\n                <div class=\"nk-twitter-text\">\n                   {{tweet}}\n                </div>\n            </div>",
    twitterLoadingText: 'Loading...',
    twitterFailText: 'Failed to fetch data',
    twitterApiPath: 'php/twitter/tweet.php'
  },
  shortcuts: {
    closeFullscreenVideo: 'esc',
    postScrollToComments: 'c',
    toggleSideLeftNavbar: 'alt+l',
    openSideLeftNavbar: '',
    closeSideLeftNavbar: 'esc',
    toggleSideRightNavbar: 'alt+r',
    openSideRightNavbar: '',
    closeSideRightNavbar: 'esc',
    toggleFullscreenNavbar: 'alt+f',
    openFullscreenNavbar: '',
    closeFullscreenNavbar: 'esc',
    toggleLeftNavbar: 'alt+n',
    openLeftNavbar: '',
    closeLeftNavbar: 'esc'
  }
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
/* harmony import */ var _parts_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

if (typeof window.Skylith !== 'undefined') {
  window.Skylith.setOptions(_parts_options__WEBPACK_IMPORTED_MODULE_0__.options);
  window.Skylith.init();
}
}();
/******/ })()
;
//# sourceMappingURL=skylith-init.js.map
