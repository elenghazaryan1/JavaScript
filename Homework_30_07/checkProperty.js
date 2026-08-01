function checkProperty(obj, key) {
  const own = Object.hasOwn(obj, key);

  if (own) {
    return "own";
  }

  if (key in obj) {
    return "inherited";
  }

  return "not found";
}
const animal = { eats: true };

const dog = Object.create(animal);

dog.name = "Rex";

console.log(checkProperty(dog, "name"));

console.log(checkProperty(dog, "eats"));

console.log(checkProperty(dog, "age"));

const obj = Object.create(null);

obj.value = 10;

console.log(checkProperty(obj, "value"));

console.log(checkProperty(obj, "toString"));

console.log(checkProperty({}, "toString"));
