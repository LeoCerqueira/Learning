'use strict';

// function output(txt) {
// 	console.log(txt);
// }

var output = console.log.bind(console);
var printIf = when(output);
var isLongEnough = not(isShortEnough);

function when(fn) {
	return function (predicate) {
		return function (...args) {
			if (predicate(...args)) {
				return fn(...args);
			}
		};
	};
}

// function printIf(shouldPrintIt) {
// 	return function (msg) {
// 		if (shouldPrintIt(msg)) {
// 			output(msg);
// 		}
// 	};
// }

function not(fn) {
	return function nagetd(...args) {
		return !fn(...args);
	};
}

function isShortEnough(str) {
	return str.length <= 5;
}

// function isLongEnough(str) {
// 	return !isShortEnough(str);
// }

var msg1 = 'Hello';
var msg2 = msg1 + ' World';

printIf(isShortEnough)(msg1); // Hello
printIf(isShortEnough)(msg2);
printIf(isLongEnough)(msg1);
printIf(isLongEnough)(msg2); // Hello World
