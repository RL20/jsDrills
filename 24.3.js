// find
// filter
Array.prototype.filter = function () {
  return "filter overwrite by new logic";
};
Array.prototype.find = function () {
  return "find overwrite by new logic";
};
Array.prototype.reduce = function () {
  return "reduce overwrite by new logic";
};
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.filter((e) => e > 4));
