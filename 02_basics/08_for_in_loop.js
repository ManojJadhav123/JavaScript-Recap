const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits2 = [];

for(let index in fruits){
    fruits2.push(fruits[index].toLocaleUpperCase());
}

console.log(fruits2);