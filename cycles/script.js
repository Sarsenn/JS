'use strict';

/* let num = 50;

while(num <= 55) {
	console.log(num);
	num++;
}

do {
	console.log(num);
	num++;
}
while (num < 55);


for (let i = 1; i <= 8; i++) {
	if(i === 6) {
		continue;
	}
	console.log(i)
} */

/* for(let i = 0; i < 3; i++) {
	console.log(i)
	for(let j = 0; j < 3; j++) {
		console.log(j)
	}
} */

let asterix = ''

for(let i = 0; i <= 6; i++) {
	for (let k = 0; k <= i; k++) {
		asterix += '*'
 	}
	asterix += "\n"
}

console.log(asterix);
gvfcd



