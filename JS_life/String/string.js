//! -----STRING---------

//? String is a collection of characters, immutable, cannot modified after creation
//? two ways of creating string

//& By using single quote
// let name = 'rani'
// console.log(name);
// console.log(typeof name);

//& By using double quote
// let name = "somu"
// console.log(name);
// console.log(typeof name);

//& By using backtik (template literal)
// let name = `ramu`
// console.log(name);
// console.log(typeof name);


//& ex for string...

// let first_name='Laxmi'
// let last_name='Ingaleshwar'
// console.log("My first name is " + first_name + " and  last name is " + last_name );
// console.log("My full name is " + (first_name + last_name));


//& By template
//& ${} -- String Interpolation
// console.log(`My first name is ${first_name} and  last name is ${last_name}`);
// console.log(`My full name is ${first_name+ last_name}`);


//& not prepared to use
// let str = new String ("Javascript")
// console.log(str);
// console.log(typeof str);

//& length
// let data = "LAXMI"
// console.log(data.length);
// console.log(data[2]);
// console.log(data[data.length-1]);


//!---static methods
//& 1. String.fromCharCode

// let str = String.fromCharCode(74,97,118,97)
// console.log(str);

// let str = String.fromCharCode(76,65,88,77,73)
// console.log(str);


//& 2.String.fromCodePoint
// let str = String.fromCodePoint(128525)
// console.log(str);


//& 3.raw
let str = String.raw`hello@123clme<3imhere|hehehehe..)...... `
console.log(str);


//!---Instance Methods
//~ 1.at()--> return the character at a specified position(Positive& Negative index)
// let str = 'Javascript'
// console.log(str.at(0));
// console.log(str.at(-1));

//~ 2.charAt()--> return the character at a specified position(only positive index allowed)
// let str = 'Javascript'
// console.log(str.charAt(0));
// console.log(str.charAt(-1));

//~ 3.charCodeAt()--> returns the Unicode(ASCII) value of the characters based on index
// let str = 'Javascript' 
// console.log(str.charCodeAt(1));
// console.log(str.charCodeAt(0));

//~ 4.concat()--> concatenate one or more string and returns new string
// let str1 = "Java"
// let str2 = "Script"
// let newStr = str1.concat(str2," ","Wonderful"," " ,"language")
// console.log(newStr);


//~ 5.includes()--> checks if a string contain a specified substring returns boolean value

// let str = "Javascript is wondeful language"

// console.log(str.includes('is')); //true
// console.log(str.includes('is',15)); //false
// console.log(str.includes('isin')); //false

//~ 6.indexOf()-->returns the first occurance index of substring

// let str = "Javascript is wondeful language"
// console.log(str.indexOf("a")); // 1
// console.log(str.indexOf("a",5)); // 24

//~ 7.lastIndexOf()--> returns the last occurance index of substring

// let data = "somu rajo"
// console.log(data.lastIndexOf("o"));

//~ 8.split()--> splits string into array based on separator, we can use separators like spaces, characters

// let str = "Javascript is a wonderful language"
// console.log(str.split("",5)); //? [ 'J', 'a', 'v', 'a', 's' ]

// console.log(str.split("i")); //? [ 'Javascr', 'pt ', 's a wonderful language' ]
// console.log(str.split(" ")); //?[ 'Javascript', 'is', 'a', 'wonderful', 'language' ]

// console.log(str.split("")); //? [
//?   'J', 'a', 'v', 'a', 's', 'c', 'r',
//?   'i', 'p', 't', ' ', 'i', 's', ' ',
//?   'a', ' ', 'w', 'o', 'n', 'd', 'e',
//?   'r', 'f', 'u', 'l', ' ', 'l', 'a',
//?   'n', 'g', 'u', 'a', 'g', 'e']

// console.log(str.split("i")); //?[ 'Javascr', 'pt ', 's a wonderful language' ]
// console.log(str.split("s")); //? [ 'Java', 'cript i', ' a wonderful language' ]

//~ 9. toUpperCase()--> converts String into uppercase

// let str = "Javascript is a Wonderful Language"
// console.log(str.toUpperCase()); //? JAVASCRIPT IS A WONDERFUL LANGUAGE

