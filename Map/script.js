'use strict';
 const user = {
	name: 'Sarsen',
	surname: 'Smith',
	birthday: '20/04/2000',
	showMyPublicData: function () {
		console.log(`${this.name} ${this.surname}`);
	}
}

console.log(user)

const userMap = new Map(Object.entries(user))
console.log(userMap) 

const newUserObj = Object.fromEntries(userMap);

console.log(newUserObj)

const shops = [
	{rice:500},
	{oil: 200},
	{bread: 50}
]

const buget = [500, 200, 50]
const map = new Map([
	[{papper: 200}, 7000],
	[{cola: 100}, 10000],
	[{spam: 200}, 5000]
]
);

/* map.set(shops[0], 5000); */

/* console.log(map)

shops.forEach((item, i) => {
	map.set(item, buget[i])
})  */

console.log(map)
const goods = [];
for(let shop of map.keys()) {
	goods.push(Object.keys(shop)[0])
}

console.log(goods)

for (let price of map.values()) {
	console.log(price)
}


for (let [shop, price] of map.entries()) {
	console.log(price, shop)
}

map.forEach((value, key, map) => {
	console.log(value, key, map)
})


