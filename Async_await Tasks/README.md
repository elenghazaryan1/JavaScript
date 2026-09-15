# 🟣 Async/Await & Promises

This project contains JavaScript exercises focused on **Promises** and **`async/await`**.

The tasks demonstrate how to rewrite asynchronous code between Promise chaining and `async/await` syntax while keeping the same behavior.

---

# 📌 Tasks

## Task 1 — Rewrite using `async/await`

The original code uses `.then()` and `.catch()` to handle a Promise that resolves with the number `10`.

### Goal

Rewrite the Promise chain using:

- `async`
- `await`
- `try/catch`

### Result

```text
20
```

### 🔑 Concepts used

- `async` functions
- `await`
- `Promise`
- `try/catch`
- Promise resolution

---

## Task 2 — Rewrite using `async/await`

Rewrite Promise-based asynchronous logic using `async/await`.

The task demonstrates how a resolved Promise can be awaited and its result used inside an `async` function.

### 🔑 Concepts used

- `async`
- `await`
- Promise results
- Error handling

---

## Task 3 — Rewrite using `async/await`

Given two functions:

- `getName()` → resolves with `"Albert"`
- `getAge()` → resolves with `23`

The original code uses chained `.then()` calls.

### Goal

Rewrite the chain using `async/await`.

### Expected output

```text
Albert
23
```

### 🔑 Concepts used

- Multiple `await` expressions
- Sequential asynchronous operations
- Promise chaining vs `async/await`

---

## Task 4 — Rewrite using Promises

Given an `async` function that:

1. Gets the number `5`
2. Waits for the result using `await`
3. Multiplies it by `3`

### Goal

Rewrite the code using Promise `.then()` syntax.

### Expected output

```text
15
```

### 🔑 Concepts used

- `Promise.resolve()`
- `.then()`
- Converting `async/await` to Promise chaining

---

## Task 5 — Rewrite using Promises

Given an `async` function that:

1. Gets the name `"John"`
2. Waits for the Promise
3. Prints `"Hello John"`

### Goal

Rewrite the code using `.then()`.

### Expected output

```text
Hello John
```

### 🔑 Concepts used

- Promise chaining
- `.then()`
- `async/await` vs Promises

---

# 🧠 What I Practiced

### Promises

- Creating resolved Promises with `Promise.resolve()`
- Handling Promise results with `.then()`
- Understanding Promise chaining
- Understanding resolved values

### Async/Await

- Creating `async` functions
- Using `await` with Promises
- Handling multiple asynchronous operations
- Using `try/catch` for errors
- Rewriting `.then()` chains using `async/await`

### Converting Between Syntaxes

```text
Promise
   ↓
.then()
   ↓
async/await
```

and

```text
async/await
   ↓
.then()
   ↓
Promise
```

The main goal was to understand that **`async/await` and Promise chaining are two different ways of working with the same Promise-based asynchronous operations**.

---

# ⚖️ Promise vs Async/Await

| Promises              | Async/Await             |
| --------------------- | ----------------------- |
| `.then()`             | `await`                 |
| `.catch()`            | `try/catch`             |
| Promise chaining      | Sequential-looking code |
| Callback-based syntax | Easier-to-read syntax   |

---

# 📂 Project Structure

```text
Async-Await/
├── task1.js
├── task2.js
├── task3.js
├── task4.js
└── task5.js
```

---

# ▶️ Run

Run each task with Node.js:

```bash
node task1.js
node task2.js
node task3.js
node task4.js
node task5.js
```

---

# 🛠️ Technologies

- JavaScript
- Node.js
- Promises
- `async/await`
- ES6+
