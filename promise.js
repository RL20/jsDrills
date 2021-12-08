/**
 * what makeAllCaps returns ->
 * @return {promise}  resolved arr with every thing uppercase.
 * edge cases - any property that is not a string
 */
const makeAllCaps = (arr) => {
  return new Promise((resolve, reject) => {
    arr.every((element) => element.toString() === element) ? resolve(arr.map((str) => str.toUpperCase())) : reject("Ayy non strings were found");
  });
};

/**
 * what sortWords returns ->
 * @return {promise}  resolved arr with every thing sorted.
 * edge cases - any property that is not a string
 */
const sortWords = (arr) => {
  return new Promise((resolve, reject) => {
    arr.every((element) => element.toString() === element) ? resolve(arr.sort()) : reject("Ayy non strings were found");
  });
};
const newArr = ["hello", "hi", "aaaa", "bbbb", "dddd", "fff"];
sortWords(newArr)
  .then((res) => {
    //res = sorted newArr
    return makeAllCaps(res); // return promise;
  })
  .then((res2) => console.log(res2))
  .catch((error) => console.log(error));
