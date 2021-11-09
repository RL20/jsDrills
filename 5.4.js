
function colorGiven (color){

  switch(color){
    case 'yellow':
    case 'pink':
    case 'orange':
      return 'light color';
      break;
    case 'blue':
    case 'ppurple':
    case 'brown':
      return 'dark color';
      break;
    default:
      return' Unknown color';

  }
}
console.log(colorGiven('blue'));