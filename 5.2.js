
function func(language){

  let msg='';
  switch(language){
    case 'mandarin': 
      msg='MOST number of native speakers!';
      break;
    case 'spanish': 
      msg='2nd place in number of native speakers';
      break;
    case 'english': 
      msg='3rd place';
      break;
    case 'hindi': 
      msg='Number 4';
      break;
    case 'arabic': 
      msg='5th most spoken language';
      break;
    default:
      msg='Not in the top 5';
  }
  return msg;
}
console.log(func('mandarin'));
console.log(func('spanish'));
console.log(func('english'));
console.log(func('hindi'));
console.log(func('arabic'));
console.log(func('other'));