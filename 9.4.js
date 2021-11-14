function steps(n){
  
  let step=Array(n).fill(' ');
  for(i=0;step.indexOf(' ')!==-1;i++){
    step[i]='#'
    console.log(`'${step.join('')}'`);
  }
}
steps(3);
// !-----------------------------------------------------------
