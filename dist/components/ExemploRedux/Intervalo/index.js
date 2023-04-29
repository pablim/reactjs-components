"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _Card = _interopRequireDefault(require("../Card"));
var _numeros = require("../../../store/actions/numeros");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Intervalo = function Intervalo(props) {
  var min = props.min,
    max = props.max;
  return /*#__PURE__*/_react.default.createElement(_Card.default, null, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("strong", null, "M\xEDnimo"), /*#__PURE__*/_react.default.createElement("input", {
    type: "number",
    value: min,
    onChange: function onChange(e) {
      return props.onChangeMin(+e.target.value);
    }
  })), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("strong", null, "M\xE1ximo"), /*#__PURE__*/_react.default.createElement("input", {
    type: "number",
    value: max,
    onChange: function onChange(e) {
      return props.onChagneMax(+e.target.value);
    }
  })));
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max
  };
};
var mapDispactchToPorps = function mapDispactchToPorps(dispatch) {
  return {
    onChangeMin: function onChangeMin(novoNumero) {
      // action creator -> action
      var action = (0, _numeros.alterarNumeroMinimo)(novoNumero);
      dispatch(action);
    },
    onChagneMax: function onChagneMax(novoNumero) {
      var action = (0, _numeros.alterarNumeroMaximo)(novoNumero);
      dispatch(action);
    }
  };
};
var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispactchToPorps)(Intervalo);
exports.default = _default;