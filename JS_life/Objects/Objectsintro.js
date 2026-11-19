//! Object-- programmatical representation of real world entities.
//& object is collection of multiple different properties in the form of ({key,value}also called properties) pairs.
//& internally all the keys are stored in the form of string.
//& when we console/print an object, the keys will not get appear in the same order we added them.
//& objects properties does not follow any specific order.


// let userinformation = {
//     name: 'somu',
//     IsLoggedIn: true,
//     age : 23,

//     reading: function(){
//         console.log("somu is reading ");
//     },
//     sleeping: function(){
//         console.log("somu is sleeping");
//     }
// }
// console.log(userinformation);



//? output
// {
//   name: 'somu',
//   IsLoggedIn: true,
//   age: 23,
//   reading: [Function: reading],
//   sleeping: [Function: sleeping]
// }


//! example
// let friend1 = {
//     name: "Spoorti",
//     age: 22,
//     isStudent: true,
//     greet: function () {
//         console.log("Hello, I am Spoorti");
//     },
//     skills: ["JavaScript", "Python", "HTML"],
//     address: {
//         city: "Belgavi",
//         state: "Karnataka"
//     }
// };

// let friend2 = {
//     name: "Akshata",
//     age: 21,
//     isStudent: false,
//     greet: function () {
//         console.log("Hello, I am Akshata");
//     },
//     skills: ["Java", "CSS", "React"],
//     address: {
//         city: "Banglore",
//         state: "Karnataka"
//     }
// };

// let friend3 = {
//     name: "Misba",
//     age: 23,
//     isStudent: true,
//     greet: function () {
//         console.log("Hello, I am Misba");
//     },
//     skills: ["C", "C++", "Python"],
//     address: {
//         city: "Banglore",
//         state: "Karnataka"
//     }
// };

// let friend4 = {
//     name: "Vijay",
//     age: 22,
//     isStudent: true,
//     greet: function () {
//         console.log("Hello, I am Vijay");
//     },
//     skills: ["JavaScript", "Angular", "SQL"],
//     address: {
//         city: "Hyderabad",
//         state: "Telangana"
//     }
// };

// let friend5 = {
//     name: "Laxmi",
//     age: 24,
//     isStudent: false,
//     greet: function () {
//         console.log("Hello, I am Laxmi");
//     },
//     skills: ["Python", "Django", "MySQL"],
//     address: {
//         city: "Mumbai",
//         state: "Maharashtra"
//     }
// };

// let friend6 = {
//     name: "Anjali",
//     age: 20,
//     isStudent: true,
//     greet: function () {
//         console.log("Hello, I am Anjali");
//     },
//     skills: ["HTML", "CSS", "Bootstrap"],
//     address: {
//         city: "Delhi",
//         state: "Delhi"
//     }
// };

// let friend7 = {
//     name: "Vikram",
//     age: 25,
//     isStudent: false,
//     greet: function () {
//         console.log("Hello, I am Vikram");
//     },
//     skills: ["Node.js", "Express", "MongoDB"],
//     address: {
//         city: "Pune",
//         state: "Maharashtra"
//     }
// };

// let friend8 = {
//     name: "Divya",
//     age: 22,
//     isStudent: true,
//     greet: function () {
//         console.log("Hello, I am Divya");
//     },
//     skills: ["React", "TypeScript", "JavaScript"],
//     address: {
//         city: "Kochi",
//         state: "Kerala"
//     }
// };

// let friend9 = {
//     name: "Rohit",
//     age: 23,
//     isStudent: false,
//     greet: function () {
//         console.log("Hello, I am Rohit");
//     },
//     skills: ["C#", "ASP.NET", "SQL"],
//     address: {
//         city: "Jaipur",
//         state: "Rajasthan"
//     }
// };

// let friend10 = {
//     name: "Bhavya",
//     age: 21,
//     isStudent: true,
//     greet: function () {
//         console.log("Hello, I am Meena");
//     },
//     skills: ["Python", "Machine Learning", "AI"],
//     address: {
//         city: "Coimbatore",
//         state: "Tamil Nadu"
//     }
// };

