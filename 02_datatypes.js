"use strict" //treat all JS code as newer version

// JS is dynamically typed language

// let name = "manoj";
let age = 23;
let isloggedIn = false;
let state;

let firstName = "Manoj";
// let firstName = "Mohit"; // you can not redeclare variables with let 
console.log(firstName);



// declare constants
// we can use but cannot change the value of the const variable

const pi = 3.14;
// pi = 4;//not possible
console.log(pi * 2); // possible



//primitive datatypes :->
//number
//string
//boolean
//bigInt
//null => standalone value
//undefined
//symbol => unique

// reference (Non -Primitive) :->

// array, functions, object

console.log(typeof undefined); // undefined
console.log(typeof null); //object

//****************************************************************************************************************** */

//undfined 
// null

let name;
// console.log(typeof name);
// name = "manoj";
// console.log(typeof name , name);

let myVariable = null;
console.log(typeof myVariable);
myVariable = "manoj";
console.log(myVariable, typeof myVariable);

console.log(typeof null);// its a bug/error in js , cannot fix this because already so many projects are running in companies with this error , if fixed then all that projects will be collapsed.

//BigInt
let myNumber = BigInt(12);
let sameMyNumber = 123n;
console.log(myNumber); // output - 12n
console.log(Number.MAX_SAFE_INTEGER ); // maximum value of an interger in JS
console.log(myNumber + sameMyNumber); // 135n



//*************************************************************************************************************** */

// booleans = true and false

// let num1 = 7;
// let num2 = 7;

// console.log(num1<= num2);

// == vs ===
// == particularly in js it only checks the value.
// === it checks both value and data type


// let num1 = "7";
// let num2 = 7;
// console.log(num1 == num2); // true 
// console.log(num1 === num2); // false

//   != vs and !== 

// let num1 = 7;
// let num2 = 7;
// console.log(num1 != num2); //false

let num1 = "7";
let num2 = 7;

console.log(num1 == num2); // true - only checked the value 
console.log(num1 === num2); // false - value as well as data type is also checked


//******************************************************************************************************** */

// truthy and falsy values 

// falsy values 


// false
// ""
// null 
// undefined
// 0


//***********************************************************************************************************8 */

// if else condition 

// let age = 17;

// if(age>=18){
//     console.log("User can play ddlc");
// }else {
//     console.log("User can play mario");
// }

// let num = 13;

// if(num%2===0){
//     console.log("even");
// }else{
//     console.log("odd");
// }

// falsy values =->
// false
// ""
// null 
// undefined
// 0

// truthy 
// "abc"
// 1, -1

// let firstName= 0; // for all the falsy values of firstName , the programme flow will always go in the else block

// if(firstName){
//     console.log(firstName);
// }else{
//     console.log("firstName is kinda empty");
// }




