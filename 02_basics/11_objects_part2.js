// const tinderUser = new Object(); // singleton object

const tinderUser = {} // non singelton object

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);


const regularUser = {
    email : "manoj@gmail.com",
    fullname : {
        userFullname : {
            firstName : "manoj",
            lastName : "jadhav"
        }
    }
}

console.log(regularUser.fullname.userFullname.lastName); // jadhav

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({} , obj1, obj2, obj4); // better method than above one

// using spread operator

const obj3 = {...obj1, ...obj2, ...obj4};
// console.log(obj3);


// Array of objects

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "w@gmail.com"
    },
    {
        id: 3,
        email: "e@fmail.com"
    }
]

console.log(users[1].email); // w@gmail.com

console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // [ '123abc', 'sammy', false ]
console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedIn', false ] ]


console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true

 
// object destructuring

const course = {
    courseName : "Js in hindi",
    price : "999",
    courseInstructor : "manoj"
}

const {courseInstructor : instructor} = course;

console.log(courseInstructor); // manoj
console.log(instructor); // manoj


// from apis we get data in form of JSON which is similar to form of object but both key and values are
// in the form of strings

// {
//     "name" : "manoj",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }

// from apis we can also get data in the array , actually we get collection of different objects

[
    {},
    {},
    {}
]