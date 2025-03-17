'use strict';

let num = 30;

function showFirstMessage (text) {
  console.log(text)
  num = 20;
}

showFirstMessage('Hellllo!');
console.log(num);


function calc (a, b) {
  return (a + b)
}

console.log(calc(10,30))


function ret () {
  let num = 50;
  return num;
}

const anotherNum = ret();
console.log(anotherNum)


const logger = function () {
  console.log('Helllllllo')
};

logger();

const calc = (a, b) => {
return  a + b
}

