export const oneDay = 60 * 60 * 24 * 1000;

export const todayTimestamp =
	Date.now() - (Date.now() % oneDay) + new Date().getTimezoneOffset() * 1000 * 60;

export const dayMap = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

export const firstLetterDayMap = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

export const monthMap = [
	'Janeiro',
	'Fevereiro',
	'Março',
	'Abril',
	'Maio',
	'Junho',
	'Julho',
	'Agosto',
	'Setembro',
	'Outubro',
	'Novembro',
	'Dezembro',
];
