function makeAllCaps(arr) {
  return new Promise((resolve, reject) => {
    arr.every((e) => typeof e === "string") ? resolve(arr.map((e) => e.toUpperCase())) : reject("the array contain non string element1");
  });
}

function sortWords(arr) {
  return new Promise((resolve, reject) => {
    arr.every((e) => typeof e === "string") ? resolve(arr.sort()) : reject("the array contain non string element2");
  });
}

arr = ["b", "c", "a"];
arr2 = [1, "c", "b"];
// console.log();
// sortWords(arr)
//   .then((arrToCheck) => makeAllCaps(arrToCheck))
//   .then((sortedArr) => sortedArr)
//   .catch((err) => console.log(err));

sortWords(arr)
  .then((arrToCheck) => makeAllCaps(arrToCheck))
  .then((sortedArr) => console.log(sortedArr))
  .catch((err) => console.log(err));
