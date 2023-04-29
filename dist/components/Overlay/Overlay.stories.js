"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CotabestMobile = exports.CotabestDesktop = exports.AtacadaoMobile = exports.AtacadaoDesktop = void 0;
var _react = _interopRequireDefault(require("react"));
var _ = require(".");
var _assets = require("@cotabest/components/stories/Icon/assets");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: 'Overlay',
  component: _.Overlay
};
exports.default = _default;
function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_.Overlay, args);
}
var commonArgs = {
  visible: true,
  onClick: function onClick() {
    console.log('clicked');
  }
};
var AtacadaoMobile = Template.bind({});
exports.AtacadaoMobile = AtacadaoMobile;
AtacadaoMobile.args = commonArgs;
var AtacadaoDesktop = Template.bind({});
exports.AtacadaoDesktop = AtacadaoDesktop;
AtacadaoDesktop.args = commonArgs;
var CotabestMobile = Template.bind({});
exports.CotabestMobile = CotabestMobile;
CotabestMobile.args = commonArgs;
var CotabestDesktop = Template.bind({});
exports.CotabestDesktop = CotabestDesktop;
CotabestDesktop.args = commonArgs;