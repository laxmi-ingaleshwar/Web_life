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

//& array instance method

//~1. push()--> adds one or more element to the end of the array
// let array = [1,2,3,4,5]
// array.push('rani')
// console.log(array); //? [ 1, 2, 3, 4, 5, 'rani' ]

//~ 2. pop()--> remove the element from the end of the array
// let array = [1,2,3,4,5]
// array.pop()
// console.log(array); //? [ 1, 2, 3, 4 ] 

//~3. shift() --> remove the first element of the array
// let array = [1,2,3,4,5]
// array.shift()
// console.log(array); //? [ 2, 3, 4, 5 ]

//~4. unshift() --> add an element to the starting of the array
// let array = [1,2,3,4,5]
// array.unshift(0)
// console.log(array); //? [ 0, 1, 2, 3, 4, 5 ]

//~ 5.slice()
// let array = [10,20,30,40,50]
// console.log(array.slice(3)); //? [ 40, 50 ]
// console.log(array.slice(2,5)); //? [ 30, 40, 50 ]
// console.log(array.slice(-3)); //? [ 30, 40, 50 ]
// console.log(array.slice(-2)); //? [ 40, 50 ]
// console.log(array.slice(-1,-3)); //? []
// console.log(array.slice(4,2)); //? []


//~6. splice()
// let array = [10,20,30,40,50]
// let DeletedData = array.splice(1,2) //? [ 10, 40, 50 ]
// let DeletedData = array.splice(1,0,'somu', 'rani') //? [10, 'somu', 'rani', 20, 30, 40,50]
// console.log('DeletedData'+ DeletedData); //? DeletedData20,30 [ 10, 40, 50 ]

// console.log(array);


//~ 7. concat()
// let arr1 = [10,20]
// let arr2 = [30,40]
// let newarr = (arr1.concat(arr2))
// console.log(newarr); //? [ 10, 20, 30, 40 ]

//~ 8. reverse()
// let array = [10,20,30,40,50,60]
// console.log(array.reverse()); //? [ 60, 50, 40, 30, 20, 10 ]


//~ 9. join()--> 
// let array = [10,20,30,40,50,60]
// console.log(array.join()); //? 10,20,30,40,50,60
// console.log(array.join('-')); //? 10-20-30-40-50-60
// console.log(array.join("$")); //? 10$20$30$40$50$60
// console.log(array.join('')); //? 102030405060


//~ 10. indexof()
// let arr =[10,20,30,40,50,60]
// console.log(arr.indexOf(40)); //? 3
// console.log(arr.indexOf(70)); //? -1

//~ 11. lastindexof()
// let arr =[10,20,30,40,50,60]
// console.log(arr.lastIndexOf(60)); //? 5
// console.log(arr.lastIndexOf(90)); //? -1


//~ 12. includes()--> if the element present in the array gives true, if not false 
// let arr = [1,2,3,4]
// console.log(arr.includes(3)); //? true
// console.log(arr.includes(6)); //? false


//~ 13. entries()
// let arr = [10,20,30,40,50]       
// for(let x of arr.entries()){
//     console.log(x);

// }

//~ 14. keys()
// let arr = [10,20,30,40,50]
// for (let x of arr.keys()){
//     console.log(x);

// }

//~ 15. values()                                            
// let arr1 = [10,20,30,40,50]          
// for (let x of arr1.values()){        
//     console.log(x);  

// }   

//~ 16. every()
let arr = [2, 4, 6]
console.log(arr.every((num)=> num % 2 === 0)); //? true
console.log(arr.every ((num)=> num %2 !== 0 )); //? false

let data = ['red', 'green']
console.log(arr.every((data)=> data !== undefined)); //? true

vhgfvgd