// console.log("Friend 1:",friend1);
// friend1.greet() //hello I am rahul
// console.log("-----------------------");
// console.log("Friend 2:",friend2);
// friend2.greet()
// console.log("-----------------------");

//! Accessing object properties
// console.log(friend1.name);
// console.log(friend2.age);
// console.log(friend3.skills);
// console.log(friend4.address.city);
// console.log("-----------------------");

//! Calling object functions
// friend1.greet();
// friend5.greet();
// friend10.greet();

//& there are 2 ways access the object properties.
//~1. BY USING DOT(.) NOTATION.

//~ information
//& ex-1
// let xyz = {
//     name :'somu',
//     age : 21,
//     flag : true
// }
// console.log(xyz);  //? { name: 'somu', age: 21, flag: true }
// console.log(xyz.name); //? somu

//& ex-3

// let userinformation ={
//     name :'somu',
//     age : 21,
//     'Is loggedIn' : true,

//     reading: function(){
//         console.log("somu is reading");
//     },
//     sleeping : function(){
//         console.log("somu is sleeping");
//     },
//     favColors :['red','green','yellow'],
//     address :{
//         city : 'karnataka',
//         pincode : 586213,
//     }
// }

// let key='name'
// userinformation.reading() //? somu is reading
// console.log(userinformation.favColors); //? [ 'red', 'green', 'yellow' ]
// console.log(userinformation.favColors[0]); //? red
// console.log(userinformation.address.pincode); //? 586213

//~2. BY USING [" "] NOTATION.
//~  Advantages

//~1. dynamic access by using [],
// console.log(userinformation['name']); //? somu
// console.log(userinformation[key]);    //? somu
// console.log(userinformation["age"]);  //? 21
// console.log(userinformation.key); //? undefined


//~2. if we have space in key (.notation) will not work get error
// console.log(userinformation.Is loggedIn); //? error
// console.log(userinformation['Is loggedIn']); //? true


//~3. (.) will not work for special characters.
// console.log(userinformation[name%]); //? error
// console.log(userinformation["name"]); //? somu
// console.log(userinformation.name*); //? error


//~ 4. (.) will not work for numbers
// console.log(userinformation.7); //? error
// console.log(userinformation[1]); //? undefined
// console.log(userinformation['7']); //? undefined

//~ userdata
//~ CRUD operation--> IMP
//~ creating
// let userdata ={
//     name :'somu',
//     age : 21,
//     flag: true,
//}

//~ adding
// userdata.luckyno= '7'
// console.log(userdata); //? { name: 'somu', age: 21, flag: true, luckyno: '7' }

//~ updating
// userdata.age= 25
// console.log(userdata); //? { name: 'somu', age: 25, flag: true }

//~ deleting
// delete userdata.flag
// console.log(userdata);  //? { name: 'somu', age: 21 }


//& Methods of objects
// let userdata ={
//     name :'somu',
//     age : 21,
//     flag: true,
// }
//& objects inbuilt methods--> IMP
//~1. keys()--> It will get access only the keys
// console.log(Object.keys(userdata)); //? [ 'name', 'age', 'flag' ]

//~2. values()-->  It will get access only the values
// console.log(Object.values(userdata)); //? [ 'somu', 21, true ]

//~ 3. entries()--> we get each key value pair in the form of nested array
// let Newdataformate =Object.entries(userdata)
// console.log(Newdataformate); //? [ [ 'name', 'somu' ], [ 'age', 21 ], [ 'flag', true ] ]

//~ 4. fromEntries()--> it is used to convert back to object
// console.log(Object.fromEntries(Newdataformate)); //? { name: 'somu', age: 21, flag: true }

//~ 5. Object.assign()-->
//? Object.assign(target,sources)

// let user1 ={
//     name : 'somu'
// }
// let personal_info ={
//     age : 20,
//     flag : false
// }
// let Info_user = {
//     pass_code : 'errerere2rddtyh'
// }
// let FinalUserdata = Object.assign(user1,personal_info)
// console.log(FinalUserdata); //? { name: 'somu', age: 20, flag: false }

// let FinalUserdata = Object.assign(Info_user,user1,personal_info)
// console.log(Info_user);  //? { pass_code: 'errerere2rddtyh', name: 'somu', age: 20, flag: false }


