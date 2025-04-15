'use strict';

let a = 5,
	b = a;


b = b + 5;


console.log(b)

const obj = {
	a: 5,
	b: 1,
}

const copy = obj;

copy.a = 10;
console.log(copy)
console.log(obj)


function copyObj(obj) {
 let pitux = {};

 for(const key in obj) {
	obj[key] = obj[key];
 }

 return obj
}


const objNumber = {
	a: 1,
	b: 2,
	d: {
		x: 3,
		z: 4
	}
}

const number = copyObj(objNumber);
number.d.z = 10;

console.log(number)
console.log(objNumber)


const add = {
	d: 30,
	c: 40
};

Object.assign(number, add)

console.log(number)


const oldArray = [1, 3, 3, 1, 10]
const newArray = oldArray.slice();

console.log(newArray);

const video = ['youtube','vimeo','nigieo'],
	  blogs = ['wordpress', 'livejournal', 'blogger'],
	  internet = [...video, ...blogs];
	  
console.log(internet);

function log(a, b, c) {
	console.log(a)
	console.log(b)
	console.log(c)
};

const num = [2, 5, 7];

log(...num)