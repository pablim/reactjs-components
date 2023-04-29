"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Button;
var _react = _interopRequireDefault(require("react"));
require("./button.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Button(props) {
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "button ".concat(props.className),
    onClick: function onClick() {
      return props.click(props.text);
    }
  }, props.text);
}