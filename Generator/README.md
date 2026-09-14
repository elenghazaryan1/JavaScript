# JavaScript Generators

A small JavaScript project implementing different generator functions to practice `yield`, `.next()`, infinite generators, pagination, and passing values back into a generator.

## 📌 Implemented Generators

### 1. `numberGenerator(start, end)`

Generates integers sequentially from `start` to `end`, inclusive.

Example:

```js
const gen = numberGenerator(3, 6);

gen.next().value; // 3
gen.next().value; // 4
gen.next().value; // 5
gen.next().value; // 6
```

### 2. `idGenerator()`

An infinite generator that creates unique string identifiers.

Example:

```text
id_1
id_2
id_3
id_4
...
```

Each `.next()` call produces a new ID.

### 3. `fibonacci()`

An infinite generator that produces Fibonacci numbers one at a time.

Example:

```text
0
1
1
2
3
5
8
13
21
...
```

### 4. `paginate(array, pageSize)`

Splits an array into smaller chunks and yields one chunk on each `.next()` call.

Example:

```js
const gen = paginate([1, 2, 3, 4, 5, 6, 7], 3);
```

Produces:

```text
[1, 2, 3]
[4, 5, 6]
[7]
```

### 5. `storeGenerator(initialValue)`

Demonstrates passing values into a generator using `.next(value)`.

The generator stores the current value and returns its doubled value.

Example:

```js
const gen = storeGenerator(5);

gen.next().value; // 10
gen.next(7).value; // 14
gen.next(20).value; // 40
```

## 🧠 What I Practiced

- Creating generator functions with `function*`
- Using `yield`
- Controlling generators with `.next()`
- Creating infinite generators
- Maintaining state between `.next()` calls
- Passing values into generators with `.next(value)`
- Using generators for pagination
- Generating sequences lazily instead of calculating everything at once

## 🚀 Goal

The goal of this project is to understand how JavaScript generators work and how `yield` and `.next()` can be used to pause, resume, and control execution.

## ✨ Result

Implemented five generator functions:

```text
numberGenerator()
idGenerator()
fibonacci()
paginate()
storeGenerator()
```
