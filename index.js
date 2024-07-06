const arr = [1, 2, 3, [4]];
let [a, , , b] = arr;

a = 10;
b[0] = 40;

console.log(arr);
console.log(a);
console.log(b);
