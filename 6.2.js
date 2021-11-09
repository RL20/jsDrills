const people = ["Greg", "Mary", "Devon", "James"];
//!1. Using a loop, iterate through this array and console.log all of the people.
for (element  of people) {
  console.log(element);
}
//!2. Write the command to remove "Greg" from the array.
function removeFirst(arr){
  return arr.shift();
}
//!3. Write the command to remove "James" from the array.
function removeLast(arr){
  return arr.pop();
}
//! 4. Write the command to add "Matt" to the front of the array.
function addFirst(arr,name){
  return arr.unshift(name);
}
//!5. Write the command to add your name to the end of the array.
function addLast(arr,name){
  return arr.push(name);
}
//! 6. Using a loop, iterate through this array and after console.log-ing "Mary",exit from the loop.
for (element  of people) {
  console.log(element);
  if(element==='Mary'){
    break;
  }
}
//!7. Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
let copy = people.slice(2);

//!-8. Write the command that gives the indexOf where "Mary" is located.
let whereMary=people.indexOf('Mary');

//!9. Write the command that gives the indexOf where "Foo" is located (thisshould return -1).
let whereFoo=people.indexOf('Foo');



//1- first loop
removeFirst(people);//2- remove "Greg"
removeLast(people);//3- remove "James"
addFirst(people,'Matt');//4- add "Matt"
addLast(people,'Harel');//5- add my name
//6- in a body

console.log(people);
console.log(copy);//7- copy
console.log(whereMary);
console.log(whereFoo);

console.log('\n----------------------------------------')
//!10. Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth"
//const people = ["Greg", "Mary", "Devon", "James"];
//and "Artie". Your array should look like this when you are done ["Greg","Mary", "Elizabeth", "Artie", "James"].
 //people.splice(start, deleteCount, item1)
 people.splice(0, 4, 'Greg', 'Mary','Elizabeth','Artie','James');
 console.log(people);

 //!11. Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
 let withBob=people.concat("Bob");
