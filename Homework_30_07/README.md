# 🧬 JavaScript Prototype Homework

## 📖 Overview

This project is a collection of JavaScript exercises focused on understanding **prototypes, constructor functions, prototype chains, and object creation**.

The tasks recreate several built-in JavaScript behaviors manually, providing practical experience with JavaScript's prototype-based object model.

## ✨ Features

### 🔹 Custom `instanceof`

A manual implementation of JavaScript's `instanceof` operator that traverses the prototype chain to determine whether an object is an instance of a given constructor.

### 🔹 Custom `new`

A manual implementation of the `new` operator that creates an object, links it to the constructor's prototype, calls the constructor with the correct `this`, and handles explicit object returns.

### 🔹 Property Lookup

A utility that determines whether a property is **own**, **inherited**, or **not found** by traversing the prototype chain.

### 🔹 Prototype Methods

A utility that finds function properties defined directly on an object's immediate prototype while excluding the object's own properties.

### 🔹 `Array.prototype.mySum()`

A custom array method that calculates the sum of numeric elements and validates input values before performing the calculation.

## 🧠 Concepts Demonstrated

- Prototype-based inheritance
- Prototype chain traversal
- Constructor functions
- `Constructor.prototype`
- `Object.create()`
- `Object.getPrototypeOf()`
- Own vs inherited properties
- Function methods
- Custom implementations of `new` and `instanceof`
- Extending built-in prototypes
- Type checking and error handling

## 📁 Project Structure

```text
Prototype Homework/
├── task1.js
├── task2.js
├── task3.js
├── task4.js
├── task5.js
└── README.md
```

## 🎯 Goal

The main goal of this homework is to understand **how JavaScript objects, constructors, and prototypes work behind the scenes** by recreating common language mechanisms without using ES6 classes.

---

**JavaScript · Prototypes · Object-Oriented Programming** 💻✨
