// function getSumOfEven(arr) {
//   return arr[2] + arr[4] + arr[6] + arr[8] + arr[10];
// }
// getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function getSumOfEven(arr) {
  return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
}
getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// the index of array start from zero ,
// if the array size is 10 that means the array finish at index 9
// arr call on index 10 which does not exist
// so arr[10] is undefined ,concat numbers with undefined leat to NaN ,so it return undefined
//! use step into
