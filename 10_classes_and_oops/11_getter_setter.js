class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}@manoj`
    }
    set password(value){
        this._password = value
    }
}

const manoj = new User("manoj@google.com", "abc");
console.log(manoj.email);