arr = [1, 2, 3, 4, 5, 6];
const doubleValues = arr.map((n) => n * 2);
// console.log(doubleValues);
//!2
const arr2 = [];
const onlyEvenValues = arr.forEach((n) => {
  if (n % 2 === 0) {
    arr2.push(n);
  }
});
// console.log(arr2);
//!3
const showFirstAndLast = function (arr) {
  const fistLast = [];
  arr.forEach((element, index) => {
    if (
      typeof element === "string" &&
      (index === 0 || index === arr.length - 1)
    ) {
      fistLast.push(element);
    }
  });

  return fistLast;
};

// console.log(showFirstAndLast(["s", "g", "a", 1, 2, 3]));
// console.log(showFirstAndLast(["s", "g", "a"]));

//!4-------------------------------------
const vowelCount = (str) => {
  const obj = {};
  str.split("").forEach((element) => {
    obj[element] = (obj[element] || 0) + 1;
  });
  return obj;
};
console.log(vowelCount("hharel"));
//!5---------------------------------------
const capitalize = (str) => {
  const newStr = str.split("").map((element) => {
    return element.toUpperCase();
  });
  return newStr.join("");
};
console.log(capitalize("hharel"));

//!6-----------------------------------------
const shiftLetters = (str) => {
  const newStr = str.split("").map((element) => {
    return String.fromCharCode(element.charCodeAt() + 1);
  });
  return newStr.join("");
};
console.log(shiftLetters("abc"));

//!7---------------------------------------------
const swapCase = (str) => {
  const newStr = str.split(" ").map((element, i) => {
    return i % 2 == 0 ? element.toUpperCase() : element;
  });
  return newStr.join(" ");
};
console.log(swapCase("returns a string that every other word is"));
