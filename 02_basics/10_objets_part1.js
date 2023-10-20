// Singlton
// object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
    name : "manoj",
    "full name" : "Manoj Jadhav",
    [mySym] : "mykey1",
    age : 18,
    location : "jaipur",
    email : "manoj@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Tuesday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "manoj@chatgpt.com";
// Object.freeze(JsUser);
JsUser.email = "manoj@microsoft.com";
console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello js user ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());