//! map--> It creates a new array
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


//! filter()--> only works with true values.
// let array=[1,2,3,4,5,6,7,8,9,10]
// let newdata = DataTransfer.map(item)=>{
//     if (item % 2) return item
// })
// console.log(newdata);

// let array=[1,2,3,4,5,6,7,8,9,10]
// let result = data.filter((item,index,org)=> item%2 ===0)
// console.log(result);


// arr=['HTMl','CSS','Python','javascript']
// let len= arr.filter(value)=>


// arr=['raj','somu','rani','Anshh']
// let startwith=arr.filter(value)=>{
//     return value startwith[r]
// }

// let arr= ['','','raj','rani']
// arr.map(()=>{})


//  function print(x){
//    console.log(x);
//  }
//  arr.map(print)


// let result=arr.filter((x)=> x!=="" )
// console.log(result);
//? [ 'raj', 'rani' ]

//& filter includes char a in it
// let arr = ['lax', 'ashh','ansh','raj','deepthi','shruu']
// let result= arr.filter((x)=>x.includes('a'))
// console.log(result);

//&

// let arr = [23,34,45,76,52,34]
// let result = arr.filter((x)=>x.toString().includes(5))
// console.log(result);

//? [ 45, 52 ]


//& reduce()--> always gives a single output.

// let data =[1,2,3,4,5,6,7,8,9,10]
//~ data.reduce((accumalator,currentvalue)=> accumalator + currentvalue)
// let result = data.reduce((acc,curv)=>acc * curv)
// console.log(result);

// let result = data.reduce(()=>{
// },initialvalue)
// console.log(result);

// let newdata= data.reduce((acc,x)=>{
//     return acc + x
// },100)

//~ find out the sum of all even numbers in the array
// let data = [1,2,3,4,5,10]
// let result=data.filter((x)=> x%2 ==0).reduce((acc , cvalue) => acc+ cvalue,0);
// console.log(result);


//~ count of odd numbers in the given array
//~ find the sum of squares of given element
//~ count how many numbers divisible by 2&3
//~ find total number of characters in strings