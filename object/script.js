"use strict";

const myCity = {
  city: "Aktau",
  popular: true,
  country: "Kazakhstan",
  info: {
    isPopular: true,
    country: "Kazakhstan",
  },
};

const name = "Sarsen";
const isEblan = true;

const obj2 = {
  name,
  isEblan,
};

console.log(obj2);

const obj = {
  name: 'Sarsen',
  age: 24
}

obj.age = 25

console.log(obj)

const person = Object.assign({}, obj)
person.age = 30

console.log(person)

const person2 = {...obj};

console.log(person2)


const person3 = JSON.parse(JSON.stringify(obj))

console.log(person3)
