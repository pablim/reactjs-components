"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeAccents = removeAccents;
function removeAccents(text) {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}