
function convertBoolean(value) {
    if (value) {
        return true;
    } else {
        return false;
    }
}
console.log(convertBoolean(12));
console.log(convertBoolean("hello"));
console.log(convertBoolean(null));
console.log((convertBoolean(undefined)));