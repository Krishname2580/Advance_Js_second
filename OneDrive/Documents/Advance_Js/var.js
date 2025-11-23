// let a = 12;
// a = 13;
// console.log(a);

let a = [1, 2, 3, 4, 5];
a.unshift(3, 4);
console.log(a);

// Local symbol
const a1 = Symbol("id");
const a2 = Symbol("id");
console.log(a1 === a2); // false

// Global symbol
const b1 = Symbol.for("id");
const b2 = Symbol.for("id");
console.log(b1 === b2); // true