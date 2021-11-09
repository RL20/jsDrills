

function percentageOfWorld1(population,country){
  let worldPopulation= 7900
  return`The population of ${country} is  ${(population/worldPopulation*100).toFixed(2)}% of world population`;

}
let Israel=percentageOfWorld1(9,'Israel');
let Taiwan=percentageOfWorld1(24,'Taiwan');
let Egypt=percentageOfWorld1(95,'Egypt');

console.log(`${Israel}\n\n ${Taiwan}\n\n ${Egypt}`);

const percentageOfWorld2 =(population,country)=>(`The population of ${country} is  ${(population/7900*100).toFixed(2)}% of world population`)
console.log(`\n-----------percentageOfWorld2------------\n\n ${percentageOfWorld2(9,'Israel')}`); 
console.log(`\n ${percentageOfWorld2(24,'Taiwan')}`); 
console.log(`\n  ${percentageOfWorld2(95,'Egypt')}`); 
