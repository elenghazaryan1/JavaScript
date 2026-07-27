Array.prototype.myMap = function(callback,thisArgs) {
    const result = [];

    for(let i = 0; i < this.length; i++) {
        if(i in this) {
        result[i] = callback(thisArgs,this[i], i, this);
    }
}
    return result;
};