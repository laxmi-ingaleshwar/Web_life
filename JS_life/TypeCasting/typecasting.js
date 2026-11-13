//!  Type Casting is the process 

//& Explicit Type Casting

// let data = '10'
// console.log(data); //? 10
// console.log(typeof data); //? string

//& Number
// console.log(Number(data));
// console.log(typeof Number(data)); //?number

// let data = 'rani'
// console.log(Number(data)); //? NaN

//~ 
// let data = ' '
// console.log(Number(data)); //? 0

// let data = ""
// console.log(Number(data)); //? 0

// let data = ' 1'
// console.log(Number(data)); //? 1

// let data = ' 1 2'
// console.log(Number(data)); //? NaN

//~ Boolean conversion
// let data = true
// console.log(Number(data)); //? 1

// let data = 'true'
// console.log(Number(data)); //? NaN

//& paresInt()--> Convert the data into Integer 

// let data = '10'
// console.log(parseInt(data)); //? 10
// console.log(typeof parseInt(data)); //? number

// let data = '1099anc'
// console.log(parseInt(data)); //? 1099
// console.log(typeof parseInt(data)); //? number

// let data = 'true'
// console.log(parseInt(data));  //? NaN
// console.log(typeof parseInt(data)); //? number

// let data = ' '
// console.log(parseInt(data));  //? NaN
// console.log(typeof parseInt(data)); //? number

// let data = 'e3'
// console.log(parseInt(data));  //? NaN
// console.log(typeof parseInt(data)); //? number

// let data = '10.09'
// console.log(parseFloat(data)); 
// console.log(typeof parseFloat(data));


//& converting data to string
// let data = 100
// console.log(String(data)); //? 100 
// console.log(typeof String(data)); //? string

// let data = true
// console.log(String(data)); //? true
// console.log(typeof String(data)); //? string

//& toString()
// let data = new String('10')
// console.log(data); //? [String: '10']
// console.log(data.toString()); //? 10

// let data = 10
// console.log(data.toString()); //? 10


//& Boolean Typecasting
// let data = 1
// console.log(Boolean(data)); //? true

// let data = 'somu'
// console.log(Boolean(data)); //? true
// console.log(typeof data ); //? string


//& truthy & falsy
//& we have 8 falsy values (imp)
//~   false
//~   0
//~  -0
//~  0n (BigInt)
//~  null
//~  undefined
//~  NaN
//~  ""

// let data = false
// console.log(Boolean(data)); //? false

// let data = 0
// console.log(Boolean(data)); //? false

// let data = -0
// console.log(Boolean(data)); //? false

// let data = 0n
// console.log(Boolean(data)); //? false

// let data = null
// console.log(Boolean(data)); //? false
// console.log(typeof Boolean(data)); //? boolean

// let data = undefined
// console.log(Boolean(data)); //? false

// let data = NaN
// console.log(Boolean(data)); //? false

// let data = ""
// console.log(Boolean(data)); //? false


//& Truthy values
// let data = []
// console.log(Boolean(data)); //? true



//! Logical Operators=> short circuting operators

//& AND (&&)=> both has to be true

// let data = true && false  //?false
// let data = true && 'somu'   //? somu
// let data = 'somu' && true   //? true
// let data = false && 'somu'  //? false
// let data = 'rani' && 'somu'     //? somu
// console.log(data);

//& OR(||) => either has to be true
// let data = true || false    //? true
// let data = true || 'somu'   //? true 
// let data = false ||'somu'  //? somu
// let data = 'rani' ||'raju'  //? rani
// let data = 'rani' || false   //? rani
// console.log(data);


//& NOT(!)
// console.log(!'hema'); //? false
// console.log(!!'rema'); //? true

