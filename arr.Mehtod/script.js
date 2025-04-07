"use strict";

const arr = [10, 22, 5, 2, 5, 6];
arr[99] = 0;
console.log(arr.sort(compareNum))
/* console.log(arr); */

function compareNum (a, b) {
  return a - b
}

arr.pop(); // Удалеяет последний элемент в массиве
arr.push(11); // Добавялеть под конец элемент

/* console.log(arr); */

/* for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let value of arr) {
  console.log(value);
}

arr.forEach((item, i, arr) => {
  console.log(item, i, arr);
}) */


const str = prompt("", "");
const product = str.split(", "); // Создание из строки массива
product.sort();

console.log(product.join("; "));// Создание из массива строки