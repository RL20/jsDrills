//referance https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n

//!1. Fill an array with 100 of a same object using array fillmethod.
// let bla='bla bla';
// let filledArray = new Array(100).fill(bla);
let filledArray = new Array(10).fill({hi:'bye'});
console.log(filledArray);

//!2. Create an array with numbers ranging from 1-100 using the Array.from method.
let arr2=[];
// arr2=Array.from(Array(100).keys());
arr2=Array.from({length: 100}, (_, i) => i + 1);
console.log(arr2);
//!3. Convert only values of an object into one array.
let arrFromObjectValue=[]
let data={0:"a", 1:"b", 2:"c"};
for(key in data) {
  if(data.hasOwnProperty(key)) {
    arrFromObjectValue.push(data[key]) ;
  }
}
console.log(`solution for 3-----${Array.isArray(arrFromObjectValue) }`);

//!4 .Convert an array into one object
// Object.assign({}, ['a','b','c']); // {0:"a", 1:"b", 2:"c"}
let objConvertedFromArray={ ...['a', 'b', 'c'] };
console.log(objConvertedFromArray);

//!5. Find out if an array is an array
arr3=[1, 2, 3];
console.log(Array.isArray(arr3));
//!6. Copy an array.
// Old way
//const cloneSheeps = sheeps.slice();

// ES6 way
//const cloneSheepsES6 = [...sheeps];
let arr4=[1,2,3,4,5,6];
let clonearr4=[...arr4];
console.log(arr4 === clonearr4);
// false --> it's pointing to a new memory space


// *
// ?
//!
// 