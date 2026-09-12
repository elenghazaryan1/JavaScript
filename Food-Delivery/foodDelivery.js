// ======= USER =======
class User {
  constructor(id, name, email, phone, address, type) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.type = type;
  }
}

class EmailMessage {
  constructor(user) {
    this.user = user;
  }
  send(message) {
    console.log(`Sending email to ${this.user.email}: ${message}`);
  }
}

class SMSMessage {
  constructor(user) {
    this.user = user;
  }
  send(message) {
    console.log(`Sending SMS to ${this.user.phone}: ${message}`);
  }
}

class GenerateInvoiceReport {
  constructor(user) {
    this.user = user;
  }
  generate() {
    console.log(`Generating profile report for ${this.user.name}`);
  }
}

// ======= RESTAURANT =======
class Restaurant {
  constructor(id, name, address) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.menu = [];
  }

  addDish(dish) {
    this.menu.push(dish);
  }
}
class RemoveDish {
  constructor(restaurant) {
    this.restaurant = restaurant;
  }
  remove(dishId) {
    this.restaurant.menu = this.restaurant.menu.filter(
      (dish) => dish.id !== dishId,
    );
  }
}

class SendEmailToOwner {
  constructor(restaurant) {
    this.restaurant = restaurant;
  }
  send(message) {
    console.log(`Sending email to restaurant owner: ${message}`);
  }
}

// ======= DISH =======
class Dish {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
  calculatePrice() {
    throw new Error("calculatePrice() must be implemented");
  }
}

class BurgerType extends Dish {
  calculatePrice() {
    return this.price * 0.95;
  }
}

class DessertType extends Dish {
  calculatePrice() {
    return this.price * 0.8;
  }
}
class PizzaType extends Dish {
  calculatePrice() {
    return this.price * 0.9;
  }
}

// ======= ORDER =======
class Order {
  constructor(id, user, restaurant) {
    this.id = id;
    this.user = user;
    this.restaurant = restaurant;

    this.items = [];
    this.status = "created";
  }

  addItem(dish, quantity) {
    this.items.push({
      dish,
      quantity,
    });
  }
  calculateTotal() {
    let total = 0;

    for (const item of this.items) {
      total += item.dish.calculatePrice() * item.quantity;
    }

    return total;
  }
  cancel() {
    if (this.status === "delivered") {
      throw new Error("Delivered order cannot be cancelled");
    }
    this.status = "cancelled";
  }
}
// ======= PAYMENT SERVICE =======
class PaymentService {
  pay(amount) {
    throw new Error("pay() must be implemented");
  }
}

class RefundablePayment extends PaymentService {
  refund(amount) {
    throw new Error("refund() must be implemented");
  }
}

class CardPaying extends RefundablePayment {
  pay(amount) {
    console.log(`Processing credit card payment: ${amount}`);
  }
  refund(amount) {
    console.log(`Refunding card: ${amount}`);
  }
}

class PaypalPaying extends RefundablePayment {
  pay(amount) {
    console.log(`Processing PayPal payment: ${amount}`);
  }
  refund(amount) {
    console.log(`Refunding PayPal: ${amount}`);
  }
}
class CryptoPaying extends RefundablePayment {
  pay(amount) {
    console.log(`Processing cryptocurrency payment: ${amount}`);
  }
  refund(amount) {
    console.log(`Refunding crypto: ${amount}`);
  }
}
class CashPaying extends PaymentService {
  pay(amount) {
    console.log(`Payment will be made with cash: ${amount}`);
  }
}

// ======= DELIVERY SERVICE =======
class DeliveryService {
  deliver() {
    throw new Error("deliver() must be implemented");
  }
}
class CourierDelivery extends DeliveryService {
  deliver() {
    console.log("Sending courier...");
  }
}
class PickupDelivery extends DeliveryService {
  deliver() {
    console.log("Order will be picked up from restaurant...");
  }
}
class DroneDelivery extends DeliveryService {
  deliver() {
    console.log("Sending drone...");
  }
}

// ======= NOTIFICATIONS SERVICE =======
class NotificationService {
  sendNotification() {
    throw new Error("sendNotification() must be implemented");
  }
}
class EmailNotification extends NotificationService {
  constructor(user) {
    super();
    this.user = user;
  }
  sendNotification() {
    console.log(`Sending email to ${this.user.email}`);
  }
}
class SMSNotification extends NotificationService {
  constructor(user) {
    super();
    this.user = user;
  }
  sendNotification() {
    console.log(`Sending SMS to ${this.user.phone}`);
  }
}
class PushNotification extends NotificationService {
  constructor(user) {
    super();
    this.user = user;
  }
  sendNotification() {
    console.log(`Sending push notification to ${this.user.phone}`);
  }
}

