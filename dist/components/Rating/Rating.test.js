"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _react = require("@testing-library/react");
var _testingReact = require("@storybook/testing-react");
var stories = _interopRequireWildcard(require("./Rating.stories"));
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
      test('renders text', function () {
        var _render = (0, _react.render)( /*#__PURE__*/React.createElement(AtacadaoMobile, null)),
          container = _render.container;
        expect(container).toMatchSnapshot();
      });
    });
    describe('Desktop', function () {
      test('renders rating', function () {
        var _render2 = (0, _react.render)( /*#__PURE__*/React.createElement(AtacadaoDesktop, null)),
          container = _render2.container;
        expect(container).toMatchSnapshot();
      });
      test('possibility rating value 1', function () {
        var score = 1;
        var range = 5;
        (0, _react.render)( /*#__PURE__*/React.createElement(AtacadaoDesktop, {
          onChange: function onChange() {},
          scoreVisible: true,
          range: range
        }));
        var stars = _react.screen.getAllByTestId('star');
        var currentStarElement = stars[score - 1];
        (0, _react.act)(function () {
          currentStarElement.click();
        });

        // Verificar se o texto corresponde as stars marcadas
        expect(_react.screen.getByText(String(score))).toBeTruthy();
      });
      test('possibility rating value 2', function () {
        var score = 2;
        (0, _react.render)( /*#__PURE__*/React.createElement(AtacadaoDesktop, {
          onChange: function onChange() {},
          scoreVisible: true
        }));
        var stars = _react.screen.getAllByTestId('star');
        var currentStarElement = stars[score - 1];
        var nextStarElement = stars[score + 1];
        (0, _react.act)(function () {
          currentStarElement.click();
        });
        expect(_react.screen.getByText(String(score))).toBeTruthy();
        expect(currentStarElement.getAttribute('data-checked')).toBeTruthy();
        expect(nextStarElement.getAttribute('data-checked')).toBe('false');
      });
      test('is score visible ', function () {
        var score = 1;
        (0, _react.render)( /*#__PURE__*/React.createElement(AtacadaoDesktop, {
          scoreVisible: true,
          score: score
        }));
        expect(_react.screen.getByText(String(score))).toBeTruthy();
      });
      test('score is not visible ', function () {
        var score = 1;
        (0, _react.render)( /*#__PURE__*/React.createElement(AtacadaoDesktop, {
          score: score
        }));
        var scoreContainer = _react.screen.findByTestId('show-score');
        expect(scoreContainer.firstChild).toBeUndefined();
      });
      test('check star quantity', function () {
        var range = 5;
        (0, _react.render)( /*#__PURE__*/React.createElement(AtacadaoDesktop, {
          onChange: function onChange() {},
          scoreVisible: true,
          range: range
        }));
        var stars = _react.screen.getAllByTestId('star');

        // Verifica se a quantidade de stars é igual ao range passado
        expect(stars.length).toBe(range);
      });
      test('check star checked', function () {
        var score = 1;
        var range = 5;
        (0, _react.render)( /*#__PURE__*/React.createElement(AtacadaoDesktop, {
          onChange: function onChange() {},
          scoreVisible: true,
          range: range
        }));
        var stars = _react.screen.getAllByTestId('star');
        var currentStarElement = stars[score - 1];
        var nextStarElement = stars[score + 1];
        (0, _react.act)(function () {
          currentStarElement.click();
        });

        // Verifica se a star está marcada
        expect(currentStarElement.getAttribute('data-checked')).toBeTruthy();
        // Verifica se a proxima star está desmarcada
        expect(nextStarElement.getAttribute('data-checked')).toBe('false');

        //expect(currentStarElement.querySelector('img').src).toBe('http://localhost/StarChecked.svg');
      });

      test('check score largest then range', function () {
        var score = 8;
        var range = 5;
        (0, _react.render)( /*#__PURE__*/React.createElement(AtacadaoDesktop, {
          onChange: function onChange() {},
          scoreVisible: true,
          score: score,
          range: range
        }));
        var stars = _react.screen.getAllByTestId('star');

        // Verifica se a quantidade de stars é igual ao range passado
        expect(stars.length).toBe(range);
      });
    });
  });
  describe('Cotabest', function () {
    describe('Mobile', function () {
      test('renders text', function () {
        var _render3 = (0, _react.render)( /*#__PURE__*/React.createElement(CotabestMobile, null)),
          container = _render3.container;
        expect(container).toMatchSnapshot();
      });
    });
    describe('Desktop', function () {
      test('renders text', function () {
        var _render4 = (0, _react.render)( /*#__PURE__*/React.createElement(CotabestDesktop, null)),
          container = _render4.container;
        expect(container).toMatchSnapshot();
      });
    });
  });
});