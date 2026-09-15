# 🔵 Web Workers & Shared Memory

A collection of JavaScript exercises exploring **Web Workers**, **TypedArrays**, **ArrayBuffer**, **SharedArrayBuffer**, and communication between the Main Thread and Workers.

## 📁 Tasks

### Task 1 — ArrayBuffer + TypedArray

The Main Thread creates an `ArrayBuffer` and a `Uint32Array` containing:

```text
10, 20, 30, 40, 50
```

The `ArrayBuffer` is transferred to the Worker using a **transferable object**.

The Worker creates a `Uint32Array`, multiplies every value by `2`, and sends the buffer back.

**Result:**

```text
20
40
60
80
100
```

---

### Task 2 — Working with an Array

The Main Thread sends a regular JavaScript array to the Worker:

```text
[12, 45, 7, 89, 23, 56, 91, 3, 67]
```

The Worker finds the largest number using `Math.max()` and sends the result back.

**Result:**

```text
91
```

---

### Task 3 — TypedArray

The Main Thread creates a `Uint8Array` containing:

```text
10, 20, 30, 40, 50
```

The TypedArray is sent to the Worker.

The Worker multiplies every element by `2` and sends the result back.

**Result:**

```text
20
40
60
80
100
```

---

### Task 4 — SharedArrayBuffer

The Main Thread creates a `SharedArrayBuffer` with a size of **16 bytes** and creates a `Uint32Array` from it.

The Main Thread writes values into the shared memory and sends the `SharedArrayBuffer` to the Worker.

The Worker modifies the values directly in the shared memory.

The Main Thread then reads the modified values from the **same `SharedArrayBuffer`**.

This demonstrates how the Main Thread and Worker can access the same memory instead of transferring or copying the data.

## 🧠 Concepts Covered

- Web Workers
- `postMessage()`
- `onmessage`
- `ArrayBuffer`
- `Uint8Array`
- `Uint32Array`
- Transferable Objects
- `SharedArrayBuffer`
- Shared Memory
- Main Thread ↔ Worker communication
- Basic synchronization concepts

## ▶️ Running the Project

Because Web Workers require a browser environment, run the project using a local HTTP server.

For example:

```bash
npx serve .
```

Then open the provided `localhost` URL in your browser.

> **Note:** `SharedArrayBuffer` requires a cross-origin isolated environment. For Task 4, the server must provide the appropriate security headers.

## 📂 Project Structure

```text
workers-homework/
├── index.html
├── main.js
├── worker.js
├── main2.js
├── worker2.js
├── main3.js
├── worker3.js
├── main4.js
└── worker4.js
```

## 🎯 Goal

The goal of these exercises is to understand how JavaScript Workers communicate with the Main Thread and how different types of memory can be transferred, copied, or shared between execution contexts.
