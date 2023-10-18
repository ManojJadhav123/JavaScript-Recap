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