//! CONDITIONAL STATEMENTS

//~ if statement

// let age = 17
// if (age >= 18){
//     console.log("you can vote");   
// }



//~ if-else statement

// let age = 15
// if (age >= 18){
//     console.log("you can vote");   
// }
// else{
//     console.log("you are not eligible");   
// }

//~ else-if ladder statement--> checks multiple conditions

// let marks = 90

// if (marks >= 90){
//     console.log( "Grade A+");  
// }
// else if(marks >= 80){
//     console.log(" Grade A ");
// }
// else if (marks >= 70){
//     console.log(" Grade B+");  
// }
// else if(marks >= 60){
//     console.log(" Grade B ");
// }
// else if (marks >= 50){
//     console.log(" Grade C+");  
// }
// else if(marks >= 40){
//     console.log(" Grade C ");
// }
// else if (marks >= 30){
//     console.log(" PASS ");  
// }
// else{
//     console.log(" FAIL ");
// }




// let num = 0

// if (num > 0) {
//     console.log( "It is Positive ");  
// }
// else if(num < 0){
//     console.log(" It is negative");
// }
// else{
//     console.log(" Zero ");
// }


//~ between 2 num greater than

// let a = 10
// let b = 5
// if (a >=b ){
//     console.log("a is Greater than b");
    
// }
// else if( b >= a ){
//     console.log("b is grater than a");  
// }


//~ between 3 num Greater than

// let a = 10
// let b = 20
// let c = 30

// if (a >b && a>c){
//     console.log(" a is greater");
    
// }
// else if( b>c && b>a){
//     console.log(" b is grater");
    
// }
// else if (c>a && c>b){
//     console.log("c is greater");
    
// }


//~ Switch Statement--> 

// let days = 9

// switch(days){
//     case 1: console.log("Monday");
//     break;
//     case 2: console.log("Tuesday");
//     break;
//     case 3: console.log("Wednesday");
//     break;
//     case 4: console.log("Thrusday");
//     break;
//     case 5: console.log("Friday");
//     break;
//     case 6: console.log("Saturday");
//     break;
//     case 7: console.log("Sunday");
//     break;
//     default :
//     console.log("Invalid Input");
    
// }


//~Ternary Operator--> short hand way of writting if-else statement

//& syntax== condition? true: false

// let flag = true
// let result = flag? "Logged-In" : "Log out"
// console.log(result);

// let age = 21;
// console.log(age >= 21 ? "Welcome to party" : "Gettt lost ");


// let marks = 70;
// console.log( marks > 90 ? "Grade A " : marks > 80 ? "Grade B" : marks > 70 ? "Grade C" : "fail");



// let color = "Green";
// console.log( color === "Red" ? "STOP " : 
//             color === "Yellow" ? "Ready" : 
//             color === "Green" ? "GOoo" : 
//             "Invalid signal"
// );


// let age = 20;
// let Ticket_type = age>12 ? "Adult Ticket" : "Child Ticket"
// console.log(Ticket_type);


// let amount = 299;
// let shipping_cost = amount > 499 ? "Shipping Free" : "99 rs Shipping Charge"
// console.log(shipping_cost);


// let total = 3000;
// let offer = total > 2000 ? "10% Offer" : amount > 3000 ? "15% Offer" : amount > 5000 ? "25% offer" : "No Offer"
// console.log(offer);
