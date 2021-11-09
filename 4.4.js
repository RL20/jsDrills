


const divideOrHasSeven = (n)=>{ 

 
    // if(n) { console.log('you must Enter number greater than 0'); return '';}

    for (let i=0;i<=n;i++){
       const isSeven=String(i).includes('7');
        if(isSeven && i%7===0){
          console.log('BOOM BOOM');
        }
        else if(  i%7===0){
          console.log('BOOM');
        }
        else{
          console.log(i);
        }
        
    }

}
divideOrHasSeven(75);
// console.log()