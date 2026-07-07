
function isValidNumber(value) {
    return (typeof value === "number" && !Number.isNaN(value) 
    && Number.isFinite(value) && Number.isSafeInteger(value));
}

console.log(isValidNumber(123));
console.log(isValidNumber(NaN));
console.log(isValidNumber(null));
console.log(isValidNumber(Infinity));