const candyStore = {
  candies: [
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
  ],
  cashRegister: 200,
};

function getCandy(candyStore, id) {
  const found = candyStore.candies.find((element) => element.id === id);
  return found;
}
function getPrice(candyStore, id) {
  const found = candyStore.candies.find((element) => element.id === id);
  return found.price;
}
function addCandy(candyStore, id, name, price) {
  const found = candyStore.candies.forEach((element) => {
    if (element.id === id) {
      element.amount++;
    }
  });
}
function buy(candyStore, id) {
  const found = candyStore.candies.find((element) => element.id === id);
  candyStore.cashRegister += found.price;
  found.amount--;
}
console.log(getCandy(candyStore, "5hd7y"));
console.log(getPrice(candyStore, "5hd7y"));
console.log(addCandy(candyStore, "5hd7y"));
console.log(candyStore);
console.log(buy(candyStore, "5hd7y"));
console.log(candyStore);
