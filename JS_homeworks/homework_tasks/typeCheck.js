function getType(value) {
    if (value === null) {
        return "null";
    }

    if (Array.isArray(value)) {
        return "array";
    }

    return typeof value;
}

console.log(getType(null));
console.log(getType([1,2,3,4]));
console.log(getType(undefined));

let ob = {
    age: 12,
};
console.log(getType(ob));