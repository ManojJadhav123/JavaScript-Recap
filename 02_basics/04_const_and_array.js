// we should use const for creating arrays.
// because it is much more safer and easy to maintain that array later on.

// NOTE : always use const for reference types 

const fruits = ["apple", "mango"]; // fruits variable got a space in stack memory but the actual array elments are in heap.
// const fruits = ["apple", "mango"]; // cannot do this when already declared using const.

fruits.push("banana"); // can perform array operations when created an array using const
console.log(fruits);