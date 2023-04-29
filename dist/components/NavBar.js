"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _Navbar = _interopRequireDefault(require("react-bootstrap/Navbar"));
var _Nav = _interopRequireDefault(require("react-bootstrap/Nav"));
var _Form = _interopRequireDefault(require("react-bootstrap/Form"));
var _Container = _interopRequireDefault(require("react-bootstrap/Container"));
var _Dropdown = _interopRequireDefault(require("react-bootstrap/Dropdown"));
var _Stack = _interopRequireDefault(require("react-bootstrap/Stack"));
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _reactRouterDom = require("react-router-dom");
var _Template = _interopRequireDefault(require("../../templates/Template2"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var NavBarApp = function NavBarApp(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: '64px'
    }
  }, /*#__PURE__*/_react.default.createElement(_Navbar.default, {
    bg: "light",
    fixed: "top",
    style: {
      padding: '8px',
      height: '64px'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    onClick: function onClick() {
      return props.visibleSidebar(function (visible) {
        return !visible;
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faBars
  })), /*#__PURE__*/_react.default.createElement(_Navbar.default.Brand, {
    href: "#",
    className: "ms-2"
  }, "Working Logic"), /*#__PURE__*/_react.default.createElement(_Container.default, {
    className: "justify-content-center"
  }, /*#__PURE__*/_react.default.createElement(_Stack.default, {
    gap: 2,
    direction: 'horizontal'
  }, /*#__PURE__*/_react.default.createElement(_Form.default, {
    className: "d-flex gap-0 column-gap-3"
  }, /*#__PURE__*/_react.default.createElement(_Form.default.Control, {
    type: "search",
    placeholder: "Search",
    className: "me-2",
    "aria-label": "Search"
  }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    variant: "outline-success"
  }, "Search")), /*#__PURE__*/_react.default.createElement(_Dropdown.default, null, /*#__PURE__*/_react.default.createElement(_Dropdown.default.Toggle, {
    variant: "success",
    id: "dropdown-basic"
  }, "Templates"), /*#__PURE__*/_react.default.createElement(_Dropdown.default.Menu, null, /*#__PURE__*/_react.default.createElement(_Dropdown.default.Item, {
    href: "/"
  }, "Template 1"), /*#__PURE__*/_react.default.createElement(_Dropdown.default.Item, {
    href: "/template2"
  }, "Template 2"))))), /*#__PURE__*/_react.default.createElement(_Nav.default, null, /*#__PURE__*/_react.default.createElement(_Nav.default.Link, {
    href: "#home"
  }, "Home"), /*#__PURE__*/_react.default.createElement(_Nav.default.Link, {
    href: "#link"
  }, "Link"))));
};
var _default = NavBarApp;
exports.default = _default;