const obj={h:1,a:2,r:3}
const newObj={}
function swapped(obj){

  for (const [key, value] of Object.entries(obj)) {
    newObj[value]=key;
  }
  
  return newObj;
}
console.log(swapped(obj));
