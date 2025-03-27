"use strict";

function myFunc(a, b) {
  let c;
  a = a + 1;
  c = a + b;
  return c;
}

const func = function (a, b) {
  let c;
  a = a + 1;
  c = a + b;
  return c;
};

func(5, 10);

/* function(a, b) {
  let c
  a = a + 1;
  c = a + b
  return c
} */

setTimeout(function () {
  console.log("Hello!");
}, 2000);

(a, b) => {
  let c;
  a = a + 1;
  c = a + b;
  return c;
}

const arrFunc = (a, b) => {
  let c;
  a = a + 1;
  c = a + b;
  return c;
}

setTimeout(() => {
  console.log("Hello!");
}, 2000);

a => {

}

(a, b) => a + b

function multByFactor (value, multiplayer = 1) {
  return value * multiplayer
}

const newPost = (post, addedAt = Date()) => ({
  ...post,
  addedAt,
})