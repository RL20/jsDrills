
function leap(year){
  return (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))? `It is indeed a leap year`: `This is not a leap year`;
}

console.log(leap(2012));
console.log(leap(2100));
console.log(leap(2400));
