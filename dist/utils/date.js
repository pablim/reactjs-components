"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.todayTimestamp = exports.oneDay = exports.monthMap = exports.firstLetterDayMap = exports.dayMap = void 0;
var oneDay = 60 * 60 * 24 * 1000;
exports.oneDay = oneDay;
var todayTimestamp = Date.now() - Date.now() % oneDay + new Date().getTimezoneOffset() * 1000 * 60;
exports.todayTimestamp = todayTimestamp;
var dayMap = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
exports.dayMap = dayMap;
var firstLetterDayMap = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
exports.firstLetterDayMap = firstLetterDayMap;
var monthMap = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
exports.monthMap = monthMap;