
function sayMyName(){
    console.log("m");
    console.log("a");
    console.log("n");
    console.log("j");
}

// sayMyName // reference
// sayMyName() // execution

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

// function loginUserMessage (username){
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("manoj")); // manoj just logged in
// console.log(loginUserMessage("")); // just logged in
// console.log(loginUserMessage()); // undefined


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("manoj"))
// console.log(loginUserMessage("manoj")) 

// unlimited arguments passing

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500 ,600));


const user = {
    username : "manoj",
    prices : 10000
}

function handleObject(anyobject){
    console.log(`Username is ${username} and the price is ${prices} `);
}

// handleObject(user);
handleObject({
    username : "manoj",
    prices : 10000
})

const myNewArray = [100, 200, 400];

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue( [100, 200, 400]));