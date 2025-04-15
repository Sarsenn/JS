"use strict";

const userProfile = {
	name: 'Sarsen',
	commentQty: 123,
	hasSighendAssighment: false
}

const {name, commentQty} = userProfile;
const {hasSighendAssighment} = userProfile;

const arr = ['Mow', 'sedan', 'pajero'];

const [arr1, arr2] = arr;

console.log(arr1);
console.log(arr2)

const userInfo = ({name, commentQty}) => {
	if(!commentQty) {
		return console.log(`User ${name}, has no comment`)
	}

	return console.log(`User ${name}, has ${commentQty} comment`)
}

userInfo(userProfile);