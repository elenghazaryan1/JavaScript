function myNew(Constructor, ...args){
    let newObj = {};
    newObj = Object.create(Constructor.prototype);
    const result = Constructor.call(newObj, ...args)

    if(typeof result === "object" && result !== null) {
        return result;
    }
    return newObj;
}
function User(name) {
 this.name = name;
}

function Car(model) {
 this.model = model;
 return { custom: "returned object" };
}

const user = myNew(User, "Alex");
console.log(user.name);
console.log(Object.getPrototypeOf(user) === User.prototype); 
console.log(user.constructor === User); 

const car = myNew(Car, "BMW");
console.log(car.custom); 
function Empty() {}

const obj = myNew(Empty);
console.log(Object.getPrototypeOf(obj) === Empty.prototype); 

function Test() {
 return 123;
}

const test = myNew(Test);
console.log(Object.getPrototypeOf(test) === Test.prototype); 