
function avg(a,b,c){
  return( a+b+c) / 3;
}

let JohnTean= avg(89,120,103);
let MikeTean= avg(116,94,123);
//!
//  JohnTean= avg(116,94,123);
//  MikeTean= avg(89,120,103);

// if (JohnTean > MikeTean){
//   console.log(`John team have ${JohnTean}, and it is the  highest average score` );
// }
// else if (MikeTean>JohnTean){
//   console.log( `Mike team have ${MikeTean}, and it is the  highest average score`); 
// }
// else{
//   console.log('the evrage score is even !');
// }

let MaryTeam = avg(97,134,105);
JohnTean= avg(116,94,123);
MikeTean= avg(89,120,103);

if(MaryTeam===JohnTean===MikeTean){ console.log('the evrage score is even !');}
else if (JohnTean > MikeTean && JohnTean>MaryTeam){
  console.log(`John team have ${JohnTean}, and it is the  highest average score` );
}
else if (MikeTean>JohnTean && MikeTean>MaryTeam){
  console.log( `Mike team have ${MikeTean}, and it is the  highest average score`); 
}
else{
  console.log( `Mary team have ${MaryTeam}, and it is the  highest average score`); 
 
}
