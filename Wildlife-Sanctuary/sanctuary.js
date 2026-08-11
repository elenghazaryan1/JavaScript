class Animal {
  #name;
  #age;
  #energy = 100;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    if (typeof value !== "string") {
      throw new Error("The value must be a string!");
    }
    this.#name = value;
  }

  get age() {
    return this.#age;
  }

  set age(value) {
    if (typeof value !== "number") {
      throw new Error("The value must be a number!");
    }
    this.#age = value;
  }

  get energy() {
    return this.#energy;
  }

  set energy(value) {
    if (typeof value !== "number") {
      throw new Error("The value must be a number!");
    }
    this.#energy = Math.max(0, Math.min(100, value));
  }

  eat(food) {
    if (this.energy <= 80) {
      this.energy += 20;
      return `${this.name} ate a ${food}`;
    } else {
      return `${this.name}'s energy is full, cannot eat`;
    }
  }

  sleep(hours) {
    const oldEnergy = this.energy;
    this.energy += hours * 10;
    return `While sleeping ${this.#name}'s energy restored from ${oldEnergy} to ${this.energy}`;
  }

  getInfo() {
    return `name: ${this.#name}, age: ${this.#age}, energy: ${this.#energy}`;
  }
}

class Predator extends Animal {
  #isHungry = true;
  constructor(name, age) {
    super(name, age);
  }

  get isHungry() {
    return this.#isHungry;
  }

  set isHungry(value) {
    if (typeof value !== "boolean") {
      throw new Error("The value must be a boolean!");
    }
    this.#isHungry = value;
  }

  hunt() {
    this.energy -= 30;
    this.#isHungry = false;

    return `${this.name} went hunting`;
  }

  getInfo() {
    return `name: ${this.name},age: ${this.age}, animal type: Predator, isHungry: ${this.isHungry} `;
  }
}

class Lion extends Predator {
  #prideName;
  constructor(name, age, prideName) {
    super(name, age);
    this.#prideName = prideName;
  }
  get prideName() {
    return this.#prideName;
  }

  set prideName(value) {
    if (typeof value !== "string") {
      throw new Error("The value must be a string!");
    }
    this.#prideName = value;
  }

  roar() {
    console.log("Roar...");
    this.energy -= 10;
  }
  hunt() {
    super.hunt();
    return `${this.name} from ${this.#prideName} pride went hunting`;
  }
}

class Herbivore extends Animal {
  #favoritePlant;

  constructor(name, age, favoritePlant) {
    super(name, age);
    this.#favoritePlant = favoritePlant;
  }
  get favoritePlant() {
    return this.#favoritePlant;
  }
  set favoritePlant(value) {
    if (typeof value !== "string") {
      throw new Error("The value must be a string!");
    }
    this.#favoritePlant = value;
  }

  graze() {
    console.log("Foraging...");
    this.energy -= 10;
    console.log(`Now energy is: ${this.energy}`);
    this.energy += 15;
    return `Grazed successfully. Energy: ${this.energy}`;
  }

  getInfo() {
    return `Status of animal: Herbivore, favorite food: ${this.favoritePlant}`;
  }
}

class Rabbit extends Herbivore {
  #jumpHeight;

  constructor(name, age, favoritePlant, jumpHeight) {
    super(name, age, favoritePlant);
    this.#jumpHeight = jumpHeight;
  }

  get jumpHeight() {
    return this.#jumpHeight;
  }

  set jumpHeight(value) {
    if (typeof value !== "number") {
      throw new Error("The value must be a number!");
    }
    this.#jumpHeight = value;
  }

  jump() {
    this.energy -= 5;
    return `${this.name} is jumping. Energy: ${this.energy}`;
  }

  graze() {
    console.log("Foraging...");
    this.energy -= 5;
    console.log(`Now energy is: ${this.energy}`);
    this.energy += 20;
    return `Grazed successfully. Energy: ${this.energy}`;
  }
}

console.log("\n===== LION =====");

const lion = new Lion("Simba", 2, "Power");
console.log(lion.getInfo());
console.log(lion.hunt());
lion.roar();
console.log("Energy:", lion.energy);

console.log("\n===== RABBIT =====");

const rabbit = new Rabbit("Zayka", 12, "Carrot", 23);
console.log("Jump height:", rabbit.jumpHeight);
console.log(rabbit.jump());
console.log(rabbit.graze());
