console.log("2" > 1); // true because internally its converted to number
console.log("02" > 1); //ture same case

console.log(null > 0); //false
console.log(null == 0); // false
console.log(null >=0); // true  

/*
    The reason is that an equality check == and comparisons > < >= <= work differetly.
    Comparisons convert null to a number , treating it as 0.
    That's why (3) null >= 0 is true and (1) null > 0 is false.
*/

console.log(undefined == 0); //false
console.log(undefined > 0 ); //false
console.log(undefined < 0); //false

console.log(2 === "2"); //false