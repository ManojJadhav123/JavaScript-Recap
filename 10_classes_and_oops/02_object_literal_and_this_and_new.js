const user = {
    username : "manoj",
    loginCount : 8,
    signedIn : true,

    getUserDetails: function(){
        // console.log("got user deatails from the database");
        console.log(`userName : ${this.username}`);
        console.log(this);
    }
}

console.log(user.username);
console.log(user.getUserDetails());

console.log(this);

function myUser(username , logincount, isLoggedIn){
    this.username = username;
    this.loginCount = logincount;
    this.isLoggedIn = isLoggedIn;
    return this;
}

const userOne = new myUser("manoj", 12, true);
const uerTwo = new myUser("kiran", 8, false);
console.log(userOne.constructor);
console.log(userOne);