"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
require("./css/style.css");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// import { useIntl } from "react-intl";

var Pagination = function Pagination(props) {
  var pagesToView = props.pagesToView,
    resultsPerPage = props.resultsPerPage,
    fetchUrl = props.fetchUrl,
    containerIdToRetrieve = props.containerIdToRetrieve,
    templateRow = props.templateRow,
    fieldNames = props.fieldNames,
    recordsAmount = props.recordsAmount,
    fetchAmountUrl = props.fetchAmountUrl,
    linkPagesToShow = props.linkPagesToShow;

  // const translate = useIntl().formatMessage;
  // States
  var _useState = (0, _react.useState)(1),
    _useState2 = _slicedToArray(_useState, 2),
    currentPage = _useState2[0],
    setCurrentPage = _useState2[1];
  var _useState3 = (0, _react.useState)(recordsAmount),
    _useState4 = _slicedToArray(_useState3, 2),
    pages = _useState4[0],
    setPages = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    pagesArray = _useState6[0],
    setPagesArray = _useState6[1];
  var _useState7 = (0, _react.useState)(1),
    _useState8 = _slicedToArray(_useState7, 2),
    currentPagePosition = _useState8[0],
    setPosition = _useState8[1];
  var _useState9 = (0, _react.useState)(2),
    _useState10 = _slicedToArray(_useState9, 2),
    initPage = _useState10[0],
    setInitPage = _useState10[1];

  //const pages = Array.from({length: pagesToView}, (v, k) => k+1);

  var _onClick = function onClick(pageNumber, currentPagePosition) {
    if (pageNumber > pages) return;
    console.log("link to page ".concat(pageNumber, " - ").concat(currentPagePosition));
    setCurrentPage(pageNumber);
    setPosition(currentPagePosition);
    retrieve(pageNumber);
  };
  var definePages = function definePages() {
    if (pages === 0) return;
    if (currentPage > pages) return;
    var init = initPage;
    var middle = Math.ceil(pagesToView / 2);
    var maxIndexToPageRotateLeft = middle - 1; // quando o indice for menor ou igual a este número roda pra esquerda
    var minIndexToPageRotateRight = middle + 1; // quando o índice for maior ou igual a este número roda pra direita

    // console.log("maxIndexToPageRotateLeft", maxIndexToPageRotateLeft)
    // console.log("minIndexToPageRotateRight", minIndexToPageRotateRight)

    // console.log("current page", currentPage)
    // console.log("current position", currentPagePosition)
    // console.log("diference position", pagesToView-currentPagePosition)
    // console.log("pages", pages)
    console.log("pagesArray", pagesArray);
    if (currentPagePosition >= minIndexToPageRotateRight && pages > currentPage + (pagesToView - currentPagePosition)) {
      console.log("rotate right");
      init = init + 1;
    } else if (currentPagePosition <= maxIndexToPageRotateLeft && currentPage - 1 > 1) {
      //&& (currentPage-1 != 0 && currentPage > 1)
      console.log("rotate left");
      init = init - 1;
    }
    setPagesArray(Array.from({
      length: pagesToView
    }, function (v, k) {
      return k + init;
    }));
    setInitPage(init);
  };
  var retrieveAmount = function retrieveAmount() {
    var headers = new Headers();
    var init = {
      method: 'GET',
      headers: headers,
      mode: 'cors',
      cache: 'default'
    };
    fetch(fetchAmountUrl, init).then(function (response) {
      if (response.ok) return response.json();else console.log("erro in request");
    }).then(function (data) {
      setPages(Math.ceil(data / resultsPerPage));
      console.log("quantidade buscada");
      definePages();
    });
  };
  var retrieve = function retrieve(page) {
    var headers = new Headers();
    var init = {
      method: 'GET',
      headers: headers,
      mode: 'cors',
      cache: 'default'
    };
    var queryString = "?page=" + page + "&resultsPerPage=" + resultsPerPage;
    fetch(fetchUrl + queryString, init).then(function (response) {
      if (response.ok) return response.json();else console.log("erro in request");
    }).then(function (data) {
      handleResponse(data);
    });
  };
  var handleResponse = function handleResponse(data) {
    var container = document.getElementById(containerIdToRetrieve);
    container.innerHTML = "";
    data.map(function (item) {
      // console.log(item[fieldNames[0]])
      // console.log(item[fieldNames[1]])
      var div = document.createElement("div");
      div.append(item.name);
      container.appendChild(div);
    });
  };

  // Effects

  (0, _react.useEffect)(function () {
    console.log('first effect');
    if (!recordsAmount) {
      console.log('buscando quantidade');
      retrieveAmount();
    } else {
      definePages();
    }
  }, [pages]);
  (0, _react.useEffect)(function () {
    console.log('second effect');
    retrieve(1);
  });

  // Effect to pages
  (0, _react.useEffect)(function () {
    console.log("definindo paginas");
    definePages();
  }, [currentPage]);
  return /*#__PURE__*/_react.React.createElement("div", {
    className: ""
  }, /*#__PURE__*/_react.React.createElement("ul", {
    className: "pages-container"
  }, /*#__PURE__*/_react.React.createElement("li", {
    key: "ant",
    className: "page-number"
  }, /*#__PURE__*/_react.React.createElement("a", {
    href: "#",
    className: "page-link",
    onClick: function onClick() {
      _onClick(currentPage - 1, pagesArray.indexOf(currentPage - 1));
    }
  }, "Anterior")), /*#__PURE__*/_react.React.createElement("li", {
    key: "ini",
    className: "page-number ".concat(1 == currentPage ? 'current' : '')
  }, /*#__PURE__*/_react.React.createElement("a", {
    href: "#",
    className: "page-link",
    onClick: function onClick() {
      _onClick(1, 1);
    }
  }, "1")), pagesArray[0] > 2 ? /*#__PURE__*/_react.React.createElement("li", {
    className: "page-number"
  }, /*#__PURE__*/_react.React.createElement("a", {
    href: "#",
    className: "page-link",
    onClick: function onClick() {
      _onClick("");
    }
  }, "...")) : '', pagesArray.map(function (pageNumber, index) {
    if (pageNumber != 1 && pageNumber < pages) return /*#__PURE__*/_react.React.createElement("li", {
      key: pageNumber,
      className: "page-number ".concat(pageNumber == currentPage ? 'current' : '')
    }, /*#__PURE__*/_react.React.createElement("a", {
      href: "#",
      className: "page-link",
      onClick: function onClick() {
        _onClick(pageNumber, index + 1);
      }
    }, pageNumber));
  }), pagesArray[pagesArray.length - 1] < pages ? /*#__PURE__*/_react.React.createElement("li", {
    className: "page-number"
  }, /*#__PURE__*/_react.React.createElement("a", {
    href: "#",
    className: "page-link",
    onClick: function onClick() {
      _onClick("");
    }
  }, "...")) : '', /*#__PURE__*/_react.React.createElement("li", {
    key: "fim",
    className: "page-number ".concat(pages == currentPage ? 'current' : '')
  }, /*#__PURE__*/_react.React.createElement("a", {
    href: "#",
    className: "page-link",
    onClick: function onClick() {
      _onClick(pages);
    }
  }, pages)), /*#__PURE__*/_react.React.createElement("li", {
    key: "prox",
    className: "page-number"
  }, /*#__PURE__*/_react.React.createElement("a", {
    href: "#",
    className: "page-link",
    onClick: function onClick() {
      _onClick(currentPage + 1, pagesArray.indexOf(currentPage + 1));
    }
  }, "Pr\xF3ximo"))), /*#__PURE__*/_react.React.createElement("div", null, "Total de p\xE1ginas: ", pages));
};
Pagination.defaultProps = {
  pagesToView: 5,
  resultsPerPage: 10,
  fieldNames: ["id", "name"],
  recordsAmount: 0
};
var _default = Pagination;
exports.default = _default;