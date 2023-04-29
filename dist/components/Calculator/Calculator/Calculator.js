"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Calculator;
var _react = _interopRequireWildcard(require("react"));
require("./css/calculator.css");
require("./css/calculator-leptop.css");
var _Button = _interopRequireDefault(require("../Button/Button"));
var _Display = _interopRequireDefault(require("../Display/Display"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Calculator() {
  // useEffect
  //React garante que o DOM foi atualizado na hora de executar os efeitos
  // useEffect(() => {
  //     function handleStatusChange(status) {
  //       setIsOnline(status.isOnline);
  //     }

  //     ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);

  //     Isso é um mecanismo opcional de limpeza para efeitos. Cada efeito 
  //     pode retornar uma função que irá limpar depois dela. Isso nos 
  //     permite manter a lógica de limpeza perto uma da outra. Efeitos rodam 
  //     em todas as renderizações e não apenas uma vez. É por isso que o 
  //     React também limpa os efeitos da renderização anterior antes de 
  //     rodar os efeitos da próxima vez. 
  //     return () => {
  //       ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  //     };

  //      Você pode dizer ao React para pular a aplicação de um efeito se 
  //      certos valores não tiverem mudado entre as renderizações. Para 
  //      fazer isso, passe uma array como um segundo argumento opcional ao 
  //      useEffect
  //      Se você quer executar um efeito e limpá-lo apenas uma vez (na 
  //      montagem e desmontagem), você pode passar um array vazio ([]) como 
  //      segundo argumento. Isso conta ao React que o seu efeito não depende 
  //      de nenhum valor das props ou state, então ele nunca precisa 
  //      re-executar. Isso não é tratado como um caso especial — segue 
  //      diretamente de como o array de dependências sempre funciona.
  //   }, [props.friend.id]); // Apenas re-subscribe se props.friend.id mudar

  // Você também pode usar vários efeitos. Isso nos permite separar lógicas 
  // não relacionadas em diferentes efeitos.
  // React irá aplicar todos os efeitos usados por um componente, na ordem em 
  // que eles foram especificados
  // useEffect(() => {    
  //     document.title = `Você clicou ${count} vezes`;
  // }, [count]); // Apenas re-execute o efeito quando o count mudar

  // https://pt-br.reactjs.org/docs/hooks-effect.html

  var initialState = {
    displayValue: "0",
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
  };
  var _useState = (0, _react.useState)(initialState),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  function clear() {
    console.log('clear');
    setState(initialState);
  }
  function setOperation(operation) {
    console.log(operation);
    if (state.operation === 0) {
      this.setState(_objectSpread(_objectSpread({}, state), {}, {
        current: 1,
        clearDisplay: true
      }));
    } else {
      var result = operation === '=';
      var currentOperation = state.operation;
      var values = _toConsumableArray(state.values);
      switch (currentOperation) {
        case "+":
          values[0] = values[0] + values[1];
          break;
        case "-":
          values[0] = values[0] - values[1];
          break;
        case "/":
          values[0] = values[0] / values[1];
          break;
        case "*":
          values[0] = values[0] * values[1];
          break;
        default:
          console.log('operação inexistente');
      }
      values[1] = 0;
      setState(_objectSpread(_objectSpread({}, state), {}, {
        displayValue: values[0],
        operation: result ? null : operation,
        current: result ? 0 : 1,
        clearDisplay: !result
      }));
    }
  }
  function addDigit(digit) {
    console.log(digit);

    // Permite adicionar somente um ponto
    if (digit === '.' && state.displayValue.includes('.')) {
      return;
    }
    console.log(state);
    var clearDisplay = state.displayValue === '0' || state.clearDisplay;
    var currentValue = clearDisplay ? '' : state.displayValue;
    var displayValue = currentValue + digit;
    var values = _toConsumableArray(state.values);
    if (digit !== '.') {
      var value = parseFloat(displayValue);
      values[state.current] = value;
    }
    setState(_objectSpread(_objectSpread({}, state), {}, {
      displayValue: displayValue,
      clearDisplay: false,
      values: values
    }));
    console.log(state);
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "calc-container"
  }, /*#__PURE__*/_react.default.createElement(_Display.default, {
    value: state.displayValue
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    className: "triple",
    text: "AC",
    click: clear
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    className: "operation",
    text: "/",
    click: setOperation
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    text: "7",
    click: addDigit
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    text: "8",
    click: addDigit
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    text: "9",
    click: addDigit
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    className: "operation",
    text: "*",
    click: setOperation
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    text: "4",
    click: addDigit
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    text: "5",
    click: addDigit
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    text: "6",
    click: addDigit
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    className: "operation",
    text: "-",
    click: setOperation
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    text: "1",
    click: addDigit
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    text: "2",
    click: addDigit
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    text: "3",
    click: addDigit
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    className: "operation",
    text: "+",
    click: setOperation
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    className: "double",
    text: "0",
    click: addDigit
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    text: ".",
    click: addDigit
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    className: "operation",
    text: "=",
    click: setOperation
  }));
}