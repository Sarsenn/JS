"use strict";

let num = 30;

function showFirstMessage(text) {
  console.log(text);
  num = 20;
}

showFirstMessage("Hellllo!");
console.log(num);

function calc(a, b) {
  return a + b;
}

console.log(calc(10, 30));

function ret() {
  let num = 50;
  return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function () {
  console.log("Helllllllo");
};

logger();

/* const calc = (a, b) => {
return  a + b
} */

console.dir(logger);

const arr = [78, 56, 232, 12, 8];

const personObj = {
  name: "Eblan",
  age: 24,
};

function increasPersonAge(person) {
  const updatePerson = Object.assign({}, person);
  updatePerson.age++;
  return updatePerson;
}

const updatePerson = increasPersonAge(personObj);

console.log(updatePerson.age);

function consoleLog() {
  console.log("HelloEeee!");
}

function anotherFun(callBackFunction) {
  callBackFunction();
}

anotherFun(consoleLog);

function printMyName() {
  console.log("Sarsen");
}

setTimeout(printMyName, 2000);

const rubCur = 28;
const discount = 0.28;
function convert(amount, rubCur) {
  return rubCur * amount
}

convert(1000, rubCur);

function promtion(result) {
  console.log(result * discount);
}

promtion(convert(500, rubCur));