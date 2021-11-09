//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND
//!if/else
function validation1(password){
  if(password.length>7){ return `Strong`;}
  else{ return `Weak`;}
}
//!ternary
function validation2(password){
  return password.length>7?`Strong`:`Weak`;
}
// ! && logical
function validation3(password){
  //console.log((password.length > 7 && "Strong") || "Weak");
  let isValid=(password.length > 7 )&& "Strong";
  if(!isValid){
    isValid='Weak';
  }
  return isValid;
  
}

//!advanced”
function superValidation(password){
  if( password.length>7 &&  /[A-Z]/.test(password)){
    return`Very Strong`;
  }
  else if(password.length>7){
    return`Strong`;
  }
  else{
    return 'Weak';
  }
}

console.log(validation3('1A678'));
