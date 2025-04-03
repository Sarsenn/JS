'use strict';

const obj = {
	name: 'test',
	width: 1024,
	heigth: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	},
	makeTest: function () {
		console.log("Test")
	}
}

console.log(obj.name)
console.log(obj['colors']['border'])

/* delete obj.name */
console.log(obj.name)

let counter = 0;

for (let key in obj) {
	if(typeof(obj[key]) === 'object') {
		for(let i in obj[key]) {
			console.log(`Свойства: ${i}, имеет значение ${obj[key][i]}`)
			counter++;
		} 
	} else {
		console.log(`Свойства: ${key}, имеет значение ${obj[key]}`)
		counter++;
	}
	
}

console.log(Object.keys(obj).length)
obj.makeTest()
const {border, bg} = obj.colors
console.log(border); 