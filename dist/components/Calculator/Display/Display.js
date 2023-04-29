"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Display;
var _react = _interopRequireDefault(require("react"));
require("./display.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Display(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "display"
  }, props.value);
}