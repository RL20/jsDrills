//!A

const foods = ["falafel", "sabich", "hummus", "pizza with extrapineapple"];

const ascending = foods.sort();
console.log(ascending);
const descending = foods.slice().sort().reverse();
console.log(descending);

//!B---------------------------------------------------------
const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];
const ascendingWithUpperCase = foodsWithUpperCase.sort((a, b) =>
  a.toLowerCase() > b.toLowerCase() ? 1 : -1
);
console.log(ascendingWithUpperCase);
const descendingWithUpperCase = foodsWithUpperCase
  .sort((a) => a.toLowerCase())
  .reverse();

console.log(descendingWithUpperCase);
//!C-----------------------------------------------------------
const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];
const longest = words.sort((a, b) => a.length - b.length);
console.log(longest);
