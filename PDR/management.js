class Employee {
  #name;
  #baseSalary;

  constructor(name, baseSalary) {
    this.#name = name;
    this.#baseSalary = baseSalary;
  }

  getName() {
    return this.#name;
  }
  getBaseSalary() {
    return `${this.getName()}'s Salary: ${this.#baseSalary}`;
  }
  calculatePay() {
    return `${this.getName()}'s bonus for this month is: ${this.#baseSalary * 1.5}`;
  }
  getProfileInfo() {
    console.log("Profile info:");
    return `name: ${this.#name}, salary: ${this.#baseSalary}`;
  }
}

class Developer extends Employee {
  #mainLanguage;
  #bugsFixed = 0;
  constructor(name, baseSalary, mainLanguage) {
    super(name, baseSalary);
    this.#mainLanguage = mainLanguage;
  }

  writeCode() {
    return `The developer ${this.getName()} is writing in ${this.#mainLanguage}`;
  }

  fixBug() {
    this.#bugsFixed++;
    let name = this.getName();

    return `${name} fixed one bug`;
  }
}

class Manager extends Employee {
  #teamSize;
  #successfulDeals = 0;

  constructor(name, baseSalary, teamSize) {
    super(name, baseSalary);
    this.#teamSize = teamSize;
  }

  conductMeeting() {
    return `${this.getName()} has started a meeting, team size is ${this.#teamSize} `;
  }
  closeDeal() {
    this.#successfulDeals++;
    return `${this.getName()} successfully dealed one time!`;
  }
}

let manager1 = new Manager("Alla", 1500, 24);
let manager2 = new Manager("John", 2000, 14);

let developer1 = new Developer("Alice", 1500, "JS");
let developer2 = new Developer("Simon", 2000, "Java");

console.log(manager1.getName());
console.log(developer1.getName());

console.log(developer2.getBaseSalary());

console.log(manager2.getProfileInfo());

console.log(developer1.fixBug());

console.log(manager1.closeDeal());

console.log(manager2.conductMeeting());

console.log(developer2.calculatePay());
