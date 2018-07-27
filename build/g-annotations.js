(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.gAnnotations = global.gAnnotations || {})));
}(this, function (exports) { 'use strict';

  function foo() {
    return 42;
  };

  exports.foo = foo;

  Object.defineProperty(exports, '__esModule', { value: true });

}));