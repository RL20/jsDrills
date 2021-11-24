function countOccurrences(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      counter += 1;
    }
  }
  return counter;
}
countOccurrences("ini mini miny moe", "n");

// the value of counter doen't keep becuse  the if sentance doen't keep it value
//to fix it we must force the varible count to keep the value by reassign the new value
// counter+=1 or counter =counter+1
//use step into
