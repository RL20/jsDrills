arr = [1, 2, 3, 4, 5, 6];
const doubleValues = arr.map((n) => n * 2);
console.log(doubleValues);
//!2
const arr2 = [];
const onlyEvenValues = arr.forEach((n) => {
  if (n % 2 === 0) {
    arr2.push(n);
  }
});
console.log(arr2);
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

console.log(showFirstAndLast(["s", "g", "a", 1, 2, 3]));
console.log(showFirstAndLast(["s", "g", "a"]));

//? continue..
