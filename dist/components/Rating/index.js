"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rating = Rating;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Icon = require("../Icon");
var _assets = require("@cotabest/components/stories/Icon/assets");
var _RatingModule = _interopRequireDefault(require("./Rating.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Rating(_ref) {
  var range = _ref.range,
    score = _ref.score,
    scoreVisible = _ref.scoreVisible,
    onChange = _ref.onChange;
  var container = _RatingModule.default.container,
    scoreText = _RatingModule.default.scoreText,
    stars = _RatingModule.default.stars,
    star = _RatingModule.default.star,
    disableStar = _RatingModule.default.disableStar;
  var defineInitialScore = function defineInitialScore() {
    var initalScore = 0;
    if (score >= 0) initalScore = score > range ? range : score;
    return initalScore;
  };
  var _useState = (0, _react.useState)(defineInitialScore()),
    _useState2 = _slicedToArray(_useState, 2),
    newScore = _useState2[0],
    setNewScore = _useState2[1];
  var _onClick = function onClick(value, e) {
    e.preventDefault();
    if (onChange) {
      setNewScore(value);
      onChange();
    }
  };
  var Star = function Star(_ref2) {
    var rating = _ref2.rating,
      checked = _ref2.checked;
    return /*#__PURE__*/_react.default.createElement("a", {
      "data-testid": "star",
      href: "#",
      className: onChange ? '' : ' ' + disableStar,
      onClick: function onClick(e) {
        return _onClick(rating, e);
      },
      "data-checked": checked ? checked : false
    }, checked ? /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
      icon: _assets.StarChecked,
      className: star
    }) : /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
      icon: _assets.Star,
      className: star
    }));
  };
  var defineRating = function defineRating() {
    var stars = [];
    for (var i = 0; i < range; i++) {
      if (i < newScore) {
        stars.push( /*#__PURE__*/_react.default.createElement(Star, {
          key: i,
          rating: i + 1,
          checked: true
        }));
      } else {
        stars.push( /*#__PURE__*/_react.default.createElement(Star, {
          key: i,
          rating: i + 1
        }));
      }
    }
    return stars;
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: container
  }, scoreVisible && /*#__PURE__*/_react.default.createElement("div", {
    "data-testid": "show-score",
    className: scoreText
  }, newScore), /*#__PURE__*/_react.default.createElement("div", {
    className: stars
  }, defineRating()));
}
Text.propTypes = {
  range: _propTypes.default.number,
  score: _propTypes.default.number,
  scoreVisible: _propTypes.default.bool,
  onChange: _propTypes.default.func
};
Text.defaultProps = {
  range: 5,
  score: 0,
  scoreVisible: false,
  onChange: undefined
};