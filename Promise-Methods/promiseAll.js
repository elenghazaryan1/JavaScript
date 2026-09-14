function promiseAll(promises) {
  if (promises.length === 0) {
    return Promise.resolve([]);
  }
  let results = [];
  let resolvedCount = 0;

  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; ++i) {
      Promise.resolve(promises[i])
        .then((result) => {
          results[i] = result;
          resolvedCount++;
          if (resolvedCount === promises.length) {
            resolve(results);
          }
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
}

const p1 = new Promise((resolve) => {
  setTimeout(() => resolve("first"), 1000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => resolve("second"), 500);
});

const p3 = Promise.resolve("third");

promiseAll([p1, p2, p3]).then((result) => {
  console.log(result);
});
