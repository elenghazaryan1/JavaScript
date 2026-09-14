function* fibonacci() {
  let num1 = 0;
  let num2 = 1;
  while (true) {
    yield num1;

    let oldNum = num1;

    num1 = num2;

    num2 += oldNum;
  }
}
const gen = fibonacci();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
