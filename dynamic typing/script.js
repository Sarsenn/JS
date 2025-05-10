"use strict";

//to String 
//1)
console.log(typeof(String(null)))

//2)
console.log(typeof(5 + '')) //сложение с строкой даяеть строку 

const num = 5;

console.log('vk.com/catalog/' + num)

const fontSize = 26 + 'px';

//to Number

console.log(typeof(+'10'))
console.log(typeof(parseInt('15px', 10)))


/* let answ = +prompt('hello', "") */


// to boolean
//falsey value

/* 0, '', null, undefined, NaN  */

let switcher = null;

if(switcher) {
  console.log('Working...')
}

switcher = 1;

if(switcher) {
  console.log('Working...')
}

console.log(Boolean('4'));

console.log(typeof(!'44'))