function myInstanceOf(obj, Constructor) {
if( typeof obj !== "object" ||  obj === null) {
    return false;
}
let currentPrototype = Object.getPrototypeOf(obj);

while(currentPrototype){
   if(currentPrototype === Constructor.prototype) {
    return true;
   }
    currentPrototype = Object.getPrototypeOf(currentPrototype);

}
return false;


}
function Animal() {}
function Dog() {}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const dog = new Dog();

console.log(myInstanceOf(dog, Dog)); 
console.log(myInstanceOf(dog, Animal)); 
console.log(myInstanceOf(dog, Array)); 
