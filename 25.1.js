const hero = {
  health: 5,
  power: 68,
  getStrength: function () {
    if (this.health <= 5) {
      return this.power - 10;
    } else return this.power;
  },
};
function whoIsStronger(getStrength) {
  const myStrength = 82;
  if (getStrength() < myStrength) {
    return "I am stronger";
  } else return "You are stronger";
}
// console.log(hero.getStrength());
// console.log(whoIsStronger(hero.getStrength));
let func = hero.getStrength.bind(hero);
console.log(whoIsStronger(func));

// let sayHello = function (age, country) {
//   console.log("Hello! My name is " + this.name + ", I`m " + age + " years old and I'm from " + country);
// };

// let david = {
//   name: "David",
// };

// let davidSayHello = sayHello.bind(david, 29, "Germany");
// davidSayHello();
// console.log(sayHello.bind(david, 29, "Germany"));
