//? Question 1:
// In your own words what will this point to and why?(Note
// this is the global scope)
console.log(this);

//!on the browser it will refer to windows object

//? Question 2:
// a. In your own words what will this point to and why.
// b. How can you fix this code.
const myObj = {
  name: "Timmy",
  // greet: () => {
  //   console.log(`Hello ${this.name}`);
  // },
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};
myObj.greet();

//! a. refer to windows object because  the arrow function doesn't have there on this ,
//so the this inside the function refer to the this of the windows

//! b. just replace the function from arrow to regular function

//? Question 3:
// In your own words what will this point to and why?
const myFuncDec = function () {
  console.log(this);
};
//!  refer to windows object because the this point to the scope outter of the function

// Question 4:
// In your own words what will this point to and why?
const myFuncArrow = () => {
  console.log(this);
};
myFuncArrow();
//!  refer to windows object because  arrow function doen't have there on  'this' so the this taken fron the above scope

// //?Question 5:
// a. In your own words what will this point to and why.
// b. How can you fix this code.
// document.querySelector(".element").addEventListener((e) => {
//   console.log(this);
// });
//!since the callback function is arrow so it doent't have her on this and it get it lexicaly from the scope above which is the windows.
//to fix it i add event argument 'click' and set tag with '.element' class inside the html
document.querySelector(".element").addEventListener("click", (e) => {
  console.log(this);
});
