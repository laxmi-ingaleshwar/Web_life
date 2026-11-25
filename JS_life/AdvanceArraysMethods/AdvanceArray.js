//! map--> It creates a new array by applying a given function to every element in the array.
//! It doesn't modify the original array, instead it will create new array.
// let array = [1,2,3,4,5]
// for (let i= 0; i<array.length;i++){
//     console.log(array[i]);
// }


// let array = [1,2,3,4,5]
// function multiply(x){
//     return x*5
// }
// let newArray = array.map(multiply)
// console.log("New array" + newArray);
// console.log("Org array" + array);

//? New array5,10,15,20,25
//? Org array1,2,3,4,5

// let newArray = array.map(x => x * 5 )

// let array = [1,2,3,4,5]
// array.map((item,index,orgarray)=>{
//     console.log(item,index,orgarray); 
// })

//~ arr.map(()=>{})
//~  function print(x){
//~    console.log(x);
//~  }
//~  arr.map(print)

//& cube of the array
// let array = [1,2,3,4,5]
// let result= array.map(x=> x**3)
// console.log(result);

//? [ 1, 8, 27, 64, 125 ]

//& square
// let array= [1,2,3,4,5]
// let result = array.map(item=> item*2)
// console.log(result);

//? [ 2, 4, 6, 8, 10 ]


// let array=[1,2,3,4,5,6,7,8,9,10]
// let newdata = array.map((item)=>{
//     if (item % 2) return item
// })
// console.log(newdata);


//? [
//?   1, undefined,
//?   3, undefined,
//?   5, undefined,
//?   7, undefined,
//?   9, undefined
//? ]


// let array=[1,2,3,4,5,6,7,8,9,10]
// let newdata = array.map((item)=>{
//     if (item % 2 === 0) return item
// })
// console.log(newdata);

//? [
//?   undefined, 2,
//?   undefined, 4,
//?   undefined, 6,
//?   undefined, 8,
//?   undefined, 10
//? ]


//! filter()--> creates a new array containing all the elements that pass a certain condition.
//! if the callback function returns true for an element,that element is included in the new array; otherwise,it is excluded.
//! return new array containing elements that satisfy the condition.
//! only works with true values.

//~ filter even numbers from an array.
// let array=[1,2,3,4,5,6,7,8,9,10]
// let result = array.filter((item,index,org)=> item%2 ===0)
// console.log(result);
//? [ 2, 4, 6, 8, 10 ]

//~ filter odd numbers from an array.
// let array=[1,2,3,4,5,6,7,8,9,10]
// let result = array.filter((item,index,org)=> item % 2)
// console.log(result);
//? [ 1, 3, 5, 7, 9 ]

//~ filter strings longer(>) than 5 char from an array.
// arr=['HTMl','CSS','Python','javascript']
// let len= arr.filter((x)=> x.length >5)
// console.log(len);
//? [ 'Python', 'javascript' ]


//~ filter strings that startwith char 'r' from an array.
// arr = ['raj', 'somu', 'rani', 'Anshh','rohan sir']
// let result = arr.filter((x) => x.startsWith('r'))
// console.log(result);
//? [ 'raj', 'rani', 'rohan sir' ]

//~ filter out empty strings from an array
// let arr= ['','','raj','rani']
// let result=arr.filter((x)=> x!=="" )
// console.log(result);
//? [ 'raj', 'rani' ]

//~ filter strings includes(contain) char 'a' from an array.
// let arr = ['lax', 'ashh','ansh','raj','deepthi','shruu']
// let result= arr.filter((x)=>x.includes('a'))
// console.log(result);
//? [ 'lax', 'ashh', 'ansh', 'raj' ]

//~ filter numbers includes digit 5 from an array
// let arr = [23,34,45,76,52,34]
// let result = arr.filter((x)=>x.toString().includes(5))
// console.log(result);
//? [ 45, 52 ]


//! reduce()--> method executes a reducer function on each element of array, resulting in a single output. 
//! always gives a single output.
//~ data.reduce((accumalator,currentvalue)=> accumalator + currentvalue)

//& syntax
//~ array.reduce((acc,cvalue)=>{
//~     return acc + cvalue;
//~ },initialValue);

//! imp parameters
//! acc(accumulator)=> stores the previous data
//! cvalue(current value)=> represent the current element of the array.

//~ product of data
// let data =[1,2,3,4,5,6,7,8,9,10]
// let result = data.reduce((acc,cvalue)=>acc * cvalue)
// console.log(result);
//? 3628800 (product)

//~ let data;
//~ let result = data.reduce(()=>{
//~ },initialvalue)
//~ console.log(result);


//~ calculating array sum starting from 100.
// let data =[1,2,3,4,5,6,7,8,9,10]
// let result= data.reduce((acc,cvalue)=>{
//     return acc + cvalue
// },100)
// console.log(result);
//? 155

//~ find out the sum of all even numbers in the array
// let data = [1,2,3,4,5,10]
// let result=data.filter((x)=> x%2 ==0).reduce((acc , cvalue) => acc+ cvalue);
// console.log(result);
//? 16

//~ count of odd numbers in the given array
// let data = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let result = data.filter((x) => x % 2 !== 0).reduce((acc, cvalue) => acc + 1, 0);
// console.log(result);
//? 5

//~ find the sum of squares of given element
// let data =[1,2,3,4,5]
// let result = data.reduce ((acc,cvalue)=> acc + cvalue ** 2, 0)
// console.log(result);
//? 55

//~ count how many numbers divisible by 2&3
// let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// let result = data.filter((x) => x % 2 == 0 && x % 3 == 0) //? [ 6, 12, 18 ]
//     .reduce((acc, cvalue) => acc + 1, 0)
// console.log(result);
//? 3

//~ find total number of characters in strings
// let array = ['lax','anshh','ashhhh','deeps']
// let result =array.reduce ((acc,cvalue)=> acc + cvalue.length,0)
// console.log(result);
//? 19