//~ 6.Object.seal()--> method that prevents addition, deletion of new properties, but we can modify the properties

// let emp_Info = {
//     full_name: 'Laxmi Ingaleshwar',
//     age : 20,
//     pan_no : "334562uom",
//     IsLoggedIn : true,
// }
// Object.seal(emp_Info) //? Here we are sealing the data
// console.log("After sealing the data");

// delete emp_Info.pan_no  //? It is not possible to delete data bcz of seal
// emp_Info.age = 21          //? Modification is possible
// emp_Info.refferenec = "ashh" //? It is not possible to add the data bcz of seal

// console.log(emp_Info);


//~ 7. Object.isSealed()--> boolean result
// let emp_Info = {
//     full_name: 'Laxmi Ingaleshwar',
//     age : 20,
//     pan_no : "334562uom",
//     IsLoggedIn : true,
// }
// Object.seal(emp_Info) //? If the data is sealed , we cannot do anything, if not we can do 
// if (Object.isSealed(emp_Info)) {
//     console.log("It is sealed, we cannot do anything 😒");

// }else{
//     console.log("Yeahhh 😎,It's not sealed, we can do anything");

// }

//~ 8. Object.freeze()--
// let emp_Info = {
//     full_name: 'Laxmi Ingaleshwar',
//     age : 20,
//     pan_no : "334562uom",
//     IsLoggedIn : true,
// }
// Object.freeze(emp_Info)

// delete emp_Info.full_name  //? deletion is not possible
// emp_Info.age = '21'         //? Modification is not possible
// emp_Info.reff = 'ashh'      //? adding is not possible
// console.log(emp_Info);


//~ 9. Object.isFrozen()
// let emp_Info = {
//     full_name: 'Laxmi Ingaleshwar',
//     age : 20,
//     pan_no : "334562uom",
//     IsLoggedIn : true,
// }
// Object.freeze(emp_Info)                 //? If the data is freeze , we cannot do anything, if not we can do 
// if (Object.isFrozen(emp_Info)) {
//     console.log("It is frozen 😒, we cannot do anything ");

// }else{
//     console.log("Yeahhh 😎,It's not frozen, we can do anything");

// }

//~10. object.defineproperty()--> used to add a new property Or modify an existing property of an object with specific settings.
//& Object.defineProperty(object,property,descriptor);
//? object=The object in which we want to add or modify a property.
//? property= The name of the property.
//? descriptor= specifies the settings and behaviour of that property.

// let student = {};
// Object.defineProperty(student, 'name',{
//     value : 'laxmi',
//     writable : true,
//     enumerable : true,
//     configurable : true,
// });

// student.name= 'laxizz';  //?modification(writable)
// delete student.name;     //? deletion (configurable)
// console.log(student.name);
// for (let key in student){ //? iteration (enumerable)
//     console.log(key);
    
// }

//? value= assign a value
//? writable= specifies whether we can modify the property's value/not
//? enumerable= it specifies whether the property should appear during iteration (such as for......in loop)
//? configurable = specifies whether we can delete the property / change its descriptors.

//& real life example
//? STUDENT ID CARD
//? value= Student's name
//? writable:false= Name cannot be changed.
//? enumerable: false= Name won't appear during object iteration.
//? configurable: false= property cannot be deleted.

//~ 11. Object.hasOwn()--> it checks the property is present or not
// let emp_Info = {
//     full_name: 'Laxmi Ingaleshwar',
//     age : 20,
//     pan_no : "334562uom",
//     IsLoggedIn : true,
// }
// let result= Object.hasOwn(emp_Info,'age') //? true
// let result= Object.hasOwn(emp_Info,'ageees') //? false

// console.log(result);

//~ 12. Object.is()--> determine whether two values are the exact same value.
// let emp_Info = {
//     full_name: 'rani',
//     age : 20,
//     pan_no : "334562uom",
//     IsLoggedIn : true,
// }
// let result = Object.is(emp_Info.age , 20)

// let rani_Info = {
//     name : 'rani', 
//     age : 21
// }
// Object.is(emp_Info,rani_Info)
// console.log(result); 
