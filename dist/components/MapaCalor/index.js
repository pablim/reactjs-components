"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
var HeatMap = function HeatMap(_ref) {
  _objectDestructuringEmpty(_ref);
  var matrizColors = [];
  var colorPoint = function colorPoint(fatorSeguranca) {
    /* var h = (1.0 - fatorSeguranca) * 240
    return "hsl(" + h + ", 100%, 50%)"; */

    if (fatorSeguranca >= 2.5) {
      // fatorSeguranca: Abaixo de 1.5 vermelho PERIGO. Acima azul ESTÁVEL
      return '#3F55A5';
    } else if (fatorSeguranca >= 2 && fatorSeguranca < 2.5) {
      return '#7CB2D4';
    } else if (fatorSeguranca >= 1.5 && fatorSeguranca < 2) {
      return '#BADFED';
    } else if (fatorSeguranca >= 1 && fatorSeguranca < 1.5) {
      return '#FED88C';
    } else if (fatorSeguranca >= 0.5 && fatorSeguranca < 1) {
      return '#F77F4B';
    } else if (fatorSeguranca >= 0 && fatorSeguranca < 0.5) {
      return '#E04730';
    } else if (fatorSeguranca < 0) {
      return '#A50026';
    }
  };

  // const pontosRedimensionados = useMemo(() => {
  //     return analisePontos.map((ponto) => ({
  //         y: responsiveHeight - canvasOffset - ponto.coordY * escala,
  //         x: ponto.coordX * escala + canvasOffset,
  //         value: ponto.fatorSeguranca,
  //         color: colorPoint(ponto.fatorSeguranca)
  //     }));
  // }, [analisePontos, canvasOffset, responsiveHeight, escala]);

  // const getWrappingColor = (linha, coluna, position) => {
  //     let arr = []
  //     if (linha !== 0 && linha !== (spaceY - 1) && coluna !== 0 && coluna !== (spaceX - 1)) {
  //         //Em cima Esquerda
  //         arr.push(pontosRedimensionados[position - spaceY + 1].color);
  //         //Em cima
  //         arr.push(pontosRedimensionados[position + 1].color)
  //         //Em cima direita
  //         arr.push(pontosRedimensionados[position + spaceY + 1].color)

  //         //Esquerda
  //         arr.push(pontosRedimensionados[position - spaceY].color)
  //         //Direita
  //         arr.push(pontosRedimensionados[position + spaceY].color)

  //         //Embaixo esquerda
  //         arr.push(pontosRedimensionados[position - spaceY - 1].color)
  //         //Embaixo
  //         arr.push(pontosRedimensionados[position - 1].color)
  //         //Embaixo direita
  //         arr.push(pontosRedimensionados[position + spaceY - 1].color)
  //     }
  //     return arr;
  // }

  var applyColors = function applyColors() {
    debugger;
    //console.log('pontosRedimensionados', pontosRedimensionados)
    matrizColors.map(function (item, index) {
      console.log(item, index);
    });
  };
  var defineMatrizColors = function defineMatrizColors() {
    //let matrizColors = [];

    for (var i = 0; i = 3; i++) {
      var linesColor = [];
      for (var j = 0; j = 3; j++) {
        linesColor.push({
          color: i + "," + j,
          wrappingColor: []
        });
      }
      matrizColors.push(linesColor);
    }
  };
  var teste = function teste() {
    applyColors();
  };
  (0, _react.useEffect)(function () {
    defineMatrizColors();
    console.log(matrizColors);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, matrizColors.map(function (linhas, idx) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: idx,
      style: {
        display: 'flex'
      }
    }, linhas.map(function (obj, num) {
      return /*#__PURE__*/_react.default.createElement("div", {
        key: num,
        style: {
          minHeight: 20,
          minWidth: 20,
          background: obj.color
        }
      });
    }), /*#__PURE__*/_react.default.createElement("br", null));
  }));
};
var _default = HeatMap;
exports.default = _default;