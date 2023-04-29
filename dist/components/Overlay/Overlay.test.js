"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _react = require("@testing-library/react");
var _testingReact = require("@storybook/testing-react");
var stories = _interopRequireWildcard(require("./Overlay.stories"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var _composeStories = (0, _testingReact.composeStories)(stories),
  AtacadaoMobile = _composeStories.AtacadaoMobile,
  AtacadaoDesktop = _composeStories.AtacadaoDesktop,
  CotabestMobile = _composeStories.CotabestMobile,
  CotabestDesktop = _composeStories.CotabestDesktop;
describe('Rating Component', function () {
  describe('Atacadão', function () {
    describe('Mobile', function () {
      test('renders overlay', function () {
        var _render = (0, _react.render)( /*#__PURE__*/React.createElement(AtacadaoMobile, null)),
          container = _render.container;
        expect(container).toMatchSnapshot();
      });
    });
    describe('Desktop', function () {
      test('renders overlay', function () {
        var _render2 = (0, _react.render)( /*#__PURE__*/React.createElement(AtacadaoDesktop, null)),
          container = _render2.container;
        expect(container).toMatchSnapshot();
      });
    });
  });
  describe('Cotabest', function () {
    describe('Mobile', function () {
      test('renders overlay', function () {
        var _render3 = (0, _react.render)( /*#__PURE__*/React.createElement(CotabestMobile, null)),
          container = _render3.container;
        expect(container).toMatchSnapshot();
      });
      test('shold click on overlay', function () {
        (0, _react.render)( /*#__PURE__*/React.createElement(CotabestMobile, null));
        var overlay = _react.screen.getByTestId('overlay');
        _react.fireEvent.click(overlay);
      });
    });
    describe('Desktop', function () {
      test('renders overlay', function () {
        var _render4 = (0, _react.render)( /*#__PURE__*/React.createElement(CotabestDesktop, null)),
          container = _render4.container;
        expect(container).toMatchSnapshot();
      });
    });
  });
});