const array = ["Hello", "Good Day", "Your Welcome", "hotdog","hamburgers"];

let old = {a: 'value', b: 'some value', c: 'e'};
let old1 = {a: 'value1', b: 'some value1'};
let obj = {...old, ...old1};
//a: 'value1', b: 'some value1'

let result=Array.from(array.join('').replace(/\s/g,'').toLowerCase()).reduce((acc,element) => ({...acc, [element]: (acc[element] || 0) + 1 }), {});
console.log(result);
obj[]
// Array.from(array.join('').replace(/\s/g,'').toLowerCase()).reduce((acc,element)=>{
//   //({...acc})

//   acc[element] = 0
//   return acc;
// },{})
 

// function letterAsKey(array){
//   let str=array.join('').replace(/\s/g,'').toLowerCase().split('');
//   str.forEach(char => {
//     newObj[char]=(newObj[char] &&  newObj[char]+1 )|| 1
//   });

//   return newObj;

// }
// console.log(letterAsKey(array));