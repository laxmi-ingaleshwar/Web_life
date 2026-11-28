// &Creating promise
// let myPromise =new Promise((resolve,reject)=>{
//     console.log("I am inside a execution function");
    
//     // resolve("data is received")
//     reject("Data is not received")
// })
// console.log(myPromise);



//! handling promise 
//! we have two ways to handle promise
//& 1.traditonal way(.then() and .catch())
//~ then-->when initial it is in the obj format it used to  capture a resolved data.var.then()
//~ catch-->it is used to handle the rejection.var.catch(err)

// let myPromise =new Promise((resolve,reject)=>{
//     console.log("I am inside a execution function");
    
        // resolve("data is received")
//     reject("Data is not  received")
// })
// myPromise.then((data)=>{
// console.log(data);
// }).catch((err)=>{
//      console.log(err);  //?I am inside a execution function.Data is not  received
    
//  })


//& 2.Modern way(async and await)
//~ await should use with async.
//~ To handle success and failure state we use try and catch().

// async function handlingMyownPromise() {
//     try{
//     let result = await myPromise
//     console.log(result); 

//     }catch (err){
//         console.log(err);
//     }
// }

// handlingMyownPromise()



//~ 
// let myTumb = new Promise((resolve, reject) => {
//     console.log('This is my tumb.');
//     let Boolean = false
//     if (Boolean)
//     {
//         resolve ('Login successful.')
//     }else{
//         reject ('error with log in.')
//     }

// })

 
// async function handlingTumb() {
//     try{
//     let result = await myTumb
//     console.log(result); 

//     }catch (err){
//         console.log(err);
//     }
// }
// handlingTumb()
