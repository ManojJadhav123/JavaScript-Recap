const user = {
    username : "manoj",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage(); // manoj, welcome to website
user.username = "sam";
user.welcomeMessage(); // sam, welcome to website

// console.log(this);

//  function chai(){
//     let username = "manoj"
//     console.log(this.username);
// }

// chai(); // undefined

// const chai = function(){
//     let username = "manoj"
//     console.log(this.username);
// }

// chai(); // undefined

// const chai = () => {
//     let username = "manoj"
//     console.log(this.username);
// }

// chai(); // udefined

const chai = () => {
    let username = "manoj"
    console.log(this);
}

// chai(); // {}


// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username : "manoj"});

console.log(addTwo(3,4));