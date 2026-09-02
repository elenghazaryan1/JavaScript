# 🧩 MyPromise

A custom implementation of JavaScript's native `Promise`, built from scratch to understand how Promises work internally.

## 📌 About the Project

This project is an educational implementation of the core Promise concepts in JavaScript.

The goal is to understand how:

- Promise states work
- `resolve` and `reject` change the state
- `then()` handles fulfilled and rejected states
- callbacks are stored while a Promise is pending
- Promise chaining works
- errors are propagated
- microtasks affect Promise execution order

---

## 🔄 Promise States

A Promise has three possible states:

```text
pending
   │
   ├── resolve() ──→ fulfilled
   │
   └── reject() ───→ rejected
```

Once a Promise leaves the `pending` state, its state cannot be changed again.

### `pending`

The initial state. The Promise has not finished yet.

### `fulfilled`

The operation completed successfully and has a resulting `value`.

### `rejected`

The operation failed and has a `reason`.

---

## ⚙️ How It Works

### `resolve(value)`

When `resolve()` is called:

1. The state changes from `pending` to `fulfilled`.
2. The result is stored in `value`.
3. Stored fulfillment callbacks are executed.
4. Callback execution is scheduled as a microtask.

### `reject(reason)`

When `reject()` is called:

1. The state changes from `pending` to `rejected`.
2. The rejection reason is stored in `reason`.
3. Stored rejection callbacks are executed.
4. Callback execution is scheduled as a microtask.

---

## 🛡️ Executor & Error Handling

The executor receives two functions:

```text
executor(resolve, reject)
```

- `resolve` — signals successful completion
- `reject` — signals failure

The executor is executed inside `try/catch`.

If the executor throws an error, the Promise is rejected with that error.

---

## 🔗 `then()` & Promise Chaining

The `then()` method accepts two callbacks:

```text
then(onFulfilled, onRejected)
```

- `onFulfilled` handles successful completion.
- `onRejected` handles rejection.

`then()` returns a **new Promise**, which makes chaining possible.

```text
Promise
   │
   ▼
 then()
   │
   ▼
New Promise
   │
   ▼
 then()
   │
   ▼
New Promise
```

If a callback returns:

- a normal value → the new Promise is fulfilled with that value
- another `myPromise` → the new Promise follows its result
- an error → the new Promise is rejected

---

## ⏳ Pending Callbacks

If `then()` is called while the Promise is still `pending`, its callbacks cannot run immediately.

They are stored in callback arrays:

```text
pending
   │
   ▼
store callback
   │
   ▼
resolve / reject
   │
   ▼
microtask queue
   │
   ▼
execute callback
```

This allows callbacks to run after the Promise settles.

---

## ⚡ Microtasks

The implementation uses `queueMicrotask()` to reproduce an important part of native Promise behavior.

For example:

```text
console.log("1");

new myPromise((resolve) => {
  console.log("2");
  resolve(5);
}).then((value) => {
  console.log(value);
});

console.log("3");
```

Output:

```text
1
2
3
5
```

The executor runs synchronously, while the `then()` callback is scheduled as a microtask.

---

## 🧪 Testing

The project includes basic tests for:

- fulfilled Promises
- rejected Promises
- numeric values
- Promise chaining
- returned Promises
- error handling
- synchronous vs asynchronous execution

Example:

```text
const promise = new myPromise((resolve) => {
  resolve(10);
});

promise
  .then((value) => value * 2)
  .then((value) => {
    console.log(value);
  });
```

Output:

```text
20
```

---

## 📂 Project Structure

```text
Promise/
│
├── myPromise.js
└── README.md
```

---

## 🎯 Learning Goals

This project was created to gain a deeper understanding of:

- JavaScript Promises
- asynchronous JavaScript
- callback queues
- microtask queues
- error handling
- functional chaining
- state management
- Promise resolution flow

---

## 🚧 Current Limitations

This is an educational implementation and does not reproduce every detail of the native JavaScript `Promise` specification.

Possible future improvements include:

- `catch()`
- `finally()`
- `myPromise.resolve()`
- `myPromise.reject()`
- `all()`
- `race()`
- thenable handling
- complete Promise Resolution Procedure
- more accurate native Promise behavior

---

## 📚 Conclusion

Building `myPromise` from scratch helps demonstrate that a Promise is not simply a callback.

It is a state-based mechanism that:

1. starts in `pending`
2. settles into `fulfilled` or `rejected`
3. stores its result or reason
4. manages callbacks
5. supports chaining
6. uses the microtask queue for asynchronous callback execution

> **The purpose of this project is not to replace native Promise, but to understand how it works under the hood.** 🚀
