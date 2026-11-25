// import toys from './china.js'
// console.log(toys); //? Bikes

import Object from './china.js'
//& while import destructuring is not possible in the same line.
import object from './china.js'
// console.log(object);

let {toys , toys1} = Object
console.log(toys); //? Bikes
console.log(toys1); //? cars

