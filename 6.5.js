//!1. Fill an array with 100 of a same object using array fillmethod.
// let bla='bla bla';
// let filledArray = new Array(100).fill(bla);
let filledArray = new Array(10).fill({'hi':'bye'});
console.log(filledArray);

//!2. Create an array with numbers ranging from 1-100 using the Array.from method.
let arr2=[];
// arr2=Array.from(Array(100).keys());
arr2=Array.from({length: 100}, (_, i) => i + 1);
console.log(arr2);