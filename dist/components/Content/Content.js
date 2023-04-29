"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _About = _interopRequireDefault(require("../../views/About"));
var _Calculadora = _interopRequireDefault(require("../../views/Calculadora"));
var _AlphabeticBarPage = _interopRequireDefault(require("../../views/AlphabeticBarPage"));
var _Pagination = _interopRequireDefault(require("../../components/Pagination"));
var _MapaCalorPage = _interopRequireDefault(require("../../views/MapaCalorPage"));
var _MousePointPage = _interopRequireDefault(require("../../views/MousePointPage"));
var _ZoomGridPage = _interopRequireDefault(require("../../views/ZoomGridPage"));
var _Home = _interopRequireDefault(require("../../views/Home"));
require("./content.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Content = function Content() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "content-container"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/about"
  }, /*#__PURE__*/_react.default.createElement(_About.default, null)), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/"
  }, /*#__PURE__*/_react.default.createElement(_Home.default, null)), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/calculadora"
  }, /*#__PURE__*/_react.default.createElement(_Calculadora.default, null)), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/alphabeticbar"
  }, /*#__PURE__*/_react.default.createElement(_AlphabeticBarPage.default, null)), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/pagination"
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "myContainer"
  }), /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    containerIdToRetrieve: "myContainer",
    fetchUrl: "http://localhost:3002/getNames",
    fetchAmountUrl: "http://localhost:3002/getNamesAmount"
  })), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/mapacalor"
  }, /*#__PURE__*/_react.default.createElement(_MapaCalorPage.default, null)), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/mousepoint"
  }, /*#__PURE__*/_react.default.createElement(_MousePointPage.default, null)), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/zoomgrid"
  }, /*#__PURE__*/_react.default.createElement(_ZoomGridPage.default, null))));
};
var _default = Content;
exports.default = _default;