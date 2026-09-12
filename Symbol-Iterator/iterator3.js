const User = {
  [Symbol.hasInstance](value) {
    if (value.name && value.email) {
      return true;
    }
    return false;
  },
};

const user = {
  name: "John",
  email: "john@gmail.com",
};

const product = {
  title: "iPhone",
  price: 1000,
};

console.log(user instanceof User);
console.log(product instanceof User);
