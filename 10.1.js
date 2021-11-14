function isString(str, func) {
  return func(str);
}
function checkStr(str) {
  if (typeof str == "string") {
    return str;
  }
}

console.log(isString("RL", checkStr));

//! -2
function firstWordUpperCase(str, func) {
  const arr = str.split(" ");
  arr[0] = str.split(" ")[0].toUpperCase();
  return func(arr.join(" "));
}

function dashesBetweenWord(str) {
  return str.replace(/\s/g, "-");
}
console.log(firstWordUpperCase("all in one", dashesBetweenWord));
//!-3

let rep = function (str) {
  return str.repeat(2);
};
console.log(firstWordUpperCase("repeat time ", rep));
