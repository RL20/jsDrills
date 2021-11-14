const food = ["Noodle", "Pasta", "Ice-cream", "Meat","Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives","Hamburgers"];
const a=[1,2,3];
const a2=[4,5,6];
function compare(arr1,arr2){
  let common=[];
  for(i=0;i<arr1.length;i++){
    for(j=0;j<arr2.length;j++){
      if(arr1[i]===arr2[j]){
        common.push(arr1[i]);
      }
    }

  }
  return common.length===0?false:common;

}
console.log(compare(food,food1));
console.log(compare(a,a2));