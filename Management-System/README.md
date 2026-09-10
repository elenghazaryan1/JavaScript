# 👥 Employee Management System

A simple **JavaScript Object-Oriented Programming (OOP)** project that demonstrates **classes, inheritance, encapsulation, private fields, constructors, and methods**.

## 📌 About the Project

This project models a simple employee management system with a base `Employee` class and two specialized employee types:

- 👨‍💻 `Developer`
- 👩‍💼 `Manager`

The project demonstrates how child classes can inherit functionality from a parent class while also having their own private properties and methods.

## 🏗️ Class Structure

```text
                    Employee
                   /        \
                  /          \
           Developer        Manager
```

### 👤 Employee

The base class contains common employee information and functionality.

**Private fields:**

- `#name`
- `#baseSalary`

**Methods:**

- `getName()`
- `getBaseSalary()`
- `calculatePay()`
- `getProfileInfo()`

---

### 👨‍💻 Developer

Extends the `Employee` class and adds developer-specific functionality.

**Private fields:**

- `#mainLanguage`
- `#bugsFixed`

**Methods:**

- `writeCode()`
- `fixBug()`

Example:

```js
const developer = new Developer("Alice", 1500, "JavaScript");

developer.writeCode();
developer.fixBug();
```

---

### 👩‍💼 Manager

Extends the `Employee` class and adds manager-specific functionality.

**Private fields:**

- `#teamSize`
- `#successfulDeals`

**Methods:**

- `conductMeeting()`
- `closeDeal()`

Example:

```js
const manager = new Manager("Alla", 1500, 24);

manager.conductMeeting();
manager.closeDeal();
```

## 🧠 Concepts Demonstrated

This project focuses on several important JavaScript OOP concepts:

### 🔹 Encapsulation

Private class fields are created using `#`:

```js
#name;
#baseSalary;
```

These properties cannot be accessed directly from outside the class.

### 🔹 Inheritance

`Developer` and `Manager` inherit from `Employee`:

```js
class Developer extends Employee
```

```js
class Manager extends Employee
```

### 🔹 Constructor & `super()`

Child classes use `super()` to initialize properties defined in the parent class:

```js
constructor(name, baseSalary, mainLanguage) {
  super(name, baseSalary);
  this.#mainLanguage = mainLanguage;
}
```

### 🔹 Private State

Each employee type maintains its own private state.

For example, a developer tracks fixed bugs:

```js
#bugsFixed = 0;
```

while a manager tracks successful deals:

```js
#successfulDeals = 0;
```

## ▶️ Running the Project

Make sure you have **Node.js** installed.

Run the project with:

```bash
node management.js
```

## 📂 Project Structure

```text
PDR/
│
├── management.js
└── README.md
```

## 🖥️ Example Output

```text
Alla
Alice
Simon's Salary: 2000
Profile info:
name: John, salary: 2000
Alice fixed one bug
Alla successfully dealed one time!
John has started a meeting, team size is 14
Simon's bonus for this month is: 3000
```

## 🛠️ Technologies

- JavaScript
- Node.js
- Object-Oriented Programming
- ES6+ Classes

## 🎯 Learning Goals

The main goal of this project is to practice:

- Classes
- Objects
- Inheritance
- Encapsulation
- Private class fields
- Constructors
- `super()`
- Methods
- Code organization

---

Made with 💻 and JavaScript
