const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros);

console.log(marvel_heros); // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

console.log(marvel_heros[3][1]); // flash

const allHeroes = marvel_heros.concat(dc_heros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
console.log(allHeroes);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const realAnotherArray = another_array.flat(Infinity);
console.log(realAnotherArray); // [1, 2, 3, 4, 5,6, 7, 6, 7, 4, 5]

console.log(Array.isArray("manoj")); // false 
console.log(Array.from("manoj")); // [ 'm', 'a', 'n', 'o', 'j' ]
console.log(Array.from({name : "manoj"})); // [] - gives an empty array , it's an interesting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); // [ 100, 200, 300 ]

