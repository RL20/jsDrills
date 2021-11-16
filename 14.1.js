const numbers = [35, 65, 20, 3, -7, 6, 8, 11];

//!1. max---------------------------------
let max = numbers.reduce((accumulator, currentValue) =>
  accumulator > currentValue ? accumulator : currentValue
);
console.log(max);
//!2. sum of even numbers-----------------
let sumOfEven = numbers.reduce((accumulator, currentValue) => {
  return currentValue % 2 === 0 ? accumulator + currentValue : accumulator;
}, 0);
//? let sumOfEven = numbers
//   .filter((a) => a % 2 === 0)
//   .reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
//   });
console.log("sumOfEven:", sumOfEven);
//!3. average-----------------------------
let avg = numbers.reduce((acc, cur, i, arr) => {
  return i === arr.length - 1 ? (acc + cur) / arr.length : acc + cur;
});
// let avg =
//   numbers.reduce((accumulator, currentValue) => accumulator + currentValue) /
//   numbers.length;
// console.log(avg);

console.log("avg:", avg);
