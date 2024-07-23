/*
  Object: keys(), values(), entries(), fromEntries()
  Array: keys(), values(), entries(), fromEntries()
  Iterator
*/

const arr = ['a', 'b', 'c'];
const iterator = arr.values();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

//for (let val = iterator.next(); !val.done; val = iterator.next()) {
//  console.log(val.value);
//}
