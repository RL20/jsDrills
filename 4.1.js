//!7- it's happen because  '1' given in propt is string and not a number type ,we need to convert it with parseInt() function
let numSiblings = parseInt (prompt('How many siblings do you have?'));
if (numSiblings===1){
  console.log('1 sibling!');
}
else if(numSiblings>1){
console.log('More than 1 sibling');
}
else{
  console.log('No siblings');
}

// let numSiblings = prompt('How many siblings do you have?');
// if (numSiblings==1){
//   console.log('1 sibling!');
// }
// else if(numSiblings>1){
// console.log('More than 1 sibling');
// }
// else{
//   console.log('No siblings');
// }