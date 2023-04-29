"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./card.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Card = function Card(props) {
  return /*#__PURE__*/_react.default.createElement("div", null, props.children);
};
var _default = Card;
exports.default = _default;