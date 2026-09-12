const product = {
  name: "Laptop",
  price: 1500,

  [Symbol.toPrimitive](hint) {
    if (hint === "string") {
      return `${this.name}: $${this.price}`;
    } else if (hint === "number") {
      return this.price;
    }
    return this.price;
  },
};
console.log(String(product));
console.log(Number(product));
console.log(product + 100);
