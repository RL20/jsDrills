function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

Pokemon.prototype.callPokemon = function () {
  console.log(`I choose you, ${this.name}`);
};
Pokemon.prototype.attack = function (attackNumber) {
  console.log(`${this.name} used ${this.attackList[attackNumber]}`);
};
Pokemon1 = new Pokemon("pokik", "male", ["Cursing", "Tsekek", "rude"]);
Pokemon2 = new Pokemon("poka", "female", ["Scratches", "Shouts", "Screams"]);
Pokemon3 = new Pokemon("pokikon", "trans", [("Jumps", "Beat with a belt", "Throws powder")]);

Pokemon1.callPokemon();
Pokemon2.callPokemon();
Pokemon3.callPokemon();
Pokemon1.attack(0);
Pokemon2.attack(0);
Pokemon3.attack(0);
