function getName2() {
  return Promise.resolve("John");
}

getName2().then((name) => {
  console.log("Hello", name);
});
