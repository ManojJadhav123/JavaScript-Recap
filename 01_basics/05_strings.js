// let firstName = "Manoj";

// M  a  n  o  j 
// 0  1  2  3  4

//console.log(firstName[2]);

// Note
// All string methods return a new string. They don't modify the original string.

// Formally said:

// Strings are immutable: Strings cannot be changed, only replaced.




// trim = The trim() method removes whitespace from both sides of a string:
// toUpperCase 
// toLowerCase

let firstName = "manoj";

// console.log(firstName = firstName.trim());

// firstName = firstName.toUpperCase();
// firstName = firstName.toLowerCase();

// newString = firstName.slice(0, 4); // mano - including the starting point but excluding the ending point
// console.log(newString);


let string1 = "manoj";
let string2 = "Jadhav";

let newString = string1 + string2; 
console.log("Hello my name is " + newString); // old method 

console.log(`Hello my name is ${newString}`); //new method

// with type converison
let string3 = "17";
let string4 = "10";

let newString2 = +string3 + +string4; // just by adding + symbol infront of the names of the strings we can do the typeconversion from string to number
console.log(typeof newString2);


//********************************************************************************************************** */

// Note
// All string methods return a new string. They don't modify the original string.

// Formally said:

// Strings are immutable: Strings cannot be changed, only replaced.




// trim = The trim() method removes whitespace from both sides of a string:
// toUpperCase 
// toLowerCase

// let firstName = "manoj";

// console.log(firstName = firstName.trim());

// firstName = firstName.toUpperCase();
// firstName = firstName.toLowerCase();

// newString = firstName.slice(0, 4); // mano - including the starting point but excluding the ending point
// console.log(newString);

let myString = "bengaluru";

console.log(myString.length);
console.log(myString.charAt(1));
console.log(myString.indexOf('n'));
console.log(myString.includes('ga'));
console.log(myString.replace('lu' ,'bb'));

// there is another method called split method.









