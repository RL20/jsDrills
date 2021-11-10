//country, capital, language, population ,[neighbours ]

let mycountry={
  contry:'Israel',
  capital: 'Jerusalem',
  language:'Hebrew',
  population:9,
  neighbours:['Jordan','Egypt','Lebanon','Sirya'],
  describe:function(){return `${this.contry} has ${this.population} million people,their mother tongue is ${this.language},they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`},checkIsland:function(){return this.neighbours?isIsland=false:isIsland=true;},
  checkIsland:function(){this.isIsland =this.neighbours.length?false:true;},
 
};


console.log(mycountry);
console.log(mycountry.checkIsland());
console.log(mycountry);
console.log(mycountry.isIsland);
// console.log(mycountry.checkIsland());
// console.log(mycountry.describe());