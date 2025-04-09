'use strict';

const fnWithError = () => {
	throw new Error('Some Error');
}

/* fnWithError(); */




/* try {
// Выполненеи кода
} catch (error){
	// Этот блок выполнается в случае возникновение ошибок в блоке Try
} */

try {
	fnWithError()
} catch (error){
	console.error(error);
	console.log(error.message);
}
console.log('Continue..');