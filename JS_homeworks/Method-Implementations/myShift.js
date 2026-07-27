Array.prototype.myShift = function() {
    const length = this.length >>> 0;

    if(length === 0) {
        this.length = 0;
        return undefined;
    }
    const first = this[0];

    for(let i = 1; i < length; i++){
        if(i in this) {
        this[i - 1] = this[i];
        } else {
            delete this[i - 1];
        }
    } 
    
    delete this[length - 1];

    this.length = length - 1;

    return first;
};