//~ 10. toLowerCase()--> string to lowercase
// let str = "Javascript is a Wonderful Language"
// console.log(str.toLowerCase()); //? javascript is a wonderful language

//~11.toLocaleUpperCase()->converts a string into uppercase according to a particular language's (local's ) rule    
// let str1 = "JavaScript is a Wonderful Language"
// console.log(str1.toLocaleUpperCase()); //? JAVASCRIPT IS A WONDERFUL LANGUAGE

// let str1 = "istanbul"
// console.log(str1.toLocaleUpperCase("tr-TR")); //? İSTANBUL



//~ 12. toLocaleLowerCase()-->converts a string into lowercase according to a particular language's (local's ) rule
// let str2 = "JavaScript is a Wonderful Language"
// console.log(str2.toLocaleLowerCase()); //? javascript is a wonderful language


//~ 13. trim()--> removes string after & before spaces  
// let str = "    Javascript is a Wonderful Language   "
// console.log(str.trim());
// console.log(str);
// console.log(str.trim().length); //? 34
// console.log(str.length); //? 41


//~ 14. trimStart()--> remove spaces in the starting of the string
// let str = "    Javascript is a Wonderful Language   "
// console.log(str.trimStart()); //? (Javascript is a Wonderful Language   )


//~ 15. trimEnd() --> remove spaces in the end of string
// let str = "    Javascript is a Wonderful Language   "
// console.log(str.trimEnd()); //?(    Javascript is a Wonderful Language)

//~16. startWith()--> checks if a string is starts with specified substring gives result in boolean values
// let link = "http://www.google.com"
// console.log(link.startsWith("https")); //? false

// let link = "https://www.google.com"
// console.log(link.startsWith("https")); //? true

//~ 17. endsWith()--> 
// let data = "images.png"
// console.log(data.endsWith(".png")); //? true
// console.log(data.endsWith(".jpg")); //? false

//~ 18. repeat()

// let data = 'ramu' //? ramuramuramuramuramu
// let data = 'ramu '  //? ramu ramu ramu ramu ramu
// console.log(data.repeat(5));

//~ 19. padStart()
// let data = 'ramu'
// console.log(data.padStart(5,'o')); //?oramu
// console.log(data.padStart(10,'o')); //? ooooooramu

//~ 20. padEnd()
// let data = 'rani'
// console.log(data.padEnd(10,'r')); //? ranirrrrrr
// console.log(data.padEnd(3,'r')); //?  rani

//~21. replace()

// let data = 'ramu'
// console.log(data.replace('ra','so')); //? somu

// let data = 'ramu ramu'
// console.log(data.replace('ra','so')); //? somu ramu


//~22. replaceAll()
// let data = 'ramu ramu rani ramya'
// console.log(data.replaceAll('ra','so')); //? somu somu soni somya


//~ 23. toString()--> any data that we want to convert to string

// let data = new String('hello')
// console.log(data); //? [String: 'hello']
// console.log(typeof data); //? object
// console.log(typeof data.toString()); //? string

//~ 24. slice() and Substring()
//& 1. count the letters in the given string using length method

// let data = 'Javascript is wonderful language'
// let count=0
// for (let i=0; i<data.length;i++){
//     count++
// }

//& 2. count the letters in the given string without using length method
// let data = 'Javascript is wonderful language'
// let count=0
// for (let i=0; data[i]!==undefined;i++){
//     count++
// }
// console.log(count);

//& 3. count of vowels
// let data = 'Javascript is wonderful language'
// let count = 0
// for (let i = 0; i < data.length; i++) {
//     if (i = 'AEIOUaeiou'.includes(data[i])){
//        count++
//    }
        

// }
// console.log('count of vowels:',count);

//&4. convert 1st char to uppercase
// let data = 'javascript is wonderful language'
// let result = data[0].toUpperCase()+ data.slice(1)
// console.log(result);

//& 5. given string remove the spaces
//  let data = 'javascript          is wonderful language'

// console.log(data.trim()); //? remove starting & ending
// console.log(data.replaceAll(' ','')); //? javascriptiswonderfullanguage
