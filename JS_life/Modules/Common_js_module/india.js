// let toys = require ('./china')
// let print = require('./china')

// let anything = require('./china')

// print()
// console.log(toys); //?car

// console.log(print);
// console.log(anything);
// anything.print()
// console.log(anything.toys);


let anything = require('./china')

let {print,toys}= anything
// console.log(anything);

//~ destructuring
print()
console.log(toys);


