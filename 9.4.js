function steps(n) {
  let step = Array(n).fill(" ");
  for (i = 0; step.indexOf(" ") !== -1; i++) {
    step[i] = "#";
    console.log(`'${step.join("")}'`);
  }
}
steps(3);
// !-----------------------------------------------------------
console.log("\n\n");
function steps2(n) {
  let str = Array(n).fill(" ").join("");
  let newStr = "";
  let i = 0;
  while (n > i) {
    newStr += `#${str.slice(str.length - n + 1)}`;
    console.log(`'${newStr}'`);
    newStr = newStr.trim();
    n--;
  }
}
steps2(3);
// !-----------------------------------------------------------
function steps3(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    str += "#";
    for (let j = 0; j < n - 1 - i; j++) {
      str += " ";
    }
    console.log(`'${str}'`);
    str = str.trim();
  }
}
steps3(3);
