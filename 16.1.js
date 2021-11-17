//!Block 1
function funcA() {
  console.log(a); // undefined var a hoisted
  console.log(foo()); //2 because the function declaration of foo is hoisted the top og the function
  var a = 1;
  function foo() {
    return 2;
  }
}
funcA();
//!Block 2
var fullName = "John Doe";
var obj = {
  fullName: "Colin Ihrig",
  prop: {
    fullName: "Aurelio De Rosa",
    getFullName: function () {
      return this.fullName;
    },
  },
};
console.log(obj.prop.getFullName()); //"Aurelio De Rosa" because call thr object method and methid return this from the object scope
var test = obj.prop.getFullName;
console.log(test()); //"John Doe" because test set to function and not to value ,
//so the function is the method from the object but out of the object it turn to regulat function ,
// and because the this  Out of context of the object it refer to the windows scope
// the this.fullName of the windows id the var fullName = "John Doe";

//!Block 3
function funcB() {
  let a = (b = 0);
  a++;
  return a;
}
funcB();
console.log(typeof a); // undefine because a declare in the function funcB but unknowen out of the scope ,so the typeof will be undefined
console.log(typeof b); //b is global so in knowen out of the function  so typeof will be numver

//!Block 4
function funcC() {
  console.log("1");
}
funcC(); //the function declaretion is hoisted to the top ,since we  redecler funcC so the last overwrite the first one so the it log 2
function funcC() {
  console.log("2");
}
funcC(); //log 2

//!Block 5
function funcD1() {
  d = 1;
}
funcD1();
console.log(d); // 1 because d is global varible
function funcD2() {
  var e = 1;
}
funcD2();
console.log(e); //when we call to the function funcD2 and var e set to 1 ,it's know only in the function funcD2 ,
// because var in a fabction scope

//!Block 6
function funcE() {
  console.log("Value of f in local scope: ", f); //value of f=1 because call to funcE is hoisting to thw top
}
console.log("Value of f in global scope: ", f); // the value of f =undefined because the var f is hoisting ,but is set to 1 only after the log
var f = 1;
funcE();
