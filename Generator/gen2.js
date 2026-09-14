function* idGenerator() {
  let count = 1;
  while (true) {
    yield `id_${count++}`;
  }
}

const gen = idGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
