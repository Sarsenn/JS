'use strict';
/* 
let number = 5; debugger

function logNumber() {
	console.log(number); debugger
}

number = 8;

logNumber(); debugger

number = 18;

logNumber(); debugger */

function creatCounter () {
	let counter = 0;

	const myFunc = function() { debugger
		counter =  counter + 1; debugger
		return counter; debugger
	}

	return myFunc;
}
debugger
const increment = creatCounter(); debugger
const c1 = increment(); debugger
const c2 = increment(); debugger
const c3 = increment(); debugger

console.log(c1, c2, c3)

{
	let msg = 'Hello'
}

console.log(msg)


for(let i =0; i < 9; i++) {
	for(let j = 0; j < 9; j++) {
		let num = 3;
	}
}