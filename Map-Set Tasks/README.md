# 🟢 MAP & SET — `new Map()` / `new Set()`

This project contains JavaScript exercises focused on the **`Map`** and **`Set`** data structures.

The tasks demonstrate how to work with key-value pairs, unique values, checking, updating, deleting, iterating, and counting data.

---

# 🟢 MAP — `new Map()`

## Task 1 — User Roles

Created a `Map` where:

- **Key** → `userId`
- **Value** → user role

Given data:

```js
const users = new Map([
  [101, "admin"],
  [205, "user"],
  [307, "moderator"],
  [412, "user"],
]);
```

### Requirements

1. Get the role of user `307`
2. Check whether user `500` exists
3. Change the role of user `205` to `"moderator"`
4. Delete user `412`
5. Print the number of users
6. Iterate over the `Map` and print:

```text
101 → admin
205 → moderator
307 → moderator
```

### 🔑 Map methods used

- `get()` — get a value by key
- `has()` — check whether a key exists
- `set()` — add or update an entry
- `delete()` — remove an entry
- `size` — get the number of entries
- `for...of` — iterate over entries

---

## Task 2 — Word Counter

Given the following array:

```js
const words = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "apple",
  "kiwi",
  "orange",
];
```

Using **only a `Map`** to store the results, count how many times each word appears.

### Expected result

```text
apple → 3
banana → 2
orange → 2
kiwi → 1
```

### 🔑 Concepts used

- `Map`
- Key-value pairs
- `get()`
- `set()`
- `has()`
- `for...of`
- Counting occurrences

---

# 🟡 SET — `new Set()`

## Task 1 — Unique IDs

Given the following array:

```js
const ids = [101, 205, 101, 307, 205, 412, 307, 500, 101, 412];
```

Using a `Set`:

1. Get only the unique IDs
2. Find the number of unique users
3. Check whether `307` exists
4. Check whether `999` exists
5. Add `600`
6. Delete `205`

### Expected unique IDs

```text
101
205
307
412
500
```

After adding `600` and deleting `205`:

```text
101
307
412
500
600
```

### 🔑 Set methods used

- `new Set()` — create a Set
- `has()` — check whether a value exists
- `add()` — add a value
- `delete()` — remove a value
- `size` — get the number of unique values
- `for...of` — iterate over values

---

# 🧠 What I Practiced

### `Map`

- Storing data as **key-value pairs**
- Accessing values with `get()`
- Checking keys with `has()`
- Adding and updating entries with `set()`
- Removing entries with `delete()`
- Getting the number of entries with `size`
- Iterating through entries
- Counting occurrences using a `Map`

### `Set`

- Storing **unique values**
- Removing duplicates
- Checking values with `has()`
- Adding values with `add()`
- Removing values with `delete()`
- Getting the number of unique values with `size`
- Iterating through a `Set`

---

# ⚖️ Map vs Set

| `Map`                  | `Set`                |
| ---------------------- | -------------------- |
| Stores key-value pairs | Stores unique values |
| `key → value`          | `value`              |
| `get()`                | No `get()`           |
| `set()`                | `add()`              |
| `has()`                | `has()`              |
| `delete()`             | `delete()`           |
| `size`                 | `size`               |

---

# 📂 Project Structure

```text
Map-Set/
├── map-task1.js
├── map-task2.js
└── set-task1.js
```

---

# ▶️ Run

Run each task with Node.js:

```bash
node map-task1.js
node map-task2.js
node set-task1.js
```

---

# 🛠️ Technologies

- JavaScript
- Node.js
- ES6+ `Map`
- ES6+ `Set`
