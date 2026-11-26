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

// undefined
// somu
// print


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

// undefined
// somu
// somu
// rani


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


//! ex-5
// var shop = 'Dmart';
// function bill(){
//     var item = 'shoes';
//     var price = 1500;
//     console.log(shop);
//     console.log(item);
//     console.log(price);
// }
// console.log(shop);
// bill()

// Dmart
// Dmart
// shoes
// 1500


//~ Here, shop is a global variable bcz it is declared outside the function.
//~ item & price are local variable bcz they are declared inside the function.
//~ GEC (global execution context) handles global code , FEC(function execute context) handles Function code.
//~ GEC is created when program starts, FEC is created when function called.


//! ex-6
// console.log(data);
// printfun()
// var printfun = function print(){
//     let name = 'rani'
//     console.log(data);
//     console.log(name);
// }
// var data = 'somu'
// console.log(data);

// TypeError: printfun is not a function


// console.log(data);
// function print(){
//     let name = 'rani'
//     console.log(data);
//     console.log(name);
       
// }
// var data = 'somu'
// console.log(data);
// print()

//undefined
// somu
// somu
// rani

//! scope--> it is a region we can access the data/variable
//& 1. global scope--> it is a scope which is defined outiside function & outside the block & called anywhere in the program.
//& Var keyword worked in global scope.

// console.log(data);
// function print(){
//     let name = 'rani'
//     console.log(data);
//     console.log(name);
    
// }
// var data = 'somu'
// console.log(data);
// print()

// undefined
// somu
// somu
// rani


// console.log(data);
// function print(){
//     var name= 'rani'
//     console.log(data);
// }
// print()
// console.log(name);
// var data = 'somu'
// console.log(data); //? error


//! ex- 6
// let x= 10
// function print(){
//     x=20
//     console.log(x);
// }
// print()
// console.log(x);

// 20
// 20



//! Block scope--> everything will be defined within {} curly braces
//! let & const keyword are worked in bolock scope.
//& ex-1
// let flag = true

// if (flag){
//     let data = 100
//     console.log("value of data is " + data);
// }
// else{
//     let data = 200
//     console.log("value of data is " + data);
    
// }
// console.log(data);


// ReferenceError: data is not defined



//& ex-2
// let flag = true

// if (flag){
//     var data = 100
//     console.log("value of data is " + data);
// }
// else{
//     var data = 200
//     console.log("value of data is " + data);
    
// }
// console.log(data);

// value of data is 100
// 100


// let data1 = 'somu'
// function outerFunction(){
//     let data2 = 'rani'
//     function innerFunction(){
//         let data3 = 'Raja'
//         console.log(data1);
//         console.log(data2);
//         console.log(data3);
          
//     } 
//     innerFunction()
// }
// outerFunction()


// somu
// rani
// Raja