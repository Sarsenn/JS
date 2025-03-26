'use strict';

console.log('arr' + '- object');
console.log(4 + +"5")


let incr = 10;
let decr = 10;


++incr;
--decr;

console.log(incr);
console.log(decr);

console.log(5%2)

console.log(2*4 === 8)


const isCheked = false;
const isClose = false;

console.log(isCheked || !isClose)

let a = 36

a++
++a
--a
a--
typeof a
new Object()

a = 11
a + 6
a - 7
a += 4
a === 5
a && 7

!10// false
!0 // true
!'abc' //false
!true //false
!undefined //true

const obj = {}

console.log(!obj)

const button = {
	width: 200,
	text: 'Buy'
}

const redButton = {
	color: 'Red',
	...button
}

console.log(redButton)