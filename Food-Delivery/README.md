# Food Delivery — SOLID Refactoring 🍕

A Food Delivery project refactored according to the **SOLID principles**.

The main goal of the refactoring was to separate responsibilities, reduce dependencies between classes, and make the system easier to extend without modifying existing code.

## Project Structure

The project contains the following main components:

- `User` — stores user information.
- `Restaurant` — manages restaurant information and its menu.
- `Dish` — base class for dishes with different price calculation strategies.
- `Order` — contains order data and domain logic.
- `PaymentService` — abstraction for payment methods.
- `DeliveryService` — abstraction for delivery methods.
- `NotificationService` — abstraction for notification methods.
- `DiscountService` — abstraction for user discount strategies.
- `DiscountFactory` — creates the appropriate discount strategy based on the user type.
- `Database` — abstraction for database operations.
- `OrderService` — coordinates the order creation process using injected services.

## SOLID Principles

### Single Responsibility Principle (SRP)

Each class has one main responsibility.

For example:

- `Order` manages order-related domain logic.
- `CardPaying` handles card payments.
- `CourierDelivery` handles courier delivery.
- `EmailNotification` handles email notifications.
- `MySQLDatabase` handles database operations.

This keeps the classes focused and easier to maintain.

### Open/Closed Principle (OCP)

The system is open for extension but closed for modification.

New implementations can be added without changing the existing `OrderService`.

For example, new payment methods can be created by extending `PaymentService`:

```js
class NewPayment extends PaymentService {
  pay(amount) {
    // payment logic
  }
}
```

The same approach is used for delivery, notifications, discounts, and dishes.

### Liskov Substitution Principle (LSP)

Child classes can be used wherever their parent abstraction is expected.

For example:

- `CardPaying`
- `PaypalPaying`
- `CryptoPaying`
- `CashPaying`

can all be used as payment services.

`CashPaying` does not extend `RefundablePayment` because cash payments do not support the `refund()` operation in this design.

### Interface Segregation Principle (ISP)

Classes should not be forced to depend on methods they do not need.

The payment abstraction is separated into:

- `PaymentService` — provides `pay()`.
- `RefundablePayment` — adds `refund()` for payment methods that support refunds.

Therefore, `CashPaying` only implements the functionality it actually needs.

### Dependency Inversion Principle (DIP)

High-level classes should depend on abstractions rather than concrete implementations.

`OrderService` receives its dependencies through the constructor:

```js
new OrderService(
  database,
  paymentService,
  deliveryService,
  notificationService,
  discountFactory,
);
```

Because of this, `OrderService` does not need to know whether the payment is made by card, PayPal, cryptocurrency, or cash.

The same applies to delivery, notifications, and database implementations.

## Factory Pattern

`DiscountFactory` is used to select the correct discount strategy based on the user's type.

```js
const discounts = {
  regular: RegularUserDiscount,
  vip: VipUserDiscount,
  employee: EmployeeDiscount,
  new_user: NewUserDiscount,
};
```

This allows the discount logic to remain separated from `OrderService`.

## Polymorphism

Different dish types implement their own price calculation:

- `PizzaType`
- `BurgerType`
- `DessertType`

Each class provides its own implementation of `calculatePrice()`.

The order does not need to check the dish type with `if` or `switch`.

## Testing

The final test case verifies:

- Card payment
- Courier delivery
- Email notification
- MySQL database saving
- VIP discount calculation
- Order total calculation
- Order cancellation
- Protection against cancelling delivered orders
- Cash payment
- Drone delivery
- SMS notification
- Dessert price calculation

Example output:

```text
Processing credit card payment: 6997.5
Sending courier...
Sending email to elenn@gmail.com
Saving order ... to MySQL...
Order created. Final price: 6997.5
Order total: 7775
Order status: created
Order status after cancellation: cancelled
Cancellation error: Delivered order cannot be cancelled
Payment will be made with cash: 1000
Sending drone...
Sending SMS to 0(99)-00-00-00
Dessert price: 1600
```

## Result

The original Food Delivery system was refactored into a more modular and extensible design using SOLID principles, polymorphism, dependency injection, and the Factory pattern.
