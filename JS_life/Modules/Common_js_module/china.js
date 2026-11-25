// let toys = 'car'

function print(){
    console.log('hello Public');

}

module.exports = print
module.exports = toys

//! exporting multiple data from common js
module.exports = {print,toys}

//~ object exporting

// let obj= {
//     name: 'abc',
//     age : 1,
//     flag : true,
// }
// let emp= {
//     name: 'lax',
//     age : 21,
//     flag : true,
// }
// module.exports = (emp,obj)