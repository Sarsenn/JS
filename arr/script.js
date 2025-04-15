"use strict";

const myARR = [1, 2, 3];
console.log(myARR);

const myArr2 = new Array(1, 2, 3);
console.log(myArr2);

const obj = {
	pidor: 2,
	suka: 'Eblan'
}

const {pidor, suka} = obj

console.log(pidor)
console.log(suka)

myARR.forEach(e => console.log(e * 2));

const res =  myARR.map((e) => {
	return	e * 2
});

console.log(res)