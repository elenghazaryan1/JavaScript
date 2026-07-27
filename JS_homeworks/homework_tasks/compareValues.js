
function compareValues(a, b) {
    return {
        loose: a == b,
        strict: a === b
    };
}

console.log(compareValues(2,2));
console.log(compareValues(null,null));
console.log(compareValues(NaN,NaN));

