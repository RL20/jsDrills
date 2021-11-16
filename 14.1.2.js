const candies = [
  {
    name: "mint gum",
    id: "as12f",
    price: 2,
    amount: 2,
  },
  {
    name: "twix",
    id: "5hd7y",
    price: 5,
    amount: 4,
  },
];
// console.log(candies);

// return objsList[0][key];
const extractOnlyValue = function (objsList, key) {
  return objsList.reduce((acc, cur) => {
    acc.push(cur[key]);
    return acc;
  }, []);
};
console.log("extractOnlyValue:", extractOnlyValue(candies, "id"));
