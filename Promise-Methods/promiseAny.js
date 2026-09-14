function promiseAny(promises) {
  let errors = [];
  let rejectedCount = 0;
  if (promises.length === 0) {
    return Promise.reject(new AggregateError(errors));
  }
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; ++i) {
      Promise.resolve(promises[i])
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          errors[i] = err;
          rejectedCount++;
          if (rejectedCount === promises.length) {
            reject(new AggregateError(errors));
          }
        });
    }
  });
}

promiseAny([
  Promise.reject("Error 1"),
  Promise.resolve("Success"),
  Promise.reject("Error 2"),
]).then((data) => {
  console.log(data);
});
