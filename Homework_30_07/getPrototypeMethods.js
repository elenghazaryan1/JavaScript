function getPrototypeMethods(obj) {
  let names = [];
  const base = Object.getPrototypeOf(obj);
  if (base && base !== Object.prototype) {
    names = Object.getOwnPropertyNames(base);
  } else {
    return [];
  }
  let arr = [];
  for (let i = 0; i < names.length; i++) {
    if (typeof base[names[i]] === "function" && names[i] !== "constructor") {
      arr.push(names[i]);
    }
  }
  return arr;
}
function User(name) {
  this.name = name;
}

User.prototype.sayHi = function () {
  return `Hi, ${this.name}`;
};

User.prototype.getName = function () {
  return this.name;
};

const user = new User("Alex");

console.log(getPrototypeMethods(user));
console.log(getPrototypeMethods({ a: 1 }));
console.log(getPrototypeMethods([]).includes("push"));
const base = {
  x: 10,
  print() {
    return "hello";
  },
};

const obj = Object.create(base);

console.log(getPrototypeMethods(obj));
console.log(getPrototypeMethods(Object.create(null)));
