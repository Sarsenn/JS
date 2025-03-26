'use strict';

function myFunc(callback) {
  //Do something
  setTimeout(function () {
    console.log('Hello!')
  }, 500)

  callback();
}

function two() {
  console.log(2);
}

/* myFunc();
two(); */

function learnJS(lang, callback) {
  console.log(`I learing: ${lang}`)
  callback();
} 

/* learnJS('Niger', two) */

myFunc(two)