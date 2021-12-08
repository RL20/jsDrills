function myPromise(num) {
  return new Promise((resolve, reject) => {
    num > 10 ? resolve("greater than 10") : reject("failed");
  });
}

myPromise(11)
  .then((data) => console.log(data))
  .catch((data) => console.log(data));
