let score = "manoj";

console.log(typeof score); //string

let valueInNumber = Number(score);

console.log(typeof valueInNumber); // Number
console.log(valueInNumber); //NaN

//if we try to print the value of below variables after conversion from string to Number, then output will be =>

// "33" => 33
// "33abc" =?> NaN

// For booleans
// true => 1; false => 0
// "" => false (empty string)
// "manoj" => true (because string contains some value)
// ex:
let isloggedIn = "manoj";

let booleanIsLoggedIn = Boolean(isloggedIn);
console.log(booleanIsLoggedIn); // it will give true because isLoggedIn variable contains value, if it was a empty string then output will be false


let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber); // 33
console.log(typeof stringNumber)// string



//     ********************************** Operations *******************************************************


let value = 3;
let negvalue = -value;
console.log(negvalue); // -3

// 2+2
// 2-2
// 2*2
// 2**3 // 2 to the power 3
// 2/3
// 2%3

let str1 = "hello";
let str2 = " manoj";

let str3 = str1 + str2;
console.log(str3); // hello manoj


console.log("1" + 2);  // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2) // 122
console.log(1 + 2 + "2"); // 32

console.log(+true); // 1
console.log(+""); // 0






