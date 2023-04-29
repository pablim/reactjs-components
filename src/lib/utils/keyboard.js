export const keyCodes = {
	arrowLeft: 37,
	arrowRight: 39,
	arrowUp: 38,
	arrowDown: 40,
};

export const keyChecker = (keyBoardEvent, keysMatchArray) => {
	if (keysMatchArray.find((item) => item == keyBoardEvent.keyCode)) return true;
};
