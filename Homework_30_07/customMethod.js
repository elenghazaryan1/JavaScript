Array.prototype.mySum = function () {
  let sum = 0;
  for (let i = 0; i < this.length; i++) {
    if (typeof this[i] !== "number" || Number.isNaN(this[i])) {
      return "Error, wrong values";
    }
    sum += this[i];
  }

  return sum;
};

console.log([1, 2, 3].mySum());
console.log([10, -5, 4].mySum());
console.log([].mySum());

console.log([1, "2", 3].mySum());
console.log([1, NaN].mySum());
console.log([true, 2].mySum());
