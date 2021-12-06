// 1. Use a constructor function to implement a Car. A car has a make(brand) and a speed property. The speed property is the current speed of the car in km/h.
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console.
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console.
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.
// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h
function Car(carBrand, speed) {
  this.carBrand = carBrand;
  this.speed = speed;
}
Car.prototype.accelerate = function () {
  this.speed += 10;
};
Car.prototype.brake = function () {
  this.speed -= 5;
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

bmw.accelerate();
bmw.brake();
bmw.accelerate();
bmw.accelerate();

mercedes.accelerate();
mercedes.brake();
mercedes.brake();
mercedes.accelerate();

console.log(`Function Consturctor: BMW Speed is: ${bmw.speed} KM/H`);
console.log(`Function Consturctor: Mercedes Speed is: ${mercedes.speed} KM/H`);

class Car1 {
  constructor(carBrand, speed) {
    this.carBrand = carBrand;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
  }
  brake() {
    this.speed -= 5;
  }
}
const car1 = new Car1("BMW", 120);
const car2 = new Car1("Mercedes", 95);

car1.accelerate();
car1.brake();
car1.accelerate();
car1.accelerate();

car2.accelerate();
car2.brake();
car2.brake();
car2.accelerate();

console.log(`Class Car: BMW Speed is: ${car1.speed} KM/H`);
console.log(`Class Car: Mercedes Speed is: ${car2.speed} KM/H`);
