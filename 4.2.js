function  scoreInLatters(score){
  
  if(score>=0 && score<=64){return 'F';}
  else if(score>=65 && score<69){return 'D';}
  else if(score>=70 && score<=79){return 'C';}
  else if(score>=90 && score<=100){return 'C';}
  
}