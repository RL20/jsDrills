//!Block 1-----
// firstResult call the function someFunction and the someFunction function  return the function otherFunction as a value.
// result call  the function otherFunction and pass it parameter 2 ,
// but is not in use the value.
// the value return fron otherFunction function is 5 because b set to 5 in the Closure of  otherFunction
// b is global but the someFunction change it to 5
var b = 1;
function someFunction(number) {
  function otherFunction(input) {
    return b;
  }
  b = 5;
  return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);
//!Block 2-------------------------------------
// console.log (a) Returns the value 1 because it calls A which is in the outer scope,
// inside the b2 function there is a = 10 but it does not change it,
//  because there is a call to a function whose name is also A and even though it appears after the return
//  it is defined because The hoisting that causes it to be at the top of the hierarchy as if written in the first sentence of the b2 function
var a = 1;
function b2() {
  a = 10;
  return;
  function a() {}
}
b2();
console.log(a);
//!Block 3------------------------------------
// Because the i is a variable set in the external scoop,
// the Closure of the setTimeout function does not hold it,
//  the for loop run before the 100 milliseconds of the setTimeout function,
//  when  the setTimeout will be executed and returned an answer The for loop will already end
//  and the value of i will be set to 3 and only then the value of the function will be returned,
//  but within the log function the value of i is already 3.

//  If the i was set within the loop for ,then the Closure of the seTimeout function Would immediately retain the value of i
//  and since in the end og the loop the value of  i would disappear so the Closure keep i value already in the creation of the setTimeout function
//  (not to lose it),  and therefore the setTimeout function would return the updated i. 0,1,2
let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 100);
}
