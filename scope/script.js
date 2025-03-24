'use strict';

let a;
let b;

function myFn() {
	let b;
	a = true;
	b = 10;
	console.log(b);
}

myFn();

console.log(a); //true
console.log(b); // undefined


const d = 5;

function MyFn2() {
	function innerFunction () {
		console.log(d);
	}
	innerFunction();
}

MyFn2();

function random() {
	g = 10;
	console.log(g)
}

random()

console.log(g)