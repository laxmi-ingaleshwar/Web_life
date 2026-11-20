//! destructuring means breaking big structure like array into smaller pieces.
//& Array destructuring=> helps us to extract the elements from the arrays and stored inside variable.

// let colors = ['red','green','blue','white','black']
// console.log(colors[2]); //? blue
// console.log(colors[0]); //? red

// let [r,g,b,,b2] = colors
// console.log(r); //? red
// console.log(g); //? green

// console.log(b); //? blue
// console.log(b2); //? black


//&
// let userdata ={
//     first_name: 'somu',
//     last_name : 'raj',
//     age:20,
//     IsLoggedIn: true
// }
// console.log(userdata.first_name); //? somu
// console.log(userdata.last_name); //? raj

//& destructuring
// let {first_name,IsLoggedIn,last_name} = userdata
// console.log(first_name); //? somu
// console.log(last_name); //? raj

//& like allias--> we can customize key values
// let {first_name:fn,last_name:ln,IsLoggedIn:is} =userdata
// console.log(ln); //? raj
// console.log(is); //? true







