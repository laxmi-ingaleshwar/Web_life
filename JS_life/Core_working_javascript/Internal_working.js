// var data = 'somu'

// var data //? declaration
// data = 'somu' //? initialization

//& ex-1
// console.log(data); //? undefined
// var data = 'somu' 

// var data = 'somu' //? somu
// console.log(data);

//& internal
// var data;
// console.log(data); //? undefined
// data='somu'
// console.log(data); //? somu


//& ex-2
// console.log(data);
// let data= 'somu' //? ReferenceError: Cannot access 'data' before initialization

// let data = 'somu'
// console.log(data); //? somu


//! GEC+FEC(function exexution context)

//! ex-1
// console.log(data);
// function print(){
//     console.log('print');
// }
// var data = 'somu'
// console.log(data);
// print()


//! ex-2

// console.log(data);
// function print(){
//     let name= 'rani'
//     console.log(data);
//     console.log(name);
// }
// var data = 'somu'
// console.log(data);
// print()

//! ex-3
// console.log(age); 
// var age = 20;
// function student(){
//     var name= 'laxmi';
//     let marks=90;
//     console.log(name);
//     console.log(marks);
//     console.log(age);

// }
// console.log(age);
// student()

// undefined
// 20
// laxmi
// 90
// 20

//! ex-4
// var x= 15;
// function Student(){
//     var name= 'laxmi';
//     console.log(x);
//     console.log(name);
 
// }
// console.log(x);
// Student();
// console.log(name);

// 15
// 15
// laxmi
// ReferenceError: name is not defined

