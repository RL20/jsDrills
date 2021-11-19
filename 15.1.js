// function getSum(arr1, arr2){
//   const sum = 0;
//   for (let i=0; i < arr1.length; i++){
//   sum += arr1[i];
//   }
//   for (let i=0; i < arr2.length; i++){
//   sum += arr2[i];
//   }
//   }
//   getSum([1,2,3][5,66,23]);

//1-getSum undefined because comma missing between two arguments

//2-sum set to const so it can't change and accumulate the result
//?TypeError: Assignment to constant variable.
//! i use the step into

//! fix the problem
function getSum(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
}
getSum([1, 2, 3], [5, 66, 23]);
