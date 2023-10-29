// ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const manoj = new User("manoj" , "manoj@google.com", "123");

console.log(manoj.encryptPassword());
console.log(manoj.changeUserName());

// BEHIND THE SCENE

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}
User.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`;
}

const kiran = new User("kiran", "kiran@google.com", "123");

console.log(kiran.encryptPassword());
console.log(kiran.changeUserName());