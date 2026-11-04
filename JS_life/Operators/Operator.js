//! Operators

//~ Unary +
// let flag = true
// console.log(+flag);

// let a= +10
// console.log(+a);
// console.log(typeof +a);


// let name= 'lax'
// console.log(-name);
// console.log(typeof name); //--> NaN string


//~ Unary (-)

// let a= 10
// let b= 15
// console.log(-a);
// console.log(typeof -15);


// let name = 'lax'
// console.log(-name);
// console.log(typeof name);

//~ Increment

// //? pre-Increment
// let b = 10
// console.log(++b);

// //? post increment
// let a = 10
// console.log(a++);
// console.log(a);


//? pre-decrement
// let b = 10
// console.log(--b);
// console.log(b);

//? post-decrement
// let a = 10
// console.log(a--);
// console.log(a);


//? logical not(!)
// let flag=0
// console.log(!flag);
 



//! Arithmetic Operators--> used to perform standard mathematical calculation

// let a = 20
// let b =  2
// console.log(a + b);  //22
// console.log(a - b);  //18
// console.log(a * b);  //40
// console.log(a / b);  //10 (quotient)
// console.log(a % b);  //0  (reminder)
// console.log(a ** b); //400 (power)


//! ASSIGNMENT OPERATOR--> Used to assign values to variables

//~ Simple Assignment(=)
// let a = 10
// a=10
// console.log(a);

//~ Addition Assignment(+=)
// let a = 10
// a=a+1
// a+=1
// console.log(a); //11


//~ Subtraction Assignment(-=)
// let a= 10
// a=a-1
// a-=1
// console.log(a); //9

//~ Multipication Assignment(*=)
// let a= 10
// a=a*2
// a*=2
// console.log(a); //20

//~ Division Assignment(/=)
// let a= 10
// a=a/2
// a/=2
// console.log(a); //5


//~ Modulus Assignment(%=)
// let a = 10
// a= a%3
// a %= 3
// console.log(a); //1


//!Comparison Operator --> true/ false

//~ Equal to (==)--> it will check value not  datatype
// let a = '10'
// let b = 10
// console.log(a == b); //true

//~ NotEqual to (!=)
// let a = 10
// let b = 10
// console.log(a != b); //false

//~ Strict Equal(===)--> it will check value with datatype also
// let a = 10
// let b = '10'
// console.log(a === b); //false

// let a = 10
// let b = 10
// console.log(a === b); //true


//~ Strict Not Equal to (!==)
// let a = 10
// let b = '1'
// console.log(a !== b);  //true

// let a = '10'
// let b = '10'
// console.log(a !== b); //false


//~ Greater Than (>)
// let a = 10
// let b = 20
// console.log(a > b); //false

//~ Lesser Than(<)
// let a = 10
// let b = 20
// console.log(a < b); //true

//~ Greater Than Equal (>=)
// let a = 10
// let b = 20
// console.log(b >= a); //true

// let a = 10
// let b = 20
// console.log(a >= b); //false

//~ Lesser Than Equal(<=)
// let a = 10
// let b = 20
// console.log(a <= b); //true

// let a = 10
// let b = 20
// console.log(b <= a); //false


//!Bitwise Operator--> Perform bit-level Operations

//~ AND(&) --> both has to be true

//& 256 128 64 32 16 8 4 2 1 

// let a = 6    //? 0110
// let b = 4    //? 0100
// console.log(a&b); //? 4--> 0100

// let a = 3    //? 0011
// let b = 2    //? 0010
// console.log(a&b); //? 2--> 0010

// let a = 11   //? 1011
// let b = 15   //? 1111
// console.log(a&b); //? 11--> 1011

// let a = 8    //? 1000
// let b = 7    //? 0111
// console.log(a&b); //? 0--> 0000

//~ OR (|) --> true is one input is true like either one

// let a = 6    //? 0110
// let b = 4    //? 0100
// console.log(a|b); //? 6--> 0110

// let a = 11   //? 1011
// let b = 15   //? 1111
// console.log(a|b); //? 15--> 1111

// let a = 3    //? 0011
// let b = 2    //? 0010
// console.log(a|b); //? 3--> 0011

// let a = 8    //? 1000
// let b = 7    //? 0111
// console.log(a|b); //? 15--> 1111

//~ XOR(^) --> True only one input is true, if 2 input is true it's false

// let a = 6    //? 0110
// let b = 4    //? 0100
// console.log(a^b);    //? 2--> 0010

// let a = 3
// let b = 2
// console.log(a^b);   //? 1--> 0001

// let a = 11
// let b = 15
// console.log(a^b);   //? 4--> 0100

// let a = 83.
// let b = 7
// console.log(a^b);   //? 15--> 1111


//~ NOT (~) --> inverse the value.. left most value = if 1=Negative(-) & 0= positive(+)

// let a = 10
// console.log(~a); //? -11

// let a = 5
// console.log(~a);    //? -6


// let z=14
// console.log(~z);


