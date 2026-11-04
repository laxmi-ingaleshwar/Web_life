// console.log("Hello Array");

//~ homogeneous
// let data = [1,2,3,4,5]
// console.log(data);

//~ heterogeneous
// let data1 = ['rani', 25, false]
// console.log(data1);
// console.log(typeof data);


//~ array is immutable
// let data3 = [1,2,3,'radha', 'hii',23]
// data3[1]='5'
// console.log(data3);
//~ length of array
// console.log(data3.length);

//~ A function can also be stored as an element inside an array and
//~ can be executed using its index followed by parentheses ().
// let data = ['sanu',50,35,function() {console.log('Hello, I am inside an array as an item.');}];
// data[3]();


// let array = new Array(10,20,30,40,50)
// console.log(array);

// let array1 = new Array(100)
// console.log(array1);
// console.log(array1.length); //? [ <100 empty items> ] 100

//& Array Static methods-->Array static methods are methods that are called
//&  directly using the Array class name instead of an array variable.

//~1. Array.from() --> Creates a new array from an iterable or array-like object.
// let data = "hello"
// console.log(Array.from(data)); //? [ 'h', 'e', 'l', 'l', 'o' ]

// let data = false
// console.log(Array.from(data)); //? []

// let data = 34
// console.log(Array.from(data)); //? []

// let data = [1,2,3,4,5]
// console.log(Array.from(data,(num)=>num*5)); //? [ 5, 10, 15, 20, 25 ]

// let data = 'Javascript'
// console.log(Array.from(data,(str)=>str+0).toString().replaceAll(',','')); //? J0a0v0a0s0c0r0i0p0t0

//~ 2.Arra.isArray()--> checks it is array , result in boolean

// let data = [1,2,3,4,'hii']       //? true, Data recived in the form of array
// console.log(Array.isArray(data));

// if (Array.isArray(data)){
//     console.log("Data recived in the form of array");  
// }
// else{
//     console.log("Data not recived in the form of array");   
// }


// let data = "1,2,3,4,'hii' "     //?false, Data not recived in the form of array
// console.log(Array.isArray(data));

// if (Array.isArray(data)){
//     console.log("Data recived in the form of array");  
// }
// else{
//     console.log("Data not recived in the form of array");   
// }


//~3. Array.of()
// console.log(Array.of(1,2,3,4,5,4,5)); //? [1, 2, 3, 4,5, 4, 5]
// console.log(Array.of(10)); //? [ 10 ]   

//testing github
