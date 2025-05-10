'use strict';

'Hello world'.toLocaleLowerCase


let str = 'some';
let strObj = new String(str);

console.log(typeof(str))
console.log(typeof(strObj))

console.dir([1, 3, 4])

const solider = {
	health: 400,
	armor: 200,
	sayHello: function () {
		console.log('I will kill you!')
	}
}

const jhone = {
	health: 100,
}

/* jhone.__proto__ = solider; */
Object.setPrototypeOf(jhone, solider);

console.log(jhone.sayHello())