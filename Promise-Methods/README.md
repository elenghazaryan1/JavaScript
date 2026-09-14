# Promise Combinators

A small JavaScript project implementing the main Promise combinators from scratch to understand how they work internally.

## 📌 Implemented Methods

### `promiseAll()`

Works similarly to `Promise.all()`.

- Resolves when all Promises are fulfilled.
- Preserves the original order of results.
- Rejects immediately if any Promise rejects.
- Supports ordinary values.
- Returns an empty array for an empty input.

### `promiseAllSettled()`

Works similarly to `Promise.allSettled()`.

- Waits for all Promises to settle.
- Never rejects.
- Returns the status and result of every Promise.
- Preserves the original order.
- Supports both fulfilled and rejected Promises.

Example result:

```js
[
  { status: "fulfilled", value: "Success" },
  { status: "rejected", reason: "Error" },
];
```

### `promiseRace()`

Works similarly to `Promise.race()`.

- Settles as soon as the first Promise settles.
- Resolves if the first settled Promise is fulfilled.
- Rejects if the first settled Promise is rejected.
- Supports ordinary values.

### `promiseAny()`

Works similarly to `Promise.any()`.

- Resolves as soon as the first Promise is fulfilled.
- Ignores rejected Promises while waiting for a successful one.
- If all Promises reject, rejects with an `AggregateError`.
- Stores all rejection reasons in the original order.
- Supports ordinary values.
- An empty array results in an `AggregateError`.

## 🧠 What I Practiced

- Creating Promises manually with `new Promise()`
- Using `resolve()` and `reject()`
- Handling fulfilled and rejected Promises
- Using `Promise.resolve()` with both Promises and ordinary values
- Understanding Promise settlement
- Preserving the original order of asynchronous results
- Working with `AggregateError`
- Understanding the differences between Promise combinators

## 📂 Project Structure

```text
Promise/
│
├── promiseAll.js
├── promiseAllSettled.js
├── promiseRace.js
├── promiseAny.js
└── README.md
```

## 🚀 Goal

The goal of this project is not just to reproduce the behavior of native Promise methods, but to understand the logic behind Promise combinators and asynchronous JavaScript.

## ✨ Result

Implemented the core behavior of:

```text
Promise.all()
Promise.allSettled()
Promise.race()
Promise.any()
```

without directly using the native combinator methods.
