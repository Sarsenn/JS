'use strict';

function helloWorld () {
  console.log('Hello world!')
}

helloWorld();

function hi () {
  console.log('Hi')
} 

hi();

const arr = [1,3,2,1,10,2,7,85,45,6],
      sorted = arr.sort(compareNum);


function compareNum(a, b) {
   return a - b
}

console.log(sorted)


