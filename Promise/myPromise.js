class MyPromise {
  constructor(executor) {
    this.state = "pending";
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
        this.onFulfilledCallbacks.forEach((fn) => {
          queueMicrotask(() => fn(this.value));
        });
      }
    };

    const reject = (reason) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.reason = reason;
        this.onRejectedCallbacks.forEach((fn) => {
          queueMicrotask(() => fn(this.reason));
        });
      }
    };
    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }
  then(onFulfilled, onRejected) {
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;

    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };
    return new MyPromise((resolve, reject) => {
      if (this.state === "pending") {
        this.onFulfilledCallbacks.push(() => {
          try {
            const fulfilledFromLastPromise = onFulfilled(this.value);
            if (fulfilledFromLastPromise instanceof MyPromise) {
              fulfilledFromLastPromise.then(resolve, reject);
            } else {
              resolve(fulfilledFromLastPromise);
            }
          } catch (err) {
            reject(err);
          }
        });
        this.onRejectedCallbacks.push(() => {
          try {
            const rejectedFromLastPromise = onRejected(this.reason);
            if (rejectedFromLastPromise instanceof MyPromise) {
              rejectedFromLastPromise.then(resolve, reject);
            } else {
              resolve(rejectedFromLastPromise);
            }
          } catch (err) {
            reject(err);
          }
        });
      }

      if (this.state === "fulfilled") {
        try {
          const fulfilledFromLastPromise = onFulfilled(this.value);
          if (fulfilledFromLastPromise instanceof myPromise) {
            fulfilledFromLastPromise.then(resolve, reject);
          } else {
            resolve(fulfilledFromLastPromise);
          }
        } catch (err) {
          reject(err);
        }
      }

      if (this.state === "rejected") {
        try {
          const rejectedFromLastPromise = onRejected(this.reason);
          if (rejectedFromLastPromise instanceof myPromise) {
            rejectedFromLastPromise.then(resolve, reject);
          } else {
            resolve(rejectedFromLastPromise);
          }
        } catch (err) {
          reject(err);
        }
      }
    });
  }
  catch(onRejected) {
    return this.then(null, onRejected);
  }
}
// testing code

console.log("1");

const promise = new MyPromise((resolve) => {
  console.log("2");
  resolve(5);
});

promise.then((value) => {
  console.log(value);
});

console.log("3");

new MyPromise((resolve, reject) => {
  setTimeout(() => reject("Server  down"), 300);
})
  .then((val) => {
    console.log("Should not run:", val);
  })
  .catch((err) => {
    console.log("Caught error:", err);
    return "Recovered from backup";
  })
  .then((recoveredVal) => {
    console.log("Chain revived:", recoveredVal);
  });
