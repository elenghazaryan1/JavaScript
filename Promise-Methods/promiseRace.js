function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; ++i) {
      Promise.resolve(promises[i])
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
}

promiseRace([
  new Promise((resolve) => {
    setTimeout(() => resolve("Slow"), 1000);
  }),
  new Promise((resolve) => {
    setTimeout(() => resolve("Fast"), 300);
  }),
]).then((result) => {
  console.log(result);
});
