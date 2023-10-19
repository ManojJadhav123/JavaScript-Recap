const acccountId = 1444453;
let accountEmail = "manoj@gmail.com";
var accountPassword = "1234";

accountCity = "jaipur";
let accountState;

// accountId = 2 // not allowed because its an constant variable.

// can change the rest of the variables
accountEmail = "hdcc@gmail.com";
accountPassword = "2343255";
accountCity = "bengaluru";

console.log(accountEmail);

/*
    prefer not to use var
    because of issue in block scope and function scope
*/

console.table([acccountId, accountEmail, accountPassword, accountCity, accountState]);

/* firstName = "Manoj"; // it will work but not a good practice and can cause
 problems later when complexity of the code increases, if we use strict mode 
 by writing {"use strict"} at top of our code then it will not work , will give reference error.
 */

 //************************************** rules for naming variables **************************************/

//rules for naming variables

// you cannot start with number 
// example :-
//1value (invalid)
//value1 (valid)

var value1 = 10;
console.log(value1);

//console.log(value1 + 20); // will print 30;
//console.log(value1 ** 3) // will print 1000 , because 10^3 = 10*10*10

// you can only use underscore and dollar symbol

// first_Name (valid)
// _firstName (valid)

// first$name (valid)
// $firstname (valid)

//you cannot use spaces 

var first_name = "Manoj"; // snake case writing
var first_Name = "Manoj"; // camel case writing
// first name (invalid)

// Convetion :- start with small letter and use camelCase
