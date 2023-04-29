"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keyCodes = exports.keyChecker = void 0;
var keyCodes = {
  arrowLeft: 37,
  arrowRight: 39,
  arrowUp: 38,
  arrowDown: 40
};
exports.keyCodes = keyCodes;
var keyChecker = function keyChecker(keyBoardEvent, keysMatchArray) {
  if (keysMatchArray.find(function (item) {
    return item == keyBoardEvent.keyCode;
  })) return true;
};
exports.keyChecker = keyChecker;