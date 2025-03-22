'use strict';

const str = 'test'
const arr = [1, 2, 3]

console.log(arr.length) // Чтобы узнать длинну строки
console.log(str.length) 
console.log(str.toUpperCase()) // Чтобы изменить регситр 
console.log(str.toLowerCase()) // Чтобы изменить регситр 


let fruit = 'Some fruit';

console.log(fruit.indexOf("fruit")) // Чтобы узнать с какого индекса начинается слово, резутать -1 если указнной строки нету

const logg = 'Hello Word'

console.log(logg.slice(6, 10)) // Срезаеть по индексу строку 
console.log(logg.substring(6, 10)) 
console.log(logg.substr(6, 5)) // Втрой агрумент это сколько строк надо срезать



//Совойства и методы чисел 

const num = 13.4

console.log(Math.round(num)); //Округление 

const test = '12.2px';

console.log(parseInt(test)); //Чтобы поменнять систему исчисление 
console.log(parseFloat(test)); //Для дробных значение 