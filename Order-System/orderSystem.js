class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

class Order {
  constructor(user) {
    this.user = user;
    this.products = [];
    this.paymentStatus = "PENDING";
  }
  addProduct(product) {
    this.products.push(product);
    return `Product added successfully!!`;
  }

  removeProduct(product) {
    for (let i = 0; i < this.products.length; i++) {
      if (product === this.products[i]) {
        this.products[i] = this.products[this.products.length - 1];
        this.products.pop();
      }
    }
  }

  getProducts() {
    return `Here is the list of products: [${this.products.map(
      (product) => product.name,
    )}]`;
  }

  calculateSubtotal() {
    let sum = 0;
    for (let i = 0; i < this.products.length; i++) {
      sum += this.products[i].price;
    }

    return sum;
  }
}

class NoDiscount {
  apply(subtotal) {
    return subtotal;
  }
}

class PercentageDiscount {
  constructor(percentage) {
    this.percentage = percentage;
  }

  apply(subtotal) {
    let finalPrice;

    finalPrice = subtotal - (subtotal * this.percentage) / 100;

    return finalPrice;
  }
}

class FixedAmountDiscount {
  constructor(fixedPrice) {
    this.fixedPrice = fixedPrice;
  }
  apply(subtotal) {
    if (subtotal <= this.fixedPrice) {
      return 0;
    }

    let finalPrice = subtotal - this.fixedPrice;

    return finalPrice;
  }
}

class CreditCardPayment {
  pay(amount) {
    return true;
  }
}

class PaypalPayment {
  pay(amount) {
    return true;
  }
}

class CryptoPayment {
  pay(amount) {
    return true;
  }
}

class EmailNotification {
  send(message) {
    console.log(message);
  }
}

class SMSNotification {
  send(message) {
    console.log(message);
  }
}

class OrderRepository {
  constructor() {
    this.orders = [];
  }
  save(order) {
    this.orders.push(order);
  }
}

class Checkout {
  constructor(order, discount, payment, notification, repository) {
    this.order = order;
    this.discount = discount;
    this.payment = payment;
    this.notification = notification;
    this.repository = repository;
  }

  checkout() {
    if (this.order.products.length === 0) {
      return `Oops, your basket is empty`;
    }

    const subtotal = this.order.calculateSubtotal();

    const finalPrice = this.discount.apply(subtotal);

    const paymentResult = this.payment.pay(finalPrice);
    if (paymentResult === true) {
      this.order.paymentStatus = "PAID";

      this.notification.send(
        `Dear ${this.order.user.name}! Your order has been paid successfully. Total: ${finalPrice}`,
      );
      this.repository.save(this.order);
    }
  }
}

const product1 = new Product(1, "Laptop", 1000);
const product2 = new Product(2, "Phone", 2000);
const product3 = new Product(3, "Keyboard", 700);

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

console.log("Payment status:", order.paymentStatus);
console.log(repository.orders[0].getProducts());
