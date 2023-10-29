let myname = "manoj    ";

// console.log(myname.trueLength);

let myHeroes = ["thor", "spiderman"];

let heroPower = {
    thor : "Hammer",
    spiderman : "Sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.manoj = function(){
    console.log("manoj is present in all objects");
}

Array.prototype.heyManoj = function(){
    console.log("manoj is saying hi from array prototype");
}

// myHeroes.manoj();
// heroPower.manoj();

// myHeroes.heyManoj();
// heroPower.heyManoj(); 



// Inheritance
 
const user = {
    name : "manoj",
    email: "manoj@google.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TaSupport = {
    makeAssignment : "JS Assignment",
    fullTime : true,
    __proto__ : TeachingSupport
}

Teacher.__proto__ = user;

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUserName = "jadhavmanoj";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is : ${this.trim().length}`);
}

anotherUserName.trueLength();
"manoj".trueLength();
"kiran".trueLength();