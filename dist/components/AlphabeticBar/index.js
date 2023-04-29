"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styleModule = _interopRequireDefault(require("./style.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Letter = function Letter(_ref) {
  var letter = _ref.letter,
    onClick = _ref.onClick;
  var upperLetter = letter.toUpperCase();
  var handleClick = function handleClick(e) {
    var listElement = document.getElementById('list');
    var firstNameOfLetterElement = listElement.querySelector('#' + upperLetter);
    listElement.scrollTop = firstNameOfLetterElement.offsetTop;
    onClick(upperLetter);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_styleModule.default.char, " "),
    "data-letter": "{letter}"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.letter,
    onClick: handleClick
  }, upperLetter), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.tooltiptext
  }, upperLetter));
};
var List = function List(_ref2) {
  var list = _ref2.list;
  var listItems = list.map(function (item, index, prevArr) {
    if (index - 1 >= 0 && prevArr[index - 1].charAt(0) === item.charAt(0)) {
      return /*#__PURE__*/_react.default.createElement("div", {
        key: item
      }, item);
    }
    return /*#__PURE__*/_react.default.createElement("div", {
      id: item.charAt(0),
      key: item
    }, item);
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "list",
    className: _styleModule.default.list
  }, listItems);
};
var AlphabeticBarSearch = function AlphabeticBarSearch(_ref3) {
  var list = _ref3.list;
  var alphabetcArray = "abcdefghijklmnopqrstuvwxyz".split("");
  var sortedList = list.sort();
  var onClickLetter = function onClickLetter(letter) {
    console.log('click in ' + letter);
  };
  var letters = alphabetcArray.map(function (letter) {
    return /*#__PURE__*/_react.default.createElement(Letter, {
      key: letter,
      letter: letter,
      onClick: onClickLetter
    });
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.container
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(List, {
    list: sortedList
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.lettersContainer
  }, letters)));
};
var _default = AlphabeticBarSearch;
exports.default = _default;