// function findSmallest(a, b, c) {
//   if (a > b > c) {
//     return c;
//   } else if (a > c > b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// findSmallest(52, 66, 2);

function findSmallest(a, b, c) {
  if ((a > b && b > c) || (b > a && a > c)) {
    return c;
  } else if ((a > c && c > b) || (c > a && a > b)) {
    return b;
  } else {
    return a;
  }
}

// The first problem is that the function always returns B because the conditions are mathematically incorrect,
// it is not possible to place a greater than on three operands in parallel,
// but it has to be split into two expressions.

// The second problem is that the conditions were not tested on all the posiable option
//! i use the step into
console.log(findSmallest(52, 66, 2));
