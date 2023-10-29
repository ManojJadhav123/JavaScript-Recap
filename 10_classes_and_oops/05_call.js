function setUserName(username){
    // complex DB calls

    this.username = username;
    console.log("called");
}

function createUser(username, email, password){
    setUserName.call(this,username);
    this.email = email;
    this.password = password;
}

const manoj = new createUser("manoj", "manoj@google.com", "123");
console.log(manoj);