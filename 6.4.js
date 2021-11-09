
let populations=[9,23,95,300];
const percentageOfWorld2 =(p)=>(`${(p/7900*100).toFixed(2)}%`);

function populationPercentages(populations){
  let percentages=[];
  for(element of populations){
    percentages.push(percentageOfWorld2(element));
  }
 return percentages;
}
console.log(populationPercentages(populations));