class GenerateInvoice {
  constructor(order) {
    this.order = order;
  }
  generateInvoice() {
    console.log(`Generating invoice for order ${this.order.id}`);
  }
}

// ======= DISCOUNT SERVICE =======
class DiscountService {
  calculateDiscount(order) {
    throw new Error("calculateDiscount() must be implemented");
  }
}
class RegularUserDiscount extends DiscountService {
  calculateDiscount(order) {
    return 0;
  }
}
class VipUserDiscount extends DiscountService {
  calculateDiscount(order) {
    return order.calculateTotal() * 0.1;
  }
}
class EmployeeDiscount extends DiscountService {
  calculateDiscount(order) {
    return order.calculateTotal() * 0.3;
  }
}
class NewUserDiscount extends DiscountService {
  calculateDiscount(order) {
    return order.calculateTotal() * 0.2;
  }
}

// ======= DATABASE =======
class Database {
  saveUser() {
    throw new Error("saveUser() must be implemented");
  }
  saveRestaurant() {
    throw new Error("saveRestaurant() must be implemented");
  }
  saveOrder() {
    throw new Error("saveOrder() must be implemented");
  }
  saveDish() {
    throw new Error("saveDish() must be implemented");
  }
}
class MySQLDatabase extends Database {
  saveUser(user) {
    console.log(`Saving user ${user.id} to MySQL...`);
  }

  saveRestaurant(restaurant) {
    console.log(`Saving restaurant ${restaurant.id} to MySQL...`);
  }

  saveOrder(order) {
    console.log(`Saving order ${order.id} to MySQL...`);
  }

  saveDish(dish) {
    console.log(`Saving dish ${dish.id} to MySQL...`);
  }
}

// Creates the appropriate discount strategy for the given user type.

const discounts = {
  regular: RegularUserDiscount,
  vip: VipUserDiscount,
  employee: EmployeeDiscount,
  new_user: NewUserDiscount,
};

class DiscountFactory {
  create(userType) {
    const DiscountClass = discounts[userType];
    if (!DiscountClass) {
      throw new Error(`Unknown user type: ${userType}`);
    }

    return new DiscountClass();
  }
}
// Handles the order creation process and coordinates the required services.
class OrderService {
  constructor(
    database,
    paymentService,
    deliveryService,
    notificationService,
    discountFactory,
  ) {
    this.database = database;
    this.paymentService = paymentService;
    this.deliveryService = deliveryService;
    this.notificationService = notificationService;
    this.discountFactory = discountFactory;
  }

  createOrder(user, restaurant, items) {
    const order = new Order(Date.now(), user, restaurant);

    for (const item of items) {
      order.addItem(item.dish, item.quantity);
    }

    const total = order.calculateTotal();
    const discountService = this.discountFactory.create(user.type);
    const discount = discountService.calculateDiscount(order);
    const finalPrice = total - discount;

    this.paymentService.pay(finalPrice);

    this.deliveryService.deliver();
    this.notificationService.sendNotification();

    this.database.saveOrder(order);

    console.log(`Order created. Final price: ${finalPrice}`);

    return order;
  }
}

// ==================== FINAL TEST CASE ====================

const user = new User(
  1,
  "Elen",
  "elenn@gmail.com",
  "0(99)-00-00-00",
  "Yerevan",
  "vip",
);

const restaurant = new Restaurant(1, "Pizza House", "Yerevan");

const pizza = new PizzaType(1, "Margherita", 3000);

const burger = new BurgerType(2, "Classic Burger", 2500);

restaurant.addDish(pizza);
restaurant.addDish(burger);

const database = new MySQLDatabase();
const paymentService = new CardPaying();
const deliveryService = new CourierDelivery();
const notificationService = new EmailNotification(user);
const discountFactory = new DiscountFactory();

const orderService = new OrderService(
  database,
  paymentService,
  deliveryService,
  notificationService,
  discountFactory,
);

const order = orderService.createOrder(user, restaurant, [
  { dish: pizza, quantity: 2 },
  { dish: burger, quantity: 1 },
]);

console.log("Order total:", order.calculateTotal());

console.log("Order status:", order.status);

order.cancel();

console.log("Order status after cancellation:", order.status);

const deliveredOrder = new Order(2, user, restaurant);

deliveredOrder.status = "delivered";

try {
  deliveredOrder.cancel();
} catch (error) {
  console.log("Cancellation error:", error.message);
}

const cashPayment = new CashPaying();
cashPayment.pay(1000);

const droneDelivery = new DroneDelivery();
droneDelivery.deliver();

const smsNotification = new SMSNotification(user);
smsNotification.sendNotification();

const dessert = new DessertType(3, "Chocolate Cake", 2000);

console.log("Dessert price:", dessert.calculatePrice());
