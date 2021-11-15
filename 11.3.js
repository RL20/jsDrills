const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];

function namesFromArray(arr) {
  const names = arr.map((elemnt) => {
    return elemnt.name;
  });
  return names;
}
// console.log(namesFromArray(data));

//!2------------------------------------
function bornBefore1990(arr) {
  const bornBr = [];

  arr.forEach((element) => {
    let year = element.birthday.split("-")[2];
    if (year < 1990) {
      bornBr.push(element);
    }
  });
  return bornBr;
}
// console.log(bornBefore1990(data));

//!3-------------------------

function foods(arr) {
  const foodObj = {};
  arr.forEach((element) => {
    [...element.favoriteFoods.meats, ...element.favoriteFoods.fish].forEach(
      (e) => (foodObj[e] ? foodObj[e]++ : (foodObj[e] = 1))
    );
  });

  return foodObj;
}

console.log(foods(data));
