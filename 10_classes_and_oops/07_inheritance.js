class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`username is : ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by the user : ${this.username}`);
    }
}

const manoj = new Teacher("manoj", "manoj@google.com", "123");
manoj.logMe();
manoj.addCourse();

const kiran = new User("kiran");
kiran.logMe();
// kiran.addCourse(); // TypeError: kiran.addCourse is not a function

console.log(manoj instanceof Teacher); // true
console.log(manoj instanceof User); // true
