const storm = {
  superPower: "flying",
  // print: printSuperPower,
};

var superPower = storm.superPower;
function printSuperPower() {
  console.log("my superpower is " + this.superPower);
}
// storm.print();
printSuperPower();
