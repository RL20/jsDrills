
let populations=[9,23,95,300];
const percentageOfWorld2 =(p)=>(`${(p/7900*100).toFixed(2)}%`);

function populationPercentages(populations){
  let percentages=[];

  let i=0;
  while(i<populations.length){
    
    percentages.push(percentageOfWorld2(populations[i]));
    i++;
  }
 return percentages;
}
console.log(populationPercentages(populations));
