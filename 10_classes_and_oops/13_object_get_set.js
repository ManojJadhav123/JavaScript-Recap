const User = {
    _email : 'manoj@google.com',
    _password : 'abc',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const manoj = Object.create(User)
console.log(manoj.email)