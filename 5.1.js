
function countryToLiveIn(language, isIsland, population , country){
  language=language.toLowerCase();
  let criterionA=false;
  let criterionB=false;
  let criterionC=false;
  if(language==='english'){
    criterionA=true;
  }
  if(population<50){
    criterionB=true;
  }
  if(isIsland!==true){
    criterionC=true;
  }

  return criterionA&&criterionB&&criterionC===true?`You should live in ${country}`:` ${country} does not meet your criteria`;

}
console.log(countryToLiveIn('Hebrew',false,9,'Israel'));
console.log(countryToLiveIn('English',false,49,'NeverLand'));

