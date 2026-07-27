Array.prototype.myUnshift = function(...items) {

const O = Object(this);
const length = O.length >>> 0;
const argCount = items.length;

if(argCount > 0) {
    for(let i = length - 1; i >= 0; i--) {
        if(i in O) {
        O[i + argCount] = O[i];
        }
    }
    for(let j = 0; j < argCount; j++) {
        O[j] = items[j];
    }
 }
    const newLength = length + argCount;
    O.length = newLength;

    return newLength;
};