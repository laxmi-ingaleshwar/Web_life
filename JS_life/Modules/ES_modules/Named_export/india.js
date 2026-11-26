//~ single import
// import {password} from './china.js'
// console.log(password); //? 4567ygfdgxbhnm6


//~ multiple imports can be done in named export
// import {password,username} from './china.js'
// console.log(password); //? Lax@1234
// console.log(username); //? Laxizz

//~ Object can be import
import {password,username,student} from './china.js'
console.log(password);
console.log(username);
console.log(student);

//? me@1234
//? lax
//? { name: 'laxmi', age: 21, isloggedin: true }