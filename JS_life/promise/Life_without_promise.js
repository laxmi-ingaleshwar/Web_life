//~ callback hell or pyramid dom-->imp for interview.nothing but nested callbacks  to create a dependency we will be using callback
//! cafe
// function orderfood(callback) {
//     setTimeout(() => {
//         console.log("Food is ordered");
//         callback()
//     }, 2000);
// }
// function preparefood(callback) {
//     setTimeout(() => {
//         console.log("Food is prepared");
//         callback()
//     }, 5000);
// }
// function payment(callback) {
//     setTimeout(() => {
//         console.log("Payment is done👍");
//         callback()
//     }, 3000);
// }
// function takeAway(callback) {
//     setTimeout(() => {
//         console.log("Food is ready to takeAway");
//         callback()
//     }, 4000);
// }
// orderfood(() => {
//     preparefood(() => {
//         payment(() => {
//             takeAway(() => {
//                 console.log("Enjoy your food❤️🍟");
//             })
//         })

//     })
// })



//! traditional way to handle callback hell problem by promise
function orderfood() {
    return new Promise((resolve)=> {
        setTimeout(() => {
            console.log("Food is ordered");
            resolve()
        }, 2000);
    })
}
function preparefood() {
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log("Food is prepared");
            resolve()
        }, 5000);
    })
}

function takeAway() {
    return new Promise((resolve)=> {
        setTimeout(() => {
            console.log("Food is ready to takeAway");
            resolve()
        }, 4000);
    })
}


// orderfood().then(()=>{
//     return preparefood()
// }).then(()=>{
//     return takeAway()
// }).then(()=>{
//     console.log("enjoy your food");
// })


//! modern way to handle callback hell problem by promise

async function handlingData() {
    await orderfood()
    await preparefood()
    await takeAway()
    console.log('enjoy your food');  
}
handlingData()