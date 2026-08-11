# 🦁 JavaScript Wildlife Sanctuary

## 📖 Overview

This project implements a class-based wildlife sanctuary system using JavaScript and core OOP principles. It demonstrates **inheritance, encapsulation, private fields, getters/setters, method overriding, and controlled state changes**.

## ✨ Features

The system includes:

- 🐾 **Animal** — base class with common properties and behaviors.
- 🦅 **Predator** — extends `Animal` with hunting and hunger management.
- 🦁 **Lion** — extends `Predator` with pride information and roaring behavior.
- 🌿 **Herbivore** — extends `Animal` with grazing behavior and favorite plants.
- 🐰 **Rabbit** — extends `Herbivore` with jumping and customized grazing behavior.

## 🧠 Concepts Demonstrated

- Class-based inheritance
- Private fields (`#`)
- Getters and setters
- Encapsulation
- Method overriding
- `super`
- Constructor inheritance
- Input validation
- Energy management and constraints
- Polymorphic behavior

## ⚡ Energy System

Every animal has an energy level between **0 and 100**.

| Action           | Energy Change |
| ---------------- | ------------: |
| `eat()`          |           +20 |
| `sleep(hours)`   | +`hours × 10` |
| `hunt()`         |           -30 |
| `roar()`         |           -10 |
| `graze()`        | -10, then +15 |
| Rabbit `graze()` |  -5, then +20 |
| `jump()`         |            -5 |

Energy limits are enforced through a setter using `Math.max()` and `Math.min()`.

## 🧬 Class Structure

```text
Animal
├── Predator
│   └── Lion
└── Herbivore
    └── Rabbit
```

The project also includes test cases demonstrating the behavior of each class and verifying the energy constraints.

## 🎯 Purpose

The main goal of this project is to practice designing class relationships and applying OOP principles in JavaScript through a practical wildlife sanctuary example.
