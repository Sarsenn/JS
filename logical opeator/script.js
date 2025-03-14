'use strict';

/* const hamburger = true;
const fries = true;

if (hamburger && fries)  {
  console.log('im not hungry')
} */


const hamburger = 3;
const fries = 1;
const cola = 0;
const nugets = 2

if (hamburger == 3 && cola === 2  || fries === 3 && nugets)  {
  console.log('all is full')
} else {
  console.log('we are out')
}

console.log(hamburger === 3 && cola && fries)


let jonhReport, alexReport, samReport = 'done';

console.log( jonhReport || alexReport || samReport);