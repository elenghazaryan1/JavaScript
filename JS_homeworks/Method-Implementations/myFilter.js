Array.prototype.myFilter =  function(callback,thisArg) {
    const result = [];

    for(let i = 0; i < this.length; i++) {
        if(callback(thisArg,this[i], i , this)) {
            result.push(this[i]);
        }
    }
    return result;
};