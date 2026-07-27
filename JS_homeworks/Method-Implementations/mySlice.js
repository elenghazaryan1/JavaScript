Array.prototype.mySlice = function(start = 0 , end = this.length) {
    const result = [];
    if(start < 0) {
        start = this.length + start;
    }

    if(end < 0) {
        end = this.length + end;
    }

    if(start < 0) start = 0;
    if(end > this.length) end = this.length;

    for(let i = start; i < end;i++) {
        result[result.length] = this[i];
    }
    return result;
};