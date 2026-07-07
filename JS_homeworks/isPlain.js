
function isPlainObject(value) {
    return (
        typeof value === "object" &&  value !== null && !Array.isArray(value)
    );
}

console.log(isPlainObject(null));
console.log(isPlainObject({}));
console.log(isPlainObject([1,2,3,4]));
