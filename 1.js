function isFalse(val) {
    if(!val) {
         return true;
    }
    return false;
    
}

console.log(isFalse(null));
console.log(isFalse(0));
console.log(isFalse(''));
console.log(isFalse(NaN));
console.log(isFalse(false));


