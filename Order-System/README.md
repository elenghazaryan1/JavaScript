# 🛒 Mini E-commerce Order System

A simple e-commerce order system built with **JavaScript** and **Object-Oriented Programming (OOP)**.

The project focuses on practicing **SOLID principles**, especially **Single Responsibility Principle (SRP)** and **Open/Closed Principle (OCP)**.

## ✨ Features

- 👤 User management
- 📦 Product management
- 🛍️ Order and product management
- 💸 Percentage and fixed discounts
- 💳 Multiple payment methods
- 📩 Multiple notification methods
- 💾 Order repository
- 🧾 Order subtotal calculation
- ✅ Payment status management

## 🏗️ Project Structure

### `Product`

Represents a product with:

- `id`
- `name`
- `price`

### `User`

Represents a customer.

- `name`
- `rating`

A user can be associated with an order.

### `Order`

Responsible for managing products in an order.

Methods:

- `addProduct()`
- `removeProduct()`
- `getProducts()`
- `calculateSubtotal()`

### `Discount`

Different discount strategies can be used without changing the checkout logic:

- `NoDiscount`
- `PercentageDiscount`
- `FixedAmountDiscount`

Each discount implements:

```text
apply(subtotal)
```

### `Payment`

Different payment methods follow the same interface:

- `CreditCardPayment`
- `PaypalPayment`
- `CryptoPayment`

Each payment method implements:

```text
pay(amount)
```

### `Notification`

Different notification methods can be used:

- `EmailNotification`
- `SMSNotification`

Each notification implements:

```text
send(message)
```

### `OrderRepository`

Responsible for storing completed orders.

```text
save(order)
```

### `Checkout`

Coordinates the complete checkout process:

```text
Check cart
    ↓
Calculate subtotal
    ↓
Apply discount
    ↓
Process payment
    ↓
Update payment status
    ↓
Send notification
    ↓
Save order
```

## 🧠 SOLID Principles

### Single Responsibility Principle

Each class has a specific responsibility.

For example:

- `Order` → manages the order
- `Payment` → handles payment
- `Notification` → sends notifications
- `OrderRepository` → stores orders

### Open/Closed Principle

The system can be extended with new implementations without modifying the existing checkout logic.

For example, a new payment method can be added:

```text
BankTransferPayment
```

without changing `Checkout`.

The same idea applies to discounts and notifications.

## 🚀 Example

```js
const user = new User("Alice", 5);

const order = new Order(user);

order.addProduct(product1);
order.addProduct(product2);
order.addProduct(product3);

const discount = new PercentageDiscount(10);
const payment = new CreditCardPayment();
const notification = new EmailNotification();
const repository = new OrderRepository();

const checkout = new Checkout(
  order,
  discount,
  payment,
  notification,
  repository,
);

checkout.checkout();
```

Example output:

```text
Dear Alice! Your order has been paid successfully. Total: 3330
Payment status: PAID
Here is the list of products: [Laptop,Phone,Keyboard]
```

## 🎯 Goal

The main goal of this project is to practice **OOP, SOLID principles, polymorphism, and dependency injection** by building a small but extensible e-commerce system.

---

Made with JavaScript ☕️
