// function calcAverage(arr) {
//   var sum;
//   for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// calcAverage([85, 90, 92]);

function calcAverage(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage([85, 90, 92]));

//breakpoint on line 3 spot that sum = undefined
// in the end of step into the return value is 267 ,
// that means there wasn't Division into a triangle  the array length
