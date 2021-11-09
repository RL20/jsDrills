const arr = [1,7,3,0,-5,7,3,9];
//!1. Print with for loop all the number.
for(let i=0;i<arr.length;i++){
  console.log(arr[i]);
}
//!2. Create function “arrayLength” that return the array length (don’t use arr.length)
function lenght(arr){

  lenght=0;
  for (element  of arr) {
    lenght++;
  }
  return lenght;
}
//!3. Create function “arraySum” , the function return the sum of all elements in array.
function arraySum(arr){
  let sum=0;
  for (element  of arr) {
    sum+=element;
  }
  return sum;

}
//!4. Create function “arrayMulti” , the function return the multiplication of all the elements in array.
function arrayMulti(arr){
  let mul=1;
  for (element  of arr) {
    mul*=element;
  }
  return mul;
}

 
console.log('\n\n');
console.log(arraySum(arr));
console.log('\n\n');
console.log(arrayMulti(arr));
console.log('\n\n');
console.log(lenght(arr));