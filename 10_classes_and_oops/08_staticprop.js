class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Usename : ${this.username}`);
    }

    static createId(){
        return `123`;
    }
}

const manoj = new User("manoj");
manoj.logMe();
// console.log(manoj.createId()); // TypeError: manoj.createId is not a function

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const kiran = new Teacher("kiran", "k@google.com");
// console.log(kiran.createId()); // TypeError: kiran.createId is not a function