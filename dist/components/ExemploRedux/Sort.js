"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _Card = _interopRequireDefault(require("./Card"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Sort = function Sort(props) {
  var min = props.min,
    max = props.max;
  var aleatorio = parseInt(Math.random() * (max - min)) + min;
  return /*#__PURE__*/_react.default.createElement(_Card.default, null, /*#__PURE__*/_react.default.createElement("h1", null, "Aleat\xF3rio"), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("span", null, "Resultado:"), /*#__PURE__*/_react.default.createElement("strong", null, aleatorio))));
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max
  };
};
var _default = (0, _reactRedux.connect)(mapStateToProps)(Sort);
exports.default = _default;