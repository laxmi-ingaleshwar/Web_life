//! Functions

// function print(){
//     console.log("Hello Javascript");
//     console.log("How are you");

// }
// print()


// function print(){
//     console.log("Good Morning");

// }
// print()


// function print(){
//     console.log("Good Afternoon");

// }
// print()


// function print(){
//     console.log("Good Evening");

// }
// print()
//~ function Types

//~ 1. Named Function-->

// function greet(anything){
//     console.log("Welcome " + anything);

// }
// greet("rani")

// function greet(hour) {
//     if (hour >= 5 && hour < 12) {
//         console.log("good Morning");

//     }
//     else if (hour >= 12 && hour >15) {
//         console.log("Good afternoon");
//     }
//     else if (hour >= 16 && hour >20) {
//         console.log("Good Evening");
//     }
//     else {
//         console.log("Good Night");
//     }
// }
// greet(4)

//~ return keyword

// function Totalmarks(m,c,p,e,k){
//     return m+c+p+e+k

// }
// let result = Totalmarks(60,40,80,35,99)
// console.log(result + 5);

//~2. Anonymous Function--> function that has no name

// let bhoot = function(){
//     console.log("hello I am bhoot ");

// }
// bhoot()

//~ 3. Arrow function(Fat arrow function)--> shorter way of writting function
//& ()=>{}

// let add=(a,b)=>{
// console.log(a+b);
//  }
//  add(30,50)

//& 1. if code written in single line,no need to use return and curly braces{}

// let add = (a, b) => (a + b)
// console.log(add(10, 20));

//& 2. if we have single parameters , no need of paranthesis()

// let add = a => a + 20
// {
//     console.log(add(10));
// }

//& 3.No parameters – Empty parentheses(If an arrow function does not have any parameters,
//&  we must use empty parentheses () / _.)
// let addition = () => 20 + 20
// console.log(addition());

//& 4. Implicit return--> When we write a single expression without curly braces, 
//& JavaScript automatically returns its result. (Implicit return means no need to write the return keyword.)

// let add = (a, b) => (a + b)
// console.log(add(10, 20));

//& 5. explicit return--> If we have multiple statements inside an arrow function,
//&  we need curly braces {} and must explicitly use the return keyword when returning a value.
// let addition = (a, b) => {
//     return a + b ;
// }
// console.log(addition (10, 20));

//& 6. function expression--> means storing a function inside a variable
// let addition = function printAdd(){ //? addition is the variable here
//     console.log(10 + 20);

// }
// addition()

//~ 4. callback function--> is a function passed into another function as an argument
// function add() {
//     console.log(30 + 20);

// }
// function Task(Function) {
//     Function()
// }
// Task(add)


// function Task(Function) {
//     Function()
// }
// Task(
//     function() {
//     console.log(30 + 20);
// }
// )

//~ 5. HOF(higher order function)--> function which accepts a callback function as parameter
// function Task(){
//     return function(){
//         console.log("Thank you");

//     }
// }
// let result = Task()
// result()

//! CALCULATOR

// function add(a, b) {
//     console.log(a + b);

// }
// function sub(a, b) {
//     console.log(a - b);

// }
// function mulp(a, b) {
//     console.log(a * b);

// }
// function div(a, b) {
//     console.log(a % b);

// }
// function calci(calback, a, b) {
//     calback(a, b);
// }

// calci(mulp, 100 , 10);
// calci(add, 100 , 10);
// calci(sub, 100 , 10);
// calci(div, 100 , 10);


//! expression for HOF and callback

// function Greeting(callback, takeaway) {
//     console.log("Welcome to Banglore cafe");
//     console.log("You can Order here!...");
//     console.log(".......");

//     callback(takeaway)

// }

// function chicken_biryani(takeaway) {
//     setTimeout(() => {
//         console.log("Thank You for order here..");
//         console.log("Your order Chicken-biryani is getting ready..");
//         console.log("Here is your Order.......");
//         takeaway()
//     }, 5000)

// }


// function veg_biryani(takeaway) {
//     setTimeout(() => {
//         console.log("Thank You for order here..");
//         console.log("Your order Veg-biryani is getting ready..");
//         console.log("Here is your Order.......");
//         takeaway()
//     }, 5000)
// }

// function takeaway() {
//     console.log("Your Order is ready for takeaway...");

// }
// Greeting(veg_biryani, takeaway)


