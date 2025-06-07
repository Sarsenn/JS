let user = {
  Sarsen: 'Hello'
}

let weak = new WeakMap();
weak.set(user, 'data')

user = null;

console.log(weak.has(user))


let cache = new WeakMap();

function cacheUser (user) {
  if(!cache.has(user)) {
    cache.set(user, Date.now())
  }

  return cache.get(user)
}

let emnira = {
  name: 'Emira'
}
let Muhammad = {
  name: 'Muhammad'
}

cacheUser(Muhammad);
cacheUser(emnira)

emnira = null;

console.log(cache.has(emnira));
console.log(cache.has(Muhammad));

//WeakSet
// add, has, delete

let messages = [
  {text: 'Salem', from: "Sultan"},
  {text: 'Alem', from: "Mirzhan"},
  {text: '...', from: "Zhyns"},
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
//readMessages.add(messages[1]);

messages.shift()
console.log(readMessages.has(messages[0]))
