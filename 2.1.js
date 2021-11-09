function describeCountry(country, population,capitalCity)
{
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

 

let fn=describeCountry('Finland', 6 ,'Helsinki');
let isr=describeCountry('Israel', 9,'Jerusalem');
let tn=describeCountry('Taiwan', 23,'Taipei');

console.log(`${fn}\n\n${isr}\n\n${tn}`);