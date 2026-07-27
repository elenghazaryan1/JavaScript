Array.prototype.myPop = function() {
    const length = this.length;

if(length === 0 || length === undefined) {
    this.length = 0;
    return undefined;
}
const lastIndex = length - 1;
const lastValue = this[lastIndex];

delete this[lastIndex];

this.length == lastIndex;

return lastValue;

};