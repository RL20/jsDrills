function Square(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}
Square.prototype.isSquare = function () {
  if (this.a === this.b && this.c === this.d && this.a === this.c) {
    console.log(true);
  } else {
    console.log(false);
  }
};

let test = new Square(1, 2, 3, 4);
let test2 = new Square(4, 4, 4, 4);
test.isSquare();
test2.isSquare();
