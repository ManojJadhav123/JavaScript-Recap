// Date is an object in javascript 

let myDate = new Date();
console.log(myDate.toString()); // Thu Oct 19 2023 04:23:01 GMT-0700 (Pacific Daylight Time)
console.log(myDate.toDateString()); // Thu Oct 19 2023
console.log(myDate.toLocaleString()); // 19/10/2023, 4:23:01 am
console.log(myDate.toLocaleDateString()); // 19/10/2023
console.log(myDate.toISOString()); // 2023-10-19T11:23:01.377Z
console.log(myDate.toJSON()); // 2023-10-19T11:23:01.377Z

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
