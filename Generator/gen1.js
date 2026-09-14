function* numberGenerator(start, end) {
  for (let i = start; i < end; ++i) {
    while (i <= end) {
      yield i;
      i++;
    }
  }
}

const gen = numberGenerator(1, 5);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
