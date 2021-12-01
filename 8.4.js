const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
const newObj = {};
function letterAsKey(array) {
  let str = array.join("").replace(/\s/g, "").toLowerCase().split("");
  str.forEach((char) => {
    newObj[char] = (newObj[char] && newObj[char] + 1) || 1;
  });
  return newObj;
}

console.log(letterAsKey(array));

let letterAsKey2 = Array.from(
  array.join("").replace(/\s/g, "").toLowerCase()
).reduce(
  (acc, element) => ({ ...acc, [element]: (acc[element] || 0) + 1 }),
  {}
);
console.log(letterAsKey2);
