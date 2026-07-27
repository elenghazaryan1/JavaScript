Array.prototype.mySplice = function(start,deleteCount,...items) {
    const removed = [];

    if(start < 0) {
        start = this.length + start;
    }
    if(start < 0) start = 0;
    if(start > this.length) start = this.length;

    if(deleteCount === undefined) {
        deleteCount = this.length - start;
    }
    for(let i = 0; i < this.length ; i++) {
        removed[i] = this[start + i];
    }

    const diff = items.length - deleteCount;

    if(diff > 0) {
        for(let i = this.length - 1; i >= start + deleteCount; i--) {
            this[i + diff] = this[i];
        }
    } else if(diff < 0) {
        for( let i = start + deleteCount; i < this.length; i++) {
            this[i + diff] = this[i];

        }
        this.length += diff;
    }
    for(let i = 0; i < items.length; i++) {
        this[start + i] = items[i];
    }
    if(diff > 0) {
        this.length += diff;

    }
    return removed;
};
