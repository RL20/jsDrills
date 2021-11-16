const numbers = [1, -5, 666, 2, 400, 11];
const descending = numbers.sort((a, b) => b - a); //Mutating the array
const ascending = numbers.slice().sort((a, b) => a - b); //since i put a slice() so th earray won't mutate
console.log(descending);
console.log(ascending);
