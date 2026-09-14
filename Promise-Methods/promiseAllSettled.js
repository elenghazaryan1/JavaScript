function promiseAllSettled(promises) {
  if (promises.length === 0) {
    return Promise.resolve([]);
  }
  let results = [];
  let resolvedCount = 0;

  return new Promise((resolve) => {
    for (let i = 0; i < promises.length; ++i) {
      Promise.resolve(promises[i])
        .then((result) => {
          results[i] = {
            status: "fulfilled",
            value: result,
          };
          resolvedCount++;
          if (resolvedCount === promises.length) {
            resolve(results);
          }
        })
        .catch((err) => {
          results[i] = {
            status: "rejected",
            reason: err,
          };
          resolvedCount++;
          if (resolvedCount === promises.length) {
            resolve(results);
          }
        });
    }
  });
}

promiseAllSettled([
  Promise.resolve("Hello"),
  Promise.reject("Something went wrong"),
  42,
]).then((results) => {
  console.log(results);
});
