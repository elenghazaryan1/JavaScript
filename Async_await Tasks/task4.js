function getNumber2() {
  return Promise.resolve(5);
}

getNumber2().then((number) => {
  console.log(number * 3);
});
