//! By default Javascript is synchronous in Nature.

//! synchronous code execution.
// console.log('program started.');

// console.log('program in middle');
// for (let i = 0; i < 12; i++) {
//     console.log('Loading....');
// }

// console.log('Dealing with Imp data');
// console.log('program ended');

//? program started.
//? program in middle
//? Loading....
//? Loading....
//? Loading....
//? Loading....
//? Loading....
//? Loading....
//? Loading....
//? Loading....
//? Loading....
//? Loading....
//? Loading....
//? Loading....
//? Dealing with Imp data
//? program ended


//! Asynchronous code executed.

// console.log('program started.');

// console.log('program in middle');
// function handlingData(){
    // for (let i = 0; i < 12; i++) {
    //     console.log('Loading....');
    // }
//     console.log("done with program");
    
// }

// setTimeout(handlingData, 5000) //? 1.setTimeout() executed only once

// setInterval(handlingData,2000)  //? 2.setInterval() it keep on executing 


// clearTimeout(handlingData)   //?3. clearTimeout()
// setTimeout(handlingData, 5000)


// let interval = setInterval(()=>{  //?4. setInterval
//     console.log('program..');
    
// },1000)
// setTimeout(()=>{
//     clearInterval(interval)
    
// },5000)


// console.log('Dealing with Imp data');
// console.log('program ended');

//& 1. setTimeout()
//? program started.
//? program in middle
//? Dealing with Imp data
//? program ended
//~ after 5000(5 second) done with program will executed.
//? done with program

//& 2.setInterval()
// program started.
// program in middle
// Dealing with Imp data
// program ended
//~ it keep on executing after 2 seconds
// done with program
// done with program
// done with program
// done with program
// done with program
// done with program
// done with program
// done with program
// done with program
// done with program

//~ 3.clearTimeout()

//~ 4.setInterval()-->It keep on executing the program bu using setTimeout() we stop the program
// program started.
// program in middle
// Dealing with Imp data
// program ended
// program..
// program..
// program..
// program..