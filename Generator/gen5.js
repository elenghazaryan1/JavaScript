function* storeGenerator(value) {
  let current = value;

  while (true) {
    const newValue = yield current * 2;

    current = newValue;
  }
}
const gen = storeGenerator(5);

console.log(gen.next().value);
console.log(gen.next(7).value);
console.log(gen.next(20).value);
console.log(gen.next(10).value);
