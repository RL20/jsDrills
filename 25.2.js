let david = {
  name: "David",
  printName() {
    console.log(this.name);
  },
  printNameAfterSecound() {
    this;
    setTimeout(this.printName.bind(this), 1000);
  },
};

david.printNameAfterSecound();
